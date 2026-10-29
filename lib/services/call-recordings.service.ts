import { apiFetch } from "@/lib/api-client";

export interface RecordingActionPermissions {
  can_play: boolean;
  can_export: boolean;
  can_retry: boolean;
  can_delete: boolean;
  can_download?: boolean;
}

export interface RecordingItem {
  id: string;
  call_id: string;
  campaign_id?: string | null;
  campaign_name: string;
  customer_name: string;
  customer_phone: string;
  call_direction: string;
  started_at?: string | null;
  call_duration: number;
  recording_format: string;
  recording_size?: number | null;
  recording_created_at?: string | null;
  expires_at?: string | null;
  is_expiring_soon: boolean;
  is_expired: boolean;
  time_until_expiry_seconds?: number | null;
  recording_status: string; // available | expiring_soon | expired | deleted
  backup_status: string; // NOT_BACKED_UP | QUEUED | UPLOADING | BACKED_UP | FAILED | EXPIRED
  google_drive_file_id?: string | null;
  google_drive_folder_id?: string | null;
  google_drive_file_url?: string | null;
  backup_completed_at?: string | null;
  backup_error?: string | null;
  stream_url: string;
  download_url?: string;
  actions: RecordingActionPermissions;
}

export interface RecordingsSummary {
  total_recordings: number;
  available_originals: number;
  backed_up: number;
  expiring_soon: number;
}

export interface RecordingsResponse {
  items: RecordingItem[];
  summary: RecordingsSummary;
  total: number;
  page: number;
  page_size: number;
  total_pages: number;
}

export interface RecordingsFilterParams {
  campaign_id?: string;
  direction?: string;
  status?: string;
  backup_status?: string;
  expiring_soon?: boolean;
  date_from?: string;
  date_to?: string;
  search?: string;
  page?: number;
  page_size?: number;
}

export interface GoogleDriveStatus {
  connected: boolean;
  email?: string | null;
  folder_id?: string | null;
  folder_name: string;
}

export interface CampaignOption {
  id: string;
  name: string;
}

export const callRecordingsService = {
  /**
   * Fetches campaign-wise call recordings with filtering and summary metrics.
   */
  async getRecordings(params: RecordingsFilterParams = {}): Promise<RecordingsResponse> {
    const query = new URLSearchParams();
    if (params.campaign_id && params.campaign_id !== "all") query.set("campaign_id", params.campaign_id);
    if (params.direction && params.direction !== "all") query.set("direction", params.direction);
    if (params.status && params.status !== "all") query.set("status", params.status);
    if (params.backup_status && params.backup_status !== "all") query.set("backup_status", params.backup_status);
    if (params.expiring_soon !== undefined) query.set("expiring_soon", String(params.expiring_soon));
    if (params.date_from) query.set("date_from", params.date_from);
    if (params.date_to) query.set("date_to", params.date_to);
    if (params.search) query.set("search", params.search);
    if (params.page) query.set("page", String(params.page));
    if (params.page_size) query.set("page_size", String(params.page_size));

    const qs = query.toString();
    const endpoint = `/api/reports/call-recordings${qs ? `?${qs}` : ""}`;
    return apiFetch<RecordingsResponse>(endpoint);
  },

  /**
   * Fetches single recording details.
   */
  async getRecordingDetail(recordingId: string): Promise<RecordingItem> {
    return apiFetch<RecordingItem>(`/api/reports/call-recordings/${recordingId}`);
  },

  /**
   * Permanently deletes original recording from storage while preserving Google Drive backup.
   */
  async deleteRecording(recordingId: string): Promise<{ success: boolean; message: string; backup_preserved: boolean }> {
    return apiFetch<{ success: boolean; message: string; backup_preserved: boolean }>(
      `/api/reports/call-recordings/${recordingId}`,
      { method: "DELETE" }
    );
  },

  /**
   * Exports a single recording to Google Drive.
   */
  async exportSingleToDrive(
    recordingId: string,
    destinationFolderId?: string
  ): Promise<{ success: boolean; message: string; google_drive_file_url?: string; backup_status: string }> {
    return apiFetch(`/api/reports/call-recordings/${recordingId}/export-drive`, {
      method: "POST",
      body: JSON.stringify({ destination_folder_id: destinationFolderId || null }),
    });
  },

  /**
   * Batch exports all unbacked eligible recordings in a campaign.
   */
  async exportCampaignRecordings(
    campaignId: string,
    destinationFolderId?: string
  ): Promise<{
    success: boolean;
    campaign_id: string;
    campaign_name: string;
    total_eligible: number;
    exported_count: number;
    failed_count: number;
    message?: string;
  }> {
    return apiFetch(`/api/reports/campaigns/${campaignId}/export-recordings`, {
      method: "POST",
      body: JSON.stringify({ destination_folder_id: destinationFolderId || null }),
    });
  },

  /**
   * Checks backup status for a recording.
   */
  async getBackupStatus(recordingId: string): Promise<{
    recording_id: string;
    backup_status: string;
    google_drive_file_id?: string;
    google_drive_file_url?: string;
    backup_completed_at?: string;
    backup_error?: string;
  }> {
    return apiFetch(`/api/reports/call-recordings/${recordingId}/backup-status`);
  },

  /**
   * Retries failed Google Drive export.
   */
  async retryBackup(recordingId: string, destinationFolderId?: string) {
    return apiFetch(`/api/reports/call-recordings/${recordingId}/retry-backup`, {
      method: "POST",
      body: JSON.stringify({ destination_folder_id: destinationFolderId || null }),
    });
  },

  /**
   * Returns Google Drive connection status.
   */
  async getGoogleDriveStatus(): Promise<GoogleDriveStatus> {
    return apiFetch<GoogleDriveStatus>(`/api/reports/google-drive/status`);
  },

  /**
   * Fetches OAuth authorization URL to initiate Drive consent flow.
   * Preserves originating page route securely in OAuth state.
   */
  async getGoogleDriveAuthUrl(returnUrl?: string): Promise<string> {
    const qs = returnUrl ? `?return_url=${encodeURIComponent(returnUrl)}` : "";
    const res = await apiFetch<{ auth_url: string }>(`/api/reports/google-drive/auth-url${qs}`);
    return res.auth_url;
  },

  /**
   * Disconnects Google Drive integration.
   */
  async disconnectGoogleDrive(): Promise<{ success: boolean; message: string }> {
    return apiFetch<{ success: boolean; message: string }>(`/api/reports/google-drive/disconnect`, {
      method: "POST",
    });
  },

  /**
   * Helper to retrieve campaigns for dropdown selector.
   */
  async getCampaigns(): Promise<CampaignOption[]> {
    try {
      const res = await apiFetch<any>(`/api/campaigns`);
      if (Array.isArray(res)) {
        return res.map((c) => ({ id: c.id, name: c.name }));
      }
      if (res && Array.isArray(res.items)) {
        return res.items.map((c: any) => ({ id: c.id, name: c.name }));
      }
      return [];
    } catch (e) {
      console.warn("Could not load campaigns for dropdown, using fallback", e);
      return [];
    }
  },
};

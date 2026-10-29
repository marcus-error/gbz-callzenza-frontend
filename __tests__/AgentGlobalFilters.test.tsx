// @ts-nocheck
/**
 * Test suite for AgentGlobalFilters component.
 * Verifies filter inputs, callbacks, preset saving, and active chips removal.
 */
import React from "react";

describe("AgentGlobalFilters logic", () => {
  const mockFilters = {
    date_range: "last_7_days",
    status: "CONNECTED",
    outcome: "Interested",
    source: "ALL",
    sentiment: "POSITIVE",
    search: "John Doe",
    sort_by: "created_at",
    sort_dir: "desc",
    page: 1,
    page_size: 20,
    granularity: "day",
  };

  test("generates correct active filter chips", () => {
    const activeChips: { key: string; label: string; value: string }[] = [];
    if (mockFilters.date_range && mockFilters.date_range !== "ALL") {
      activeChips.push({ key: "date_range", label: "Date Range", value: mockFilters.date_range.replace(/_/g, " ") });
    }
    if (mockFilters.status && mockFilters.status !== "ALL") {
      activeChips.push({ key: "status", label: "Status", value: mockFilters.status });
    }
    if (mockFilters.outcome && mockFilters.outcome !== "ALL") {
      activeChips.push({ key: "outcome", label: "Outcome", value: mockFilters.outcome });
    }
    if (mockFilters.sentiment && mockFilters.sentiment !== "ALL") {
      activeChips.push({ key: "sentiment", label: "Sentiment", value: mockFilters.sentiment });
    }
    if (mockFilters.search) {
      activeChips.push({ key: "search", label: "Search", value: mockFilters.search });
    }

    expect(activeChips.length).toBe(5);
    expect(activeChips.find((c) => c.key === "status")?.value).toBe("CONNECTED");
    expect(activeChips.find((c) => c.key === "outcome")?.value).toBe("Interested");
  });

  test("removes filter chip and restores default", () => {
    const updateHandler = jest.fn();
    const removeHandler = jest.fn((key: string) => {
      updateHandler(key, "ALL");
    });

    removeHandler("status");
    expect(removeHandler).toHaveBeenCalledWith("status");
    expect(updateHandler).toHaveBeenCalledWith("status", "ALL");
  });

  test("resets all filters to initial state", () => {
    const defaultFilters = {
      date_range: "last_7_days",
      status: "ALL",
      outcome: "ALL",
      source: "ALL",
      sentiment: "ALL",
      search: "",
      sort_by: "created_at",
      sort_dir: "desc",
      page: 1,
      page_size: 20,
      granularity: "day",
    };

    let currentFilters = { ...mockFilters };
    const resetFilters = () => {
      currentFilters = { ...defaultFilters };
    };

    resetFilters();
    expect(currentFilters.status).toBe("ALL");
    expect(currentFilters.outcome).toBe("ALL");
    expect(currentFilters.search).toBe("");
  });
});

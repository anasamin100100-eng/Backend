import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Search, Download, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { AdminTopbar } from "@/components/admin/AdminTopbar";

export const Route = createFileRoute("/workers")({
  component: WorkersPage,
  head: () => ({
    meta: [
      { title: "Workers — UstadGo Admin" },
      {
        name: "description",
        content:
          "Manage and verify UstadGo workers across Pakistan: search, filter and export worker records.",
      },
    ],
  }),
});

type Worker = {
  id: string;
  name: string;
  email: string;
  initials: string;
  initialsBg: string;
  service: string;
  serviceClass: string;
  city: string;
  rating: number;
  totalJobs: number;
  reliability: number;
};

const workers: Worker[] = [
  {
    id: "#UG-9921",
    name: "Ali Hassan",
    email: "ali.hassan@example.com",
    initials: "AH",
    initialsBg: "bg-brand/15 text-brand",
    service: "ELECTRICIAN",
    serviceClass: "bg-brand/10 text-brand",
    city: "Lahore",
    rating: 4.9,
    totalJobs: 142,
    reliability: 98,
  },
  {
    id: "#UG-8842",
    name: "Muhammad Usman",
    email: "m.usman@outlook.com",
    initials: "MU",
    initialsBg: "bg-amber-100 text-amber-700",
    service: "CARPENTER",
    serviceClass: "bg-amber-100 text-amber-700",
    city: "Karachi",
    rating: 4.2,
    totalJobs: 28,
    reliability: 72,
  },
  {
    id: "#UG-7715",
    name: "Fatima Malik",
    email: "fatima.malik@work.pk",
    initials: "FM",
    initialsBg: "bg-rose-100 text-rose-700",
    service: "HOME TUTOR",
    serviceClass: "bg-violet-100 text-violet-700",
    city: "Islamabad",
    rating: 5.0,
    totalJobs: 214,
    reliability: 99,
  },
];

const tabs = ["All", "Pending Verification", "Verified", "Rejected"] as const;

function WorkersPage() {
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]>("All");

  return (
    <div className="min-h-screen bg-surface-muted flex">
      <AdminSidebar active="Workers" />

      <div className="flex-1 flex flex-col min-w-0">
        <AdminTopbar>
          <nav className="flex items-center gap-2 text-sm">
            <Link
              to="/dashboard"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Admin Portal
            </Link>
            <ChevronRight className="size-4 text-muted-foreground" />
            <span className="font-semibold text-brand">Workers</span>
          </nav>
        </AdminTopbar>

        <main className="flex-1 px-6 lg:px-10 py-8 space-y-6">
          {/* Filters bar */}
          <div className="flex flex-col lg:flex-row lg:items-center gap-4">
            <div className="flex items-center gap-1 p-1 bg-background rounded-2xl border border-border shadow-sm">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                    activeTab === tab
                      ? "bg-gradient-to-br from-brand to-brand-light text-brand-foreground shadow-md"
                      : "text-foreground/70 hover:text-foreground"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="flex-1 relative max-w-xl">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
              <input
                type="search"
                placeholder="Search workers by name, ID or city..."
                className="w-full h-12 pl-11 pr-4 rounded-2xl bg-background border border-border text-sm focus:outline-none focus:border-brand transition-all shadow-sm"
              />
            </div>

            <button className="h-12 px-5 rounded-2xl bg-background border border-border text-sm font-semibold text-foreground hover:bg-surface-muted transition-colors flex items-center gap-2 shadow-sm">
              <Download className="size-4" />
              Export CSV
            </button>
          </div>

          {/* Table card */}
          <div className="bg-background rounded-3xl border border-border shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-muted/60 text-[11px] uppercase tracking-wider text-muted-foreground">
                    <th className="px-6 py-4 text-left w-10">
                      <input
                        type="checkbox"
                        className="rounded border-border accent-brand"
                      />
                    </th>
                    <th className="px-2 py-4 text-left font-semibold">
                      Worker ID
                    </th>
                    <th className="px-4 py-4 text-left font-semibold">
                      Name & Photo
                    </th>
                    <th className="px-4 py-4 text-left font-semibold">
                      Service
                    </th>
                    <th className="px-4 py-4 text-left font-semibold">City</th>
                    <th className="px-4 py-4 text-left font-semibold">
                      Rating
                    </th>
                    <th className="px-4 py-4 text-left font-semibold">
                      Total Jobs
                    </th>
                    <th className="px-6 py-4 text-left font-semibold">
                      Reliability
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {workers.map((w) => (
                    <tr
                      key={w.id}
                      className="border-t border-border hover:bg-surface-muted/40 transition-colors"
                    >
                      <td className="px-6 py-5">
                        <input
                          type="checkbox"
                          className="rounded border-border accent-brand"
                        />
                      </td>
                      <td className="px-2 py-5 font-medium text-foreground/80">
                        {w.id}
                      </td>
                      <td className="px-4 py-5">
                        <div className="flex items-center gap-3">
                          <div
                            className={`size-10 rounded-full flex items-center justify-center font-bold text-sm ${w.initialsBg}`}
                          >
                            {w.initials}
                          </div>
                          <div>
                            <p className="font-bold text-foreground">
                              {w.name}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              {w.email}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-5">
                        <span
                          className={`inline-flex items-center px-3 py-1.5 rounded-full text-[11px] font-bold tracking-wide ${w.serviceClass}`}
                        >
                          {w.service}
                        </span>
                      </td>
                      <td className="px-4 py-5 text-foreground/80">{w.city}</td>
                      <td className="px-4 py-5">
                        <div className="flex items-center gap-1.5">
                          <Star className="size-4 fill-amber-400 text-amber-400" />
                          <span className="font-semibold text-foreground">
                            {w.rating.toFixed(1)}
                          </span>
                        </div>
                      </td>
                      <td className="px-4 py-5 font-semibold text-foreground">
                        {w.totalJobs}
                      </td>
                      <td className="px-6 py-5 w-48">
                        <div className="flex items-center gap-3">
                          <div className="flex-1 h-2 bg-surface-muted rounded-full overflow-hidden">
                            <div
                              className="h-full rounded-full bg-gradient-to-r from-brand to-brand-light"
                              style={{ width: `${w.reliability}%` }}
                            />
                          </div>
                          <span className="text-xs font-bold text-brand min-w-[2.5rem] text-right">
                            {w.reliability}%
                          </span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-6 py-5 border-t border-border">
              <p className="text-sm text-muted-foreground">
                Showing <span className="font-bold text-foreground">1-10</span>{" "}
                of <span className="font-bold text-foreground">2,482</span>{" "}
                workers
              </p>
              <div className="flex items-center gap-1">
                <button className="size-9 rounded-lg flex items-center justify-center text-foreground/60 hover:bg-surface-muted transition-colors">
                  <ChevronLeft className="size-4" />
                </button>
                {[1, 2, 3].map((p) => (
                  <button
                    key={p}
                    className={`size-9 rounded-lg text-sm font-semibold transition-colors ${
                      p === 1
                        ? "bg-brand text-brand-foreground shadow-md"
                        : "text-foreground/70 hover:bg-surface-muted"
                    }`}
                  >
                    {p}
                  </button>
                ))}
                <span className="px-2 text-muted-foreground">…</span>
                <button className="size-9 rounded-lg text-sm font-semibold text-foreground/70 hover:bg-surface-muted transition-colors">
                  249
                </button>
                <button className="size-9 rounded-lg flex items-center justify-center text-foreground/60 hover:bg-surface-muted transition-colors">
                  <ChevronRight className="size-4" />
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

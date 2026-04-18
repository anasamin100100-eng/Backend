import { createFileRoute } from "@tanstack/react-router";
import {
  Plus,
  Minus,
  Crosshair,
  Search,
  Filter,
  Phone,
  Zap,
  Wrench,
  Snowflake,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { AdminTopbar } from "@/components/admin/AdminTopbar";

export const Route = createFileRoute("/active-jobs")({
  component: ActiveJobsPage,
  head: () => ({
    meta: [
      { title: "Active Jobs — UstadGo Admin" },
      {
        name: "description",
        content:
          "Live status of UstadGo service requests across the region with worker locations, ETA countdowns, and job statuses.",
      },
    ],
  }),
});

type JobStatus = "WORKER ON WAY" | "IN PROGRESS";

interface Job {
  id: string;
  service: string;
  icon: typeof Zap;
  area: string;
  worker: string;
  initials: string;
  lat: string;
  lng: string;
  eta: string;
  status: JobStatus;
}

const jobs: Job[] = [
  {
    id: "#JOB-8842",
    service: "Electrical Repair",
    icon: Zap,
    area: "DHA Phase 6, Karachi",
    worker: "Ahmed Khan",
    initials: "AK",
    lat: "24.8213°N",
    lng: "67.0673°E",
    eta: "08:42 mins",
    status: "WORKER ON WAY",
  },
  {
    id: "#JOB-8839",
    service: "Pipe Maintenance",
    icon: Wrench,
    area: "Gulshan-e-Iqbal, Karachi",
    worker: "Mohammad Raza",
    initials: "MR",
    lat: "24.9181°N",
    lng: "67.0971°E",
    eta: "Arrived",
    status: "IN PROGRESS",
  },
  {
    id: "#JOB-8845",
    service: "AC Installation",
    icon: Snowflake,
    area: "Clifton Block 4, Karachi",
    worker: "Saleem Khan",
    initials: "SK",
    lat: "24.8138°N",
    lng: "67.0315°E",
    eta: "14:15 mins",
    status: "WORKER ON WAY",
  },
];

function ActiveJobsPage() {
  return (
    <div className="flex min-h-screen bg-surface-muted">
      <AdminSidebar active="Active Jobs" />
      <div className="flex-1 flex flex-col">
        <AdminTopbar>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold text-foreground">Active Jobs</h1>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-[11px] font-bold">
              <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
              LIVE
            </span>
            <div className="ml-6 hidden md:flex items-center gap-3 px-4 py-2 rounded-xl bg-card border border-border">
              <span className="text-sm font-medium text-foreground">
                Auto-Refresh (30s)
              </span>
              <button className="relative w-10 h-5 rounded-full bg-brand">
                <span className="absolute right-0.5 top-0.5 size-4 rounded-full bg-white" />
              </button>
            </div>
          </div>
        </AdminTopbar>

        <main className="flex-1 px-6 lg:px-10 py-6 space-y-6">
          {/* Map */}
          <div className="relative rounded-2xl overflow-hidden border border-border h-[420px] bg-slate-900">
            <div
              className="absolute inset-0 opacity-90"
              style={{
                backgroundImage:
                  "radial-gradient(ellipse at 30% 40%, oklch(0.45 0.15 240) 0%, oklch(0.18 0.05 260) 60%), repeating-linear-gradient(45deg, transparent 0 12px, oklch(0.55 0.18 235 / 0.18) 12px 13px), repeating-linear-gradient(-45deg, transparent 0 16px, oklch(0.7 0.18 60 / 0.12) 16px 17px)",
              }}
            />
            {/* job pins */}
            <div className="absolute top-[45%] left-[50%] size-3 rounded-full bg-orange-500 ring-4 ring-orange-500/30" />
            <div className="absolute top-[55%] left-[45%] size-3 rounded-full bg-orange-500 ring-4 ring-orange-500/30" />
            <div className="absolute top-[35%] left-[35%] size-2 rounded-full bg-amber-400" />
            <div className="absolute top-[60%] left-[60%] size-2 rounded-full bg-amber-400" />

            {/* Live fleet stats card */}
            <div className="absolute top-6 left-6 bg-card/95 backdrop-blur rounded-xl px-6 py-4 border border-border">
              <p className="text-[11px] font-bold tracking-widest text-muted-foreground">
                LIVE FLEET STATS
              </p>
              <div className="flex gap-8 mt-3">
                <div>
                  <p className="text-3xl font-bold text-brand">124</p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Active Ustads
                  </p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-orange-500">48</p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Pending Jobs
                  </p>
                </div>
              </div>
            </div>

            {/* Map controls */}
            <div className="absolute bottom-6 right-6 flex flex-col gap-2">
              <button className="size-10 rounded-lg bg-card border border-border flex items-center justify-center hover:bg-surface-muted transition-colors">
                <Plus className="size-4" />
              </button>
              <button className="size-10 rounded-lg bg-card border border-border flex items-center justify-center hover:bg-surface-muted transition-colors">
                <Minus className="size-4" />
              </button>
              <button className="size-10 rounded-lg bg-brand text-brand-foreground flex items-center justify-center">
                <Crosshair className="size-4" />
              </button>
            </div>
          </div>

          {/* Currently Active Jobs */}
          <div className="bg-card rounded-2xl border border-border p-6">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <div>
                <h2 className="text-xl font-bold text-foreground">
                  Currently Active Jobs
                </h2>
                <p className="text-sm text-muted-foreground mt-1">
                  Real-time status of service requests across the region.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                  <input
                    placeholder="Search Worker or ID..."
                    className="pl-10 pr-4 py-2.5 rounded-xl border border-border bg-background text-sm w-64"
                  />
                </div>
                <button className="flex items-center gap-2 px-4 py-2.5 border border-border rounded-xl text-sm font-medium hover:bg-surface-muted transition-colors">
                  <Filter className="size-4" />
                  Filter
                </button>
              </div>
            </div>

            <div className="mt-6 overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    {[
                      "JOB ID",
                      "SERVICE",
                      "CLIENT AREA",
                      "WORKER NAME",
                      "LIVE LOCATION",
                      "ETA COUNTDOWN",
                      "STATUS",
                      "ACTION",
                    ].map((h) => (
                      <th
                        key={h}
                        className="text-left px-3 py-4 text-[11px] font-bold tracking-wider text-muted-foreground"
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {jobs.map((j, idx) => {
                    const Icon = j.icon;
                    return (
                      <tr
                        key={j.id}
                        className={`border-b border-border last:border-0 ${
                          idx === 0 ? "bg-orange-50/50" : ""
                        }`}
                      >
                        <td className="px-3 py-5">
                          <div className="flex items-center gap-3">
                            {idx === 0 && (
                              <span className="w-1 h-10 rounded bg-orange-500" />
                            )}
                            <span className="text-sm font-bold text-brand">
                              {j.id}
                            </span>
                          </div>
                        </td>
                        <td className="px-3 py-5">
                          <div className="flex items-center gap-2">
                            <Icon className="size-4 text-orange-500" />
                            <span className="text-sm text-foreground">
                              {j.service}
                            </span>
                          </div>
                        </td>
                        <td className="px-3 py-5 text-sm text-foreground/80">
                          {j.area}
                        </td>
                        <td className="px-3 py-5">
                          <div className="flex items-center gap-3">
                            <div className="size-9 rounded-full bg-brand/20 flex items-center justify-center text-brand font-bold text-xs">
                              {j.initials}
                            </div>
                            <span className="text-sm font-semibold text-foreground">
                              {j.worker}
                            </span>
                          </div>
                        </td>
                        <td className="px-3 py-5 text-xs text-foreground/70">
                          <p>{j.lat},</p>
                          <p>{j.lng}</p>
                        </td>
                        <td className="px-3 py-5">
                          <span
                            className={`text-sm font-bold ${
                              j.eta === "Arrived"
                                ? "text-foreground italic"
                                : "text-orange-500"
                            }`}
                          >
                            {j.eta}
                          </span>
                        </td>
                        <td className="px-3 py-5">
                          <span
                            className={`inline-flex px-3 py-1.5 rounded-full text-[10px] font-bold tracking-wide ${
                              j.status === "IN PROGRESS"
                                ? "bg-blue-100 text-blue-700"
                                : "bg-orange-100 text-orange-700"
                            }`}
                          >
                            {j.status}
                          </span>
                        </td>
                        <td className="px-3 py-5">
                          <button className="size-9 rounded-full bg-brand/10 hover:bg-brand/20 flex items-center justify-center text-brand transition-colors">
                            <Phone className="size-4" />
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div className="flex items-center justify-between mt-6 pt-4 border-t border-border">
              <p className="text-[11px] font-bold tracking-widest text-muted-foreground">
                LAST UPDATED AT 2:45:12 PM PKT
              </p>
              <div className="flex items-center gap-3">
                <p className="text-sm text-muted-foreground">
                  Showing 3 of 42 active jobs
                </p>
                <button className="size-9 rounded-lg border border-border flex items-center justify-center hover:bg-surface-muted">
                  <ChevronLeft className="size-4" />
                </button>
                <button className="size-9 rounded-lg bg-brand text-brand-foreground font-semibold text-sm">
                  1
                </button>
                <button className="size-9 rounded-lg border border-border flex items-center justify-center hover:bg-surface-muted">
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

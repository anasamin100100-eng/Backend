import { createFileRoute } from "@tanstack/react-router";
import {
  Search,
  Plus,
  Zap,
  Wrench,
  Hammer,
  Brush,
  Sparkles,
} from "lucide-react";
import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { AdminTopbar } from "@/components/admin/AdminTopbar";
import {
  BarChart,
  Bar,
  XAxis,
  ResponsiveContainer,
  Cell,
} from "recharts";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "Services — UstadGo Admin" },
      {
        name: "description",
        content:
          "Manage UstadGo service categories, worker distribution, and market demand across Pakistan.",
      },
    ],
  }),
});

const services = [
  { name: "Electrician", category: "MAIN MAINTENANCE", workers: 142, jobs: 38, icon: Zap, tone: "text-brand bg-brand/10", jobsTone: "text-brand" },
  { name: "Plumber", category: "MAIN MAINTENANCE", workers: 98, jobs: 12, icon: Wrench, tone: "text-cyan-600 bg-cyan-500/10", jobsTone: "text-cyan-600" },
  { name: "Carpenter", category: "FURNITURE & WOOD", workers: 64, jobs: 21, icon: Hammer, tone: "text-amber-600 bg-amber-500/10", jobsTone: "text-amber-600" },
  { name: "Painter", category: "HOME RENOVATION", workers: 45, jobs: 7, icon: Brush, tone: "text-violet-600 bg-violet-500/10", jobsTone: "text-violet-600" },
  { name: "House Keeping", category: "SANITATION", workers: 210, jobs: 89, icon: Sparkles, tone: "text-rose-600 bg-rose-500/10", jobsTone: "text-rose-600" },
];

const distribution = [
  { name: "Elec", v: 80, color: "hsl(217, 91%, 60%)" },
  { name: "Plumb", v: 65, color: "hsl(189, 85%, 50%)" },
  { name: "Carp", v: 45, color: "hsl(38, 92%, 55%)" },
  { name: "Paint", v: 35, color: "hsl(160, 70%, 45%)" },
  { name: "House", v: 95, color: "hsl(346, 80%, 55%)" },
  { name: "Tech", v: 50, color: "hsl(262, 70%, 60%)" },
  { name: "Edu", v: 30, color: "hsl(220, 15%, 70%)" },
  { name: "Misc", v: 28, color: "hsl(220, 15%, 75%)" },
];

function ServicesPage() {
  return (
    <div className="min-h-screen flex bg-surface-muted">
      <AdminSidebar active="Services" />
      <div className="flex-1 min-w-0 flex flex-col">
        <AdminTopbar>
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search services..."
              className="w-full bg-surface-muted border border-border rounded-full pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand/30"
            />
          </div>
        </AdminTopbar>

        <main className="flex-1 px-6 lg:px-10 py-8 space-y-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm text-muted-foreground">
                Admin Portal <span className="text-brand font-semibold">› Services</span>
              </p>
              <h1 className="text-3xl font-bold tracking-tight mt-1">
                Services Management
              </h1>
              <p className="text-muted-foreground mt-1">
                Overview of available vocational services and their current
                workload across Pakistan.
              </p>
            </div>
            <button className="flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-brand to-brand-light text-brand-foreground text-sm font-semibold shadow-lg">
              <Plus className="size-4" /> Add New Service
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.name}
                  className="bg-background rounded-2xl p-5 border border-border hover:shadow-md transition-shadow"
                >
                  <div className={`size-12 rounded-full flex items-center justify-center ${s.tone}`}>
                    <Icon className="size-5" />
                  </div>
                  <h3 className="mt-4 font-bold text-lg">{s.name}</h3>
                  <p className="text-[10px] tracking-widest font-semibold text-muted-foreground mt-1">
                    {s.category}
                  </p>
                  <div className="mt-5 flex items-end justify-between">
                    <div>
                      <p className="text-2xl font-bold">{s.workers}</p>
                      <p className="text-[10px] tracking-widest font-semibold text-muted-foreground">
                        WORKERS
                      </p>
                    </div>
                    <div className="text-right">
                      <p className={`text-2xl font-bold ${s.jobsTone}`}>
                        {String(s.jobs).padStart(2, "0")}
                      </p>
                      <p className="text-[10px] tracking-widest font-semibold text-muted-foreground">
                        ACTIVE JOBS
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-background rounded-2xl p-6 border border-border">
              <h3 className="text-lg font-bold">Worker Distribution Trends</h3>
              <p className="text-sm text-muted-foreground">
                Active worker count across service categories
              </p>
              <div className="h-64 mt-6">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={distribution}>
                    <XAxis
                      dataKey="name"
                      axisLine={false}
                      tickLine={false}
                      tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }}
                    />
                    <Bar dataKey="v" radius={[12, 12, 12, 12]}>
                      {distribution.map((b, i) => (
                        <Cell key={i} fill={b.color} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-background rounded-2xl p-6 border border-border space-y-5">
              <div>
                <h3 className="text-lg font-bold">Market Status</h3>
                <p className="text-sm text-muted-foreground">
                  Live demand & revenue
                </p>
              </div>

              <div className="rounded-2xl bg-emerald-500/10 px-4 py-3">
                <p className="text-sm font-semibold text-emerald-700">
                  High Demand Period
                </p>
                <p className="text-xs text-emerald-700/80 mt-0.5">
                  Sanitation services trending up
                </p>
              </div>

              <div className="rounded-2xl border border-border p-5">
                <p className="text-3xl font-bold">Rs. 2.4M</p>
                <p className="text-[10px] tracking-widest font-semibold text-muted-foreground mt-1">
                  MONTHLY SERVICE REVENUE
                </p>
                <p className="text-sm font-semibold text-emerald-600 mt-3">
                  ▲ 12.5% vs Last Month
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

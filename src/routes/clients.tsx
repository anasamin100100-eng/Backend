import { createFileRoute } from "@tanstack/react-router";
import { Search, Filter, Plus, ChevronLeft, ChevronRight } from "lucide-react";
import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { AdminTopbar } from "@/components/admin/AdminTopbar";

export const Route = createFileRoute("/clients")({
  component: ClientsPage,
  head: () => ({
    meta: [
      { title: "All Clients — UstadGo Admin" },
      {
        name: "description",
        content:
          "Manage UstadGo clients: view profiles, jobs booked, total spent, and account status across Pakistan.",
      },
    ],
  }),
});

type ClientStatus = "Active" | "Suspended";

interface Client {
  id: string;
  name: string;
  email: string;
  initials: string;
  phone: string;
  city: string;
  jobs: number;
  spent: string;
  joined: string;
  status: ClientStatus;
}

const clients: Client[] = [
  {
    id: "#CL-8821",
    name: "Zara Malik",
    email: "zara.malik@email.pk",
    initials: "ZM",
    phone: "+92 300 4567891",
    city: "Karachi",
    jobs: 14,
    spent: "Rs. 45,200",
    joined: "12/05/2023",
    status: "Active",
  },
  {
    id: "#CL-7740",
    name: "Ahmed Khan",
    email: "ahmed.khan@outlook.pk",
    initials: "AK",
    phone: "+92 321 9876543",
    city: "Lahore",
    jobs: 8,
    spent: "Rs. 28,150",
    joined: "24/11/2023",
    status: "Active",
  },
  {
    id: "#CL-6215",
    name: "Fatima Ali",
    email: "fatima.ali@gmail.com",
    initials: "FA",
    phone: "+92 333 1234567",
    city: "Karachi",
    jobs: 2,
    spent: "Rs. 4,500",
    joined: "05/01/2024",
    status: "Suspended",
  },
  {
    id: "#CL-5509",
    name: "Usman Malik",
    email: "u.malik@corp.pk",
    initials: "UM",
    phone: "+92 345 6677889",
    city: "Islamabad",
    jobs: 21,
    spent: "Rs. 89,300",
    joined: "15/08/2022",
    status: "Active",
  },
];

const tabs = ["All Clients", "Active", "Suspended"] as const;

function ClientsPage() {
  return (
    <div className="flex min-h-screen bg-surface-muted">
      <AdminSidebar active="Clients" />
      <div className="flex-1 flex flex-col">
        <AdminTopbar>
          <h1 className="text-2xl font-bold text-foreground">All Clients</h1>
        </AdminTopbar>

        <main className="flex-1 px-6 lg:px-10 py-6 space-y-6">
          {/* Tabs + actions */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div className="inline-flex bg-card rounded-xl p-1 border border-border w-fit">
              {tabs.map((t, i) => (
                <button
                  key={t}
                  className={`px-5 py-2 text-sm font-semibold rounded-lg transition-colors ${
                    i === 0
                      ? "bg-brand text-brand-foreground"
                      : "text-foreground/70 hover:text-foreground"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 px-4 py-2.5 bg-card border border-border rounded-xl text-sm font-medium text-foreground hover:bg-surface-muted transition-colors">
                <Filter className="size-4" />
                Filter by City
              </button>
              <button className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-brand to-brand-light text-brand-foreground rounded-xl text-sm font-semibold shadow-[var(--shadow-brand)] hover:opacity-95 transition-opacity">
                <Plus className="size-4" />
                Add New Client
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="bg-card rounded-2xl border border-border overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border bg-surface-muted/50">
                    <th className="w-12 px-4 py-4">
                      <input type="checkbox" className="rounded" />
                    </th>
                    <th className="text-left px-2 py-4 text-[11px] font-bold tracking-wider text-muted-foreground">
                      CLIENT ID
                    </th>
                    <th className="text-left px-2 py-4 text-[11px] font-bold tracking-wider text-muted-foreground">
                      PHOTO &amp; NAME
                    </th>
                    <th className="text-left px-2 py-4 text-[11px] font-bold tracking-wider text-muted-foreground">
                      PHONE NUMBER
                    </th>
                    <th className="text-left px-2 py-4 text-[11px] font-bold tracking-wider text-muted-foreground">
                      CITY
                    </th>
                    <th className="text-left px-2 py-4 text-[11px] font-bold tracking-wider text-muted-foreground">
                      TOTAL JOBS
                    </th>
                    <th className="text-left px-2 py-4 text-[11px] font-bold tracking-wider text-muted-foreground">
                      TOTAL SPENT
                    </th>
                    <th className="text-left px-2 py-4 text-[11px] font-bold tracking-wider text-muted-foreground">
                      JOINED DATE
                    </th>
                    <th className="text-left px-2 py-4 text-[11px] font-bold tracking-wider text-muted-foreground">
                      STATUS
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {clients.map((c) => (
                    <tr
                      key={c.id}
                      className="border-b border-border last:border-0 hover:bg-surface-muted/40 transition-colors"
                    >
                      <td className="px-4 py-5">
                        <input type="checkbox" className="rounded" />
                      </td>
                      <td className="px-2 py-5 text-sm text-muted-foreground">
                        {c.id}
                      </td>
                      <td className="px-2 py-5">
                        <div className="flex items-center gap-3">
                          <div className="size-10 rounded-full bg-gradient-to-br from-brand/30 to-brand-light/30 flex items-center justify-center text-foreground font-bold text-xs">
                            {c.initials}
                          </div>
                          <div>
                            <p className="font-semibold text-sm text-foreground">
                              {c.name}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              {c.email}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-2 py-5 text-sm text-foreground/80">
                        {c.phone}
                      </td>
                      <td className="px-2 py-5 text-sm text-foreground/80">
                        {c.city}
                      </td>
                      <td className="px-2 py-5 text-sm text-foreground/80">
                        {c.jobs} Jobs
                      </td>
                      <td className="px-2 py-5 text-sm font-bold text-brand">
                        {c.spent}
                      </td>
                      <td className="px-2 py-5 text-sm text-foreground/80">
                        {c.joined}
                      </td>
                      <td className="px-2 py-5">
                        <span
                          className={`inline-flex px-3 py-1 rounded-full text-[11px] font-bold tracking-wide ${
                            c.status === "Active"
                              ? "bg-emerald-100 text-emerald-700"
                              : "bg-amber-100 text-amber-700"
                          }`}
                        >
                          {c.status.toUpperCase()}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex items-center justify-between px-6 py-4 border-t border-border">
              <p className="text-sm text-muted-foreground">
                Showing 1 - 4 of 248 clients
              </p>
              <div className="flex items-center gap-2">
                <button className="size-9 rounded-lg border border-border flex items-center justify-center hover:bg-surface-muted transition-colors">
                  <ChevronLeft className="size-4" />
                </button>
                <button className="size-9 rounded-lg bg-brand text-brand-foreground font-semibold text-sm">
                  1
                </button>
                <button className="size-9 rounded-lg hover:bg-surface-muted text-sm font-semibold transition-colors">
                  2
                </button>
                <button className="size-9 rounded-lg hover:bg-surface-muted text-sm font-semibold transition-colors">
                  3
                </button>
                <span className="px-2 text-muted-foreground">...</span>
                <button className="size-9 rounded-lg hover:bg-surface-muted text-sm font-semibold transition-colors">
                  62
                </button>
                <button className="size-9 rounded-lg border border-border flex items-center justify-center hover:bg-surface-muted transition-colors">
                  <ChevronRight className="size-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Bottom widgets */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 rounded-2xl p-8 text-brand-foreground bg-gradient-to-br from-brand to-brand-light shadow-[var(--shadow-brand)]">
              <p className="text-sm font-semibold opacity-90">
                Growth Analytics
              </p>
              <h2 className="text-3xl font-bold mt-2">
                +24% New Registrations
              </h2>
              <p className="mt-3 text-sm opacity-90 max-w-xl">
                The Karachi region is seeing an unprecedented 40% uptick in
                client engagement this quarter.
              </p>
              <div className="mt-8 flex gap-4">
                <div className="bg-white/15 backdrop-blur rounded-xl px-5 py-3">
                  <p className="text-[10px] font-bold tracking-widest opacity-80">
                    TOP REGION
                  </p>
                  <p className="font-bold mt-1">Karachi East</p>
                </div>
                <div className="bg-white/15 backdrop-blur rounded-xl px-5 py-3">
                  <p className="text-[10px] font-bold tracking-widest opacity-80">
                    AVG. RETENTION
                  </p>
                  <p className="font-bold mt-1">8.4 Months</p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl border border-border p-6">
              <p className="text-[11px] font-bold tracking-widest text-muted-foreground">
                RECENT ACTIVITY
              </p>
              <ul className="mt-5 space-y-5">
                {[
                  {
                    color: "bg-brand",
                    title: "New client onboarded",
                    desc: "Zara Malik joined from Karachi",
                    time: "2 MINS AGO",
                  },
                  {
                    color: "bg-amber-400",
                    title: "Status update",
                    desc: "Fatima Ali marked as Suspended",
                    time: "1 HOUR AGO",
                  },
                  {
                    color: "bg-emerald-500",
                    title: "Payment received",
                    desc: "Rs. 12,500 from Usman Malik",
                    time: "4 HOURS AGO",
                  },
                ].map((a) => (
                  <li key={a.title} className="flex gap-3">
                    <div
                      className={`size-2.5 rounded-full mt-1.5 shrink-0 ${a.color}`}
                    />
                    <div>
                      <p className="font-semibold text-sm text-foreground">
                        {a.title}
                      </p>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {a.desc}
                      </p>
                      <p className="text-[10px] font-bold tracking-widest text-brand mt-1">
                        {a.time}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

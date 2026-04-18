import { createFileRoute } from "@tanstack/react-router";
import {
  Star,
  Download,
  ChevronLeft,
  ChevronRight,
  AlertCircle,
  ChevronRight as Chevron,
} from "lucide-react";
import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { AdminTopbar } from "@/components/admin/AdminTopbar";

export const Route = createFileRoute("/reviews")({
  component: ReviewsPage,
  head: () => ({
    meta: [
      { title: "Reviews — UstadGo Admin" },
      {
        name: "description",
        content:
          "Quality control for UstadGo: review client feedback, flagged comments, sentiment analysis, and average ratings.",
      },
    ],
  }),
});

interface Review {
  id: string;
  client: string;
  clientInitials: string;
  worker: string;
  service: string;
  serviceColor: string;
  rating: number;
  comment: string;
  flagged?: boolean;
}

const reviews: Review[] = [
  {
    id: "#RV-9402",
    client: "Zaid Abbas",
    clientInitials: "ZA",
    worker: "Imran Sheikh",
    service: "PLUMBING",
    serviceColor: "bg-blue-100 text-blue-700",
    rating: 5,
    comment: "Excellent work and very professional service.",
  },
  {
    id: "#RV-8911",
    client: "Mariam Khan",
    clientInitials: "MK",
    worker: "Asif Ali",
    service: "ELECTRICAL",
    serviceColor: "bg-amber-100 text-amber-700",
    rating: 1,
    comment: "Worker did not show up on time and was rude.",
    flagged: true,
  },
  {
    id: "#RV-7742",
    client: "Sana Javeed",
    clientInitials: "SJ",
    worker: "Bilal Ahmed",
    service: "CARPENTRY",
    serviceColor: "bg-teal-100 text-teal-700",
    rating: 4,
    comment: "Good work overall, slight delay in arrival.",
  },
  {
    id: "#RV-6631",
    client: "Faisal Raza",
    clientInitials: "FR",
    worker: "Kasim Gul",
    service: "AC REPAIR",
    serviceColor: "bg-indigo-100 text-indigo-700",
    rating: 5,
    comment: "Highly recommended, fixed it in one visit.",
  },
];

const flagged = [
  {
    initials: "HI",
    name: "Hamza Iqbal",
    time: "2h ago",
    text: '"This app is a scam and the worker stole my money, do not use them ever again!!!"',
  },
  {
    initials: "RS",
    name: "Rashid Sohail",
    time: "5h ago",
    text: '"Worker used inappropriate language when I asked about the pricing..."',
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          className={`size-4 ${
            i <= count
              ? count <= 2
                ? "fill-red-500 text-red-500"
                : "fill-amber-400 text-amber-400"
              : "fill-muted text-muted"
          }`}
        />
      ))}
    </div>
  );
}

function ReviewsPage() {
  return (
    <div className="flex min-h-screen bg-surface-muted">
      <AdminSidebar active="Reviews" />
      <div className="flex-1 flex flex-col">
        <AdminTopbar>
          <div className="flex items-center gap-2 text-sm">
            <span className="text-muted-foreground">Admin Portal</span>
            <Chevron className="size-4 text-muted-foreground" />
            <span className="font-semibold text-brand">Reviews</span>
          </div>
        </AdminTopbar>

        <main className="flex-1 px-6 lg:px-10 py-6 space-y-6">
          {/* Filter row */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div className="flex items-center gap-3 flex-wrap">
              <span className="text-[11px] font-bold tracking-widest text-muted-foreground">
                FILTER BY RATING:
              </span>
              <button className="px-5 py-2 rounded-full bg-brand text-brand-foreground text-sm font-semibold">
                ∞ All Reviews
              </button>
              {[5, 4, 3, 2, 1].map((n) => (
                <button
                  key={n}
                  className="px-4 py-2 rounded-full bg-card border border-border text-sm font-semibold hover:bg-surface-muted transition-colors flex items-center gap-1"
                >
                  {n}{" "}
                  <Star className="size-3.5 fill-amber-400 text-amber-400" />
                </button>
              ))}
            </div>
            <button className="flex items-center gap-2 px-4 py-2.5 bg-card border border-border rounded-xl text-sm font-semibold hover:bg-surface-muted transition-colors">
              <Download className="size-4" />
              Export Reports
            </button>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            {/* Recent Feedback */}
            <div className="xl:col-span-2 bg-card rounded-2xl border border-border p-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-foreground">
                  Recent Feedback
                </h2>
                <span className="text-[11px] font-bold tracking-widest text-muted-foreground bg-surface-muted px-3 py-1.5 rounded-full">
                  DISPLAYING 120 TOTAL
                </span>
              </div>

              <div className="mt-5 overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      {[
                        "REVIEW ID",
                        "CLIENT",
                        "WORKER",
                        "SERVICE",
                        "RATING",
                        "COMMENT",
                      ].map((h) => (
                        <th
                          key={h}
                          className="text-left px-2 py-4 text-[11px] font-bold tracking-wider text-muted-foreground"
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {reviews.map((r) => (
                      <tr
                        key={r.id}
                        className={`border-b border-border last:border-0 ${
                          r.flagged ? "bg-red-50/60" : ""
                        }`}
                      >
                        <td className="px-2 py-5 text-sm text-muted-foreground">
                          {r.id}
                        </td>
                        <td className="px-2 py-5">
                          <div className="flex items-center gap-2">
                            <div className="size-8 rounded-full bg-brand/20 flex items-center justify-center text-brand font-bold text-[10px]">
                              {r.clientInitials}
                            </div>
                            <span className="text-sm font-semibold">
                              {r.client}
                            </span>
                          </div>
                        </td>
                        <td className="px-2 py-5 text-sm">{r.worker}</td>
                        <td className="px-2 py-5">
                          <span
                            className={`inline-flex px-3 py-1 rounded-md text-[10px] font-bold tracking-wide ${r.serviceColor}`}
                          >
                            {r.service}
                          </span>
                        </td>
                        <td className="px-2 py-5">
                          <Stars count={r.rating} />
                        </td>
                        <td
                          className={`px-2 py-5 text-sm max-w-[200px] truncate ${
                            r.flagged ? "text-red-600 font-medium" : ""
                          }`}
                        >
                          {r.comment}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="flex items-center justify-between mt-6 pt-4 border-t border-border">
                <p className="text-[11px] font-bold tracking-widest text-muted-foreground">
                  PAGE 1 OF 12
                </p>
                <div className="flex items-center gap-2">
                  <button className="size-9 rounded-lg border border-border flex items-center justify-center hover:bg-surface-muted">
                    <ChevronLeft className="size-4" />
                  </button>
                  <button className="size-9 rounded-lg bg-brand text-brand-foreground font-semibold text-sm">
                    1
                  </button>
                  <button className="size-9 rounded-lg hover:bg-surface-muted text-sm font-semibold">
                    2
                  </button>
                  <button className="size-9 rounded-lg hover:bg-surface-muted text-sm font-semibold">
                    3
                  </button>
                  <button className="size-9 rounded-lg border border-border flex items-center justify-center hover:bg-surface-muted">
                    <ChevronRight className="size-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Right column */}
            <div className="space-y-6">
              {/* Flagged */}
              <div className="bg-card rounded-2xl border-2 border-orange-400 overflow-hidden">
                <div className="bg-orange-500 px-5 py-4 flex items-center justify-between text-white">
                  <div className="flex items-center gap-2">
                    <AlertCircle className="size-5" />
                    <p className="font-bold text-sm tracking-wide">
                      FLAGGED FOR REVIEW
                    </p>
                  </div>
                  <span className="bg-white text-orange-500 text-[10px] font-bold px-2 py-1 rounded-full">
                    4 NEW
                  </span>
                </div>
                <div className="p-5 space-y-4">
                  {flagged.map((f) => (
                    <div
                      key={f.name}
                      className="border border-border rounded-xl p-4"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <div className="size-7 rounded-full bg-brand/20 flex items-center justify-center text-brand font-bold text-[10px]">
                            {f.initials}
                          </div>
                          <p className="font-semibold text-sm">{f.name}</p>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          {f.time}
                        </p>
                      </div>
                      <p className="text-xs italic text-foreground/80">
                        {f.text}
                      </p>
                      <div className="grid grid-cols-2 gap-2 mt-3">
                        <button className="py-2 rounded-lg bg-orange-500 text-white text-xs font-bold tracking-wide">
                          REMOVE
                        </button>
                        <button className="py-2 rounded-lg border border-orange-500 text-orange-500 text-xs font-bold tracking-wide">
                          KEEP
                        </button>
                      </div>
                    </div>
                  ))}
                  <button className="w-full py-2.5 rounded-lg bg-orange-50 text-orange-600 text-xs font-bold tracking-wide">
                    VIEW ALL FLAGGED (14)
                  </button>
                </div>
              </div>

              {/* Sentiment */}
              <div className="bg-card rounded-2xl border border-border p-6">
                <p className="text-[11px] font-bold tracking-widest text-muted-foreground">
                  SENTIMENT ANALYSIS
                </p>
                <div className="space-y-4 mt-5">
                  {[
                    {
                      label: "Positive (4-5 Stars)",
                      pct: 82,
                      color: "bg-gradient-to-r from-brand to-brand-light",
                      text: "text-brand",
                    },
                    {
                      label: "Neutral (3 Stars)",
                      pct: 12,
                      color: "bg-muted-foreground/40",
                      text: "text-muted-foreground",
                    },
                    {
                      label: "Negative (1-2 Stars)",
                      pct: 6,
                      color: "bg-red-500",
                      text: "text-red-500",
                    },
                  ].map((s) => (
                    <div key={s.label}>
                      <div className="flex justify-between text-sm">
                        <span className="text-foreground/80">{s.label}</span>
                        <span className={`font-bold ${s.text}`}>{s.pct}%</span>
                      </div>
                      <div className="h-2 rounded-full bg-surface-muted mt-1.5 overflow-hidden">
                        <div
                          className={`h-full ${s.color}`}
                          style={{ width: `${s.pct}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex items-end justify-between">
                  <div>
                    <p className="text-[11px] font-bold tracking-widest text-muted-foreground">
                      AVG. RATING
                    </p>
                    <p className="text-4xl font-bold mt-1">4.7</p>
                  </div>
                  <Stars count={5} />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

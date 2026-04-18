import { Bell, HelpCircle, LogOut } from "lucide-react";
import { useNavigate } from "@tanstack/react-router";

interface AdminTopbarProps {
  name?: string;
  role?: string;
  initials?: string;
  children?: React.ReactNode;
}

export function AdminTopbar({
  name = "Ahmed Khan",
  role = "SUPER ADMIN",
  initials = "AK",
  children,
}: AdminTopbarProps) {
  const navigate = useNavigate();

  const handleSignOut = () => {
    navigate({ to: "/" });
  };

  return (
    <header className="sticky top-0 z-10 bg-background/80 backdrop-blur border-b border-border px-6 lg:px-10 py-4 flex items-center gap-4">
      <div className="flex-1">{children}</div>
      <button className="size-10 rounded-full hover:bg-surface-muted flex items-center justify-center text-foreground/70 transition-colors">
        <Bell className="size-5" />
      </button>
      <button className="size-10 rounded-full hover:bg-surface-muted flex items-center justify-center text-foreground/70 transition-colors">
        <HelpCircle className="size-5" />
      </button>
      <div className="flex items-center gap-3 pl-2">
        <div className="text-right hidden sm:block">
          <p className="text-sm font-bold text-foreground leading-tight">
            {name}
          </p>
          <p className="text-[10px] tracking-widest text-muted-foreground">
            {role}
          </p>
        </div>
        <div className="size-10 rounded-full bg-gradient-to-br from-brand to-brand-light flex items-center justify-center text-brand-foreground font-bold text-sm">
          {initials}
        </div>
      </div>
      <button
        onClick={handleSignOut}
        className="flex items-center gap-2 px-4 py-2 rounded-xl border border-border text-sm font-semibold text-foreground/80 hover:bg-destructive hover:text-destructive-foreground hover:border-destructive transition-colors"
      >
        <LogOut className="size-4" />
        <span className="hidden sm:inline">Sign Out</span>
      </button>
    </header>
  );
}

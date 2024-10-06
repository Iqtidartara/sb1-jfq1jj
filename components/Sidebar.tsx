import { Home, FileInput, TrendingUp, DollarSign, Wallet, Settings, HelpCircle, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function Sidebar({ open, setOpen }: { open: boolean; setOpen: (open: boolean) => void }) {
  return (
    <>
      <div
        className={cn(
          "fixed inset-0 z-20 bg-black/50 transition-opacity lg:hidden",
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setOpen(false)}
      ></div>
      <aside
        className={cn(
          "fixed top-0 left-0 z-30 w-64 h-screen transition-transform duration-300 ease-in-out transform bg-card text-card-foreground lg:translate-x-0 lg:static lg:h-auto",
          open ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-full"></div>
            <span className="font-semibold text-lg">PLATINUM PROPERTY</span>
          </div>
          <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setOpen(false)}>
            <X className="h-6 w-6" />
          </Button>
        </div>
        <nav className="p-4">
          <ul className="space-y-2">
            {[
              { icon: Home, label: "Dashboard" },
              { icon: FileInput, label: "Input" },
              { icon: TrendingUp, label: "Projected Capital Growth" },
              { icon: DollarSign, label: "Construction Payments" },
              { icon: Wallet, label: "Mortgage Calculator" },
              { icon: DollarSign, label: "Payments" },
            ].map((item, index) => (
              <li key={index}>
                <Button variant="ghost" className="w-full justify-start">
                  <item.icon className="mr-2 h-4 w-4" />
                  {item.label}
                </Button>
              </li>
            ))}
          </ul>
        </nav>
        <div className="absolute bottom-4 left-4 right-4 space-y-2">
          <Button variant="ghost" className="w-full justify-start">
            <Settings className="mr-2 h-4 w-4" />
            Settings
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <HelpCircle className="mr-2 h-4 w-4" />
            Support
          </Button>
        </div>
      </aside>
    </>
  );
}
import { Bell, Search, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function Header({ name, onMenuClick }: { name: string; onMenuClick: () => void }) {
  return (
    <header className="bg-card border-b py-4 px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="lg:hidden" onClick={onMenuClick}>
            <Menu className="h-6 w-6" />
          </Button>
          <Avatar className="h-10 w-10">
            <AvatarImage src="https://github.com/shadcn.png" alt={name} />
            <AvatarFallback>FV</AvatarFallback>
          </Avatar>
          <div>
            <h2 className="text-lg font-semibold">{name}</h2>
            <p className="text-sm text-muted-foreground">Welcome back to Synergy 👋</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative hidden md:block">
            <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input className="pl-8 w-64" placeholder="Search..." />
          </div>
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
          </Button>
          <Button className="hidden sm:inline-flex">+ Create Request</Button>
        </div>
      </div>
    </header>
  );
}
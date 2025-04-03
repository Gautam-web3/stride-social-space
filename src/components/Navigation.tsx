
import React from 'react';
import { Link } from 'react-router-dom';
import { Bell, Dumbbell, Home, Menu, Search, Trophy, Users } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { currentUser } from '@/data/mockData';

export const Navigation: React.FC = () => {
  return (
    <header className="border-b sticky top-0 z-10 bg-background">
      <div className="container flex items-center justify-between h-16 px-4 md:px-6 max-w-screen-xl">
        <div className="flex items-center gap-2">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[240px] py-6">
              <div className="flex flex-col gap-6">
                <Link to="/" className="flex items-center gap-2">
                  <Dumbbell className="h-6 w-6 text-primary" />
                  <span className="text-xl font-bold">Stride</span>
                </Link>
                <nav className="flex flex-col gap-4">
                  <Link to="/" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                    <Home className="h-5 w-5" />
                    <span>Home</span>
                  </Link>
                  <Link to="/discover" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                    <Search className="h-5 w-5" />
                    <span>Discover</span>
                  </Link>
                  <Link to="/community" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                    <Users className="h-5 w-5" />
                    <span>Community</span>
                  </Link>
                  <Link to="/challenges" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                    <Trophy className="h-5 w-5" />
                    <span>Challenges</span>
                  </Link>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
          <Link to="/" className="flex items-center gap-2">
            <Dumbbell className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold hidden sm:inline-block">Stride</span>
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <Home className="h-5 w-5" />
            <span>Home</span>
          </Link>
          <Link to="/discover" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <Search className="h-5 w-5" />
            <span>Discover</span>
          </Link>
          <Link to="/community" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <Users className="h-5 w-5" />
            <span>Community</span>
          </Link>
          <Link to="/challenges" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <Trophy className="h-5 w-5" />
            <span>Challenges</span>
          </Link>
        </nav>
        
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-primary text-[10px] text-primary-foreground flex items-center justify-center">3</span>
          </Button>
          <Avatar>
            <AvatarImage src={currentUser.avatar} alt={currentUser.name} />
            <AvatarFallback>{currentUser.name.charAt(0)}</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
};

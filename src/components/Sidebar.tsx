
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Dumbbell, Home, Search, Trophy, Users } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { currentUser, challenges } from '@/data/mockData';

export const Sidebar: React.FC = () => {
  return (
    <div className="hidden md:flex flex-col w-64 border-r h-[calc(100vh-4rem)] sticky top-16 py-6 px-4 shrink-0">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col items-center gap-3">
          <Avatar className="h-20 w-20">
            <AvatarImage src={currentUser.avatar} alt={currentUser.name} />
            <AvatarFallback>{currentUser.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="text-center">
            <h3 className="font-medium text-lg">{currentUser.name}</h3>
            <p className="text-sm text-muted-foreground">@{currentUser.username}</p>
          </div>
          <div className="flex gap-6 text-sm">
            <div className="text-center">
              <p className="font-semibold">{currentUser.following}</p>
              <p className="text-muted-foreground">Following</p>
            </div>
            <div className="text-center">
              <p className="font-semibold">{currentUser.followers}</p>
              <p className="text-muted-foreground">Followers</p>
            </div>
          </div>
        </div>
        
        <div className="space-y-1">
          <p className="text-xs font-medium text-muted-foreground mb-2 pl-3">MENU</p>
          <Link 
            to="/" 
            className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-accent text-foreground transition-colors"
          >
            <Home className="h-5 w-5" />
            <span>Feed</span>
          </Link>
          <Link 
            to="/discover" 
            className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-accent text-foreground transition-colors"
          >
            <Search className="h-5 w-5" />
            <span>Discover</span>
          </Link>
          <Link 
            to="/community" 
            className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-accent text-foreground transition-colors"
          >
            <Users className="h-5 w-5" />
            <span>Community</span>
          </Link>
          <Link 
            to="/workouts" 
            className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-accent text-foreground transition-colors"
          >
            <Dumbbell className="h-5 w-5" />
            <span>Workout Plans</span>
          </Link>
          <Link 
            to="/challenges" 
            className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-accent text-foreground transition-colors"
          >
            <Trophy className="h-5 w-5" />
            <span>Challenges</span>
          </Link>
          <Link 
            to="/calendar" 
            className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-accent text-foreground transition-colors"
          >
            <Calendar className="h-5 w-5" />
            <span>Calendar</span>
          </Link>
        </div>
        
        <div className="space-y-3 mt-2">
          <p className="text-xs font-medium text-muted-foreground pl-3">ACTIVE CHALLENGES</p>
          {challenges.slice(0, 2).map((challenge) => (
            <Link 
              key={challenge.id}
              to={`/challenges/${challenge.id}`}
              className="flex flex-col gap-2 p-3 rounded-md hover:bg-accent transition-colors"
            >
              <div className="flex justify-between items-start">
                <h4 className="font-medium text-sm">{challenge.title}</h4>
                <Badge variant="secondary" className="text-xs">{challenge.participants} joined</Badge>
              </div>
              <div className="w-full bg-muted rounded-full h-1.5 mt-1">
                <div 
                  className="bg-primary h-1.5 rounded-full" 
                  style={{ width: `${challenge.progress * 100}%` }}
                ></div>
              </div>
              <p className="text-xs text-muted-foreground">
                {challenge.progress > 0 
                  ? `${Math.round(challenge.progress * 100)}% complete` 
                  : `Starts ${new Date(challenge.startDate).toLocaleDateString()}`}
              </p>
            </Link>
          ))}
          <Button variant="outline" size="sm" className="w-full">
            View All Challenges
          </Button>
        </div>
      </div>
    </div>
  );
};

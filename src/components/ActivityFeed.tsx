
import React from 'react';
import { Activity } from '@/types';
import { 
  Award,
  Dumbbell, 
  Heart,
  MessageSquare, 
  MoreHorizontal, 
  Trophy,
  Target
} from 'lucide-react';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";

interface ActivityFeedProps {
  activities: Activity[];
}

export const ActivityFeed: React.FC<ActivityFeedProps> = ({ activities }) => {
  const getActivityIcon = (type: Activity['type']) => {
    switch (type) {
      case 'workout':
        return <Dumbbell className="h-5 w-5 text-primary" />;
      case 'achievement':
        return <Award className="h-5 w-5 text-yellow-500" />;
      case 'challenge':
        return <Trophy className="h-5 w-5 text-amber-500" />;
      case 'goal':
        return <Target className="h-5 w-5 text-green-500" />;
      default:
        return null;
    }
  };

  const formatTimeAgo = (timestamp: string) => {
    const now = new Date();
    const activityTime = new Date(timestamp);
    const diffInSeconds = Math.floor((now.getTime() - activityTime.getTime()) / 1000);
    
    if (diffInSeconds < 60) return `${diffInSeconds}s ago`;
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m ago`;
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h ago`;
    return `${Math.floor(diffInSeconds / 86400)}d ago`;
  };

  return (
    <div className="space-y-4">
      {activities.map((activity) => (
        <Card key={activity.id} className="social-card">
          <CardHeader className="p-4 pb-2 space-y-0">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src={activity.user.avatar} alt={activity.user.name} />
                  <AvatarFallback>{activity.user.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">{activity.user.name}</span>
                    <span className="text-xs text-muted-foreground">@{activity.user.username}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs">
                    <span className="text-muted-foreground">{formatTimeAgo(activity.timestamp)}</span>
                    <span className="text-muted-foreground">•</span>
                    <div className="flex items-center gap-1">
                      {getActivityIcon(activity.type)}
                      <span className="capitalize">{activity.type}</span>
                    </div>
                  </div>
                </div>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Save Post</DropdownMenuItem>
                  <DropdownMenuItem>Hide Post</DropdownMenuItem>
                  <DropdownMenuItem>Report</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </CardHeader>
          
          <CardContent className="p-4 pt-2">
            <p className="mb-3">{activity.content}</p>
            
            {activity.workout && (
              <div className="bg-muted/50 rounded-lg p-3 mt-2">
                <div className="flex items-center gap-2 mb-2">
                  <Dumbbell className="h-4 w-4 text-primary" />
                  <span className="font-medium">{activity.workout.title}</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-2">
                  <Badge variant="outline">{activity.workout.difficulty}</Badge>
                  <Badge variant="outline">{activity.workout.category}</Badge>
                  <Badge variant="outline">{activity.workout.duration}</Badge>
                </div>
                <p className="text-sm text-muted-foreground">{activity.workout.description}</p>
              </div>
            )}
          </CardContent>
          
          <Separator />
          
          <CardFooter className="p-2">
            <div className="flex w-full justify-between">
              <Button variant="ghost" size="sm" className="flex items-center gap-1 text-muted-foreground">
                <Heart className="h-4 w-4" />
                <span>{activity.likes}</span>
              </Button>
              <Button variant="ghost" size="sm" className="flex items-center gap-1 text-muted-foreground">
                <MessageSquare className="h-4 w-4" />
                <span>{activity.comments}</span>
              </Button>
              <Button variant="ghost" size="sm" className="text-muted-foreground">
                Share
              </Button>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

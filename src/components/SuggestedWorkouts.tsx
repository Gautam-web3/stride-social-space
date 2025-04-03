
import React from 'react';
import { WorkoutPlan } from '@/types';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dumbbell, Heart, Bookmark } from 'lucide-react';

interface SuggestedWorkoutsProps {
  workouts: WorkoutPlan[];
}

export const SuggestedWorkouts: React.FC<SuggestedWorkoutsProps> = ({ workouts }) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold flex items-center gap-2">
          <Dumbbell className="h-5 w-5 text-primary" />
          <span>Workout Plans For You</span>
        </h3>
        <Button variant="ghost" size="sm">View All</Button>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {workouts.map((workout) => (
          <Card key={workout.id} className="social-card overflow-hidden">
            <div className="relative h-12 bg-gradient-to-r from-primary/20 to-secondary/20">
              <div className="absolute inset-0 flex items-center justify-center">
                <Dumbbell className="h-6 w-6 text-primary" />
              </div>
            </div>
            
            <CardHeader className="p-4 pb-2">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-base">{workout.title}</CardTitle>
                  <div className="flex items-center gap-2 mt-1">
                    <Avatar className="h-6 w-6">
                      <AvatarImage src={workout.author.avatar} alt={workout.author.name} />
                      <AvatarFallback>{workout.author.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <span className="text-sm text-muted-foreground">{workout.author.name}</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-1 justify-end">
                  <Badge variant="outline">{workout.difficulty}</Badge>
                  <Badge variant="outline">{workout.category}</Badge>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="p-4 pt-2">
              <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{workout.description}</p>
              
              <div className="flex justify-between items-center text-sm">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <Heart className="h-4 w-4 text-muted-foreground" />
                    <span>{workout.likes}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Bookmark className="h-4 w-4 text-muted-foreground" />
                    <span>{workout.saved}</span>
                  </div>
                </div>
                
                <Button size="sm">View Plan</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

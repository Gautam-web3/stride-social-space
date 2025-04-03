
import React from 'react';
import { Challenge } from '@/types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Trophy, Users } from 'lucide-react';
import { users } from '@/data/mockData';

interface TrendingChallengesProps {
  challenges: Challenge[];
}

export const TrendingChallenges: React.FC<TrendingChallengesProps> = ({ challenges }) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold flex items-center gap-2">
          <Trophy className="h-5 w-5 text-amber-500" />
          <span>Trending Challenges</span>
        </h3>
        <Button variant="ghost" size="sm">View All</Button>
      </div>
      
      <div className="space-y-4">
        {challenges.map((challenge) => (
          <Card key={challenge.id} className="social-card overflow-hidden">
            <div className="relative h-24 bg-gradient-to-r from-primary/20 to-secondary/20">
              <div className="absolute inset-0 flex items-center justify-center">
                <Trophy className="h-10 w-10 text-primary" />
              </div>
            </div>
            
            <CardHeader className="p-4 pb-2">
              <CardTitle className="text-lg">{challenge.title}</CardTitle>
              <CardDescription className="line-clamp-2">
                {challenge.description}
              </CardDescription>
            </CardHeader>
            
            <CardContent className="p-4 pt-0">
              <div className="flex justify-between items-center mt-3 mb-2">
                <div className="flex items-center gap-1.5 text-sm">
                  <Users className="h-4 w-4 text-muted-foreground" />
                  <span>{challenge.participants} participants</span>
                </div>
                <div className="text-sm">
                  {new Date(challenge.startDate).toLocaleDateString()} - {new Date(challenge.endDate).toLocaleDateString()}
                </div>
              </div>
              
              <div className="w-full bg-muted rounded-full h-2 mb-4">
                <div 
                  className="bg-primary h-2 rounded-full" 
                  style={{ width: `${challenge.progress * 100}%` }}
                ></div>
              </div>
              
              <div className="flex justify-between items-center">
                <div className="flex -space-x-2">
                  {users.slice(0, 3).map((user) => (
                    <Avatar key={user.id} className="border-2 border-background h-8 w-8">
                      <AvatarImage src={user.avatar} alt={user.name} />
                      <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                  ))}
                  {challenge.participants > 3 && (
                    <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center text-xs border-2 border-background">
                      +{challenge.participants - 3}
                    </div>
                  )}
                </div>
                <Button className="bg-primary hover:bg-primary/90 text-white">
                  Join Challenge
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

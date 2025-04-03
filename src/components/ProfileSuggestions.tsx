
import React from 'react';
import { User } from '@/types';
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users } from 'lucide-react';

interface ProfileSuggestionsProps {
  users: User[];
}

export const ProfileSuggestions: React.FC<ProfileSuggestionsProps> = ({ users }) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Users className="h-5 w-5 text-muted-foreground" />
        <h3 className="font-semibold">Suggested Fitness Buddies</h3>
      </div>
      
      <div className="space-y-4">
        {users.map((user) => (
          <Card key={user.id} className="social-card">
            <CardHeader className="p-4 pb-2 flex-row space-y-0 items-center gap-3">
              <Avatar>
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="text-base">{user.name}</CardTitle>
                <p className="text-sm text-muted-foreground">@{user.username}</p>
              </div>
            </CardHeader>
            
            <CardContent className="p-4 pt-2">
              {user.bio && (
                <p className="text-sm mb-2 line-clamp-2">{user.bio}</p>
              )}
              
              <div className="flex flex-wrap gap-1 mb-3">
                {user.fitnessGoals.map((goal, index) => (
                  <Badge key={index} variant="secondary" className="text-xs">{goal}</Badge>
                ))}
              </div>
              
              <div className="flex justify-between items-center">
                <div className="text-sm text-muted-foreground">
                  {user.followers} followers
                </div>
                <Button variant="outline" size="sm">
                  Follow
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <Button variant="outline" className="w-full">
        View More
      </Button>
    </div>
  );
};

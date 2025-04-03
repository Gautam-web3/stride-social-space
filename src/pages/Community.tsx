
import React from 'react';
import { Navigation } from '@/components/Navigation';
import { Sidebar } from '@/components/Sidebar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users } from 'lucide-react';
import { ProfileSuggestions } from '@/components/ProfileSuggestions';
import { users } from '@/data/mockData';
import { Button } from '@/components/ui/button';

const Community = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container max-w-screen-xl mx-auto px-4 py-6 flex">
        <Sidebar />
        
        <main className="flex-1 px-0 md:px-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-4 flex items-center gap-2">
              <Users className="h-7 w-7 text-primary" />
              <span>Community</span>
            </h1>
            
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Your Fitness Community</CardTitle>
                <CardDescription>
                  Connect with like-minded individuals who share your fitness goals and interests.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="bg-primary/10 border-none">
                    <CardHeader>
                      <CardTitle className="text-xl">Your Network</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="text-center">
                        <p className="text-4xl font-bold text-primary">245</p>
                        <p className="text-sm text-muted-foreground">Following</p>
                      </div>
                      <div className="text-center">
                        <p className="text-4xl font-bold text-primary">1,024</p>
                        <p className="text-sm text-muted-foreground">Followers</p>
                      </div>
                      <Button className="w-full">Manage Network</Button>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-secondary/10 border-none">
                    <CardHeader>
                      <CardTitle className="text-xl">Your Groups</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="text-center">
                        <p className="text-4xl font-bold text-secondary">3</p>
                        <p className="text-sm text-muted-foreground">Active Groups</p>
                      </div>
                      <div className="text-center">
                        <p className="text-lg font-medium">Runner's Club, Weight Loss Support, Morning Yoga</p>
                      </div>
                      <Button variant="secondary" className="w-full">View Groups</Button>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
            
            <ProfileSuggestions users={users} />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Community;

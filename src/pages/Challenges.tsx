
import React from 'react';
import { Navigation } from '@/components/Navigation';
import { Sidebar } from '@/components/Sidebar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, CalendarDays, Users, Zap } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { TrendingChallenges } from '@/components/TrendingChallenges';
import { challenges } from '@/data/mockData';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";

const Challenges = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container max-w-screen-xl mx-auto px-4 py-6 flex">
        <Sidebar />
        
        <main className="flex-1 px-0 md:px-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-4 flex items-center gap-2">
              <Trophy className="h-7 w-7 text-primary" />
              <span>Challenges</span>
            </h1>
            
            <Card className="mb-6 border-primary/20 bg-primary/5">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-2xl">Spring 5K Challenge</CardTitle>
                    <CardDescription>
                      You're currently participating in this challenge!
                    </CardDescription>
                  </div>
                  <div className="h-16 w-16 bg-primary/20 rounded-full flex items-center justify-center">
                    <Trophy className="h-8 w-8 text-primary" />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-6">
                    <div className="flex items-center gap-2">
                      <CalendarDays className="h-5 w-5 text-muted-foreground" />
                      <span>April 1 - May 15</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-muted-foreground" />
                      <span>256 participants</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Zap className="h-5 w-5 text-muted-foreground" />
                      <span>25% complete</span>
                    </div>
                  </div>
                  
                  <Progress value={25} className="h-2" />
                  
                  <div className="flex justify-between">
                    <Button variant="outline">View Details</Button>
                    <Button>Update Progress</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="w-full mb-6">
                <TabsTrigger value="all" className="flex-1">All Challenges</TabsTrigger>
                <TabsTrigger value="active" className="flex-1">Active</TabsTrigger>
                <TabsTrigger value="upcoming" className="flex-1">Upcoming</TabsTrigger>
                <TabsTrigger value="completed" className="flex-1">Completed</TabsTrigger>
              </TabsList>
              
              <TabsContent value="all">
                <TrendingChallenges challenges={challenges} />
              </TabsContent>
              
              <TabsContent value="active">
                <Card>
                  <CardContent className="p-8 text-center">
                    <Trophy className="h-16 w-16 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-medium mb-2">You're participating in 1 active challenge</h3>
                    <p className="text-muted-foreground mb-4">Keep up the good work and track your progress!</p>
                    <Button>View Active Challenge</Button>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="upcoming">
                <TrendingChallenges challenges={[challenges[1]]} />
              </TabsContent>
              
              <TabsContent value="completed">
                <Card>
                  <CardContent className="p-8 text-center">
                    <Trophy className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-xl font-medium mb-2">No completed challenges yet</h3>
                    <p className="text-muted-foreground mb-4">Join a challenge and complete it to see it here!</p>
                    <Button>Browse Challenges</Button>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Challenges;

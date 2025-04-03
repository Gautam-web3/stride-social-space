
import React from 'react';
import { Navigation } from '@/components/Navigation';
import { Sidebar } from '@/components/Sidebar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Dumbbell, Trophy, Users } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SuggestedWorkouts } from '@/components/SuggestedWorkouts';
import { workoutPlans } from '@/data/mockData';

const Discover = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container max-w-screen-xl mx-auto px-4 py-6 flex">
        <Sidebar />
        
        <main className="flex-1 px-0 md:px-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-4 flex items-center gap-2">
              <Search className="h-7 w-7 text-primary" />
              <span>Discover</span>
            </h1>
            
            <Card className="mb-6">
              <CardContent className="p-4">
                <div className="flex gap-2">
                  <Input 
                    placeholder="Search workouts, challenges, or people..." 
                    className="flex-1"
                  />
                  <Button>Search</Button>
                </div>
              </CardContent>
            </Card>
            
            <Tabs defaultValue="workouts" className="w-full">
              <TabsList className="w-full mb-6">
                <TabsTrigger value="workouts" className="flex-1">
                  <Dumbbell className="h-4 w-4 mr-2" /> Workouts
                </TabsTrigger>
                <TabsTrigger value="challenges" className="flex-1">
                  <Trophy className="h-4 w-4 mr-2" /> Challenges
                </TabsTrigger>
                <TabsTrigger value="people" className="flex-1">
                  <Users className="h-4 w-4 mr-2" /> People
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="workouts">
                <SuggestedWorkouts workouts={workoutPlans} />
              </TabsContent>
              
              <TabsContent value="challenges">
                <Card>
                  <CardHeader>
                    <CardTitle>Challenges</CardTitle>
                    <CardDescription>
                      Discover fitness challenges to join and participate with others.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-center py-12 text-muted-foreground">Challenges will be displayed here</p>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="people">
                <Card>
                  <CardHeader>
                    <CardTitle>People</CardTitle>
                    <CardDescription>
                      Find fitness buddies with similar goals and interests.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-center py-12 text-muted-foreground">People will be displayed here</p>
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

export default Discover;

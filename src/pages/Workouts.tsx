
import React from 'react';
import { Navigation } from '@/components/Navigation';
import { Sidebar } from '@/components/Sidebar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dumbbell, Clock, Calendar, BarChart, PlusCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SuggestedWorkouts } from '@/components/SuggestedWorkouts';
import { workoutPlans } from '@/data/mockData';

const Workouts = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container max-w-screen-xl mx-auto px-4 py-6 flex">
        <Sidebar />
        
        <main className="flex-1 px-0 md:px-6">
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-3xl font-bold flex items-center gap-2">
                <Dumbbell className="h-7 w-7 text-primary" />
                <span>Workout Plans</span>
              </h1>
              <Button>
                <PlusCircle className="h-4 w-4 mr-2" />
                Create Plan
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <Card className="bg-primary/10 border-none">
                <CardContent className="flex items-center p-6">
                  <div className="h-12 w-12 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                    <Dumbbell className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold">12</p>
                    <p className="text-sm text-muted-foreground">Saved Plans</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-secondary/10 border-none">
                <CardContent className="flex items-center p-6">
                  <div className="h-12 w-12 bg-secondary/20 rounded-full flex items-center justify-center mr-4">
                    <Clock className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold">8</p>
                    <p className="text-sm text-muted-foreground">Completed Workouts</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-accent/10 border-none">
                <CardContent className="flex items-center p-6">
                  <div className="h-12 w-12 bg-accent/20 rounded-full flex items-center justify-center mr-4">
                    <Calendar className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold">3</p>
                    <p className="text-sm text-muted-foreground">Active Plans</p>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <Card className="mb-6 border-secondary/20 bg-secondary/5">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-2xl">Current Plan: 30-Day Strength Challenge</CardTitle>
                    <CardDescription>
                      Day 15 of 30 - You're halfway there!
                    </CardDescription>
                  </div>
                  <div className="h-16 w-16 bg-secondary/20 rounded-full flex items-center justify-center">
                    <BarChart className="h-8 w-8 text-secondary" />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-4 mb-2">
                    <div className="workout-metric">
                      <span className="text-xl font-bold">15/30</span>
                      <span className="text-xs text-muted-foreground">Days</span>
                    </div>
                    <div className="workout-metric">
                      <span className="text-xl font-bold">50%</span>
                      <span className="text-xs text-muted-foreground">Complete</span>
                    </div>
                    <div className="workout-metric">
                      <span className="text-xl font-bold">3</span>
                      <span className="text-xs text-muted-foreground">Exercises Today</span>
                    </div>
                    <div className="workout-metric">
                      <span className="text-xl font-bold">45min</span>
                      <span className="text-xs text-muted-foreground">Workout Time</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between">
                    <Button variant="outline">View Details</Button>
                    <Button variant="secondary">Start Today's Workout</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="w-full mb-6">
                <TabsTrigger value="all" className="flex-1">All Plans</TabsTrigger>
                <TabsTrigger value="saved" className="flex-1">Saved</TabsTrigger>
                <TabsTrigger value="created" className="flex-1">Created by You</TabsTrigger>
              </TabsList>
              
              <TabsContent value="all">
                <SuggestedWorkouts workouts={workoutPlans} />
              </TabsContent>
              
              <TabsContent value="saved">
                <SuggestedWorkouts workouts={workoutPlans.slice(0, 2)} />
              </TabsContent>
              
              <TabsContent value="created">
                <Card>
                  <CardContent className="p-8 text-center">
                    <Dumbbell className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-xl font-medium mb-2">You haven't created any workout plans yet</h3>
                    <p className="text-muted-foreground mb-4">Create your own custom workout plan to share with the community!</p>
                    <Button>
                      <PlusCircle className="h-4 w-4 mr-2" />
                      Create Plan
                    </Button>
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

export default Workouts;

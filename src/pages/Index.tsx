
import React from 'react';
import { Navigation } from '@/components/Navigation';
import { Sidebar } from '@/components/Sidebar';
import { ActivityFeed } from '@/components/ActivityFeed';
import { TrendingChallenges } from '@/components/TrendingChallenges';
import { SuggestedWorkouts } from '@/components/SuggestedWorkouts';
import { ProfileSuggestions } from '@/components/ProfileSuggestions';
import { activities, challenges, workoutPlans, users } from '@/data/mockData';
import { Dumbbell } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container max-w-screen-xl mx-auto px-4 py-6 flex">
        <Sidebar />
        
        <main className="flex-1 px-0 md:px-6">
          <div className="mb-8 text-center md:text-left">
            <h1 className="text-3xl font-bold flex items-center justify-center md:justify-start gap-2">
              <Dumbbell className="h-7 w-7 text-primary" />
              <span>Stride <span className="text-primary">Social Fitness</span></span>
            </h1>
            <p className="text-muted-foreground mt-2">Connect with fitness buddies, share achievements, and reach your goals together!</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-8">
              <TrendingChallenges challenges={challenges} />
              <ActivityFeed activities={activities} />
            </div>
            
            <aside className="space-y-8">
              <SuggestedWorkouts workouts={workoutPlans.slice(0, 2)} />
              <ProfileSuggestions users={users.slice(1)} />
            </aside>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;

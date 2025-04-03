
import React from 'react';
import { Navigation } from '@/components/Navigation';
import { Sidebar } from '@/components/Sidebar';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, Dumbbell } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Calendar = () => {
  // Mock data for calendar events
  const events = [
    { date: '2025-04-03', title: 'Morning Yoga', type: 'workout', time: '07:30 AM' },
    { date: '2025-04-03', title: '5K Run', type: 'cardio', time: '05:30 PM' },
    { date: '2025-04-05', title: 'Upper Body Workout', type: 'strength', time: '10:00 AM' },
    { date: '2025-04-07', title: 'Plank Challenge', type: 'challenge', time: '06:00 PM' },
    { date: '2025-04-10', title: 'Rest Day', type: 'rest', time: 'All day' },
    { date: '2025-04-12', title: 'HIIT Session', type: 'hiit', time: '04:00 PM' },
  ];

  // Get week days for calendar header
  const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  
  // Generate calendar days for display (simplified)
  const days = Array.from({ length: 35 }, (_, i) => {
    const day = i - 3; // Offset to start with previous month days
    return {
      date: day,
      isCurrentMonth: day > 0 && day <= 30,
      hasEvents: events.some(e => {
        const eventDay = new Date(e.date).getDate();
        return eventDay === day;
      }),
      events: events.filter(e => {
        const eventDay = new Date(e.date).getDate();
        return eventDay === day;
      }),
    };
  });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container max-w-screen-xl mx-auto px-4 py-6 flex">
        <Sidebar />
        
        <main className="flex-1 px-0 md:px-6">
          <div className="mb-8">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-3xl font-bold flex items-center gap-2">
                <CalendarIcon className="h-7 w-7 text-primary" />
                <span>Workout Calendar</span>
              </h1>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="icon">
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <h2 className="text-lg font-medium">April 2025</h2>
                <Button variant="outline" size="icon">
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <Card className="mb-6">
              <CardHeader className="pb-0">
                <CardTitle>Upcoming Workouts</CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {events.slice(0, 3).map((event, i) => (
                    <Card key={i} className="bg-muted/40">
                      <CardContent className="p-4 flex items-center gap-3">
                        <div className="h-10 w-10 bg-primary/20 rounded-full flex items-center justify-center">
                          <Dumbbell className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium">{event.title}</p>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <span>{new Date(event.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                            <span>•</span>
                            <span>{event.time}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                {/* Calendar header */}
                <div className="grid grid-cols-7 gap-1 mb-2">
                  {weekdays.map((day, i) => (
                    <div key={i} className="text-center font-medium text-sm py-2">
                      <span className="hidden md:inline">{day}</span>
                      <span className="md:hidden">{day.slice(0, 3)}</span>
                    </div>
                  ))}
                </div>
                
                {/* Calendar grid */}
                <div className="grid grid-cols-7 gap-1">
                  {days.map((day, i) => (
                    <div
                      key={i}
                      className={`
                        min-h-[100px] border rounded-md p-2
                        ${day.isCurrentMonth ? 'bg-card' : 'bg-muted/40 text-muted-foreground'}
                        ${day.date === 3 ? 'ring-2 ring-primary' : ''}
                      `}
                    >
                      <div className="flex justify-between items-start mb-1">
                        <span className={`text-sm font-medium ${day.date === 3 ? 'text-primary' : ''}`}>
                          {day.date > 0 ? day.date : ''}
                        </span>
                        {day.hasEvents && (
                          <Badge 
                            variant="secondary" 
                            className="text-xs"
                          >
                            {day.events.length}
                          </Badge>
                        )}
                      </div>
                      
                      {day.hasEvents && (
                        <div className="space-y-1">
                          {day.events.map((event, j) => (
                            <div 
                              key={j}
                              className={`
                                text-xs p-1 rounded truncate
                                ${event.type === 'workout' ? 'bg-primary/10 text-primary' : ''}
                                ${event.type === 'cardio' ? 'bg-blue-100 text-blue-700' : ''}
                                ${event.type === 'strength' ? 'bg-amber-100 text-amber-700' : ''}
                                ${event.type === 'challenge' ? 'bg-purple-100 text-purple-700' : ''}
                                ${event.type === 'rest' ? 'bg-green-100 text-green-700' : ''}
                                ${event.type === 'hiit' ? 'bg-red-100 text-red-700' : ''}
                              `}
                            >
                              {event.title}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Calendar;

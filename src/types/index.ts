
export interface User {
  id: string;
  name: string;
  username: string;
  avatar: string;
  bio?: string;
  fitnessGoals: string[];
  following: number;
  followers: number;
}

export interface WorkoutPlan {
  id: string;
  title: string;
  description: string;
  author: User;
  duration: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  category: 'Strength' | 'Cardio' | 'Flexibility' | 'HIIT' | 'Mixed';
  likes: number;
  saved: number;
  exercises: Exercise[];
}

export interface Exercise {
  id: string;
  name: string;
  sets: number;
  reps: number;
  duration?: string;
  instructions?: string;
}

export interface Activity {
  id: string;
  user: User;
  type: 'workout' | 'achievement' | 'goal' | 'challenge';
  content: string;
  workout?: WorkoutPlan;
  timestamp: string;
  likes: number;
  comments: number;
}

export interface Challenge {
  id: string;
  title: string;
  description: string;
  participants: number;
  startDate: string;
  endDate: string;
  progress: number;
}

export type FitnessGoal = 
  | 'Lose Weight' 
  | 'Build Muscle' 
  | 'Improve Endurance' 
  | 'Increase Flexibility' 
  | 'Overall Health';

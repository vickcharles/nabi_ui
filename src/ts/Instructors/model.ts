export enum LessonDuration {
  thirtyMins = '30 mins',
  fortyFiveMins = '45 mins',
  sixtyMins = '60 mins',
  ninetyMins = '90 mins'
}

export interface RatesState {
  thirtyMinsRate: number;
  fortyFiveMinsRate: number;
  sixtyMinsRate: number;
  ninetyMinsRate: number;
}

export enum SkillLevel {
  beginner = 'Beginner',
  intermediate = 'Intermediate',
  advanced = 'Advanced'
}

export interface InstrumentsType {
  instrument: string;
  skillLevel: SkillLevel;
}

export interface InstructorState {
  userId: string;
  bio?: string;
  instruments?: InstrumentsType[];
  rates?: RatesState;
}

export type IState = InstructorState[];

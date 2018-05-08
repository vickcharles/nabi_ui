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
}

export type IState = InstructorState[];

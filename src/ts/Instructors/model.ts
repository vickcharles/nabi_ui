export enum SkillLevel {
  beginner = 'Beginner',
  intermediate = 'Intermediate',
  advanced = 'Advanced'
}

export interface InstructorState {
  userId: string;
  bio?: string;
  instrument?: {
    instrument: string,
    skillLevel: SkillLevel
  };
}

export type IState = InstructorState[];

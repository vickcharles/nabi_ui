export interface ExperienceType {
  id?: number;
  employer: string;
  jobTitle: string;
  fromMonth: string;
  fromYear: string;
  toMonth: string;
  toYear: string;
  location: string;
}

export enum DegreeType {
  associate = 'Associate Degree',
  bachelors = 'Bachelor\'s Degree',
  graduate = 'Graduate Degreee',
  professional = 'Professional Degree',
  certification = 'Certification',
  other = 'Other'
}

export interface EducationType {
  id?: number;
  schoolName: string;
  graduationYear: string;
  degreeType: DegreeType;
  fieldOfStudy: string;
}

export enum PlaceForLessonsOptions {
  home = 'Student\'s home',
  studio = 'Instructor\'s studio',
  online = 'Online',
}

export interface PlaceForLessonsType {
  home: boolean;
  studio: boolean;
  online: boolean;
}

export enum LessonDuration {
  thirtyMins = '30 mins',
  fortyFiveMins = '45 mins',
  sixtyMins = '60 mins',
  ninetyMins = '90 mins'
}

export interface RatesType {
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

export interface InstructorType {
  userId: string;
  bio?: string;
  instruments?: InstrumentsType[];
  rates?: RatesType;
  placeForLessons?: PlaceForLessonsType;
  studioAddress?: string;
  education?: EducationType[];
  experience?: ExperienceType[];
}

export type IState = InstructorType[];

export enum Qualifications {
  add = 'ADD',
  aspergerSyndrome= 'Asperger syndrome',
  autism = 'Autism',
  depression = 'Depression',
  diabetes = 'Diabetes',
  downSyndrome = 'Down syndrome',
  epilepsy = 'Epilepsy',
  musicTherapy = 'Music therapy',
  ocd = 'OCD',
  visualImpairment = 'Visual impairement'
}

export interface QualificationsOptions {
  label: Qualifications;
  name: string;
}

export const qualificationsOptions = {
  Add: <QualificationsOptions> {
    label: Qualifications.add,
    name: 'add'
  },
  Asperger: <QualificationsOptions> {
    label: Qualifications.aspergerSyndrome,
    name: 'aspergerSyndrome'
  },
  Autism: <QualificationsOptions> {
    label: Qualifications.autism,
    name: 'autism'
  },
  Depression: <QualificationsOptions> {
    label: Qualifications.depression,
    name: 'depression'
  },
  Diabetes: <QualificationsOptions> {
    label: Qualifications.diabetes,
    name: 'diabetes'
  },
  DownSyndrome: <QualificationsOptions> {
    label: Qualifications.downSyndrome,
    name: 'downSyndrome'
  },
  Epilepsy: <QualificationsOptions> {
    label: Qualifications.epilepsy,
    name: 'epilepsy'
  },
  MusicTherapy: <QualificationsOptions> {
    label: Qualifications.musicTherapy,
    name: 'musicTherapy'
  },
  Ocd: <QualificationsOptions> {
    label: Qualifications.ocd,
    name: 'ocd'
  },
  VisualImpairment: <QualificationsOptions> {
    label: Qualifications.visualImpairment,
    name: 'visualImpairment'
  },
};

export interface QualificationsType {
  add: boolean;
  aspergerSyndrome: boolean;
  autism: boolean;
  depression: boolean;
  diabetes: boolean;
  downSyndrome: boolean;
  epilepsy: boolean;
  musicTherapy: boolean;
  ocd: boolean;
  visualImpairment: boolean;
}

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

export enum PlaceForLessons {
  home = 'Student\'s home',
  studio = 'Instructor\'s studio',
  online = 'Online',
}

export interface PlaceForLessonsOptions {
  label: PlaceForLessons;
  name: string;
}

export const placeForLessonsOptions = {
  Home: <PlaceForLessonsOptions> {
    label: PlaceForLessons.home,
    name: 'home'
  },
  Studio: <PlaceForLessonsOptions> {
    label: PlaceForLessons.studio,
    name: 'studio'
  },
  Online: <PlaceForLessonsOptions> {
    label: PlaceForLessons.online,
    name: 'online'
  }
};

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
  qualifications?: QualificationsType;
}

export type IState = InstructorType[];

export enum Role {
  student = 'student',
  instructor = 'instructor',
  parent = 'parent'
}

export interface UserState {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  zipCode: string;
  role: Role;
  hearAboutUs: string;
}

export type IState = UserState[];

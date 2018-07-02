/**
 * Model for drawer menu item
 * @interface MenuItem
 */
export interface MenuItem {
  className?: string;
  label: string;
  url: string;
  divider?: boolean;
}

/**
 * Non-registered drawer menu
 * @enum nonRegisteredUserMenuItems
 */
export const nonRegisteredUserMenuItems = {
  createAccount: <MenuItem> {
    label: 'Create Account',
    url: 'registration',
    className: 'nabi-color-nabi nabi-margin-top-small'
  },
  infoParents: <MenuItem> {
    label: 'Information for parents',
    url: 'info-parents',
  },
  infoInstructors: <MenuItem> {
    label: 'Become a Nabi instructor',
    url: 'info-instructors',
  },
  infoInstruments: <MenuItem> {
    label: 'Don\'t have an instrument?',
    url: 'info-instruments',
    divider: true
  },
  termsOfUse: <MenuItem> {
    label: 'Terms of use',
    url: 'terms-of-use',
  },
  contact: <MenuItem> {
    label: 'Contact Us',
    url: 'contact',
  },
};

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

export interface PlaceForLessonsType {
  home: boolean;
  studio: boolean;
  online: boolean;
}
export interface InstructorTypes {
  placeForLessons?: PlaceForLessonsType;
  rates?: RatesType;
  userId: string;
}
/**
 * State for firing redirect
 * @interface RedirectState
 */
export interface RedirectState {
  fireRedirect: boolean;
}

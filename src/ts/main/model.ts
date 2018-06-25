/**
 * Model for drawer menu item
 * @interface MenuItem
 */
export interface MenuItem {
  className?: string;
  label: string;
  url: string;
}

/**
 * Non-registered drawer menu
 * @enum nonRegisteredUserMenuItems
 */
export const nonRegisteredUserMenuItems = {
  createAccount: <MenuItem> {
    label: 'Create Account',
    url: 'registration',
    className: 'nabi-color-nabi'
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

/**
 * State for firing redirect
 * @interface RedirectState
 */
export interface RedirectState {
  fireRedirect: boolean;
}

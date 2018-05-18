import { Action, Dispatch } from 'redux';
import { UserActions, ZipCodeActions } from './constants/ActionTypes';
import { UserState } from './model';
import axios  from 'axios';

interface CreateUser extends Action {
  user: UserState;
}

interface ChangeAvatar extends Action {
  id: string;
  avatar: string;
}

interface UpdateUser extends Action {
  user: UserState;
}

interface ZipCodeFetch extends Action {
  zipcodedata: any;
}

// Create user
export function createUser(user: UserState): CreateUser {
  return {
    user,
    type: UserActions.CREATE_USER
  };
}

/**
 * Action to change avatar
 * 
 * @param {string} id - The id of the user
 * @param {string} avatar - The avatar of the user
 */
export function changeAvatar(id: string, avatar: string): ChangeAvatar {
  return {
    id: id,
    avatar: avatar ,
    type: UserActions.CHANGE_AVATAR
  };
}

/**
 * Action to update user
 * 
 * @param {string} user - The new user
 */
export function updateUser(user: UserState): UpdateUser {
  return {
    user: user,
    type: UserActions.UPDATE_USER
  };
}

function fetch_zip_start(): Action {
 return {
   type: ZipCodeActions.FETCH_ZIPADDRESS_START
 };
}

function fetch_zip_done(city: string, state: string, country: string, id: string): ZipCodeFetch {
 return {
   zipcodedata: { city: city, state: state, country: country, id: id},
   type: ZipCodeActions.FETCH_ZIPADDRES_DONE
 };
}

function fetch_zip_error(): Action {
 return {
   type: ZipCodeActions.FETCH_ZIPADDRESS_ERROR
 };
}

/**
 * Special Action for Fetching with axios, Gets user zipcode and dispatches
 * 3 actions, Starting, Done Fetching, Some Error. This way is best practice
 * to load data from API so UI doesn't depend on internal calls. 
 * 
 * @export
 * @param {UserState} user 
 * @returns 
 */
export function fetchZipCodeAddress( user: UserState ) {
 return async (dispatch: Dispatch<UserState>): Promise<void> => {
   dispatch(fetch_zip_start());
   let url = `https://maps.googleapis.com/maps/api/geocode/json?`;
   url += `address=${user.zipCode}&key=AIzaSyDFRiJ2j-4brJg2_MLmxZ-TXK4ObZee69c`;
   return axios.get(url)
   .then(
     (res) => {
        let AddressForm = res.data.results[0] || [];
        if ( res.data.results.length ) {
          function getValues(values: string[]) {
            return AddressForm.address_components.filter( (obj: any) => {
              return obj.types.some((o: any) => values.includes(o));
            });
          }
          user.city = getValues(['neighborhood', 'locality', 'sublocality'])[0].short_name;
          user.state = getValues(['administrative_area_level_1'])[0].short_name;
          user.country = getValues(['country'])[0].short_name;
          dispatch( fetch_zip_done( user.city || ''  , user.state || '' , user.id || '', user.country || '' ));
       } else {
          dispatch( fetch_zip_done( '', '', '', user.id ) );
       }
     }
   )
   .catch(
     (err) => {
        dispatch(fetch_zip_error());
     } 
   );
 };
}

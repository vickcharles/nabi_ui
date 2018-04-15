import * as React from 'react';
import { UserState } from '../../../Registration/model';
import NameLocationBio from './NameLocationBio';

interface BasicInfoProps {
  user: UserState;
}

const BasicInfo: React.StatelessComponent<BasicInfoProps> = props => {
  return (
  <NameLocationBio 
    firstName={props.user.firstName}
    lastName={props.user.lastName}
    zipCode={props.user.zipCode} 
  />
  );
};

export default BasicInfo;

import * as React from 'react';
import { UserState } from '../../../Registration/model';
import NameAndLocation from './NameAndLocation';

interface BasicInfoProps {
  user: UserState;
}

const BasicInfo: React.StatelessComponent<BasicInfoProps> = props => {
  return (
  <NameAndLocation 
    firstName={props.user.firstName}
    lastName={props.user.lastName}
    zipCode={props.user.zipCode} 
  />
  );
};

export default BasicInfo;

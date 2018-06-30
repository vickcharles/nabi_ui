import * as React from 'react';
import QualificationsFields from '../components/ProfileBuilder/Qualifications/QualificationsFields';
import { shallow } from 'enzyme';

describe('QualificationsFields', () => {
  let wrapper: any;
  const handleChangeQualifications: (event: React.FormEvent<{}>) => void = jest.fn();

  describe('Shallow', () => {
    beforeEach(() => {
      wrapper = shallow(
        <QualificationsFields
          handleChangeQualifications={handleChangeQualifications}
          add={false}
          aspergerSyndrome={false}
          autism={false}
          depression={false}
          diabetes={false}
          downSyndrome={false}
          epilepsy={false}
          musicTherapy={false}
          ocd={false}
          visualImpairment={false}
        />
      );
    });

    it('Matches snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});

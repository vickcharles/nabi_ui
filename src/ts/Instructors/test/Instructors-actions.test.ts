import * as actions from '../actions';

import { InstructorActions } from '../constants/ActionTypes';
import { InstructorType } from '../model';

describe('Instructors actions', () => {
  it('Creates an action to add instructor', () => {
    const instructor: InstructorType = {
      userId: 'foo',
      bio: 'carupano'
    };

    const expectedAction = {
        instructor,
      type: InstructorActions.CREATE_INSTUCTOR
    };

    expect(actions.createInstructor(instructor)).toEqual(expectedAction);
  });

  it('Creates an action to update Instructor', () => {
    const instructor: InstructorType = {
        userId: 'foo',
        bio: 'caracas'
    };

    const expectedAction = {
      instructor,
      type: InstructorActions.UPDATE_INSTRUCTOR
    };

    expect(actions.updateInstructor(instructor)).toEqual(expectedAction);
  });
});

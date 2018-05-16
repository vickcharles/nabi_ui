import { Action } from 'redux';
import { InstructorActions } from './constants/ActionTypes';
import { InstructorState } from './model';

interface CreateInstructor extends Action {
  instructor: InstructorState;
}

interface UpdateInstructor extends Action {
  instructor: InstructorState;
}

/**
 * Action to create a new instructor
 * @param {instructor} instructor - The new instructor
 */
export function createInstructor(instructor: InstructorState): CreateInstructor {
  return {
    instructor,
    type: InstructorActions.CREATE_INSTUCTOR
  };
}

/**
 * Action to update instructor
 * @param {instructor} instructor - The updated instructor's state
 */
export function updateInstructor(instructor: InstructorState): UpdateInstructor {
  return {
    instructor,
    type: InstructorActions.UPDATE_INSTRUCTOR
  };
}

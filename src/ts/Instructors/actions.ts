import { Action } from 'redux';
import { InstructorActions } from './constants/ActionTypes';
import { InstructorType } from './model';

interface CreateInstructor extends Action {
  instructor: InstructorType;
}

interface UpdateInstructor extends Action {
  instructor: InstructorType;
}

/**
 * Action to create a new instructor
 * @param {instructor} instructor - The new instructor
 */
export function createInstructor(instructor: InstructorType): CreateInstructor {
  return {
    instructor,
    type: InstructorActions.CREATE_INSTUCTOR
  };
}

/**
 * Action to update instructor
 * @param {instructor} instructor - The updated instructor's state
 */
export function updateInstructor(instructor: InstructorType): UpdateInstructor {
  return {
    instructor,
    type: InstructorActions.UPDATE_INSTRUCTOR
  };
}

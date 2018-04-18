import { Action } from 'redux';
import { InstructorActions } from './constants/ActionTypes';
import { InstructorState } from './model';

interface CreateInstructor extends Action {
  instructor: InstructorState;
}

interface UpdateInstructor extends Action {
  instructor: InstructorState;
}

// Create instructor
export function createInstructor(instructor: InstructorState): CreateInstructor {
  return {
    instructor,
    type: InstructorActions.CREATE_INSTUCTOR
  };
}

// Update instructor
export function updateInstructor(instructor: InstructorState): UpdateInstructor {
  return {
    instructor,
    type: InstructorActions.UPDATE_INSTRUCTOR
  };
}

import reducer from '../';
import { InstructorActions } from '../constants/ActionTypes';
import { InstructorState, IState } from '../model';

describe('Instructors reducer', () => {
  let state: IState;

  beforeEach(() => {
    state = [
      {
        userId: 'foo',
        bio: 'bar'
      }
    ];
  });

  it('Handles CREATE_INSTRUCTOR', () => {
    expect(
      reducer(state, {
        type: InstructorActions.CREATE_INSTUCTOR,
        instructor: {
          userId: 'hello',
          bio: 'something'
        } as InstructorState
      })
    ).toEqual([
      {
        userId: 'foo',
        bio: 'bar'
      },
      {
        userId: 'hello',
        bio: 'something'
      }
    ]);
  });

  describe('Handles UPDATE_INSTRUCTOR', () => {
    it('when all values are set in payload', () => {
      expect(
        reducer(state, {
          type: InstructorActions.UPDATE_INSTRUCTOR,
          instructor: {
            userId: 'foo',
            bio: 'something'
          } as InstructorState
        })
      ).toEqual([
        {
        userId: 'foo',
        bio: 'something'
        }
      ]);
    });
  });
});

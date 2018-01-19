import * as constants from '../data/constants';

function session(state = {}, action) {
  switch (action.type) {
    case constants.createSession:
      return {
        ...state,
        isLoaded: false,
        error: '',
      };
    case `${constants.createSession}_SUCCEEDED`:
      return {
        ...state,
        isLoaded: true,
        current: action.session,
      };
    case constants.exerciseOptionSelected: {
      const { exerciseProgress, lesson } = state.current;
      const currentExercise = lesson.exercises[exerciseProgress];
      const { options } = currentExercise;
      const selectionIndex = options.findIndex(e => e.label === action.option.label);
      return {
        ...state,
        isLoaded: true,
        current: {
          ...state.current,
          lesson: {
            ...lesson,
            exercises: [
              ...lesson.exercises.slice(0, exerciseProgress),
              {
                ...currentExercise,
                options: [
                  ...options.slice(0, selectionIndex).map(e => ({ ...e, selected: false })),
                  {
                    ...action.option,
                    selected: true,
                  },
                  ...options.slice(selectionIndex + 1).map(e => ({ ...e, selected: false })),
                ],
              },
              ...lesson.exercises.slice(exerciseProgress + 1),
            ],
          },
        },
      };
    }
    case constants.exerciseSubmitted: {
      // If we skip the exercise, we send failExercise to true, so no checking
      // the selection, but instead just failing it. Actually selection could be
      // null if skipping no selecting a exercise
      const { exerciseProgress, exerciseResults, lesson } = state.current;
      const currentExercise = lesson.exercises[exerciseProgress];
      const { options } = currentExercise;
      const selection = options.find(e => e.selected);
      return {
        ...state,
        isLoaded: true,
        current: {
          ...state.current,
          exerciseResults: {
            ...exerciseResults,
            [currentExercise.id]: action.failExercise ? false : selection.ok,
          },
        },
      };
    }
    case constants.incrementExerciseProgress: {
      const { exerciseProgress } = state.current;
      return {
        ...state,
        isLoaded: true,
        current: {
          ...state.current,
          exerciseProgress: exerciseProgress + 1,
        },
      };
    }
    case constants.exception:
      return {
        ...state,
        isLoaded: false,
        error: action.message,
      };
    default:
      return state;
  }
}

export default session;

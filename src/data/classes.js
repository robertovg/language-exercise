/**
 * We will have multiple lessons to show in the initial screen,
 * each with a couple of exercises to fill.
 * Each lesson will have a number to indicate the level, so I'll sort the
 * Lessons by it, and the user won't be able to select further Level lessons
 * till we finish the current level Lesson, then the user level will be
 * select next level Lesson.
 */
export class Lesson {
  constructor(params = {}) {
    const {
      id = '',
      name = 'Lesson X',
      exercises = [],
      level = 0,
      okMessage = 'Well done',
      failMessage = 'Next time you will do better',
    } = params;

    this.id = id;
    this.name = name;
    this.exercises = exercises;
    this.level = level;
    this.okMessage = okMessage;
    this.failMessage = failMessage;
  }
}
/**
 * Each exercise could have different type but for this demo we will only
 * implement `fillingTheWord`.
 * To make things simpler, I'll include the images of each Exercise with base64,
 * so don't have to worry about fetching external images in the demo.
 */
export class Exercise {
  constructor(params = {}) {
    const {
      id = '',
      sentence = '',
      solution = '',
      options = [],
      solutionExplanation = [],
      image = '',
      type = 'fillingTheWord',
      explanation = 'Enter the missing word',
      okMessage = 'Your answer is good!',
      failMessage = 'Next time you will do better',
    } = params;
    this.id = id;
    this.sentence = sentence;
    this.solution = solution;
    this.options = options;
    this.image = image;
    this.imageCaption = 'exerciseCaption';
    this.solutionExplanation = solutionExplanation;
    this.type = type;
    this.explanation = explanation;
    this.okMessage = okMessage;
    this.failMessage = failMessage;
  }
}

/**
 * Minimum expression of the representation of an user.
 * We should update the level of the user each time we
 * pass a Lesson, and the score the user got when we finish a lesson
 */
export class User {
  constructor(params = {}) {
    const { id = '', name = 'User Name', level = 0, levelResults = {} } = params;
    this.id = id;
    this.name = name;
    this.level = level;
    this.levelResults = levelResults;
  }
}

/**
 * When an user select a Lesson, we start a Session,
 * So from now we will also have only sessions locally
 * and not fetched / updated anywhere, but in the future
 * it should.
 * We can go just forward, so each time we select something in
 * one exercise, add the result in the `exerciseResults` and
 * add 1 to `exerciseProgress`. Because we know how many exercises
 * there are per Lesson, we can get the current progress and the score.
 */
export class Session {
  constructor(params = {}) {
    const {
      // Just to mock a new session id and show is not depended to anything
      id = `s${Math.floor(Math.random() * 10000)}`,
      lesson,
      user,
      exerciseProgress = 0,
      exerciseResults = {},
    } = params;
    // Simple validation to always have a Session with a real User and a real Lesson
    if (!(lesson instanceof Lesson) || !(user instanceof User)) {
      throw new Error('Session needs an user and lesson to be created ');
    }
    this.id = id;
    this.lesson = lesson;
    this.user = user;
    this.exerciseProgress = exerciseProgress;
    this.exerciseResults = exerciseResults;
  }
}

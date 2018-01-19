# language-exercise

**Just a simple example to show and practice code skills** resolving the implementation of a simple game of selecting the missing word in a sentence.

There is no real serverside but instead, a mock `dataFetcher` generator which will just provide the **lessons** and the **exercises** for each **lesson** (but right now just hardcoded)

We assume the user is logged and the state is saved in the store as an **user**, right now it has a hardcoded and **user.level** and **user.levelResults** but in theory, this are the params we should save and fetch for each user of the application.

Each **lesson** is assigned to a level. So knowing the **user.level** of each **user** we can grant access to the previous **lessons** results and to the next **lesson** to face.

Each time a user select a **lesson**, we generate a "not persisted" **session** which will track the progress of the user during the **exercises** of the **session**. If he passes the lesson, the **user.level** then is updated and the **user.levelResults** saved.

The project was created using `create-react-app` and the following technology stack: `react v.16`, `react-router v4.2` and `redux-saga`. To communicate between them I've been trying `react-router-redux` and just some simple `prop-types` validations.

In terms of syntax, `babel` heavily used to get the best of last `es6` features (`stage-0`) and `eslint` with `prettier` to have a consistent code style across the application.

No real assets used, but instead simple `favicons` and some simple styles. Kind of `BEM` class styles flavour, but really nicely done using `CSS grid` as much as possible.

The application is designed to have two entry points;

* `/` -> Lessons: Where the user is able to select passed lessons and the next lesson to face. We fetch all lessons data (without the related exercises).
* `/session/:lessonId` -> Session: Where the user is able to select the passed lessons and the next lesson to face. Here we fetch just the current lesson (if is not already loaded) and the exercises for the current lesson.

## TODOs

* [x] Create the project with `create-react-app` and plan the execution.
* [x] Add `.babelrc` & `.eslintrc` with `prettier` configuration
* [x] Add needed dependencies to the package
* [x] Install the Router to navigate between the two pages to select
* [x] Generate classes to have clear instances (Lesson, Exercise, User, Session)
* [x] Decide which style approach to using (BEM)
* [x] Create project structure with redux-saga
* [x] Create a Json mock data for lessons and exercises (returning async to have everything prepared)
* [x] Create Lessons component
* [x] Create Session component (instance of Lesson and user)
* [x] Create Exercise component not submitted (each of the steps for a Lesson)
* [x] Create Exercise component submitted (each of the steps for a Lesson)
* [x] Connect Logic to Exercise component
* [x] Work on the styles for mobile first
* [x] Transform the styles to adapt the application to desktop
* [x] Polish styles and UX.
* [ ] Connect 'instructions', 'help', 'ask' and 'answers' functionalities (out of the scope of the test imo)
* [ ] Add test with jest
* [ ] Think about persisting the **session** and the **user**, even in localhost, to don't have to start from the hardcoded level after page reload.
* [ ] Think of i18n support for hardcoded words in templates.

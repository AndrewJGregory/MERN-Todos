# [MERN Todo App](https://todos-with-mern.herokuapp.com/#/)

The most uncreatively titled app of all time.

## Why?

The end goal is to convert/rewrite the Rails backend of my other project [MessageMe](http://github.com/andrewjgregory/MessageMe/) to Node.js as a learning exercise. I decided to write a simple todo app to gain basic familiarity with Node.js, MongoDB, and Express.js before diving into more complex features like real-time messaging.

## New Technologies

I love trying new technologies with a new project. Here are the new ones that I am incorporating into this project and why:

- [React Hooks](https://reactjs.org/docs/hooks-overview.html) because they DRY up code
- [reactstrap](https://github.com/reactstrap/reactstrap) to gain knowledge of bootstrap and so I don't spend a lot of time styling this app, since that is not the main purpose
- [Node](https://nodejs.org), [MongoDB](https://www.mongodb.com/), [Express](https://expressjs.com/) to gain knowledge of these rapidly growing technologies
- [reselect](https://github.com/reduxjs/reselect) to memoize redux selectors
- [BEM](https://css-tricks.com/bem-101/) to have some logic of how I name my CSS classes, instead of picking what I think sounds right

## MVPs

### Done

- Sign up, sign in, log out
- Edit a todo
- Delete a todo
- Todo completion status
- User show page with corresponding todos
- Add an [error boundary](https://reactjs.org/docs/error-boundaries.html), [complete with displaying a fallback UI](https://github.com/AndrewJGregory/MERN-Todos/blob/master/frontend/src/components/ErrorBoundary.js) _and_ [emailing myself an error report](https://github.com/AndrewJGregory/MERN-Todos/blob/master/routes/api/emails.js). Unfortunately, the stack trace is minified in production but there seems to be [no easy solution](https://github.com/facebook/create-react-app/issues/3753).

### Next

- Create a todo
- Timestamps for todos (most recent)
- Filter by "Active" and "Completed"

### Bonus

- "Like" other user's todos and comments
- Comment on todos with full CRUD
- Group todos in folders
- Be able to move todos from one folder to another
- Real time chatting (to get a sense of what the future holds for re-writing the backend of MessageMe)

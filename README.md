# Method Middleware for Redux

## Install
`npm i --save redux-method-middleware`

## Setup

```js
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import reduxMethodMiddleware from 'redux-method-middleware';
import createLogger from 'redux-logger';

const logger = createLogger();
const store = createStore(
  reducer,
  applyMiddleware(thunk, reduxMethodMiddleware, logger)
);

// Note passing middleware as the third argument requires redux@>=3.1.0
```

## Usage
```js
// implementation

Store.dispatch({
  type: "SOMETIHNG_ASYNC",
  method: function (cb) {
    return someAsyncFunc(params, cb);
  }
});
```

What this does will first dispatch to the store our action with `readyState` to loading. Our async method will be called and when the callback returns, if an error has occured we dispatch our action with `readyState` `error`. If all successful, `readyState` is `success`, and you're good to go. 

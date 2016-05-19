# Method Middleware for Redux

## Install
`npm i --save redux-method-middleware`

## Usage

```javascript
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

// implementation

Store.dispatch({
  type: "SOMETIHNG_ASYNC",
  method: function (cb) {
    return someAsyncFunc(params, cb);
  }
});
```


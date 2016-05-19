/**
 * A redux middleware for processing Meteor methods
 * When an action is dispatched, it will pass through our middleware.
 * if denoted a method, we will dispatch the action with readyState of loading
 * The method passed in is then called, and dispatches further ready states for success/error
 * The reducer shape should include { data, readyState } for use in the UI
 * @returns {Function}
 */
export default function reduxMethodMiddleware() {
  return (next) => {
    return (action) => {
      const { method, ...rest } = action;
      if (!method) {
        return next(action);
      }
      next({
        ...rest,
        readyState: 'loading'
      });
      return method((error, result) => {
        if (error) {
          return next({
            error: error.reason,
            readyState: 'error', ...rest
          });
        }
        return next({
          data: result,
          readyState: 'success', ...rest
        });
      });
    };
  };
}

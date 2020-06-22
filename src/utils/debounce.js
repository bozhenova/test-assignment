const debounce = function (func) {
  const DEBOUNCE_INTERVAL = 400;
  let timerId;

  return function (...args) {
    const action = () => {
      timerId = null;
      return func.apply(null, args);
    };
    clearTimeout(timerId);
    timerId = setTimeout(action, DEBOUNCE_INTERVAL);
  };
};

export default debounce;

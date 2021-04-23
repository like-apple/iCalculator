export const initialState = {
  currentValue: '0',
  operator: null,
  previousValue: null,
};

export const handleNumber = (value, state) => {
  if (state.currentValue === '0') {
    state.currentValue = `${value}`;
    return state;
  }

  state.currentValue = `${state.currentValue}${value}`;
  return state;
};

export const handleEqual = state => {
  const {currentValue, previousValue, operator} = state;

  const current = parseFloat(currentValue);
  const previous = parseFloat(previousValue);
  const resetState = {
    operator: null,
    previousValue: null,
  };

  if (operator === '/') {
    return {
      currentValue: previous / current,
      ...resetState,
    };
  }

  if (operator === '*') {
    return {
      currentValue: previous * current,
      ...resetState,
    };
  }

  if (operator === '+') {
    return {
      currentValue: previous + current,
      ...resetState,
    };
  }

  if (operator === '-') {
    return {
      currentValue: previous - current,
      ...resetState,
    };
  }

  return state;
};

const calculator = (type, value, state) => {
  switch (type) {
    case 'number':
      state = handleNumber(value, state);
      break;
    case 'operator':
      state.operator = value;
      state.previousValue = state.currentValue;
      state.currentValue = '0';
      break;
    case 'equal':
      state = handleEqual(state);
      break;
    case 'clear':
      state.operator = null;
      state.previousValue = null;
      state.currentValue = '0';
      return state;
    case 'posneg':
      state.currentValue = `${parseFloat(state.currentValue) * -1}`;
      break;
    case 'percentage':
      state.currentValue = `${parseFloat(state.currentValue) * 0.01}`;
      break;
    default:
      return state;
  }
  return state;
};

export default calculator;

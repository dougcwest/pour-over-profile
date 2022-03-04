export const FETCH_COFFEE = 'FETCH_COFFEE';
export const CREATE_RECIPE = 'CREATE_RECIPE';
export const START_TIMER = 'START_TIMER';
export const RESET_TIMER = 'RESET_TIMER';
export const STOP_TIMER = 'STOP_TIMER';

export function fetchCoffee() {
  return {
    type: FETCH_COFFEE,
  };
}

export function createRecipe(values) {
  const recipe = { ...values };
  return {
    type: CREATE_RECIPE,
    payload: recipe,
  };
}

export function startTimer(baseTime = 0) {
  return {
    type: 'START_TIMER',
    baseTime,
    now: new Date().getTime(),
  };
}

export function stopTimer() {
  return {
    type: 'STOP_TIMER',
    now: new Date().getTime(),
  };
}

export function resetTimer() {
  return {
    type: 'RESET_TIMER',
    now: new Date().getTime(),
  };
}

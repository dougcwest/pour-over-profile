export const FETCH_COFFEE = 'FETCH_COFFEE';
export const CREATE_RECIPE = 'CREATE_RECIPE';

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

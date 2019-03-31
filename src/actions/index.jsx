export const addItem = (itemId) => ({
  type: 'ADD_CHILDREN',
  payload: itemId,
});

export const removeItem = (itemId) => ({
  type: 'REMOVE',
  payload: itemId,
});

export const editItem = (itemId) => ({
  type: 'EDIT',
  payload: itemId,
});
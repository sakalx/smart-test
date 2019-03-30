export const addItem = (itemId) => {
  console.log('itog', itemId)
  return {
    type: 'ADD_CHILDREN',
    payload: itemId
  };
};

export const removeItem = (itemId) => {
  return {
    type: 'REMOVE',
    payload: itemId
  };
};

export const editItem = (itemId) => {
  return {
    type: 'EDIT',
    payload: itemId
  };
};
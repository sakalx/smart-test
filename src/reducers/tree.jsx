const tree = (state, action) => {

  console.log('obnovlenie');

  if (state === undefined) {
    return {
      data: 0,
      id: '0',
      children: [{
        data: 2,
        id: '1-0',
        children: [{
          data: 3,
          children: null,
          id: '2-0'
        },
        {
          data: 4,
          children: null,
          id: '2-1'
        }],
      }],
    };
  }

  const findItem = (obj, id) => {
    console.log('suda', obj, id);
    if (obj.id === id) {
      return obj;
    } else if (obj.children) {
      return obj.children.find((el) => {
        return findItem(el, id);
      });
    }
  };

  const addItem = (state, itemId) => {
    console.log('suda 1', state.tree);
    const newState = Object.assign(state.tree);
    let item = findItem(newState, itemId);
    console.log('tut', item);
    if (!item.children) {
      item.children = []
    }
    item.children.push({
      data: null,
      id: `${itemId}${item.children.length}`,
      children: null
    })
    console.log('itogi', newState);
    return newState;
  };

  console.log(action)
  switch (action.type) {
    case 'ADD_CHILDREN':
      console.log('suda 2');
      return addItem(state, action.payload);

    case 'REMOVE':
      return {
        data: null,
        children: null,
        parent: null
      };

    case 'EDIT':
      return {
        data: null,
        children: null,
        parent: null
      };

    default:
      return state.tree;
  }
};

export default tree;

import {uuidv4} from '../utils';

const initState = {
  data: 0,
  id: uuidv4(),
  children: [
    {
      data: 2,
      id: uuidv4(),
      children: [
        {
          data: 3,
          children: [],
          id: uuidv4(),
        },
        {
          data: 4,
          children: [],
          id: uuidv4(),
        }],
    }],
};

const tree = (state = initState, {type, payload}) => {

  const addItem = (itemId) => {
    // [NOTE] Deep Copying Objects for keep it Immutable!
    // [TODO] Better way use lodash https://lodash.com/docs#cloneDeep
    // [FIXME] Crutch!
    const tree = JSON.parse(JSON.stringify(state));

    const newNode = {
      children: [],
      data: 'some data',
      id: uuidv4(),
    };

    // [NOTE] IIFE Recursive travers tree for add new node
    void function traverse(node) {
      if (node.id === itemId) {
        node.children.push(newNode);
        return;
      }
      node.children.forEach((node) => {
        traverse(node);
      });

    }(tree);

    return tree;
  };

  switch (type) {
    case 'ADD_CHILDREN':
      return addItem(payload);

    case 'REMOVE':
      return state;

    case 'EDIT':
      return state;

    default:
      return state;
  }
};

export default tree;

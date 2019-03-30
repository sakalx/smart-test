import tree from './tree';

const reducer = (state, action) => {
  return {
    tree: tree(state, action)
  };
};

export default reducer;

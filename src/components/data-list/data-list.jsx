import React from 'react';

import {connect} from 'react-redux';

import DataItem from '../data-item';

import './data-list.css';

const DataList = ({tree}) => {

  const renderTree = (tree) => {
    if (tree.children.length) {
      return (
          <li key={tree.id}>
            <DataItem data={tree.data} id={tree.id}/>
            <ul>
              {tree.children.map((childrenTree) =>
                  renderTree(childrenTree),
              )}
            </ul>
          </li>
      );
    } else {
      return (
          <li key={tree.id}>
            <DataItem data={tree.data} id={tree.id}/>
          </li>
      );
    }
  };

  return (
      <ul className="list">
        {renderTree(tree)}
      </ul>
  );
};

const mapStateToProps = ({tree}) => ({
  tree,
});

export default connect(mapStateToProps, null)(DataList);
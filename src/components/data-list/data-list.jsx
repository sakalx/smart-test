import React from 'react';
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { addItem, removeItem, editItem } from '../../actions';
// import { compose } from '../../utils';

import DataItem from '../data-item';

import './data-list.css';

const DataList = (a) => {

  const func = (a, add, edit, remove) => {
    console.log(a)
    if (a.children) {
      return (
          <li key={a.id}>
            <DataItem data={a.data} id={a.id} addItem={add} editItem={edit} removeItem={remove} />
            <ul>
              {
                a.children.map((el) => {
                  return func(el, a.addItem, a.editItem, a.removeItem);
                })
              }
            </ul>
          </li>
      )
    } else {
      return (
        <li key={a.id}>
          <DataItem data={a.data} id={a.id} addItem={add} editItem={edit} removeItem={remove} />
        </li>
      )
    }
  }

  return (
    <ul className="list">
      {func(a, a.addItem, a.editItem, a.removeItem)}
    </ul>
  );
};

const mapStateToProps = ({ tree: { data, children, id }}) => {
  return { data, children, id };
};

const mapDispatchToProps = {
  addItem,
  removeItem,
  editItem
};

export default connect(mapStateToProps, mapDispatchToProps)(DataList);
import React from 'react';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {addItem, removeItem, editItem} from '../../actions';

import './data-item.css';

const DataItem = ({
                    addItem,
                    data,
                    editItem,
                    id,
                    removeItem,
                  }) => {
  const handleAddItem = () => {
    addItem(id);
  };
  const handleEditItem = () => {
    editItem(id);
  };
  const handleRemoveItem = () => {
    removeItem(id);
  };

  return (
      <div className={`item item-${id}`}>
        <div className="content">{data}</div>
        <div className="buttons">
          <button className="edit" onClick={handleEditItem}>
            Edit
          </button>
          <button className="delete" onClick={handleRemoveItem}>
            Delete
          </button>
          <button className="add" onClick={handleAddItem}>
            Add child
          </button>
        </div>
      </div>
  );
};

const mapDispatchToProps = dispatch => bindActionCreators({
  addItem,
  removeItem,
  editItem,
}, dispatch);

export default connect(null, mapDispatchToProps)(DataItem);
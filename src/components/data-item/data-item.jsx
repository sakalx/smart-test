import React from 'react';

import './data-item.css';

const DataItem = ({data, id, addItem, editItem, removeItem}) => {
  return (
    <div className={`item item-${id}`}>
      <div className="content">{data}</div>
      <div className="buttons">
        <button className="edit" onClick={() => editItem(id)}>Edit</button>
        <button className="delete" onClick={() => removeItem(id)}>Delete</button>
        <button className="add" onClick={() => addItem(id)}>Add child</button>
      </div>
    </div>
  );
}


export default DataItem;
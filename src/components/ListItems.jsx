import React from 'react'

const ListItems = ({items, className = ""}) => (
  <ul className={`list-items ${className}`}>
    {items.map((item, idx) => (
      <li key={idx}>{item}</li>
    ))}
  </ul>
);

export default ListItems

import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function ListBar({PRODUCTS}) {
  const mapAll = PRODUCTS.map(all => {
    return (
      <ListGroup.Item action as={Link} to={all.id} key={all.id}>{all.name}</ListGroup.Item>
    )
  })
  return (
    <div>{mapAll}</div>
  )
}

export default ListBar;

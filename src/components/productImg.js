import React from 'react';


const ProductImg = (props) => {
  return (
    <div className="person">
      <img src={props.img} alt={props.description}/>
    </div>
  )
};
export default ProductImg;

import React from "react";

const Card = ({ img, title, type }) => {
  return (
    <div className="card card-compact w-72 bg-base-100 shadow-xl h-96" id="card">
      <figure>
        <img src={img} alt={title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{type}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Card;

import React from "react";
import "../../styles/index.css";

export const Jumbotron = () => {
  return (
    <div className="container bg-light text-start p-4 my-5">
      <h1 className="display-4">A Warm Welcome</h1>
      <p className="lead">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, cum
        reprehenderit! Explicabo sint tempora facilis sequi cupiditate iste
        libero corrupti exercitationem itaque, labore repellendus assumenda
        dolorum, delectus, eaque provident illum.
      </p>
      <a href="#" className="btn btn-primary btn-lg">
        Call to action!
      </a>
    </div>
  );
};

export default Jumbotron;

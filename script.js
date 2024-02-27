import React from "react";
import ReactDOM  from "react-dom/client";

const  Heading = ()=>(
      <div id="heading">
         <h1>First jsx heading</h1>
      </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading></Heading>);



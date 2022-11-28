// import React from "react";
// import ReactDOM from "react-DOM";

// function MainContent() {
//   return <h1> Hi I 'm learning React</h1>;
// }

// ReactDOM.render(
//   <div>
//     <MainContent />
//   </div>,
//   document.getElementById("root")
// );

const h1Element = document.createElement("h1");
h1Element.innerText = "hi there";
h1Element.className = "header";

const rootEle = document.getElementById("root");

rootEle.appendChild(h1Element);

const page = (
  <div>
    <h1>i</h1>
  </div>
);

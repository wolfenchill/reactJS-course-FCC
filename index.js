// import React from "react";
// import ReactDOM from "react-DOM";

const e = React.createElement;

function Nav() {
  return (
    <div>
      <h1>PPC Alpha</h1>
      <ul>
        <li>Pricing</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  );
}
const domContainer = document.querySelector("#root");
const root = ReactDOM.createRoot(domContainer);
root.render(e(Nav));

import React from "react";
import ReactDOM from "react-dom/client"
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello world From React!"
);

const root = ReactDOM.createRoot(document.getElementById("root"));
// console.log(heading); //object

const parent = React.createElement("div", { id: "Parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am a h1 tag"),
    React.createElement("h1", {}, "I am a h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am a h1 tag"),
    React.createElement("h1", {}, "I am a h2 tag"),
  ]),
]);
root.render(parent);

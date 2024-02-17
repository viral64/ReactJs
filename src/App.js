import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header"
import Body from "./Components/Body";
//App Layout
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};


//data








//Body


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

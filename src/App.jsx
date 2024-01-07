import React from "react";
import ReactDOM from "react-dom";
import Pet from './pet';
// const Pet = (props) => {
//     return React.createElement("div", {}, [
//       React.createElement("h1", {}, props.name),
//       React.createElement("h2", {}, props.animal),
//       React.createElement("h2", {}, props.breed),
//     ]);
//   };

  const App = () => {
    return React.createElement("h1",
     {},
      [
       React.createElement("h1", {}, "Adopt Me!"),
       React.createElement(Pet,{animal:"Dog",name:"Luna",breed:"Havanese"}),
       React.createElement(Pet,{ animal:"Bird",name:"Pepper",breed:"Cockatiel"}),
       React.createElement(Pet,{ animal:"Cat", name:"Doink", breed:"Mixed breed"}),
    ]
   );
};  
  
  const el = React.createElement(App);
  const container = document.getElementById("root");
  const root = ReactDOM.createRoot(container);

  root.render(el);
 
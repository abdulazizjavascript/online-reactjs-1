import React, { Fragment } from "react";

import FunctionalComponent from "../components/functional-component/FunctionalComponent";
import ClassComponent from "../components/class-component/ClassComponent";

import add from "../utils/add";

const linkStyle = {
  fontSize: '40px',
  color: 'orange',
  textDecoration: 'none'
}

const titleStyle = {
  fontSize: '40px',
  margin: "20px 0"
}

function LearningPage() {
  const a = 10;
  const b = 20;
  const c = add( a, b );
  return <Fragment>
    <a style={linkStyle} href="https://abdulazizprogrammer.uz">Abdulaziz Programmer</a>
    <h1 style={titleStyle}>{a} + {b} = {c}, {c > 0 ? 'Musbat' : c === 0 ? 'Nol' : "Manfiy"}, {c % 2 === 0 ? "Juft" : "Toq"}</h1>
    <FunctionalComponent />
    <ClassComponent />
  </Fragment>
}

// function LearningPage() {
//   return <>
//     <FunctionalComponent />
//     <ClassComponent />
//   </>
// }

// function LearningPage() {
//   const h1 = React.createElement( 'h1', {}, "Hello ReactJS" )
//   const p = React.createElement( 'p', {}, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, nam?" )
//   const div = React.createElement( 'div', { className: "App" }, h1, p );
//   return div
// }

// function LearningPage() {
//   return (
//     <div className="App">
//       <h1>Hello ReactJS</h1>
//       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, nam?</p>
//     </div>
//   );
// }

export default LearningPage;

import { Component } from "react";

import "./ClassComponent.css";

class ClassComponent extends Component {
  render() {
    return <div className="class-component">
      <h1 className="title">ClassComponent</h1>
      <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, expedita.</p>
    </div>
  }
}

export default ClassComponent
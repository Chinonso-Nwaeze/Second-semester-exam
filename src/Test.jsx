import React from "react";
import { Link } from "react-router-dom";

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: false };
  }

  render() {
    if (this.state.error) {
      throw new Error("Test error");
    }

    return (
      <div>
        <h1>Error Boundary Test</h1>
        <p>This page is for error boundary</p>
        <Link className="homeErrBound" to="/">
          Home
        </Link>
      </div>
    );
  }
}

export default Test;

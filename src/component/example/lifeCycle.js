import React from "react";

class LifeCycle extends React.Component {
  constructor(props) {
    super(props);
    console.log("Constructor calledd....");
  }
  componentDidMount() {
    console.log("element already placed....");
  }
  componentWillUnmount() {
    console.log("componeent removed.......");
  }
  render() {
    return <h6>Welcome to Lifecycle Sessions</h6>;
  }
}

export default LifeCycle;

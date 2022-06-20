import React from "react";

class ToggleButton extends React.Component {
  state = { toggle: false };
  handleClick() {
    this.setState({ toggle: !this.state.toggle });
    console.log("click as been called", this.state);
  }
  render() {
    const { toggle } = this.state;
    return (
      <div className="card">
        <div className="card-body">
          <h5 class="card-title">Toggle option -{toggle.toString()}</h5>
          <button
            className="btn btn-primary"
            onDoubleClick={() => this.handleClick()}
          >
            Change state
          </button>
        </div>
      </div>
    );
  }
}

export default ToggleButton;

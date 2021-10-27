import React, { Component } from "react";
import Journey from "./Journey/Journey";
import Name from "./Name/Name";
import Tracker from "./Tracker/Tracker";
import Age from "./Age/Age";
import Cash from "./Cash/Cash";

class Body extends React.Component {
  state = {
    stage: "journey",
  };
  render() {
    return (
      <div className="bg-light h-100">
        <div
          className="mx-5"
          style={{
            width: "95vw!important",
          }}
        >
          <div className="row d-flex flex-row justify-content-between">
            <div
              className="my-5"
              style={{
                width: "80%",
              }}
            >
              {this.state.stage === "journey" ? (
                <Journey setStage={(val) => this.setState({ stage: val })} />
              ) : this.state.stage === "name" ? (
                <Name setStage={(val) => this.setState({ stage: val })} />
              ) : this.state.stage === "age" ? (
                <Age setStage={(val) => this.setState({ stage: val })} />
              ) : this.state.stage === "cash" ? (
                <Cash setStage={(val) => this.setState({ stage: val })} />
              ) : null}
            </div>
            <div
              className="my-5"
              style={{
                width: "19%",
              }}
            >
              <Tracker stage={this.state.stage} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Body;

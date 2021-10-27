import React, { Component } from "react";

class Tracker extends React.Component {
  render() {
    return (
      <div className="bg-white py-4 px-3">
        <div
          className=""
          style={{
            backgroundColor: "#ffd6b2",
          }}
        >
          <div className="d-flex flex-column mx-3">
            <div className="d-flex flex-row justify-content-between align-items-center my-2">
              <i class="fas fa-check-circle fs-18"></i>{" "}
              <p className="mb-0 fs-18">My Journey</p>
            </div>
            <div className="d-flex flex-row justify-content-between align-items-center my-2">
              {this.props.stage === "journey" ? (
                <i class="far fa-circle fs-18"></i>
              ) : (
                <i class="fas fa-check-circle fs-18"></i>
              )}{" "}
              <p className="mb-0 fs-18">Name</p>
            </div>
            <div className="d-flex flex-row justify-content-between align-items-center my-2">
              {this.props.stage === "journey" || this.props.stage === "name" ? (
                <i class="far fa-circle fs-18"></i>
              ) : (
                <i class="fas fa-check-circle fs-18"></i>
              )}{" "}
              <p className="mb-0 fs-18">Age</p>
            </div>
            <div className="d-flex flex-row justify-content-between align-items-center my-2">
              {this.props.stage === "journey" ||
              this.props.stage === "name" ||
              this.props.stage === "age" ? (
                <i class="far fa-circle fs-18"></i>
              ) : (
                <i class="fas fa-check-circle fs-18"></i>
              )}{" "}
              <p className="mb-0 fs-18">Cashflow</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Tracker;

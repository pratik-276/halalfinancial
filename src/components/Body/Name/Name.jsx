import React, { Component } from "react";

class Name extends React.Component {
  state = {
    name: "",
    email: "",
    phoneNumber: "",
    next: true,
  };
  validateEmail = (email) => {
    const pattern =
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    return pattern.test(email);
  };
  validatePhone = (phone) => {
    const pattern = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/;
    return pattern.test(phone);
  };
  handleChange = () => {
    if (
      this.state.name !== "" &&
      this.validateEmail(this.state.email) &&
      this.validatePhone(this.state.phoneNumber)
    ) {
      this.setState({ next: false });
    }
  };
  render() {
    return (
      <div className="bg-white py-4">
        <div className="head py-2">
          <h3 className="mb-4">Mabruk!</h3>
          <h3 className="mb-3">
            Congratulations for taking the first step to take charge of your
            personal finance!
          </h3>
        </div>
        <div className="section py-4">
          <div
            className="d-flex flex-column mx-auto"
            style={{
              width: "50%",
            }}
          >
            <div className="d-flex flex-column my-4">
              <p className="mb-4 font-weight-bold fs-20">
                What is your name? How can I address you?
              </p>
              <input
                type="text"
                className="form-control"
                style={{
                  borderRadius: "15px",
                  fontSize: "30px",
                  fontWeight: "bold",
                  fontStyle: "italic",
                  textAlign: "center",
                  backgroundColor: "#f5f1ed",
                }}
                value={this.state.name}
                onChange={(e) =>
                  this.setState({ name: e.target.value }, this.handleChange)
                }
              />
            </div>

            <div className="d-flex flex-column my-4">
              <p className="mb-4 font-weight-bold fs-20">
                and email address? (in case we disconnect along the way)
              </p>
              <input
                type="text"
                className="form-control"
                style={{
                  borderRadius: "15px",
                  fontSize: "30px",
                  fontWeight: "bold",
                  fontStyle: "italic",
                  textAlign: "center",
                  backgroundColor: "#f5f1ed",
                }}
                value={this.state.email}
                onChange={(e) =>
                  this.setState({ email: e.target.value }, this.handleChange)
                }
              />
            </div>

            <div className="d-flex flex-column my-4">
              <p className="mb-4 font-weight-bold fs-20">
                and Phone Number? (in case we disconnect along the way)
              </p>
              <input
                type="text"
                className="form-control"
                style={{
                  borderRadius: "15px",
                  fontSize: "30px",
                  fontWeight: "bold",
                  fontStyle: "italic",
                  textAlign: "center",
                  backgroundColor: "#f5f1ed",
                }}
                value={this.state.phoneNumber}
                onChange={(e) =>
                  this.setState(
                    { phoneNumber: e.target.value },
                    this.handleChange
                  )
                }
              />
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <button
            className="btn text-white w-25"
            style={{
              borderRadius: "30px",
              fontSize: "26px",
              backgroundColor: "#f07722",
            }}
            onClick={() => this.props.setStage("age")}
            disabled={this.state.next}
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}

export default Name;

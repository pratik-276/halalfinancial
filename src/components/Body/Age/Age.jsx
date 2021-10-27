import React, { Component } from "react";

class Name extends React.Component {
  state = {
    date: "",
    month: "",
    year: "",
    next: true,
    dateError: false,
    monthError: false,
    yearError: false,
    errorMessage: "",
    dateTouched: false,
    monthTouched: false,
    yearTouched: false,
  };
  checkNext = () => {
    if (
      !this.state.dateError &&
      !this.state.monthError &&
      !this.state.yearError &&
      this.state.dateTouched &&
      this.state.monthTouched &&
      this.state.yearTouched
    ) {
      this.setState({ next: false });
    }
  };
  handleChange = (e) => {
    if (e.target.name === "date") {
      this.setState({ dateTouched: true });
      if (e.target.value.length <= 2) {
        this.setState({ date: e.target.value });
      }
      if (e.target.value === "" || !/\d{1}/.test(e.target.value)) {
        this.setState(
          {
            dateError: true,
            errorMessage: "Please provide a valid date",
          },
          this.checkNext
        );
      } else {
        this.setState(
          {
            dateError: false,
            errorMessage: "",
          },
          this.checkNext
        );
      }
    } else if (e.target.name === "month") {
      this.setState({ monthTouched: true });
      if (e.target.value.length <= 2) {
        this.setState({ month: e.target.value });
      }
      if (e.target.value === "" || !/\d{1}/.test(e.target.value)) {
        this.setState(
          {
            monthError: true,
            errorMessage: "Please provide a valid month",
          },
          this.checkNext
        );
      } else {
        this.setState(
          {
            monthError: false,
            errorMessage: "",
          },
          this.checkNext
        );
      }
    } else if (e.target.name === "year") {
      this.setState({ yearTouched: true });
      if (e.target.value.length <= 4) {
        this.setState({ year: e.target.value });
      }
      if (e.target.value === "" || !/\d{4}/.test(e.target.value)) {
        this.setState(
          {
            yearError: true,
            errorMessage: "Please provide a valid year",
          },
          this.checkNext
        );
      } else {
        this.setState(
          {
            yearError: false,
            errorMessage: "",
          },
          this.checkNext
        );
      }
    }
  };
  render() {
    return (
      <div className="bg-white py-4">
        <div className="head py-2">
          <h3 className="mb-3">
            To help you create your personalised, “Halal Financial Plan’, I need
            to know a little bit more about you.
          </h3>
        </div>
        <div className="section py-4 mb-4">
          <div
            className="d-flex flex-column mx-auto"
            style={{
              width: "30%",
            }}
          >
            <p className="fs-24 font-weight-bold">When were you born?</p>
            <div className="d-flex flex-row justify-content-around">
              <div
                style={{
                  width: "100px",
                }}
              >
                <input
                  type="text"
                  className={
                    "form-control border" +
                    (this.state.dateError ? " border-danger" : "")
                  }
                  style={{
                    borderRadius: "15px",
                    borderWidth: "5px",
                    fontSize: "20px",
                    paddingTop: "30px",
                    paddingBottom: "30px",
                    fontWeight: "bold",
                    fontStyle: "italic",
                    textAlign: "center",
                    backgroundColor: "#f5f1ed",
                  }}
                  placeholder="DD"
                  name="date"
                  value={this.state.date}
                  onChange={this.handleChange}
                />
              </div>
              <div
                style={{
                  width: "100px",
                }}
              >
                <input
                  type="text"
                  className={
                    "form-control border" +
                    (this.state.monthError ? " border-danger" : "")
                  }
                  style={{
                    borderRadius: "15px",
                    fontSize: "20px",
                    borderWidth: "5px",
                    paddingTop: "30px",
                    paddingBottom: "30px",
                    fontWeight: "bold",
                    fontStyle: "italic",
                    textAlign: "center",
                    backgroundColor: "#f5f1ed",
                  }}
                  placeholder="MM"
                  name="month"
                  value={this.state.month}
                  onChange={this.handleChange}
                />
              </div>
              <div
                style={{
                  width: "100px",
                }}
              >
                <input
                  type="text"
                  className={
                    "form-control border" +
                    (this.state.yearError ? " border-danger" : "")
                  }
                  style={{
                    borderRadius: "15px",
                    fontSize: "20px",
                    paddingTop: "30px",
                    borderWidth: "5px",
                    paddingBottom: "30px",
                    fontWeight: "bold",
                    fontStyle: "italic",
                    textAlign: "center",
                    backgroundColor: "#f5f1ed",
                  }}
                  placeholder="YYYY"
                  name="year"
                  value={this.state.year}
                  onChange={this.handleChange}
                />
              </div>
            </div>
          </div>
          {this.state.errorMessage !== "" ? (
            <p className="text-danger">{this.state.errorMessage}</p>
          ) : null}
        </div>
        <div className="d-flex justify-content-center">
          <button
            className="btn text-white w-25"
            style={{
              borderRadius: "30px",
              fontSize: "26px",
              backgroundColor: "#f07722",
            }}
            onClick={() => this.props.setStage("cash")}
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

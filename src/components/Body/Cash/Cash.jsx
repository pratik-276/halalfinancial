import React, { Component } from "react";
import ReactTooltip from "react-tooltip";

class Cash extends React.Component {
  state = {
    gross: "",
    cpf: "",
    otherIncome: "",
    totalIncome: "",

    insurance: "",
    parental: "",
    housing: "",
    otherLoan: "",
    otherExpense: "",
    transport: "",
    entertainment: "",
    food: "",
    misc: "",
    totalExpense: "",

    shortfall: "",
  };

  calculateShort = () => {
    var totalIncome =
      this.state.totalIncome === "" ? 0 : parseInt(this.state.totalIncome);
    var totalExpense =
      this.state.totalExpense === "" ? 0 : parseInt(this.state.totalExpense);
    var short = totalIncome - totalExpense;
    this.setState({ shortfall: short + "" });
  };

  calculateIncome = () => {
    var gross = this.state.gross === "" ? 0 : parseInt(this.state.gross);
    var cpf = this.state.cpf === "" ? 0 : parseInt(this.state.cpf);
    var otherIncome =
      this.state.otherIncome === "" ? 0 : parseInt(this.state.otherIncome);

    var totalIncome = gross - cpf + otherIncome;
    this.setState({ totalIncome: totalIncome + "" }, this.calculateShort);
  };

  calculateExpense = () => {
    var insurance =
      this.state.insurance === "" ? 0 : parseInt(this.state.insurance);
    var parental =
      this.state.parental === "" ? 0 : parseInt(this.state.parental);
    var housing = this.state.housing === "" ? 0 : parseInt(this.state.housing);
    var otherLoan =
      this.state.otherLoan === "" ? 0 : parseInt(this.state.otherLoan);
    var otherExpense =
      this.state.otherExpense === "" ? 0 : parseInt(this.state.otherExpense);
    var transport =
      this.state.transport === "" ? 0 : parseInt(this.state.transport);
    var entertainment =
      this.state.entertainment === "" ? 0 : parseInt(this.state.entertainment);
    var food = this.state.food === "" ? 0 : parseInt(this.state.food);
    var misc = this.state.misc === "" ? 0 : parseInt(this.state.misc);

    var totalExpense =
      insurance +
      parental +
      housing +
      otherLoan +
      otherExpense +
      transport +
      entertainment +
      food +
      misc;
    this.setState({ totalExpense: totalExpense + "" }, this.calculateShort);
  };

  render() {
    return (
      <div className="bg-white py-4">
        <div className="head py-2">
          <h3 className="mb-3">
            To help you create your personalised cashflow statement, and
            calculate your financial ratios, help me fill this up
          </h3>
        </div>
        <div className="section py-4 mb-4">
          <div className="d-flex flex-column mx-4">
            <div
              className="d-flex flex-row justify-content-between py-3 px-4 align-items-center"
              style={{
                borderRadius: "15px",
                backgroundColor: "#f07722",
              }}
            >
              <div></div>
              <div>
                <p className="font-weight-bold fs-24 mb-0">
                  Meet Helmi Hakim Directly
                </p>
              </div>
              <div>
                <i
                  className="fas fa-2x fa-info-circle"
                  data-tip="I would like to proceed directly<br />to meet Helmi Hakim for<br />'Understand Your Money' session"
                  data-html={true}
                  data-background-color="orange"
                  data-text-color="white"
                ></i>
              </div>
            </div>

            <div className="d-flex flex-column my-5">
              <div
                style={{
                  backgroundColor: "#f07722",
                }}
                className="mb-3"
              >
                <p className="text-center font-weight-bold fs-20 mb-0">
                  Cash Inflow
                </p>
              </div>
              <div
                className="d-flex flex-row justify-content-between mx-auto my-2 align-items-center"
                style={{
                  width: "60%",
                }}
              >
                <div>
                  <p className="mb-0 fs-18">Employment Gross</p>
                </div>
                <div
                  style={{
                    width: "350px",
                  }}
                >
                  <input
                    type="text"
                    className="form-control"
                    style={{
                      borderRadius: "15px",
                      fontSize: "20px",
                      textAlign: "center",
                      backgroundColor: "#f5f1ed",
                    }}
                    value={this.state.gross}
                    onChange={(e) =>
                      this.setState(
                        { gross: e.target.value },
                        this.calculateIncome
                      )
                    }
                  />
                </div>
              </div>

              <div
                className="d-flex flex-row justify-content-between mx-auto my-2 align-items-center"
                style={{
                  width: "60%",
                }}
              >
                <div>
                  <p className="mb-0 fs-18">Less CPF Contribution</p>
                </div>
                <div
                  style={{
                    width: "350px",
                  }}
                >
                  <input
                    type="text"
                    className="form-control"
                    style={{
                      borderRadius: "15px",
                      fontSize: "20px",
                      textAlign: "center",
                      backgroundColor: "#f5f1ed",
                    }}
                    value={this.state.cpf}
                    onChange={(e) =>
                      this.setState(
                        { cpf: e.target.value },
                        this.calculateIncome
                      )
                    }
                  />
                </div>
              </div>

              <div
                className="d-flex flex-row justify-content-between mx-auto my-2 align-items-center"
                style={{
                  width: "60%",
                }}
              >
                <div>
                  <p className="mb-0 fs-18">Add any other income</p>
                </div>
                <div
                  style={{
                    width: "350px",
                  }}
                >
                  <input
                    type="text"
                    className="form-control"
                    style={{
                      borderRadius: "15px",
                      fontSize: "20px",
                      textAlign: "center",
                      backgroundColor: "#f5f1ed",
                    }}
                    value={this.state.otherIncome}
                    onChange={(e) =>
                      this.setState(
                        { otherIncome: e.target.value },
                        this.calculateIncome
                      )
                    }
                  />
                </div>
              </div>

              <div
                className="d-flex flex-row justify-content-between mx-auto my-2 align-items-center"
                style={{
                  width: "60%",
                }}
              >
                <div>
                  <p className="mb-0 fs-18">Total Monthly Income</p>
                </div>
                <div
                  style={{
                    width: "350px",
                  }}
                >
                  <p className="mb-0 fs-20">{this.state.totalIncome}</p>
                </div>
              </div>
            </div>

            <div className="d-flex flex-column my-5">
              <div
                style={{
                  backgroundColor: "#f07722",
                }}
                className="mb-2"
              >
                <p className="text-center font-weight-bold fs-20 mb-0">
                  Cash Outflow
                </p>
              </div>
              <div
                style={{
                  backgroundColor: "#ffd6b2",
                  width: "60%",
                }}
                className="my-3 mx-auto"
              >
                <p className="text-center font-weight-bold fs-24 mb-0">
                  Fixed Expenses
                </p>
              </div>

              <div
                className="d-flex flex-row justify-content-between mx-auto my-2 align-items-center"
                style={{
                  width: "60%",
                }}
              >
                <div>
                  <p className="mb-0 fs-18">Insurance Premium/savings</p>
                </div>
                <div
                  style={{
                    width: "350px",
                  }}
                >
                  <input
                    type="text"
                    className="form-control"
                    style={{
                      borderRadius: "15px",
                      fontSize: "20px",
                      textAlign: "center",
                      backgroundColor: "#f5f1ed",
                    }}
                    value={this.state.insurance}
                    onChange={(e) =>
                      this.setState(
                        { insurance: e.target.value },
                        this.calculateExpense
                      )
                    }
                  />
                </div>
              </div>

              <div
                className="d-flex flex-row justify-content-between mx-auto my-2 align-items-center"
                style={{
                  width: "60%",
                }}
              >
                <div>
                  <p className="mb-0 fs-18">Parental/Nafkah Support</p>
                </div>
                <div
                  style={{
                    width: "350px",
                  }}
                >
                  <input
                    type="text"
                    className="form-control"
                    style={{
                      borderRadius: "15px",
                      fontSize: "20px",
                      textAlign: "center",
                      backgroundColor: "#f5f1ed",
                    }}
                    value={this.state.parental}
                    onChange={(e) =>
                      this.setState(
                        { parental: e.target.value },
                        this.calculateExpense
                      )
                    }
                  />
                </div>
              </div>

              <div
                className="d-flex flex-row justify-content-between mx-auto my-2 align-items-center"
                style={{
                  width: "60%",
                }}
              >
                <div>
                  <p className="mb-0 fs-18 text-left">
                    Housing Loan Instalments (Cash Portion)
                  </p>
                </div>
                <div
                  style={{
                    width: "350px",
                  }}
                >
                  <input
                    type="text"
                    className="form-control"
                    style={{
                      borderRadius: "15px",
                      fontSize: "20px",
                      textAlign: "center",
                      backgroundColor: "#f5f1ed",
                    }}
                    value={this.state.housing}
                    onChange={(e) =>
                      this.setState(
                        { housing: e.target.value },
                        this.calculateExpense
                      )
                    }
                  />
                </div>
              </div>

              <div
                className="d-flex flex-row justify-content-between mx-auto my-2 align-items-center"
                style={{
                  width: "60%",
                }}
              >
                <div>
                  <p className="mb-0 fs-18">Other Loan Instalments</p>
                </div>
                <div
                  style={{
                    width: "350px",
                  }}
                >
                  <input
                    type="text"
                    className="form-control"
                    style={{
                      borderRadius: "15px",
                      fontSize: "20px",
                      textAlign: "center",
                      backgroundColor: "#f5f1ed",
                    }}
                    value={this.state.otherLoan}
                    onChange={(e) =>
                      this.setState(
                        { otherLoan: e.target.value },
                        this.calculateExpense
                      )
                    }
                  />
                </div>
              </div>

              <div
                className="d-flex flex-row justify-content-between mx-auto my-2 align-items-center"
                style={{
                  width: "60%",
                }}
              >
                <div>
                  <p className="mb-0 fs-18">Others</p>
                </div>
                <div
                  style={{
                    width: "350px",
                  }}
                >
                  <input
                    type="text"
                    className="form-control"
                    style={{
                      borderRadius: "15px",
                      fontSize: "20px",
                      textAlign: "center",
                      backgroundColor: "#f5f1ed",
                    }}
                    value={this.state.otherExpense}
                    onChange={(e) =>
                      this.setState(
                        { otherExpense: e.target.value },
                        this.calculateExpense
                      )
                    }
                  />
                </div>
              </div>

              <div
                style={{
                  backgroundColor: "#ffd6b2",
                  width: "60%",
                }}
                className="my-3 mx-auto"
              >
                <p className="text-center font-weight-bold fs-24 mb-0">
                  Discretionary Expenses
                </p>
              </div>

              <div
                className="d-flex flex-row justify-content-between mx-auto my-2 align-items-center"
                style={{
                  width: "60%",
                }}
              >
                <div>
                  <p className="mb-0 fs-18">Transportation</p>
                </div>
                <div
                  style={{
                    width: "350px",
                  }}
                >
                  <input
                    type="text"
                    className="form-control"
                    style={{
                      borderRadius: "15px",
                      fontSize: "20px",
                      textAlign: "center",
                      backgroundColor: "#f5f1ed",
                    }}
                    value={this.state.transport}
                    onChange={(e) =>
                      this.setState(
                        { transport: e.target.value },
                        this.calculateExpense
                      )
                    }
                  />
                </div>
              </div>

              <div
                className="d-flex flex-row justify-content-between mx-auto my-2 align-items-center"
                style={{
                  width: "60%",
                }}
              >
                <div>
                  <p className="mb-0 fs-18">Entertainment</p>
                </div>
                <div
                  style={{
                    width: "350px",
                  }}
                >
                  <input
                    type="text"
                    className="form-control"
                    style={{
                      borderRadius: "15px",
                      fontSize: "20px",
                      textAlign: "center",
                      backgroundColor: "#f5f1ed",
                    }}
                    value={this.state.entertainment}
                    onChange={(e) =>
                      this.setState(
                        { entertainment: e.target.value },
                        this.calculateExpense
                      )
                    }
                  />
                </div>
              </div>

              <div
                className="d-flex flex-row justify-content-between mx-auto my-2 align-items-center"
                style={{
                  width: "60%",
                }}
              >
                <div>
                  <p className="mb-0 fs-18">Food</p>
                </div>
                <div
                  style={{
                    width: "350px",
                  }}
                >
                  <input
                    type="text"
                    className="form-control"
                    style={{
                      borderRadius: "15px",
                      fontSize: "20px",
                      textAlign: "center",
                      backgroundColor: "#f5f1ed",
                    }}
                    value={this.state.food}
                    onChange={(e) =>
                      this.setState(
                        { food: e.target.value },
                        this.calculateExpense
                      )
                    }
                  />
                </div>
              </div>

              <div
                className="d-flex flex-row justify-content-between mx-auto my-2 align-items-center"
                style={{
                  width: "60%",
                }}
              >
                <div>
                  <p className="mb-0 fs-18">Miscellaneous</p>
                </div>
                <div
                  style={{
                    width: "350px",
                  }}
                >
                  <input
                    type="text"
                    className="form-control"
                    style={{
                      borderRadius: "15px",
                      fontSize: "20px",
                      textAlign: "center",
                      backgroundColor: "#f5f1ed",
                    }}
                    value={this.state.misc}
                    onChange={(e) =>
                      this.setState(
                        { misc: e.target.value },
                        this.calculateExpense
                      )
                    }
                  />
                </div>
              </div>

              <div
                className="d-flex flex-row justify-content-between mx-auto my-2 align-items-center"
                style={{
                  width: "60%",
                  backgroundColor: "#ffd6b2",
                }}
              >
                <div>
                  <p className="mb-0 fs-18">Total Monthly Expenses</p>
                </div>
                <div
                  style={{
                    width: "350px",
                  }}
                >
                  <p className="mb-0 fs-20">{this.state.totalExpense}</p>
                </div>
              </div>
            </div>

            <div className="d-flex flex-column my-5">
              <div
                style={{
                  backgroundColor: "#f07722",
                }}
                className="mb-2"
              >
                <p className="text-center font-weight-bold fs-20 mb-0">
                  Cash Inflow
                </p>
              </div>
              <div
                className="d-flex flex-row justify-content-between mx-auto my-2 align-items-center"
                style={{
                  width: "60%",
                }}
              >
                <div>
                  <p className="mb-0 fs-18">Shortfall/Surplus</p>
                </div>
                <div
                  style={{
                    width: "350px",
                  }}
                >
                  <p className="mb-0 fs-20">{this.state.shortfall}</p>
                </div>
              </div>
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
            onClick={() => this.props.setStage("cash")}
          >
            Next
          </button>
        </div>
        <ReactTooltip html={true} />
      </div>
    );
  }
}

export default Cash;

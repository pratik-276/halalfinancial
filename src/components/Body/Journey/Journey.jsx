import React, { Component } from "react";

class Journey extends React.Component {
  render() {
    return (
      <div className="bg-white py-4">
        <div className="head py-2">
          <h3 className="mb-4">
            Assalamualaikum. Ahlan Wa Sahlan. Selamat Datang!
          </h3>
          <h5 className="mb-3">Just a simple clause before we proceed</h5>
        </div>
        <div
          className="section w-75 mx-auto py-4 px-3"
          style={{
            backgroundColor: "#f5f7ff",
            textAlign: "left",
          }}
        >
          <p>
            HalalFinancialPlan.sg is committed to maintaining your confidence
            and trust.
          </p>
          <p>
            We understand that maintaining the confidentiality of your personal
            and financial information is of the utmost importance to you. We
            therefore wish to assure you that all information collected will
            only be used for the purpose of analysing your financial needs and
            providing recommendations based on that analysis, and will be
            treated in strict confidence. We will not release your information
            to any third party.
          </p>
          <p>
            HalalFInancialPlan.sg must have sufficient information before making
            a suitable recommendation. The information that you provide on your
            financial goals, financial situation and your particular needs will
            be the basis on which financial advice and recommendation will be
            given.
          </p>
          <p>
            The recommendations made for you may not be appropriate in the event
            of a partial or inaccurate completion of this document.
          </p>

          <p>
            Please be advised that all analysis conducted in respect of your
            needs in life protection, disability income protection, retirement
            planning, education planning and wealth management are for your
            reference only.
          </p>

          <p>
            Formulations of the analysis are estimates only and based on
            hypothetical assumptions and information provided by you.
          </p>

          <p>
            No guarantee or representations can be made that the formulations or
            assumptions are full and complete at present or in the future. The
            analysis merely provides an estimate of your personal needs based on
            calculations. It shall not constitute a substitute for professional
            advice.
          </p>

          <p className="font-weight-bold text-center mt-4 mb-3">
            Personal data collection statement
          </p>
          <p>
            HalalFinancialPlan.sg recognises its obligations under the Personal
            Data Protection Act 2012 (PDPA) which include the collection, use
            and disclosure of personal data for the purpose for which an
            individual has given consent to. The personal data collected by
            halalfinancialplan.sg includes all personal data provided in this
            form, or in any document provided, or to be provided to us by you or
            your insured persons or from other sources, forthe purpose of this
            insurance application or transaction. It includes all personal data
            for us to evaluate or administer this application ortransaction.
          </p>

          <p className="font-weight-bold text-center mt-4 mb-3">
            1. Purpose of collection
          </p>
          <p className="text-center my-2">
            We may collect and use the personal data to:
          </p>
          <p>
            (a) communicate on purposes relating to an application;
            <br />
            (b) determine and verify your credit worthiness for the financial
            and insurance products you apply for;
            <br />
            (c) provide financial advice for product recommendation based on
            your financial needs analysis;
            <br />
            (d) provide ongoing services and respond to your inquiries or
            instructions;
            <br />
            (e) coach employees and monitor for quality assurance; and
            <br />
            (f) comply with all applicable laws, including reporting to
            regulatory and industry entities.
            <br />
          </p>

          <p className="font-weight-bold text-center mt-4 mb-3">
            2. Disclosure of personal data
          </p>
          <p>
            We may disclose personal data belonging to you and your insured
            persons for the purposes set out in section 1 above to:
          </p>
          <ol>
            <li>Your representatives;</li>
            <li>
              Local or overseas service providers to provide us with services
              such as printing, mail distribution, data storage, data entry; and
            </li>
            <li>Regulators, law enforcement and government agencies.</li>
          </ol>
        </div>
        <div className="d-flex justify-content-center mt-4">
          <button
            className="btn text-white bg-orange w-25"
            style={{
              borderRadius: "30px",
              fontSize: "26px",
            }}
            onClick={() => this.props.setStage("name")}
          >
            Let's Begin
          </button>
        </div>
      </div>
    );
  }
}

export default Journey;

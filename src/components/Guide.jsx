import React from "react";
class PostDataset extends React.Component {
  render() {
    return (
      <div className="container">
        <h2> Open Data Handbook </h2>
        <p>
          This guide is a collaboration between the Stanford Open Data Project
          and the Northwestern Open Data Initiative. We hope you use it as a set
          of suggestions for leading open data efforts on your own campus. Note
          that this guide is still a work in progress.
        </p>
        <iframe
          title="guide"
          id="guideIframe"
          src="https://docs.google.com/document/d/e/2PACX-1vTs-JeRuhkP01x7Xm-79gopBtdJh55sCqRZD1Dgo7DLVHeMVBTPuJ-TBCFw0kB_rNEBJmH4ptHXnDs9/pub?embedded=true"
        ></iframe>
      </div>
    );
  }
}

export default PostDataset;

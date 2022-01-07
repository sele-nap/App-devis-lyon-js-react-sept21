import React from "react";
import Pdf from "react-to-pdf";

const ref = React.createRef();

const PDF = () => {
  return (
    <div>
      <div className="Post" ref={ref}>
        <h1>Hello</h1>
        <p>This is a test</p>
      </div>
      <Pdf targetRef={ref} filename="post.pdf">
        {({ toPdf }) => <button onClick={toPdf}>Capture as PDF</button>}
      </Pdf>
    </div>
  );
};
export default PDF;

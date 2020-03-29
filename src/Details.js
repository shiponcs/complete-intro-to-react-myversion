import React from "react";

const Details = (props) => {
  return (
    <pre>
      <code>{JSON.stringify(props, null, 2)}</code>
    </pre>
  );
};

export default Details;

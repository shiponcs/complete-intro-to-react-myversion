import React, { useState } from "react";
import { Link } from "@reach/router";
import { css, keyframes } from "@emotion/core";
import colors from "./Color";

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;
const NavBar = () => {
  const [padding, setPadding] = useState(15);
  return (
    <header
      css={css`
        background-color: ${colors.secondary};
        position: sticky;
        top: 0;
        padding: ${padding}px;
        z-index: 10;
        font-size: 30px;
        &:hover {
          text-decoration: underline;
        }
        & > span {
          color: ${colors.light};
        }
      `}
    >
      <Link to="/">Adopt Me</Link>
      <span
        aria-label="logo"
        role="img"
        css={css`
          display: inline-block;
          animation: 1s ${spin} linear infinite;
        `}
      >
        +
      </span>
    </header>
  );
};

export default NavBar;

// some benifit of using css in js include:
// you can control design programmatically in easy way.
// like you can make js variable use it as the
// value of css property
// and, you can also add eventlistener that changes the design

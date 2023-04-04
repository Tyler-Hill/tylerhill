import React from "react";

function Header(props) {
  return <header className="flex-row px-1 flex-end">{props.children}</header>;
}

export default Header;

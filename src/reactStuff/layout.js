import React from "react";

function Layout({ children }) {
  return (
    <div className="app">
      <main>{children}</main>
    </div>
  );
}

export default Layout;

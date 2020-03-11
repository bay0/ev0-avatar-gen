import React from 'react';

const footerStyle = {
    fontSize: "15px",
    color: "white",
    textAlign: "right",
    padding: "20px",
    position: "fixed",
    left: "0",
    bottom: "0",
    width: "100%"
  };

export default function Footer({ children }) {
    return (
      <div>
        <div style={footerStyle}>{children}</div>
      </div>
    );
  }
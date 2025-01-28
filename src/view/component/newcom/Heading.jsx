import React from "react";
import "./heading.css";

export default function Heading({ children, subheading = false }) {
  return (
    <>
      <div className="heading-after mt-4">
        <h2 className="heading-psudo">{children}</h2>
      </div>
      {subheading && (
        <p style={{ fontSize: "15px", textAlign: "center", marginTop:"10px" }}> {subheading}</p>
      )}
    </>
  );
}

import React from "react";

// Importing React to use JSX syntax and create a functional component
export default function footer() {

    // Footer component returns the footer section of the webpage
    return(
        

<footer className="footer">
  {/* Wrapper for footer content */}
  <div className="content has-text-centered">
    <p>
      {/* Displaying Bulma attribution and licensing information */}
      <strong>Bulma</strong> by <a href="https://jgthms.com">Jeremy Thomas</a>.
      The source code is licensed
      <a href="https://opensource.org/license/mit">MIT</a>. The
      website content is licensed
      <a href="https://creativecommons.org/licenses/by-nc-sa/4.0//"
        >CC BY NC SA 4.0</a
      >.
    </p>
  </div>
</footer>
    );
}
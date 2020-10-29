import React from "react";
import "./style.css";

function Footer() {
  return (
    <div className="ui vertical footer segment">
      <div className="ui container">
        <hr />
        Created by {""}{" "}
        <a href="https://github.com/MikChanna">Channa Mik Carlson </a> and{" "}
        <a href="https://github.com/skerr924">Sarah Kerr.</a>
        <br />
        Icons by{" "}
        <a href="https://www.flaticon.local/authors/freepik" title="Freepik">
          Freepik
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.local/" title="Flaticon">
          www.flaticon.local
        </a>
        <br />
        Avatars by{" "}
        <a href="https://avataaars.com/" title="Freepik">
          avataaars
        </a>
        .
      </div>
    </div>
  );
}

export default Footer;

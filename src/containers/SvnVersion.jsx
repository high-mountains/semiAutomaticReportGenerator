import React, { useEffect, useState } from "react";
import axios from "axios";

export function GitVersion() {
  const [svnVersionNumber, setSvnVersionNumber] = useState(null);

  useEffect(() => {
    axios
      .get("/version")
      .then((res) => {
        setSvnVersionNumber(res.data);
      })
      .catch((err) => {
        setSvnVersionNumber("Unknown");
      });
  }, []);

  return (
    <>
      <ul
        tabIndex={0}
        className="menu menu-compact dropdown-content shadow bg-base-100 rounded-box w-42"
      >
        <li>
          <h1>GITVERSION: {svnVersionNumber}</h1>
        </li>
      </ul>
    </>
  );
}
export default GitVersion;

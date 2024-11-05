import React from "react";

function Button({ title, onClick }) {
  return (
    <button
      className="rounded-md transition-all px-6 py-2 text-white btn btn-sm normal-case btn-primary"
      onClick={onClick}
    >
      {title}
    </button>
  );
}

export default Button;
import React from "react";
import PropTypes from "prop-types";

const GenePageNumber = ({ bottom = 15, children }) => {
  return (
    <div className="bg-[#F8F8F8] text-[9rem] text-[#484F51]">
      {/* Optional informational text commented out */}
      {/* <p className="absolute bottom-[39rem] ">
        ※本項目は、科学的研究がまだ充分に進んでいない遺伝子に基づく情報であり、参考情報として提供しています。
      </p> */}
      <p
        style={{
          left: "50%",
          transform: "translateX(-50%)",
          lineHeight: "1.4477",
          position: "absolute",
          bottom: "0rem",
          marginBottom: `${bottom}rem`, // Corrected syntax
        }}
      >
        {children}
      </p>
    </div>
  );
};

// Prop validation (optional)
GenePageNumber.propTypes = {
  bottom: PropTypes.number,
  children: PropTypes.node,
};

// Default props
GenePageNumber.defaultProps = {
  bottom: 15,
  children: null,
};

export default GenePageNumber;

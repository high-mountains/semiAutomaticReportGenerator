import React from "react";
import { useSelector } from "react-redux";

// const ListItem = styled.li`
//   display: flex;
//   align-items: flex-start;
//   position: relative;
//   padding-left: 1em;
//   font-size: ${(props) => props.fontSize || '16rem'}; /* Set default to 14rem if no prop is provided */
//   line-height: ${(props) => props.lineHeight || 1.42857}; /* Set default to 20/14 if no prop is provided */
//   color: ${mainTextColor};
//   list-style-type: disc;

//   &::before {
//     content: "•";
//     position: absolute;
//     left: 0;
//     font-size: 1.2em;
//     line-height: 1.2;
//     }
//     `;

const ListItem = (props) => {
    // console.log("===========ListItem====>", props);

    return (
        <li className="list-disc whitespace-pre-wrap" style={props.data.liStyle || {}}>
            {/* <pre> */}
                {props.data?.content || "No content"}
            {/* </pre> */}
        </li>
    );
};

export default ListItem;

// import React from 'react';

// const ListItem = ({ children }) => {
//   return (
//     <li className="flex items-start relative pl-4 text-4xl text-mainTextColor list-disc">
//       <span
//         style={{
//           content: '"•"',
//           position: 'absolute',
//           left: 0,
//           fontSize: '1.2em',
//           lineHeight: '1.2',
//         }}
//       ></span>
//       {children}
//     </li>
//   );
// };

// export default ListItem;

import React from 'react';
import styled from 'styled-components';
import pdfData from '../../../../utils/dummyPdf.json';

const ListItem = styled.li`
  display: flex;
  align-items: flex-start;
  position: relative;
  padding-left: 1em;
  font-size: 14rem; /* Adjust as per your design requirements */
  color: ${pdfData.mainTextColor};
  list-style-type: disc;

  &::before {
    content: "•";
    position: absolute;
    left: 0;
    font-size: 1.2em; /* Customize the size if needed */
    line-height: 1.2;
    }
    `;

const QualitySectionWrapper = styled.div`
  width: ${(props) => (props.oneColumn ? '100%' : '250rem')};
`;

function QualitySection(props) {
  return (
    <QualitySectionWrapper oneColumn={props.oneColumn} style={props.wrapperStyle && props.wrapperStyle}>
      <ul style={{ paddingLeft: 0, marginLeft: '5rem', marginTop: '10rem' }}>
        {props.qualityArray.map((item, index) => (
          <ListItem key={index} style={props.liStyle && props.liStyle} className={props.liClassName && props.liClassName}>
            {item}
          </ListItem>
        ))}
      </ul>
    </QualitySectionWrapper>
  );
}

export default QualitySection;
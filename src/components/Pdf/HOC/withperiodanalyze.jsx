import React from 'react';

const withPeriodanalyze = (componentsWithData) => {
  return (props) => {
    return (
      <div>
        {componentsWithData.map(({ Component, data }, index) => (
          <Component key={index} {...props} {...data} />
        ))}
      </div>
    );
  };
};

export default withPeriodanalyze;
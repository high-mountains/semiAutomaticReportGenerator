import React, { useState, useEffect, useRef } from 'react';

// Custom component that measures its internal structure
const MeasurableComponent = React.forwardRef(({ value, onDimensionsChange }, ref) => {
  const innerRef = useRef(null); // Ref to measure internal structure
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (innerRef.current) {
      const { width, height } = innerRef.current.getBoundingClientRect();
      setDimensions({ width, height });
      onDimensionsChange && onDimensionsChange({ width, height }); // Pass dimensions back to parent
    }
  }, [value]);

  return (
    <div ref={ref} style={{ padding: '20px', backgroundColor: 'lightgray' }}>
      <div ref={innerRef} style={{ padding: '10px', backgroundColor: 'lightblue' }}>
        <h2>Value: {value}</h2>
        <p>Dimensions: {dimensions.width}px x {dimensions.height}px</p>
      </div>
    </div>
  );
});

function ParentComponent() {
  const [value, setValue] = useState(0);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const handleDimensionsChange = (newDimensions) => {
    setDimensions(newDimensions);
  };

  const handleClick = () => setValue(value + 1);

  return (
    <div>
      <button onClick={handleClick}>Change Value</button>
      <MeasurableComponent
        value={value}
        onDimensionsChange={handleDimensionsChange} // Send dimensions back to parent
      />
      <p>Parent's dimensions: {dimensions.width}px x {dimensions.height}px</p>
    </div>
  );
}

export default ParentComponent;

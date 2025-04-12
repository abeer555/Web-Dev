import React from 'react';
import Child from './Child';

function Parent() {
  return (
    <div>
      <h2>Parent Component</h2>
      <Child message="Hello from Parent!" />
    </div>
  );
}

export default Parent;
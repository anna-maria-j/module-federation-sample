import React, { useState } from 'react';

export default function Counter() {
  const [value, setValue] = useState(0);

  return (
    <div onClick={() => setValue(value + 1)}>Counter: {value}</div>
  )
}

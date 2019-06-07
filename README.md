# useToggle

## Intent

This react hook extracts toggle behaviour so you can only focus on the appearance of your components.

## Usage example

```javascript
import React from 'react';
import useToggle from '@dprovodnikov/use-toggle';

const Toggle = function () {
  const handleChange = value => console.log('Toggle has changed its value to', value);

  const [isOn, toggle] = useToggle(false, handleChange);

  return (
    <button onClick={toggle}>
      {isOn ? 'Turn off' : 'Turn on'}
    </button>
  );
};

export default Toggle;
```

The hooks takes a default value as the first argument, and a change listener function as the second.

## Install

```bash
$ npm i @dprovodnikov/use-toggle
```

## Requirements
- React^16.8

## License
MIT
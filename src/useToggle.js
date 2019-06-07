import { useState, useCallback } from 'react';

const useToggle = function (initialValue, onChange) {
  const [isOn, setIsOn] = useState(initialValue);

  const toggle = () => {
    const nextValue = !isOn;

    setIsOn(nextValue);
    onChange(nextValue);
  };

  return [isOn, useCallback(toggle, [isOn])];
};

export default useToggle;
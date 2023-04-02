import { useState } from 'react';
import { Props } from '../interfaces/interfaces';
import { useUpdateEffect } from '../utils/useUpdateEffect';
import { createInput, addInput } from '../utils/createInput';

const fieldNames = ['position', 'company', 'city', 'from', 'to'];

export const Experience = ({ updateData }: Props) => {
  const [exp, setExp] = useState<{ [key: string]: string }[]>([]);

  useUpdateEffect(() => {
    updateData(exp, 'experience');
  }, [exp]);

  const handleClick = () => {
    addInput(exp, setExp, fieldNames);
  };

  return (
    <>
      <h3>Experience</h3>
      <div>
        {exp.length !== 0 &&
          exp.map((_, index) => createInput(exp, setExp, fieldNames, index, true))}
        <button onClick={handleClick}>Add</button>
      </div>
    </>
  );
};

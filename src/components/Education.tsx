import { useState } from 'react';
import { Props } from '../interfaces/interfaces';
import { useUpdateEffect } from '../utils/useUpdateEffect';
import { addInput, createInput } from '../utils/createInput';

export const Education = ({ updateData }: Props) => {
  const [edu, setEdu] = useState<string[]>(() => []);
  const fieldNames = ['universityName', 'city', 'degree', 'subject', 'from', 'to'];

  useUpdateEffect(() => {
    updateData(edu, 'education');
  }, [edu]);

  const handleClick = () => {
    addInput(edu, setEdu, fieldNames);
  };

  return (
    <>
      <h3>Education</h3>
      <div>
        {edu.length !== 0 &&
          edu.map((_, index) => createInput(edu, setEdu, fieldNames, index, true))}
        <button onClick={handleClick}>Add</button>
      </div>
    </>
  );
};

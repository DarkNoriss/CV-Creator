import { useState } from 'react';
import { Props } from '../interfaces/interfaces';
import { useUpdateEffect } from '../utils/useUpdateEffect';
import { addInput, createInput } from '../utils/createInput';

export const PersonalInformation = ({ updateData }: Props) => {
  const [info, setInfo] = useState<{ [key: string]: string }[]>([]);
  const fieldNames = ['firstName', 'lastName', 'phoneNumber', 'email', 'address', 'github', 'desc'];

  useUpdateEffect(() => {
    addInput(info, setInfo, fieldNames);
  }, []);

  useUpdateEffect(() => {
    updateData(info, 'personalInformation');
  }, [info]);

  return (
    <>
      <h3>Personal Information</h3>
      <div>{info.map((_, index) => createInput(info, setInfo, fieldNames, index, false))}</div>
    </>
  );
};

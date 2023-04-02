import { Props } from '../interfaces/interfaces';
import { DynamicInputSection } from './DynamicInputSection';

const sectionName = ['education', 'Education'];
const fieldData = [
  ['universityName', 'University name'],
  ['city', 'City'],
  ['degree', 'Degree'],
  ['subject', 'Subject'],
  ['from', 'From'],
  ['to', 'To'],
];

// CHANGE THIS ^ TO CONST
const test: TestProps = {
  position: 'Position',
  company: 'Company',
  city: 'City',
  from: 'From',
  to: 'To',
};

export const Education = ({ updateData }: Props) => {
  return (
    <>
      <DynamicInputSection sectionName={sectionName} fieldData={fieldData} updateGlobalState={(data, from) => updateData(data, from)} renderInit={false} />
    </>
  );
};

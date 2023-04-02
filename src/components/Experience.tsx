import { Props } from '../interfaces/interfaces';
import { DynamicInputSection } from './DynamicInputSection';

const sectionName = ['experience', 'Experience'];
const fieldData = {
  position: 'Position',
  company: 'Company',
  city: 'City',
  from: 'From',
  to: 'To',
};

export const Experience = ({ updateData }: Props) => {
  return (
    <>
      <DynamicInputSection sectionName={sectionName} fieldData={fieldData} updateGlobalState={(data, from) => updateData(data, from)} renderInit={false} />
    </>
  );
};

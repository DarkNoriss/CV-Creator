import { Props } from '../interfaces/interfaces';
import { DynamicInputSection } from './DynamicInputSection';

const fieldData = {
  position: 'Position',
  company: 'Company',
  city: 'City',
  from: 'From',
  to: 'To',
};

export const Education = ({ updateData }: Props) => {
  return (
    <>
      <DynamicInputSection sectionName={'Education'} sectionLabel={'education'} fieldData={fieldData} updateGlobalState={(data, from) => updateData(data, from)} renderInitialGroup={false} />
    </>
  );
};

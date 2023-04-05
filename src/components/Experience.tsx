import { Props } from '../interfaces/interfaces';
import { DynamicInputSection } from './DynamicInputSection';

const fieldData = {
  company: 'Company',
  position: 'Position',
  city: 'City',
  from: 'From',
  to: 'To',
};

export type ExperienceProps = {
  company: string;
  position: string;
  city: string;
  from: string;
  to: string;
};

export const Experience = ({ updateData }: Props) => {
  return (
    <>
      <DynamicInputSection
        sectionName={'Experience'}
        sectionLabel={'experience'}
        fieldData={fieldData}
        updateGlobalState={(data, from) => updateData(data, from)}
        renderInitialGroup={false}
      />
    </>
  );
};

import { Props } from '../interfaces/interfaces';
import { DynamicInputSection } from './DynamicInputSection';

const fieldData = {
  universityName: 'University Name',
  city: 'City',
  degree: 'Degree',
  subject: 'Subject',
  from: 'From',
  to: 'To',
};

export type EducationProps = {
  universityName: string;
  city: string;
  degree: string;
  subject: string;
  from: string;
  to: string;
};

export const Education = ({ updateData }: Props) => {
  return (
    <>
      <DynamicInputSection
        sectionName={'Education'}
        sectionLabel={'education'}
        fieldData={fieldData}
        updateGlobalState={(data, from) => updateData(data, from)}
        renderInitialGroup={false}
      />
    </>
  );
};

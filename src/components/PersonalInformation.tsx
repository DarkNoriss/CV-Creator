import { Props } from '../interfaces/interfaces';
import { DynamicInputSection } from './DynamicInputSection';

const fieldData = {
  firstName: 'First name',
  lastName: 'Last name',
  phoneNumber: 'Phone number',
  email: 'Email',
  address: 'Address',
  github: 'Github',
  desc: 'Description',
};

export type PersonalInformationProps = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  address: string;
  github: string;
  desc: string;
  [key: string]: string;
};

export const PersonalInformation = ({ updateData }: Props) => {
  return (
    <>
      <DynamicInputSection
        sectionName={'Personal Information'}
        sectionLabel={'personalInformation'}
        fieldData={fieldData}
        updateGlobalState={(data, from) => updateData(data, from)}
        renderInitialGroup={true}
      />
    </>
  );
};

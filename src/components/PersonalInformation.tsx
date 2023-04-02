import { Props } from '../interfaces/interfaces';
import { DynamicInputSection } from './DynamicInputSection';

const sectionName = ['personalInformation', 'Personal Information'];
const fieldData = {
  firstName: 'First name',
  lastName: 'Last name',
  phoneNumber: 'Phone number',
  email: 'Email',
  address: 'Address',
  github: 'Github',
  desc: 'Description',
};

export const PersonalInformation = ({ updateData }: Props) => {
  return (
    <>
      <DynamicInputSection sectionName={sectionName} fieldData={fieldData} updateGlobalState={(data, from) => updateData(data, from)} renderInit={true} />
    </>
  );
};

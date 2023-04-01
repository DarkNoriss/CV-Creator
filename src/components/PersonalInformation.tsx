import { FC } from 'react';

export const PersonalInformation: FC = () => {
  return (
    <section>
      <h3>Personal Information</h3>
      <div>
        <input name="firstName" placeholder="First name"></input>
        <input name="lastName" placeholder="Last name"></input>
        <input name="phoneNumber" placeholder="Phone number"></input>
        <input name="email" placeholder="Email"></input>
        <input name="address" placeholder="Address"></input>
        <input name="github" placeholder="GitHub link"></input>
        <textarea name="desc" placeholder="About me"></textarea>
      </div>
    </section>
  );
};

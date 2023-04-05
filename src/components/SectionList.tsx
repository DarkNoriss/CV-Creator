import { useState } from 'react';
import { PersonalInformation } from './PersonalInformation';
import { Experience } from './Experience';
import { Education } from './Education';

type SectionListProps = {
  updateSectionsData: any;
};
export const SectionList = ({ updateSectionsData }: SectionListProps) => {
  const [sections] = useState([
    <PersonalInformation updateData={updateSectionsData} />,
    <Experience updateData={updateSectionsData} />,
    <Education updateData={updateSectionsData} />,
  ]);

  return (
    <>
      {sections.map((section, index) => (
        <section key={index}>{section}</section>
      ))}
      <div className="buttons">
        <button className="generate">Generate PDF</button>
        <button className="load">Load Example</button>
        <button className="delete">Reset</button>
      </div>
    </>
  );
};

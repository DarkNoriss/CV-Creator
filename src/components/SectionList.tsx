import { useState } from 'react';
import { PersonalInformation } from './PersonalInformation';
import { Experience } from './Experience';
import { Education } from './Education';
import { Props } from '../interfaces/interfaces';

export const SectionList = ({ sectionsData, setSectionsData }: Props) => {
  // const [sectionsData, setSectionsData] = useState<string[]>(() => []);
  const [sections] = useState([
    <PersonalInformation updateData={updateSectionsData} />,
    <Experience updateData={updateSectionsData} />,
    <Education updateData={updateSectionsData} />,
  ]);

  function updateSectionsData(data: any, from: string) {
    setSectionsData((prevSectionsData) => ({
      ...prevSectionsData,
      [from]: data,
    }));
  }

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

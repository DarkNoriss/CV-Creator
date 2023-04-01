import React, { FC, ReactElement, useState } from 'react';
import { SectionTypes } from '../interfaces/interfaces';
import { PersonalInformation } from './PersonalInformation';
import { Experience } from './Experience';
import { Education } from './Education';
import { useUpdateEffect } from '../utils/useUpdateEffect';

export const SectionList = () => {
  const [sectionsData, setSectionsData] = useState<SectionTypes[]>(() => []);
  const [sections] = useState([
    <PersonalInformation />,
    <Experience updateData={updateSectionsData} />,
    <Education />,
  ]);

  function updateSectionsData(data: any, from: string) {
    setSectionsData((prevSectionsData) => ({
      ...prevSectionsData,
      [from]: data,
    }));
  }

  // useUpdateEffect(() => console.log(sectionsData), [sectionsData]);

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

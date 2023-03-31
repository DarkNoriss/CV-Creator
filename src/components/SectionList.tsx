import React, { FC, ReactElement } from 'react';

interface SectionListProps {
  sections: ReactElement[];
}

export const SectionList = ({ sections }: SectionListProps) => {
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

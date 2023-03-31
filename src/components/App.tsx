import { useState } from 'react';
import { Header } from './Header';
import { SectionList } from './SectionList';
import { Footer } from './Footer';
import '../styles/app.scss';
import { PersonalInformation } from './PersonalInformation';
import { Experience } from './Experience';
import { Education } from './Education';

export const App = () => {
  const [sections] = useState([<PersonalInformation />, <Experience />, <Education />]);

  return (
    <>
      <Header />
      <div className="app">
        <div className="section-list">
          <SectionList sections={sections} />
        </div>
        <div className="app-preview"></div>
      </div>
      <Footer />
    </>
  );
};

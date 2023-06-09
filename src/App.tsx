import { FC, useState } from 'react';
import { Header } from './components/Header';
import { SectionList } from './components/SectionList';
import { DisplayPdf } from './components/DisplayPdf';
import { Footer } from './components/Footer';
import './styles/app.scss';
import { ExperienceProps } from './components/Experience';
import { EducationProps } from './components/Education';
import { PersonalInformationProps } from './components/PersonalInformation';

export type SectionsProps = {
  personalInformation: PersonalInformationProps[];
  experience: ExperienceProps[];
  education: EducationProps[];
};
export const App: FC = () => {
  const [sectionsData, setSectionsData] = useState<SectionsProps>({
    personalInformation: [],
    experience: [],
    education: [],
  });

  const updateSectionsData = (data: string, from: string) => {
    setSectionsData((prevSectionsData) => ({
      ...prevSectionsData,
      [from]: data,
    }));
  };

  return (
    <>
      <Header />
      <div className="app">
        <div className="section-list">
          <SectionList updateSectionsData={updateSectionsData} />
        </div>
        <DisplayPdf sectionsData={sectionsData} />
      </div>
      <Footer />
    </>
  );
};

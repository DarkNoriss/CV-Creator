import { FC, useState } from 'react';
import { Header } from './components/Header';
import { SectionList } from './components/SectionList';
import { DisplayPdf } from './components/DisplayPdf';
import { Footer } from './components/Footer';
import './styles/app.scss';

export const App: FC = () => {
  const [sectionsData, setSectionsData] = useState<string[]>(() => []);

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

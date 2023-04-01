import { FC, useState } from 'react';
import { Header } from './Header';
import { SectionList } from './SectionList';
import { Footer } from './Footer';
import '../styles/app.scss';
import { DisplayPdf } from './DisplayPDF';

export const App: FC = (): JSX.Element => {
  const [sectionsData, setSectionsData] = useState<string[]>(() => []);

  return (
    <>
      <Header />
      <div className="app">
        <div className="section-list">
          <SectionList sectionData={sectionsData} setSectionsData={setSectionsData} />
        </div>
        <div className="app-preview">
          <DisplayPdf />
        </div>
      </div>
      <Footer />
    </>
  );
};

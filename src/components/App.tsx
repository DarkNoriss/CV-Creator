import { FC } from 'react';
import { Header } from './Header';
import { SectionList } from './SectionList';
import { Footer } from './Footer';
import '../styles/app.scss';

export const App: FC = () => {
  return (
    <>
      <Header />
      <div className="app">
        <div className="section-list">
          <SectionList />
        </div>
        <div className="app-preview"></div>
      </div>
      <Footer />
    </>
  );
};

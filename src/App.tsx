import { FC } from 'react';
import { Header } from './components/Header';
import { SectionList } from './components/SectionList';
import { Footer } from './components/Footer';
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

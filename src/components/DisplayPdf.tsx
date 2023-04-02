import { useState } from 'react';
import '../styles/displaypdf.scss';

export const DisplayPdf = () => {
  const [pdfData, setPdfData] = useState(() => 0);

  return (
    <div className="pdf">
      <div className="pdf-background">
        <div className="bg-bg1"></div>
        <div className="bg-bar"></div>
        <div className="bg-bg2"></div>
      </div>
      <div className="pdf-header">
        <div className="hder-bg1"></div>
        <div className="hder-bar"></div>
        <div className="hder-bg2"></div>
      </div>
      <div className="pdf-main">
        <div className="main-bg1"></div>
        <div className="main-bar"></div>
        <div className="main-bg2"></div>
      </div>
    </div>
  );
};

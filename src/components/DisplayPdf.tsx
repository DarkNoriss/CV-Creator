import { useState } from 'react';
import { useUpdateEffect } from '../utils/useUpdateEffect';
import '../styles/displaypdf.scss';

type DisplayPdfProps = {
  sectionsData: string[];
};
export const DisplayPdf = ({ sectionsData }: DisplayPdfProps) => {
  const [pdfData, setPdfData] = useState<string[]>(() => []);

  useUpdateEffect(() => {
    setPdfData(sectionsData);
    // console.log(pdfData);
  }, [sectionsData]);

  const dataNotEmpty = () => pdfData.length > 0;

  const test = (data: any) => console.log(data);

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
        <div className="hder-bg2">{dataNotEmpty() && <p>XD</p>}</div>
      </div>
      <div className="pdf-main">
        <div className="main-bg1"></div>
        <div className="main-bar"></div>
        <div className="main-bg2"></div>
      </div>
    </div>
  );
};

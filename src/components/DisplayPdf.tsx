import '../styles/displaypdf.scss';

type DisplayPdfProps = {
  sectionsData: string[];
};

//ASK KUBEN ABOUT THIS SHIT
export const DisplayPdf = ({ sectionsData }: DisplayPdfProps) => {
  const { personalInformation, experience, education } = sectionsData;

  console.log(personalInformation);
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
        <div className="hder-bg2">
          <p>{personalInformation?.[0]?.firstName}</p>
          <p>{personalInformation?.[0]?.lastName}</p>
        </div>
      </div>
      <div className="pdf-main">
        <div className="main-bg1"></div>
        <div className="main-bar"></div>
        <div className="main-bg2">
          <div className="exp">{experience?.[0] && <p className="head">Experience</p>}</div>
          <div className="edu">{education?.[0] && <p className="head">Education</p>}</div>
        </div>
      </div>
    </div>
  );
};

// {dataNotEmpty() && <p>XD</p>}
// education
// experience
// personalInformation

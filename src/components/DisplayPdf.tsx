import '../styles/displaypdf.scss';

type DisplayPdfProps = {
  sectionsData: string[];
};

//ASK KUBEN ABOUT THIS ANY SHIT AAAAAAA
export const DisplayPdf = ({ sectionsData }: DisplayPdfProps) => {
  const { personalInformation, experience, education }: any = sectionsData;

  const getInfo = (label: string) => {
    const section = personalInformation.find((info: any) => info[label]);
    const info = section ? section[label] : '';
    return info;
  };

  const getExp = (label: string) => {
    return experience[label];
  };

  const getEdu = (label: string) => {
    return education[label];
  };

  return (
    <div className="pdf">
      <div className="pdf-bar">
        <img></img>
        <div className="desc ">
          {personalInformation?.[0]?.desc && (
            <>
              <h3>PROFILE</h3>
              <p>{getInfo('desc')}</p>
            </>
          )}
        </div>
        <div className="contact ">
          <h3>CONTACT ME</h3>
          <p>{personalInformation?.[0]?.phoneNumber && getInfo('phoneNumber')}</p>
          <p>{personalInformation?.[0]?.email && getInfo('email')}</p>
          <p>{personalInformation?.[0]?.address && getInfo('address')}</p>
          <p>{personalInformation?.[0]?.github && getInfo('github')}</p>
        </div>
      </div>
      <div className="pdf-header">
        <div className="pdf-header-text">
          <p>{personalInformation?.[0]?.firstName && getInfo('firstName').toUpperCase()}</p>
          <p>{personalInformation?.[0]?.lastName && getInfo('lastName').toUpperCase()}</p>
        </div>
      </div>
      <div className="pdf-text"></div>
    </div>
  );
};

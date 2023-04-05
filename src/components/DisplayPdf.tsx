import { SectionsProps } from '../App';
import '../styles/displaypdf.scss';
import { EducationProps } from './Education';

type DisplayPdfProps = {
  sectionsData: SectionsProps;
};

//ASK KUBEN ABOUT THIS ANY SHIT AAAAAAA
export const DisplayPdf = ({ sectionsData }: DisplayPdfProps) => {
  const { personalInformation, experience, education } = sectionsData;

  const getInfo = (label: string) => {
    const section = personalInformation.find((info) => info[label]);
    return section ? section[label] : '';
  };

  const isContact = () => {
    if (personalInformation?.[0].phoneNumber) return true;
    if (personalInformation?.[0].email) return true;
    if (personalInformation?.[0].address) return true;
    if (personalInformation?.[0].github) return true;
  };

  return (
    <div className="pdf">
      <div className="pdf-bar">
        <img></img>
        {personalInformation?.[0]?.desc && (
          <div className="desc ">
            <h3>PROFILE</h3>
            <p>{getInfo('desc')}</p>
          </div>
        )}
        {isContact() && (
          <div className="contact ">
            <h3>CONTACT ME</h3>
            <p>{personalInformation?.[0]?.phoneNumber && getInfo('phoneNumber')}</p>
            <p>{personalInformation?.[0]?.email && getInfo('email')}</p>
            <p>{personalInformation?.[0]?.address && getInfo('address')}</p>
            <p>{personalInformation?.[0]?.github && getInfo('github')}</p>
          </div>
        )}
      </div>
      <div className="pdf-header">
        <div className="pdf-header-text">
          <p>{personalInformation?.[0]?.firstName && getInfo('firstName').toUpperCase()}</p>
          <p>{personalInformation?.[0]?.lastName && getInfo('lastName').toUpperCase()}</p>
        </div>
      </div>
      <div className="pdf-text">
        {experience?.[0] && (
          <div className="pdf-exp">
            <h3>Experience</h3>
            {experience.map((group: EducationProps, groupIndex: number) => (
              <div key={groupIndex}>
                <p>{group.company}</p>
                <p>{group.position}</p>
                <div className="from-to">
                  <p>{group.city}</p>
                  <p>
                    {group.from} - {group.to}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {education?.[0] && (
          <div className="pdf-edu">
            <h3>Education</h3>
          </div>
        )}
      </div>
    </div>
  );
};

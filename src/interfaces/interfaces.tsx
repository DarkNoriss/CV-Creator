export interface ExperienceTypes {
  position: string;
  company: string;
  city: string;
  from: string;
  to: string;
  [key: string]: string;
}

export interface Props {
  updateData: (data: any, from: string) => void;
}

export interface SectionTypes {
  personal: [];
  experience: ExperienceTypes[];
}

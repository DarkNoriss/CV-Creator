import { ChangeEvent, FC, useState } from 'react';

export const Experience: FC = () => {
  interface Experience {
    position: string;
    company: string;
    city: string;
    from: string;
    to: string;
  }

  const [experience, setExperience] = useState<Experience[]>([]);

  const handleChange = (event: ChangeEvent, index: number) => {
    const name = (event.target as HTMLInputElement).name;
    const value = (event.target as HTMLInputElement).value;

    const updatedExperience = experience.map((item, i) => {
      if (i === index) {
        return {
          ...item,
          [name]: value,
        };
      }
      return item;
    });

    setExperience(updatedExperience);
    console.log(experience);
  };

  const addExperience = () => {
    setExperience([
      ...experience,
      {
        position: '',
        company: '',
        city: '',
        from: '',
        to: '',
      },
    ]);
  };

  const removeExperience = (index: number) => {
    setExperience(experience.filter((_, i) => i !== index));
  };

  const experienceTemp = (index: number) => {
    return (
      <div key={index}>
        <input
          name="position"
          placeholder="Position"
          value={experience[index].position}
          onChange={(e) => handleChange(e, index)}
        ></input>
        <input
          name="company"
          placeholder="Company"
          value={experience[index].company}
          onChange={(e) => handleChange(e, index)}
        ></input>
        <input
          name="city"
          placeholder="City"
          value={experience[index].city}
          onChange={(e) => handleChange(e, index)}
        ></input>
        <input
          name="from"
          placeholder="From"
          value={experience[index].from}
          onChange={(e) => handleChange(e, index)}
        ></input>
        <input
          name="to"
          placeholder="To"
          value={experience[index].to}
          onChange={(e) => handleChange(e, index)}
        ></input>
        <button onClick={() => removeExperience(index)}>Delete</button>
      </div>
    );
  };

  // const handleAddExperience = () => {};

  return (
    <>
      <h3>Experience</h3>
      <div>
        <>
          {experience.length > 0
            ? experience.map((__, index) => experienceTemp(index))
            : console.log('No experience added yet')}
          <button onClick={addExperience}>Add</button>
        </>
      </div>
    </>
  );
};

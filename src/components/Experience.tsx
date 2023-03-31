import { ChangeEvent, FC, useState } from 'react';

export const Experience: FC = (): JSX.Element => {
  const [experience, setExperience] = useState<{ [key: string]: string | undefined }[]>([]);

  // useEffect(() => console.log(experience));

  const handleChange = (event: ChangeEvent, index: number) => {
    const value = (event.target as HTMLInputElement).value;
    setExperience([
      ...experience.slice(0, index),
      {
        ...experience[index],
        position: value,
      },
      ...experience.slice(index + 1),
    ]);
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
          name={`position${index}`}
          placeholder="Position"
          value={experience[index].position}
          onChange={(e) => handleChange(e, index)}
        ></input>
        <input
          name={`company${index}`}
          placeholder="Company"
          value={experience[index].company}
          onChange={(e) => handleChange(e, index)}
        ></input>
        <input
          name={`city${index}`}
          placeholder="City"
          value={experience[index].city}
          onChange={(e) => handleChange(e, index)}
        ></input>
        <input
          name={`from${index}`}
          placeholder="From"
          value={experience[index].from}
          onChange={(e) => handleChange(e, index)}
        ></input>
        <input
          name={`to${index}`}
          placeholder="To"
          value={experience[index].to}
          onChange={(e) => handleChange(e, index)}
        ></input>
        <button onClick={() => removeExperience(index)}>Delete</button>
      </div>
    );
  };

  // const experienceTemp = (index: number) => {
  //   return (
  //     <div key={index}>
  //       <input name={`position${index}`} placeholder="Position"></input>
  //       <input name={`company${index}`} placeholder="Company"></input>
  //       <input name={`city${index}`} placeholder="City"></input>
  //       <input name={`from${index}`} placeholder="From"></input>
  //       <input name={`to${index}`} placeholder="To"></input>
  //       <button onClick={() => removeExperience(index)}>Delete</button>
  //     </div>
  //   );
  // };

  const handleAddExperience = () => {};

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

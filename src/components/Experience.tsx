import { ChangeEvent, FC, useState } from 'react';
import { ExperienceTypes, Props } from '../interfaces/interfaces';
import { useUpdateEffect } from '../utils/useUpdateEffect';

export const Experience = ({ updateData }: Props) => {
  const [exp, setExp] = useState<ExperienceTypes[]>(() => []);

  useUpdateEffect(() => {
    updateData(exp, 'experience');
  }, [exp]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>, index: number) => {
    const { name, value } = event.target;

    const updatedExp = exp.map((item, i) => (i !== index ? item : { ...item, [name]: value }));

    setExp(updatedExp);
  };

  const addExp = () => {
    setExp([...exp, { position: '', company: '', city: '', from: '', to: '' }]);
  };

  const removeExp = (index: number) => {
    setExp(exp.filter((_, i) => i !== index));
  };

  const renderExp = (index: number) => {
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      handleChange(e, index);
    };

    return (
      <div key={index}>
        {['position', 'company', 'city', 'from', 'to'].map((name) => (
          <input
            key={name}
            name={name}
            placeholder={name[0].toUpperCase() + name.slice(1)}
            value={exp[index][name]}
            onChange={handleInputChange}
          />
        ))}
        <button onClick={() => removeExp(index)}>Delete</button>
      </div>
    );
  };

  return (
    <section>
      <h3>Experience</h3>
      <div>
        {exp.length !== 0 && exp.map((_, index) => renderExp(index))}
        <button onClick={addExp}>Add</button>
      </div>
    </section>
  );
};

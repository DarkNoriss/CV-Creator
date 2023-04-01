import { ChangeEvent } from 'react';

export const createInput = (
  arrayCurrent: any,
  arraySet: any,
  fieldNames: string[],
  index: number,
  button: boolean
) => {
  const removeInput = (index: number) => {
    arraySet(arrayCurrent.filter((_: any, i: number) => i !== index));
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>, index: number) => {
    const { name, value } = event.target;

    const updatedArray = arrayCurrent.map((item: any, i: number) =>
      i !== index ? item : { ...item, [name]: value }
    );

    arraySet(updatedArray);
  };

  const renderInput = () => {
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      handleChange(e, index);
    };

    return (
      <div key={index}>
        {fieldNames.map((name: any) => {
          const nameSplit = name.split(/(?=[A-Z])/)[0];
          const nameBetween = nameSplit + ' ' + name.slice(nameSplit.length);
          const nameFormatted = nameBetween[0].toUpperCase() + nameBetween.slice(1).toLowerCase();

          return (
            <input
              key={name}
              name={name}
              placeholder={nameFormatted}
              value={arrayCurrent[index][name]}
              onChange={handleInputChange}
            />
          );
        })}
        {button && <button onClick={() => removeInput(index)}>Delete</button>}
      </div>
    );
  };

  return renderInput();
};

export const addInput = (arrayCurrent: any, arraySet: any, fieldNames: string[]) => {
  const fieldNamesInit = fieldNames.reduce(
    (acc: { [key: string]: string }, fieldName) => ({ ...acc, [fieldName]: '' }),
    {}
  );

  arraySet([...arrayCurrent, fieldNamesInit]);
};

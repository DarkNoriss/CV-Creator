import React, { useState } from 'react';
import { useUpdateEffect } from '../utils/useUpdateEffect';

type InputGroup = Record<string, string>;
type InputSectionProps = {
  sectionName: string[];
  fieldData: string[][];
  updateGlobalState: (data: InputGroup[], from: string) => void;
  renderInit: boolean;
};

export const DynamicInputSection: React.FC<InputSectionProps> = ({
  sectionName,
  fieldData,
  updateGlobalState,
  renderInit,
}) => {
  const [inputGroups, setInputGroups] = useState<InputGroup[]>(() => []);
  const [renderInitial] = useState<boolean>(() => renderInit);
  const [rendered, setRendered] = useState<boolean>(() => false);
  const fieldNames = fieldData.map((value) => value[0]);
  const placeholders = fieldData.map((value) => value[1]);

  useUpdateEffect(() => {
    updateGlobalState(inputGroups, sectionName[0]);
  }, [inputGroups]);

  const handleInputChange = ({
    groupIndex,
    inputName,
    value,
  }: {
    groupIndex: number;
    inputName: string;
    value: string;
  }) => {
    setInputGroups((curGroups) => {
      const newGroups = [...curGroups];
      const groupToUpdate = newGroups[groupIndex];
      groupToUpdate[inputName] = value;
      return newGroups;
    });
  };

  const addInputGroup = () =>
    setInputGroups((curGroups) => [...curGroups, createGroup(fieldNames)]);

  const createGroup = (fieldNames: string[]) =>
    fieldNames.reduce((acc, cur) => ({ ...acc, [cur]: '' }), {});

  const removeInputGroup = (index: number) =>
    setInputGroups((curGroups) => curGroups.filter((_, i) => i !== index));

  if (renderInitial && !rendered) {
    setRendered(true);
    addInputGroup();
  }

  return (
    <section>
      <h3>{sectionName[1]}</h3>
      {inputGroups.map((group, groupIndex) => (
        <div key={groupIndex}>
          {Object.entries(group).map(([name, value], index) => (
            <input
              key={index}
              name={name}
              placeholder={placeholders[index]}
              value={value}
              onChange={(e) =>
                handleInputChange({ groupIndex, inputName: name, value: e.target.value })
              }
            />
          ))}
          {!renderInitial && <button onClick={() => removeInputGroup(groupIndex)}>Delete</button>}
        </div>
      ))}
      {!renderInitial && <button onClick={addInputGroup}>Add</button>}
    </section>
  );
};

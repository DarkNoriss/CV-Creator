import React, { useState } from 'react';
import { useUpdateEffect } from '../utils/useUpdateEffect';

type FieldData = Record<string, string>;
type InputGroup = Record<string, string>;

type InputSectionProps = {
  sectionName: string;
  sectionLabel: string;
  fieldData: FieldData;
  updateGlobalState: (data: InputGroup[], from: string) => void;
  renderInitialGroup: boolean;
};

type HandleInput = {
  groupIndex: number;
  inputName: string;
  value: string;
};

export const DynamicInputSection: React.FC<InputSectionProps> = ({
  sectionName,
  sectionLabel,
  fieldData,
  updateGlobalState,
  renderInitialGroup,
}) => {
  const [inputGroups, setInputGroups] = useState<InputGroup[]>(() =>
    renderInitialGroup ? [createGroup(fieldData)] : []
  );
  const limitToOnlyOneGroup = renderInitialGroup;

  useUpdateEffect(() => {
    updateGlobalState(inputGroups, sectionLabel);
  }, [inputGroups]);

  const handleInputChange = ({ groupIndex, inputName, value }: HandleInput) => {
    setInputGroups((curGroups) => {
      const newGroups = [...curGroups];
      const groupToUpdate = newGroups[groupIndex];
      groupToUpdate[inputName] = value;
      return newGroups;
    });
  };

  const addInputGroup = () => setInputGroups((curGroups) => [...curGroups, createGroup(fieldData)]);
  const removeInputGroup = (index: number) =>
    setInputGroups((curGroups) => curGroups.filter((_, i) => i !== index));

  return (
    <>
      <h3>{sectionName}</h3>
      {inputGroups.map((group, groupIndex) => (
        <div key={groupIndex}>
          {Object.entries(group).map(([name, value], index) => {
            const label = fieldData[name];
            return (
              <input
                key={index}
                name={name}
                placeholder={label}
                value={value}
                onChange={(e) =>
                  handleInputChange({ groupIndex, inputName: name, value: e.target.value })
                }
              />
            );
          })}
          {!limitToOnlyOneGroup && (
            <button onClick={() => removeInputGroup(groupIndex)}>Delete</button>
          )}
        </div>
      ))}
      {!limitToOnlyOneGroup && <button onClick={addInputGroup}>Add</button>}
    </>
  );
};

const createGroup = (fieldNames: FieldData) =>
  Object.keys(fieldNames).reduce<InputGroup>((acc, cur) => ({ ...acc, [cur]: '' }), {});

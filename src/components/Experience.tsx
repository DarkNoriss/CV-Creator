export const Experience = () => {
  const addExperience = () => {
    return (
      <>
        <input name="position" placeholder="Position"></input>
        <input name="company" placeholder="Company"></input>
        <input name="city" placeholder="City"></input>
        <input name="from" placeholder="From"></input>
        <input name="to" placeholder="To"></input>
        <button>Delete</button>
      </>
    );
  };

  const handleAddExperience = () => {};

  return (
    <>
      <h3>Experience</h3>
      <div>
        {addExperience()}
        {addExperience()}
        {addExperience()}
        <button>Add</button>
      </div>
    </>
  );
};

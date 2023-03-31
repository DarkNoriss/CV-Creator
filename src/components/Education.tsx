export const Education = () => {
  const addEducation = () => {
    return (
      <>
        <input name="universityName" placeholder="University name"></input>
        <input name="city" placeholder="City"></input>
        <input name="degree" placeholder="Degree"></input>
        <input name="subject" placeholder="Subject"></input>
        <input name="from" placeholder="From"></input>
        <input name="to" placeholder="To"></input>
        <button>Delete</button>
      </>
    );
  };

  const handleAddEducation = () => {};

  return (
    <>
      <h3>Education</h3>
      <div>
        {addEducation()}
        <button>Add</button>
      </div>
    </>
  );
};

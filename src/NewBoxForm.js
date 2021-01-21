import { useState } from "react";

/* 
* Props: 
* - addBox: addBox function
* 
* State:
* - formData: object {width, height, backgroundColor}
*
* BoxList -> NewBoxForm
*/
function NewBoxForm({ addBox }) {
  const initialState = {
    width: "",
    height: "",
    backgroundColor: ""
  };
  const [formData, setFormData] = useState(initialState);

  /* Handler for form submission */
  function handleSubmit(evt) {
    evt.preventDefault();
    addBox(formData);
    setFormData(initialState);
  }

  /* Handler for input change */
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value,
    }));
  }

  return (
    <div className="NewBoxForm">
      <form className="NewBoxForm-form" onSubmit={handleSubmit}>
        <label htmlFor="NewBoxForm-height">Height</label>
        <input 
          id="NewBoxForm-height"
          name="height"
          onChange={handleChange}
          value={formData.height}
          type="number"
          />
        <label htmlFor="NewBoxForm-width">Width</label>
        <input 
          id="NewBoxForm-width"
          name="width"
          onChange={handleChange}
          value={formData.width}
          type="number"
          />
        <label htmlFor="NewBoxForm-backgroundColor">Background Color</label>
        <input 
          id="NewBoxForm-backgroundColor"
          name="backgroundColor"
          onChange={handleChange}
          value={formData.backgroundColor}
          />
        <button className="NewBoxForm-add" type="submit">Add a new box!</button>
      </form>
    </div>
  );
}

export default NewBoxForm;
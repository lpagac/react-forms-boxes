import { useState } from "react";
import { v4 as uuid } from "uuid";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

/* 
* Props: None
* 
* State:
* - boxes: [{box}, etc.]
*
* App -> BoxList -> {NewBoxForm, Box}
*/
function BoxList() {
  const [boxes, setBoxes] = useState([]);

  /* Takes a box and adds to state */
  function addBox(box) {
    let newBox = { ...box, id: uuid() };
    setBoxes(bxs => [...bxs, newBox]);
  }

  /* Takes an id and removes that box from state */
  function removeBox(id) {
    setBoxes(bxs => bxs.filter(box => box.id !== id));
  }

  const boxComponents = boxes.map(box => {
    return (<Box
      width={box.width}
      height={box.height}
      backgroundColor={box.backgroundColor}
      key={box.id}
      id={box.id}
      removeBox={removeBox} />);
  });

  return (
    <div className="BoxList">
      <NewBoxForm addBox={addBox} />
      {boxComponents}
    </div>
  );
}

export default BoxList;
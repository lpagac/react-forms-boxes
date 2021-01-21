import { useState } from "react";
import { v4 as uuid } from "uuid";
import Box from "./Box";

function BoxList() {
  const [boxes, setBoxes] = useState([]);

  function addBox(box) {
    let newBox = {...box, id: uuid()};
    setBoxes(b => [...b, newBox]);
  }

  function removeBox(id) {
    setBoxes(b => b.filter(box => box.id !== id));
  }

  return (
    <div className="BoxList">
      <NewBoxForm addBox={addBox} />
      {boxes.map(box => {(<Box 
                            width={box.width} 
                            height={box.height} 
                            background={box.backgroundColor} 
                            key={box.id} 
                            id={box.id} 
                            remove={removeBox} />
                          )
                        }
      )}
    </div>
  )
}

export default BoxList;
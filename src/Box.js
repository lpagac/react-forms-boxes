/** 
* Props: 
* - id
* - width: in px
* - height: in px
* - backgroundColor
* - remove: removeBox function 
* 
* State: None
*
* BoxList -> Box
*/
function Box({id, width="0", height="0", backgroundColor, removeBox}) {

  /* Handler to remove box from parent component (BoxList) state */
  function handleRemove() {
    removeBox(id);
  }

  const style = {
    width: `${width}px`,
    height: `${height}px`,
    backgroundColor: backgroundColor || "blue" 
  };

  return (
    <div className="Box" id={id}>
      <div className="Box-box" style={style}></div>
      <button
        className="Box-remove"
        onClick={handleRemove}
      >X</button>
    </div>
  );
}

export default Box;

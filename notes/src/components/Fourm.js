import React from "react";

function Fourm(props) {
  const clickHandle = e => {
    e.preventDefault();
    props.addNewNote();
    props.history.push("/");
  };

  return (
    <>
      <form>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={props.note.title}
          onChange={props.changeHandler}
        />
        <input
          type="text"
          name="textBody"
          placeholder="note content"
          value={props.note.textBody}
          onChange={props.changeHandler}
        />
        <button type="submit" onClick={clickHandle}>
          Save
        </button>
      </form>
    </>
  );
}

export default Fourm;
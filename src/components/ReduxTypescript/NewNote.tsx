import React, { ChangeEvent, useState } from "react";
import './NewNote.css';
interface NewNoteProps {
  addNote(note: string): void;
}
const NewNote: React.FC<NewNoteProps> = ({ addNote }) => {
  const [note, setNote] = useState("");

  const adding = (e: ChangeEvent<HTMLInputElement>) => {
    setNote(e.target.value);
  };

  const onAddNote = () => {
    addNote(note);
    setNote("");
  };
  return (
    <div className="notes">
      <input
        type="text"
        value={note}
        onChange={adding}
        name="note"
        placeholder="ADD NOTE"
      /><br></br><br></br>
      <button onClick={onAddNote}>ADD NOTE</button>
    </div>
  );
};
export default NewNote;

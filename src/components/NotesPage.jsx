import { notes } from "../data/notes";
import NoteItem from "./NoteItem";

export default function NotesPage({ 
  setSelectedNote, 
  setActiveSection, 
  setDetailOrigin, 
  origin 
}) {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-8 text-center dark:text-white border-b pb-2">
        My <span className="text-primary-500">Notes</span>
      </h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {notes.map(note => (
          <NoteItem
            key={note.id}
            note={note}
            onClick={() => {
              setSelectedNote(note);
              setDetailOrigin(origin);
              setActiveSection("note-detail");
            }}
          />
        ))}
      </div>
    </section>
  );
}

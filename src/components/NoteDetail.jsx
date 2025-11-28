import { useEffect } from "react";

export default function NoteDetail({ note, setActiveSection, detailOrigin }) {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  if (!note) return null;

  return (
    <div className="max-w-3xl mx-auto p-4">

      <button 
        onClick={() => {
        setActiveSection("about");

        setTimeout(() => {
          document.getElementById("notes-section")?.scrollIntoView({
            behavior: "smooth"
          });
        }, 100);
      }}
        className="px-6 py-3 rounded-3xl font-medium bg-primary-500 hover:bg-primary-600 text-white transition mb-6" 
      >
        ← Back to Notes
      </button>

      <img
        src={note.localImage}
        className="w-full aspect-square object-cover rounded-xl mb-6"
      />


      <h1 className="text-3xl font-bold dark:text-white">{note.title}</h1>
      <div className="text-gray-500 mb-6">{note.category} 
        {/* • {note.date} */}
        </div>

      <div className="text-gray-700 dark:text-gray-300 space-y-4">
        {note.content.map((block, index) => {
          if (block.type === "p")
            return <p key={index}>{block.text}</p>;

          if (block.type === "h2")
            return <h2 key={index} className="text-xl font-semibold dark:text-white">{block.text}</h2>;

          if (block.type === "ul")
            return (
              <ul key={index} className="ml-6 list-disc space-y-1">
                {block.items.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            );

          if (block.type === "ol")
            return (
              <ol key={index} className="ml-6 list-decimal space-y-1">
                {block.items.map((item, i) => <li key={i}>{item}</li>)}
              </ol>
            );

          return null;
        })}
      </div>
    </div>
  );
}

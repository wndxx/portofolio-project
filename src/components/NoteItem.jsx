export default function NoteItem({ note, onClick }) {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer block rounded-3xl overflow-hidden 
                 shadow-lg transition transform hover:scale-105 
                 bg-white dark:bg-gray-800 hover:shadow-xl mb-12"
    >
      {/* Bagian gambar */}
      <div className="h-64 bg-gray-200 dark:bg-gray-700 flex items-center justify-center overflow-hidden">
        <img
          src={note.localImage}
          alt={note.title}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/300x200?text=Image';
          }}
        />
      </div>

      {/* Konten */}
      <div className="p-6">
        <div className="text-sm text-gray-500 dark:text-gray-400 mb-3 flex items-center gap-2">
          <span className="uppercase font-semibold tracking-wide">{note.category}</span>
          {/* <span>•</span> */}
          {/* <span>{note.date}</span> */}
        </div>

        <h2 className="text-2xl font-bold dark:text-white">{note.title}</h2>

        <p className="mt-2 text-gray-600 dark:text-gray-300 line-clamp-3">
          {note.content[0]?.text}
        </p>
      </div>
    </div>
  );
}


import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import noteslist from "./notes";

function App() {
  return (
    <div>
      <Header />
      <Footer />
      {noteslist.map((note) => (
        
        <Note key={note.key} title={note.title} content={note.content} />
    
      ))}
    </div>
  );
}

export default App;

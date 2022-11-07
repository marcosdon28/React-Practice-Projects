import Entry from "./components/Entry";
import emojipedia from "./emojipedia";

/*function createEntry(entry){
  return <Entry 
    key = {entry.id}
    emoji = {entry.emoji}
    name = {entry.name}
    meaning = {entry.meaning}
  
  />
}*/

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
        {/* asi es con la funcion de arriba */}
        {/*emojipedia.map(createEntry) */}
        

        {/* asi es con arrow function*/}
        {emojipedia.map(entry => (
          <Entry 
            key = {entry.id}
            emoji = {entry.emoji}
            name = {entry.name}
            meaning = {entry.meaning}
  
          />
        ))}

      </dl>
      
    </div>
    
  );
}

export default App;


//text lenght trunc

const emojipediaTrunc = emojipedia.map(function(entry){
  return entry.meaning.substring(0,100)
});

console.log(emojipediaTrunc)
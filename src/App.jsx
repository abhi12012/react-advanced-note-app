
import Header from "./components/Header";
import NoteForm from "./components/NoteForm";
import NotesList from "./components/NotesList";






function App() {
  return (
    <div>
     <Header
  title="Advanced Notes App"
  subtitle="Learn React Step by Step"
>
  <button>New Note</button>
</Header>


      <NoteForm />
      <NotesList />
    </div>
  );
}

export default App;




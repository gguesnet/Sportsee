import Header from "./components/Header";
import Main from "./components/Main";
import "./App.css";

function App({ user }) {
  return (
    <>
      <Header />
      <Main user={user} />
    </>
  );
}

export default App;

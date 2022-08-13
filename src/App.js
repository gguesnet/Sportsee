import Header from "./components/Header";
import Main from "./components/Main";

function App({ userID }) {
  return (
    <>
      <Header />
      <Main userID={userID} />
    </>
  );
}

export default App;

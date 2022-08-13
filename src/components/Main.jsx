import Sidebar from "./Sidebar";
import Content from "./Content";

function Main({ userID }) {
  return (
    <>
      <Sidebar />
      <Content userID={userID} />
    </>
  );
}

export default Main;

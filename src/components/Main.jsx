import Sidebar from "./Sidebar";
import Content from "./Content";

function Main({ user }) {
  return (
    <>
      <Sidebar />
      <Content user={user} />
    </>
  );
}

export default Main;

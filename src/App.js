import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./components/MyNavbar";
import MyFooter from "./components/MyFooter";
// import Welcome from "./components/Welcome";
// import AllTheBooks from "./components/AllTheBooks";
import SingleBook from "./components/SingleBook";

function App() {
  return (
    <>
      <MyNavbar />
      {/* <Welcome /> */}
      {/* <AllTheBooks /> */}
      <SingleBook />
      <MyFooter />
    </>
  );
}

export default App;

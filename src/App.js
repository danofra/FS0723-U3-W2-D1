import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
// import AllTheBooks from './components/AllTheBooks'
import { Container } from "react-bootstrap";
import BookList from "./components/BookList";

import history from "./data/history.json";

function App() {
  return (
    <>
      <MyNav />
      <Container fluid>
        <Welcome />
        {/* <AllTheBooks /> */}
        <BookList books={history} />
      </Container>
      <MyFooter />
    </>
  );
}

export default App;

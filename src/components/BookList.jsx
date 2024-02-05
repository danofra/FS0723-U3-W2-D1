import { Component } from "react";
import SingleBook from "./SingleBook";
import { Col, Form, Row } from "react-bootstrap";
import CommentArea from "./CommentArea";

class BookList extends Component {
  state = {
    searchQuery: "",
    bookId: null,
  };

  currentBook = (bookId) => {
    this.setState({ bookId: bookId });
  };

  render() {
    return (
      <>
        <Form.Group>
          <Form.Control
            type="search"
            placeholder="Cerca un libro"
            value={this.state.searchQuery}
            onChange={(e) => this.setState({ searchQuery: e.target.value })}
          />
        </Form.Group>
        <Row className="justify-content-centermt-5">
          <Col className="col-8 text-center">
            <Row className="justify-content-center">
              {this.props.books
                .filter((b) =>
                  b.title.toLowerCase().includes(this.state.searchQuery)
                )
                .map((b) => (
                  <Col key={b.asin} className="col-md-3 mb-2">
                    <SingleBook book={b} currentBookId={this.currentBook} />
                  </Col>
                ))}
            </Row>
          </Col>
          <Col className="col-4 text-center sticky-top mt-5 h-50">
            <CommentArea asin={this.state.bookId} />
          </Col>
        </Row>
      </>
    );
  }
}

export default BookList;

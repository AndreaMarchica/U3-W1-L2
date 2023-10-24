import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import fantasy from '../books/fantasy.json'
import history from '../books/history.json'
import horror from '../books/horror.json'
import romance from '../books/romance.json'
import scifi from '../books/scifi.json'


const AllTheBooks = () => {
    
    return(
        <Container>
        <Row className="justify-content-center">
          {/* <div className="col col-12 col-md-6 col-lg-4"> */}
          {/* <div><h4>Categoria Fantasy</h4></div> */}
        
          {fantasy.map((book) => {
              return (  
          <Col sm={6} md={4} lg={3} className="customCol">
            <Card>
        <Card.Img variant="top" src={book.img} />
        <Card.Body>
            <div>
          <Card.Title>{book.title}</Card.Title>
          <Card.Text>
           <p>Asin: {book.asin}</p>
           <p>Prezzo: {book.price}€</p>
          </Card.Text></div>
          <div><Button variant="primary">Aggiungi al carrello</Button></div>
        </Card.Body>
      </Card>
        </Col>
          )})}

          {history.map((book) => {
              return (  
          <Col md={4} lg={3}>
            <Card>
        <Card.Img variant="top" src={book.img} />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
          <Card.Text>
           <p>Asin: {book.asin}</p>
           <p>Prezzo: {book.price}€</p>
          </Card.Text>
          <Button variant="primary">Aggiungi al carrello</Button>
        </Card.Body>
      </Card>
        </Col>
          )})}
    
          {horror.map((book) => {
              return (  
          <Col md={4} lg={3} key={book.asin}>
            <Card>
        <Card.Img variant="top" src={book.img} />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
          <Card.Text>
           <p>Asin: {book.asin}</p>
           <p>Prezzo: {book.price}€</p>
          </Card.Text>
          <Button variant="primary">Aggiungi al carrello</Button>
        </Card.Body>
      </Card>
        </Col>
          )})}
    
          {romance.map((book) => {
              return (  
          <Col md={4} lg={3}>
            <Card>
        <Card.Img variant="top" src={book.img} />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
          <Card.Text>
           <p>Asin: {book.asin}</p>
           <p>Prezzo: {book.price}€</p>
          </Card.Text>
          <Button variant="primary">Aggiungi al carrello</Button>
        </Card.Body>
      </Card>
        </Col>
          )})}
    
          {scifi.map((book) => {
              return (  
          <Col md={4} lg={3}>
            <Card>
        <Card.Img variant="top" src={book.img} />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
          <Card.Text>
           <p>Asin: {book.asin}</p>
           <p>Prezzo: {book.price}€</p>
          </Card.Text>
          <Button variant="primary">Aggiungi al carrello</Button>
        </Card.Body>
      </Card>
        </Col>
          )})}
    

    
      </Row>
    </Container>
    )
}
export default AllTheBooks
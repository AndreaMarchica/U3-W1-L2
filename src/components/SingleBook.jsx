import { Component } from "react"
import { Col, Container, Row, Button, Card, } from 'react-bootstrap'
import fantasy from '../books/fantasy.json'
import history from '../books/history.json'
import horror from '../books/horror.json'
import romance from '../books/romance.json'
import scifi from '../books/scifi.json'


// class SingleBook extends Component  {
//     state = { book : {
//         "asin": "",
//     "title": "",
//     "img": "",
//     "price": 0,
//     "category": "",
//     }
//   }
//     render() {
//         return() {
// <Container>
// <Row>
// <Col>

// </Col>
// </Row>
// </Container>




//         }
       
  
    


    
// }
// export default SingleBook



class SingleBook extends Component {
    state = { book : {
                "asin": "",
            "title": "",
            "img": "",
            "price": 0,
            "category": "",
            },
            'selected' : false,
          }
render(){
    return(
        <Container>
            <Row>
                {[...fantasy, ...history, ...horror, ...romance, ...scifi].map((book)=>{
                    return (
                    <Col>
                            <Card>
        <Card.Img variant="top" src={book.img} />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
          <Card.Text>
           <p>Asin: {book.asin}</p>
           <p>Prezzo: {book.price}€</p>
          </Card.Text>
          <Button variant="primary">Mostra</Button>
        </Card.Body>
      </Card></Col>
                )}
                
                )}

      </Row>
         </Container>

    )
}
}

export default SingleBook
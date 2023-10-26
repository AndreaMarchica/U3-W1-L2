import { Component } from "react";
import {
  Container,
  Row,
  Col,
  ListGroup,
  Spinner,
  Alert,
  Button,
} from "react-bootstrap";
import { Trash3Fill } from "react-bootstrap-icons";
// import { parseISO, format } from "date-fns";
// import { it } from "date-fns/locale";

// per recuperare le prenotazioni, e mostrarle in una lista avremo bisogno di uno STATE

class CommentArea extends Component {
  state = {
    // come mai creo uno stato in CommentArea?
    // perchè devo RECUPERARE le PRENOTAZIONI con una fetch()
    // ogni volta che dovrete recuperare dei dati con una fetch, dovrete avere un posto in cui salvarli!
    // questo posto è lo stato del vostro componente
    // NON potrete salvare il risultato della vostra fetch in una variabile a caso...
    comments: [], // DEVE nascere come un array vuoto!
    // alla fine comments diventerà un array di oggetti "prenotazione"!!!
    isLoading: true,
    isError: false,
  };

  // async/await
  //   getcomments = async () => {
  //     try {
  //       const response = await fetch(
  //         'https://striveschool-api.herokuapp.com/api/comment'
  //       )
  //       if (response.ok) {
  //         // fetch finita bene
  //         const data = await response.json()
  //         console.log('DATI RECUPERATI', data)
  //       } else {
  //         // fetch finita male
  //         throw new Error('Errore nel recupero prenotazioni!')
  //       }
  //     } catch (error) {
  //       console.log('ERROR!', error)
  //     }
  //   }

  // .then/.catch
  getComments = () => {
    fetch("https://striveschool-api.herokuapp.com/api/comments")
      .then((response) => {
        if (response.ok) {
          // fetch finita bene
          return response.json();
        } else {
          // fetch finita male
          throw new Error("Errore nel recupero dei commenti!");
        }
      })
      .then((data) => {
        console.log("fetch completata, DATI RECUPERATI", data);
        // se noi qua settassimo lo stato di comments...
        // la lista verrebbe generata in automatico!
        this.setState({
          comments: data,
          isLoading: false,
        });
        // la regola è:
        // ogni volta che viene usato setState, render() viene re-invocato automaticamente
      })
      .catch((error) => {
        console.log("ERROR!", error);
        this.setState({
          isLoading: false,
          isError: true,
        });
      });
  };

  // è SBAGLIATO invocare una funzione che fa un setState dentro render()!
  // questo perchè ogni setState ri-lancia render() automaticamente
  // e quindi finiremo SEMPRE in un loop infinito! D:

  // sarebbe bello avere un posto dove avere la garanzia che il suo contenuto NON venga eseguito più volte
  // sarebbe bello trovare un metodo (NON render) in cui avere la garanzia che NON venga ri-eseguito

  componentDidMount() {
    // componentDidMount viene eseguito UNA VOLTA SOLA!
    // se noi mettessimo la fetch QUI DENTRO,
    this.getComments();
    // componentDidMount viene eseguito automaticamente DOPO la prima invocazione di render()
  }

  render() {
    // render() viene invocato AUTOMATICAMENTE dal componente a classe ogni volta che cambia lo stato o le props!
    // this.getcomments()

    console.log("SONO RENDER!");

    return (
      <Container>
        <Row className="justify-content-center mt-3">
          <Col
            md={8}
            // esempio di assegnazioni classi dinamica senza ripetere le classi presenti in entrambi i casi
            className={`col col-md-8 ${this.state.isLoading ? "mb-2" : "mb-3"}`}
          >
            <h2 className="text-center my-3">Commenti:</h2>
            {this.state.isLoading && (
              <div className="text-center mb-2">
                <Spinner animation="border" variant="info" />
              </div>
            )}
            {this.state.isError && (
              <Alert variant="danger" className="text-center">
                Errore nel recupero dei commenti 😥
              </Alert>
            )}
            <ListGroup>
              {this.state.comments.map((comment) => {
                return (
                  <ListGroup.Item
                    key={comment.elementId}
                    className="d-flex justify-content-between"
                  >
                    <div className="d-flex align-items-center">
                      {comment.rate} per {comment.comment} il{comment.elementId}
                      {/* passaggi per abbellire la data della prenotazione tramite date-fns */}
                      {/* 1) convertire dateTime in un oggetto Date --> parseISO() */}
                      {/* 2) convertire l'oggetto Date ottenuto in una stringa -più bella- --> format() */}
                      {/* {format(
                        parseISO(comment.dateTime),
                        "d MMM yyyy | HH:mm",
                        { locale: it }
                      )} */}
                    </div>
                    <Button
                      variant="danger"
                      onClick={() => {
                        // ora elimino l'elemento su cui ho cliccato
                        fetch(
                          "https://striveschool-api.herokuapp.com/api/comments/" +
                            comment.elementId,
                          {
                            method: "DELETE",
                          }
                        )
                          .then((res) => {
                            if (res.ok) {
                              // l'eliminazione è andata bene
                              console.log("eliminazione completata");
                              // recupero nuovamente TUTTE le prenotazioni in modo da ri-settare lo stato
                              // e permettere al render() di re-invocarsi e trovare le differenze tra il precendente
                              // DOM
                              this.getComments();
                            } else {
                              // l'eliminazione NON è andata bene
                              throw new Error(
                                "Qualcosa è andato storto nell'eliminazione del commento"
                              );
                            }
                          })
                          .catch((err) => {
                            console.log("ERRORE", err);
                          });
                      }}
                    >
                      <Trash3Fill />
                    </Button>
                  </ListGroup.Item>
                );
              })}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default CommentArea;

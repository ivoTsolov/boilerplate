import React, { Component } from 'react';
import {Row, Col, Container} from 'reactstrap';


//components
class Home extends Component {
  render() {
    return (
    <div>
      <Row>
      <Container fluid={true} className="presentation">
        <Row>
          <Col>
            <h1 style={{textAlign:"center", color:"white", marginTop: '220px'}}>This is my playground
           
            </h1>
          
          </Col>

        </Row>
    

      </Container>  
 

      </Row>
      <Row className="underHeader">
            <Col>
            <p style={{ color: "white", fontSize: "25px"}}>
            Here i show tasks given to me from some job applications or just proof of concepts,
            feel free to explore my work, but keep in mind u dont know the requirments for a task that
            has not been given by you, every company has its own approach or requirments to hire people.
            You mind find some depricated and not good practices or patterns here so please find your
            desired task on the navigation bar top right.
            </p>
            </Col>
        </Row>
   
      <Row>
          <Col>
          <h2> 
            de Finibus Bonorum et Malorum
          </h2>
          <p>
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
          </p> 
          </Col>
      </Row>

      <Row>
          <Col md={6}> 
          <h3>
           1914 translation by H. Rackham
          </h3>
          <p> 
            "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."
          </p>
          </Col>
          <Col md={6}>
          <h3>
            1914 translation by H. Rackham
          </h3> 
          <p> 
           "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"
          </p>
          </Col>
      </Row>
    </div>
    );
  }
}

export default Home;

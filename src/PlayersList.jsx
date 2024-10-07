import players from "./players";
import Player from "./Player";
import { Container, Row } from "react-bootstrap";


const PlayersList = () => {

    return (
        <Container>
                <h2 className="text-center" style={{color: 'red', textDecoration: 'underline'}}>My World Class Players List</h2>
            <Row>
                {players.map((player, index) => (
                    <Player key={index} {...player}/>
                ))}
            </Row>
        </Container>
    )
  
}

export default PlayersList;
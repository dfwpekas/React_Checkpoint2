import players from "./players";
import Player from "./Player";
import { Container, Row } from "react-bootstrap";


const PlayersList = () => {

    return (
        <Container>
                <h1 className="text-center" style={{color: 'black'}}>My World Class Players Card</h1>
            <Row>
                {players.map((player, index) => (
                    <Player key={index} {...player}/>
                ))}
            </Row>
        </Container>
    )
  
}

export default PlayersList;
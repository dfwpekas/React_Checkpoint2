import React from 'react';
import Card from 'react-bootstrap/Card';
import players from './players.jsx';

const Player = ({name, age, team, nationality, jerseyNumber, imageURL}) => {

    const imageStyle = {
        width: '18rem',
        height: '18rem'
    }
    return (
        <Card className="m-5 p-3 w-auto bg-dark">
            <Card.Body className='text-light'>
                <Card.Img style={imageStyle} variant='top' src={imageURL} alt='Footballer Image'/>
                    <Card.Title> <h2> {name} </h2></Card.Title>
                    <Card.Text>
                        <strong> Age: {age} </strong> <br />
                        <strong> Team: {team} </strong> <br />
                        <strong> Nationality: {nationality} </strong> <br />
                        <strong> Jersey Number: {jerseyNumber} </strong> <br />
                    </Card.Text>
            </Card.Body>
        </Card>
    );
};


// Define default props for the Player component
Player.defaultProps = {
    name: "Unknown Player",
    team: "Unknown Team",
    nationality: "Unknown Nationality",
    jerseyNumber: 0,
    age: "N/A",
    imageUrl: "https://www.google.com", // Placeholder image URL
};
  

export default Player;
import React from 'react'
import {Link} from 'react-router-dom'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import './SentenceCard.css'

const SentenceCard = ({name,surname,title, description, _id, sentenceId}) => {


    return ( 
        <Col md={6}>
                <Card className='completeCard'>
                    <Link to={`getASentence/${_id}`} className='linkCard'>
                        <Card.Title className='titleCard'>{title}</Card.Title>
                        <Card.Text className='descriptionCard'>{description}</Card.Text>
                        <Card.Text className='nameCard'>{name} {surname}</Card.Text>
                    </Link>
                </Card>
        </Col>
     );
}
 
export default SentenceCard;
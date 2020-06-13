import React from 'react'
import {Link} from 'react-router-dom'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import './SentenceCard.css'

const SentenceCard = ({name,surname,title, description, _id, sentenceId}) => {

    // handleSubmit = e => {
    //     e.preventDefault();
    //      console.log('hola')
    // };
  


    // this.FavoritesServices = new FavoritesServices()
    // postFavorite = () => {
    //     let newFav= {
    //         sentenceId : sentenceId
    //     }
    //     this.FavoritesServices.postFavorites(newFav)
            
    // }
    
    // handleSubmit(letter) {
    //     this.setState({ justClicked: letter });
    //   }

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
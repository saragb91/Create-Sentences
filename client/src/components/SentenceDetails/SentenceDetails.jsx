import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import ChooseFav from './chooseFav'
import FormServices from '../../services/form.services'
import FavoriteServices from '../../services/favorite.services'
import './SentenceDetails.css'

class SentenceDetails extends Component {

    constructor(props) {
        super(props)
        this.state = {
            sentence:null,     
        }
        this.SentenceServices = new FormServices()
    }
    
    componentDidMount = () => this.getSentenceDetails()

    getSentenceDetails = () => {
       
        this.SentenceServices.getSentenceDetails(this.props.match.params.id)
        .then(sentence => this.setState({sentence: sentence}))
        .catch(err => console.log(err))
    }
    

                    
    render() {
        return (

            < >
             <div className='LinkAllSentences'>
                    <Link to={'/allSentences'}>Vuelva a todas las frases</Link>
                </div>
                <div className='LinkAllSentences'>
                    <Link to={'/getFavorites'}>Vaya a favoritos</Link>
                </div>
                {this.state.sentence ? 
                <div className='containerDetails'>
                <>
                <div className='divDetails'>
                    <h2 className='h2Details'>{this.state.sentence.title}</h2>
                    <h3 className='h3Details'>{this.state.sentence.description}</h3>
                    <p className='pDetails'>{this.state.sentence.name} {this.state.sentence.surname}</p>
                </div>
                <div>
                    <ChooseFav refreshList = {this.getSentenceDetails} sentenceId={this.props.match.params.id}/>
                </div>
                </>
                </div>
                :null}
            </>

        )
    }
}

export default SentenceDetails
import React, { Component } from 'react'
import FormServices from '../../services/form.services'
import Row from 'react-bootstrap/Row'
import SentenceCard from '../SentenceCard/SentenceCard'
import './SentencesList.css'

class SentencesList extends Component {
    constructor(){
        super()
        this.state = {
            savedSentences: [],
        }
        this.services = new FormServices()
    }

    componentDidMount = () => this.getAllSentences()

    getAllSentences = () =>{
        this.services.getAllSentences()
        .then(allSentences => this.setState({
            savedSentences: allSentences}))
        .catch(err => console.log(err))
    }
    render() {
        return ( 
            
                <div className='sentencesListDiv'>
                    <div className='divTitleSentences'>
                        <h3 className='sentencesListH3'>Comentarios</h3>
                    </div>
                    {this.state.savedSentences.length === 0 ? <p>Cargando...</p>:
                    <Row className='rowList'>
                        {this.state.savedSentences.map(elm=> <SentenceCard key={elm._id} {...elm} /> ) }
                    </Row>}
                    
                </div>
            
        );
    }
}
 
export default SentencesList;
import React, {Component} from 'react'
import Button from 'react-bootstrap/Button'

import FavoriteServices from '../../services/favorite.services'


class ChooseFav extends Component{
    constructor(props){
        super(props)
        this.FavoriteServices = new FavoriteServices()
        this.state = {
            favorite : null
        }
    }
    saveSentence = () => {
        console.log(this.props.sentenceId)

        let newFav = {
            ...this.state.favorite,
            sentenceId: this.props.sentenceId
        }
            this.FavoriteServices.saveSentence(newFav.sentenceId)
                .then(() => this.props.refreshList)
                .catch(err => console.log(err))                 
    }

    handleSubmit = e => {
        e.preventDefault();
        this.saveSentence()
    }  
    
                    
    render() {
        return (
        
        <Button onClick={this.handleSubmit} className="buttonDetail">
            Añadir a favoritos
        </Button> 
        )
}
}

export default ChooseFav
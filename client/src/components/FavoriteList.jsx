import React, {Component} from 'react'
import FavoritesServices from '../services/favorite.services'
import FavoriteCard from './FavoriteCard'

class FavoriteList extends Component {

    constructor(props) {
        console.log(props)
        super(props)
        this.state = {
            favorites: [],
        }
        this.services = new FavoritesServices()
    }

    componentDidMount = () => this.getFavorites()

    getFavorites = () => {
        this.services.getFavorites()
            .then(favorites => this.setState({favorites}))
            .catch(err => console.log(err))
    }
    render() {
        console.log(this.state.favorites)
        return(
            this.state.favorites?
            <>
                <h1>favoritos</h1>
                {this.state.favorites.map(elm => <FavoriteCard key={elm._id} {...elm}/> )}
            </>
            :null
        )
    }
}

export default FavoriteList;
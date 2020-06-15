import React, {Component} from 'react'
import FavoritesServices from '../../services/favorite.services'
import FavoriteCard from './FavoriteCard'
import './FavoriteList.css'

class FavoriteList extends Component {
    constructor(props) {
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

        return(
            this.state.favorites?
            <div className='divFavorite'>
                <div className='subDivFavorite'>
                    <h1 className='h1Favorite'>Frases favoritas</h1>
                    {this.state.favorites.map(elm => <FavoriteCard key={elm._id} {...elm}/> )}
                </div>
            </div>
            :null
        )
    }
}

export default FavoriteList;
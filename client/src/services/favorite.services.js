import axios from 'axios'

export default class FavoritesServices {

    constructor(){
        this.service = axios.create ({
            baseURL : `${process.env.REACT_APP_URL}/favorites`,
            withCredentials: true
        })
    }

    getFavorites = () => this.service.get('/getFavorites').then(response => response.data)
    saveSentence = favorite => this.service.post('/newFavorite', favorite).then(response => response.data)
}

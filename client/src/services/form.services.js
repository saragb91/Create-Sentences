import axios from 'axios'

export default class FormServices {

    constructor(){
        this.service = axios.create ({
            baseURL : `${process.env.REACT_APP_URL}/form`,
            withCredentials: true
        })
    }

    getAllSentences = () => this.service.get('/getAllSentences').then(response => response.data)
    getSentenceDetails = id => this.service.get(`/getASentence/${id}`).then(response => response.data)
    newSentence = sentence => this.service.post('/new', sentence).then(response => response.data)
}

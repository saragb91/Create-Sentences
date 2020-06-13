import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import FormServices from '../../services/form.services'
import Error from '../Error'
import './FormSentence.css'
class FormSentence extends Component {

    constructor(){
        super()
        this.state={
            sentence: {
                name:'',
                surname:'',
                title:'',
                description:'',
                error: 'hay un error'
            }
        } 
        this.services = new FormServices()
    }

    handleChange = e => {
        let {name, value} = e.target
        this.setState({
            sentence: {...this.state.sentence, [name]: value}
        })
    }

    postEvent = () => {
        this.services.newSentence(this.state.sentence)
            .then(() => this.setState( this.state.sentence ))
            .catch(err=> console.log({err}))
        }

    handleSubmit = e => {
        e.preventDefault() 
        this.postEvent()
    }

    render(){
        return(
            <>
                <div className='linkList'>
                    <Link to={'/allSentences'}>Todas las frases</Link>
                </div>
            <div className='mainDiv'>

                <h2 className='h2Form'>Escriba su frase</h2>
                
                <Form onSubmit={this.handleSubmit} className='formSentence'>
                <Form.Group>
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text"
                            placeholder="Añade nombre"
                            name="name"
                            value={this.state.sentence.name}
                            onChange={this.handleChange}     
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control type="text"
                            placeholder="Añade apellido"
                            name="surname"
                            value={this.state.sentence.surname}
                            onChange={this.handleChange}     
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Título</Form.Label>
                    <Form.Control type='text'
                            placeholder="Añade título"
                            name="title"
                            value={this.state.sentence.title}
                            onChange={this.handleChange}     
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Descripción</Form.Label>
                    <Form.Control type='text'
                            placeholder="Añade descripción"
                            name="description"
                            value={this.state.sentence.description}
                            onChange={this.handleChange}     
                    />
                </Form.Group>
                {(this.state.sentence.name.trim() === '' || this.state.sentence.title.trim() === '' || this.state.sentence.description.trim() === '' ) ? <Error message='Complete todos los campos'/>
                :
                    <Button type='submit'
                            onClick={this.handleSubmit}>
                                Añadir
                    </Button>
                }
                </Form>
            </div>
            </>
        )
    }
}

export default FormSentence
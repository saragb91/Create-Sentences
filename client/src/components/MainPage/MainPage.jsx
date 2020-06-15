import React from 'react'
import {Link} from 'react-router-dom'
import './MainPage.css'

const MainPage = () => {
    
    return ( 
        <div className='mainDiv'>
            <section className='mainSection'>
                <h1 className='h1Main'>Creador de frases</h1>
                <div className='divLinkMainPage'>
                    <Link to= '/new' className='linkToPages create'>Crear frase</Link>
                    <Link to= '/allSentences' className='linkToPages sentences'>Ver todas las frases</Link>
                </div>
            </section>
        </div>
        
     );
}
 
export default MainPage;
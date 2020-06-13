import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SentenceList from './components/SentencesList/SentencesList'
import SentenceDetails from './components/SentenceDetails/SentenceDetails'
import FormSentence from './components/Form/FormSentence'
import FavoriteList from './components/FavoriteList'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const App = () => {



    return ( 
        <Router>
          <Switch>
            <>
            <Route path= '/allSentences' component={SentenceList}/>
            <Route path='/new' component= {FormSentence} />
            <Route path='/getASentence/:id' component={SentenceDetails} />
            <Route path= '/getFavorites' render={match => <FavoriteList {...match}/>} />
            </>
          </Switch>
        </Router>
    );
  
}
export default App;


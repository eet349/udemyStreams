import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamEdit from './streams/StreamEdit';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import Header from './Header'
import history from '../history';

const App = () => {
    return (
        <div className=" ui container">
            <Router history={history}>
                <div>
                    <Header />
                    <Switch>
                        <Route path="/" exact component={StreamList} />
                        <Route path="/streams/new" component={StreamCreate} />
                        <Route path="/streams/edit/:id" component={StreamEdit} />
                        <Route path="/streams/delete/:id" component={StreamDelete} />
                        <Route path="/streams/:id" component={StreamShow} />
                    </Switch>
                </div>
            </Router>
        </div>
    );
}

export default App;


// CLient ID
// 483959290741-h3cn26tnvitj2cbur3hcr0krj9qust0l.apps.googleusercontent.com
// Client Secret - if were creating a flow for oAuth for servers flow
// wKsV_yJC3Jg3hvSvwLi5LP1H
import React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Root from './Components/Root';

ReactDOM.render(
    <Router>
        <Root/>
    </Router>
    , document.getElementById('root')
);

/*
 <Navigation routes={routes} subRoutes={subRoutes} logo={logo} useRouter />
 <Container>
     <Route exact path="/" component={Demo} />
     <Route path="/car-reviews/*" component={IndividualCarModel}/>
     <Route exact path="/car-reviews" component={CarReviews}/>
 </Container>
 */

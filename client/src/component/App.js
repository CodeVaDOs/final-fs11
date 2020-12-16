import React from 'react';
import {renderRoutes} from 'react-router-config'
import {connect} from 'react-redux'
import {setHello} from '../redux/actions'

const App = ({route, hello, setHello}) => {
    return (
        <div>
            <br/>
            {hello}
            <br/>
            <button type="button" onClick={() => setHello('HELLO')}>Hello redux!</button>
            <br/>
            <div>
                {renderRoutes(route.routes)}
            </div>
        </div>
    );
}
App.defaultProps = {
    route: null
};

const mapStateToProps = state => ({
    hello: state.hello
})
const mapDispatchToProps = {setHello}

export default connect(mapStateToProps, mapDispatchToProps)(App);

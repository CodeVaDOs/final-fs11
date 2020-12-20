import React from 'react';
import { renderRoutes } from 'react-router-config';
import { connect } from 'react-redux';
import { setHello } from '../redux/actions';
import AppBar from '../component/AppBar';

const App = ({ route, hello, setHello }) => {
  return (
    <div>
      <AppBar route={route}/>
      {hello}
      <button type="button" onClick={() => setHello('HELLO')}>Hello redux!</button>
      <div>
        {renderRoutes(route.routes)}
      </div>
    </div>
  );
};

App.defaultProps = {
  route: null
};

const mapStateToProps = state => ({
  hello: state.hello
});
const mapDispatchToProps = { setHello };

export default connect(mapStateToProps, mapDispatchToProps)(App);

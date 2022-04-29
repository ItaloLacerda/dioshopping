import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './components/store';
import MainRoutes from './routes';
import Header from './components/Header';
import { Container } from '@material-ui/core/';


const App = () => {

  return (
    <Provider store={store}>
      <Container maxWidth="xl">
        <Router>
          <Header />
          <MainRoutes />
        </Router>
      </Container>
    </Provider>


  )
}

export default App;

import { BrowserRouter as Router } from 'react-router-dom';
import MainRoutes from './routes';
import Header from './components/Header';
import { Container } from '@material-ui/core/';
const App = () => {

  return (
    <Container>
      <Router>
        <Header />
        <MainRoutes />
      </Router>
    </Container>

  )
}

export default App;

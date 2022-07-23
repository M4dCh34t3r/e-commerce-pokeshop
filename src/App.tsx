import { BrowserRouter as Router} from 'react-router-dom';
import { GlobalStyle } from './theme/globalStyle';
import Navbar from './components/navbar/Navbar';
import Routes from "./routes";

export default function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Navbar/>
      <Routes/>
    </Router>
  );
}

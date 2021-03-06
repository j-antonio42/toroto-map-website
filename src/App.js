import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Row } from 'reactstrap'
import TorotoNav from './Components/navBar';
import Projects from './pages/projects'
import ProjectDetail from './pages/projectDetail';
import Footer from './Components/footer';



function App() {
  return (
    <>
    <Router>
      <TorotoNav/>
     <Row>
       <Switch>
         <Route path="/detail/:id">
            <ProjectDetail/>
         </Route>
         <Route path="/">
            <Projects/>
         </Route>
       </Switch>
     </Row>
     <Footer/>
   </Router>
   </>
  );
}

export default App;

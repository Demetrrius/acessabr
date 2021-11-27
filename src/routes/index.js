import { BrowserRouter as Router, Routes as Switch, Route } from 'react-router-dom';
import Caxambu from '../pages/Caxambu';
import Vicosa from '../pages/Vicosa';

{/*--------- COMPONENTE ROUTES/INDEX ---------*/}

const CONFIG = {
  state: 'MG',
  city: 'Caxambu',
}

const Routes = props =>{
    return(
        <Router>
            <Switch>
                {/*<Route path="/:state/:city" element={<Home />}/>*/}
                <Route path="/mg/caxambu" element={<Caxambu city={props.city} />}/>
                <Route path="/mg/vicosa" element={<Vicosa city={props.city} />}/>


            </Switch>            
        </Router>

    )
}
export default Routes
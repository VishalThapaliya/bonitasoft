import React, { Component } from "react";
import {Route, Switch} from "react-router-dom";

import Starships from "./starships";
//import Dummy from "./dummy";

class App extends Component{
  
  render(){
    return(
      <section>
        <Switch>
          <Route exact path ="/" component={Starships} />         
        </Switch>
      </section>
    );
  }
}


export default App;

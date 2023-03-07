import "./App.css";
import { Landing } from "./Componentes/landing/landing.jsx";
import Home from "./Componentes/home/home.jsx";
import { Route, Switch } from "react-router-dom";
import { Detalle } from "./Componentes/detalle/detalle.jsx";
import { Form } from "./Componentes/form/form";
import Footer from "./Componentes/Footer/footer";
import NoMatch from "./Componentes/404/nomatch";
import { useMemo, useState } from "react";
import FilterContext from "./Componentes/Context/filterContext";

function App() {
  const [filter, setFilter] = useState(false);
  const value = useMemo(() => ({ filter, setFilter }), [filter]);

  return (
    <div className="App">
      <FilterContext.Provider value={value}>
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>

          <Route path="/home">
            <Home />
          </Route>

          <Route exact path="/detalle/:idPais">
            <Detalle />
          </Route>

          <Route exact path="/form">
            <Form />
          </Route>

          <Route path="*">
            <NoMatch />
          </Route>
          
        </Switch>
        <Footer />
      </FilterContext.Provider>
    </div>
  );
}

export default App;

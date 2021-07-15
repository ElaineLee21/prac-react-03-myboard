import { withRouter } from "react-router";
import { Route } from "react-router-dom";

import List from "./List";
import Write from "./Write";
import Detail from "./Detail";
import Edit from "./Edit";

function App() {
  return (
    <>
      <Route path="/" exact component={List} />
      <Route path="/write" exact component={Write} />
      <Route path="/detail/:idx" exact component={Detail} />
      <Route path="/detail/:idx/edit" exact component={Edit} />
    </>
  );
}

export default withRouter(App);

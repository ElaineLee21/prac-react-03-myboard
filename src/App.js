import { withRouter } from "react-router";
import { Route } from "react-router-dom";

import List from "./List";
import Write from "./Write";
import Detail from "./Detail";

function App() {
  return (
    <>
      <Route path="/" exact component={List} />
      <Route path="/write" exact component={Write} />
      <Route path="/detail" exact component={Detail} />
    </>
  );
}

export default withRouter(App);

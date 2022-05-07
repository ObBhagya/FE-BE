
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

import Page1 from "./Component/Page1";
import Page2 from "./Component/Page2";
import Page3 from "./Component/Page3";
import Page4 from "./Component/Page4";
import Page5 from "./Component/Page5";
const routing = (
  <Router>
    <div>
      <div>
        <Link to="/"></Link>
      </div>
      <br />
      <div>
        <Link to="/Education"></Link>
      </div>
      <br />
      <div>
        <Link to="/Projects"></Link>
      </div>
      <br />
      <div>
        <Link to="/Experience"></Link>
      </div>
      <br />
      <div>
        <Link to="/Extra"></Link>
      </div>
      <br />

      <Route exact path="/" component={Page1} />
      <Route path="/Page2" component={Page2 }/>
      <Route path="/Page3" component={Page3} />
      <Route path="/Page4" component={Page4} />
      <Route path="/Page5" component={Page5} />
    </div>
  </Router>
);
export default routing;
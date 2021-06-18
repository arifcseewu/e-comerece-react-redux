import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import "./App.css";
import Homepage from "./Component/HomePage/Homepage";
import Shop from "./Component/Pages/Shop/Shop";
import TopicList from "./Component/Topiclist/TopicList";

// const TopicList = () => {
//   return (
//     <div>
//       <h1></h1>
//     </div>
//   );
// };

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/topics">Topic page</Link>
          </li>
          <li>
            <Link to="/Shop">Shop Page</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/">
            <Homepage />{" "}
          </Route>
          <Route exact path="/topics">
            <TopicList />{" "}
          </Route>
          <Route exact path="/Shop">
            <Shop />{" "}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

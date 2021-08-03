import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./Component/HomePage/Homepage";
import Shop from "./Component/Pages/Shop/Shop";
import TopicList from "./Component/Topiclist/TopicList";
import Header from "../src/Component/Header/Header";

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
      <div className="body">
        <Header />
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route exact path="/topics">
            <TopicList />
          </Route>
          <Route exact path="/Shop">
            <Shop />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

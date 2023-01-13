import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import TopNav from "./components/TopNav";
import Home from "./containers/Home";
import Project from "./containers/Project";
import ProjectDetail from "./containers/ProjectDetail";
import "./index.css";

function App() {
  return (
    <div className="App container" id="dark">
      <Router>
        <div className="flex">
          <Header />
          <div className="main-container">
            <TopNav />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/projects/" element={<Project />} />
              <Route exact path="/projects/:id/" element={<ProjectDetail />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;

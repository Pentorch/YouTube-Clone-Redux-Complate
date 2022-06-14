import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import { Container } from "react-bootstrap";
import HomeScreens from "./Screens/HomeScreens/HomeScreens";
import { useEffect, useState } from "react";
import "./_app.scss";
import { useSelector } from "react-redux";
import { Redirect, Route, Switch, useHistory } from "react-router-dom";
import LoginScreen from "./Screens/LoginScreen/LoginScreen";

const Layout = ({ children }) => {
  const [sidebar, toggleSidebar] = useState(false);

  const handleToggleSidebar = () => toggleSidebar((value) => !value);

  return (
    <div>
      <Header handleToggleSidebar={handleToggleSidebar} />
      <div className="app__container">
        <Sidebar sidebar={sidebar} handleToggleSidebar={handleToggleSidebar} />
        <Container fluid className="app__main">
          {children}
        </Container>
      </div>
    </div>
  );
};

const App = () => {
  const { accessToken, loading } = useSelector((state) => state.auth);

  const history = useHistory();

  useEffect(() => {
    if (!loading && !accessToken) {
      history.push("/auth");
    }
  }, [accessToken, loading, history]);

  return (
    <>
      <Switch>
        <Route path="/" exact>
          <Layout>
            <HomeScreens />
          </Layout>
        </Route>
        <Route path="/auth">
          <LoginScreen />
        </Route>
        <Route path="/search">
          <Layout>
            <h1>Search Results</h1>
          </Layout>
        </Route>
        <Route>
          <Redirect to="/" />
        </Route>
      </Switch>
    </>
  );
};

export default App;

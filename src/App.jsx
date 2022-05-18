import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import { Container } from "react-bootstrap";
import HomeScreens from "./components/Screens/HomeScreens/HomeScreens";
import { useState } from "react";
import "./_app.scss";
const App = () => {
  const [sidebar, toggleSidebar] = useState(false);

  const handleToggleSidebar = () => toggleSidebar((value) => !value);

  return (
    <div>
      <Header handleToggleSidebar={handleToggleSidebar} />
      <div className="app__container border border-info">
        <Sidebar sidebar={sidebar} handleToggleSidebar={handleToggleSidebar} />
        <Container fluid className="app_main border border-warning">
          <HomeScreens />
        </Container>
      </div>
    </div>
  );
};

export default App;

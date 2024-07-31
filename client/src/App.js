import {useState} from "react";
import styled from "styled-components";
import {ThemeProvider} from "styled-components";
import "./index.css";
import {lightTheme, darkTheme} from "./utils/Theme"
import Sidebar from "./components/Sidebar";
import { BrowserRouter } from "react-router-dom";


const Container = styled.div`
  display:flex;
  background:${({theme}) =>theme.bg};
  width:100%;
  height:100vh;
  overflow-x:hidden;
  overflow-y:hidden;
`;

function App() {
  // hooks
  const [darkMode, setDarkMode] = useState(true);
  return (
    <ThemeProvider theme ={darkMode ? darkTheme : lightTheme}>
      <BrowserRouter>
      <Container>
        <Sidebar/>
        VibeCast
      </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

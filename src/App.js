import Navbar from './component/Navbar';
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { Container } from '@mui/material';
import Intro from './component/Intro';
import Bugbounty from './component/Bugbounty';
import Questions from './component/Questions';
import Contributers from './component/Contributers';
import  Report  from './component/Report';
import Footer from './component/Footer';
// import {BrowserRouter as Router,Route,Link, BrowserRouter,Redirect,Switch} from 'react-router-dom'
// import Detailed from './component/Detailed';
// import QandA from './component/QandA';

const Theme = createTheme({
  pallete: {
    primary: {
      main: 'Dark'
    }
  }
})
function App() {
  return (
    
    <ThemeProvider theme={Theme}>
      <Navbar />
      <Container>
        <Intro />
        <Report/>
        <Bugbounty />
        <Questions />
        <Contributers />
      </Container>
      <Footer/>
     {/* <Container>
      <Detailed/>
      <QandA/>
      </Container> */}
    </ThemeProvider>
  );
}

export default App;

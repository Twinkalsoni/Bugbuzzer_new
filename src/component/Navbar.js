import React from 'react'
import AppBar from '@mui/material/AppBar';
import { Typography, Toolbar, Button, Box, Stack } from '@mui/material';
import Logo from '../images/Logo.png';
// import {BrowserRouter as Router,Routes,Route,Link, Switch, Redirect} from "react-router-dom" 
// import Detailed from './Detailed';


const Navbar = () => {
  return (
    <AppBar position="fixed" color='inherit'>
      <Toolbar>
        <Typography flexGrow={1}>
          <Box component="img" src={Logo} maxWidth={180} height={40} />
        </Typography>
        <Stack spacing={2} direction="row" >

          <Button variant="text" size="small" sx={{ color: "inherit", fontWeight: "bold", textTransform: "none", fontSize: "14px" }}>Q&A</Button>
          {/* <Router>
        <Link to="detailed"> */}
          <Button href='/detailed' variant="text" size="small" sx={{ color: "inherit", fontWeight: "bold", textTransform: "none", fontSize: "14px" }}>Bugbounty</Button>
          {/* </Link>
          <Routes>
            <Route exact path= "/detailed"
            element={<Detailed/>}/>
          {/* <Redirect to={'/detailed'}/> */}
          {/* </Routes>
         
          </Router> */}
          <Button variant="text" size="small" sx={{ color: "inherit", fontWeight: "bold", textTransform: "none", fontSize: "14px" }}>Hire Experts</Button>
          <Button variant="outlined" size="medium" sx={{ color: "#D82148", fontWeight: "bold", borderColor: "#D82148", fontSize: "14px", borderradius: 5, textTransform: "none" }}>Connect</Button>

        </Stack>

      </Toolbar>
    </AppBar>
  )
}

export default Navbar
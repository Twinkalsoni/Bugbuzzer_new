import React from 'react'
import { Box } from '@mui/system'
import { Typography} from '@mui/material'
const Footer = () => {
  return (
    //     <Containerfluid>
    // <Box sx={{ width: 1260, height: 37, mt:3,backgroundColor:"#4B4B4B",  border: '1px solid #4B4B4B ' }}>

    //     <Typography variant='subtitle1' align='center' fontWeight="bold" color="#fff" >
    //         Made with Love for Dev Community
    //     </Typography>
    //     </Box> 
    //     </Containerfluid>

    <Box

      sx={{ height: '50px', width: '100%', background: '#4B4B4B', }}>
      <Typography color='white' fontWeight='bold' align='center' mt={8} pt={2}> Made with ❤️ for Dev community
      </Typography>
    </Box>
  )
}

export default Footer

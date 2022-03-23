import React from 'react'
import { Typography, Box, Stack, Grid, Container} from '@mui/material'
import { Circle } from '@mui/icons-material'


const Contributers = () => {
  return (
    <>
   <Container>
    <Grid item xs={12} sm={6}>
      <Typography variant="h4" align='center' mt={10} mb={5} fontWeight="700" fontStyle="bold">
        Top <span style={{ color: "#D82148" }}>Contributors</span>
      </Typography>
      <Stack alignItems="flex-start" direction="row"  justifyContent="space-between" flexWrap="wrap">
        <Box sx={{ width: 250, height: 230,mb:4, border: '1px solid #E5E5E5 ' }}>
          <Circle sx={{ width: "100px", height: "100px", ml:"30%", color: "#C4C4C4", borderRadius: "50%" }} ></Circle>
          <Typography variant='subtitle1' fontWeight="bold" align='center'>Alex Pandit</Typography>
          <Typography variant='subtitle2' align='center'>Buzz : 500</Typography>
          <Typography variant='subtitle2' align="center" mt={1}>Answers: 220  Questions: 5 </Typography>
          <Typography variant='subtitle2' align="center">Skills: Flutter | React Native</Typography>

        </Box>
        <Box sx={{ width: 250, height: 230,mb:4, border: '1px solid #E5E5E5' }}>
          <Circle sx={{ width: "100px", height: "100px",  ml:"30%", color: "#C4C4C4", borderRadius: "50%" }} ></Circle>
          <Typography variant='subtitle1' fontWeight="bold" align='center'>Alex Pandit</Typography>
          <Typography variant='subtitle2' align='center'>Buzz : 500</Typography>
          <Typography variant='subtitle2' align="center" mt={1}>Answers: 220  Questions: 5 </Typography>
          <Typography variant='subtitle2' align="center">Skills: Flutter | React Native</Typography>

        </Box>
        <Box sx={{ width: 250, height: 230,mb:4, border: '1px solid #E5E5E5 ' }}>
          <Circle sx={{ width: "100px", height: "100px",  ml:"30%", color: "#C4C4C4", borderRadius: "50%" }} ></Circle>
          <Typography variant='subtitle1' fontWeight="bold" align='center'>Alex Pandit</Typography>
          <Typography variant='subtitle2' align='center'>Buzz : 500</Typography>
          <Typography variant='subtitle2' align="center" mt={1}>Answers: 220  Questions: 5 </Typography>
          <Typography variant='subtitle2' align="center">Skills: Flutter | React Native</Typography>

        </Box>
    
        <Box sx={{ width: 250, height: 230,mb:4, border: '1px solid #E5E5E5 ' }}>
          <Circle sx={{ width: "100px", height: "100px",  ml:"30%", color: "#C4C4C4", borderRadius: "50%" }} ></Circle>
          <Typography variant='subtitle1' fontWeight="bold" align='center'>Alex Pandit</Typography>
          <Typography variant='subtitle2' align='center'>Buzz : 500</Typography>
          <Typography variant='subtitle2' align="center" mt={1}>Answers: 220  Questions: 5 </Typography>
          <Typography variant='subtitle2' align="center">Skills: Flutter | React Native</Typography>
        </Box>

        
        {/* <Box sx={{ width: 250, height: 230,mb:4, border: '1px solid #E5E5E5 ' }}>
          <Circle sx={{ width: "100px", height: "100px",  ml:"30%", color: "#C4C4C4", borderRadius: "50%" }} ></Circle>
          <Typography variant='subtitle1' fontWeight="bold" align='center'>Alex Pandit</Typography>
          <Typography variant='subtitle2' align='center'>Buzz : 500</Typography>
          <Typography variant='subtitle2' align="center" mt={1}>Answers: 220  Questions: 5 </Typography>
          <Typography variant='subtitle2' align="center">Skills: Flutter | React Native</Typography>
        </Box>

        
        <Box sx={{ width: 250, height: 230,mb:4, border: '1px solid #E5E5E5 ' }}>
          <Circle sx={{ width: "100px", height: "100px",  ml:"30%", color: "#C4C4C4", borderRadius: "50%" }} ></Circle>
          <Typography variant='subtitle1' fontWeight="bold" align='center'>Alex Pandit</Typography>
          <Typography variant='subtitle2' align='center'>Buzz : 500</Typography>
          <Typography variant='subtitle2' align="center" mt={1}>Answers: 220  Questions: 5 </Typography>
          <Typography variant='subtitle2' align="center">Skills: Flutter | React Native</Typography>
        </Box> */}
      </Stack>
      </Grid>
      </Container>
    </>
  )
}

export default Contributers;
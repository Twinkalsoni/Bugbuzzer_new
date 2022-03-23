import React from 'react'
import { Typography, Button, Box, Container } from '@mui/material'
const QandA = () => {
  return (
      <>
      <Container>
    <Typography fontWeight='bold' variant='h4' mt={10} mb={-4} >
    Recently <span style={{color:"#D82148"}}> Asked Questions</span>
   </Typography>
   <Box display="flex" justifyContent="flex-end">
     <Button style={{ color: '#D82148', borderColor: '#D82148', fontSize:"13px"}} size="medium" variant="outlined" sx={{ borderRadius: 2,textTransform:"none", mr: 1 }} >
       Ask questions
     </Button>
     <Button style={{ color: '#ffffff', background: '#D82148',fontSize:"13px", borderColor: '#D82148'}} size="medium" variant="outlined" sx={{ borderRadius: 2 ,textTransform:"none"}}>
       Answers</Button>
   </Box>
   <Typography variant="subtitle2" fontStyle='bold' fontWeight="700"mt={3} mb={3}>
     Facing error in writing smart contracts and integrating in Hardhat
     <Typography variant="subtitle2" mb={1}>
       Upvote DownVote Answers(5) <span style={{ marginLeft: "36%" }}>12 March 2022 by Alex Patel</span>
       {/* <Typography>12 March 2022 by Alex Patel</Typography> */}
     </Typography>
     <Box sx={{ borderBottom: 1, width: 800, color: "#E5E5E5" }}></Box>
   </Typography>
   <Typography variant="subtitle2" fontStyle='bold' fontWeight="700" mb={3}>
     Facing error in writing smart contracts and integrating in Hardhat
     <Typography variant="subtitle2" mb={1}>
       Upvote DownVote Answers(5)<span style={{ marginLeft: "36%" }}>12 March 2022 by Alex Patel</span>
     </Typography>
     <Box sx={{ borderBottom: 1, width: 800, color: "#E5E5E5" }}></Box>

   </Typography>
   <Typography variant="subtitle2" fontStyle='bold' fontWeight="700" mb={3}>
     Facing error in writing smart contracts and integrating in Hardhat
     <Typography variant="subtitle2" mb={1}>
       Upvote DownVote Answers(5)<span style={{ marginLeft: "36%" }}>12 March 2022 by Alex Patel</span>
     </Typography>
     <Box sx={{ borderBottom: 1, width: 800, color: "#E5E5E5" }}></Box>

   </Typography>
   <Typography variant="subtitle2" fontStyle='bold' fontWeight="700" mb={2}>
     Facing error in writing smart contracts and integrating in Hardhat
     <Typography variant="subtitle2" mb={1}>
       Upvote DownVote Answers(5)<span style={{ marginLeft: "36%" }}>12 March 2022 by Alex Patel</span>
     </Typography>
     <Box sx={{ borderBottom: 1, width: 800, color: "#E5E5E5" }}></Box>
   </Typography>
   <Typography variant="subtitle2" fontStyle='bold' fontWeight="700" mb={2}>
     Facing error in writing smart contracts and integrating in Hardhat
     <Typography variant="subtitle2" mb={10}>
       Upvote DownVote Answers(5)<span style={{ marginLeft: "36%" }}>12 March 2022 by Alex Patel</span>
     </Typography>
   </Typography>
   </Container>
   </>
  )
}

export default QandA;
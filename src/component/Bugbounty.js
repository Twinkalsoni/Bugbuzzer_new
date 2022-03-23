import React from 'react'
import { Box, Button, Container, Stack } from '@mui/material'
import Typography from '@mui/material/Typography'

const Bugbounty = () => {
  return (
    <>
      {/* <CssBaseline/> */}
      <Container>       
<Typography fontWeight='bold' variant='h4' mt={8} mb={-4} >
      Join <span style={{color:"#D82148"}}> BugBounty</span> Campaigns
      </Typography>
      <Box display="flex" justifyContent="flex-end">
        <Button style={{ color: '#D82148', borderColor: '#D82148', fontSize:"13px" }} size="medium" variant="outlined" sx={{ borderRadius: 2,textTransform:"none", mr: 1 }} >
        View All
        </Button>
        <Button style={{ color: '#ffffff', background: '#D82148',fontSize:"13px", borderColor: '#D82148'}} size="medium" variant="outlined" sx={{ borderRadius: 2 ,textTransform:"none"}}>
          Create BugBounty</Button>
      </Box>
          <Stack direction="row" justifyContent="space-between" sx={{ flexWrap: "wrap" }}>
            <Box sx={{ width: 500, height: 180, mb: 4,mt:3,   border: '1px solid #D82148 ' }}>
              <Typography variant="subtitle1" fontStyle='bold' fontWeight="700" ml={3} mb={1} mt={1.5}>Security Bounty report Challange by Polygon</Typography>
              <Typography variant="subtitle2" fontStyle='bold' fontWeight="550" ml={3} mt={1}> Prize :<span style={{ color: "#D82148", fontWeight: "10" }}>  1000 USDC and polygon Dev NFT </span></Typography>
              <Typography variant="subtitle2" fontStyle='bold' fontWeight="550" ml={3} mt={1}>Category :<span style={{ fontWeight: "10" }}>  Security | Functional | UI/UX </span></Typography>
              <Typography variant="subtitle2" fontStyle='bold' fontWeight="550" ml={3} mt={1}>Duration : <span style={{ fontWeight: "10" }}> 10 March 2022 to 22 April 2022 </span></Typography>
              <Typography textAlign="center" mt={2} justifyContent="center">
                <Button style={{ color: '#ffffff', background: '#D82148', borderColor: '#D82148', fontSize: '12px' }} size="small" variant="outlined" sx={{ borderRadius: 2, textTransform:"none" }}>Participate</Button>
              </Typography>
            </Box>

            <Box sx={{ width: 500, height: 180, mb: 4,mt:3,  border: '1px solid #D82148 ' }}>
              <Typography variant="subtitle1" fontStyle='bold' fontWeight="700" ml={3} mb={1} mt={1.5}>Security Bounty report Challange by Polygon</Typography>
              <Typography variant="subtitle2" fontStyle='bold' fontWeight="550" ml={3} mt={1}> Prize :<span style={{ color: "#D82148", fontWeight: "10" }}>  1000 USDC and polygon Dev NFT </span></Typography>
              <Typography variant="subtitle2" fontStyle='bold' fontWeight="550" ml={3} mt={1}>Category :<span style={{ fontWeight: "10" }}>  Security | Functional | UI/UX </span></Typography>
              <Typography variant="subtitle2" fontStyle='bold' fontWeight="550" ml={3} mt={1}>Duration : <span style={{ fontWeight: "10" }}> 10 March 2022 to 22 April 2022 </span></Typography>
              <Typography textAlign="center" mt={2} justifyContent="center">
              <Button style={{ color: '#ffffff', background: '#D82148', borderColor: '#D82148', fontSize: '12px' }} size="small" variant="outlined" sx={{ borderRadius: 2 ,textTransform:"none"}}>Participate</Button>
              </Typography>
            </Box>

            <Box sx={{ width: 500, height: 180, mb: 4, border: '1px solid #D82148 ' }}>
              <Typography variant="subtitle1" fontStyle='bold' fontWeight="700" ml={3} mb={1} mt={1.5}>Security Bounty report Challange by Polygon</Typography>
              <Typography variant="subtitle2" fontStyle='bold' fontWeight="550" ml={3} mt={1}> Prize :<span style={{ color: "#D82148", fontWeight: "10" }}>  1000 USDC and polygon Dev NFT </span></Typography>
              <Typography variant="subtitle2" fontStyle='bold' fontWeight="550" ml={3} mt={1}>Category :<span style={{ fontWeight: "10" }}>  Security | Functional | UI/UX </span></Typography>
              <Typography variant="subtitle2" fontStyle='bold' fontWeight="550" ml={3} mt={1}>Duration : <span style={{ fontWeight: "10" }}> 10 March 2022 to 22 April 2022 </span></Typography>
              <Typography textAlign="center" mt={2} justifyContent="center">
              <Button style={{ color: '#ffffff', background: '#D82148', borderColor: '#D82148', fontSize: '12px' }} size="small" variant="outlined" sx={{ borderRadius: 2 ,textTransform:"none"}}>Participate</Button>
              </Typography>
            </Box>

            <Box sx={{ width: 500, height: 180, mb: 4, border: '1px solid #D82148 ' }}>
              <Typography variant="subtitle1" fontStyle='bold' fontWeight="700" ml={3} mb={1} mt={1.5}>Security Bounty report Challange by Polygon</Typography>
              <Typography variant="subtitle2" fontStyle='bold' fontWeight="550" ml={3} mt={1}> Prize :<span style={{ color: "#D82148", fontWeight: "10" }}>  1000 USDC and polygon Dev NFT </span></Typography>
              <Typography variant="subtitle2" fontStyle='bold' fontWeight="550" ml={3} mt={1}>Category :<span style={{ fontWeight: "10" }}>  Security | Functional | UI/UX </span></Typography>
              <Typography variant="subtitle2" fontStyle='bold' fontWeight="550" ml={3} mt={1}>Duration : <span style={{ fontWeight: "10" }}> 10 March 2022 to 22 April 2022 </span></Typography>
              <Typography textAlign="center" mt={2} justifyContent="center">
              <Button style={{ color: '#ffffff', background: '#D82148', borderColor: '#D82148', fontSize: '12px' }} size="small" variant="outlined" sx={{ borderRadius: 2, textTransform:"none" }}>Participate</Button>
              </Typography>
            </Box>
          </Stack>
        {/* </Box> */}
      </Container>
    </>
  )
}
export default Bugbounty
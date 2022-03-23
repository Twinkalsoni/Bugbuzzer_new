import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Container, Stack } from '@mui/material'

const Report = () => {
  return (
    <>
      <Container sx={{ backgroundColor: "primary" }}>
        <Typography variant="h4" mb={1} fontWeight="700" fontStyle="bold">
          Let's Report :
        </Typography>
        <Typography variant="subtitle1" mb={3}  >
          Help projects Succeed by Reporting bugs, share Your Knowledge in Q&A and earn Tokens and NFTs as Rewards.
        </Typography>
        <Stack direction="row" justifyContent="space-between" sx={{ flexWrap: "wrap" }}>
          <Card sx={{ maxWidth: 170, maxHeight: 140, mb: 7, color: "white", backgroundColor: "#D82148" }}>
            <CardContent>
              <Typography variant="subtitle2" fontWeight="bold" justifycontent="center" mt={3.5} align="center">
                Security Vulnerabilities
              </Typography>
            </CardContent>
          </Card>
          <Card variant='outlined' sx={{ maxWidth: 170, height: 140,  mb: 7, color: "#D82148", borderColor: "#D82148" }}>
            <CardContent>
              <Typography variant="subtitle2" fontWeight="bold" justifycontent="center" mt={3.5} textAlign="center">
                Functional Bug for web/Apps
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ maxWidth: 170, maxHeight: 140, mb: 7,color: "white", backgroundColor: "#D82148" }}>
            <CardContent>
              <Typography variant="subtitle2" fontWeight="bold" mt={3.5} justifycontent="center" textAlign="center">
                Hardware/ IOT device Bug      </Typography>
            </CardContent>
          </Card>
          <Card variant='outlined' sx={{ maxWidth: 170, maxHeight: 140, mb: 7, color: "#D82148", borderColor: "#D82148" }}>
            <CardContent>
              <Typography variant="subtitle2" fontWeight="bold" mt={3.5} justifycontent="center" textAlign="center">
                UI/UX Improvement Bug      </Typography>
            </CardContent>
          </Card>
          <Card sx={{ maxWidth: 170, maxHeight: 140, mb: 7, color: "white", backgroundColor: "#D82148" }}>
            <CardContent>
              <Typography variant="subtitle2" fontWeight="bold" mt={3.5} justifycontent="center" textAlign="center">
                Smart Contract Blockchain Bug      </Typography>
            </CardContent>
          </Card>
          <Card variant="outlined" sx={{ maxWidth: 170, maxHeight: 140, mb: 7, color: "#D82148", borderColor: "#D82148" }}>
            <CardContent>
              <Typography variant="subtitle2" fontWeight="bold" mt={3.5} justifycontent="center" textAlign="center">
                Crypto/Flat Scams.Rug Pool     </Typography>
            </CardContent>
          </Card>
        </Stack>
      </Container>
    </>
  )
}

export default Report
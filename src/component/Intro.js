import React from 'react'
import { Typography, Stack, Container } from '@mui/material';
const Intro = () => {
    return (
        <>
            <Container>
                <Stack direction="column" spacing={2} mt={11}>
                    <Typography variant="h4" direction="column" align="center" fontWeight="bold" mb={1} >
                        Community Sourced<span style={{ color: "#D82148" }} > Bug Reporting </span> and
                        <span style={{ color: "#D82148" }} > &Q&A Platform</span>
                    </Typography>
                </Stack>

                <Typography variant='subtitle1' mb={10} >
                    Not only Security bugs are risky and create roadblock for the growth of the product but Functional Bugs to bad UI/UX can lead to Decline in on Bardoing new users and retaining existing users.
                </Typography>
            </Container>
        </>

    )
}

export default Intro
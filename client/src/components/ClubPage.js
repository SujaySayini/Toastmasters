import React from 'react'
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import CreatePageForm from './CreatePageForm';

function ClubPage() {
 
  return (
    <Container maxidth="lg">
        <AppBar position = "static" color = "inherit">
            <Typography variant="h2" align="center">
                Create A Club
            </Typography>
        </AppBar>
        <Grow in>
          <Container>
            <Grid>
              <CreatePageForm/>
            </Grid>
          </Container>
        </Grow>

    </Container>
  )
}

export default ClubPage
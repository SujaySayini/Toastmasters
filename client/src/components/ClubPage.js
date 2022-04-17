import React from 'react'
import { useSelector } from 'react-redux';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import CreatePageForm from './CreatePageForm';
import {useDispatch} from 'react-redux';
import {useEffect, useState} from 'react';
import {getPages} from '../actions/clubpage'

function ClubPage() {
  const dispatch = useDispatch();
  

  useEffect(() => {
    dispatch(getPages());
  }, [dispatch]);

  const pages = useSelector((state) => state.clubpage);
  console.log(pages);

  return (
    <Container maxidth="lg">
        <AppBar position = "static" color = "inherit">
            <Typography variant="h2" align='"center'>
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
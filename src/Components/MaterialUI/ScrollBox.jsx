import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

const UpcomingEventsScroll = (props) => (
  <React.Fragment className="ProfileEvents">
    <CssBaseline />
    <ElevationScroll {...props}>
      <AppBar>
        <Toolbar>
          <Typography variant="h4" component="div">
            Upcoming Events
          </Typography>
        </Toolbar>
      </AppBar>
    </ElevationScroll>
    <Toolbar />
    <Container>
      <Box sx={{ my: 2 }}>
        {props.user.upcomingEvents.map((event) => (
          <div className="Profile-EventListing" key={event.id}>
            <div><h5>{event.date}</h5></div>
            <div><h6>{event.title}</h6></div>
          </div>
        ))}
      </Box>
    </Container>
  </React.Fragment>
);

export default UpcomingEventsScroll;

import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import {
  MemoryRouter,
  Route,
  useRouteMatch,
  Switch,
} from 'react-router-dom';
import Login from '../Login/Login';
import EventCalendar from '../Calendar/EventCalendar';
import Livestream from '../Livestream/Livestream';
import Profile from '../Profile/Profile';
import Home from '../Home/Home';
import Market from '../Market/Market';
import Signup from '../Login/Signup';
import ForgotPassword from '../Login/ForgotPassword';

function MyTabs() {
  const routeMatch = useRouteMatch(['/', '/events', '/market', '/livestream', '/profile', '/login', '/signup', '/resetpassword']);
  const currentTab = routeMatch?.path;

  return (
    <Tabs value={currentTab}>
      <Tab label="Home" value="/" to="/" component={Home} />
      <Tab label="Market" value="/market" to="/market" component={Market} />
      <Tab label="Events" value="/events" to="/events" component={EventCalendar} />
      <Tab label="Livestream" value="/livestream" to="/livestream" component={Livestream} />
      <Tab label="Profile" value="/profile" to="/profile" component={Profile} />
      <Tab label="Login" value="/login" to="/login" component={Login} />
    </Tabs>
  );
}

export default function TabsRouter() {
  return (
    <MemoryRouter initialEntries={['/drafts']} initialIndex={0}>
      <Box sx={{ width: '100%' }}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/market" component={Market} />
          <Route exact path="/events" component={EventCalendar} />
          <Route exact path="/livestream" component={Livestream} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/resetpassword" component={ForgotPassword} />
        </Switch>
        <MyTabs />
      </Box>
    </MemoryRouter>
  );
}

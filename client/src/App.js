import React from 'react';
import JumboText from './components/JumboText/JumboText';
import Body from './components/Body/Body';
import HeaderNavbar from './components/Header/Navbar/HeaderNav';
import { BrowserRouter as Router } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import UserAuth from './components/Authentication/UserAuth';
import Jobs from './components/Body/Jobs';
import Questions from './components/Body/Questions';




function App() {
  return (
    <Router>
      <>
        <Route path="/" exact={true}>
          <HeaderNavbar />
          <JumboText />
          <Body />
        </Route>

        <Route path="/questions">
          <HeaderNavbar />
          <JumboText />
          <Questions />
        </Route>

        <Route path="/jobs">
          <HeaderNavbar />
          <JumboText />
          <Jobs />
        </Route>

        <Route path="/signup">
          <HeaderNavbar />
          <JumboText />
          <UserAuth />
        </Route>
        </>
    </Router>
  )
}

export default App;

import React from 'react'
import { Router, Route, IndexRedirect, Redirect } from 'react-router'

import initialState from '../initial-state'
import history from '../history'

import Nav from './nav'
import Home from './home'
import About from './about'
import Board from './board'
import SignUp from './sign-up'
import LogIn from './log-in'
import UserProfile from './user-profile'
import Settings from './settings'

// I like to put these top level style imports in my top level index.js/main.js
// that boots up the whole app.  By putting all global type imports there it is
// easy to remember where to look when you have to debug this stuff.  Opposed to
// having to remember where you put all the polyfill's global imports, etc.
// There are definitely reasons to not do this (for example when code splitting
// if a huge sections of styles are only going to be required when user goes to
// a specific section of your website then you don't want those style imports at
// the top level, you want them at the top level for the route that requires
// them) But don't worry about that for now...
import '../style/main.scss'

class App extends React.Component {
  render(){
    return (
      <div>
        <Router
          key={Math.random()}
          history={history}
        >
          <Route path='/' component={Nav}>
            <IndexRedirect to='/home'/>
            <Route name='home' path='/home' component={Home}/>
            <Route name='about' path='/about' component={About}/>
            <Route name='board' path='/board' component={Board}/>
            <Route name='signup' path='/signup' component={SignUp}/>
            <Route name='login' path='/login' component={LogIn}/>
            <Route name='profile' path='/user/:id' component={UserProfile}/>
            <Route name='settings' path='/settings/:id' component={Settings}/>
            <Redirect from='*' to='/home'/>
          </Route>
        </Router>
      </div>
    )
  }
}


export default App
// A lot of unnecessary spaces in this file.  Recommend setting up linting
// and/or using an auto format tool like jlongsters newly released 'prettier'
//
// May seem inconsequential but caring about the little things like this usually
// is a pretty red flag to me as to the quality of a developer.  Usually, how
// you do anything is how you do everything.  If someone cares about making
// their code fit a style guide it tells me:
//
// 1.  They probably care about code quality, refactoring, and writing
// appropriate tests.
// 2.  They are probably a good person to work with and care about being a team
// player.
//
// Obviously these are just my opinions and you should form your own but
// ¯\_(ツ)_/¯.  Read The Pragmatic Programmer if you haven't already.

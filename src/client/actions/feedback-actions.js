
// this promise should probably just be imported once at a higher level of your
// file structure.  Usually I put global polyfills in my main.js/index.js that
// sets up the entire redux app and mounts it to the html dom node
require('es6-promise').polyfill();
import 'whatwg-fetch'

// I generally like to use some ES6 features to make my actions a little
// cleaner:

// This:
export const updateContact = input => ({type: 'UPDATE_CONTACT', input});

// Instead of:
// function updateContact(input){
  // return {
    // type: 'UPDATE_CONTACT',
    // input
  // }
// }

// Sometimes I'll take it one step further actually in order to normalize how
// ALL action in my app are created.  This allows you to add conventions later
// on.  (think always showing loading icon when certain named actions are
// dispatched, or attached analytics to differnt actions) and I'll create a
// utility function like this:
function action(type, payload = {}) {
  return {type, ...payload};
}
// And now:
export const updateContact = input => action('UPDATE_CONTACT', input);
// When starting out you can avoid this pattern if you'd like.

// You can hard code action strings like this but one of the most important
// aspects of redux as apps get bigger is the ability to 'react' (no pun
// intended) to actions being dispatched in different reducers.  I.E maybe if an
// 'UPDATE_FEEDBACK' action gets dispatched your notifier reducer should add a
// message saying the update was successful, etc.
//
// If you're not creating constants for these action types and exporting them it
// becomes messy for other reducers to react to dispatches.  
function updateFeedback(input){
  return {
    type: 'UPDATE_FEEDBACK',
    input
  }
}

function feedbackRequest(){
  return {
    type: 'FEEDBACK_REQUEST'
  }
}

function feedbackSuccess(){
  return {
    type: 'FEEDBACK_SUCCESS'
  }
}

function feedbackError(){
  return {
    type: 'FEEDBACK_ERROR'
  }
}

function sendFeedback(feedbackData){
  return function(dispatch){

    dispatch(feedbackRequest());

    let url = `/feedback`;
    // This is definitely stands out as somewhat of a smell to me.  Would make
    // more sense to have all your API calls located in one place.  In that
    // place you can determine the proper url to be hitting based on what
    // environment the app is being deployed.  You can also store all response
    // checking in this one place so you're not constantly checking for 
    // if (!resp.ok), and adding json headers, etc.
    if(process.env.NODE_ENV === 'test'){
      url = 'http://localhost:8080' + url;
    }
    let req = {
      method: 'POST',
      body: JSON.stringify(feedbackData),
      headers: {
        'Content-Type': 'application/json'
      }
    };
    fetch(url, req)
      .then( resp => {
        if(!resp.ok){
          throw new Error('Feedback error');
        }
        return resp.json();
      })
      .then( data => {
        return dispatch(feedbackSuccess());
      })
      .catch( err => {
        return dispatch(feedbackError());
      })

  }
}

export {
  updateContact,
  updateFeedback,
  feedbackRequest,
  feedbackSuccess,
  feedbackError,
  sendFeedback
}

// Last thing I'll say is separating actions, constants, and reducers is
// terrible IMO.  Creates way more file change churn which is just a bad DX.
// I'm a big proponent of the Ducks pattern and have used it successfully in
// some fairly large apps.  It increases overall file length but I rather have a
// 400 line file than constantly switch between 3 files.  Generally your duck's
// shouldn't contain too much business logic so having a long file is not a
// mental burden.  I use VIM so finding what I need and maneuvering large files
// is not a problem.
//
// Look into the "Duck" pattern here:
// https://github.com/erikras/ducks-modular-redux
//
// One of the most important aspects of the 'Duck' pattern is being able to name
// your actions the same but just namespace with 'moduleName/SAME_ACTION_NAME'
//
// So I might have a feedback duck that has actions: REQUEST, SUCCESS, FAIL. And
// then another duck with the same action names but here is where they differ:
//
// feedback/REQUEST
// feedback/SUCCESS
// feedback/FAIL
//
// anotherDuck/REQUEST
// ... you get picture
//
// Now I can create middleware in my redux store that looks for any actions that
// have */REQUEST and do something accordingly.  Conventions make your life
// easier

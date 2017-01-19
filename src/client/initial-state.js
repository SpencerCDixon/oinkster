// You shouldn't need this file.  If you provide a defaultState to each reducer
// when redux boots up it will dispatch an init action and populate the reducer
// with whatever your default state was.  
//
// Maybe you have this in one location so you can see the default states of
// every reducer in one place?  But, generally you're only gonna be worried
// about one reducer at a time, maybe 2 if a different reducer is responding to
// an action dispatched by the first 'module/duck'.
//
// If you just want to be able to see the state of the entire app for debugging
// you should use the redux devtools chrome extension.  It's fantastic and lets
// you pin sections of your redux store so you can just focus on a tiny section
// at time, you can dispatch actions from it from the devtools to see how the UI
// changes, and much much more...
export default {
  auth: {
    authenticated: false,
    showSignUp: true,
    signUpUsernameConflict: false,
    signUpEmailConflict: false,
    userId: ''
  },
  profile: {
    isFetching: false,
    fetchingSuccess: false,
    fetchingError: false,
    summary: {
      user: {
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        bio: '',
        picture: ''
      },
      oinks: []
    }
  },
  settings: {
    isFetching: false,
    fetchingSuccess: false,
    fetchingError: false,
    isSaving: false,
    savingSuccess: false,
    savingError: false,
    isUploadingPicture: false,
    uploadingPictureError: false,
    modified: false,
    pictureModified: false,
    initial: {
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      bio: '',
      picture: ''
    },
    current: {
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      bio: '',
      picture: ''
    }
  },
  board: {
    oinks: [],
    profile: {
      firstName: '',
      lastName: '',
      username: '',
      bio: ''
    },
    isFetching: false,
    fetchingError: false,
    count: 0
  },
  feedback: {
    isFetching: false,
    fetchingSuccess: false,
    fetchingError: false,
    contact: '',
    feedback: ''
  }
}

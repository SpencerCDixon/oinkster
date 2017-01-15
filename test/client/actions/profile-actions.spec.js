
import * as actions from '../../../src/client/actions/profile-actions'
import chai from 'chai'

const should = chai.should();


describe('fetchUserSummaryRequest()', function(){
  it('should return actions of type FETCH_USER_SUMMARY_REQUEST', function(){
    let action = actions.fetchUserSummaryRequest();
    action.type.should.equal('FETCH_USER_SUMMARY_REQUEST');
  })
})

describe('fetchUserSummarySuccess()', function(){
  it('should return actions of type FETCH_USER_SUMMARY_SUCCESS', function(){
    let action = actions.fetchUserSummarySuccess('newFeedback');
    action.type.should.equal('FETCH_USER_SUMMARY_SUCCESS');
  })
  it('should return actions with profile passed to it', function(){
    let profile = {profile:'profile'}
    let action = actions.fetchUserSummarySuccess(profile);
    action.userSummary.should.equal(profile);
  })
})

describe('fetchUserSummaryError()', function(){
  it('should return actions of type FETCH_USER_SUMMARY_ERROR', function(){
    let err = new Error('Some error')
    let action = actions.fetchUserSummaryError(err);
    action.type.should.equal('FETCH_USER_SUMMARY_ERROR');
  })
  it('should return actions with profile passed to it', function(){
    let err = new Error('Some error')
    let action = actions.fetchUserSummaryError(err);
    action.error.should.equal(err);
  })
})

describe('submitOinkRequest()', function(){
  it('should return actions of type SUBMIT_OINK_REQUEST', function(){
    let oink = {oink:'oink'};
    let action = actions.submitOinkRequest(oink);
    action.type.should.equal('SUBMIT_OINK_REQUEST');
  })
  it('should return actions with profile passed to it', function(){
    let oink = {oink:'oink'};
    let action = actions.submitOinkRequest(oink);
    action.oink.should.equal(oink);
  })
})

describe('submitOinkSuccess()', function(){
  it('should return actions of type SUBMIT_OINK_SUCCESS', function(){
    let oink = {oink:'oink'};
    let action = actions.submitOinkSuccess(oink);
    action.type.should.equal('SUBMIT_OINK_SUCCESS');
  })
  it('should return actions with profile passed to it', function(){
    let oink = {oink:'oink'};
    let action = actions.submitOinkSuccess(oink);
    action.oink.should.equal(oink);
  })
})

describe('fetchUserSummaryError()', function(){
  it('should return actions of type SUBMIT_OINK_ERROR', function(){
    let err = new Error('Some error')
    let action = actions.submitOinkError(err);
    action.type.should.equal('SUBMIT_OINK_ERROR');
  })
  it('should return actions with profile passed to it', function(){
    let err = new Error('Some error')
    let action = actions.submitOinkError(err);
    action.error.should.equal(err);
  })
})

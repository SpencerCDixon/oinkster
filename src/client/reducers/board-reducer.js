
import initialState from '../initial-state'


let boardReducer = function(board = initialState.board, action){

  switch(action.type){

    case 'SUBMIT_OINK_REQUEST':
      return { ...board,
        isFetching: true
      }

    case 'SUBMIT_OINK_SUCCESS':
      return { ...board,
        isFetching: false,
        oinks: action.oinks
      };

    case 'SUBMIT_OINK_ERROR':
      return { ...board,
        isFetching: false,
        fetchingError: true
      }

    case 'FETCH_OINKS_REQUEST':
      return { ...board,
        isFetching: true
      }

    case 'FETCH_OINKS_SUCCESS':
      return { ...board,
        isFetching: false,
        oinks: action.oinks
      };

    case 'FETCH_OINKS_ERROR':
      return { ...board,
        isFetching: false,
        error: action.error
      }

    default:
      return board;
  }

}

export default boardReducer

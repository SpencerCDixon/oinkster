
import React from 'react'

import AddOinkInput from './add-oink-input'
import Oinks from './oinks'

class Board extends React.Component {

  render(){

    return (
      <div>
        < AddOinkInput
          actions={this.props.actions}
        />
        < Oinks
          board={this.props.board}
        />
      </div>
    )

  }

}

export default Board
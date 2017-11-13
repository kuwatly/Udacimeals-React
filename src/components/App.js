import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addRecipe, removeFromCalendar } from "../actions/index";

class App extends Component {
  render() {
    return (
      <div>
        Hello World
      </div>
    )
  }
}

function mapStateToProps (calendar) {
  const dayOrder = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
  return {
    calendar: dayOrder.map((day) => ({
      day,
      meals: Object.assign({}, calendar[day])
    }))
  }
}

function mapDispatchToProps (dispatch) {
  return {
    selectRecipe: (data) => dispatch(addRecipe(data)),
    remove: (data) => dispatch(removeFromCalendar(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
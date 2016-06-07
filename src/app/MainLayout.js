import React from 'react'
import Nav from './Nav.js'

var MainLayout = React.createClass({
  propTypes: {
    children: React.PropTypes.object // IndexRoute in index.js
  },

  render: function () {
    return (
      <div className='mainLayout'>
        <Nav />
        {this.props.children || 'Welcome to Vocabubands!'}
      </div>
    )
  }
})

export default MainLayout

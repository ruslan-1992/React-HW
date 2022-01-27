import React, { Component } from 'react';

class MouseCoordinates extends Component {
  constructor(props) {
    super(props);
    
      this.state = {
        mouseX: 0,
        mouseY: 0,
    };

  }

  handleMouseMove = (e) => {
    this.setState({
      mouseX: e.clientX,
      mouseY: e.clientY,
    });
  };

  render() {
    return <div className='mouse'
      onMouseMove={this.handleMouseMove}> 
        <h3>
          X: {this.state.mouseX}  
          Y: {this.state.mouseY}          
        </h3>
    </div>
  }
}

export default MouseCoordinates;

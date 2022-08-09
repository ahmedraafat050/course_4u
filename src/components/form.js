import React, { Component } from 'react'

export default class Form extends Component {
  render() {
    return (
      <form className='row mt-1 mb-3' onSubmit={this.props.addCourse}>
        <input value={this.props.current} type="text" placeholder='Enter Course Name' className='col-8 p-2' onChange={this.props.upDate}/>
        <input type="submit" value='Add' className='col-4 bg-success text-white border-0'/>
      </form>
    )
  }
}



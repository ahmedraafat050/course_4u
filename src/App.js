import React, { Component } from "react";
import Form from "./components/form";
import CoursesList from "./components/coursesList";

export default class App extends Component {
  state = {
    courses: [
      {name: 'HTML'},
      {name: 'CSS'},
      {name: 'JavaScript'},
      {name: 'Bootstrap'},
      {name: 'React.js'},
      {name: 'Sass'}
    ],
    current: ''
  }

  upDate =(e) => {
    this.setState({current: e.target.value})
  }

  addCourse = (e) => {
    e.preventDefault()
    let {current, courses} = this.state
    if(current !== '') {
      courses.push({name: current})
    }
    this.setState({courses,current: ''})
    
  }

  deleteCourse = (index) => {
    let {courses} = this.state
    courses.splice(index, 1)
    this.setState({courses})
  }

  editCourse = (index, newValue) => {
    let {courses} = this.state
    let course = courses[index]
    course['name'] = newValue
    this.setState({courses})
  }
  render() {
    let length = this.state.courses.length;
    const {courses} = this.state;
    let coursesList = length ? (
      courses.map((course, index) => {
        return (
          <CoursesList detalis = {course} key={index} index={index} deleteCourse= {this.deleteCourse} editCourse={this.editCourse}/>
          
        )
      })
    ) : (
      <div><p className="text-center">There is no course here</p></div>
    )
    return (
      <>
        <div className="d-flex justify-content-center">
          <div className="p-5 m-5 bg-white  rounded shadow-lg w-50">
            <div className="row">
            <h1 className="col-12 py-3 text-center mb-3 rounded text-white">
              My Courses
            </h1>
            </div>
            <Form upDate = {this.upDate} addCourse = {this.addCourse} current= {this.state.current}/>
            <ul className="list-unstyled">{coursesList}</ul>
          </div>
        </div>
      </>
    );
  }
}

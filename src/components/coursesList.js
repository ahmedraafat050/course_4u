import React, { Component } from "react";

export default class CoursesList extends Component {
  state = {
    isEdit: true,
  };

  toggle = () => {
    let { isEdit } = this.state;
    this.setState({
      isEdit: !isEdit,
    });
  };

  upDateCourse = (e) => {
    e.preventDefault()
    this.props.editCourse(this.props.index, this.input.value)
    this.toggle()
  }

  render() {
    let { isEdit } = this.state;
    return (
      <>
        {isEdit ? (
          <li>
            <div className="row my-2">
              <p className="col-8 bg-light p-2 m-0">
                {this.props.detalis.name}
              </p>
              <button
                onClick={() => {
                  this.toggle();
                }}
                className="col-2 text-white bg-primary border-0"
              >
                Edit
              </button>
              <button
                onClick={() => {
                  this.props.deleteCourse(this.props.index);
                }}
                className="col-2 text-white bg-danger border-0"
              >
                Delete
              </button>
            </div>
          </li>
        ) : (
          <li>
            <form className="row mt-1 mb-3" onSubmit={this.upDateCourse}>
              <input ref={(v) => {this.input = v}} type="text" className="col-8 p-2"defaultValue={this.props.detalis.name} />
              <input
                type="submit"
                value="Up Date"
                className="col-4 bg-success text-white border-0"
              />
            </form>
          </li>
        )}
      </>
    );
  }
}

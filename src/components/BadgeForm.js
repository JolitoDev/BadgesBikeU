import React from "react";

class BadgeForm extends React.Component {
  //state = {};
  handleChange = (e) => {
    /*     console.log({
      name: e.target.name,
      value: e.target.value,
    }); */
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleClick = (e) => {
    console.log("button was click");
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log("was submit");
  };

  render() {
    return (
      <div>
        <h1>New College</h1>

        <form onSubmit={this.handleSubmit}>
          <div className="form-goup">
            <label>First Name</label>
            <input
              onChange={this.props.onChange}
              type="text"
              name="firstName"
              className="form-control"
              value={this.props.formValues.firstName}
            />
          </div>
          <div className="form-goup">
            <label>Last Name</label>
            <input
              onChange={this.props.onChange}
              type="text"
              name="lastName"
              className="form-control"
              value={this.props.formValues.lastName}
            />
          </div>
          <div className="form-goup">
            <label>E mail</label>
            <input
              onChange={this.props.onChange}
              type="email"
              name="email"
              className="form-control"
              value={this.props.formValues.email}
            />
          </div>
          <div className="form-goup">
            <label>Job Title</label>
            <input
              onChange={this.props.onChange}
              type="text"
              name="jobTitle"
              className="form-control"
              value={this.props.formValues.jobTitle}
            />
          </div>
          <div className="form-goup">
            <label>Twitter</label>
            <input
              onChange={this.props.onChange}
              type="text"
              name="twitter"
              className="form-control"
              value={this.props.formValues.twitter}
            />
          </div>
          <button onClick={this.handleClick} className="btn btn-primary">
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default BadgeForm;

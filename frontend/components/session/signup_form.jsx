import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname:'',
      password: '',
      email:'',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  componentWillUnmount(){
    this.props.clearErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  renderErrors() {
    return(
      <ul className='error'>
        {this.props.errors.map((error,i) => (
          <li key = {`errors-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }


  render() {

    return (
      <div>
        <form className='session-form' onSubmit={this.handleSubmit} >

          <div>

          <div onClick={this.props.closeModal} className="close-x">X</div>

          {this.renderErrors()}
          <br/>
          <input
            placeholder='Email Address'
            type='text'
            value={this.state.email}
            onChange={this.update('email')}/>

            <br/>
            <input
              placeholder='Firstname'
              type="text"
              value={this.state.firstname}
              onChange={this.update('firstname')}
            />
            <br/>
            <input
              placeholder='Lastname'
              type="text"
              value={this.state.lastname}
              onChange={this.update('lastname')}
            />
            <br/>

            <input
              placeholder='Password'
              type="password"
              value={this.state.password}
              onChange={this.update('password')}
              className="login-input"
            />
            <br/>
            <input type="submit" value={this.props.formType} />
          </div>
        </form>
      </div>
    );
  }
}
export default withRouter(SessionForm);

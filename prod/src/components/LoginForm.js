import React from 'react'
import auth from '../firebase'
import './InputForm.css';
import PictureList from './PictureList'
import InputForm from './InputForm';

import 'bootstrap/dist/css/bootstrap.min.css';


class LoginForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
      message: '',
      currentUser: null
    }
  }

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      if (user) {
        this.setState({
          currentUser: user
        })
      }
    })
  }

  onChange = e => {
    const { name, value } = e.target

    this.setState({
      [name]: value
    })
  }

  onSubmit = e => {
    e.preventDefault()

    const { email, password } = this.state
    auth
      .signInWithEmailAndPassword(email, password)
      .then(response => {
        this.setState({
          currentUser: response.user
        })
      })
      .catch(error => {
        this.setState({
          message: error.message
        })
      })
  }

  logout = e => {
    e.preventDefault()
    auth.signOut().then(response => {
      this.setState({
        currentUser: null
      })
    })
  }

  render() {
    const { message, currentUser } = this.state

    if (currentUser) {
      return (
        <div className="logout">
          <br />
          <br />
          <p className="p1">Hello {currentUser.email}</p>
          <button className="button1" onClick={this.logout}>Logout</button>
          <PictureList /><br />
          <InputForm />
        </div>
      )
    }

    return (

      <div className="logincss">
        <br />
        <br />


        <section className="section container">
          <div className="columns is-centered">
            <div className="column is-half">
              <form onSubmit={this.onSubmit}>
                <div className="field">
                  <label className="Email">Login</label>
                  <div className="control">
                    <input
                      placeholder="Email"
                      className="input"
                      type="email"
                      name="email"
                      onChange={this.onChange}
                    />
                  </div>
                </div>

                <div className="field">
                  <div className="control">
                    <input
                      placeholder="Password"
                      className="input"
                      type="password"
                      name="password"
                      onChange={this.onChange}
                    />
                  </div>
                </div>


                {message ? <p className="help is-danger">{message}</p> : null}


                <br /><button className="button">Login</button>

              </form>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default LoginForm
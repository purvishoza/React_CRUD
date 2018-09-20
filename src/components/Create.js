import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import { Input, Icon } from 'antd';

class Create extends Component {

  constructor() {
    super();
    this.state = {
      id:'',
      name: '',
      address: '',
      city: '',
      phone: '',
      email: ''
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { id,name, address, city, phone, email } = this.state;

    axios.post('http://10.227.214.142:8080/api/v1/contacts/', { id,name, address, city, phone, email })
      .then((result) => {
        this.props.history.push("/")
      });
  }

  render() {
    const { id,name, address, city, phone, email } = this.state;
    return (
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">
              ADD CONTACT
            </h3>
          </div>
          <div className="panel-body">
            <h4><Link to="/"><span className="glyphicon glyphicon-th-list" aria-hidden="true"></span> Contacts List</Link></h4>
            <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label htmlFor="isbn">Id:</label>
              <input type="text" className="form-control" name="id" value={id} onChange={this.onChange} placeholder="Id" />
            </div>
              <div className="form-group">
                <label htmlFor="isbn">Name:</label>
                <input type="text" className="form-control" name="name" value={name} onChange={this.onChange} placeholder="Name" />
              </div>
              <div className="form-group">
                <label htmlFor="title">Address:</label>
                <input type="text" className="form-control" name="address" value={address} onChange={this.onChange} placeholder="Address" />
              </div>
              <div className="form-group">
                <label htmlFor="author">City:</label>
                <input type="text" className="form-control" name="city" value={city} onChange={this.onChange} placeholder="City" />
              </div>
              <div className="form-group">
                <label htmlFor="published_date">Phone:</label>
                <input type="text" className="form-control" name="phone" value={phone} onChange={this.onChange} placeholder="Phone Number" />
              </div>
              <div className="form-group">
                <label htmlFor="publisher">Email:</label>
                <input type="email" className="form-control" name="email" value={email} onChange={this.onChange} placeholder="Email Address" />
              </div>
              <Button type="primary" className="btn btn-default">Submit</Button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Create;

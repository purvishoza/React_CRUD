import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Show extends Component {

  constructor(props) {
    super(props);
    this.state = {
      contact: {}
    };
  }

  componentDidMount() {
    axios.get('http://10.227.214.142:8080/api/v1/contacts/'+this.props.match.params.id)
      .then(res => {

        this.setState({ contact: res.data });
        console.log(this.state.contact);
      });
  }

  delete(id){
    console.log(id);
    axios.delete('http://10.227.214.142:8080/api/v1/contacts/'+id)
      .then((result) => {
        this.props.history.push("/")
      });
  }

  render() {
    return (
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">
              Contact Details
            </h3>
          </div>
          <div className="panel-body">
            <h4><Link to="/"><span className="glyphicon glyphicon-th-list" aria-hidden="true"></span> Contacts List</Link></h4>
            <dl>
            <dt>Id:</dt>
            <dd>{this.state.contact.id}</dd>
              <dt>Name:</dt>
              <dd>{this.state.contact.name}</dd>
              <dt>Address:</dt>
              <dd>{this.state.contact.address}</dd>
              <dt>City:</dt>
              <dd>{this.state.contact.city}</dd>
              <dt>Phone Number:</dt>
              <dd>{this.state.contact.phone}</dd>
              <dt>Email Address:</dt>
              <dd>{this.state.contact.email}</dd>
            </dl>
            <Link to={`/edit/${this.state.contact.id}`} className="btn btn-success">Edit</Link>&nbsp;
            <button onClick={this.delete.bind(this, this.state.contact.id)} className="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Show;

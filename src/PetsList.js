import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class PetsList extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.pets.map((pet, i) => {
            return (
              <li key={i}>
                <Link to={`/pets/${pet.name}`}>{pet.name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    pets: state.pets,
  };
};

export default connect(mapStateToProps)(PetsList);

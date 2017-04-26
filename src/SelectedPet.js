import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectPet } from './actions';

class SelectedPet extends Component {
  componentDidMount() {
    const name = this.props.match.params.name;
    const pet = this.props.pets.filter(pet => pet.name === name)[0];
    if (pet === undefined) return;
    this.props.selectPet(pet);
  }

  render() {
    if (this.props.selectedPet === undefined) return (<div>404</div>);
    return (
      <div>
        <h1>{this.props.selectedPet.name}</h1>
        <h2>{this.props.selectedPet.species}</h2>
        <h3>{this.props.selectedPet.age}</h3>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    pets: state.pets,
    selectedPet: state.selectedPet,
  };
};

export default connect(mapStateToProps, { selectPet })(SelectedPet);

import React, { Component } from 'react';

export default class Recipes extends Component {

  render() {

    const {category} = this.props.recipes;

    return (
      <li>
        <h2>{recipes} by {category}</h2>
        {/* <a href={url} target="_blank">view recipes</a> */}
        {/* <p>{description}</p> */}
        <img src={urlToImage}/>
      </li>
    );
  }
}
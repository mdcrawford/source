import React, { Component } from "react";

// PROPS: pictures (array of objects w url and title fields)

export default class Pictures extends Component {
  render() {
    let picArray = this.props.pictures.map(picObj => {
      return (
        <div>
          <h1> {picObj.title} </h1>
          <img src={picObj.url} />
        </div>
      );
    });

    return <div>{picArray}</div>;
  }
}

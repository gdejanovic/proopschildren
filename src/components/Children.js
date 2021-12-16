import { Component } from "react";
import React from "react";
export default class Children extends React.Component {
    render(props){
        return (
            <div>A zadnji je: {this.props.children}</div>
  

        )
    }


}
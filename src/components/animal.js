import React, {Component} from 'react'

export default class Animal extends Component{
  
  render(){
    let {animal} = this.props
    return (
      <div style ={{border: '1px solid #eee', margin: 10}}>
        <img src={animal.imageUrl}alt="img" width="200"/>
        <p>Species: {animal.species}</p>
        <p>Quantity: {animal.quantity}</p>
        
      </div>
    )

  }

}
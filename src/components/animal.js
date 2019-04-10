import React, {Component} from 'react'
import EditAnimalForm from './editAnimalForm'

export default class Animal extends Component{
  constructor(){
    super()
    this.state = {
      edit: false,
    }
  }
  
  toggleEdit=()=>{
    this.setState({
      edit: !this.state.edit //opposite of what it currently is
    })
  }
  render(){
    let {animal} = this.props
    return (
      this.state.edit ? <EditAnimalForm animal = {animal} updateAnimal={this.props.updateAnimal}/> :
      <div style ={{border: '1px solid #eee', margin: 10}}>
        <img src={animal.imageUrl}alt="img" width="200"/>
        <p>Species: {animal.species}</p>
        <p>Quantity: {animal.quantity}</p>
        <button onClick = {this.toggleEdit}>edit</button>
      </div>
    )

  }

}
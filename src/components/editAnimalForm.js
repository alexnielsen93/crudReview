import React, {Component} from 'react'

export default class EditAnimalForm extends Component{
  constructor(props){
    super()
    this.state = {
      id: props.animal.id,
      species: props.animal.species,
      imageUrl: props.animal.imageUrl,
      quantity: props.animal.quantity,
    }
  }
  handleChange= (event)=>{
    let {value, name} = event.target
    this.setState({
      [name]: value
    })
  }
  handleClick = ()=>{
    let animal = this.state
    this.props.updateAnimal(animal)
    // this.props.handleCreate(newAnimal)
  }

render(){
  return(
    <div style = {{border: '1px solid black', margin: 20}}>

    <input 
    onChange = {this.handleChange}
    name = "species" 
    type = 'text' 
    value = {this.state.species}
    placeholder = 'species'
    />

    <input 
    onChange = {this.handleChange}
    name = "imgUrl" 
    type = 'text' 
    value = {this.state.imageUrl}
    placeholder = 'image url'
    />

    <input 
    onChange = {this.handleChange}
    name = 'quantity'
    type = 'number' 
    value = {this.state.quantity}
    placeholder = 'quantity'
    />
    <button onClick = {this.handleClick}>Update Animal</button>
    </div>

  )
}
}
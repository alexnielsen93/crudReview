import React, {Component} from 'react'


class CreateAnimalForm extends Component{
constructor(){
  super()

  this.state={
    species: '',
    quantity: 0,
    imgUrl: '',
    }
  }

  handleChange= (event)=>{
    let {value, name} = event.target
    this.setState({
      [name]: value
    })
  }
  handleClick = (event)=>{
    let newAnimal = this.state
    this.props.createAnimal(newAnimal)
    // this.props.handleCreate(newAnimal)
  }

render(){
  return(
    <div style = {{border: '1px solid black', margin: 20}}>

    <input 
    onChange = {this.handleChange}
    name = "species" 
    type = 'text' 
    placeholder = 'species'
    />

    <input 
    onChange = {this.handleChange}
    name = "imgUrl" 
    type = 'text' 
    placeholder = 'image url'
    />

    <input 
    onChange = {this.handleChange}
    name = 'quantity'
    type = 'number' 
    placeholder = 'quantity'
    />
    <button onClick = {this.handleClick}>Get Animals</button>
    </div>

  )
}

}

export default CreateAnimalForm
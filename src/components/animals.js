import React, {Component} from 'react'
import axios from 'axios'
import Animal from './animal'

export default class Animals extends Component{
  constructor(){
    super()

    this.state = {
      animals : []
    }
  }
  componentDidMount(){
    axios.get('/api/animals').then(
      (res)=>{
        this.setState({
          animals : res.data
        })
      }
    ).catch((err)=>{
      console.log('error!', err)
    }
    )
  }

  render(){
    return(
      this.state.animals.map((animal)=>{
        return <Animal key = {animal.id} animal={animal}/>
      })
    )

  }
}
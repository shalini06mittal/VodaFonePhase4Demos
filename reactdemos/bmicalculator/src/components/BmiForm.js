import React, { Component } from 'react'
import './BmiForm.css';
import BmiInfo from './BmiInfo';
export default class BmiForm extends Component {
    state={
        weight:'70',
        height:'150',
        show:false,
        bmi:'',
        errors:{
            weight:'',
            height:''
        }
    }
    handleChange = (e)=>{
        const {name, value} = e.target;
        let errors = this.state.errors;
        switch(name){
            case 'weight':
                errors.weight = value <= 0 ? 'Weight cannot be 0 or negative' : ''
                break;
            case 'height':
                errors.height = value <= 0 ? 'Height cannot be 0 or negative' : ''
                break;
        }
        this.setState({errors, [name]:value});
    }
    calculateBmi=(e)=>
    {
        e.preventDefault();
        let errors = this.state.errors;
        if(errors.weight.length > 0 || errors.height.length >0)
        {
            alert('Please provide valid input')
        }
        else{
            let bmi = (this.state.weight) / (this.state.height * this.state.height);
            this.setState({
                bmi, show:true
            })
        }
    }
  render() {
    return (
      <div>
          <div className="data">
                    <label>Enter Weight(kg) : &nbsp;</label>
                    <input type="text" name='weight'
                     value={this.state.weight}
                    onChange={this.handleChange}/>
                    
                    <label>Enter Height(metres) :&nbsp; </label>
                    <input type="text" name='height'
                    value={this.state.height}
                    onChange={this.handleChange}/>
                </div>
                <div className='errors'>
                    <div>
                        {
                        this.state.errors.weight.length > 0 && 
                            <span className='error'>{this.state.errors.weight}</span>
                        }
                        </div>
                        <div>
                        {
                        this.state.errors.height.length > 0 && 
                            <span className='error'>{this.state.errors.height}</span>
                        }
                        </div>
                    </div>
                <div className="btncal">
                        <button onClick={this.calculateBmi}>Calculate BMI</button>
                </div>
                <div>{
                    this.state.show && <BmiInfo data={this.state}/>
                }</div>
      </div>
    )
  } 
}

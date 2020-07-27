import React from "react";
import axios from "axios";
const URL = "http://anapioficeandfire.com/api/";

let stark = 'houses/362';

class Question6 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            info:[]
        }
    }

    async getAnswer(){
        try{
            const firstFounder = await axios.get(URL + stark)
            // console.log(firstFounder.data.founder)
            const secondFounder = await axios.get(firstFounder.data.founder)
            // console.log(secondFounder)
            // console.log(secondFounder.data.name)
            this.setState({
                info: secondFounder.data.name
            })
        }
        catch{

        }
    }
    
    componentDidMount(){
        this.getAnswer();
    }
    
    render(){
        return(
            <div>
                <h3>Question 6: What's the name of the founder of House Stark?</h3>
                <p> &emsp; Answer: {this.state.info}</p>
            </div>
        )
    }
}

export default Question6;
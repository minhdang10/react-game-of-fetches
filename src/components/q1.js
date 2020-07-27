import React from "react";
import axios from "axios";
const URL = "http://anapioficeandfire.com/api/";

let margaery = 'characters/16';

class Question1 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            info:[]
        }
    }

    async getAnswer(){
        try{
            const response = await axios.get(URL + margaery)
            this.setState({
                info: response.data
            });
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
                <h3>Question 1: Where was Margaery Tyrell born?</h3>
                <p> &emsp; Answer: {this.state.info.born}</p>
            </div>
        )
    }
}

export default Question1;
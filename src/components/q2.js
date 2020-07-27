import React from "react";
import axios from "axios";
const URL = "http://anapioficeandfire.com/api/";

let targaryen = 'houses/378';

class Question2 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            info:[]
        }
    }

    async getAnswer(){
        try{
            const response = await axios.get(URL + targaryen)
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
                <h3>Question 2: What region is House Targaryen in?</h3>
                <p> &emsp; Answer: {this.state.info.region}</p>
            </div>
        )
    }
}

export default Question2;
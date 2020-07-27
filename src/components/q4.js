import React from "react";
import axios from "axios";
const URL = "http://anapioficeandfire.com/api/";

let baratheon = 'houses/17';

class Question4 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            info:[]
        }
    }

    async getAnswer(){
        try{
            const response = await axios.get(URL + baratheon)
            // console.log(response.data)
            this.setState({
                info: response.data.seats[1]
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
                <h3>Question 4: What is the second seat of House Baratheon?</h3>
                <p> &emsp; Answer: {this.state.info}</p>
            </div>
        )
    }
}

export default Question4;
import React from "react";
class Clock extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            date : new Date(),
            name : 'Kushan'
        }
        
        // this.timer = setInterval(() => { not suitable for this place 
        //     this.tick()
        // },1000)
    }

    tick(){
        console.log('time updating......');
        this.setState({
            date: new Date()
        })
    }

    componentDidMount(){
        console.log('Mounted....');
        this.timer = setInterval(() => {
            this.tick()
        },1000);
    }
    componentWillUnmount(){
        console.log('Will unmount...');
        clearInterval(this.timer);
    }

    render(){
        return <div>
            <div>Time is : {this.state.date.toISOString()}</div>
            <div>Name is : {this.state.name}</div>
        </div>
    }
}
export default Clock;
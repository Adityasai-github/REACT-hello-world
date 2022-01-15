import React, {Component} from 'react'

 class ParentComp extends Component{
     constructor(props){
         super(props)
         this.state = {
             name: 'Adityasai'
         }
     }

     componentDidMount(){
         setInterval(() =>{
             this.setState({
                 name: 'Adityasai'
             })
         },2000)
     }
    render(){
        return (
            <div>
                Parent Component
                <RegComp name={this.state.name} />
                <PureComp name={this.state.name} />
               
            </div>
        )
    }
}
export default ParentComp
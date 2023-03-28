import React, {Component, useState} from "react";

// export default class PracticalEntryForm extends Component { 
//     constructor(props) { 
//         super(props)
        
//         this.state = { 
//             companyName: "",
//             positionTitle: "",
//             mainTasks: "",
//             dateFrom: "",
//             dateTo: ""
//         }

//         this.handleCompanyNameChange = this.handleCompanyNameChange.bind(this)
//         this.handlePositionTitleChange = this.handlePositionTitleChange.bind(this)
//         this.handleMainTasksChange = this.handleMainTasksChange.bind(this)
//         this.handleDateFromChange = this.handleDateFromChange.bind(this)
//         this.handleDateToChange = this.handleDateToChange.bind(this)

//         this.appendMethod = this.props.appendMethod
//     }

//     handleCompanyNameChange(evt){
//             this.setState({
//                 companyName: evt.target.value
//             })
//         }
//     handlePositionTitleChange(evt) {
//             this.setState({
//                 positionTitle: evt.target.value
//             })
//     }

//     handleMainTasksChange(evt){
//         this.setState({
//             mainTasks: evt.target.value
//         })
//     }
    
//     handleDateFromChange(evt){
//         this.setState({
//                 dateFrom: evt.target.value
//             })
//         }

//     handleDateToChange(evt){
//         this.setState({
//                 dateTo: evt.target.value
//             })
//         }

//     render() { 
//         return ( 
//             <form>
//                 <legend>Practical Entry Form</legend>
//                 <input id='companyName' placeholder="Company Name" onChange={this.handleCompanyNameChange}></input> 
//                 <input id='positionTitle' placeholder="Position Title" onChange={this.handlePositionTitleChange}></input> 
//                 <input id='mainTasks' placeholder="Main Tasks" onChange={this.handleMainTasksChange}></input> 
//                 <input id='dateFrom' placeholder="Date From" type='date' onChange={this.handleDateFromChange}></input> 
//                 <input id='dateTo' placeholder="Date To" type='date' onChange={this.handleDateToChange}></input> 
//                 <button type="submit" onClick = {(evt) => {
//                     evt.preventDefault()
//                     this.props.appendMethod(this.state.companyName,this.state.positionTitle,this.state.mainTasks,this.state.dateFrom,this.state.dateTo)
//                 }}>Submit</button>
//             </form>
//         )
//     }
    
// }

export default function PracticalEntryForm ({setMethod}) { 
    const [companyName, setCompanyName] = useState('')
    const [positionTitle, setPositionTitle] = useState('')
    const [mainTasks, setMainTasks] = useState('')
    const [dateFrom, setDateFrom] = useState('')
    const [dateTo, setDateTo] = useState('')
    const [submitted, setSubmitted] = useState(false)

    return (
        <form>
            <legend>Practical Entry Form</legend>
            <input id="companyName" placeholder="Company Name" value={companyName} onChange={({target: {value}}) => setCompanyName(value)}></input>
            <input id="positionTitle" placeholder="Position Title" value={positionTitle} onChange={({target: {value}}) => setPositionTitle(value)}></input>
            <input id="mainTasks" placeholder="Main Tasks" value={mainTasks} onChange={({target: {value}}) => setMainTasks(value)}></input>
            <input id="dateFrom" placeholder="Date From" value={dateFrom} onChange={({target: {value}}) => setDateFrom(value)}></input>
            <input id="dateTo" placeholder="Date To" value={dateTo} onChange={({target: {value}}) => setDateTo(value)}></input>
            <button type="submit" onClick={(evt) => { 
                  evt.preventDefault()
                  setMethod({companyName,positionTitle,mainTasks,dateFrom,dateTo})  
                  setSubmitted(true)
                }}>{submitted ? 'Resubmit' : 'Submit'}</button>
                <button type='button' onClick={() => {setCompanyName('');setPositionTitle('');setMainTasks('');setDateFrom('');setDateTo('');setSubmitted(false);setMethod(null)}}>Delete</button>
            
        </form>
    )
}

// companyName: "",
//             positionTitle: "",
//             mainTasks: "",
//             dateFrom: "",
//             dateTo:
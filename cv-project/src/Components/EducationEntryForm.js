import React, {Component, useState} from "react";


export default function EducationEntryForm ({setMethod}) { 
    const [schoolInfo, setSchoolInfo] = useState('')
    const [titleOfStudy, setTitleOfStudy] = useState('')
    const [dateOfStudy, setDateOfStudy] = useState('')
    const [submitted, setSubmitted] = useState(false)

    return ( 
        <form>
            <legend>Education Entry Form</legend>
            <input id="schoolInfo" placeholder="School Info" value={schoolInfo} onChange={({target: {value}}) => setSchoolInfo(value)}/>
            <input id="titleOfStudy" placeholder="Title Of Study" value={titleOfStudy} onChange={({target: {value}}) => setTitleOfStudy(value)}></input>
            <input id="dateOfStudy" placeholder="Date Of Study" value={dateOfStudy} onChange={({target: {value}}) => setDateOfStudy(value)}></input>
            <button type="submit" onClick={(evt) => { 
                  evt.preventDefault()
                  setMethod({schoolInfo,titleOfStudy,dateOfStudy,submitted})  
                  setSubmitted(true)
                }}>{submitted ? 'Resubmit' : 'Submit'}</button>
                <button type='button' onClick={() => {setSchoolInfo('');setTitleOfStudy('');setDateOfStudy('');setSubmitted(false);setMethod(null)}}>Delete</button>
        </form>
    )
 }

// export default class EducationEntryForm extends Component { 
//     constructor(props) { 
//         super(props)

//     this.state = {
//         schoolInfo: "",
//         titleOfStudy: "",
//         dateOfStudy: ""
//     }

//     this.handleTitleOfStudyChange = this.handleTitleOfStudyChange.bind(this)
//     this.handleSchoolInfoChange = this.handleSchoolInfoChange.bind(this)
//     this.handleDateOfStudyChange = this.handleDateOfStudyChange.bind(this)

//     this.appendMethod = this.props.appendMethod
//     }

//     handleSchoolInfoChange(evt) {
//         this.setState({
//             schoolInfo: evt.target.value
//         })
//     }

//     handleTitleOfStudyChange(evt) {
//         this.setState({
//             titleOfStudy: evt.target.value
//         })
//     }

//     handleDateOfStudyChange(evt) { 
//         this.setState({
//             dateOfStudy: evt.target.value
//         })
//     }
    
//     render() {
//        return (
//             <form>
//                 <legend>Education Entry Form</legend>
//                 <input id="schoolInfo" placeholder="School Info" onChange={this.handleSchoolInfoChange}></input>
//                 <input id="titleOfStudy" placeholder="Title Of Study" onChange={this.handleTitleOfStudyChange}></input>
//                 <input id="dateOfStudy" placeholder="Date Of Study" onChange={this.handleDateOfStudyChange}></input>
//                 <button type="submit" onClick={(evt) => { 
//                   evt.preventDefault()
//                   this.props.appendMethod(this.state.schoolInfo,this.state.titleOfStudy,this.state.dateOfStudy)}}
//                   >Submit</button>
//             </form>

//        )
//     }
// }


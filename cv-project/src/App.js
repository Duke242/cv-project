import EducationEntryForm from "./Components/EducationEntryForm";
import GeneralEntryForm from "./Components/GeneralEntryForm";
import PracticalEntryForm from "./Components/PracticalEntryForm";
import PracticalDisplay from "./Components/PracticalDisplay";
import EducationDisplay from "./Components/EducationDisplay";
// import {List} from 'immutable';
import GeneralDisplay from "./Components/GeneralDisplay";
import { isCompositeComponent } from "react-dom/test-utils";
import React, { useState, useEffect } from "react";

const App = () => {

  const [generalInfo,setGeneralInfo] = useState(null)
  const [practicalInfo,setPracticalInfo] = useState(null)
  const [educationInfo,setEducationInfo] = useState(null)


  return (
    <main>
      <GeneralEntryForm setMethod={setGeneralInfo}/>
      <PracticalEntryForm setMethod={setPracticalInfo}/>
      <EducationEntryForm setMethod={setEducationInfo}/>
      <GeneralDisplay info={generalInfo}/>
      <PracticalDisplay info={practicalInfo}/>
      <EducationDisplay info={educationInfo}/>
    </main>
  )
}

// The submit button should submit your form and display the value of your input fields in HTML elements.
// The edit button should add back (display) the input fields, with the previously displayed information as values.
//In those input fields, you should be able to edit and resubmit the content.

// class App extends React.Component {
//   constructor() {
//     super();

//     this.state = {
//       generalInfoArray: [],
//       educationInfoArray: [],
//       practicalInfoArray: [],
//     };

//     this.appendEducationInfo = this.appendEducationInfo.bind(this)
//     this.appendPracticalInfo = this.appendPracticalInfo.bind(this)
//     this.appendGeneralInfo = this.appendGeneralInfo.bind(this)

//   }

//   appendGeneralInfo(name,email,phoneNumber){ 
//     this.state.generalInfoArray.push({name,email,phoneNumber})
//     this.setState({
//       generalInfoArray : this.state.generalInfoArray
//     })
//   }

//   appendEducationInfo(schoolInfo,titleOfStudy, dateOfStudy ){ 
//     this.state.educationInfoArray.push({schoolInfo,titleOfStudy,dateOfStudy})
//     this.setState({
//       educationInfoArray : this.state.educationInfoArray
//     })
//   }

//   appendPracticalInfo(companyName,positionTitle,mainTasks,dateFrom,dateTo){ 
//     this.state.practicalInfoArray.push({companyName,positionTitle,mainTasks,dateFrom,dateTo})
//     this.setState({
//       practicalInfoArray : this.state.practicalInfoArray
//     })
//   }


//   render() {
//     return (
//       <div className="App">
//           <h1>CV Application</h1>
//           <GeneralEntryForm appendMethod={this.appendGeneralInfo}/>
//           <EducationEntryForm appendMethod={this.appendEducationInfo}/>
//           <PracticalEntryForm appendMethod={this.appendPracticalInfo}/>
//           <GeneralDisplay generalInfoArray={this.state.generalInfoArray}/>
//           <EducationDisplay educationInfoArray={this.state.educationInfoArray}/>
//           <PracticalDisplay practicalInfoArray={this.state.practicalInfoArray}/>
//       </div>
//     );
//   }
// }

export default App;



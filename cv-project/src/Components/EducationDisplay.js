import React from 'react'


export default function EducationDisplay({info}) { 
    return (
        <div>
          <h1>Education Information</h1>
          {info && (
            <div>
                <h3>School Info: {info.schoolInfo}</h3>
                <h3>Title Of Study: {info.titleOfStudy}</h3>
                <h3>Date Of Study: {info.dateOfStudy}</h3>
            </div>
          )}
        </div>
      );
    }


    //     this.state = {
//         schoolInfo: "",
//         titleOfStudy: "",
//         dateOfStudy: "
import React from 'react'


export default function PracticalDisplay({ info }) {
    return (
      <div>
        <h1>Practical Information</h1>
        {info && (
          <div>
              <h3>Company Name: {info.companyName}</h3>
              <h3>Position Title: {info.postitionTitle}</h3>
              <h3>Main Tasks: {info.mainTasks}</h3>
              <h3>Date From: {info.dateFrom}</h3>
              <h3>Date To: {info.dateTo}</h3>
          </div>
        )}
      </div>
    );
  }


  //             companyName: "",
//             positionTitle: "",
//             mainTasks: "",
//             dateFrom: "",
//             dateTo: ""

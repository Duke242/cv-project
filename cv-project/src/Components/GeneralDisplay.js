import React from "react";

export default function GeneralDisplay({ info }) {
  return (
    <div>
      <h1>General Information</h1>
      {info && (
        <div>
            <h3>Name: {info.name}</h3>
            <h3>Email: {info.email}</h3>
            <h3>Phone Number: {info.phone}</h3>
        </div>
      )}
    </div>
  );
}

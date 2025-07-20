import React from 'react';

const UserProfile = (props) => {
  return (
    <div style={{ border: '1px solid gray', padding: '15px', margin: '15px', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
      <h2 style={{ color: '#2c3e50', fontSize: '24px', marginBottom: '10px' }}>{props.name}</h2>
      <p style={{ fontSize: '18px', margin: '5px 0' }}>
        Age: <span style={{ fontWeight: 'bold', color: '#16a085' }}>{props.age}</span>
      </p>
      <p style={{ fontSize: '16px', color: '#555', marginTop: '10px' }}>
        Bio: {props.bio}
      </p>
    </div>
  );
};

export default UserProfile;

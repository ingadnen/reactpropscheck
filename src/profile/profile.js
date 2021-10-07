
import React from 'react';
import PropTypes from 'prop-types';

const ProfileComponent = (props) =>{
  
  
    return (
     
    <div>
        {props.children}
        {props.myUser.map ((e)=>(
          <div>
            <h1>{e.fullName}</h1>
            <h2 style={{color:'yellow'}}>{e.profession}</h2>
            <div class="profile-bio" style={{position: 'absolute', bottom: 0}}>
              <p style={{margin: '24px', textAlign: 'center', opacity: 0.9}}>{e.bio}</p>
            </div>
          </div>
        ))}
        
        
         
    </div>
    )
    
    } 
    
    ProfileComponent.defaultProps = {
      fullName : '',
      profession : '',
      bio : '',
    }
    ProfileComponent.propTypes = {
      fullName :  PropTypes.string.isRequired,
      profession : PropTypes.string.isRequired,
      bio : PropTypes.string.isRequired,
    }   
    export default ProfileComponent;
    
    
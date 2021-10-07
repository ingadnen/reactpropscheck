
import facebook from './facebook.svg';
import github from './github.svg';
import './App.css';
import ProfileComponent from './profile/profile';
import React from "react";
import imageinsrc from './imageinsrc.jpg';
 
const App = () =>{
  const users = [{
    fullName: "Adnen Rebhi",
    profession: "Software Engineer",
    bio: <p> From Tunisia, works as a software engineer making some cool tricks.</p>
  }];
 
  function handleName(){
        
    alert("Adnen's profile")
  }
  
   
  return (
    <> 
 
    <aside class="profile-temp">
   
  <header>
  
      <ProfileComponent   myUser={users}>
        <img onClick={() =>handleName ()} src={imageinsrc} alt="image"/>
      </ProfileComponent>

  </header>
 
  
  <ul class="profile-social">
    
  
    <li>
      <a href="https://fr-fr.facebook.com/rebhiadnen">
        <img src={facebook}/>
      </a>
    </li>
    
   <li>
      <a href="https://www.codewars.com/users/adnrbh">
        <img src="https://www.codewars.com/assets/logos/logo-61192cf7c75904d495e7ad69695fbf0bffd965bc3e17ac60f6c6b475304db09d.svg"/>
      </a>
    </li>

    <li>
      <a href="https://github.com/ingadnen">
        <img src={github}/>
      </a>
    </li>
    
  </ul>
  
</aside>
</>
  );


}

export default App;

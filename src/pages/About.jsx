import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';


const About = () => {
  const [user, setUser] = useState('abass');
  if(!user){
   return <Navigate to='/' replace />
  }
  return (
    <div className="about">
        <h1>Welcome to the about page!</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint incidunt vel quasi sunt ratione cumque, exercitationem accusantium expedita odio optio esse eos facere reiciendis totam! Ad minus voluptas sunt, odio, adipisci fuga dolore rerum commodi omnis provident natus esse nesciunt illo eos nisi perferendis quo ea ut! Sint, dolor incidunt.</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint incidunt vel quasi sunt ratione cumque, exercitationem accusantium expedita odio optio esse eos facere reiciendis totam! Ad minus voluptas sunt, odio, adipisci fuga dolore rerum commodi omnis provident natus esse nesciunt illo eos nisi perferendis quo ea ut! Sint, dolor incidunt.</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint incidunt vel quasi sunt ratione cumque, exercitationem accusantium expedita odio optio esse eos facere reiciendis totam! Ad minus voluptas sunt, odio, adipisci fuga dolore rerum commodi omnis provident natus esse nesciunt illo eos nisi perferendis quo ea ut! Sint, dolor incidunt.</p>

        <button onClick={() => setUser(null)}>Log out</button>
    </div>
  )
}

export default About
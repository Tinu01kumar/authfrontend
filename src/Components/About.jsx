import React from 'react'

import  styled from 'styled-components';
import Headword from './Headword';
import ster from "./Images/ster.png";
const Aboutsec=styled.div`


max-width: 1300px;
padding: 0px 80px;
margin: 5rem auto;

`

const Aboutme=styled.div`
position: relative;
text-align: center;
margin-bottom:60px;
padding-bottom: 20px;
font-size: 40px;
font-family: 'Spectral', serif;;
font-weight: 600;

::before{
    content: "";
    position: absolute;
    background: #111;
    bottom: 0px;
    left: 50%;
    width: 180px;
   
    height: 3px;
    transform: translateX(-50%);
}

::after{
    content: "who am i";
    position: absolute;
    bottom: -12px;
    left: 50%;
    font-size: 20px;
    color: crimson;
    padding: 0 5px;
    background: #fff;
    transform: translateX(-50%);
}
`

const Image =styled.img`
height: 10rem;
float:left;
margin-right:2rem



`

const Aboutcontent=styled.div`

font-size: 1.3rem;
font-family: 'Ubuntu', sans-serif;
font-weight: 500;

`


const About = () => {
  return (
    <Aboutsec id="test2">
       
      <Headword name="About" />
      <Image src={ster}></Image>
      <Aboutcontent><p>I am self motivated and result driven individual with strong academic credentials and highly engage in online competition like codechef ,hackerearth ,leetcode, Geeks for Geeks and also have diverse background of extra co-curricular activities. I invested my time on learning new technology like full stack web development and Machine learning and also work on my overall personality development. Posses strong leadership skills along with the ability to deal creativity and practically with issues</p></Aboutcontent>
    </Aboutsec>
  )
}

export default About
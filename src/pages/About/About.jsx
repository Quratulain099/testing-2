import React from 'react'
import Card from '../../components/Cards/Card'


const cardData=[
    {
      id:1,
      heading:"Stranger Things",
      paragraph:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, dicta.",
      imgSource:"/images/m1.jfif"
    },
    {
      id:2,
      heading:"Thor love and thunder",
      paragraph:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, dicta.",
      imgSource:"/images/m2.jfif"
    },
    {
      id:3,
      heading:"bollywood movie",
      paragraph:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, dicta.",
      imgSource:"/images/m3.jfif"
    },
    {
      id:4,
      heading:"new data",
      paragraph:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, dicta.",
      imgSource:"/images/m4.jpg"
    },
    {
      id:5,
      heading:"new movie 3",
      paragraph:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, dicta.",
      imgSource:"/images/m5.jpg"
    },
    {
      id:6,
      heading:"new movie 4",
      paragraph:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, dicta.",
      imgSource:"/images/m6.jpg"
    },
  ]
const About = () => {
  return (
    <div className='cardsContainer'>
        {cardData.map(function(val,index,array){
        return <Card key={val.id} heading={val.heading} paragraph={val.paragraph} imgSource={val.imgSource}/>
       })}
    </div>
  )
}

export default About
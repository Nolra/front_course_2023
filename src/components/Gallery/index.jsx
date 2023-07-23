import React from "react";
import Profile from "./Profile";
import Card from "./Card";

const Gallery = () => {
  const persons = [
    {
      name: "Katherine Johnson",
      imgSrc: "https://i.imgur.com/MK3eW3As.jpg"
    },
    {
      name: "Геннадий Johnson",
      imgSrc: "https://i.imgur.com/MK3eW3As.jpg",
      isGreatHuman: true
    },
    {
      name: "Кеша Johnson",
      imgSrc: "https://i.imgur.com/MK3eW3As.jpg"
    }
  ];

  return (
    <>
      { 
        persons.map(iter => (
          <Profile key={iter.name} person={ iter } />
        )) 
      }
      <Card>
        <Profile person={ persons[1] } />
      </Card>
    </>
  )
}

export default Gallery;
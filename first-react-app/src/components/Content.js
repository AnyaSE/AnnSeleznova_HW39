import '../App.css';
import React from 'react';
import Button from './Button';
import bep from '../images/bep.jpg';
import ts from '../images/ts.jpg';
import eds from '../images/eds.jpg';

function Content({ selectedLink }) {
    const content = {
      '/blackeyedpeas': {
        image: bep,
        price: 'from 80 USD',
        description: 'Buy your ticket for unforgetable reunion concert',
      },
      '/taylorswift': {
        image: ts,
        price: 'from 120 USD',
        description: 'Buy your ticket today for Taylor Swift special World Tour',
      },
      '/edsheeran': {
        image: eds,
        price: 'from 100 USD',
        description: 'Buy your ticket today for an amazing Ed Sheeran concert',
      },
    };
  
    return (
      <div className='Content'>
        <h2 className='title__main'>Buy your concert tickets with us</h2>
        <img className='main__image' src={content[selectedLink].image} alt='' />
        <p className='main__details'>{content[selectedLink].price}</p>
        <h3 className='main__description'>{content[selectedLink].description}</h3>
        <Button className='main_button'>Buy now</Button>
      </div>
    );
  }
  
export default Content;
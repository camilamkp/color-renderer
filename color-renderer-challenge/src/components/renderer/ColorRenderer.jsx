import React from 'react';
import Color from '../color/Color.jsx';

const colors = 
[
    {
        hex: '#91A6FF',
        name: 'Cornflower Blue'
    },
    {
        hex: '#FF88DC',
        name: 'Persian Pink'
    },
    {
        hex: '#80FF72',
        name: 'Screaming Green'
    },
    {
        hex: '#FF5154',
        name: 'Tart Orange'
    }
]

const ColorRenderer = () =>
{
  return (
    <div className='container'>
        {
            colors.map( color =>
            <Color key={ color.hex } 
                   hex={ color.hex }
                   name={ color.name }/>)
        }
    </div>
  )
}

export default ColorRenderer;

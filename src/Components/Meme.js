import React, { useState } from 'react';
import memeData from '../memeData';

function Meme() {
  const [meme, setMeme] = useState({
    topText: '',
    bottomText: '',
    randomImage: 'http://i.imgflip.com/1bij.jpg',
  });

  const [allMemeImages, setAllMemeImage] = useState(memeData)

  function getMemeImage() {
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMeme((prevState) => ({
        ...prevState,
        randomImage: url
    }));
  }

  function handleChange(event) {
    const {name, value} = event.target
    setMeme((prevState) => ({
        ...prevState,
        [name]: value
    }))
  }

  return (
    <div className='meme-form'>
      <div className='form'>
        <input type='text' placeholder='Top Text' className='form-input' name='topText' value={meme.topText} onChange={handleChange} />
        <input type='text' placeholder='Bottom Text' className='form-input' name='bottomText' value={meme.bottomText} onChange={handleChange} />
        <button className='form-button' onClick={getMemeImage}>
          Get A New Meme Image
        </button>
      </div>
      <div className='meme'>
        <img src={meme.randomImage} alt='Meme' />
        <h2 className='meme-text top'>{meme.topText}</h2>
        <h2 className='meme-text bottom'>{meme.bottomText}</h2>
      </div>
    </div>
  );
}

export default Meme;

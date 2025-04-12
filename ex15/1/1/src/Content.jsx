import React, { useState } from 'react';

function Content() {
  const [joke, setJoke] = useState("");
  
  const jokes = [
    "Why don't scientists trust atoms? Because they make up everything!",
    "What did one wall say to the other wall? I'll meet you at the corner!",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "How do you organize a space party? You planet!"
  ];
  
  const getRandomJoke = () => {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    setJoke(jokes[randomIndex]);
  };
  
  return (
    <div className="content">
      <h2>Content Section</h2>
      <button onClick={getRandomJoke}>Get Random Joke</button>
      {joke && <p>{joke}</p>}
    </div>
  );
}

export default Content;
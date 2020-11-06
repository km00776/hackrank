import React, { useState } from "react";

function Slides({ slides}) {
  console.log(slides);
  const [currentIndex, setIndex] = useState(0);

 console.log(slides.length);
  
  return (
    <div>
      <div id="navigation" className="text-center">
        <button data-testid="button-restart" className="small outlined" onClick={() => setIndex(0)}>
          Restart
        </button>
        <button data-testid="button-prev" className="small" onClick={() => currentIndex > 0 ? setIndex(currentIndex - 1) : currentIndex}>
          Prev
        </button>
        <button data-testid="button-next" className="small" onClick={() => currentIndex < 4 ? setIndex(currentIndex + 1) : currentIndex}>
          Next
        </button>
      </div>
      <div id="slide" className="card text-center">
        <h1 data-testid="title">{slides[currentIndex].title}</h1>
        <p data-testid="text">{slides[currentIndex].text}  </p>
      </div>
    </div>
  );
}

export default Slides;

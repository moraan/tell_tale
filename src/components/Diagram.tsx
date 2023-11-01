import React from 'react';
import diagramImage from '../assets/diagram.png'

function Diagram() {
  return <figure>
    <img src={diagramImage} alt="Diagram" style={{ width: '65vw' }} />
    <figcaption>
      MVP - A predefined story, displaying text and image 
      illustrations with selected trigger words. When the story 
      is spoken out loud, the web speech API will put our spoken word 
      into text, allowing the app to know the trigger word status.  The app 
      will play predefined sound effects associated with that word once the 
      trigger word status is set to true
    </figcaption>
  </figure>
}

export default Diagram;

import React from "react";
import WebSpeech from "./WebSpeech";
import caterpillar from "../assets/images/hungrycatepillar.jpeg";
import full_moon from "../assets/images/full_moon.png";
import hatch from "../assets/images/catepillar.png";
import apple from "../assets/images/apple.png";
import butterfly from "../assets/images/butterfly.png";
import cake from "../assets/images/cake.png";
import cheese from "../assets/images/cheese.png";
import cocoon from "../assets/images/cocoon.png";
import fat from "../assets/images/fat_catepillar.png";
import hungry from "../assets/images/hungry.png";
import ice from "../assets/images/ice_cream.png";
import leaf from "../assets/images/leaf.png";
import lollipop from "../assets/images/lollipop.png";
import muffin from "../assets/images/muffin.png";
import oranges from "../assets/images/oranges.png";
import pears from "../assets/images/pears.png";
import pickle from "../assets/images/pickle.png";
import pie from "../assets/images/pie.png";
import plums from "../assets/images/plums.png";
import salami from "../assets/images/salami.png";
import sausage from "../assets/images/sausage.png";
import strawberries from "../assets/images/strawberries.png";
import watermelon from "../assets/images/watermelon.png";

const hungryCatepillar = () => {
  const bookName = 'The Very Hungry Caterpillar';
  const storyContent = `
  In the light of the moon, a little egg lay on a leaf.

  One Sunday morning, the warm sun came up and pop! Out of the egg came a tiny and very hungry caterpillar.
  
  He started to look for some food.
  
  On Monday he ate through one apple. But he was still hungry.
  
  On Tuesday, he ate through two pears, but he was still hungry.
  
  On Wednesday, he ate through three plums, but he was still hungry.
  
  On Thursday, he ate through four strawberries, but he was still hungry.
  
  On Friday, he ate through five oranges, but he was still hungry.
  
  On Saturday he ate through one piece of chocolate cake, one ice-cream cone, one pickle, one slice of swiss cheese, one slice of salami, one lollipop, one piece of cherry pie, one sausage, one cupcake, and one slice of watermelon. That night he had a stomachache!
  
  The next day was Sunday again. The caterpillar ate through one nice green leaf, and after that he felt much better.
  
  Now he was not hungry anymore, and he was not a little caterpillar anymore. He was a big, fat caterpillar.
  
  He built a small house around himself, called a Cocoon, And he stayed inside for more than two weeks.
  
  Then he nibbled a hole in the cocoon, pushed his way out, and...
  
  he was a beautiful butterfly.
   `;

  const divStyle = {
    marginBottom: "200px",
  };

  const imgContainerStyle = {
    display: "flex",
  };

  return (
    <div>
      <h1>The Very Hungry Caterpillar</h1>
      <h2>by Eric Carle</h2>
      <img src={caterpillar} alt="A caterpillar" />
      <WebSpeech storyText={storyContent} bookName={bookName} />
      <br></br>
      <br></br>
      <div style={divStyle}>
        <p>In the light of the moon, a little egg lay on a leaf.</p>
        <img
          style={{ width: 800, height: 600 }}
          src={full_moon}
          alt="The Moon Shines on an Egg"
        />
      </div>
      <div style={divStyle}>
        <p>
          One Sunday morning, the warm sun came up and pop! Out of the egg came
          a tiny and very hungry caterpillar.
        </p>
        <img
          style={{ width: 800, height: 600 }}
          src={hatch}
          alt="Caterpillar Hatches"
        />
      </div>
      <div style={divStyle}>
        <p>He started to look for some food.</p>
        <img
          style={{ width: 800, height: 600 }}
          src={hungry}
          alt="a hungry caterpillar"
        />
      </div>
      <div style={divStyle}>
        <p>On Monday he ate through one apple. But he was still hungry.</p>
        <img
          style={{ width: 600, height: 600 }}
          src={apple}
          alt="caterpillar and an apple"
        />
      </div>
      <div style={divStyle}>
        <p>On Tuesday, he ate through two pears, but he was still hungry.</p>
        <img
          style={{ width: 800, height: 700 }}
          src={pears}
          alt="caterpillar and pears"
        />
      </div>
      <div style={divStyle}>
        <p>
          On Wednesday, he ate through three plums, but he was still hungry.
        </p>
        <img
          style={{ width: 800, height: 700 }}
          src={plums}
          alt="caterpillar and plums"
        />
      </div>
      <div style={divStyle}>
        <p>
          On Thursday, he ate through four strawberries, but he was still
          hungry.
        </p>
        <img
          style={{ width: 1100, height: 600 }}
          src={strawberries}
          alt="caterpillar and strawberries"
        />
      </div>
      <div style={divStyle}>
        <p>On Friday, he ate through five oranges, but he was still hungry.</p>
        <img
          style={{ width: 800, height: 600 }}
          src={oranges}
          alt="oranges and caterpillar"
        />
      </div>
      <div style={divStyle}>
        <p>
          On Saturday he ate through one piece of chocolate cake, one ice-cream
          cone, one pickle, one slice of Swiss cheese, one slice of salami, one
          lollipop, one piece of cherry pie, one sausage, one cupcake, and one
          slice of watermelon. That night he had a stomachache!
        </p>
        <div style={imgContainerStyle}>
          <img style={{ width: 400, height: 400 }} src={cake} alt="cake" />
          <img style={{ width: 400, height: 500 }} src={ice} alt="ice cream" />
          <img style={{ width: 400, height: 500 }} src={pickle} alt="pickle" />
        </div>
        <div style={imgContainerStyle}>
          <img style={{ width: 400, height: 500 }} src={cheese} alt="cheese" />
          <img style={{ width: 400, height: 550 }} src={salami} alt="salami" />
          <img
            style={{ width: 400, height: 550 }}
            src={lollipop}
            alt="lollipop"
          />
        </div>
        <div style={imgContainerStyle}>
          <img style={{ width: 400, height: 400 }} src={pie} alt="pie" />
          <img
            style={{ width: 400, height: 500 }}
            src={sausage}
            alt="sausage"
          />
          <img style={{ width: 400, height: 500 }} src={muffin} alt="cupcake" />
        </div>
        <img
          style={{ width: 600, height: 500 }}
          src={watermelon}
          alt="watermelon"
        />
      </div>
      <div style={divStyle}>
        <p>
          The next day was Sunday again. The caterpillar ate through one nice
          green leaf, and after that he felt much better.
        </p>
        <img
          style={{ width: 800, height: 600 }}
          src={leaf}
          alt="caterpillar and leaf"
        />
      </div>
      <div style={divStyle}>
        <p>
          Now he was not hungry anymore, and he was not a little caterpillar
          anymore. He was a big, fat caterpillar.
        </p>
        <img
          style={{ width: 900, height: 400 }}
          src={fat}
          alt="caterpillar is fat"
        />
      </div>
      <div style={divStyle}>
        <p>
          He built a small house around himself, called a Cocoon, And he stayed
          inside for more than two weeks.
        </p>
        <p>Then he nibbled a hole in the cocoon, pushed his way out, and...</p>
        <img style={{ width: 850, height: 600 }} src={cocoon} alt="a cocoon" />
      </div>
      <div style={divStyle}>
        <p>he was a beautiful butterfly.</p>
        <img
          style={{ width: 800, height: 600 }}
          src={butterfly}
          alt="butterfly"
        />
      </div>
    </div>
  );
};

export default hungryCatepillar;

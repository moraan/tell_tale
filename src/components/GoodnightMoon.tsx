import WebSpeech from "./WebSpeech";
import React from "react";

const goodnightMoon = () => {
  const bookName = 'Goodnight Moon';
  const storyContent = `
  In the great green room
  There was a telephone
  And a red balloon
  And a picture of . . .
  The cow jumping over the moon
  And there were three little bears sitting on chairs
  And two little kittens
  And a pair of mittens
  And a little toyhouse
  And a young mouse
  And a comb and a brush and a bowl full of mush
  And a quiet old lady who was whispering
  Goodnight room
  Goodnight moon
  Goodnight cow jumping over the moon
  Goodnight light and the red balloon
  Goodnight bears
  Goodnight chairs
  Goodnight kittens
  And goodnight mittens
  Goodnight clocks
  And goodnight socks
  Goodnight little house
  And goodnight mouse
  Goodnight comb
  And goodnight brush
  Goodnight nobody
  Goodnight mush
  And goodnight to the old lady whispering "hush"
  Goodnight stars
  Goodnight air
  Goodnight noises everywhere
   `;

  const divStyle = {
    marginBottom: "200px",
  };

  const imgContainerStyle = {
    display: "flex",
  };

  return (
    <div>
      <h1>{bookName}</h1>
      <h2>by Margaret Wise Brown</h2>
      <img src={'https://kmbhxkpplgffblgbbjsw.supabase.co/storage/v1/object/public/images/The_Very_Hungry_Caterpillar/hungrycatepillar.jpeg'} alt="A caterpillar" />
      <WebSpeech storyText={storyContent} bookName={bookName} />
      <br></br>
      <br></br>
      <div style={divStyle}>
        <p>In the light of the moon, a little egg lay on a leaf.</p>
        <img
          style={{ width: 800, height: 600 }}
          src={'https://kmbhxkpplgffblgbbjsw.supabase.co/storage/v1/object/public/images/The_Very_Hungry_Caterpillar/full_moon.png'}
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
          src={'https://kmbhxkpplgffblgbbjsw.supabase.co/storage/v1/object/public/images/The_Very_Hungry_Caterpillar/catepillar.png'}
          alt="Caterpillar Hatches"
        />
      </div>
      <div style={divStyle}>
        <p>He started to look for some food.</p>
        <img
          style={{ width: 800, height: 600 }}
          src={'https://kmbhxkpplgffblgbbjsw.supabase.co/storage/v1/object/public/images/The_Very_Hungry_Caterpillar/hungry.png'}
          alt="a hungry caterpillar"
        />
      </div>
      <div style={divStyle}>
        <p>On Monday he ate through one apple. But he was still hungry.</p>
        <img
          style={{ width: 600, height: 600 }}
          src={'https://kmbhxkpplgffblgbbjsw.supabase.co/storage/v1/object/public/images/The_Very_Hungry_Caterpillar/apple.png'}
          alt="caterpillar and an apple"
        />
      </div>
      <div style={divStyle}>
        <p>On Tuesday, he ate through two pears, but he was still hungry.</p>
        <img
          style={{ width: 800, height: 700 }}
          src={'https://kmbhxkpplgffblgbbjsw.supabase.co/storage/v1/object/public/images/The_Very_Hungry_Caterpillar/pears.png'}
          alt="caterpillar and pears"
        />
      </div>
      <div style={divStyle}>
        <p>
          On Wednesday, he ate through three plums, but he was still hungry.
        </p>
        <img
          style={{ width: 800, height: 700 }}
          src={'https://kmbhxkpplgffblgbbjsw.supabase.co/storage/v1/object/public/images/The_Very_Hungry_Caterpillar/plums.png'}
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
          src={'https://kmbhxkpplgffblgbbjsw.supabase.co/storage/v1/object/public/images/The_Very_Hungry_Caterpillar/strawberries.png'}
          alt="caterpillar and strawberries"
        />
      </div>
      <div style={divStyle}>
        <p>On Friday, he ate through five oranges, but he was still hungry.</p>
        <img
          style={{ width: 800, height: 600 }}
          src={'https://kmbhxkpplgffblgbbjsw.supabase.co/storage/v1/object/public/images/The_Very_Hungry_Caterpillar/oranges.png'}
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
          <img style={{ width: 400, height: 400 }} src={'https://kmbhxkpplgffblgbbjsw.supabase.co/storage/v1/object/public/images/The_Very_Hungry_Caterpillar/cake.png'} alt="cake" />
          <img style={{ width: 400, height: 500 }} src={'https://kmbhxkpplgffblgbbjsw.supabase.co/storage/v1/object/public/images/The_Very_Hungry_Caterpillar/ice_cream.png'} alt="ice cream" />
          <img style={{ width: 400, height: 500 }} src={'https://kmbhxkpplgffblgbbjsw.supabase.co/storage/v1/object/public/images/The_Very_Hungry_Caterpillar/pickle.png'} alt="pickle" />
        </div>
        <div style={imgContainerStyle}>
          <img style={{ width: 400, height: 500 }} src={'https://kmbhxkpplgffblgbbjsw.supabase.co/storage/v1/object/public/images/The_Very_Hungry_Caterpillar/cheese.png'} alt="cheese" />
          <img style={{ width: 400, height: 550 }} src={'https://kmbhxkpplgffblgbbjsw.supabase.co/storage/v1/object/public/images/The_Very_Hungry_Caterpillar/salami.png'} alt="salami" />
          <img
            style={{ width: 400, height: 550 }}
            src={'https://kmbhxkpplgffblgbbjsw.supabase.co/storage/v1/object/public/images/The_Very_Hungry_Caterpillar/lollipop.png'}
            alt="lollipop"
          />
        </div>
        <div style={imgContainerStyle}>
          <img style={{ width: 400, height: 400 }} src={'https://kmbhxkpplgffblgbbjsw.supabase.co/storage/v1/object/public/images/The_Very_Hungry_Caterpillar/pie.png'} alt="pie" />
          <img
            style={{ width: 400, height: 500 }}
            src={'https://kmbhxkpplgffblgbbjsw.supabase.co/storage/v1/object/public/images/The_Very_Hungry_Caterpillar/sausage.png'}
            alt="sausage"
          />
          <img style={{ width: 400, height: 500 }} src={'https://kmbhxkpplgffblgbbjsw.supabase.co/storage/v1/object/public/images/The_Very_Hungry_Caterpillar/muffin.png'} alt="cupcake" />
        </div>
        <img
          style={{ width: 600, height: 500 }}
          src={'https://kmbhxkpplgffblgbbjsw.supabase.co/storage/v1/object/public/images/The_Very_Hungry_Caterpillar/watermelon.png'}
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
          src={'https://kmbhxkpplgffblgbbjsw.supabase.co/storage/v1/object/public/images/The_Very_Hungry_Caterpillar/leaf.png'}
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
          src={'https://kmbhxkpplgffblgbbjsw.supabase.co/storage/v1/object/public/images/The_Very_Hungry_Caterpillar/fat_catepillar.png'}
          alt="caterpillar is fat"
        />
      </div>
      <div style={divStyle}>
        <p>
          He built a small house around himself, called a Cocoon, And he stayed
          inside for more than two weeks.
        </p>
        <p>Then he nibbled a hole in the cocoon, pushed his way out, and...</p>
        <img style={{ width: 850, height: 600 }} src={'https://kmbhxkpplgffblgbbjsw.supabase.co/storage/v1/object/public/images/The_Very_Hungry_Caterpillar/cocoon.png'} alt="a cocoon" />
      </div>
      <div style={divStyle}>
        <p>he was a beautiful butterfly.</p>
        <img
          style={{ width: 800, height: 600 }}
          src={'https://kmbhxkpplgffblgbbjsw.supabase.co/storage/v1/object/public/images/The_Very_Hungry_Caterpillar/butterfly.png'}
          alt="butterfly"
        />
      </div>
    </div>
  );
};

export default goodnightMoon;
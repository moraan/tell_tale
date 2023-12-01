import WebSpeech from "./WebSpeech";
import React from "react";

const brownBear = () => {
  const bookName = 'Brown Bear, Brown Bear, What Do You See?';
  const storyContent = `
  Brown bear, brown bear, what do you see?
  I see a red bird looking at me.
  Red bird, red bird, what do you see?
  I see a yellow duck looking at me.
  Yellow duck, yellow duck, what do you see?
  I see a blue horse looking at me.
  Blue Horse, blue horse, what do you see?
  I see a green frog looking at me.
  Green frog, green frog, what do you see?
  I see a purple cat looking at me.
  Purple cat, purple cat, what do you see?
  I see a white dog looking at me.
  White dog, white dog, what do you see?
  I see a black sheep looking at me.
  Black Sheep, Black Sheep, what do you see?
  I see a goldfish looking at me.
  Goldfish, goldfish, what do you see?
  I see a monkey looking at me.
  Monkey, monkey, what do you see?
  I see children looking at me.
  Children, children, what do you see?
  We see a brown bear, a red bird, a yellow duck, a blue horse, a green frog, a purple cat, a white dog, a black sheep, a goldfish, and a monkey looking at us.
  That's what we see.
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
      <h2>by Bill Martin Jr</h2>
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

export default brownBear;
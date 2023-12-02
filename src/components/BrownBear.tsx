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
      <img src={'https://kmbhxkpplgffblgbbjsw.supabase.co/storage/v1/object/public/images/Brown_Bear/cover.jpg'} alt="A caterpillar" />
      <WebSpeech storyText={storyContent} bookName={bookName} />
      <br></br>
      <br></br>
      <div style={divStyle}>
        <p>Brown bear, brown bear, what do you see? I see a red bird looking at me.</p>
        <img
          style={{ width: 800, height: 650 }}
          src={'https://kmbhxkpplgffblgbbjsw.supabase.co/storage/v1/object/public/images/Brown_Bear/brown_bear.jpeg'}
          alt="Brown Bear"
        />
      </div>
      <div style={divStyle}>
        <p>Red bird, red bird, what do you see? I see a yellow duck looking at me.</p>
        <img
          style={{ width: 800, height: 600 }}
          src={'https://kmbhxkpplgffblgbbjsw.supabase.co/storage/v1/object/public/images/Brown_Bear/red_bird.jpg'}
          alt="Red Bird"
        />
      </div>
      <div style={divStyle}>
        <p>Yellow duck, yellow duck, what do you see? I see a blue horse looking at me.</p>
        <img
          style={{ width: 800, height: 600 }}
          src={'https://kmbhxkpplgffblgbbjsw.supabase.co/storage/v1/object/public/images/Brown_Bear/yellow_duck.jpg'}
          alt="Yellow Duck"
        />
      </div>
      <div style={divStyle}>
        <p>Blue Horse, blue horse, what do you see? I see a green frog looking at me.</p>
        <img
          style={{ width: 600, height: 600 }}
          src={'https://kmbhxkpplgffblgbbjsw.supabase.co/storage/v1/object/public/images/Brown_Bear/blue_horse.jpg'}
          alt="Blue Horse"
        />
      </div>
      <div style={divStyle}>
        <p>Green frog, green frog, what do you see? I see a purple cat looking at me.</p>
        <img
          style={{ width: 800, height: 700 }}
          src={'https://kmbhxkpplgffblgbbjsw.supabase.co/storage/v1/object/public/images/Brown_Bear/green_frog.jpg'}
          alt="Green Frog"
        />
      </div>
      <div style={divStyle}>
        <p>Purple cat, purple cat, what do you see? I see a white dog looking at me.</p>
        <img
          style={{ width: 800, height: 700 }}
          src={'https://kmbhxkpplgffblgbbjsw.supabase.co/storage/v1/object/public/images/Brown_Bear/purple_cat.jpg'}
          alt="Purple Cat"
        />
      </div>
      <div style={divStyle}>
        <p>White dog, white dog, what do you see? I see a black sheep looking at me.</p>
        <img
          style={{ width: 1100, height: 600 }}
          src={'https://kmbhxkpplgffblgbbjsw.supabase.co/storage/v1/object/public/images/Brown_Bear/white_dog.jpg'}
          alt="White Dog"
        />
      </div>
      <div style={divStyle}>
        <p>Black Sheep, Black Sheep, what do you see? I see a goldfish looking at me.</p>
        <img
          style={{ width: 800, height: 600 }}
          src={'https://kmbhxkpplgffblgbbjsw.supabase.co/storage/v1/object/public/images/Brown_Bear/black_sheep.jpg'}
          alt="Black Sheep"
        />
      </div>
      <div style={divStyle}>
        <p>Goldfish, goldfish, what do you see? I see a teacher looking at me.</p>
        <img
          style={{ width: 800, height: 600 }}
          src={'https://kmbhxkpplgffblgbbjsw.supabase.co/storage/v1/object/public/images/Brown_Bear/gold_fish.jpg'}
          alt="Goldfish"
        />
      </div>
      <div style={divStyle}>
        <p>Teacher, Teacher, what do you see? I see children looking at me.</p>
        <img
          style={{ width: 800, height: 800 }}
          src={'https://kmbhxkpplgffblgbbjsw.supabase.co/storage/v1/object/public/images/Brown_Bear/teacher.jpeg'}
          alt="Teacher"
        />
      </div>
      <div style={divStyle}>
        <p>Children, children, what do you see?</p>
        <img
          style={{ width: 800, height: 600 }}
          src={'https://kmbhxkpplgffblgbbjsw.supabase.co/storage/v1/object/public/images/Brown_Bear/children.jpeg'}
          alt="Children"
        />
      </div>
      <div style={divStyle}>
        <p>
          We see a brown bear, a red bird, a yellow duck, a blue horse, a green frog, a purple cat, 
          a white dog, a black sheep, a goldfish, and a teacher looking at us. That's what we see.
        </p>
        <img
          style={{ width: 800, height: 600 }}
          src={'https://kmbhxkpplgffblgbbjsw.supabase.co/storage/v1/object/public/images/Brown_Bear/all_animals.jpg'}
          alt="All the animals"
        />
      </div>
    </div>
  );
};

export default brownBear;
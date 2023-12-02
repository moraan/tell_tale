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

  And a quiet old lady who was whispering "hush"

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
      <img src={'https://kmbhxkpplgffblgbbjsw.supabase.co/storage/v1/object/public/images/Goodnight_Moon/goodnight_moon.png'} alt="Fireplace and window with moon" />
      <WebSpeech storyText={storyContent} bookName={bookName} />
      <br></br>
      <br></br>
      <div style={divStyle}>
        <p>In the great green room. There was a telephone</p>
        <img
          style={{ width: 800, height: 600 }}
          src={'https://kmbhxkpplgffblgbbjsw.supabase.co/storage/v1/object/public/images/Goodnight_Moon/telephone.png'}
          alt="Green Room with telephone ringing"
        />
      </div>
      <div style={divStyle}>
        <p>And a red balloon. And a picture of . . .</p>
        <img
          style={{ width: 800, height: 600 }}
          src={'https://kmbhxkpplgffblgbbjsw.supabase.co/storage/v1/object/public/images/Goodnight_Moon/red_ballon.jpeg'}
          alt="Green Room with red balloon"
        />
      </div>
      <div style={divStyle}>
        <p>The cow jumping over the moon</p>
        <img
          style={{ width: 800, height: 600 }}
          src={'https://kmbhxkpplgffblgbbjsw.supabase.co/storage/v1/object/public/images/Goodnight_Moon/cow_jumping_over_moon.jpeg'}
          alt="Cow jumping over the moon"
        />
      </div>
      <div style={divStyle}>
        <p>And there were three little bears sitting on chairs</p>
        <img
          style={{ width: 600, height: 600 }}
          src={'https://kmbhxkpplgffblgbbjsw.supabase.co/storage/v1/object/public/images/Goodnight_Moon/three_little_bears.png'}
          alt="Three little bears sitting on chairs"
        />
      </div>
      <div style={divStyle}>
        <p>And two little kittens. And a pair of mittens</p>
        <img
          style={{ width: 800, height: 700 }}
          src={'https://kmbhxkpplgffblgbbjsw.supabase.co/storage/v1/object/public/images/Goodnight_Moon/kitten_mittens.jpg'}
          alt="Green room with kittens and mittens"
        />
      </div>
      <div style={divStyle}>
        <p>And a little toyhouse. And a young mouse</p>
        <img
          style={{ width: 800, height: 700 }}
          src={'https://kmbhxkpplgffblgbbjsw.supabase.co/storage/v1/object/public/images/Goodnight_Moon/little_house.jpeg'}
          alt="Little toyhouse"
        />
      </div>
      <div style={divStyle}>
        <p>And a comb and a brush and a bowl full of mush</p>
        <img
          style={{ width: 1100, height: 600 }}
          src={'https://kmbhxkpplgffblgbbjsw.supabase.co/storage/v1/object/public/images/Goodnight_Moon/mush_comb_brush.jpg'}
          alt="Bowl of mush, a comb and a brush on a table"
        />
      </div>
      <div style={divStyle}>
        <p>And a quiet old lady who was whispering "hush"</p>
        <img
          style={{ width: 800, height: 600 }}
          src={'https://kmbhxkpplgffblgbbjsw.supabase.co/storage/v1/object/public/images/Goodnight_Moon/quiet_old_lady.jpeg'}
          alt="Rabbit lady sitting on rocking chair"
        />
      </div>
      <div style={divStyle}>
        <p>Goodnight room</p>
        <img
          style={{ width: 900, height: 600 }}
          src={'https://kmbhxkpplgffblgbbjsw.supabase.co/storage/v1/object/public/images/Goodnight_Moon/goodnight_room.jpeg'}
          alt="The whole green room"
        />
      </div>
      <div style={divStyle}>
        <p>Goodnight moon</p>
        <img
          style={{ width: 900, height: 400 }}
          src={'https://kmbhxkpplgffblgbbjsw.supabase.co/storage/v1/object/public/images/Goodnight_Moon/moon.png'}
          alt="moon through window"
        />
      </div>
      <div style={divStyle}>
        <p>Goodnight cow jumping over the moon</p>
        <img
          style={{ width: 800, height: 600 }}
          src={'https://kmbhxkpplgffblgbbjsw.supabase.co/storage/v1/object/public/images/Goodnight_Moon/cow_jumping_over_moon.jpeg'}
          alt="cow jumping over the moon"
        />
      </div>
      <div style={divStyle}>
        <p>Goodnight light and the red balloon. Goodnight bears. Goodnight chairs</p>
        <img
          style={{ width: 800, height: 600 }}
          src={'https://kmbhxkpplgffblgbbjsw.supabase.co/storage/v1/object/public/images/Goodnight_Moon/goodnight_light_ballons_bears_chairs.png'}
          alt="Green room with red balloon and a lamp on"
        />
      </div>
      <div style={divStyle}>
        <p>Goodnight kittens</p>
        <img
          style={{ width: 800, height: 600 }}
          src={'https://kmbhxkpplgffblgbbjsw.supabase.co/storage/v1/object/public/images/Goodnight_Moon/goodnight_kittens.png'}
          alt="two kittens"
        />
      </div>
      <div style={divStyle}>
        <p>And goodnight mittens</p>
        <img
          style={{ width: 800, height: 600 }}
          src={'https://kmbhxkpplgffblgbbjsw.supabase.co/storage/v1/object/public/images/Goodnight_Moon/goodnight_mittens.png'}
          alt="mittens"
        />
      </div>
      <div style={divStyle}>
        <p>Goodnight clocks. And goodnight socks</p>
        <img
          style={{ width: 800, height: 600 }}
          src={'https://kmbhxkpplgffblgbbjsw.supabase.co/storage/v1/object/public/images/Goodnight_Moon/goodnight_clocks_socks.png'}
          alt="Green room dark with lamp and clock"
        />
      </div>
      <div style={divStyle}>
        <p>Goodnight little house</p>
        <img
          style={{ width: 800, height: 600 }}
          src={'https://kmbhxkpplgffblgbbjsw.supabase.co/storage/v1/object/public/images/Goodnight_Moon/little_house.jpeg'}
          alt="little house"
        />
      </div>
      <div style={divStyle}>
        <p>And goodnight mouse</p>
        <img
          style={{ width: 800, height: 600 }}
          src={'https://kmbhxkpplgffblgbbjsw.supabase.co/storage/v1/object/public/images/Goodnight_Moon/little_mouse.jpeg'}
          alt="little white mouse"
        />
      </div>
      <div style={divStyle}>
        <p>Goodnight comb. And goodnight brush</p>
        <img
          style={{ width: 800, height: 600 }}
          src={'https://kmbhxkpplgffblgbbjsw.supabase.co/storage/v1/object/public/images/Goodnight_Moon/goodnight_comb_brush.png'}
          alt="Green room dark with lamp on and comb and brush on table"
        />
      </div>
      <div style={divStyle}>
        <p>Goodnight nobody</p>
        <img
          style={{ width: 800, height: 600 }}
          src={'https://kmbhxkpplgffblgbbjsw.supabase.co/storage/v1/object/public/images/Goodnight_Moon/white.avif'}
          alt="white background"
        />
      </div>
      <div style={divStyle}>
        <p>Goodnight mush</p>
        <img
          style={{ width: 800, height: 600 }}
          src={'https://kmbhxkpplgffblgbbjsw.supabase.co/storage/v1/object/public/images/Goodnight_Moon/goodnight_mush.png'}
          alt="bowl of mush"
        />
      </div>
      <div style={divStyle}>
        <p>And goodnight to the old lady whispering "hush"</p>
        <img
          style={{ width: 800, height: 600 }}
          src={'https://kmbhxkpplgffblgbbjsw.supabase.co/storage/v1/object/public/images/Goodnight_Moon/goodnight_lady.png'}
          alt="Rabbit lady sitting on chair in the dark"
        />
      </div>
      <div style={divStyle}>
        <p>Goodnight stars. Goodnight air</p>
        <img
          style={{ width: 800, height: 600 }}
          src={'https://kmbhxkpplgffblgbbjsw.supabase.co/storage/v1/object/public/images/Goodnight_Moon/starts_air.png'}
          alt="Stars"
        />
      </div>
      <div style={divStyle}>
        <p>Goodnight noises everywhere</p>
        <img
          style={{ width: 900, height: 600 }}
          src={'https://kmbhxkpplgffblgbbjsw.supabase.co/storage/v1/object/public/images/Goodnight_Moon/goodnight_noises_everywhere.jpg'}
          alt="Whole green room in dark"
        />
      </div>
    </div>
  );
};

export default goodnightMoon;
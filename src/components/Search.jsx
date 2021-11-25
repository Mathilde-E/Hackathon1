import React, { useState } from "react";

import "./Search.css";

// This holds a list of some fiction people
// Some  have the same name but different age and id
const USERS = [
  {
    id: 1,
    gender: "male",
    pseudo: "Alexandre",
    age: 20,
    picture: "https://randomuser.me/api/portraits/men/29.jpg",
    music: "jazz , blues",
    fav: "Coldplay | Adventure of a Lifetime  &  Adele | Rolling in the Deep ",
  },
  {
    id: 2,
    gender: "male",
    pseudo: "Felix",
    age: 24,
    picture: "https://randomuser.me/api/portraits/men/30.jpg",
    music: "hiphop , rap",
    fav: "Beyoncé | Single Ladies  &  Coldplay | Adventure of a Lifetime ",
  },
  {
    id: 3,
    gender: "male",
    pseudo: "Jack",
    age: 27,
    picture: "https://randomuser.me/api/portraits/men/31.jpg",
    music: "raggae , funk",
    fav: " Bruno Mars | Uptown Funk & Lizzo | Good as Hell ",
  },
  {
    id: 4,
    gender: "male",
    pseudo: "Marc",
    age: 30,
    picture: "https://randomuser.me/api/portraits/men/32.jpg",
    music: "pop , rock",
    fav: " Katy Perry | Firework & The Pixies | Where Is My Mind? ",
  },
  {
    id: 5,
    gender: "male",
    pseudo: "Philippe",
    age: 32,
    picture: "https://randomuser.me/api/portraits/men/33.jpg",
    music: "raggae , jazz",
    fav: " Pharrell Williams | Happy & Miles Davis | All Blues ",
  },
  {
    id: 6,
    gender: "male",
    pseudo: "André",
    age: 35,
    picture: "https://randomuser.me/api/portraits/men/34.jpg",
    music: "classical , electronic",
    fav: " Daft Punk | Get Lucky & Miles Davis | So What ",
  },
  {
    id: 7,
    gender: "male",
    pseudo: "Paul",
    age: 37,
    picture: "https://randomuser.me/api/portraits/men/35.jpg",
    music: "electronic , rock",
    fav: " Martin Solveig | The Night Out & DJ Snake | Turn Down for What ",
  },
  {
    id: 8,
    gender: "male",
    pseudo: "Esteban",
    age: 40,
    picture: "https://randomuser.me/api/portraits/men/36.jpg",
    music: "funk , latin",
    fav: " Marvin Gaye | Got To Give It Up & James Brown | Papas Got A Brand New Bag ",
  },
  {
    id: 9,
    gender: "male",
    pseudo: "Louis",
    age: 45,
    picture: "https://randomuser.me/api/portraits/men/37.jpg",
    music: "soul , country",
    fav: " Amy Winehouse | ReHab & Brad Paisley | Welcome to the Future ",
  },
  {
    id: 10,
    gender: "male",
    pseudo: "Peter",
    age: 70,
    picture: "https://randomuser.me/api/portraits/men/38.jpg",
    music: "blues , rock",
    fav: " Duke Ellington | Take The A Train & Jimi Hendrix | Purple Haze ",
  },
  {
    id: 11,
    gender: "female",
    pseudo: "Clara",
    age: 20,
    picture: "https://randomuser.me/api/portraits/women/30.jpg",
    music: "hiphop , rock",
    fav: " Outkast | Hey Ya! & Led Zeppelin | Whole Lotta Love ",
  },
  {
    id: 12,
    gender: "female",
    pseudo: "Alice",
    age: 25,
    picture: "https://randomuser.me/api/portraits/women/31.jpg",
    music: "funk , rock",
    fav: " The Weeknd | Blinding Lights & Destiny's Child | Bootylicious ",
  },
  {
    id: 13,
    gender: "female",
    pseudo: "Vanessa",
    age: 30,
    picture: "https://randomuser.me/api/portraits/women/32.jpg",
    music: "blues , pop",
    fav: " Lady Gaga | Poker Face & Billie Eilish | Bad Guy ",
  },
  {
    id: 14,
    gender: "female",
    pseudo: "Eve",
    age: 35,
    picture: "https://randomuser.me/api/portraits/women/33.jpg",
    music: "latin , jazz",
    fav: " Shakira | Hips Don't Lie & John Coltrane | My Favorite Things ",
  },
  {
    id: 15,
    gender: "female",
    pseudo: "Mathilde",
    age: 37,
    picture: "https://randomuser.me/api/portraits/women/34.jpg",
    music: "electronic , country",
    fav: " David Guetta | Titanium & Duck Sauce | Barbra Streisand ",
  },
  {
    id: 16,
    gender: "female",
    pseudo: "Elsa",
    age: 40,
    picture: "https://randomuser.me/api/portraits/women/35.jpg",
    music: "pop , rock",
    fav: " Justin Timberlake | SexyBack  & The Rolling Stones | Sympathy for the Devil ",
  },
  {
    id: 17,
    gender: "female",
    pseudo: "Louise",
    age: 45,
    picture: "https://randomuser.me/api/portraits/women/36.jpg",
    music: "raggae , rock",
    fav: " Nicki Minaj | Starships & Bob Marley | Bob Marley ",
  },
  {
    id: 18,
    gender: "female",
    pseudo: "Anaïs",
    age: 49,
    picture: "https://randomuser.me/api/portraits/women/37.jpg",
    music: "pop , latin",
    fav: " Gwen Stefani | Hollaback Girl & Marc Anthony | Ahora Quien ",
  },
  {
    id: 19,
    gender: "female",
    pseudo: "Suzie",
    age: 54,
    picture: "https://randomuser.me/api/portraits/women/38.jpg",
    music: "hiphop , funk",
    fav: " Eve | Let Me Blow Ya Mind & Otto Knows | Million Voices ",
  },
  {
    id: 20,
    gender: "female",
    pseudo: "Vicky",
    age: 32,
    picture: "https://randomuser.me/api/portraits/women/39.jpg",
    music: "classical , jazz",
    fav: " Lorde | Royals & Gnarls Barkley | Crazy ",
  },
];

function Search() {
  const [name, setName] = useState("");
  const [foundUsers, setFoundUsers] = useState();

  const filter = (e) => {
    const keyword = e.target.value;

    if (keyword !== "") {
      const results = USERS.filter((user) => {
        return user.music.toLowerCase().includes(keyword.toLowerCase());
      });
      setFoundUsers(results);
    } else {
      setFoundUsers("");
    }

    setName(keyword);
  };

  return (
    <div className="container">
      <input
        type="search"
        value={name}
        onChange={filter}
        className="input"
        placeholder="Search Match"
      />

      <div className="user-list">
        {foundUsers && foundUsers.length > 0 ? (
          foundUsers.map((user) => (
            <div className="card">
              <img src={user.picture} alt="" />
              <div className="infos">
                <p>Pseudo : {user.pseudo}</p>
                <p>Genre : {user.gender}</p>
                <p>Age : {user.age}</p>
              </div>
              <h4>Genres Favoris :</h4>
              <div className="genres">
                <p>{user.music}</p>
              </div>
            </div>
          ))
        ) : (
          <h1>No match found!</h1>
        )}
      </div>
    </div>
  );
}

export default Search;

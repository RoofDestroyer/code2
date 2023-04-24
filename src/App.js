import logo from "./logo.svg";
import "./App.css";
import Header from "./component/header";
import Main from "./component/main";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [teamData, setTeamData] = useState([]);
  const [count, setCount] = useState(1);
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "488f437511msh2d3854838388c55p13692cjsn135921cfebdf",
        "X-RapidAPI-Host": "free-nba.p.rapidapi.com",
      },
    };

    fetch("https://free-nba.p.rapidapi.com/teams?page=0", options)
      .then((response) => response.json())
      .then((response) => setTeamData(response.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <Header />
      <Main />
      <>
        {/* hello world
      <h1>{count}</h1>
      <button
      onClick={()=>{
        setData(data - 1);
      }}
      >Тык</button> */}
        <h1>Этот сайт про команды NBA</h1>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <ol>
            {teamData.map((el, i) => {
              let temp = el.id;
              return (
                <div key={el.id}>
                  {`${i + 1}. ${el.city} ${el.name}`}
                  <img
                    style={{ width: "15px", height: "15px" }}
                    onClick={() => {
                      setTeamData(teamData.filter((el) => temp !== el.id));
                    }}
                    src="https://avatars.mds.yandex.net/i?id=e51c0bb71789882fb6fc9e3608f8c47904342b10-7593510-images-thumbs&n=13&exp=1"
                    alt=""
                  />
                </div>
              );
            })}
          </ol>
          <div>
            <button
              onClick={() => {
                setCount(count + 1);
              }}
            >
              +1
            </button>
            <button
              onClick={() => {
                setCount(count - 1);
              }}
            >
              -1
            </button>
            <button
              onClick={() => {
                setTeamData(teamData.filter((el) => el.id !== count));
              }}
            >
              Del
            </button>
            <p>{count}</p>
          </div>
        </div>
      </>
    </div>
  );
}

export default App;

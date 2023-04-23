import { useEffect, useState } from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";

import "./Posts.css";
function Posts() {
  const [data, setData] = useState(null);

  useEffect(() => {
    getData(0);
  }, []);

  function getData(skip) {
    console.log("skip", skip);
    fetch(`https://dummyjson.com/posts?skip=${30 * skip}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("api data", data);
        setData(data);
      })
      .catch((error) => {
        // handle the error
      });
  }
  const getButton = (total) => {
    console.log(total);
    let arr = [];
    for (let i = 0; i < total; i++) {
      arr.push(
        <button onClick={() => getData(i)} key={i + 1}>
          {i + 1}
        </button>
      );
    }
    return arr;
  };

  console.log("sate data", data);
  return (
    <div>
      {data?.total && getButton(data?.total / 30)}
      {data?.posts.map((value) => (
        <Paper elevation={3} className="posts-wrap">
          <h3>
            {value.id}. {value.title}
          </h3>
          <p>{value.body}</p>
          <ul className="tags-wrap">
            {value?.tags.map((tag) => (
              <Chip label={tag} />
            ))}
          </ul>
        </Paper>
      ))}
    </div>
  );
}

export default Posts;

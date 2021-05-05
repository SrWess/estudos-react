import "./App.css";
import { Component } from "react";

class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        title: "O Título 1",
        body: "O Corpo 1",
      },
      {
        id: 2,
        title: "O Título 2",
        body: "O Corpo 2",
      },
      {
        id: 3,
        title: "O Título 3",
        body: "O Corpo 3",
      },
    ],
  };

  render() {
    const { posts } = this.state;

    return (
      <div className="App">
        {posts.map((post) => {
          return (
            <div key={post.id}>
              <h1>{post.title}</h1>
              <p>{post.body}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;

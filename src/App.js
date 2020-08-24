import React,{useState} from 'react';
import './App.css';
import Post from './Post';

function App() {
  const [posts,setPosts] = useState([
    {
      username:"Devika",
      caption: "Hey!that's a nice pic",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQJZlDVUEdSV2nk8rVT6zqtz-C_eybL6I9_Hg&usqp=CAU"
    },
    {
      username:"Bob",
      caption:" nice pic",
      imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQJZlDVUEdSV2nk8rVT6zqtz-C_eybL6I9_Hg&usqp=CAU"
    }
  ]);

  return (
    <div className="App">
      <div className="app__header">
     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeQDsRz6wVMibHV_cS4c_JMDo97Pg9JMQ-5s80QsmrrIW2gkis&s" alt="Logo" className="app__headerImage"/>  
   
      </div>
      <h1>Welcome to my react app</h1>
    {
    posts.map(post => (
     <Post username={post.username} caption={post.caption} imageUrl={post.imageUrl}/>
    )

    )}
   
    </div>
  );
}

export default App;

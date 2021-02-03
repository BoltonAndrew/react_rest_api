import './App.css';
import { useEffect, useState } from 'react';
import LoginBox from './Login/index';
import Feed from './Feed/index';
import Post from './Post/index';

function App() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [currentUser, setCurrentUser] = useState({});
  const [posts, setPosts] = useState();
  const [isLoaded, setIsLoaded] = useState(false);
  const [userLoaded, setUserLoaded] = useState(false);
  const [postVal, setPostVal] = useState("");

  useEffect(() => {
    postRequest()
  }, []);

  const postChange = (event) => {
    setPostVal(event.target.value)
  };

  const postRequest = async () => {
    const response = await fetch("http://localhost:5000/posts")
    const data = await response.json();
    setPosts(data)
    setIsLoaded(true)
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (event.target.name === 'login') {
    const loginObj = {name: user, password: pass};
    fetchUser(loginObj);
    setUser("");
    setPass("");
    } else {
      console.log("else clause")
      savePost(event);
      setPostVal("");
    }
  };

  const onChange = (event) => {
    if (event.target.name === 'userName') {
      setUser(event.target.value);
    } else {
      setPass(event.target.value);
    };
  };

  const submitPost = (event) => {
    event.preventDefault();
    savePost();
  }

  const fetchUser = async (loginObj) => {
    try {
      const response = await fetch(`http://localhost:5000/users/${loginObj.name}`);
      const data = await response.json();
      if (loginObj.password === data[0].password) {
        setCurrentUser({name: data[0].name, id: data[0]._id});
        setUserLoaded(true);
      }
    } catch (error) {
      
    }
    
  }

  const savePost = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch(`http://localhost:5000/posts/${currentUser.id}`,
      {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({content: postVal})
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log("I didn't post")
    }
  }

  let isDisabled = user === "" && pass ==="";
  return (
    <div className="App">
      <LoginBox handleSubmit={handleSubmit} onChange={onChange} userVal={user} passVal={pass} isDisabled={isDisabled}></LoginBox>
      <Post onSubmit={handleSubmit} postVal={postVal} onChange={postChange}/>
      <Feed isLoaded={isLoaded} content={posts}/>
    </div>
  );
}

export default App;

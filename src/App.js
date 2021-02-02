import './App.css';
import { useEffect, useState } from 'react';
import LoginBox from './login/index';
import Feed from './feed/Feed';

function App() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [login, setLogin] = useState({});
  const [userList, setUserList] = useState();
  const [currentUser, setCurrentUser] = useState("");
  const [posts, setPosts] = useState();
  const [isLoaded, setIsLoaded] = useState(false);
  const [userLoaded, setUserLoaded] = useState(false);

  useEffect(() => {
    postRequest()
  }, []);

  const postRequest = async () => {
    const response = await fetch("http://localhost:5000/posts")
    const data = await response.json();
    setPosts(data)
    setIsLoaded(true)
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLogin({name: user, password: pass});
    fetchUser(login);
    setUser("");
    setPass("");
  };

  const onChange = (event) => {
    if (event.target.name === 'userName') {
      setUser(event.target.value);
    } else {
      setPass(event.target.value);
    };
  };

  const fetchUser = async (loginObj) => {
    const response = await fetch("http://localhost:5000/users", {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Conent-Type': 'application/json'
      },
      body: JSON.stringify(loginObj)
    });
    const data = await response.json();
    console.log(data);
    // if (data.name === loginObj.name) {
    //   setUserLoaded(true)
    //   return data;
    // } else {
    //   return console.log("error");
    // }
    
  }

  let isDisabled = user === "" && pass ==="";
  return (
    <div className="App">
      <LoginBox handleSubmit={handleSubmit} onChange={onChange} userVal={user} passVal={pass} isDisabled={isDisabled}></LoginBox>
      <Feed isLoaded={isLoaded} content={posts}/>
    </div>
  );
}

export default App;

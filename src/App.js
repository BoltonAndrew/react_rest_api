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

  useEffect(() => {
    fetch("http://localhost:5000/posts")
    .then((res) => res.json())
    .then((data) => {
      setPosts(data)
      setIsLoaded(true)
    })
  }, []);

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   setLogin({name: user, password: pass});
  //   setUser("");
  //   setPass("");
  // };

  // const onChange = (event) => {
  //   if (event.target.name === 'userName') {
  //     setUser(event.target.value);
  //   } else {
  //     setPass(event.target.value);
  //   };
  // };

  // const fetchAPI = async () => {
  //   const response = await fetch("http://localhost:5000/users");
  //   const data = await response.json();
  //   setUserList(data);
  // }

  // let isDisabled = user === "" && pass ==="";
  return (
    <div className="App">
      {/* <LoginBox handleSubmit={handleSubmit} onChange={onChange} userVal={user} passVal={pass} isDisabled={isDisabled}></LoginBox> */}
      <Feed isLoaded={isLoaded} content={posts}/>
    </div>
  );
}

export default App;

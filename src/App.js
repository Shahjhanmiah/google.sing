import './App.css';
import { getAuth, GithubAuthProvider, GoogleAuthProvider, SignInMethod, signInWithPopup, signOut } from "firebase/auth";
import app from './firebase/firebase.inti';
import { useState } from 'react';
const auth = getAuth(app);

function App() {
  const [user,setUser] = useState({});
  const googleprovider = new GoogleAuthProvider();
  const githubProvider  = new GithubAuthProvider();
  const handleGooleSingIn = ()=>{
    signInWithPopup(auth,googleprovider)
    .then(result=>{
      const user = result.user;
      setUser(user)
      console.log(user);

    })
    .catch(error=>{
      console.error('error',error)
    })
   



  }
  const handleGooleSingou =() =>{
    signOut(auth)
    .then(()=>{
      setUser({});

    })
    .catch(()=>{
      setUser({});

    })
    


  }
  const handleGithubSingIn=()=>{
    signInWithPopup(auth,githubProvider)
    .then(result =>{
      const user = result.user;
      setUser(user)
      console.log(user)
    })
    .catch(error=>{
      console.error('error',error)
    })


  }
  return (
    <div className="App">
      {/* { condtion ? ture:false} */}
      {user.uid  ?
      <button onClick={handleGooleSingou}>sing out</button>
      :
      <>
         <button onClick={handleGooleSingIn}>Goole Sing In </button>
         <button onClick={handleGithubSingIn}>Github Sing In </button>
      </>
      }
      {user.name}
     { user.uid && <div>
      <h3>User name:{user.displayName}</h3>
      <p>Email adders:{user.email}</p>
      <img src={user.photoURL}alt=""></img>
      
     
  
     </div>}
     
    </div>
  );
}

export default App;

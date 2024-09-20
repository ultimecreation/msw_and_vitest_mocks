import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [user, setUser] = useState({
    id: 0,
    firstname: "Jean"
  })
  useEffect(() => {
    fetch("/api/users")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUser(data);
      });
  }, []);
  return (
    <>
      <div>
        {user && <p>{user.firstname}</p>}
      </div>
    </>
  )
}

export default App

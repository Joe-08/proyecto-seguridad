import './App.css';
import { useEffect, useState } from 'react';
import Axios from 'axios';

function App() {
  const [password, setPassword] = useState("");
  const [site, setSite] = useState("");
  const [passwordList, setPasswordList] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:8080/showpasswords").then((response) => {
      setPasswordList(response.data);
    });
  }, []);

  const addPassword = () => {
    Axios.post("http://localhost:8080/addpassword", {
      password: password, 
      site: site,
    });
  };

  const decriptarPassword = (encryption) => {
    Axios.post("http://localhost:8080/decryptpassword", {password: encryption.password, iv: encryption.iv}).then((response) =>{
      setPasswordList(
        passwordList.map((val)=>{
        return val.id === encryption.id 
        ? {
            id: val.id,
            password: val.password,
            site: response.data,
            iv:val.iv
        }: val; 
      })
      );
    });
    
  };

  return (
    <div className="App">
      <div className="addingPassword">
        <input 
          type="text" 
          placeholder="*********" 
          onChange={(event) => {
          setPassword(event.target.value);
        }}/>
        <input 
          type="text" 
          placeholder='ej: Facebook' 
          onChange={(event) => {
          setSite(event.target.value);
        }}/>
        <button onClick={addPassword}>Añadir cuenta</button>
      </div>

      <div className="Contras">
        {passwordList.map((val,key) => {
          return (
            <div className="contra" onClick={()=>{
              decriptarPassword({
                password:val.password,iv:val.iv, 
                id: val.id,
              })
              }} 
              key={key}>
              <h3>{val.site}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;

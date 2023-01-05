import { useContext } from "react"
import { AppContext } from "../App"
import "../App.css";
import { useNavigate } from 'react-router-dom';
export const Search = ()=>{
    const navigate = useNavigate();
    const {userInput,setUserInput} = useContext(AppContext);
    async function LogUser (){
        navigate('/profile');
    };

    return (
    <div className="App w-100 min-vh-50 justify-content-center align-items-center d-flex flex-column">
    <form onSubmit={LogUser}><br></br>
        <input 
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            type="text" 
            placeholder="User Name"/>
            <br></br>
        <input type="submit" value="Search"/>
      </form>
      </div>
    );
}


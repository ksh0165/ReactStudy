import {useState} from 'react';
import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

export default function Auth ({LoginOn}) {
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [error,setError] = useState("");
    // const navigate = useNavigate();
    const onChange = (e) =>{
        const { target: {name,value},} = e;
        if(name === "username"){
            setUsername(value);
        }else if(name === "password"){
            setPassword(value);
        }
    }

    const onSubmit= async (e)=>{
        e.preventDefault();
        try{

            const response = await axios.get(
                '/users',
                {
                    params:{
                        username:username,
                        password:password
                    }
                },
                { withCredentials: true }
            )
            .then(function (response){
                console.log(response.data);
                if(response.data.isLoggedIn === true){
                    LoginOn(true);
                }else{
                    setError("다시 로그인을 하시기 바랍니다.");
                    // window.location.reload();
                }
            }).catch(function (err){
                setError("인증에 실패하였습니다.");
            }).then(function(){

            })
        }catch(err){
            console.log(err);
        }
    }
    return (<div>
        <form onSubmit={onSubmit}>
            <table>
            <tbody>
            <tr>
                <td>
                <input type="text" name="username" placeholder="username" value={username} required onChange={onChange} />
                </td>
                <td><input type="password" name="password" placeholder="password" value={password} required onChange={onChange}/></td>
                <td><input type="submit" value="Log In" /></td>
                <td>{error}</td>
            </tr>
            </tbody>
            </table>
        </form>
    </div>
    )
}
import React, { useState, useEffect } from 'react'
import * as S from "./main.style"
import axios from 'axios';
import { FaSearch } from "react-icons/fa";

export default function Main() {
    const [username, setUsername] = useState('');
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://api.github.com/search/users?q=${username}`);
                setUserData(response.data.items);
            } catch (error) {
                console.error(error);
            }
        };

        if (username) {
            fetchData();
        }
    }, [username]);

    const handleInputChange = (event) => {
        setUsername(event.target.value);
    };

    return (
        <S.MainContainer>
            <div className="input-container">
                <FaSearch className="icon" />
                <input
                    type="text"
                    placeholder="Enter Gitub Username..."
                    value={username}
                    onChange={handleInputChange}
                />
            </div>

            {userData.map(user => (



                <div className="card" key={user.id}>
                    <img src={user.avatar_url} alt={user.login} className="avatar"/>
                        <div>
                            <div class="username">{user.login}</div>
                            <div class="description">{user.html_url}</div>
                        </div>
                </div>
            ))}
        </S.MainContainer>
    )
}

import React, { useState, useEffect } from 'react';
import TitlePage from '../../components/TitlePage';
import userService from '../../services/user.service';

const Index = () => {
    const [user, setUser] = useState();

    useEffect(() => {
        userService.getMe(localStorage.getItem('jwt')).then((data) => {
            setUser(data)
        }).catch(err => console.log(err));
    }, []);

    return (
        <div>
            <TitlePage title="Profil" />
            {user ? (<>
                <p>You are logged in</p>
                <ul>
                    <li>
                        Username : {user.username}
                    </li>
                    <li>
                        Email : {user.email}
                    </li>
                </ul>
                <p></p>
            </>) : <p>Not logged in</p>}
        </div>
    );
}

export default Index;

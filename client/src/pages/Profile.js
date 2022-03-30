import React, { useContext } from 'react'; 
import { UserContext } from '../UserContext';

export default function Profile(){
    const { user, setUser } = useContext(UserContext);
    console.log('user',user);

    return(
        <div>
            <h2>
                <pre>{JSON.stringify(user, null, 2)}</pre>
            </h2>
        </div>

    )
}
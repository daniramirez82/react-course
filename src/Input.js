import React, { useState } from "react";

export default function Input() {


    const [user, setUser] = useState('');

    const userInputHandler = (e) => {
        setUser(e.target.value);
    }


    return <div>
        <p>hola</p>
        <div class='form-wrapper'>
            <form>
                <input type="text" onChange={userInputHandler} value={user} placeholder='Introduzca su Usuario: ' />
                <p>{user}</p>

            </form>

        </div>
    </div>
}
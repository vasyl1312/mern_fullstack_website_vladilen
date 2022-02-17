import React, { useState } from 'react'

export const AuthPage = () => {
    const [form, setForm] = useState({
        email:"", password:""
    })

    const changeHandler = event => {
        setForm({...form, [event.target.value]:event.target.value})
    }

    return (
        <div className="row">
            <div className="col s6 offset-s3">
             <h1>Скороти посилання</h1>
                <div className="card blue darken-1">
                <div className="card-content white-text">
                 <span className="card-title">Авторизація</span>
                <div>

                <div className="input-field">
                 <input 
                    placeholder="Введіть email" 
                    id="email" 
                    type="text" 
                    name="email" 
                    className="yellow-input"
                    onChange={changeHandler}
                    />
                  <label htmlFor="email">Email</label>
                 </div>

                 <div className="input-field">
                 <input 
                    placeholder="Введіть пароль" 
                    id="password" 
                    type="password"
                    name="password" 
                    className="yellow-input"
                    onChange={changeHandler}
                    />
                  <label htmlFor="email">Пароль</label>
                 </div>

                  </div>
                </div>
                 <div className="card-action">
                    <button className="btn yellow darken-4" style={{marginRight: 10}}>Увійти</button>
                    <button className="btn grey lighten-1 black-text">Реєстрація</button>

                </div>
            </div>
            </div>
        </div>
    )
}
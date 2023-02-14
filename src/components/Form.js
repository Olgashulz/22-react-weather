import React from 'react';

const Form = () => {
    const API_key = "ff89388582a94f447599d070fdb8f3ea";

    const getCity = e => {
        e.preventDefault();
        const city = e.currentTarget.city.value;
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}`, {
            method: "GET",
        }).then(data => data.json())
            .then(res => {
                    const date = new Date(res.sys.sunset * 1000);
                    console.log(`Location: ${res.sys.country}, ${res.name},
                    Temp: ${res.main.temp},
                    Pressure: ${res.main.pressure},
                    Sunset: ${`${date.getHours()}:${date.getMinutes()}`}`)
                }
            )
            .catch(data => console.log(data.error))
    }
    return (
        <form onSubmit={getCity}>
            <input type='text' name='city' placeholder='City'/>
            <button type='submit'>Get weather</button>
        </form>
    );
};

export default Form;
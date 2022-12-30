import React, { useEffect, useState }  from "react";
import"./css/style.css";
const Weather=() =>{
    const [city,setCity]= useState(null);
    const [search,setSearch]= useState(null);
    useEffect(()=>{
        const fetchApi=async() =>{
            const url=`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=ebef0d0bcc4881c7e1da81efc26575b3`
            const response=await fetch(url);        
            
            const resJson=await response.json();
            console.log(resJson);
            setCity(resJson.main);
        }
        fetchApi();
    },[search])
    return(
        <>
        <div className="box">
                <div className="inputData">
                    <input type="search" 
                    className="inputFeild" 
                    onChange={ (event)=> {
                        setSearch(event.target.value);

                    }
                    }/>
                   
                </div>
                {!city ?(
                    
                    <p>Try a valid city name</p>
                ):(
                    <div>
                   <div className="info">
                   
                    <h2 className="location">  {search}</h2>            
                    <i class="fa-solid fa-temperature-quarter"></i>
                    <h1 className="temp">
                     {city.temp} °C
                    </h1>
                    <h3 className="tempmin_max">MIN :  {city.temp_min} °C | MAX :  {city.temp_max} °C </h3>
        </div>
        <div className="wave -one"> </div>
        <div className="wave -two"> </div>
        <div className="wave -three"> </div>
        </div> 
                )}
        
        </div>
        </>
    )
}

export default Weather;
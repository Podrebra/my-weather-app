// https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude=daily&appid=5755719e107c47b84233566bace61e1c

export const getWeather = (latitude, longitude) => {
   return fetch (`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=84d9839ad4b0de3da74502c024adb8b2`)
        .then(res => res.json());
    
};
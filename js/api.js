const API_KEY = "27f7da905509f504d2ee2b454e3dedcf";
// fonksiyon sehir ve birim bilgilerini parametre olarak alır
async function fetchWeatherData(city, units) {
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`
        );
        // console.log(response.json());
        //eğer istek başarılı değilse hata fırlat
        if (!response.ok) {
            throw new Error('İstek başarılı değil');
        }
        // api den gelen yanıtı json formatına dçnüştür ve geri dündür
        return response.json();
        // console.log(response);
    } catch (error) {
        console.log(error);
    }
}
// fetchweatherdate fonksiyonunu diğer dosyalarda kullanılabilir hale getirir.
export default fetchWeatherData;
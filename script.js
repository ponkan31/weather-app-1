
function getWeather() {
    const apiKey = '2a7a11ec8ad43ced2691fd869884159a'
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=34.48954377230958&lon=133.36166329827313&appid=${apiKey}&lang=ja`;
    

    // urlからデータを読み込む
    fetch(url)
    // URLの読み込みに成功したら、responseに渡して整形
        .then(response => {
    // json配列
            return response.json() 
        })

    // 整形したデータをここで渡す
        .then(data => {
            console.log(data)
            // データの中の気温を代入
            const temperature = data.main.temp;
            // ケルビンを摂氏表示に変換
            const temperatureInCelsius = (temperature - 273.15).toFixed(1);
            // データの中の概要を代入
            const description = data.weather[0].description;

            const weatherInfo = `気温: ${temperatureInCelsius}℃, 天気: ${description}`;
            // HTMLから要素取得
            const weatherInfoElement = document.getElementById('weather-info');
            

            //条件式： 'hide'というクラスが含まれているかどうか
            if(weatherInfoElement.classList.contains('hide')){
                // テキストの中身をweatherInfoに変更
                weatherInfoElement.textContent = weatherInfo;
                // hideというクラスを削除
                weatherInfoElement.classList.remove('hide');
            } else {
                // 天気情報を空にする
                weatherInfoElement.textContent = '';
                // hideというクラスを追加
                weatherInfoElement.classList.add('hide');
            }

        
    
        })


    // 通信にエラーが出た場合
        .catch(error => {
            console.log(error)
        })

    // fetchメソッドはurlを読み込んだら、次のthenに行く
}

const button = document.getElementById('button');
button.addEventListener('click', function(event) {
  event.preventDefault();
  getWeather();
});
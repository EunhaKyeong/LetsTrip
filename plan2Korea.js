city_arr = ['chungnam', 'jeju', 'gyeongnam', 'gyeongbuk', 'jeonbuk', 'chungbuk', 'gangwon', 'gyeonggi', 'jeonnam', 
            'ulsan', 'busan', 'daegu', 'daejeon', 'incheon', 'seoul', 'gwangju', 'sejong'];

function mouseOver(city) {
    var cityId = document.getElementById(city);
    cityId.style.fill = "#E8D6AD";
    var cityText = document.createElement( 'text' );
    cityText.setAttribute('x', '10');
    cityText.setAttribute('y', '20')
    var cityTextContent = document.createTextNode(city);
    cityText.appendChild( cityTextContent );
    cityId.appendChild( cityText );
}

function mouseOut(city) {
    var cityId = document.getElementById(city);
    //var tagText = cityId.getElementsByTagName('text')[0];
    cityId.style.fill = "#ffffff";
    //cityId.removeChild(tagText);
}
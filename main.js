const getWomanData = () => {

    return fetch("https://gist.githubusercontent.com/brendalong/ab2424b0069ed0dd56b01951462a109d/raw/716c0776c45adea089644cffa7eadab139f9f47c/womensday.json")
        .then(response => response.json())
        .then(parsedResponse => {
            return parsedResponse;
        })
}

const womanData = getWomanData();

console.log("women data", womanData);


const womenList = () => {

    const DOMLocation = document.querySelector("#womanCard");
    console.log("card dom location", DOMLocation);

    let womenHTMLRepresentations = "";

    for (const oneWoman of womanData) {
        womenHTMLRepresentations += womanData(oneWoman);
        DOMLocation.innerHTML = womenHTMLRepresentations
    }
}  

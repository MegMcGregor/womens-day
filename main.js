let getWomanData = () => {

    return fetch("https://gist.githubusercontent.com/brendalong/ab2424b0069ed0dd56b01951462a109d/raw/716c0776c45adea089644cffa7eadab139f9f47c/womensday.json")
        .then(response => response.json())
}


let womanDataArray = getWomanData()
    .then(parsedResponse => {
    console.log(parsedResponse);
})

const applicationElement = document.querySelector("main");
applicationElement.addEventListener("click", (event) => {
    console.log("clicked on main", event)

});

applicationElement.addEventListener("click", event => {
    if (event.target.id.startsWith("learnmore")){
        const splitId = event.target.id.split("--");
        console.log("what is splitId", splitId);
        console.log("I want to learn more about id:", splitId[0])
    }
});


const showWomenDetail = (detailObj) => {
    return `
		<article>
			
			<h2> ${detailObj.invention}</h2>
			<p>${detailObj.inventor}</p>
			<p><a href="${detailObj.moreDetails}">More Details</a></p>
			<button id="learnmore--${detailObj.id}">Learn More</button>
			<button id="delete--${detailObj.id}">Delete</button>
		</article>
	`
}

let womanList = () => {

    getWomanData()
        .then(response => {
            for (const oneWoman of response) {
            document.querySelector("main").innerHTML += showWomenDetail(oneWoman);
            }
        })
}

womanList();


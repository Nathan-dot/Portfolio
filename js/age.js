let ageEl = document.getElementById("age");

setInterval(() => {
	let time = (new Date() - new Date(1060902506728)) / (1000 * 60 * 60 * 24 * 365.25); // milliseconds per year
	ageEl.innerText = time.toString().substring(0, 12);
}, 50);


// 1044801960000
// 19.42378...
// 18.913..
// 19.42378....

// (1657769839728 - x) / (1000*60*60*24*365.25) = 

// 18.913584475
const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	let sum = 0
	const table = document.querySelector('table')
	const prices = document.querySelectorAll('.price')
	function  total(){
	for(let price of prices){
		sum += parseInt(price.innerText)
		
	}
	const tablerow = document.createElement('tr')
	const tabledata = document.createElement('td')
	tabledata.class = 'ans'
	table.colSpan = 2
	tabledata.innerText = `Total price is  ${sum}`
	tablerow.appendChild(tabledata)
	table.appendChild(tablerow)
	}
	total()
	
  
};

getSumBtn.addEventListener("click", getSum);


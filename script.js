class sortAlgorithm {
	elementArray = [];
	length = 0;
	intevalId;

	constructor(length){
		this.length = length
	}

	init(){

	}


	createElementArray(){
		if(this.length > 100) this.length = 100
		else if(this.length < 0) this.length = 0
		for(let i = 0; i< this.length; i++){
			this.elementArray.push(Math.floor(Math.random() * 100))
		}

	}

	showElementsUI (){
		document.getElementById('elementosDel').innerText = this.elementArray.join(' ')
		const containerElements = document.getElementById('toSort')
		containerElements.innerHTML = ''
		containerElements.setAttribute('style', 'grid-template-columns: repeat('+ this.length + ', 1fr);')
		for(let i = 0; i < this.length; i++){
			const column = document.createElement('div');
			column.className = 'column'
			column.style.height = `${this.elementArray[i]*2}px`
			containerElements.appendChild(column)

		}
	}

	bubleSort (){
		let i = 0;
		let j = 0;
		this.intevalId = setInterval(() => {
			this.showElementsUI()
				document.getElementsByClassName('column')[i].style.backgroundColor = 'red'
				if(this.elementArray[i] > this.elementArray[i+1]){
					let temp = this.elementArray[i]
					this.elementArray[i] = this.elementArray[i+1]
					this.elementArray[i+1] = temp
				}
			i++;
			if(i >= this.length - j ) {
				j++;
				i = 0
			}
			if(j >= this.length - i){
				this.stopSort()
			}


		}, 10)

	}

	stopSort(){
		clearInterval(this.intevalId)
		document.getElementById('elementosDel').innerText = this.elementArray.join(' ')	}

}

let length = 20

algo = new sortAlgorithm(length)
algo.createElementArray();
algo.showElementsUI()

document.getElementById('viewbutton').addEventListener('click', e => {
	algo.stopSort();
	algo.bubleSort()
})

document.getElementById('newbutton').addEventListener('click', e => {
	algo.stopSort();
	algo = new sortAlgorithm(length)
	algo.createElementArray();
	algo.showElementsUI()
})

document.getElementById('stopButton').addEventListener('click', e => {
	algo.stopSort();

})


document.getElementById('length').addEventListener('input',  e => {
	length = e.target.value
})
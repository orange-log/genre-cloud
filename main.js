(function() {

	loadJSON(function(response) {
		let arr = prepareArr(JSON.parse(response));
		renderCloud(arr.sort().reverse());
	});

	function prepareArr(json) {
		let arrCompltGenre = [],
				arr = [];
		for (let i = json.length - 1; i >= 0; i--) {
			arrCompltGenre.push(json[i].Genre);
		}
		let arrUniqGenre = [...new Set(arrCompltGenre)];
		for (let i = arrUniqGenre.length - 1; i >= 0; i--) {
			let count = 0;
			for (let j = arrCompltGenre.length - 1; j >= 0; j--) {
				if (arrUniqGenre[i] === arrCompltGenre[j]) {
					count++;
				}
			}
			arr.push([arrUniqGenre[i], count]);
		}
		return arr;
	}

	function renderCloud(arr) {
		let el = document;
		let clazz = 'genre-cloud__genre';
		for (let i = 0; i < 9; i++) {
			let found = false,
					middle = el.querySelectorAll('.'+clazz).length / 2;
			el = el.querySelector('.'+clazz+':nth-child('+Math.ceil(middle)+')');
			if(i === 0) {
				el = document.querySelector('.genre-cloud__cloud');
				el.innerHTML = '';
			}
			for (let j = arr.length - 1; j >= 0; j--) {
				if(arr[j][1] < (i+1)*10 && arr[j][1] >= i*10 && arr[j][0] !== 'None') {
					let genre = arr[j][0].replace(' ','&nbsp;').replace('/Downtempo','/ Downtempo');
					el.innerHTML += ` <span class="${clazz}">&nbsp;${genre}&nbsp;</span>`;
					found = true;
				}
			}
			if(!found) el.innerHTML += ` <span class="${clazz}"/>`;
		}
	}

	function loadJSON(callback) {
		var xobj = new XMLHttpRequest();
		xobj.overrideMimeType('application/json');
		xobj.open('GET', 'genre-cloud.json', true);
		xobj.onreadystatechange = function() {
			if (xobj.readyState == 4 && xobj.status == '200') {
				callback(xobj.responseText);
			}
		};
		xobj.send(null);
	}
})();
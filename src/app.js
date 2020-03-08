// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
('use strict');

export class GalacticAge {
	constructor(name, yearsOld) {
		this.name = name;
		this.yearsOld = yearsOld;
		this.life = 82;
	}

	earthAge() {
		const earthYears = this.yearsOld;
		return earthYears;
	}

	mercuryAge() {
		const mercYears = Math.floor(this.yearsOld / 0.24);
		return mercYears;
	}

	venusAge() {
		return Math.floor(this.yearsOld / 0.62);
	}

	marsAge() {
		return Math.floor(this.yearsOld / 1.88);
	}

	jupiterAge() {
		return Math.floor(this.yearsOld / 11.86);
	}

	lifeExpectancy(planet) {
		if (planet.toLowerCase() == 'earth') {
			let result = this.life - this.yearsOld;
			return `You have ${result} Earth years left to live on Earth.`;
		} else if (planet.toLowerCase() == 'mercury') {
			let result = this.life / 0.24 - this.yearsOld / 0.24;
			return `You have ${result} Mercury years left to live on Mercury.`;
		} else if (planet.toLowerCase() == 'venus') {
			let result = this.life / 0.62 - this.yearsOld / 0.62;
			return `You have ${result} Venus years left to live on Venus.`;
		} else if (planet.toLowerCase() == 'mars') {
			let result = this.life / 1.88 - this.yearsOld / 1.88;
			return `You have ${result} Mars years left to live on Mars.`;
		} else if (planet.toLowerCase() == 'jupiter') {
			let result = this.life / 11.86 - this.yearsOld / 11.86;
			return `You have ${result} Jupiter years left to live on Jupiter.`;
		} else {
			console.log('Please input a valid planet!');
		}
	}
}

const firstTest = new GalacticAge('luke', 30);
console.log(firstTest.mercuryAge());
console.log(firstTest.venusAge());
console.log(firstTest.marsAge());
console.log(firstTest.jupiterAge());
console.log(firstTest.lifeExpectancy('earth'));
console.log(firstTest.lifeExpectancy('MERCURY'));
console.log(firstTest.lifeExpectancy('mars'));
console.log(firstTest.lifeExpectancy('jupiter'));

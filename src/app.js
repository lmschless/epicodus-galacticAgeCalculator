// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
('use strict');

export class GalacticAge {
	constructor(name, yearsOld) {
		this.name = name;
		this.yearsOld = yearsOld;
		this.life = 82;
	}

	earthAge(yearsOld) {
		const earthYears = yearsOld;
		return parseInt(earthYears);
	}

	mercuryAge(yearsOld) {
		const mercYears = Math.floor(yearsOld * 0.24);
		return mercYears;
	}

	venusAge(yearsOld) {
		return Math.floor(yearsOld * 0.62);
	}

	marsAge(yearsOld) {
		return Math.floor(yearsOld * 1.88);
	}

	jupiterAge(yearsOld) {
		return Math.floor(yearsOld * 11.86);
	}

	lifeExpectancy(planet) {
		// const earthLeft = 82 - earthYears;
		// console.log(earthYears);
		// const mercLeft = this.lifeExpectancy - mercYears;
		// return this.life - this.earthYears;
		if (planet.toLowerCase() == 'earth') {
			return this.life - this.yearsOld;
		} else if (planet.toLowerCase() == 'mercury') {
			return this.life / 0.24 - this.yearsOld / 0.24;
		} else if (planet.toLowerCase() == 'venus') {
			return this.life / 0.62 - this.yearsOld / 0.62;
		} else if (planet.toLowerCase() == 'mars') {
			return this.life / 1.88 - this.yearsOld / 1.88;
		} else if (planet.toLowerCase() == 'jupiter') {
			return this.yearsOld / 11.86 - this.life / 11.86;
		} else {
			console.log('Please input a valid planet!');
		}
		// return life - earthYears;
	}

	// return life - earthYears;
}

const firstTest = new GalacticAge('luke', 30);
console.log(firstTest.lifeExpectancy('earth'));
console.log(firstTest.lifeExpectancy('MERCURY'));
console.log(firstTest.lifeExpectancy('mars'));
console.log(firstTest.lifeExpectancy('jupiter'));

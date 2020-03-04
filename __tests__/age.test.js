import { GalacticAge } from '../src/app.js';

describe('GalacticAge', () => {
	test('Make sure new GalacticAge class is created correctly.', () => {
		const galacticAge = new GalacticAge('luke', 30);
		expect(galacticAge.name).toEqual('luke');
		expect(galacticAge.yearsOld).toEqual(30);
	});
});

describe('CalculateAge', () => {
	let myAge;
	beforeEach(() => {
		myAge = new GalacticAge('Luke', 30);
	});
	test('Make sure calculateAge method is working correctly for Earth', () => {
		expect(myAge.earthAge(myAge.yearsOld)).toEqual(30);
	});
	test('Make sure calculateAge method is working correctly for Mercury', () => {
		expect(myAge.mercuryAge(myAge.yearsOld)).toEqual(7);
	});
	test('Make sure calculateAge method is working correctly for Venus', () => {
		expect(myAge.venusAge(myAge.yearsOld)).toEqual(18);
	});
	test('Make sure calculateAge method is working correctly for Mars', () => {
		expect(myAge.marsAge(myAge.yearsOld)).toEqual(56);
	});
	test('Make sure calculateAge method is working correctly for Jupiter', () => {
		expect(myAge.jupiterAge(myAge.yearsOld)).toEqual(355);
	});
});

describe('lifeExpectancy', () => {
	let myAge;
	beforeEach(() => {
		myAge = new GalacticAge('Luke', 30, 100);
	});
	test('Make sure lifeExpectancy method is working correctly.', () => {
		expect(myAge.lifeExpectancy(myAge)).toEqual(52);
	});
});

// describe('Battle', () => {
// 	let firstBattle;
// 	let firstGame;
// 	beforeEach(() => {
// 		firstGame = new Game();
// 		firstBattle = new Battle(firstGame.getCharacter(0), firstGame.getCharacter(1));
// 	});
// 	test('Make sure Battle object is created correctly.', () => {
// 		expect(firstGame.getCharacter(0).name).toEqual('michael');
// 		expect(firstGame.getCharacter(1).name).toEqual('luke');
// 	});
// 	test('Make sure there is a winner.', () => {
// 		const result = firstBattle.startFight();
// 		expect(result).toMatch('has won');
// 	});
// 	test('Make sure the random number generator is working, all values should be greater than 0.', () => {
// 		let arr = [];
// 		for (let i = 1; i < 1000; i++) {
// 			let rand = firstBattle.rand(10);
// 			let count = arr[rand] ? arr[rand] + 1 : 1;
// 			arr[rand] = count;
// 		}
// 		let result = true;
// 		arr.forEach(function(num) {
// 			if (num <= 0) result = false;
// 		});
// 		expect(result).toBeTruthy();
// 	});
// 	test('Make sure there is a truthy value for experience.', () => {
// 		firstBattle.startFight();
// 		expect(firstGame.getCharacter(0).experience >= 1 || firstGame.getCharacter(1).experience >= 1).toBeTruthy();
// 	});
// 	test('Make sure result is true when 100 strength is passed in, and false when 0 strength is passed in.', () => {
// 		expect(firstBattle.chanceToHit(100)).toBeTruthy();
// 		expect(firstBattle.chanceToHit(0)).toBeFalsy();
// 	});
// });
import { Component } from '@angular/core';

@Component({
	selector: 'app-animal-list',
	templateUrl: './animal-list.component.html'
})
export class AnimalListComponent {

	private animals: any[];
	
	constructor() {
		this.animals = [
	{
		breed : 'Zebra',
		name: 'zebrusa',
		birthDate: '1999'
	},

	{
		breed : 'Sova',
		name: 'sovulja',
		birthDate: ''
	},

	{
		breed : 'Zirafa',
		name: 'zirafusa',
		birthDate: '1998'
	},
	{
		breed : 'Morz',
		name: 'morzulja',
		birthDate: '1994'
	},
	{
		breed : 'Konj',
		name: 'konjulja',
		birthDate: '2001'
	}

	];
	}

	remove(animal) {
		const index = this.animals.indexOf(animal);
		this.animals.splice(index , 1);
	}
}
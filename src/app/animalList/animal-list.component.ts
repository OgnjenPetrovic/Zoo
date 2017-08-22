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
		birthDate: '1986'
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

	//remove(contact) {
	//	const index = this.contacts.indexOf(contact);
	//	this.contacts.splice(index , 1);
	//}
}
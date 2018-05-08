//Creates the class of Employees to be used when taking in data. Utilizes the Address class

import { Address } from './address';

export class Employee
{
	id: string;
	firstName: string;
	lastName: string;
	dateOfBirth: string;
	hobbies: string[];
	address: Address;
	imageUrl: string;
	salary: number;
	isCanadian: boolean;
}
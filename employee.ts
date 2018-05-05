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
interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

let student1: Student = {
	firstName: 'John',
	lastName: 'Doe',
	age: 20,
	location: 'Cairo'
};

let student2: Student = {
	firstName: 'Jane',
	lastName: 'Doe',
	age: 22,
	location: 'Alexandria'
};

let studentsList: Student[] = [student1, student2];

let table: HTMLTableElement = document.createElement('table');
studentsList.forEach((student: Student) => {
	let row: HTMLTableRowElement = table.insertRow();
	let cell1: HTMLTableCellElement = row.insertCell();
	let cell2: HTMLTableCellElement = row.insertCell();
	cell1.textContent = student.firstName;
	cell2.textContent = student.location;
});
document.body.appendChild(table);

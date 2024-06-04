/**
 * Retrieves a list of students.
 *
 * @return {Array<{id: number, firstName: string, location: string}>} An array of objects representing students,
 * each with properties id (number), firstName (string), and location (string).
 */
export default function getListStudents() {
	return [
		{ id: 1, firstName: 'Guillaume', location: 'San Francisco' },
		{ id: 2, firstName: 'James', location: 'Columbia' },
		{ id: 5, firstName: 'Serena', location: 'San Francisco' },
	];
}

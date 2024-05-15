import {Component, useState} from 'react'
import {EditForm} from "./EditForm.jsx";
import {Display} from "./Display.jsx";
import {EditButton} from "./EditButton.jsx";

export function Root() {

	const [ formData, setFormData ] = useState(
		{
			name: "alec",
			phoneNumber: "9098163522",
			email: "asd@asd",
		}
	);

	const [editMode, setEditMode] = useState(true)

	function handleEdit(newData) {
		setFormData(newData)
	}

	function toggleEditMode() {
		setEditMode(!editMode);
	}

	return (
		<>
			<EditButton editMode={editMode} toggleEditMode={toggleEditMode}></EditButton>
			<EditForm formData={formData} handleEdit={handleEdit} editMode={editMode} toggleEditMode={toggleEditMode} />
			<Display formData={formData} editMode={editMode} />
		</>
	)

}
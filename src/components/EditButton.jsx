

export function EditButton({ editMode, toggleEditMode }) {
	return (
		<button type="button" onClick={toggleEditMode}>{editMode ? 'Save' : 'Edit'}</button>
	)
}
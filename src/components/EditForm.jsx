

export function EditForm({ formData, handleEdit, editMode, toggleEditMode }) {

	return (
		<>
			<div
				style={{'display': 'flex', 'flex-direction': 'column'}}
			>
				<form hidden={!editMode}>
					<label>Name: </label>
					<input
						name="name"
						value={formData.name}
						onChange={(e) => handleEdit({...formData, name: e.target.value.name})}
					/>
					<label>Phone Number: </label>
					<input
						name="phoneNumber"
						value={formData.phoneNumber}
						onChange={(e) => handleEdit({...formData, phoneNumber: e.target.value.phoneNumber})}
					/>
					<label>Email: </label>
					<input
						name="email"
						value={formData.email}
						onChange={(e) => handleEdit({...formData, email: e.target.value.email})}
					/>
				</form>
			</div>
		</>
	)
}

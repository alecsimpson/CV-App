

export function Display({ formData, editMode}) {


	return (
		<>
			<div hidden={editMode}>
				<div style={{display: 'flex', flexDirection: 'column'}}>
					<p>{formData.name}</p>
					<p>{formData.phoneNumber}</p>
					<p>{formData.email}</p>
				</div>
			</div>
		</>
	)
}
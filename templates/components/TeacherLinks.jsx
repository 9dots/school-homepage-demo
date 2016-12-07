import React from 'react'

export default class TeacherLinks extends React.Component {
	constructor (props) {
		super(props)
	}
	render () {
		return (
			<div className='teacher-links'>
				<h4>Grade Levels</h4>
				<ul>
					<li>1st Grade</li>
					<li>2nd Grade</li>
					<li>3rd Grade</li>
					<li>4th Grade</li>
					<li>5th Grade</li>	
					<li>6th Grade</li>
				</ul>
			</div>
		)
	}
}
import React from 'react'

export default class ThreeColumn extends React.Component {
	constructor (props) {
		super(props)
	}
	render () {
		return (
			<div className='column-wrapper'>
				<div className='left-column'>{this.props.leftColumn}</div>
				<div className='center-column'>{this.props.main || this.props.children}</div>
				{this.props.rightColumn && <div className='right-column'>{this.props.rightColumn}</div>}
			</div>
		)
	}
}
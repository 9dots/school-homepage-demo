import React from 'react'

class Entry extends React.Component {
	constructor (props) {
		super(props)
	}
	render () {
		return (
			<div>
				<h1>{this.props.title}</h1>
				<div>{this.props.slogan}</div>
			</div>
		)
	}
}

export default Entry
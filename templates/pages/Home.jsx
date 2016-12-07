import React from 'react'
import Default from '../Default.jsx'
import ThreeColumn from '../layouts/ThreeColumn.jsx'

export default class Home extends React.Component {
	constructor (props) {
		super(props)
	}
	render () {
		return (
			<Default {...this.props}>
				<div className='home-wrapper'>
					<div className='home'>
						<ThreeColumn
							leftColumn={<div>Links</div>}
							rightColumn={<div>Calendar</div>}>
							Lorem Ipsum
						</ThreeColumn>
					</div>
				</div>
			</Default>
		)
	}
}
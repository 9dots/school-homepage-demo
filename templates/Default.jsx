import TeacherLinks from './components/TeacherLinks.jsx'
import BasicLayout from './layouts/Basic.jsx'
import ThreeColumn from './layouts/ThreeColumn.jsx'
import React from 'react'

class Default extends React.Component {
	constructor (props) {
		super(props)
	}
	render () {
		const {collections} = this.props.metadata
		return (
			<BasicLayout activeRoute={this.props.path} bannerImg={this.props.bannerImg}>
				<ThreeColumn leftColumn={<TeacherLinks/>}>
					<div dangerouslySetInnerHTML={createHtml(this.props.contents)}/>
				</ThreeColumn>
			</BasicLayout>
		)
	}
}

function createHtml (data) {
	return {__html: data}
}

export default Default
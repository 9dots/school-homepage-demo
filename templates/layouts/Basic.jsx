import React, {Component} from 'react'
import Header from '../components/Header.jsx'

export default class BasicLayout extends Component {
	constructor (props) {
		super(props)
	}
	render () {
		return (
			<div className='main-wrapper'>
				<div className='main-content'>
					<Header activeRoute={this.props.activeRoute} bannerImg={this.props.bannerImg}/>
					<div className='content'>
						{this.props.children}
					</div>
				</div>
			</div>
		)
	}
}
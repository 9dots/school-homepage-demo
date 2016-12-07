import React, {Component} from 'react'
import NavItem from './NavItem.jsx'

export default class Header extends Component {
	constructor (props) {
		super(props)
	}
	render () {
		return (
			<div className='header'>
				<div>
					<image className='banner' src={this.props.bannerImg}/>
				</div>
				<div>
					<ul role="navigation" className="nav nav-tabs">
					  <li role="presentation" className="active"><a href="#">Home</a></li>
					  <li role="presentation"><a href="#">Parents</a></li>
					  <li role="presentation"><a href="#">Resources</a></li>
					  <li role="presentation"><a href="#">Our School</a></li>
					  <li role="presentation"><a href="#">Partners</a></li>
					  <li role="presentation"><a href="#">Teachers</a></li>
					  <li role="presentation"><a href="#">Enrichment</a></li>
					</ul>
				</div>
			</div>
		)
	}
}
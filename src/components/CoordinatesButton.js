import React from 'react'

export default class CoordinatesButton extends React.Component {
	
	constructor(props){
		super()

		this.func = props.onReceiveCoordinates
	}

	callFunction = (event) => {
		this.func([event.clientX, event.clientY])
	}

	render() {
		return <button onClick={this.callFunction} />
	}
}

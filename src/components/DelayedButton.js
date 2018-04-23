import React from 'react'

export default class DelayedButton extends React.Component {
	
	constructor(props){
		super()
		this.func = props.onDelayedClick
		this.delay = props.delay
	}

	callFunction = (event) => {
		event.persist()
		setTimeout(this.func.bind(this, event), this.delay)
	}

	render() {
		return <button onClick={this.callFunction} />
	}
}

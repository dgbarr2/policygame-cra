import React from 'react';
import col from "../../style/colors";
import yellenGreatJob from '../../img/yellen-great-job-01.png'
import carneyGreatJob from '../../img/Carney-goodjob.jpeg'
import bernankeFailed from  '../../img/benernke-failed-01.png'
import yellenUnemp from '../../img/yellen-unemployment-01.png'
import volcker from '../../img/volcker-inflation-01.png'
import carneySerious from '../../img/Carney-serious.jpeg'
import carneyDespair from '../../img/Carney-despair.jpeg'

const PicFrame = React.createClass({
	getUrl(){
		const {u,π,πₑ,r,r̄} = this.props;
		if(u>.08 || π>.08) return carneyDespair;
		if(u>.05) return yellenUnemp;
		if(π>.035) return carneySerious;
		return carneyGreatJob
	},
	beenPlayed: false,
	componentWillReceiveProps(){
		if(!this.props.paused) this.beenPlayed = true;
	},
	render() {
		
		let c = 'img-face ' 
		// + (this.beenPlayed ?  'show' : 'hide');
		const asdf = (
			<div className='img-container'>
				<img src={this.getUrl()} className={c}/>				
			</div>
		);
		return (
			<div className='pic-frame'>
				{asdf}
			</div>
		);
	}
});



export default PicFrame;

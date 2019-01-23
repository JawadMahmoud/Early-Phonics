class Footer extends React.Component{
	constructor(props){
		super(props);
	}
	
    click = () => {
        this.props.next();
    }
	
	render(){
		
		return(
		// <div>
		// 	<div id="next-button">
		
        // 		<img border="0" alt="W3Schools" src="resources/icons/next-button.svg" width="auto" height="100vw" onClick= {this.click} />
		// 	</div>

		// </div>

		<div id="dwNavigationFooter" className="navigation_footer">
			<img id="nextBtn" src="resources/icons/next-button.svg" onClick= {this.click} height="100%"></img>
		</div>

		);
	}
	
}
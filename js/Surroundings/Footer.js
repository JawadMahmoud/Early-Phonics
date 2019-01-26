class Footer extends React.Component{
	constructor(props){
		super(props);
	}
	
    click = () => {
        this.props.next();
    }
	
	render(){
		
		return(

		<div id="dwNavigationFooter" className="navigation_footer">
			<img id="nextBtn" src="resources/icons/next-button.svg" onClick= {this.click} height="100%"></img>
		</div>

		);
	}
	
}

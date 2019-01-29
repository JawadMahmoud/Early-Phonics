class Footer extends React.Component{
	constructor(props){
		super(props);
	}
	
    click = () => {
        this.props.next();
	}
	
	render(){
		const button = this.props.button;
		return(
		<div id="dwNavigationFooter" className="navigation_footer">
			<img id="nextBtn" src={"resources/icons/" + button + "-button.svg"} onClick= {this.click} height="100%" />
		</div>
		);
	}
	
}

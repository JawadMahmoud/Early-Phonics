function toggleFullScreen() {
    if (!document.fullscreenElement &&    // alternative standard method
        !document.mozFullScreenElement && !document.webkitFullscreenElement) {  // current working methods
        if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen();
        } else if (document.documentElement.mozRequestFullScreen) {
            document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullscreen) {
            document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
        }
    } else {
        if (document.cancelFullScreen) {
            document.cancelFullScreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
        }
    }
}

function toggleMute(event){
    var audioEnabled = event.target.checked;
    setCookie('audioEnabled',audioEnabled?'1':'0',2);
    if(document.getElementById("word-audio")) document.getElementById("word-audio").muted = !audioEnabled;
    if(document.getElementById("correct-audio")) document.getElementById("correct-audio").muted = !audioEnabled;
}

function getAudioEnabled() {
    return getCookie('audioEnabled');
}



class TopBar extends React.Component{
	
	constructor(props){
		super(props);
	}
	
    click = () => {
        this.props.back();
    }

    show_info = () => {
        this.props.info();
    }

	
	render(){
	    const audioEnabled = getAudioEnabled()==='1';
		return(

            <div id="dwNavigationHeader" className="navigation_header">
            <div className="teacher_button" id="dwOptionsButton">
                <img src="resources/icons/left-arrow.svg" onClick= {this.click} width="100%" height="100%"></img>
            </div>
            <div className="teacher_button" id="dwInfoButton" style={{display: "none"}}>
                <img src="resources/icons/info.svg" onClick= {this.show_info} width="100%" height="100%"></img>
            </div>
            <div className="teacher_button" id="dwFullScreenButton">
                <img src="resources\icons\full-screen.svg" onClick={toggleFullScreen} width="100%" height="100%"></img>
            </div>
            <label htmlFor="dwAudioEnabledCheck" className="user_options_radio">
                <div id="dwAudioOptions" className="hidden_panel teacher_button">
                    <input type="checkbox" onClick={toggleMute} name="audio-enabled" id="dwAudioEnabledCheck" className="two_divs_check" defaultChecked={audioEnabled}></input>
                    <div className="checked_on teacher_button"><img src="resources\icons\audio-on.svg" width="100%" height="100%" id="dwAudioImg"></img></div>
                    <div className="checked_off teacher_button"><img src="resources\icons\audio-off.svg"  width="100%" height="100%"></img></div>
                </div>
            </label>
            <div className="doorway_logo">
					<a href="http://www.doorwayonline.org.uk/">
						<img src="resources\icons\doorwayLogo.svg"></img>
					</a>
			</div>
        </div>
			
			
		);
	}
	
}
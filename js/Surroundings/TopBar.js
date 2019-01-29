function toggleFullScreen() {
    var element = document.getElementsByClassName("doorway_fullscreen_div")[0];
    if (!document.fullscreenElement &&    // alternative standard method
        !document.mozFullScreenElement && !document.webkitFullscreenElement) {  // current working methods
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
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
	    const isIndex = this.props.index === true;
	    const showInfo = this.props.showInfo === true;
		return(

            <div id="dwNavigationHeader" className="navigation_header">
            {isIndex ? "" : (<div className="teacher_button" id="dwOptionsButton">
                <img src="resources/icons/left-arrow.svg" onClick= {this.click} width="100%" height="100%" />
            </div>)}

            {showInfo ? (<div className="teacher_button" id="dwInfoButton">
                <img src="resources/icons/info.svg" onClick= {this.show_info} width="100%" height="100%" />
            </div>) : ""}
            <div className="teacher_button" id="dwFullScreenButton">
                <img src="resources\icons\full-screen.svg" onClick={toggleFullScreen} width="100%" height="100%" />
            </div>
            <label htmlFor="dwAudioEnabledCheck" className="user_options_radio">
                <div id="dwAudioOptions" className="hidden_panel teacher_button">
                    <input type="checkbox" onClick={toggleMute} name="audio-enabled" id="dwAudioEnabledCheck" className="two_divs_check" defaultChecked={audioEnabled} />
                    <div className="checked_on teacher_button"><img src="resources\icons\audio-on.svg" width="100%" height="100%" id="dwAudioImg" /></div>
                    <div className="checked_off teacher_button"><img src="resources\icons\audio-off.svg"  width="100%" height="100%" /></div>
                </div>
            </label>
            {isIndex ? "" : (<div className="doorway_logo">
                <a href="http://www.doorwayonline.org.uk/">
                    <img src="resources\icons\doorwayLogo.svg" />
                </a>
            </div>)}

        </div>
			
			
		);
	}
	
}
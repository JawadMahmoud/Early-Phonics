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
function toggleMuteIndex(event) {
    var audioEnabled = event.target.checked;
    setCookie('audioEnabled', audioEnabled ? '1' : '0', 2);
}
class TopBarIndex extends React.Component{
    constructor(props){
		super(props);
	}
	
    info_click = () => {
        this.props.info();
    }
    
    
    render(){
        const audioEnabled = (getCookie('audioEnabled')==='1');
	return(
		<div id="dwNavigationHeader" className="navigation_header">
            <div className="teacher_button" id="dwOptionsButton">
                <img src="resources\icons\info.svg" width="100%" height="100%" onClick={this.info_click}></img>
            </div>
            <div className="teacher_button" id="dwFullScreenButton">
                <img src="resources\icons\full-screen.svg" onClick={toggleFullScreen} width="100%" height="100%"></img>
            </div>
            <label htmlFor="dwAudioEnabledCheck" className="user_options_radio">
                <div id="dwAudioOptions" className="hidden_panel teacher_button">
                    <input type="checkbox" name="audio-enabled" id="dwAudioEnabledCheck" className="two_divs_check" defaultChecked={audioEnabled} onClick={toggleMuteIndex}></input>
                    <div className="checked_on teacher_button"><img src="resources\icons\audio-on.svg" width="100%" height="100%" id="dwAudioImg"></img></div>
                    <div className="checked_off teacher_button"><img src="resources\icons\audio-off.svg"  width="100%" height="100%"></img></div>
                </div>
            </label>
        </div>
	);
	}
}
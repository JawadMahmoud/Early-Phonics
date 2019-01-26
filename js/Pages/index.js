class IndexPage extends React.Component {
    render() {
        return (
            <div>
                <div id="dwWelcomeScreen" className="doorway_welcome">
                    <h1 className="title_message">
                        <div className="doorway_logo">
                            <a href="http://www.doorwayonline.org.uk/">
                                <img src="resources\icons\doorwayLogo.svg"></img>
                            </a>
                        </div>
                    </h1>
                    <h2>Doorway</h2>
                    <h1>Early Phonics</h1>

                    <div>
                        <p>
                            <img src="resources/images/fox.svg" className="img-index"/>
                            <img src="resources/images/gift.svg" className="img-index"/>
                            <img src="resources/images/shell.svg" className="img-index"/>
                            <img src="resources/images/crab.svg" className="img-index"/>
                            <img src="resources/images/drum.svg" className="img-index"/>

                        </p>
                    </div>
                    <p className="copyright_message">First Words | First Digraphs | More Digraphs | First Blends</p>
                    <p></p><p></p>
                    <button id="dwButtonToOptions" className="main_button" onClick={window.LoadSettingsPage}>Enter
                    </button>
                    <p></p><p></p>
                    <p className="copyright_message">Copyright &copy; 2019 The Doorway Accessible Software Trust</p>

                </div>
                <div className="version_number"><p>version {window.version}</p></div>
            </div>
        );
    }
}

function LoadSettingsPage() {
    ReactDOM.unmountComponentAtNode(document.getElementById('top'));
    ReactDOM.unmountComponentAtNode(document.getElementById('body'));
    ReactDOM.unmountComponentAtNode(document.getElementById('keyboard_render'));
    ReactDOM.unmountComponentAtNode(document.getElementById('footer'));
    ReactDOM.render(<TopBar back={window.LoadIndexPage} info={window.LoadInfoPage}/>, document.getElementById('top'));
    ReactDOM.render(<SettingsPage/>, document.getElementById('body'));
    ReactDOM.render(<Footer next={window.LoadSelectionPage}/>, document.getElementById('footer'));
    getSettingsValues();
    demoSettings();
}

function LoadSelectionPage() {
    ReactDOM.unmountComponentAtNode(document.getElementById('top'));
    ReactDOM.unmountComponentAtNode(document.getElementById('body'));
    ReactDOM.unmountComponentAtNode(document.getElementById('keyboard_render'));
    ReactDOM.unmountComponentAtNode(document.getElementById('footer'));
    ReactDOM.render(<TopBar back={window.LoadSettingsPage}/>, document.getElementById('top'));
    ReactDOM.render(<SelectionPage/>, document.getElementById('body'));
    ReactDOM.render(<Footer next={window.LoadGamePage}/>, document.getElementById('footer'));
    selectionPageLoaded();
}


function LoadGamePage() {
    ReactDOM.unmountComponentAtNode(document.getElementById('top'));
    ReactDOM.unmountComponentAtNode(document.getElementById('body'));
    ReactDOM.unmountComponentAtNode(document.getElementById('keyboard_render'));
    ReactDOM.unmountComponentAtNode(document.getElementById('footer'));
    ReactDOM.render(<TopBar back={window.LoadSelectionPage}/>, document.getElementById('top'));
    ReactDOM.render(<Footer next={window.LoadResultsPage}/>, document.getElementById('footer') );
    ReactDOM.render(<GamePage />, document.getElementById('body') );
    StartGame();
    LoadKeyboard();
    startScanning();
	

}

function LoadResultsPage() {
    ReactDOM.unmountComponentAtNode(document.getElementById('top'));
    ReactDOM.unmountComponentAtNode(document.getElementById('body'));
    ReactDOM.unmountComponentAtNode(document.getElementById('keyboard_render'));
    ReactDOM.unmountComponentAtNode(document.getElementById('footer'));
    ReactDOM.render(<TopBar back={window.LoadSelectionPage}/>, document.getElementById('top'));
    ReactDOM.render(<ResultsPage restart={window.LoadIndexPage}/>, document.getElementById('body'));

	LoadResults();

}

function LoadIndexPage() {
    ReactDOM.unmountComponentAtNode(document.getElementById('top'));
    ReactDOM.unmountComponentAtNode(document.getElementById('body'));
    ReactDOM.unmountComponentAtNode(document.getElementById('keyboard_render'));
    ReactDOM.unmountComponentAtNode(document.getElementById('footer'));
    ReactDOM.render(<TopBarIndex info={window.LoadInfoPage}/>, document.getElementById('top'));
    ReactDOM.render(<IndexPage/>, document.getElementById('body'));
    Resizing();
};

function LoadInfoPage() {
    ReactDOM.unmountComponentAtNode(document.getElementById('top'));
    ReactDOM.unmountComponentAtNode(document.getElementById('body'));
    ReactDOM.unmountComponentAtNode(document.getElementById('keyboard_render'));
    ReactDOM.unmountComponentAtNode(document.getElementById('footer'));
    ReactDOM.render(<TopBar back={window.LoadSettingsPage}/>, document.getElementById('top'));
    ReactDOM.render(<InfoPage copy={window.LoadCopyrightPage} words={window.LoadWordsPage}/>, document.getElementById('body'));
}

function LoadCopyrightPage() {
    ReactDOM.unmountComponentAtNode(document.getElementById('top'));
    ReactDOM.unmountComponentAtNode(document.getElementById('body'));
    ReactDOM.unmountComponentAtNode(document.getElementById('keyboard_render'));
    ReactDOM.unmountComponentAtNode(document.getElementById('footer'));
    ReactDOM.render(<TopBar back={window.LoadSettingsPage}/>, document.getElementById('top'));
    ReactDOM.render(<CopyrightPage info={window.LoadInfoPage} words={window.LoadWordsPage}/>, document.getElementById('body'));
}

function LoadWordsPage() {
    ReactDOM.unmountComponentAtNode(document.getElementById('top'));
    ReactDOM.unmountComponentAtNode(document.getElementById('body'));
    ReactDOM.unmountComponentAtNode(document.getElementById('keyboard_render'));
    ReactDOM.unmountComponentAtNode(document.getElementById('footer'));
    ReactDOM.render(<TopBar back={window.LoadSettingsPage}/>, document.getElementById('top'));
    ReactDOM.render(<WordsPage info={window.LoadInfoPage} copy={window.LoadCopyrightPage}/>, document.getElementById('body'));
}

function LoadKeyboard() {
    ReactDOM.unmountComponentAtNode(document.getElementById('keyboard_render'));
    if (keyboard_select == "restricted") {
        getKeys();
		if(coloured_keys) {
			ReactDOM.render(<Keyboard restricted={true} unicolor={false} />, document.getElementById('keyboard_render') );
		} else {
			ReactDOM.render(<Keyboard restricted={true} unicolor={true} />, document.getElementById('keyboard_render') );
        }
		
	} else if (keyboard_select == "standard") {
		if(coloured_keys) {
			ReactDOM.render(<Keyboard restricted={false} unicolor={false} />, document.getElementById('keyboard_render') );
		} else {
			ReactDOM.render(<Keyboard restricted={false} unicolor={true} />, document.getElementById('keyboard_render') );
        }
	}
}
window.version = "0.9.0.2";
window.onload = LoadIndexPage();
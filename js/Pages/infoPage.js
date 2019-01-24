class InfoPage extends React.Component {

    constructor(props) {
        super(props);
    }

    show_copyrights = () => {
        this.props.copy();
    }

    show_words = () => {
        this.props.words();
    }

    render() {
        return (

            <div className="user_options">
                <h1 className="title_message" style={{fontSize: "2.25vw"}}>Information</h1>
                <p style={{fontSize: "1vw"}}>Gameplay Instructions</p>

                <div className="options_group accessibility_options">
                    <h3 className="options_group_title" style={{fontSize: "1.5vw"}}>Mode</h3>
                    <table className="options_layout_grid" width="100%">
                        <tbody>
                        <tr className="options_labels" style={{fontSize: "1.5vw"}}>
                            <td>
                                <p>Choose Game Mode</p>
                            </td>
                            <td></td>
                            <td>
                                <p>Choose Keyboard</p>
                            </td>
                        </tr>
                        <tr className="options_labels info_text" style={{fontSize: "1vw"}}>
                            <td>
                                <ul>
                                    <li><p>'Assessment' doesn't show the words alongside the pictures.</p></li>
                                    <li><p>'Learning' shows the words alongside the pictures.</p></li>
                                </ul>
                            </td>
                            <td></td>
                            <td>
                                <ul>
                                    <li><p>"Standard" displays all letters</p></li>
                                    <li><p>"Restricted" displays relevant letters</p></li>
                                </ul>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>

                <div className="options_group accessibility_options">
                    <h3 className="options_group_title" style={{fontSize: "1.5vw"}}>Scanning</h3>
                    <table className="options_layout_grid" width="100%">
                        <tbody>
                        <tr className="options_labels info_text" style={{fontSize: "1vw"}}>
                            <td>
                                <ul>
                                    <li><p>'One Switch' automatically scans letters according to the speed</p></li>
                                    <li><p>'Two Switches' allows manual selection and clicking of letters</p></li>
                                </ul>
                            </td>
                            <td></td>
                            <td>
                                <ul>
                                    <li><p>There are three options for scanning speed</p></li>
                                    <li><p>1 second, 2 seconds and 3 seconds</p></li>
                                </ul>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>

                <div className="options_group accessibility_options">
                    <h3 className="options_group_title" style={{fontSize: "1.5vw"}}>Selection</h3>
                    <table className="options_layout_grid" width="100%">
                        <tbody>
                        <tr className="options_labels info_text" style={{fontSize: "1vw"}}>
                            <td>
                                <p>You can choose from a large list of words which can be navigated through pages. Click
                                    on the word to add it
                                    to the selection and click on the red cross next to the word to remove it from the
                                    selection. You are also able to
                                    choose random words from the list.</p>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>

                <div className="options_group accessibility_options">
                    <h3 className="options_group_title" style={{fontSize: "1.5vw"}}>Activity</h3>
                    <table className="options_layout_grid" width="100%">
                        <tbody>
                        <tr className="options_labels info_text" style={{fontSize: "1vw"}}>
                            <td>
                                <p>For each of the words chosen, an image will be displayed as a clue to what the word
                                    is. There will also be a
                                    helpful sound icon which speaks the word out loud as a hint. The on-screen keyboard
                                    can be used to type in the
                                    word depending on the mode of input chosen in the settings. The word can be checked
                                    and if it is correct the game
                                    moves to the next word, otherwise it keeps giving another try.</p>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>


                <div className="version_number"><p>version {window.version}</p></div>
                <div id="dwNavigationFooter" style={{height: "1.25em", width: "10em"}}>
                    <button class="main_button" style={{fontSize: "1.5vw"}} onClick={this.show_words}>Words</button>
                    <button className="main_button" style={{fontSize: "1.5vw"}} onClick={this.show_copyrights}>About
                    </button>
                </div>
            </div>
        );
    }
}
class CopyrightPage extends React.Component {

    constructor(props) {
        super(props);
    }

    show_info = () => {
        this.props.info();
    }

    show_words = () => {
        this.props.words();
    }

    render() {
        return (

            <div className="user_options">
                <h1 className="title_message" style={{fontSize: "3vw"}}>Information</h1>
                <p style={{fontSize: "1vw"}}>About this Application</p>

                <div className="options_group accessibility_options">
                    <h3 className="options_group_title" style={{fontSize: "1.5vw"}}>Concepts</h3>
                    <table className="options_layout_grid" width="100%">
                        <tbody>
                        <tr className="options_labels">
                            <td>
                                <ul>
                                    <p className="info_text" style={{fontSize: "1vw"}}>Original Concept:</p>
                                    <p style={{fontSize: "2vw"}}>Philip Wittaker</p>
                                    <p className="info_text" style={{fontSize: "1vw"}}>Original Design and Implementation in RISC OS:</p>
                                    <p style={{fontSize: "2vw"}}>Andrew Burt</p>
                                </ul>
                            </td>
                            <td></td>
                            <td>
                                <ul>
                                    <p className="info_text" style={{fontSize: "1vw"}}>Redesign and implementation in Flash:</p>
                                    <p style={{fontSize: "2vw"}}>Thomas Whitlee</p>
                                    <p className="info_text" style={{fontSize: "1vw"}}>Redesign and implementation in HTML5:</p>
                                    <p style={{fontSize: "2vw"}}>SE05</p>
                                </ul>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>

                <div className="options_group accessibility_options">
                    <h3 className="options_group_title" style={{fontSize: "1.5vw"}}>License</h3>
                    <table className="options_layout_grid" width="100%">
                        <tbody>
                        <tr className="options_labels" style={{fontSize: "1vw"}}>
                            <td>
                                <p>
                                    All graphics are copyright The Doorway Accessible Software Trust and not to be used
                                    in any form beyond this site without permission.
                                </p>
                                <p>
                                    Contact admin@doorwayonline.org.uk
                                </p>
                            </td>
                        </tr>

                        </tbody>
                    </table>
                </div>


                <div className="version_number"><p>version {window.version}</p></div>
                <div id="dwNavigationFooter" style={{height: "1.25em", width: "10em"}}>
                    <button class="main_button" style={{fontSize: "1.5vw"}} onClick={this.show_words}>Words</button>
                    <button class="main_button" style={{fontSize: "1.5vw"}} onClick={this.show_info}>Gameplay</button>
                </div>


            </div>


        );
    }
}
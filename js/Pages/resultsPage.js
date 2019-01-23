class ResultsPage extends React.Component {
    constructor(props) {
        super(props);
    }

    restart_game = () => {
        this.props.restart();
    }
	render() {
        return (
            <div className="user_options">
            <h1 className="title_message" style={{fontSize: "3vw"}}>Results</h1>
            <p id="running_total" style={{fontSize: "1.5vw"}}>Mode: Learning</p>
                <p></p>
                <table  className="table">
                    <td>
                        <table id="resultsTable1" className="table">
                            <thead>
                            <tr>
                                <th className="score_sheet_star"></th>
                                <th scope="col" className="score_sheet_results">Words</th>
                                <th scope="col" className="score_sheet_results">Tries</th>
                                <th className="score_sheet_star"></th>
                            </tr>
                            </thead>
                            <tbody >
                            </tbody>
                        </table>
                    </td>
                    <td>
                        <table id="resultsTable2" className="table" style={{display : "none"}}>
                            <thead>
                            <tr>
                                <th className="score_sheet_star"></th>
                                <th scope="col" className="score_sheet_results">Words</th>
                                <th scope="col" className="score_sheet_results">Tries</th>
                                <th className="score_sheet_star"></th>
                            </tr>
                            </thead>
                            <tbody >
                            </tbody>
                        </table>
                    </td>

                </table>
                
                
                <div className="version_number"><p>version {window.version}</p></div>
                <div id="dwNavigationFooter" style={{height: "2.5em"}}>
                    <button className="main_button" style={{fontSize: "1.5vw"}} onClick={this.restart_game}>Restart
                    </button>
                </div>
            </div>


        )
    }

}
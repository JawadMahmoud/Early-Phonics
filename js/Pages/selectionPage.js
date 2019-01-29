class SelectionPage extends React.Component {
    render() {
        return (

            <div className="user_options">
                <h1 className="title_message">Selection</h1>
                <div className="container-fluid">

                    <div className="tab-content" id="pills-tabContent">
                        {["pills-home", "pills-profile"].map(function (val) {
                            const isHome = val === "pills-home";
                            const className = isHome ? "show active" : "";
                            return (<div className={"tab-pane fade " + className} id={val} role="tabpanel"
                                         aria-labelledby={val + "-tab"}>
                                <div className="row">
                                    {Array.from(new Array(6), (val, index) => index + 1).map(function (val) {
                                        return (<div className="col-xs-3 col-sm-2 col-md-2">
                                            {(val == 1 || val == 6) ? "" : Array(4).fill(0).map(function () {
                                                return (
                                                    <button className="word-button"></button>);
                                            })}
                                        </div>);
                                    })}
                                </div>
                            </div>);
                        })}
                    </div>

                    <p></p>
                    <ul className="nav nav-pills center-pills pills_group" id="pills-tab" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link selection_pill_tabs active" id="pills-home-tab" data-toggle="pill"
                               href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true"
                               style={{"fontSize": "1vw"}}>Page 1</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link selection_pill_tabs" id="pills-profile-tab" data-toggle="pill"
                               href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false"
                               style={{"fontSize": "1vw"}}>Page 2</a>
                        </li>
                    </ul>
                </div>


                <div className="options_group" style={{margin: "0.5em", "fontSize": "1.2vw"}}>
                    <h3 className="options_group_title">Auto-Select</h3>
                    <table className="options_layout_grid" align="center">
                        <tbody>
                        <tr className="text-center">
                            <td>
                                <label className="user_options_radio button_div" id="option1">
                                    <input type="radio" name="options" autoComplete="off" defaultChecked/> Any 5
                                    Words
                                </label>
                                <label className="user_options_radio button_div" id="option3">
                                    <input type="radio" name="options" autoComplete="off"/> Any 10 Words
                                </label>
                                <label className="user_options_radio button_div" id="option2">
                                    <input type="radio" name="options" autoComplete="off"/> Any 20 Words
                                </label>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>

                <div className="container" id="select">
                    <div className="row">
                        {Array(4).fill(0).map(function () {
                            return (<div className="col-xs-4 col-sm-3 col-md-3">
                                {Array(5).fill(0).map(function () {
                                    return (<div className="row">
                                        {/* <div className="col" style={{textAlign:"right"}}>
                                            <a><img src="resources/icons/red_cross.svg" className="cancel_cross"/></a>
                                        </div> */}
                                        <div className="col">
                                            <input type="text" className="word-button chosen text-center" readOnly/>
                                        </div>
                                    </div>);
                                })}
                            </div>);
                        })}
                    </div>
                </div>

                <div className="version_number"><p>version {window.version}</p></div>

            </div>
        );
    }
}
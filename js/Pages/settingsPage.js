class SettingsPage extends React.Component {
    saveKeyboardColourless(colourless) {
        localStorage.setItem('settings.colourless', colourless);
    }

    getKeyboardColourless() {
        return localStorage.getItem('settings.colourless') == 'true';
    }

    render() {
        return (
            <form name="options_form" id="dwUserOptions" className="user_options">
                <div className="user_options">
                    <h1 className="title_message">Options</h1>

                    <div className="options_group">
                        <h3 className="options_group_title">Activity</h3>
                        <table className="options_layout_grid" width="100%">
                            <tbody>
                            <tr className="options_labels" >
                                <td style={{textAlign: "left"}} id="game_type">
                                    <input type="radio" id="words_input" name="activity" value="words"
                                           className="activity_mode"
                                           defaultChecked></input>
                                    <label  htmlFor="words_input"
                                           className="user_options_radio button_div">First Words</label>

                                    <input type="radio" id="digraphs_input" name="activity" value="digraph"
                                           className="activity_mode"></input>
                                    <label htmlFor="digraphs_input"
                                           className="user_options_radio button_div">First Digraphs</label>

                                    <input type="radio" id="moredigraphs_input" name="activity" value="moredigraph"
                                           className="activity_mode"></input>
                                    <label  htmlFor="moredigraphs_input"
                                           className="user_options_radio button_div">More Digraphs</label>

                                    <input type="radio" id="blends_input" name="activity" value="blends"
                                           className="activity_mode"></input>
                                    <label htmlFor="blends_input"
                                           className="user_options_radio button_div">First Blends</label>

                                </td>
                        
                            </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="options_group">
                        <h3 className="options_group_title">Mode</h3>
                        <table className="options_layout_grid" width="100%">
                            <tbody>
                            <tr className="options_labels">
                                <td style={{textAlign: "left"}}>
                                    <input type="radio" id="testing_input" name="mode" value="testing"
                                           className="input_mode"
                                           defaultChecked onClick={changeInfoTextKeyboard(this.value)}></input>
                                    <label htmlFor="testing_input"
                                           className="user_options_radio button_div">Assessment</label>

                                    <input type="radio" id="learning_input" name="mode" value="learning"
                                           className="input_mode" onClick={changeInfoTextKeyboard(this.value)}></input>
                                    <label htmlFor="learning_input"
                                           className="user_options_radio button_div">Learning</label>

                                </td>

                                <td>
                                    <p id="mode_info" style={{textAlign: "right"}}>(Words hidden)</p>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>


                    <div className="options_group accessibility_options">
                        <h3 className="options_group_title">Keyboard</h3>
                        <table className="options_layout_grid" width="100%">
                            <tbody>
                            <tr className="options_labels">
                                <td style={{textAlign: "left"}}>
                                    <input type="radio" id="standard_input" name="keyboard" value="standard"
                                           className="keyboard_mode"
                                           defaultChecked></input>
                                    <label htmlFor="standard_input"
                                           className="user_options_radio button_div">Standard</label>

                                    <input type="radio" id="restricted_input" name="keyboard" value="restricted"
                                           className="keyboard_mode"></input>
                                    <label htmlFor="restricted_input"
                                           className="user_options_radio button_div">Restricted</label>

                                </td>
                                <td>
                                    <p id="keyboard_info" style={{textAlign: "right"}}>(Standard keyboard with all
                                        keys)</p>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="options_group accessibility_options">
                        <h3 className="options_group_title">Accessibility
                        </h3>
                        <table className="options_layout_grid">
                            <tbody>
                            <tr className="options_labels">
                                <td>
                                    <div className="colour_key_div">
                                        <p>Colour Keys</p>
                                    </div>
                                </td>
                                <td></td>
                                <td></td>
                                <td>
                                    <p>Scanning</p>
                                </td>
                                <td></td>
                                <td></td>
                                <td>
                                    <div className="switch_num_div">
                                        <p>Swtiches</p>
                                    </div>
                                </td>
                                <td></td>
                                <td></td>
                                <td>
                                    <div className="switch_time_div">
                                        <p>Scan Speed</p>
                                    </div>
                                </td>
                            </tr>
                            <tr className="options_buttons">
                                <td>
                                    <div className="colour_key_div">
                                    <input type="radio" name="enable_colours" value="true" id="colour-keys-on" className="colour_mode"></input>
                                    <label htmlFor="colour-keys-on" className="user_options_radio button_div">On</label>
                                    <input type="radio" name="enable_colours" value="false" id="colour-keys-off" className="colour_mode" defaultChecked></input>
                                    <label htmlFor="colour-keys-off" className="user_options_radio button_div">Off</label>
                                    </div>
                                </td>
                                <td></td>
                                <td></td>
                                <td>
                                    <input type="radio" name="enable_scanning" value="true" id="radio-scanning-on"
                                           className="switch_mode"></input>
                                    <label htmlFor="radio-scanning-on"
                                           className="user_options_radio button_div">On</label>
                                    <input type="radio" name="enable_scanning" value="false" id="radio-scanning-off"
                                           className="switch_mode" defaultChecked></input>
                                    <label htmlFor="radio-scanning-off"
                                           className="user_options_radio button_div">Off</label>
                                </td>
                                <td></td>
                                <td></td>
                                <td>
                                    <div className="switch_num_div">
                                        <input type="radio" name="num_switches" value="1" id="radio-switches-1"
                                               className="switch_number"></input>
                                        <label htmlFor="radio-switches-1"
                                               className="user_options_radio button_div">One</label>
                                        <input type="radio" name="num_switches" value="2" id="radio-switches-2"
                                               className="switch_number"></input>
                                        <label htmlFor="radio-switches-2"
                                               className="user_options_radio button_div">Two</label>
                                    </div>
                                </td>
                                <td></td>
                                <td></td>
                                <td>
                                    <div className="switch_time_div">
                                        <input type="radio" name="time_switches" value="1s" id="time-switches-1"
                                               className="switch_time"></input>
                                        <label htmlFor="time-switches-1"
                                               className="user_options_radio button_div">1s</label>
                                        <input type="radio" name="time_switches" value="2s" id="time-switches-2"
                                               className="switch_number"></input>
                                        <label htmlFor="time-switches-2"
                                               className="user_options_radio button_div">2s</label>
                                        <input type="radio" name="time_switches" value="3s" id="time-switches-3"
                                               className="switch_number"></input>
                                        <label htmlFor="time-switches-3"
                                               className="user_options_radio button_div">3s</label>
                                    </div>
                                </td>
                            </tr>
                            <tr></tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="version_number"><p>version 0.8</p></div>

                </div>


            </form>




            // @TODO
            // <!-- IMPORT SCRIPTS AS ON THE OLD FILE -->


        );
    }
}
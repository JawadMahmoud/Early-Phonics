class WordsPage extends React.Component {

    constructor(props) {
        super(props);
    }

    show_info = () => {
        this.props.info();
    }

    show_copyright = () => {
        this.props.copy();
    }

    render() {
        return (

            <div className="user_options">
                <h1 className="title_message" style={{fontSize: "2.25vw"}}>Information</h1>
                <p style={{fontSize: "1vw"}}>Word Lists</p>

                <div className="options_group accessibility_options">
                    <h3 className="options_group_title" style={{fontSize: "1.5vw"}}>First Words</h3>
                    <table className="options_layout_grid" width="100%">
                        <tbody>
                        <tr className="options_labels">
                            <td>
                                    <p style={{fontSize: "1.25vw"}}>bag, bed, bin, box, can, cap, cat, dog, fan, fox,
                                    hat, hen, jam, jug, leg, man,</p>
                                    <p style={{fontSize: "1.25vw"}}> map, men, mug, net, pan, peg,
                                    pen, pig, rat, red, sun, tap, ten, van, web, zip</p>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>

                <div className="options_group accessibility_options">
                    <h3 className="options_group_title" style={{fontSize: "1.5vw"}}>First Digraphs</h3>
                    <table className="options_layout_grid" width="100%">
                        <tbody>
                        <tr className="options_labels">
                            <td>
                                    <p style={{fontSize: "1.25vw"}}>bath, bee, book, boot, chin, cook, feet, fish, food, foot,
                                    good, heel, hood, hoof, hook, jeep,</p>
                                    <p style={{fontSize: "1.25vw"}}> king, loop, moon, path, peek,
                                    peel, pool, queen, ring, roof, ship, string, swing, weed, wood, wool</p>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>

                <div className="options_group accessibility_options">
                    <h3 className="options_group_title" style={{fontSize: "1.5vw"}}>More Digraphs</h3>
                    <table className="options_layout_grid" width="100%">
                        <tbody>
                        <tr className="options_labels">
                            <td>
                                    <p style={{fontSize: "1.25vw"}}>car, chair, chick, cloud, coat, coin, cue, dart,
                                     egg, fork, goat, hair, horn, ill, jar, kerb,</p>
                                    <p style={{fontSize: "1.25vw"}}> mouth, nail, oil, pie, pink, rain, road, shark,
                                     shell, snail, sock, star, tail, tank, tie, train</p>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>

                <div className="options_group accessibility_options">
                    <h3 className="options_group_title" style={{fontSize: "1.5vw"}}>First Blends</h3>
                    <table className="options_layout_grid" width="100%">
                        <tbody>
                        <tr className="options_labels">
                            <td>
                                    <p style={{fontSize: "1.25vw"}}>ant, belt, brush, bulb, clap, crab, desk, drum,
                                     fist, flag, flash, frog, gift, golf, green, hand,</p>
                                    <p style={{fontSize: "1.25vw"}}> lamp, milk, nest, plug, pram, raft, shelf, spoon,
                                     stamp, stop, string, swim, swing, tent, tree</p>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>

                <div className="version_number"><p>version 0.8</p></div>
                <div id="dwNavigationFooter" style={{height: "1.25em", width: "10em"}}>
                    <button class="main_button" style={{fontSize: "1.5vw"}} onClick={this.show_copyright}>About</button>
                    <button class="main_button" style={{fontSize: "1.5vw"}} onClick={this.show_info}>Gameplay</button>
                </div>


            </div>
        )
    }
}
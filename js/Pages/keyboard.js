var keyboard_standard = [
    [{key:'q',cls:'btn-success'},{key:'w',cls:'btn-danger'},{key:'e',cls:'btn-dark'},{key:'r',cls:'btn-primary'},{key:'t',cls:'btn-primary'},{key:'y',cls:'btn-warning'},{key:'u', cls:'btn-dark'},{key:'i', cls:'btn-dark'},{key:'o', cls:'btn-dark'},{key:'p', cls:'btn-danger'},{key:'⌫',id:'del-button', cls:'btn-secondary'}],
    [{key:'a', cls:'btn-dark'},{key:'s', cls:'btn-primary'},{key:'d', cls:'btn-primary'},{key:'f', cls:'btn-danger'},{key:'g', cls:'btn-warning'},{key:'h', cls:'btn-warning'},{key:'j', cls:'btn-primary'},{key:'k', cls:'btn-warning'},{key:'l', cls:'btn-primary'}],
    [{key:'z', cls:'btn-primary'},{key:'x',cls:'btn-success'},{key:'c', cls:'btn-warning'},{key:'v', cls:'btn-danger'},{key:'b', cls:'btn-danger'},{key:'n',cls:'btn-primary'},{key:'m', cls:'btn-danger'}]
];
var keyboard_res = [
    [{key:'u', cls:'btn-dark'},{key:'i', cls:'btn-dark'},{key:'o', cls:'btn-dark'},{key:'p', cls:'btn-danger'},{key:'⌫',id:'del-button', cls:'btn-secondary'}],
    [{key:'z', cls:'btn-primary'},{key:'b', cls:'btn-danger'},{key:'n',cls:'btn-primary'},{key:'m', cls:'btn-danger'}]
];
class Keyboard extends React.Component{
    keyboardPress(event){
        const element = event.target;
        const character = element.innerText;
        const write = document.getElementById("write");
        if (element.id == "del-button") {
            write.value = write.value.slice(0,-1);
        } else if (write.value.length < 6) {
            write.value = write.value + character;
        }

    }
	render(){
	    const unicolor = this.props.unicolor;
	    const restricted = this.props.restricted;
	    const keyboardPress = this.keyboardPress;
	    const keyboard = restricted ? keyboard_res : keyboard_standard;
	    const keyboardId = restricted ? "keyboard_res" : "keyboard";
		return(

            <div className="row">
            <br />

            <div className="keyboard" id={keyboardId}>

                {keyboard.map(function(element) {
                    return (
                        <div className="row" style={{"marginBottom": "0.2em"}}>
                            <div className="twelve columns">
                                {element.map(function(element2) {
                                    return (
                                        <button onClick={keyboardPress} type="button" id={element2.id} className={"btn "+ ((unicolor && element2.id !== "del-button") ? "" : element2.cls) +" keyboard-key "+(restricted ? "res" : "")} key={element2.key}>{element2.key}</button>
                                    )
                                })}
                            </div>
                        </div>
                    );
                })}
            </div>
            </div>


        );
    }
}

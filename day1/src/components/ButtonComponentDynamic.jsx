import { Component } from "react";

class ButtonComponentDynamic extends Component {
    constructor(props) {
        super(props);
        this.state = { nome: "Inserisci" };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({ nome: e.target.value });
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    placeholder="Scrivi qualcosa"
                    onChange={this.handleChange}
                    value={this.state.value}
                />
                <button className="button d-block">{this.state.nome || 'Inserisci'}</button>
            </div>
        );
    }
}

export default ButtonComponentDynamic
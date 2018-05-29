import React from "react";
import { connect } from "react-redux";
import { isAddress } from "./utils";
import { checkValidity, clearValidity, handleAddressChange } from "./store";

class App extends React.Component {
    handleSubmit = e => {
        e.preventDefault();

        const isValid = isAddress(this.props.address);

        this.props.dispatch(checkValidity(isValid));
    };

    handleChange = ({ target: { value } }) => {
        if (this.props.isValid !== null) this.handleClearValidity();

        this.props.dispatch(handleAddressChange(value));
    };

    handleClearValidity = () => this.props.dispatch(clearValidity());

    render() {
        const { address, isValid } = this.props;

        return (
            <div className="App__container">
                <div className="Form__container">
                    <form onSubmit={this.handleSubmit}>
                        <h3>Eth address validity checker</h3>
                        <h5
                            className={`Form__validity Form__validity--${
                                isValid !== null && !isValid ? "show" : "hide"
                            }`}
                        >
                            Адрес не валиден
                        </h5>
                        <input
                            value={address}
                            onChange={this.handleChange}
                            type="text"
                        />
                        <button type="submit">Далее</button>
                    </form>
                </div>
                <div
                    className={`Modal__container Modal__container--${
                        isValid !== null && isValid ? "show" : "hide"
                    }`}
                >
                    <div className="Modal__body">
                        Адрес валиден
                        <button onClick={this.handleClearValidity}>Ок</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(state => ({
    address: state.address,
    isValid: state.isValid
}))(App);

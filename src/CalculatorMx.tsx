import { Component, createElement, ReactNode } from "react";
import { CalculatorMxContainerProps } from "../typings/CalculatorMxProps";
import "./Calculator.css";

export interface State {
    calculatorNumber: string;
    calculatorString: string;
    result: number;
}

export class CalculatorMx extends Component<CalculatorMxContainerProps> {
    private readonly onClickHandlerNumber = this.onClickNumber.bind(this);
    state: State = {
        calculatorNumber: "",
        calculatorString: "",
        result: 0
    };

    handleClick = (value: number | string): void => {
        if (typeof value === "number") {
            this.onClickHandlerNumber(value);
        } else {
            alert(`${value} not yet implemented`);
        }
    };

    render(): ReactNode {
        return (
            <div className="calculator">
                <div>
                    <p>Input: {this.state.calculatorString}</p>
                    <p>Result: {this.state.result}</p>
                </div>
                <button onClick={() => this.handleClick(1)}>1</button>
            </div>
        );
    }

    private onClickNumber(number: number): void {
        this.setState({
            calculatorNumber: this.state.calculatorNumber + number,
            calculatorString: this.state.calculatorString + number,
            calculateClicked: false
        });
    }
}

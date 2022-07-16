import React from "react";
import styled from "styled-components";
import Square from "../Square/Square";
class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    return (
      <div>
        <Boardrow>
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </Boardrow>
        <Boardrow>
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </Boardrow>
        <Boardrow>
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </Boardrow>
      </div>
    );
  }
}
export default Board;

const Boardrow = styled.div`
  &after {
    clear: both;
    content: "";
    display: table;
  }
`;

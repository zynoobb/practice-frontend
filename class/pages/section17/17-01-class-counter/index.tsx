import { Component } from "react";

// Component를 상속받아 component 기능 사용 가능
export default class ClassCounterPage extends Component {
  state = {
    count: 5,
  };

  onClickCountUp = (): void => {
    console.log(this.state.count);
    this.setState({
      count: 1,
    });
  };

  // react에서는 render
  render(): JSX.Element {
    return (
      <>
        <div>{this.state.count}</div>
        <button onClick={this.onClickCountUp}>카운트 올리기</button>
      </>
    );
  }
}

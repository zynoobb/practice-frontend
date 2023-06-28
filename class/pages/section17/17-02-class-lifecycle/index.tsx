import { Component } from "react";
import Router from "next/router";

// Component를 상속받아 component 기능 사용 가능
export default class ClassCounterPage extends Component {
  state = {
    count: 5,
  };

  // 그려지고 나서 실행
  componentDidMount(): void {
    console.log("그려지고 나서 실행");
  }

  componentDidUpdate(): void {
    console.log("변경되고 나서 실행");
  }

  componentWillUnmount(): void {
    console.log("사라지기 전에 실행");
    // ex) 채팅방 나가기 API
  }

  onClickCountUp = (): void => {
    console.log(this.state.count);
    this.setState({
      count: 1,
    });
  };

  onClickMove = (): void => {
    void Router.push("/");
  };

  // react에서는 render
  render(): JSX.Element {
    return (
      <>
        <div>{this.state.count}</div>
        <button onClick={this.onClickCountUp}>카운트 올리기</button>
        <button onClick={this.onClickMove}>나가기</button>
      </>
    );
  }
}

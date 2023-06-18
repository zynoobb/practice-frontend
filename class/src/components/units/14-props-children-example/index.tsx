interface IExampleProps {
  school: string;
  children: JSX.Element;
}

export default function Example(props: IExampleProps): JSX.Element {
  return (
    <div>
      <div>안녕하세요 영희입니다.</div>
      <div>{props.school}</div>
      <div>{props.children}</div>
      <div>안녕하세요 맹구입니다.</div>
    </div>
  );
}

// 자식 요소(children)로 들어감

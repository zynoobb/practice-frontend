import { DogImg, Wrapper } from "./OpenapiList.style";
import { IOpenapiListUIProps } from "./OpenapiList.types";

export default function OpenapiListUI(props: IOpenapiListUIProps): JSX.Element {
  console.log(props.imgUrls);
  return (
    <Wrapper>
      <div>
        {props.imgUrls.map((el, idx) => (
          <>
            <DogImg key={el} src={el} />
            {(idx + 1) % 3 === 0 && <br />}
          </>
        ))}
      </div>
    </Wrapper>
  );
}

import { gql, useMutation } from "@apollo/client";
import { type ChangeEvent, useState, useRef } from "react";
import { checkValidationFile } from "../../../src/commons/libraries/validationFile";

import type {
  IMutation,
  IMutationUploadFileArgs,
} from "../../../src/commons/types/generated/types";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export default function ImageUploadPage(): JSX.Element {
  const [imageUrl, setIamgeUrl] = useState("");
  const fileRef = useRef<HTMLInputElement>(null); // 태그 저장

  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const onChangeFile = async (
    event: ChangeEvent<HTMLInputElement>
  ): Promise<void> => {
    const file = event.target.files?.[0]; // 배열로 들어오는 이유 : // multiple={true} 설정 시 여러 개 입력 가능하므로 배열.

    const isValid = checkValidationFile(file);
    if (!isValid) return;

    const result = await uploadFile({ variables: { file } });
    console.log(result.data?.uploadFile.url);
    // https://storage.googleapis.com
    setIamgeUrl(result.data?.uploadFile.url ?? "");
  };

  // fileRef 클릭
  const onClickImage = (): void => {
    console.log("asd");
    fileRef.current?.click();
  };

  return (
    <>
      <input
        type="file"
        style={{ display: "none" }}
        onChange={onChangeFile}
        ref={fileRef}
        accept="image/jpeg, image/png"
      />
      <div
        style={{ width: "100px", height: "100px", backgroundColor: "gray" }}
        onClick={onClickImage}
      >
        이미지 선택
      </div>
      <img src={`https://storage.googleapis.com/${imageUrl}`} />
    </>
  );
}

// accept 파일 형식 제한
// 5 * 1024 * 1024 => 5MB

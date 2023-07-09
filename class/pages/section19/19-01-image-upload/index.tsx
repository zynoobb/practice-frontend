import { gql, useMutation } from "@apollo/client";
import { type ChangeEvent, useState } from "react";

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
  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const onChangeFile = async (
    event: ChangeEvent<HTMLInputElement>
  ): Promise<void> => {
    const file = event.target.files?.[0]; // 배열로 들어오는 이유 : // multiple={true} 설정 시 여러 개 입력 가능하므로 배열.

    console.log(file);

    const result = await uploadFile({ variables: { file } });
    console.log(result.data?.uploadFile.url);
    // https://storage.googleapis.com
    setIamgeUrl(result.data?.uploadFile.url ?? "");
  };
  return (
    <>
      <input type="file" onChange={onChangeFile} />
      <img src={`https://storage.googleapis.com/${imageUrl}`} />
    </>
  );
}

import { useEffect, useState } from "react";
import axios from "axios";
import OpenapiListUI from "./OpenapiList.presenter";

export default function OpenapiList() {
  const [imgUrls, setImgUrls] = useState<string[]>([]);
  useEffect(() => {
    const getImg = async (): Promise<void> => {
      const newUrls: string[] = [];

      for (let i = 0; i < 9; i++) {
        const result = await axios.get(
          "https://dog.ceo/api/breeds/image/random"
        );
        newUrls.push(result.data.message);
      }
      setImgUrls(newUrls);
    };
    void getImg();
  }, []);

  return <OpenapiListUI imgUrls={imgUrls} />;
}

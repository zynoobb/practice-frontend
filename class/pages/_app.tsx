import { Global } from "@emotion/react";
import { type AppProps } from "next/app";
import Layout from "../src/commons/layout";
import ApolloSetting from "../src/components/commons/apollo";
import React from "react";
import { globalStyles } from "../src/commons/styles/globalStyles";
import { RecoilRoot } from "recoil";

export default function App({ Component }: AppProps): JSX.Element {
  return (
    <RecoilRoot>
      <ApolloSetting>
        <>
          <Global styles={globalStyles} />
          <Layout>
            <Component />
          </Layout>
        </>
      </ApolloSetting>
    </RecoilRoot>
  );
}

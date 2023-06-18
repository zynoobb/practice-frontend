import { type AppProps } from "next/app";
import Layout from "../src/commons/layout";
import ApolloSetting from "../src/components/commons/apollo";
import React from "react";

export default function App({ Component }: AppProps): JSX.Element {
  return (
    <ApolloSetting>
      <Layout>
        <Component />
      </Layout>
    </ApolloSetting>
  );
}

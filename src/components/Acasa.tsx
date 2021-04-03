import React from "react";
import styled from "@emotion/styled";
import Layout from "./Layout";
import { white, yellow } from "../utils";

const Acasa: React.FC = () => {
  return (
    <Layout>
      <span>
        <H1>Configure a non-root.</H1>
        <H3>Learn how to configure a non-root.</H3>
        <H3>Manifest.json provides metadata used by your web app.</H3>
      </span>
    </Layout>
  );
};

export default Acasa;

export const H1 = styled.h1`
  font-weight: 700;
  font-size: 3rem;
  color: ${white};
  text-shadow: 2px 2px #202020;
`;

export const H3 = styled.h3`
  font-weight: 500;
  color: ${white};
  text-shadow: 2px 2px #202020;
`;

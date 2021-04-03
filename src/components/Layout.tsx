import React from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

const Layout: React.FC = ({ children }) => {
  return (
    <motion.span
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <Wrapper>
        <Container>{children}</Container>
      </Wrapper>
    </motion.span>
  );
};

const Wrapper = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  min-height: 100vh;
`;

const Container = styled.div`
  width: 75rem;
  height: 100%;
  margin: auto;
  padding-top: 15rem;
`;

export default Layout;

import React from "react";

const PageWrapper = div`
  width: 100%;
  min-height: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export function PageContainer(props) {
  return <PageWrapper>{props.children}</PageWrapper>;
}

export const InnerPageContainer = div`
  flex: 1;
  width: 100%;
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : "auto")};
  /*min-height Need more testing*/
  min-height: 70vh;
  //padding: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

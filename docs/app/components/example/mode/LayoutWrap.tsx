import React from "react";
import { Card, TabPanel, Tabs, TabsHandle } from "secptrum-ui";
import Root from "./Root";
import NextAppJsx from "./js/Next-App";
import NextAppTsx from "./ts/Next-App";
import NextPage from "./NextPage";
import { BodyText } from "@/styles/docs/start.styled";

const LayoutWrap = () => {
  return (
    <Card>
      <Tabs>
        <TabsHandle value="react">React</TabsHandle>
        <TabsHandle value="next-app">Next (App Router)</TabsHandle>
        <TabsHandle value="next-app-jsx">Next (App Router) TS</TabsHandle>
        <TabsHandle value="next-page">Next (Page Router)</TabsHandle>

        <TabPanel>
          <Root />{" "}
        </TabPanel>
        <TabPanel>
          <BodyText>
            Next.js App Router components are server-side by default, so
            you&apos;ll need to create client-side components separately. Add
            the &apos;use client&apos; directive at the top of files containing
            client-side logic or components that use browser APIs.
          </BodyText>
          <NextAppJsx />
        </TabPanel>
        <TabPanel>
          <BodyText>
            Next.js App Router components are server-side by default, so
            you&apos;ll need to create client-side components separately. Add
            the &apos;use client&apos; directive at the top of files containing
            client-side logic or components that use browser APIs.
          </BodyText>
          <NextAppTsx />
        </TabPanel>
        <TabPanel>
          <NextPage />{" "}
        </TabPanel>
      </Tabs>
    </Card>
  );
};

export default LayoutWrap;

import { render, screen } from "@testing-library/react";
import { Tabs, TabBody, TabHeader } from "./example";

const Ui = ({ defaultTab = "" }) => (
  <Tabs defaultTab={defaultTab}>
    <div>
      <TabHeader tabId="users">Users</TabHeader>
      <TabHeader tabId="settings">Settings</TabHeader>
    </div>

    <div>
      <TabBody tabId="users">Users panel</TabBody>
      <TabBody tabId="settings">Settings panel</TabBody>
    </div>
  </Tabs>
);

describe("Compound Components", () => {
  it.todo("Should not render any tab");

  it("Should render the default selected tab", () => {
    render(<Ui />);
    screen.debug();
  });

  it.todo("should override the value from text prop");
});

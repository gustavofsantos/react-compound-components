import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import { Tabs, TabBody, TabHeader } from "./example";

const Ui = ({ defaultTab = "" }) => (
  <Tabs defaultTab={defaultTab}>
    <div>
      <TabHeader tabId="users">Users</TabHeader>
      <TabHeader tabId="settings">Settings</TabHeader>
    </div>

    <div>
      <TabBody tabId="users">
        <span data-testid="users-panel">Users panel</span>
      </TabBody>
      <TabBody tabId="settings">
        <span data-testid="settings-panel">Settings panel</span>
      </TabBody>
    </div>
  </Tabs>
);

const clickSettings = () => {
  user.click(screen.getByText(/settings/i));
};

describe("Compound Components", () => {
  it("Should not render any tab", () => {
    render(<Ui />);

    expect(screen.queryByTestId("users-panel")).toBeNull();
    expect(screen.queryByTestId("settings-panel")).toBeNull();
  });

  it("Should render the default selected tab", () => {
    render(<Ui defaultTab="users" />);

    expect(screen.getByTestId("users-panel")).toBeInTheDocument();
  });

  it("Should render panel when click in the header", () => {
    render(<Ui defaultTab="users" />);

    clickSettings();

    expect(screen.getByTestId("settings-panel")).toBeInTheDocument();
    expect(screen.queryByTestId("users-panel")).toBeNull();
  });
});

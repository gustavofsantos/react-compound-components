import { createContext, useContext, useState } from "react";

type ContextType = {
  selected: string;
  setSelected(selected: string): void;
};

const TabsContext = createContext<ContextType>({
  selected: undefined,
  setSelected() {},
});

const useTabs = () => useContext(TabsContext);

export const Tabs = ({ children, defaultTab = "" }) => {
  const [selected, setSelected] = useState(defaultTab);

  return (
    <TabsContext.Provider value={{ selected, setSelected }}>
      {children}
    </TabsContext.Provider>
  );
};

export const TabHeader = ({ children, tabId }) => {
  const { setSelected } = useTabs();

  return <div onClick={() => setSelected(tabId)}>{children}</div>;
};

export const TabBody = ({ children, tabId }) => {
  const { selected } = useTabs();

  return selected === tabId ? children : null;
};

import Drawer from "../Components/Drawer/drawer";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import { useLocation } from "react-router-dom";

function Page() {
  const [data, setData] = useState(null);
  const location = useLocation();
  const [pathname, setPathname] = useState(location?.pathname);

  useEffect(() => {
    fetch(
      "https://dataguard.blob.core.windows.net/challenges/plugins/fe-challenge.json"
    )
      .then(res => res.json())
      .then(res => setData(res))
      .catch(error => console.log(error));
  }, []);

  const tabData = data && Object.values(data?.data?.tabdata);
  const plugins = data && Object.values(data?.data?.plugins);

  const activeMarketing = tabData?.filter(
    item => item?.title === "Marketing"
  )[0]?.active;
  const inactiveMarketing = tabData?.filter(
    item => item?.title === "Marketing"
  )[0]?.inactive;
  const disabledMarketing = tabData?.filter(
    item => item?.title === "Marketing"
  )[0]?.disabled;
  const marketingPlugins = activeMarketing?.concat(
    inactiveMarketing,
    disabledMarketing
  );

  const activeFinance = tabData?.filter(item => item?.title === "Finance")[0]
    ?.active;
  const inactiveFinance = tabData?.filter(item => item?.title === "Finance")[0]
    ?.inactive;
  const disabledFinance = tabData?.filter(item => item?.title === "Finance")[0]
    ?.disabled;
  const financePlugins = activeFinance?.concat(
    inactiveFinance,
    disabledFinance
  );

  return (
    <Switch>
      <Route path="/Marketing">
        <Drawer
          pathname={pathname}
          setPathname={setPathname}
          data={data}
          setData={setData}
          pluginsItems={marketingPlugins && marketingPlugins}
          active={activeMarketing && activeMarketing}
          inactive={inactiveMarketing && inactiveMarketing}
          disabled={disabledMarketing && disabledMarketing}
          tabData={tabData && tabData}
          plugins={plugins && plugins}
        />
      </Route>
      {/* <Route path="/">
          <Drawer tabData={tabData && tabData} plugins={plugins && plugins} />
        </Route> */}
      <Route path="/personnel">
        <Drawer
          pathname={pathname}
          setPathname={setPathname}
          setData={setData}
          tabData={tabData && tabData}
          plugins={plugins && plugins}
        />
      </Route>
      <Route path="/finance">
        <Drawer
          pathname={pathname}
          setPathname={setPathname}
          tabData={tabData && tabData}
          data={data}
          setData={setData}
          pluginsItems={financePlugins && financePlugins}
          active={activeFinance && activeFinance}
          inactive={inactiveFinance && inactiveFinance}
          disabled={disabledFinance && disabledFinance}
          plugins={plugins && plugins}
        />
      </Route>
      <Redirect to="/marketing" />
    </Switch>
  );
}

export default Page;

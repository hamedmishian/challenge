import Drawer from "../Components/Drawer/drawer";
import { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import { useLocation } from "react-router-dom";

function Page() {
  const [data, setData] = useState(null);
  const location = useLocation();
  const [pathname, setPathname] = useState(location?.pathname);

  useEffect(() => {
    fetch(
      // "https://dataguard.blob.core.windows.net/challenges/plugins/fe-challenge.json"
      "http://localhost:3000/data"
    )
      .then(res => res.json())
      .then(res => setData(res))
      .catch(error => console.log(error));
  }, []);
  console.log(data);

  const tabData = data && Object.values(data?.tabdata);
  const plugins = data && Object.values(data?.plugins);

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

  const activePersonnel = tabData?.filter(
    item => item?.title === "Personnel"
  )[0]?.active;
  const inactivePersonnel = tabData?.filter(
    item => item?.title === "Personnel"
  )[0]?.inactive;
  const disabledPersonnel = tabData?.filter(
    item => item?.title === "Personnel"
  )[0]?.disabled;
  const personnelPlugins = activePersonnel?.concat(
    inactivePersonnel,
    disabledPersonnel
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
          active={activePersonnel && activePersonnel}
          inactive={inactivePersonnel && inactivePersonnel}
          disabled={disabledPersonnel && disabledPersonnel}
          pluginsItems={personnelPlugins && personnelPlugins}
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

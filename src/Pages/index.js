import Drawer from "../Components/Drawer/drawer";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

function Page() {
  const [data, setData] = useState();
  useEffect(() => {
    fetch("http://localhost:3000/data")
      .then(res => res.json())
      .then(res => setData(res))
      .catch(error => console.log(error));
  }, []);

  const tabData = data && Object.values(data?.tabdata);
  const plugins = data && Object.values(data?.plugins);

  // const activeMarketing = tabData?.filter(
  //   item => item?.title === "Marketing"
  // )[0]?.active;
  // const inactiveMarketing = tabData?.filter(
  //   item => item?.title === "Marketing"
  // )[0]?.inactive;
  // const disabledMarketing = tabData?.filter(
  //   item => item?.title === "Marketing"
  // )[0]?.disabled;
  // const marketingPlugins = activeMarketing?.concat(
  //   inactiveMarketing,
  //   disabledMarketing
  // );
  console.log(data);

  return (
    <Router>
      <Switch>
        <Route path="/Marketing">
          <Drawer
            data={data}
            // pluginsItems={marketingPlugins && marketingPlugins}
            // active={activeMarketing && activeMarketing}
            // inactive={inactiveMarketing && inactiveMarketing}
            // disabled={disabledMarketing && disabledMarketing}
            tabData={tabData && tabData}
            plugins={plugins}
          />
        </Route>
        {/* <Route path="/">
          <Drawer tabData={tabData && tabData} plugins={plugins && plugins} />
        </Route> */}
        <Route path="/personnel">
          <Drawer tabData={tabData && tabData} plugins={plugins && plugins} />
        </Route>
        <Route path="/finance">
          <Drawer tabData={tabData && tabData} plugins={plugins && plugins} />
        </Route>
        <Redirect to="/marketing" />
      </Switch>
    </Router>
  );
}

export default Page;

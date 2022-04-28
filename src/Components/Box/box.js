import { React, useState } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import Switch from "../Switch/switch";
import Grid from "@mui/material/Grid";

export default function Variants({
  pluginsItems,
  tabData,
  plugins,
  data,
  active,
  disabled,
  inactive,
  checked,
  setChecked,
  setData
}) {
  const handleSwitch = id => {
    setChecked(checked && !checked);
  };

  return (
    <Box
      sx={{
        width: "100%",
        paddingRight: "24px"
      }}
    >
      <Grid container spacing={4}>
        {pluginsItems?.sort()?.map((plugin, index) => {
          return (
            <Grid item xs={12} sm={12} md={6} lg={4}>
              <Paper
                key={index}
                variant="elevation"
                sx={{
                  borderRadius: "2%",
                  // background:
                  //   "linear-gradient(0deg, rgba(251,251,251,0.1407913507199755) 0%, rgba(215,216,217,0.7822479333530288) 100%)",
                  height: "200px",
                  transition: "all 0.2s linear",
                  ":hover": {
                    transform: "scale(1.02)"
                  },
                  padding: "20px"
                }}
              >
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Typography
                    variant="h6"
                    color={
                      disabled?.find(item => item === plugin)
                        ? "lightgray"
                        : "black"
                    }
                    fontWeight={500}
                    fontFamily={"sans-serif"}
                  >
                    {
                      plugins?.find(
                        item =>
                          item?.title
                            ?.replace(/P/g, "p")
                            ?.replace(/\s/g, "") === plugin
                      )?.title
                    }
                  </Typography>
                  <div
                    style={{
                      textAlign: "center",
                      alignItems: "center",
                      width: "100px"
                    }}
                  >
                    <Switch
                      disabled={
                        disabled?.find(item => item === plugin) ? true : false
                      }
                      checked={
                        active?.find(item => item === plugin)
                          ? checked
                          : inactive?.find(item => item === plugin)
                          ? !checked
                          : !checked
                      }
                      setChecked={setChecked}
                      onChange={handleSwitch}
                    />
                    <Typography
                      variant="body2"
                      sx={{ display: "block" }}
                      color={
                        active?.find(item => item === plugin)
                          ? "green"
                          : inactive?.find(item => item === plugin)
                          ? "red"
                          : "lightgray"
                      }
                      fontWeight={600}
                    >
                      {active?.find(item => item === plugin)
                        ? "Alowed"
                        : inactive?.find(item => item === plugin)
                        ? "Blocked"
                        : "Inactive"}
                    </Typography>
                  </div>
                </div>
                <Typography
                  color={
                    disabled?.find(item => item === plugin)
                      ? "lightgray"
                      : "black"
                  }
                  fontFamily={"sans-serif"}
                  sx={{ marginTop: "30px" }}
                >
                  {
                    plugins?.find(
                      item =>
                        item?.title?.replace(/P/g, "p")?.replace(/\s/g, "") ===
                        plugin
                    )?.description
                  }
                </Typography>
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}

import { React, useState } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import Switch from "../Switch/switch";
import Grid from "@mui/material/Grid";

export default function Variants({ pluginsItems, tabData, plugins, data }) {
  const [checked, setChecked] = useState(true);
  const handleSwitch = () => {
    setChecked(checked && checked);
  };

  return (
    <Box
      sx={{
        width: "100%",
        paddingRight: "24px"
      }}
    >
      <Grid container spacing={4}>
        {plugins?.map(plugin => {
          return (
            <Grid item xs={12} sm={12} md={6} lg={4}>
              <Paper
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
                    fontWeight={500}
                    fontFamily={"sans-serif"}
                  >
                    {plugin?.title}
                  </Typography>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <Switch
                      checked={checked}
                      setChecked={setChecked}
                      onChange={handleSwitch}
                    />
                    <Typography
                      variant="body2"
                      color={"green"}
                      fontWeight={600}
                    >
                      Alowed
                    </Typography>
                  </div>
                </div>
                <Typography
                  fontFamily={"sans-serif"}
                  sx={{ marginTop: "30px" }}
                >
                  {plugin?.description}
                </Typography>
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}

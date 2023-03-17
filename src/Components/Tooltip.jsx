import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";

const Tool_tip = ({position}) => {
  return (
    <Box sx={{ width: 500 }}>
      <Grid container justifyContent="center">
        <Grid item>
          <Tooltip title="Add" placement={!position ? "top" : position} arrow>
            <Button className="btn">Hover Me</Button>
          </Tooltip>
        </Grid>
      </Grid>
    </Box>
  );
}
export default Tool_tip;


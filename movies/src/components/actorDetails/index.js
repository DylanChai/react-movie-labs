import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";


const root = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0,
};

const chip = { margin: 0.5 };

const ActorDetails = ({ actor }) => {  
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <Typography variant="h5" component="h3">
        Overview
      </Typography>

      <Typography variant="h6" component="p">
        {actor.birthday}
      </Typography>

      <Paper component="ul" sx={{...root}}>
      <li>
          <Chip label="Birthday" sx={{...chip}} color="primary" />
        </li>
        <li>
            <Chip label={actor.birthday} sx={{...chip}} />
          </li>

      </Paper>

<Drawer anchor="top" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        
      </Drawer>

      </>
  );
};
export default ActorDetails ;
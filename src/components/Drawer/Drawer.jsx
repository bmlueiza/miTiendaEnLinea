import { Box, Drawer } from "@mui/material";
import cart_icon from "../assets/cart_icon.png";
import { useState } from "react";

function RightDrawer({ children }) {
  const [state, setState] = useState({
    right: false,
  });

  const toggleDrawer = (open) => () => {
    setState({ ["right"]: open });
  };

  const list = () => (
    <Box
      sx={{ width: 270 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      Drawer
    </Box>
  );
  return (
    <>
      <div
        style={{ marginTop: "auto", marginBottom: "auto", cursor: "pointer" }}
        onClick={toggleDrawer(true)}
      >
        <div className="nav-login-cart">
          <img src={cart_icon} alt="carrito" />
          <div className="nav-cart-count">0</div>
        </div>
      </div>
      <Drawer
        anchor="right"
        open={state["right"]}
        onClose={toggleDrawer(false)}
      >
        {list()}
      </Drawer>
    </>
  );
}

export default RightDrawer;

import { Box } from "@mui/material";
import { useOutletContext } from "react-router-dom";

const ViewEmail = () => {
  const { openDrawer } = useOutletContext();

  return (
    <Box
      style={
        openDrawer ? { marginLeft: 250, width: "100%" } : { width: "100%" }
      }
    >
      Hello from View Email
    </Box>
  );
};

export default ViewEmail;

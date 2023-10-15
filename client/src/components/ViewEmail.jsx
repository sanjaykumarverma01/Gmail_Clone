import { ArrowBack, Delete } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { useLocation, useOutletContext } from "react-router-dom";
import { profilePic } from "../constants/constant";

const ViewEmail = () => {
  const { openDrawer } = useOutletContext();

  const { state } = useLocation();
  const { email } = state;

  return (
    <Box
      style={
        openDrawer ? { marginLeft: 250, width: "100%" } : { width: "100%" }
      }
    >
      <Box>
        <ArrowBack
          onClick={() => window.history.back()}
          color="action"
          fontSize="small"
        />
        <Delete color="action" fontSize="small" style={{ marginLeft: 30 }} />
      </Box>
      <Typography>{email.subject}</Typography>
      <Box>
        <img src={profilePic} alt="profilePic" />
        <Box>
          <Box>
            <Typography>
              {email.name}
              <Box component="span">&nbsp;&#60;{email.to}&#62;</Box>
            </Typography>
            <Box>
              {new window.Date(email.date).getDate()}&nbsp;
              {new window.Date(email.date).toLocaleString("default", {month: "short"})}&nbsp;
              {new window.Date(email.date).getFullYear()}
            </Box>
            <Typography>{email.body}</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ViewEmail;

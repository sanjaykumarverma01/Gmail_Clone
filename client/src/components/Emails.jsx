import { Box, Checkbox, List, ListItem } from "@mui/material";
import { DeleteOutline } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import useApi from "../hooks/useApi";
import { API_URLS } from "../services/api.url";
import Email from "./Email";

const Emails = () => {
  const [selectedEmails, setSelectedEmails] = useState([]);
  const [refreshScreen, setRefreshScreen] = useState(false);

  const { openDrawer } = useOutletContext();

  const { type } = useParams();

  const getEmailService = useApi(API_URLS.getEmailFromType);
  const moveEmailsToBinService = useApi(API_URLS.moveEmailsToBin);

  useEffect(() => {
    getEmailService.call({}, type);
  }, [type, refreshScreen]);

  const selectAllEmails = (e) => {
    if (e.target.checked) {
      const emails = getEmailService?.response?.map((email) => email._id);
      setSelectedEmails(emails);
    } else {
      setSelectedEmails([]);
    }
  };

  const deleteSelectedEmails = (e) => {
    if (type === "bin") {
    } else {
      moveEmailsToBinService.call(selectedEmails);
    }
    setRefreshScreen((prevState) => !prevState);
  };
  return (
    <Box
      style={
        openDrawer
          ? { marginLeft: 250, width: "calc(100% - 250px)" }
          : { width: "100%" }
      }
    >
      <Box
        style={{
          display: "flex",
          alignItems: "center",
          padding: "20px 10px 0px 10px",
        }}
      >
        <Checkbox size="small" onChange={(e) => selectAllEmails(e)} />
        <DeleteOutline onClick={(e) => deleteSelectedEmails(e)} />
      </Box>
      <List>
        {getEmailService?.response?.map((email) => (
          <Email
            key={email._id}
            email={email}
            selectedEmails={selectedEmails}
          />
        ))}
      </List>
    </Box>
  );
};

export default Emails;

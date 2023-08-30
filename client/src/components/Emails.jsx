import { Box } from "@mui/material";
import React, { useEffect } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import useApi from "../hooks/useApi";
import { API_URLS } from "../services/api.url";

const Emails = () => {
  const { openDrawer } = useOutletContext();

  const { type } = useParams();

  const getEmailService = useApi(API_URLS.getEmailFromType)


  useEffect(() =>{
    getEmailService.call({},type)
  },[type])

  
  return (
    <Box
      style={
        openDrawer ? { marginLeft: 250, width: "100%" } : { width: "100%" }
      }
    >
      Hello from emails
    </Box>
  );
};

export default Emails;

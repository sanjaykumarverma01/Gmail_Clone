import { ArrowBack, Delete } from "@mui/icons-material";
import { Box, Typography, styled } from "@mui/material";
import { useLocation, useOutletContext } from "react-router-dom";
import { profilePic } from "../constants/constant";
import useApi from "../hooks/useApi";
import { API_URLS } from "../services/api.url";


const ViewEmail = () => {
  const { openDrawer } = useOutletContext();

  const { state } = useLocation();
  const { email } = state;

  const moveEmailsToBinService = useApi(API_URLS.moveEmailsToBin);

  const deleteEmail = () => {
    moveEmailsToBinService.call([email._id]);
    window.history.back();
  };
  return (
    <Box style={openDrawer ? { marginLeft: 250 } : { width: "100%" }}>
      <IconWrapper>
        <ArrowBack
          color="action"
          fontSize="small"
          onClick={() => window.history.back()}
        />
        <Delete
          color="action"
          fontSize="small"
          style={{ marginLeft: 40 }}
          onClick={() => deleteEmail()}
        />
      </IconWrapper>
      <SubjectWrapper>
        {email.subject}{" "}
        <IndicatorWrapper component="span">Inbox</IndicatorWrapper>
      </SubjectWrapper>
      <Box style={{ display: "flex" }}>
        <Image src={profilePic} alt="profilePic" />
        <ContainerWrapper>
          <Box>
            <Typography style={{ marginTop: 10 }}>
              {email.name}
              <Box component="span">&nbsp;&#60;{email.to}&#62;</Box>
            </Typography>
            <Date>
              {new window.Date(email.date).getDate()}&nbsp;
              {new window.Date(email.date).toLocaleString("default", {
                month: "short",
              })}
              &nbsp;
              {new window.Date(email.date).getFullYear()}
            </Date>
          </Box>
          <Typography style={{ marginTop: 20 }}>{email.body}</Typography>
        </ContainerWrapper>
      </Box>
    </Box>
  );
};

export default ViewEmail;



const IconWrapper = styled(Box)({
  padding: 15,
});

const SubjectWrapper = styled(Typography)({
  fontSize: 25,
  margin: "10px 0 20px 75px",
  display: "flex",
});

const IndicatorWrapper = styled(Box)({
  fontSize: 12,
  background: "#ddd",
  color: "#222",
  padding: "2px 4px",
  marginLeft: 6,
  borderRadius: 4,
  alignSelf: "center",
});

const Image = styled("img")({
  borderRadius: "50%",
  width: 40,
  height: 40,
  margin: "5px 10px 0 10px",
  background: "#cccccc",
});

const ContainerWrapper = styled(Box)({
  marginLeft: 15,
  width: "100%",
  "& > div": {
    display: "flex",
    "& > p > span": {
      fontSize: 12,
      color: "#5E5E5E",
    },
  },
});

const Date = styled(Box)({
  margin: "15px 50px 0 auto",
  fontSize: 12,
  color: "#5E5E5E",
});

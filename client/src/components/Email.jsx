import { Star, StarBorder } from "@mui/icons-material";
import { Box, Typography, Checkbox, styled } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { routes } from "../routes/routes";
import useApi from "../hooks/useApi";
import { API_URLS } from "../services/api.url";

const Email = ({
  email,
  selectedEmails,
  setRefreshScreen,
  setSelectedEmails,
}) => {
  const navigate = useNavigate();

  const toggleStarredService = useApi(API_URLS.toggleStarredEmail);

  const toggleStarredMail = () => {
    toggleStarredService.call({ id: email._id, value: !email.starred });
    setRefreshScreen((prevState) => !prevState);
  };

  const onValueChange = () => {
    if(selectedEmails.includes(email._id)){
      setSelectedEmails(prevState => prevState.filter(id => id !== email._id))
    }else{
      setSelectedEmails(prevState => [...prevState, email._id])
    }
  };

  return (
    <BoxWrapper>
      <Checkbox
        size="small"
        checked={selectedEmails.includes(email._id)}
        onChange={() => onValueChange()}
      />
      {email.starred ? (
        <Star
          fontSize="small"
          style={{ marginRight: 10, color: "#FADA5E" }}
          onClick={() => toggleStarredMail()}
        />
      ) : (
        <StarBorder
          fontSize="small"
          style={{ marginRight: 10 }}
          onClick={() => toggleStarredMail()}
        />
      )}

      <Box
        onClick={() => navigate(routes.view.path, { state: { email: email } })}
      >
        <Typography style={{ width: "18%", overflow: "hidden" }}>
          {email.name}
        </Typography>
        <Indicator>Inbox</Indicator>
        <Typography>
          {email.subject} {email.body && "-"} {email.body}
        </Typography>
        <Date>
          {new window.Date(email.date).getDate()}&nbsp;
          {new window.Date(email.date).toLocaleString("default", {
            month: "short",
          })}
        </Date>
      </Box>
    </BoxWrapper>
  );
};

export default Email;

const BoxWrapper = styled(Box)({
  padding: "0 0 0 10px",
  background: "#f2f6fc",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  "& > div": {
    display: "flex",
    width: "100%",
    "& > p": {
      fontSize: 14,
    },
  },
});

const Indicator = styled(Typography)({
  fontSize: "12px !important",
  background: "#ddd",
  color: "#222",
  padding: "0 4px",
  borderRadius: 4,
  marginRight: 6,
});

const Date = styled(Typography)({
  marginLeft: "auto",
  marginRight: 10,
  fontSize: 12,
  color: "#5F6368",
});

import { Star, StarBorder } from "@mui/icons-material";
import { Box, Typography, Checkbox, styled } from "@mui/material";

const Email = ({ email, selectedEmails }) => {
  return (
    <BoxWrapper>
      <Checkbox
        size="small"
        checked={selectedEmails.includes(email._id)}
      />
      <StarBorder fontSize="small" style={{ marginRight: 10 }} />
      <Box>
        <Typography style={{ width: "18%", overflow: "hidden" }}>
          {email.name}
        </Typography>
        <Indicator>Inbox</Indicator>
        <Typography>
          {email.subject} {email.body && "-"} {email.body}
        </Typography>
        <Date>
          {new window.Date(email.date).getDate()}
          {new window.Date(email.date).toLocaleString("default", {
            month: "long",
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

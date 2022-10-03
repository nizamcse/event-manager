import React from "react";
import { BsChevronRight } from "react-icons/bs";
import { BiMap } from "react-icons/bi";
import { ImCalendar } from "react-icons/im";
import Image from "../components/Image";
import imageSrc from "../assets/event-image.png";
import {
  Avatar,
  Box,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
type Props = {};

const EventPage = (props: Props) => {
  const matches = useMediaQuery("(max-width:600px)");
  const theme = useTheme();
  return (
    <Box
      sx={{
        [theme.breakpoints.up("sm")]: {
          padding: 4,
        },
        [theme.breakpoints.up("md")]: {
          padding: 8,
          display: "flex",
          flexDirection: "row-reverse",
        },
      }}
    >
      <Box flex={1}>
        <Image fullWidth src={imageSrc} alt="Thumbnail" />
      </Box>
      <Box
        sx={{
          [theme.breakpoints.up("md")]: {
            pr: 4,
          },
        }}
        flex={1}
      >
        <Box
          sx={{
            px: matches ? 2.25 : 0,
          }}
          py={1}
        >
          <Typography component="h3" variant="h3">
            Birthday Bash
          </Typography>
          <Typography variant="subtitle1">
            Hosted by{" "}
            <Typography component="span" variant="h6">
              Elysia
            </Typography>
          </Typography>
        </Box>
        <Box>
          <Box>
            <ListItem
              sx={{
                px: matches ? 2.25 : 0,
              }}
              secondaryAction={
                <IconButton edge="end" aria-label="view">
                  <BsChevronRight />
                </IconButton>
              }
            >
              <ListItemAvatar sx={{ pr: 2 }}>
                <Avatar
                  sx={{
                    boxShadow: (theme) => theme.shadows[3],
                    width: 56,
                    height: 56,
                    backgroundColor: "#FFFFFF",
                    color: "#222222",
                  }}
                  variant="rounded"
                >
                  <ImCalendar />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={<Typography variant="h5">18 August 6:00PM</Typography>}
                secondary={
                  <Typography>
                    to{" "}
                    <Typography component="span" variant="h5">
                      19 August 1:00PM
                    </Typography>{" "}
                    UTC +10
                  </Typography>
                }
              />
            </ListItem>
          </Box>
          <Box>
            <ListItem
              sx={{
                px: matches ? 2.25 : 0,
              }}
              secondaryAction={
                <IconButton edge="end" aria-label="view">
                  <BsChevronRight />
                </IconButton>
              }
            >
              <ListItemAvatar sx={{ pr: 2 }}>
                <Avatar
                  sx={{
                    boxShadow: theme.shadows[3],
                    width: 56,
                    height: 56,
                    backgroundColor: "#FFFFFF",
                    color: "#222222",
                  }}
                  variant="rounded"
                >
                  <BiMap />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={<Typography variant="h5">18 August 6:00PM</Typography>}
                secondary={
                  <Typography>
                    to{" "}
                    <Typography component="span" variant="h5">
                      19 August 1:00PM
                    </Typography>{" "}
                    UTC +10
                  </Typography>
                }
              />
            </ListItem>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default EventPage;

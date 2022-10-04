import React, { useContext } from "react";
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
import { EventContext } from "../context/EventContext";
type Props = {};

const EventPage = (props: Props) => {
  const { myEvent } = useContext(EventContext);
  const matches = useMediaQuery("(max-width:600px)");
  const theme = useTheme();
  return (
    <Box
      sx={{
        padding: 4,
        [theme.breakpoints.up("md")]: {
          display: "flex",
          flexDirection: "row-reverse",
        },
      }}
    >
      <Box flex={1}>
        <Image fullWidth src={myEvent?.imageURI!} alt="Thumbnail" />
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
          <Typography component="h3" variant="h3" color="primary">
            {myEvent?.eventName || "Event Name Did Not Set"}
          </Typography>
          <Typography variant="h6">
            Hosted by{" "}
            <Typography component="span" variant="subtitle1">
              {myEvent?.hostName || "No Host Name"}
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
                    boxShadow: (theme) => theme.shadows[1],
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
                primary={
                  <Typography
                    sx={{
                      [theme.breakpoints.down("md")]: {
                        fontSize: "0.875rem",
                      },
                    }}
                    variant="h5"
                  >
                    {myEvent?.startTime || "Any Time"}
                  </Typography>
                }
                secondary={
                  <Typography
                    sx={{
                      [theme.breakpoints.down("md")]: {
                        fontSize: "0.875rem",
                      },
                    }}
                  >
                    to{" "}
                    <Typography
                      sx={{
                        [theme.breakpoints.down("md")]: {
                          fontSize: "0.875rem",
                        },
                      }}
                      component="span"
                      variant="h5"
                    >
                      {myEvent?.endTime || "No End Time"}
                    </Typography>{" "}
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
                    boxShadow: (theme) => theme.shadows[1],
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
                primary={
                  <Typography
                    sx={{
                      [theme.breakpoints.down("md")]: {
                        fontSize: "0.875rem",
                      },
                    }}
                    variant="h5"
                  >
                    Street Name
                  </Typography>
                }
                secondary={
                  <Typography
                    sx={{
                      [theme.breakpoints.down("md")]: {
                        fontSize: "0.875rem",
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        [theme.breakpoints.down("md")]: {
                          fontSize: "0.875rem",
                        },
                      }}
                      component="span"
                      variant="h5"
                    >
                      {myEvent?.location}
                    </Typography>
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

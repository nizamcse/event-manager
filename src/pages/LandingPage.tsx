import React from "react";
import Image from "../components/Image";
import LandingImage from "../assets/landing-image.svg";
import { Box, Button, Typography, useTheme } from "@mui/material";
type Props = {};

const LangingPage = (props: Props) => {
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
      <Box
        sx={{
          textAlign: "center",
          [theme.breakpoints.up("md")]: {
            textAlign: "right",
          },
        }}
        flex={1}
      >
        <Typography
          color="primary"
          sx={{
            [theme.breakpoints.down("md")]: {
              fontSize: "36px",
            },
          }}
          component="h1"
          variant="h1"
        >
          Imagine if
        </Typography>
        <Typography
          sx={{
            background:
              "linear-gradient(90deg, #8456EC 24.2%, #E87BF8 120.46%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            textFillColor: "transparent",
            [theme.breakpoints.down("md")]: {
              fontSize: "36px",
            },
          }}
          component="h1"
          variant="h1"
        >
          Snapchat
        </Typography>
        <Typography
          sx={{
            [theme.breakpoints.down("md")]: {
              fontSize: "36px",
            },
          }}
          component="h1"
          variant="h1"
          color="primary"
        >
          had events.
        </Typography>

        <Typography
          sx={{
            fontWeight: 300,
            fontSize: "24px",
            lineHeight: "28px",
          }}
          component="h1"
          variant="h1"
        >
          Easily host and share events with your friends across any social
          media.
        </Typography>
        <Box pt={6.5}>
          <Button
            sx={{
              background: "linear-gradient(90deg, #8456EC 3.25%, #E87BF8 100%)",
              borderRadius: "10px",
              [theme.breakpoints.down("md")]: {
                display: "none",
              },
            }}
            size="large"
            variant="contained"
          >
            🎉 Create my event
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          px: 9,
          py: 0,
          [theme.breakpoints.down("md")]: {
            py: 6,
          },
        }}
        flex={1}
      >
        <Image fullWidth src={LandingImage} alt="LandingImage" />
        <Box
          sx={{
            [theme.breakpoints.up("md")]: {
              display: "none",
            },
          }}
          pt={6.5}
          display="flex"
          justifyContent="center"
        >
          <Button
            sx={{
              background: "linear-gradient(90deg, #8456EC 3.25%, #E87BF8 100%)",
              borderRadius: "10px",
            }}
            size="large"
            variant="contained"
          >
            🎉 Create my event
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default LangingPage;

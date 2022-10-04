import React, { useState, useContext } from "react";
import { BiPhotoAlbum } from "react-icons/bi";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import TextField from "@mui/material/TextField";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { Box, Button, Card, Paper, Typography } from "@mui/material";
import dayjs, { Dayjs } from "dayjs";
import { IEvent } from "../types/events";
import { EventContext } from "../context/EventContext";
import { useNavigate } from "react-router-dom";
type Props = {};

const fileToBase64 = (file: File | Blob): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      resolve(reader.result as string);
    };

    reader.readAsDataURL(file);
    reader.onerror = reject;
  });

const CreateEvent = (props: Props) => {
  const navigate = useNavigate();
  const { saveEvent } = useContext(EventContext);
  const [imageURI, setImageURI] = useState<string | null>(null);
  const [eventName, setEventName] = useState<string>("");
  const [hostName, sethostName] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [endTime, setEndTime] = useState<Dayjs | null>(
    dayjs("2014-08-18T21:11:54")
  );
  const [startTime, setStartTime] = useState<Dayjs | null>(
    dayjs("2014-08-18T21:11:54")
  );
  const onChangeEventName = (e: any) => {
    const v = e?.target?.value || "";
    setEventName(v);
  };
  const onChangeHostName = (e: any) => {
    const v = e?.target?.value || "";
    sethostName(v);
  };
  const onChangeLocation = (e: any) => {
    const v = e?.target?.value || "";
    setLocation(v);
  };
  const handleChangeStartTime = (newValue: Dayjs | null) => {
    console.log(dayjs(newValue).toString());
    setStartTime(newValue);
  };

  const handleChangeEndTime = (newValue: Dayjs | null) => {
    console.log(dayjs(newValue).toString());
    setEndTime(newValue);
  };

  const onSelectFiles = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      const tempFileList: { fileName: string; base64String: string } = {
        fileName: file.name,
        base64String:
          file.type.indexOf("image") > -1 ? await fileToBase64(file) : "",
      };
      setImageURI(tempFileList.base64String);
    }
  };

  const onSaveEvent = () => {
    const createdEvent: IEvent = {
      eventName: eventName || "",
      hostName: hostName || "",
      location: location || "",
      startTime: startTime?.toString() || "",
      endTime: endTime?.toString() || "",
      id: Math.random().toString(),
      imageURI,
    };

    saveEvent(createdEvent);
    navigate("/event");
  };

  return (
    <Box
      justifyContent="center"
      display="flex"
      alignItems="center"
      sx={{ height: "100vh" }}
    >
      <Card sx={{ maxWidth: "320px", p: 4 }}>
        <Typography
          sx={{
            background:
              "linear-gradient(90deg, #8456EC 24.2%, #E87BF8 120.46%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            textFillColor: "transparent",
            fontWeight: 700,
          }}
          component="h3"
          variant="h3"
        >
          Envited
        </Typography>
        {imageURI && (
          <Box component="label" aria-label="upload picture">
            <img style={{ width: "100%" }} src={imageURI} alt="Event Banner" />
            <input onChange={onSelectFiles} hidden accept="*" type="file" />
          </Box>
        )}

        {!imageURI && (
          <Paper aria-label="upload picture" component="label">
            <input onChange={onSelectFiles} hidden accept="*" type="file" />
            <Box
              sx={{ border: "1px dashed", borderRadius: 2, my: 2 }}
              p={4}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <BiPhotoAlbum size={96} />
            </Box>
          </Paper>
        )}
        <TextField
          value={eventName}
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          fullWidth
          required
          id="event-name"
          label="Event name"
          color="primary"
          variant="outlined"
          onChange={onChangeEventName}
        />
        <TextField
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          fullWidth
          required
          id="host-name"
          label="Host name"
          onChange={onChangeHostName}
          value={hostName}
        />
        <TextField
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          fullWidth
          required
          id="location"
          label="Location"
          onChange={onChangeLocation}
          value={location}
        />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateTimePicker
            label="Start Date"
            value={startTime}
            onChange={handleChangeStartTime}
            renderInput={(params) => (
              <TextField margin="normal" fullWidth {...params} />
            )}
          />
          <DateTimePicker
            label="End Date"
            value={endTime}
            onChange={handleChangeEndTime}
            renderInput={(params) => (
              <TextField margin="normal" fullWidth {...params} />
            )}
          />
        </LocalizationProvider>
        <Box py={2}>
          <Button
            onClick={onSaveEvent}
            fullWidth
            sx={{
              background: "linear-gradient(90deg, #8456EC 3.25%, #E87BF8 100%)",
              borderRadius: "10px",
            }}
            size="large"
            variant="contained"
          >
            NEXT
          </Button>
        </Box>
      </Card>
    </Box>
  );
};

export default CreateEvent;

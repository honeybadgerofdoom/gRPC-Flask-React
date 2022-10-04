import { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import { TextField, Button, Stack, Paper } from "@mui/material";

const useStyles = makeStyles({
    root: {
        margin: "10px",
        padding: "10px",
        width: "30vw",
        zIndex: 5000,
        opacity: 0.8
    }
  });

export default function ServerGreeter(props) {
    const classes = useStyles();
    const [message, setMessage] = useState('');
    const [serverResponse, setServerResponse] = useState('');

    const handleChange = (event) => {
        setMessage(event.target.value);
    }

    const handleSubmit = async() => {
        const response = await sendJsonRequest();
        setServerResponse(response);
    }

    async function sendJsonRequest() {
        setServerResponse("Request Pending...");
        const params = {
            'name': message
        };
        const endpoint = "helloWorld"
        const url = "http://127.0.0.1:5000/";
        const body = {
            'method':'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(params)
        }
        const promise = await fetch(url + endpoint, body);
        if(promise) {
            console.log({promise})
            return promise.json();
        }
        else return 'Server ERROR';
    }

    return (
        <Paper className={classes.root} elevation={3}>
            <Stack
                direction='row'
                spacing={2}
                alignContent='center'
                justifyContent='space-evenly'
            >
                <TextField
                    value={message}
                    label='Message to Server'
                    onChange={handleChange}
                />
                <Button onClick={handleSubmit} variant='outlined'>Send</Button>
                <TextField
                    value={serverResponse}
                    label='Server Response'
                />
            </Stack>
        </Paper>
    );
}
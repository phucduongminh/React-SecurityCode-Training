import React, {useState} from 'react';
import {Button, Typography, TextField, Box, Paper} from '@mui/material'
import '../auth/auth.css'
import auth_service from '../auth/auth-service'


export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onSetEmail = (e) => {
        setEmail(e.target.value)
    }

    const onSetPassword = (e) => {
        setPassword(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        auth_service.login(email, password).then((res) => {
            const token = res.data;
            localStorage.setItem("token", token);
            auth_service.setAuthToken(token)

            const redirectTo = new URL(window.location.search).searchParams.get('redirectTo')
            window.location.assign(redirectTo)
        }).catch((error) => {
            console.log("invalid credentials")
        })
      }

    return (
    <Box component="div" id="login-container">
        <h1>Boat Insurance</h1>
        <Paper elevation={2} className="paper">
            <form id="login-form">
                <Typography variant="h3">Login</Typography>
                <Typography variant="subtitle1">Welcome back, log in for more insurance fun!</Typography>
                <TextField
                    id="login-email"
                    required
                    type="email"
                    label="Email"
                    variant="outlined"
                    onChange={onSetEmail}
                />
                <TextField
                    id="login-password"
                    required
                    type="password"
                    label="Password"
                    variant="outlined"
                    onChange={onSetPassword}
                />
                <Button onClick={onSubmit} variant="contained" color="primary" type="submit" id="login-button">Login</Button>
             </form>
        </Paper>
    </Box>)
}
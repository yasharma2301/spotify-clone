import React from 'react'
import { Container, Col } from 'react-bootstrap';
import logo from '../assets/spotify-logo.svg';

const AUTH_URL =
    "https://accounts.spotify.com/authorize?client_id=2c8d588fb4184c37aceab97b4957e805&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"

export default function Login() {
    return (
        <Container className="d-flex flex-column justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
            <img src={logo} height="80"></img>
            <a className="btn btn-success btn-lg my-5" href={AUTH_URL}>Login With Spotify</a>
            <p className="text-white text-center">Listen to songs and read lyrics!<br/>Note that you can play tracks only if you are a premium Spotify user.</p>
        </Container>
    )
}

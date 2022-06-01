import React, { Component, useState } from 'react'
import { Navbar, Nav, NavDropdown, Button, Form, Container, FormControl } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch, Link, } from "react-router-dom";
import { Tooltip } from "@mui/material";
import Calendar from 'react-calendar';



const MiniProfile = (props) => {

    const [value, onChange] = useState(new Date());
    return (
        <Container>
            <span >
                <h6 style={{ width: "auto", display: "inline-block", marginTop: "5px" }}>{props.profile.first_name} {props.profile.last_name}</h6>
                <Tooltip title="Profile" placement="top">
                    <span style={{ float: "right", marginBottom: "2px", }}>
                        <Nav.Link href="Profile">
                            <svg
                                style={{ marginBottom: "20px" }}
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-arrow-up-right-square-fill"
                                viewBox="0 0 16 16"

                            >
                                <path d="M14 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12zM5.904 10.803 10 6.707v2.768a.5.5 0 0 0 1 0V5.5a.5.5 0 0 0-.5-.5H6.525a.5.5 0 1 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 .707.707z" />
                            </svg>
                        </Nav.Link>
                    </span>
                </Tooltip>
            </span>

            <h6>

                <span> {props.profile.faculty} </span>
            </h6>

            <h6>
                <span> โครงงานที่ทำอยู่ :</span>
                <span> Data science </span>


            </h6>
            <h6>
                <span>ครูที่ปรึกษา: สมศักดิ์ ศักดินา</span>
            </h6>
        </Container >
    )
}




export default MiniProfile;
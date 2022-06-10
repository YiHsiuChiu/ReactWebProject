import React from "react";
import NavBar from "./NavBar";
import Stack from '@mui/material/Stack';
import MoreInfoList from "./MoreInfoList";
import { useSelector } from "react-redux";
import { useNavigate,useParams } from "react-router";

export default function MoreInfoPage() {
    // const { text } = useParams();
    let {targetindex} = useParams();
    const shop = useSelector(state => state.tasks)[targetindex];
    return (
        <Stack spacing={2}>
            <NavBar icon="search"/>
            <MoreInfoList {...shop }/>
        </Stack>
    );
}
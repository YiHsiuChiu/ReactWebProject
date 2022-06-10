import React from "react";
import NavBar from "./NavBar";
import ShopList from "./ShopList";
import Stack from '@mui/material/Stack';

export default function ResultPage() {
    return (
        <Stack spacing={2}>
            <NavBar />
            <ShopList />
        </Stack>
    );
}
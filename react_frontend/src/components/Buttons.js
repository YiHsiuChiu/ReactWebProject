import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { taskUpdated } from "../tasks/tasksSlice";

export default function Buttons() {
    const dispatch = useDispatch();
    return (
    <Stack direction="row" spacing={2} justifyContent="center">
      <Button variant="outlined" startIcon={<ShuffleIcon />}  onClick={() => dispatch(taskUpdated())} >
        Again
      </Button>
      <Link style={{ textDecoration: 'none' }} to={'/'} >
        <Button variant="contained" endIcon={<RestartAltIcon />}>
            Reset
        </Button>
      </Link>
    </Stack>
  );
}
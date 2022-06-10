import React from "react";
import { useSelector } from "react-redux";
import Shop from "./Shop";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { taskUpdated } from "../tasks/tasksSlice";

export default function ShopList() {
    const shops = useSelector(state => state.tasks);
    const dispatch = useDispatch();
    // const shops = [
    //     {id: "1000001", name: "McDonald", restaurantStyle: "Fastfood", price: "Median", location: "116台北市文山區指南路二段67號", image: "/mcdonald.png", expand: true},
    //     {id: "1000002", name: "MosBurger", restaurantStyle: "Fastfood", price: "High", location: "116台北市文山區指南路二段71號", image: "", expand: false},
    //     {id: "1000003", name: "八方雲集", restaurantStyle: "Chinese", price: "Median", location: "116台北市文山區指南路二段47號", image: "", expand: false},
    //     {id: "1000004", name: "波波恰恰大馬風味餐", restaurantStyle: "SoutheastAsiaFood", price: "Median", location: "116台北市文山區指南路二段48號", image: "", expand: false},
    //     {id: "1000005", name: "Juicy Bun Burger", restaurantStyle: "American", price: "Median", location: "116台北市文山區萬壽路19號1樓", image: "", expand: false},
    //   ];
    console.log(shops)
    return (
        <>
            {shops.map((shop, i) =>
                <Shop key={shop.id} {...shop} expand={i} index={i} style={{ "width": "300px" }} />
            )}
            <Stack direction="row" spacing={2} justifyContent="center">
                <Button variant="outlined" startIcon={<ShuffleIcon />} onClick={() => dispatch(taskUpdated({data:shops}))} >
                    Again
                </Button>
                <Link style={{ textDecoration: 'none' }} to={'/'} >
                    <Button variant="contained" endIcon={<RestartAltIcon />}>
                        Reset
                    </Button>
                </Link>
            </Stack>
        </>
    );
}

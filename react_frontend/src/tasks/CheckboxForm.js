import * as React from "react"
import { useState, useRef } from "react";
import { Box, FormControlLabel, Checkbox, FormControl, FormLabel, FormGroup, Button } from '@mui/material';
import myVideo from './抽籤.mp4'
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { taskAdded } from "./tasksSlice";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function CheckboxForm() {
    const dispatch = useDispatch();
    const videoEl = useRef(null);
    const [foodStyles, setfoodStyles] = useState([])
    const [locations, setlocations] = useState([])
    const [foodTypes, setfoodTypes] = useState([])
    const [foodPrices, setfoodPrices] = useState([])
    // const [weeks, setWeek] = useState([])
    console.log({ foodStyles })
    console.log({ locations })
    const handlefoodStyleChange = (e) => {
        console.log(e.target.value);
        const index = foodStyles.indexOf(e.target.value);
        if (index === -1) {
            setfoodStyles([...foodStyles, e.target.value]);
        }
        else {
            setfoodStyles(foodStyles.filter((foodstyle) => foodstyle !== e.target.value))
        }
        
        //return foodStyles;
    }
    const handlelocationChange = (e) => {
        console.log(e.target.value);
        const index = locations.indexOf(e.target.value);
        if (index === -1) {
            setlocations([...locations, e.target.value]);
        }
        else {
            setlocations(locations.filter((location) => location !== e.target.value))
        }
    }
    const handlefoodTypeChange = (e) => {
        console.log(e.target.value);
        const index = foodTypes.indexOf(e.target.value);
        if (index === -1) {
            setfoodTypes([...foodTypes, e.target.value]);
        }
        else {
            setfoodTypes(foodTypes.filter((foodType) => foodType !== e.target.value))
        }
    }
    const handlefoodPriceChange = (e) => {
        console.log(e.target.value);
        const index = foodPrices.indexOf(e.target.value);
        if (index === -1) {
            setfoodPrices([...foodPrices, e.target.value]);
        }
        else {
            setfoodPrices(foodPrices.filter((foodPrice) => foodPrice !== e.target.value))
        }
    }
    // const handleweekChange = (e) => {
    //     console.log(e.target.value);
    //     const index = weeks.indexOf(e.target.value);
    //     if (index === -1) {
    //         setWeek([...weeks, e.target.value]);
    //     }
    //     else {
    //         setWeek(weeks.filter((week) => week !== e.target.value))
    //     }
    // }
    function delay(n){
        var start = new Date().getTime();
        var end = 0;
        while((end-start)<n){
            end =new Date().getTime();
        }
    }
    const submitResult = async () => {

        videoEl.current.play();
        delay(6000);
        let url = "http://localhost:3000/food?"
        if(foodStyles.length!=0){
            url = url + `&style=[${foodStyles}]`;
        }
        if(locations.length!=0){
            url = url + `&location=[${locations}]`;
        }
        if(foodTypes.length!=0){
            url = url + `&type=[${foodTypes}]`;
        }
        if(foodPrices.length!=0){
            url = url + `&price=[${foodPrices}]`;
        }
        // if(weeks.length!=0){
        //     url = url + `&week=[${weeks}]`;
        // }
        url.replace('?&','?')
        //const response = await fetch(`http://localhost:3000/food?style=[${foodStyles}]&location=[${locations}]&type=[${foodTypes}]&price=[${foodPrices}]&week=[${weeks}]`)
        const response = await fetch(url)

        const data = await response.json();
        dispatch(taskAdded({ todo_list: data }));
    }
    return (
        <>
            <NavBar />
            <Stack spacing={1}>
                <Item data-testid="test_checkbox">
                    <FormControl>
                        <FormLabel >風格 :</FormLabel>
                        <FormGroup row>
                            {/* {showfoodStyles.map((showfoodStyle,i) => 
                        <FormControlLabel key = {i}
                        label = {showfoodStyle}
                        control={<Checkbox value={showfoodStyle} checked={foodStyles.includes({showfoodStyle})} onChange = {handlefoodStyleChange}/>}
                        />)} */}
                            <FormControlLabel
                                label={<Box component="div" fontSize={10}>西式</Box>}
                                control={<Checkbox size="small" value='0' checked={foodStyles.includes('0')} onChange={handlefoodStyleChange} />}
                            />
                            <FormControlLabel
                                label={<Box component="div" fontSize={10}>日式</Box>}
                                control={<Checkbox size="small" value='1' checked={foodStyles.includes('1')} onChange={handlefoodStyleChange} />}
                            />
                            <FormControlLabel
                                label={<Box component="div" fontSize={10}>東南亞</Box>}
                                control={<Checkbox size="small" value='2' checked={foodStyles.includes('2')} onChange={handlefoodStyleChange} />}
                            />
                            <FormControlLabel
                                label={<Box component="div" fontSize={10}>中式</Box>}
                                control={<Checkbox size="small" value='3' checked={foodStyles.includes('3')} onChange={handlefoodStyleChange} />}
                            />
                            <FormControlLabel
                                label={<Box component="div" fontSize={10}>泰式</Box>}
                                control={<Checkbox size="small" value='4' checked={foodStyles.includes('4')} onChange={handlefoodStyleChange} />}
                            />
                            <FormControlLabel
                                label={<Box component="div" fontSize={10}>韓式</Box>}
                                control={<Checkbox size="small" value='5' checked={foodStyles.includes('5')} onChange={handlefoodStyleChange} />}
                            />
                            <FormControlLabel
                                label={<Box component="div" fontSize={10}>其他</Box>}
                                control={<Checkbox size="small" value='6' checked={foodStyles.includes('6')} onChange={handlefoodStyleChange} />}
                            />
                        </FormGroup>
                        <FormLabel>區域 :</FormLabel>
                        <FormGroup row>
                            {/* {showfoodStyles.map((showfoodStyle,i) => 
                        <FormControlLabel key = {i}
                        label = {showfoodStyle}
                        control={<Checkbox value={showfoodStyle} checked={foodstyles.includes({showfoodStyle})} onChange = {handlefoodStyleChange}/>}
                        />)} */}
                            <FormControlLabel
                                label={<Box component="div" fontSize={10}>正門</Box>}
                                control={<Checkbox size="small" value='0' checked={locations.includes('0')} onChange={handlelocationChange} />}
                            />
                            <FormControlLabel
                                label={<Box component="div" fontSize={10}>商側</Box>}
                                control={<Checkbox size="small" value='1' checked={locations.includes('1')} onChange={handlelocationChange} />}
                            />
                            <FormControlLabel
                                label={<Box component="div" fontSize={10}>後山</Box>}
                                control={<Checkbox size="small" value='2' checked={locations.includes('2')} onChange={handlelocationChange} />}
                            />
                            <FormControlLabel
                                label={<Box component="div" fontSize={10}>木柵市場</Box>}
                                control={<Checkbox size="small" value='3' checked={locations.includes('3')} onChange={handlelocationChange} />}
                            />
                            <FormControlLabel
                                label={<Box component="div" fontSize={10}>山上宿舍</Box>}
                                control={<Checkbox size="small" value='4' checked={locations.includes('4')} onChange={handlelocationChange} />}
                            />
                            <FormControlLabel
                                label={<Box component="div" fontSize={10}>新光路</Box>}
                                control={<Checkbox size="small" value='5' checked={locations.includes('5')} onChange={handlelocationChange} />}
                            />
                            <FormControlLabel
                                label={<Box component="div" fontSize={10}>麥側</Box>}
                                control={<Checkbox size="small" value='6' checked={locations.includes('6')} onChange={handlelocationChange} />}
                            />
                        </FormGroup>
                        <FormLabel>類型 :</FormLabel>
                        <FormGroup row>
                            <FormControlLabel
                                label={<Box component="div" fontSize={10}>飯</Box>}
                                control={<Checkbox size="small" value='0' checked={foodTypes.includes('0')} onChange={handlefoodTypeChange} />}
                            />
                            <FormControlLabel
                                label={<Box component="div" fontSize={10}>麵</Box>}
                                control={<Checkbox size="small" value='1' checked={foodTypes.includes('1')} onChange={handlefoodTypeChange} />}
                            />
                            <FormControlLabel
                                label={<Box component="div" fontSize={10}>素食</Box>}
                                control={<Checkbox size="small" value='2' checked={foodTypes.includes('2')} onChange={handlefoodTypeChange} />}
                            />
                            <FormControlLabel
                                label={<Box component="div" fontSize={10}>速食</Box>}
                                control={<Checkbox size="small" value='3' checked={foodTypes.includes('3')} onChange={handlefoodTypeChange} />}
                            />
                            <FormControlLabel
                                label={<Box component="div" fontSize={10}>其他</Box>}
                                control={<Checkbox size="small" value='4' checked={foodTypes.includes('4')} onChange={handlefoodTypeChange} />}
                            />
                        </FormGroup>
                        <FormLabel>價格 :</FormLabel>
                        <FormGroup row>
                            <FormControlLabel
                                label={<Box component="div" fontSize={10}>100以下</Box>}
                                control={<Checkbox size="small" value='0' checked={foodPrices.includes('0')} onChange={handlefoodPriceChange} />}
                            />
                            <FormControlLabel
                                label={<Box component="div" fontSize={10}>100~200</Box>}
                                control={<Checkbox size="small" value='1' checked={foodPrices.includes('1')} onChange={handlefoodPriceChange} />}
                            />
                            <FormControlLabel
                                label={<Box component="div" fontSize={10}>200~300</Box>}
                                control={<Checkbox size="small" value='2' checked={foodPrices.includes('2')} onChange={handlefoodPriceChange} />}
                            />
                            <FormControlLabel
                                label={<Box component="div" fontSize={10}>300以上</Box>}
                                control={<Checkbox size="small" value='3' checked={foodPrices.includes('3')} onChange={handlefoodPriceChange} />}
                            />
                        </FormGroup>
                        {/* <FormLabel>營業時間 :</FormLabel>
                        <FormGroup row>
                            <FormControlLabel
                                label={<Box component="div" fontSize={10}>星期日</Box>}
                                control={<Checkbox size="small" value='0' checked={weeks.includes('0')} onChange={handlefoodPriceChange} />}
                            />
                            <FormControlLabel
                                label={<Box component="div" fontSize={10}>星期一</Box>}
                                control={<Checkbox size="small" value='1' checked={weeks.includes('1')} onChange={handleweekChange} />}
                            />
                            <FormControlLabel
                                label={<Box component="div" fontSize={10}>星期二</Box>}
                                control={<Checkbox size="small" value='2' checked={weeks.includes('2')} onChange={handleweekChange} />}
                            />
                            <FormControlLabel
                                label={<Box component="div" fontSize={10}>星期三</Box>}
                                control={<Checkbox size="small" value='3' checked={weeks.includes('3')} onChange={handleweekChange} />}
                            />
                            <FormControlLabel
                                label={<Box component="div" fontSize={10}>星期四</Box>}
                                control={<Checkbox size="small" value='4' checked={weeks.includes('4')} onChange={handleweekChange} />}
                            />
                            <FormControlLabel
                                label={<Box component="div" fontSize={10}>星期五</Box>}
                                control={<Checkbox size="small" value='5' checked={weeks.includes('5')} onChange={handleweekChange} />}
                            />
                            <FormControlLabel
                                label={<Box component="div" fontSize={10}>星期六</Box>}
                                control={<Checkbox size="small" value='6' checked={weeks.includes('6')} onChange={handleweekChange} />}
                            />
                        </FormGroup> */}
                    </FormControl>
                </Item>
                <Box textAlign='center'>
                    <div data-testid="test_video" style={{ height: "80%", width: "100%" }}><video ref={videoEl} style={{ autoplay: "False", muted: "False", height: "100%", width: "90%", margin: "auto" }} ><source type="video/mp4" src={myVideo}></source></video></div>
                </Box>
                <Link style={{ textDecoration: 'none' }} to="/ResultPage">
                    <Box textAlign='center'>
                        <Button data-testid="test_button" variant="outlined" onClick={submitResult}>Start</Button>
                    </Box>
                </Link>
            </Stack>
        </>
    );
}
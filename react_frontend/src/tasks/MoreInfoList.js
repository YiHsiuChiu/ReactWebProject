import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';

const weeks = {0:'星期日',1:'星期一',2:'星期二',3:'星期三',4:'星期四',5:'星期五',6:'星期六'} 
const styles = {0:'西式',1:'日式',2:'東南亞',3:'中式',4:'泰式',5:'韓式',6:'其他'}
const locations = {0:'正門',1:'商側',2:'後山',3:'木柵市場',4:'山上宿舍',5:'新光路',6:'麥側'}
const types = {0:'飯',1:'麵',2:'素食',3:'速食',4:'其他'}
const prices = {0:'100以下',1:'100-200',2:'200-300',3:'300以上'}

export default function MoreInfoList({id, Name= "None", style= "None", price= "None", address= "None", image= "/No_images.png", phone="None", startTime='None', endTime='None', type = 'None'}) {
    // const shops = useSelector(state => state.shops);
    // console.log(shops)
    
    return (
        <>
            {/* <div style={{backgroundColor: "yellow"}}>
                <h1>{text}</h1>
            </div> */}
            <Card sx={{ minWidth: 300}}>
                <CardMedia
                    component="img"
                    alt={Name}
                    height="250"
                    image={image}
                /> 
            </Card>
            <Card>
                <CardContent>
                    <Typography gutterBottom variant="h3" component="div">
                    {Name}
                    </Typography>
                </CardContent>
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                    價位：{price.map((item,i)=>prices[item]+" ")}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    地址：{address}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    電話：{phone}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    營業時間：{startTime} ~ {endTime}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    風格：{style.map((item,i)=>styles[item]+" ")}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    類型：{type.map((item,i)=>types[item]+" ")}
                    </Typography>
                </CardContent>
            </Card>
        </>
    );
}
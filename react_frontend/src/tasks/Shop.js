
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import { Link } from "react-router-dom";

const weeks = {0:'星期日',1:'星期一',2:'星期二',3:'星期三',4:'星期四',5:'星期五',6:'星期六'} 
const styles = {0:'西式',1:'日式',2:'東南亞',3:'中式',4:'泰式',5:'韓式',6:'其他'}
const locations = {0:'正門',1:'商側',2:'後山',3:'木柵市場',4:'山上宿舍',5:'新光路',6:'麥側'}
const types = {0:'飯',1:'麵',2:'素食',3:'速食',4:'其他'}
const prices = {0:'100以下',1:'100-200',2:'200-300',3:'300以上'}

export default function Shop({id, Name= "None", style= "None", price= "None", location= "None", image= "/No_images.png", expand=false, index = "None"}) {
    // const dispatch = useDispatch();
    if(expand==0){
        return ( 
            <Link style={{ textDecoration: 'none' }} to={'/MoreInfoPage/'+ index} params={{text: "hello"}}>    
                <Card sx={{ minWidth: 300 }}>
                    <CardMedia
                        component="img"
                        alt={Name}
                        height="250"
                        image={image}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        {Name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        價位：{price.map((item,i)=>prices[item]+" ")}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        地址：{locations[location]}
                        </Typography>
                    </CardContent>
                </Card>
            </Link> 
        );
    } else {
        return (
            <Link style={{ textDecoration: 'none' }} to={'/MoreInfoPage/'+ index}>
                <Card sx={{ minWidth: 300 }}>
                    <CardContent>
                    <Typography variant="h5" component="div">
                        {Name}
                    </Typography>
                    </CardContent>
                </Card>
            </Link>
            
        );
    }
}

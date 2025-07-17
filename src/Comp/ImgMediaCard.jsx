import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/Cartslice';

export default function ImgMediaCard(props) {

const{productdetail}=props
const dispatch=useDispatch()


  return (
    <Card  className="relative border-red-300 border-4 shadow-xl shadow-orange-400" sx={{ maxWidth: 305, height:"50vh",  boxShadow:"5px 5px 10px 1px grey",}}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="50px"
        
        // image="/static/images/cards/contemplative-reptile.jpg"

        image={productdetail.image}

         sx={{ 
          
          height:"150px" ,     // ✅ Change this to make image smaller or bigger
      objectFit: "contain",
      
        width:"150px",

           boxShadow:"1px 2px 7px 1px grey",
          margin:"auto",
          marginTop:"10px",
          // filter: 'drop-shadow(1px 2px 7px red)'


         }}

      />
      <CardContent>
        <Typography gutterBottom variant="body1"component="div">
         {productdetail.title}
        </Typography>
        <Typography variant="body2"  className='line-clamp-3'  sx={{ color: 'text.secondary' }}>
          {productdetail.description}
        </Typography>
      </CardContent>
      <CardActions  className='absolute bottom-0 ml-10 '>
        <Button size="small" color="primary" variant='contained' onClick={()=>{dispatch(addToCart(productdetail))}} >Add to cart</Button>
        {/* <button className="px-4 py-1 bg-green-700 text-white text-sm rounded">
  Add to cart
</button> */}

        <Button size="small" color="success" variant='contained'>Learn More</Button>
      </CardActions>
    </Card>
  );
}

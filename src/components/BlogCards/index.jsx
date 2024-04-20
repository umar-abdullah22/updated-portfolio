import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const BlogCards = ({ image, title, description }) => { // Destructure props
    return (
        <>
            <Card sx={{ maxWidth: 345, }} className='shadow-2xl'>
                <CardMedia
                    sx={{ height: 140, backgroundPosition: "top" }}
                    className=' '
                    image={image}
                    title={title} // Use title from props
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div" className='text-[#000000B3] font-bold'>
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
                <CardActions className='justify-end'>
                    <Button size="small">Read More</Button>
                </CardActions>
            </Card>
        </>
    )
}

export default BlogCards;

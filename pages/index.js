import Layout from '../components/Layout';
import NextLink from 'next/link';
import {
	Grid,
	Card,
	CardActionArea,
	CardMedia,
	CardActions,
	CardContent,
	Typography,
	Button
} from '@material-ui/core';
import data from '../utils/data';

export default function Home() {
  // console.log(data);
  return (
    <Layout>
    <div>
      <h1>Product</h1>
      <Grid container spacing={3}>
      {data.products.map((product)=>{
        return <Grid item md={4} key={product.name} >
          <Card>
            <NextLink href={`/product/${product.slug}`} >
              <CardActionArea>
                <CardMedia component="img" image={product.image} title={product.name}>

                </CardMedia>
                <CardContent>
                  <Typography>
                    {product.name}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </NextLink>
            <CardActions>
              <Typography>${product.price}</Typography>
              <Button size="small" color="primary">Add to cart</Button>
            </CardActions>
          </Card>
        </Grid>
      })}
      </Grid>
    </div>
    </Layout>
  )
}

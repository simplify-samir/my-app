
import React from 'react';
import {
    Box,
    Typography,
    Card,
    CardHeader,
    CardMedia,
    CardContent,
    styled,
    Grid
} from '@mui/material';
import { IProductDetails } from '../../utils/constant';

const ProductSection = styled(Box)(() => ({
    padding: '16px',
    display: 'contents'
}));
const ProductCard = styled(Card)(() => ({
    padding: 0,
    cursor: 'pointer',
    height: '175px'
}));
const ProductHeader = styled(CardHeader)(() => ({
    paddingBottom: 0,
}));

const ProductLogo = styled(CardMedia)(() => ({
    height: '36px',
    backgroundSize: 'contain !important',
    backgroundPosition: 'left',
}));
const ProductContent = styled(CardContent)(() => ({
    position: 'relative',
}));
const ProductListView: React.FC<any> = ({ products }) => {


    return (
        <ProductSection>
            {products.map((product: IProductDetails) => {
                return (
                    <Grid
                        key={product.title}
                        size={{ xs: 12, sm: 6, lg: 3 }} >
                        <ProductCard>
                            <ProductHeader
                                title={
                                    <ProductLogo
                                        title={product.title}
                                        image={product.image}
                                    />
                                }
                            />
                            <ProductContent>
                                <Typography variant="body2" sx={{ fontWeight: 500 }}>
                                    {product.title}
                                </Typography>
                                <Box>
                                    <Typography variant="caption">Price : </Typography>
                                    <Typography variant="caption" sx={{ fontWeight: 500 }}>
                                        {product.price}
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography variant="caption">Rate : </Typography>
                                    <Typography variant="caption" sx={{ fontWeight: 500 }}>
                                        {product.rating.rate}
                                    </Typography>
                                    <Typography variant="caption" style={{ marginLeft: '5px' }}>Count :</Typography>
                                    <Typography variant="caption" sx={{ fontWeight: 500 }}>
                                        {product.rating.count}
                                    </Typography>
                                </Box>
                            </ProductContent>
                        </ProductCard>
                    </Grid>
                )
            })}
        </ProductSection>
    )
}

export default ProductListView;
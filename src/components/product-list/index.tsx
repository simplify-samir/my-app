import React, { useEffect } from 'react';
import {
  Box,
  Typography,
  styled,
  Grid,
} from '@mui/material';
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ProductGridView from './ProductGridView';
import ProductListView from './ProductListView';
import { apiResponse } from '../../utils/samplejson';

const ClientsHeading = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '16px'
}));



export default function ProductList() {

  const apiUrl = 'https://fakestoreapi.com/products';
  const [view, setView] = React.useState('list');
  const [filterValue, setFilterValue] = React.useState('lowToHigh');
  const [products, setProducts] = React.useState([]);     // apiUrl not wokring so I'm using now sample JSON response

  useEffect(() => {
    // fetchProductList()
    handleSort(filterValue)
  }, [])

  const fetchProductList = async () => {

    let response = fetch(apiUrl)
      .then((res) => {
        res.json().then(res => {
          console.log('res', res);
          // setProducts(res)             // api not working so using sample API response
        }).catch(err => {
          console.log('error', err)
        })
      })
  }



  const handleChange = (event: React.MouseEvent<HTMLElement>, nextView: string) => {
    setView(nextView);
  };
  const handleChangeFilter = (event: React.MouseEvent<HTMLElement>, nextView: string) => {
    setFilterValue(nextView)
    handleSort(nextView)
  };
  const handleSort = (val: string) => {
    let res: any = []
    if (val === 'lowToHigh') {
      res = apiResponse.sort((a, b) => a.price - b.price)

    } else {
      res = apiResponse.sort((a, b) => b.price - a.price)
    }
    setProducts(res)
  }

  return (<>
    <ClientsHeading>
      <Typography variant="h4">Product List</Typography>
      <Typography variant="h4">{view === 'list' ? 'List View' : 'Grid View'}</Typography>
      <ToggleButtonGroup
        orientation="horizontal"
        value={view}
        exclusive
        onChange={handleChange}
      >
        <ToggleButton value="list" aria-label="list">
          <ViewListIcon />
        </ToggleButton>
        <ToggleButton value="module" aria-label="module">
          <ViewModuleIcon />
        </ToggleButton>
      </ToggleButtonGroup>
    </ClientsHeading>
    <Grid container sx={{ alignItems: 'center' }}>
      <Typography variant="h5">Filter  : </Typography>
      <Typography variant="h6">Low To high</Typography>
      <ToggleButtonGroup
        orientation="horizontal"
        value={filterValue}
        exclusive
        onChange={handleChangeFilter}
      >
        <ToggleButton value="lowToHigh" aria-label="lowToHigh">
          <ArrowUpwardIcon />
        </ToggleButton>
        <ToggleButton value="highToLow" aria-label="highToLow">
          <ArrowDownwardIcon />
        </ToggleButton>
      </ToggleButtonGroup>
      <Typography variant="h6">high To Low</Typography>
    </Grid>

    <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 3 }}>
      {
        view === 'list' ?
          (<>
            <ProductListView products={products} />
          </>) : (<>
            <ProductGridView products={products} />
          </>)
      }
    </Grid>

  </>)

}
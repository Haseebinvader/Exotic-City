import { Button, Grid, Typography } from "@mui/material"

const RequestQuote = () => {
  return (
    <Grid container sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
      <Grid item sx={{ backgroundColor: 'orange', width: '100%', textAlign: 'center', color: '#fff', height: '10rem' }}>
        <Typography variant="h4" sx={{ fontWeight: '600', pl: '3rem', pt: '2rem' }}>REQUEST PRICE QUOTATION</Typography>
        <Typography sx={{ pl: '3rem' }}>The following products are listed for the quotation.</Typography>
        <Typography sx={{ pl: '3rem' }}>Click on the button on the bottom to request a price quote. </Typography>
      </Grid>
      <Grid item>
        <Button variant="contained" color="info">request price quotation</Button>
      </Grid>
    </Grid>)
}

export default RequestQuote
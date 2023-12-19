import { Box, Grid, Typography } from "@mui/material"

const Contact = () => {
  return (
    <Grid container>
      <Grid item>
        <Box sx={{ ml: '4rem', mt: '2rem' }}>
          <Typography sx={{ textAlign: 'left', fontSize: '25px', fontWeight: '600' }}>Contact Us</Typography>
        </Box>
        <Box sx={{ width: '100%', height: '2px', backgroundColor: 'orange', margin: '8px 0', ml: '4rem', mt: '1rem' }} ></Box>
      </Grid>
    </Grid>

  )
}

export default Contact
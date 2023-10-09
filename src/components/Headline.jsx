import { Toolbar, AppBar, Typography } from "@mui/material";

const Headline = () => {
  return (
    <AppBar position="relative" sx={{height: '2.2rem', backgroundColor: "#F7A92E", width: '100%'}}>
    <Toolbar sx={{marginTop: '-0.8rem'}}>
      <Typography sx={{fontSize: '15px', textAlign: 'center', width: '100%'}}> WE ARE CHANGING TO A NEW COMPUTER SYSTEM ON 23/09/2023, CLICK HERE FOR MORE INFORMATION </Typography>
   </Toolbar>
  </AppBar>  )
}

export default Headline
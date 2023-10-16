import { Grid, Card, Typography } from "@mui/material";
import { Services_Data } from "../../Data/Project_Data";

const ServicesCards = () => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4}>
                <Card>
                    <img src={Services_Data.Cash_Cary_Image} width={'100%'} />
                    <Typography variant="h6">{Services_Data.Cash_Cary_Title}</Typography>
                    <Typography variant="p">{Services_Data.Cash_Cary_Description}</Typography>
                </Card>
                <Card sx={{mt: '4rem'}}>
                    <img src={Services_Data.Distribution_Image} width={'100%'} />
                    <Typography variant="h6">{Services_Data.Distribution_Title}</Typography>
                    <Typography variant="p">{Services_Data.Distribution_Description}</Typography>
                </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4} >
                <Card>
                    <img src={Services_Data.Express_Image} width={'100%'} />
                    <Typography variant="h6">{Services_Data.Express_Title}</Typography>
                    <Typography variant="p">{Services_Data.Express_Description}</Typography>
                </Card>
                <Card sx={{mt: '4rem'}}>
                    <img src={Services_Data.Logistic_Image} width={'100%'} />
                    <Typography variant="h6">{Services_Data.Logistic_Title}</Typography>
                    <Typography variant="p">{Services_Data.Logistic_Description}</Typography>
                </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <Card sx={{height: '32rem'}}>
                    <img src={Services_Data.International_Image} width={'100%'} />
                    <Typography variant="h6">{Services_Data.International_Title}</Typography>
                    <Typography variant="p">{Services_Data.International_Description}</Typography>
                </Card>
                <Card sx={{mt: '4rem'}}>
                    <img src={Services_Data.Relation_Image} width={'100%'} />
                    <Typography variant="h6">{Services_Data.Relation_Title}</Typography>
                    <Typography variant="p">{Services_Data.Relation_Description}</Typography>
                </Card>
            </Grid>
        </Grid>
    );
}

export default ServicesCards;

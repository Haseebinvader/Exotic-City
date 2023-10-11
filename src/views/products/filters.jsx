import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';

const categories = ["Drinks", "Preserved Food", "Fresh Food", "Frozen Food"]
const sub_categories = ["Drinks", "Preserved Food", "Fresh Food", "Frozen Food"]
const brands = ["Drinks", "Preserved Food", "Fresh Food", "Frozen Food"]



const filters = () => {
    return (
        <Grid container>
            <Grid item>
                {/* Category Dropdown */}
                <Box sx={{ minWidth: 150, maxHeight: 10 }}>
                    <FormControl fullWidth><Select>{categories.map((item, index) => (<Box key={index}><MenuItem>{item}</MenuItem></Box>))}</Select></FormControl>
                </Box>
            </Grid>
            {/* Sub-Category Dropdown */}
            <Grid item>
                <Box sx={{ minWidth: 150 }}>
                    <FormControl fullWidth>
                        <Select>{sub_categories.map((item, index) => (<Box key={index}><MenuItem value={item}>{item}</MenuItem></Box>))}</Select>
                    </FormControl>
                </Box>
            </Grid>
            {/* Brand Dropdown */}
            <Grid item>
                <Box sx={{ minWidth: 150 }}>
                    <FormControl fullWidth>
                        <Select>{brands.map((item, index) => (<Box key={index}><MenuItem value={item}>{item}</MenuItem></Box>))} </Select>
                    </FormControl>
                </Box>
            </Grid>
        </Grid>

    )
}

export default filters
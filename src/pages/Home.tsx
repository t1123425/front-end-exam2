import React, {useState} from 'react';
import {Grid, Box, FormControl, OutlinedInput, Slider} from '@mui/material';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom';
interface SearchData {
  value: string;
  pageRange: number | number[];
}

const Home: React.FC = () => {
  const history = useNavigate();
  const [searchData, setSearchData] = useState<SearchData>({
    value: '',
    pageRange: 30,
  });
  const rangeMarks = [
    {
      value: 6,
      label: '3',
    },
    {
      value: 12,
      label: '6',
    },
    {
      value: 18,
      label: '9',
    },
    {
      value: 24,
      label: '12',
    },
    {
      value: 30,
      label: '15',
    },
    {
      value: 100,
      label: '50',
    },
  ];
  const handleChange =
    (prop: keyof SearchData) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchData({...searchData, [prop]: event.target.value});
    };
  const searchSubmit = () => {
    history('/search');
  };
  const searchBoxStyle = {
    paddingBottom: '30px',
    marginTop: '30px',
  };
  const sliderBoxStyle = {
    padding: '30px 0',
    border: '1px solid rgba(255,255,255,0.1)',
    borderLeft: 0,
    borderRight: 0,
  };
  return (
    <Grid
      container
      sx={{height: 1}}
      justifyContent="space-between"
      flexDirection="column"
    >
      <Grid item>
        {/* Search block */}
        <Box sx={searchBoxStyle}>
          <Typography
            variant="h1"
            sx={{
              fontSize: '1.5rem',
              marginBottom: '20px',
            }}
            color="primary.contrastText"
          >
            Search
          </Typography>
          <FormControl variant="outlined" sx={{width: 1}}>
            <OutlinedInput
              value={searchData.value}
              onChange={handleChange('value')}
              placeholder="Keyword"
            />
          </FormControl>
        </Box>
        {/* page range slider block*/}
        <Box sx={sliderBoxStyle}>
          <Typography
            variant="h1"
            sx={{fontSize: '1.5rem'}}
            color="primary.contrastText"
          >
            # of results per page
          </Typography>
          <Box
            sx={{display: 'flex', alignItems: 'baseline', margin: '20px auto'}}
          >
            <Typography
              variant="h2"
              sx={{fontSize: '3rem', fontWeight: 700, marginRight: '10px'}}
              color="primary.contrastText"
            >
              {searchData.pageRange}
            </Typography>
            <Typography color="primary.contrastText">result</Typography>
          </Box>
          <Box sx={{width: 1}}>
            <Slider
              min={rangeMarks[0].value}
              max={rangeMarks[rangeMarks.length - 1].value}
              defaultValue={rangeMarks[4].value}
              onChange={(event: Event, newValue: number | number[]) => {
                setSearchData({...searchData, pageRange: newValue});
              }}
              marks={rangeMarks}
              step={null}
            ></Slider>
          </Box>
        </Box>
      </Grid>
      <Grid item sx={{paddingBottom: '90px'}}>
        <Button
          className="customBtn"
          onClick={searchSubmit}
          variant="contained"
          sx={{maxWidth: '343px', width: 1}}
        >
          Search
        </Button>
      </Grid>
    </Grid>
  );
};

export default Home;

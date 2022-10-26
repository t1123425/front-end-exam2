import React, {useState} from 'react';
import {Grid, Box, FormControl, OutlinedInput, Slider} from '@mui/material';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom';
import BPMatches from '../helpers/BreakPointMatch';

interface SearchData {
  value: string;
  pageSize: number | number[];
}

/**
 * Home page:
 * Users can fill in keywords in the search bar and
 * switch the page size of the slide bar and
 * click the button to search.
 */

const Home: React.FC = () => {
  const history = useNavigate();
  const mdMatch = BPMatches('md');
  // Default search data
  const [searchData, setSearchData] = useState<SearchData>({
    value: '',
    pageSize: 30,
  });
  const rangeMarks = [
    {
      value: 0,
      label: '3',
      pageSize: 6,
    },
    {
      value: 20,
      label: '6',
      pageSize: 12,
    },
    {
      value: 40,
      label: '9',
      pageSize: 18,
    },
    {
      value: 60,
      label: '12',
      pageSize: 24,
    },
    {
      value: 80,
      label: '15',
      pageSize: 30,
    },
    {
      value: 110,
      label: '50',
      pageSize: 100,
    },
  ];
  const handleChange =
    (prop: keyof SearchData) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchData({...searchData, [prop]: event.target.value});
    };
  const searchSubmit = () => {
    history(
      `/search?pageSize=${searchData.pageSize}&keyword=${searchData.value}`
    );
  };
  const searchBoxStyle = {
    paddingBottom: mdMatch ? 0 : '30px',
    marginTop: mdMatch ? 0 : '54px',
  };
  const sliderBoxStyle = {
    padding: mdMatch ? '28px 0 218px' : '30px 0 45px',
    borderTop: mdMatch ? 0 : '1px solid rgba(255,255,255,0.1)',
    borderBottom: '1px solid rgba(255,255,255,0.1)',
    marginBottom: mdMatch ? '80px' : 0,
  };
  function renderLabelActive() {
    const index = rangeMarks.findIndex(e => e.pageSize === searchData.pageSize);
    return index;
  }
  return (
    <Grid
      container
      sx={{height: 1, padding: mdMatch ? '70px 20px' : 0}}
      justifyContent={mdMatch ? 'flex-start' : 'space-between'}
      flexDirection="column"
    >
      <Grid item>
        {/* Search block */}
        <Box sx={searchBoxStyle}>
          <Typography
            variant="h1"
            sx={{
              fontSize: '1.5rem',
              marginBottom: mdMatch ? '16px' : '20px',
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
        {/* page Size slider block*/}
        <Box sx={sliderBoxStyle}>
          <Typography
            variant="h1"
            sx={{fontSize: '1.5rem'}}
            color="primary.contrastText"
          >
            # Of Results Per Page
          </Typography>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'baseline',
              margin: mdMatch ? '16px auto 0' : '20px auto',
            }}
          >
            <Typography
              variant="h2"
              sx={{fontSize: '3rem', fontWeight: 700, marginRight: '10px'}}
              color="primary.contrastText"
            >
              {searchData.pageSize}
            </Typography>
            <Typography color="primary.contrastText">result</Typography>
          </Box>
          <Box sx={{width: 1}}>
            {/* pageSize slider */}
            <Slider
              min={rangeMarks[0].value}
              max={rangeMarks[rangeMarks.length - 1].value}
              defaultValue={rangeMarks[4].value}
              onChange={(event: Event, newValue: number | number[]) => {
                const selectedRange = rangeMarks.find(
                  e => e.value === newValue
                );
                //console.log('selectedRange', selectedRange);
                setSearchData({
                  ...searchData,
                  pageSize: selectedRange?.pageSize
                    ? selectedRange.pageSize
                    : 0,
                });
              }}
              sx={{
                marginBottom: 0,
                [`.MuiSlider-markLabelActive[data-index="${renderLabelActive()}"]`]:
                  {
                    color: '#fff',
                  },
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

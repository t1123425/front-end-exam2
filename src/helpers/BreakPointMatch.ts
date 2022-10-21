import useMediaQuery from '@mui/material/useMediaQuery';
import {useTheme} from '@mui/material/styles';
import {Breakpoint} from '@mui/material/styles';

const BPMatches = (bp: Breakpoint) => {
  const themes = useTheme();
  const matches = useMediaQuery(themes.breakpoints.down(bp));

  return matches;
};

export default BPMatches;

import bodyImage from 'assets/img/image19.png';

export default {
  formControl: {
    width: '48%'
  },
  container: {
    backgroundImage: `url(${bodyImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'auto 800px',
    backgroundPosition: 'right 490px'
  },
  divider: {
    position: 'relative',
    '&::before': {
      content: "''",
      position: 'absolute',
      bottom: 0,
      left: 0,
      backgroundColor: 'var(--gray-20)',
      height: 1
    }
  },
  dividerHeader: {
    paddingBottom: 30,
    '&::before': {
      width: 580
    }
  },
  dividerBreast: {
    '&::before': {
      width: 560
    }
  },
  dividerLong: {
    marginBottom: 70,
    '&::before': {
      width: 610
    }
  }
};

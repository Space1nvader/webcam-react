export default {
  root: {
    width: 52,
    height: 32,
    padding: 0,
    display: 'flex'
  },
  switchBase: {
    padding: 2,
    '&$checked': {
      transform: 'translateX(20px)',
      '& + $track': {
        opacity: 1,
        backgroundColor: 'var(--blue-50)'
      }
    }
  },
  thumb: {
    width: 28,
    height: 28,
    boxShadow: 'none',
    backgroundColor: 'var(--gray-0)'
  },
  track: {
    border: `2px solid var(--blue-50)`,
    boxSizing: 'border-box',
    borderRadius: 100,
    opacity: 0.1,
    backgroundColor: 'var(--gray-30)'
  },
  checked: {},
  focusVisible: {},
  label: {
    position: 'relative',
    '&:before': {
      content: 'attr(data-label)',
      color: 'var(--gray-50)',
      fontSize: 12,
      position: 'absolute',
      bottom: 'calc(100% + 6px)',
      left: 0,
      width: '100%',
      letterSpacing: '0.033em',
      fontFeatureSettings: "'ss01' on",
      textAlign: 'center'
    }
  }
};

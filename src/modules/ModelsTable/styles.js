export const styles = {
  tableContainer: {
    borderRadius: 12,
    border: '1px solid var(--gray-20)',
    boxSizing: 'border-box',
    padding: '24px 24px 0'
  },
  tableRow: {
    animation: '$fadeIn .3s both',
    opacity: 0,
    '&:hover': {
      backgroundColor: 'var(--indigo-0)'
    },
    '&:first-of-type': {
      // borderTop: '18px solid transparent'
    }
  },
  '@keyframes fadeIn': {
    '0%': {
      opacity: 0
    },
    '100%': {
      opacity: 1
    }
  }
};

export const styles = {
  tableContainer: {
    borderRadius: 12,
    border: '1px solid var(--gray-20)',
    boxSizing: 'border-box',
    padding: '24px 24px 0'
  },
  tableRow: {
    '&:hover': {
      backgroundColor: 'var(--indigo-0)'
    },
    '&:first-of-type': {
      borderTop: '18px solid transparent'
    }
  }
};

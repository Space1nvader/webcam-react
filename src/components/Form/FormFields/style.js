export const style = {
  field: {
    width: 'calc(50% - (32px / 2))',
    marginBottom: 30,
    '& .MuiInputBase-formControl': {
      backgroundColor: '#ffffff'
    },
    '& .MuiInputBase-input': {
      padding: 12
    },
    '& label': {
      transform: ' translate(14px,14px) scale(1)'
    },
    '& p': {
      position: 'absolute',
      top: '100%'
    },
    '&.error': {
      '& fieldset': {
        borderColor: 'red'
      },
      '& p': {
        color: 'var(--red-60)'
      }
    }
  },
  multiline: {
    '& .MuiInputBase-multiline': {
      padding: 0
    }
  },
  password: {
    position: 'relative',
    width: '100%'
  },
  control: {
    position: 'absolute',
    top: 7,
    right: 14
  }
};

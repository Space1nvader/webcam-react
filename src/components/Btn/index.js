import { Button } from 'antd';

const style = {
  height: '56px',
  border: 'none',
  background: 'red'
};

const Btn = (props) => {
  const { children, ...other } = props;
  return (
    <Button style={style} {...other}>
      {children}
    </Button>
  );
};

export default Btn;

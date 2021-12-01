import { Row, Divider, Button } from 'antd';

function App() {
  return (
    <div className='App'>
      <Button> Hide Form / Add New Food </Button>

      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}></Row>
    </div>
  );
}

export default App;

import Button from './components/Button';
import './styles/index.scss';

function App() {
  return (
    <div className="App">
      <Button btnType="primary" size="large">按钮</Button>
      <Button btnType="default" onClick={(e) => {
        
        alert(123)
      }}>按钮</Button>
      <Button btnType="danger" size="small">按钮</Button>
      <Button btnType="link" size="small" disabled href="http://www.baidu.com">按钮</Button>
    </div>
  );
}

export default App;

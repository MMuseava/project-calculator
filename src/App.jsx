
import "./App.css";
import NormCalculator from "./components/normCalculator/NormCalculator";
import "./App.css"
import CustomButton from "./components/customButton/CustomButton";
import Message from "./components/message/Message";

function App() {
	return <div className="App">

		{/* <NormCalculator/> */}

		<Message type="error">Dont work</Message>
		<Message type="success">Success</Message>
		<Message type="info">Info</Message>
		
	</div>;
}

export default App;

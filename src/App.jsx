import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/Routes";
import "./App.css";
import { Toaster } from "./components/ui/sonner";

function App() {
  return (
    <Router>
      <AppRoutes />
      <Toaster expand={true}/>
    </Router>
  );
}

export default App;

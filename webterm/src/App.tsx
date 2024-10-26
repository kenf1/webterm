import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./Static/App.css"

import { Term } from "./Routes/Term.tsx"
import { NotFound } from "./Routes/Fallback.tsx"
import { LuhnDebug } from "./Routes/LuhnDebug.tsx"

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Term />} />
                <Route path="/luhn-debug" element={<LuhnDebug />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}

export default App

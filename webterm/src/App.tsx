import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../Static/app.css";

import { DefRoute } from "./Routes/Default.tsx"
import { NotFound } from "./Routes/Fallback.tsx"
import { LuhnDebug } from "./Routes/LuhnDebug.tsx"

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<DefRoute />} />
                <Route path="/ldebug" element={<LuhnDebug />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}

export default App
import { Routes, Route, Navigate } from 'react-router-dom';
import Portfolio from './pages/Portfolio';

function App() {
  const userData = {
    name: "Nagapuri Vinay Goud",
    role: "Front-end Developer / CS Student",
    email: "vinaygoudnagapuri@gmail.com",
    github: "",
    linkedin: "",
    bio: "A highly motivated and dedicated Computer Science student seeking to leverage strong front-end development skills, problem solving ability, and a passion for software engineering in a challenging role."
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white/20">
      <Routes>
        <Route path="/" element={<Navigate to="/portfolio" replace />} />
        <Route path="/portfolio" element={<Portfolio userData={userData} />} />
        <Route path="*" element={<Navigate to="/portfolio" replace />} />
      </Routes>
    </div>
  );
}

export default App;

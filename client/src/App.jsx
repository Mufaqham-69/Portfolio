import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [profile, setProfile] = useState(null);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [profileRes, projectsRes] = await Promise.all([
          fetch('/api/profile'),
          fetch('/api/projects')
        ]);
        const profileData = await profileRes.json();
        const projectsData = await projectsRes.json();
        setProfile(profileData);
        setProjects(projectsData);
      } catch (err) {
        console.log('API not available, using built-in data');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="loader">
        <div className="loader-spinner"></div>
      </div>
    );
  }

  return (
    <div className="App">
      <Navbar />
      <Hero profile={profile} />
      <About profile={profile} />
      <Experience profile={profile} />
      <Projects projects={projects} />
      <Skills profile={profile} />
      <Education profile={profile} />
      <Certifications profile={profile} />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import './Portfolio.css';

function Portfolio({ projects }) {
  // Track which filter is active
  const [activeFilter, setActiveFilter] = useState('all');

  // Filter projects based on active category
  const filteredProjects = projects.filter(project => {
    if (activeFilter === 'all') {
      return true; // Show all projects
    }
    return project.category === activeFilter;
  });

  return (
    <div className="portfolio">
      {/* Filter Buttons */}
      <div className="portfolio__filters">
        <button
          className={activeFilter === 'all' ? 'active' : ''}
          onClick={() => setActiveFilter('all')}
        >
          Alla Projekt
        </button>
        <button
          className={activeFilter === 'exterior' ? 'active' : ''}
          onClick={() => setActiveFilter('exterior')}
        >
          Exteriör
        </button>
        <button
          className={activeFilter === 'interior' ? 'active' : ''}
          onClick={() => setActiveFilter('interior')}
        >
          Interiör
        </button>
        <button
          className={activeFilter === 'finecarpentry' ? 'active' : ''}
          onClick={() => setActiveFilter('finecarpentry')}
        >
          Finsnickeri
        </button>
      </div>


      {/* Project Grid */}
      <div className="portfolio__grid">
        {filteredProjects.map(project => (
          <div key={project.id} className="portfolio__card">
            <img src={project.image} alt={project.title} />
            <div className="portfolio__card-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <span className="portfolio__category">{project.categoryLabel}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;

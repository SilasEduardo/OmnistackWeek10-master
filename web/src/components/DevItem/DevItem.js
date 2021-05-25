import React from 'react';
import './DevItem.css'

function DevItem({ dev }) {
    return (
      <div className="user-info">
        <header>
          <img src={dev.avatar_url} alt={dev.name}/>
          <div>
            <strong>{dev.name}</strong>
            <span>{dev.techs.join(', ')}</span>
          </div>
        </header>
        <p>{dev.bio}</p>
        <a href={`http://github.com/${dev.github_username}`}>Acessar perfil no github</a>
      </div>
    )
  }

  export default DevItem;
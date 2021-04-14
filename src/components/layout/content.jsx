import React, { useEffect, useState } from "react";
import "./content.css";

import { fetchRepos } from "../../API/index";

function Content() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    async function f() {
      const response = await fetchRepos();
      setRepos(response.data);
    }

    f();
  }, []);

  return (
    <ul>
      {repos.map((repositorio) => {
        return (
          <li key={repositorio.id}>
            <a href={repositorio.html_url} target="_blank" rel="noreferrer">
              <p className="name">{repositorio.name}</p>
              <p className="description">{repositorio.description}</p>
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default Content;

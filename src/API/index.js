import Axios from "axios";

const FacebookRepository = "https://api.github.com/orgs/facebook/repos";

async function fetchRepos() {
    return Axios.get(FacebookRepository);
}

export {fetchRepos};




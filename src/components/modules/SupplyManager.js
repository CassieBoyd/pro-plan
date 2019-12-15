const remoteURL = "http://localhost:5002";

export default {
  get(id) {
    return fetch(`${remoteURL}/supplies/${id}`).then(result => result.json());
  },
  getAll(projectId) {
    return fetch(`${remoteURL}/supplies?projectId=${projectId}`).then(result => result.json());
  },
  post(newsupply) {
    return fetch(`${remoteURL}/supplies`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newsupply)
    }).then(data => data.json());
  },
  delete(id) {
    return fetch(`${remoteURL}/supplies/${id}`, {
      method: "DELETE"
    }).then(result => result.json());
  },
  update(editedsupply) {
    return fetch(`${remoteURL}/supplies/${editedsupply.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedsupply)
    }).then(data => data.json());
  }
};
const remoteURL = "http://localhost:5002";

export default {
  get(id) {
    return fetch(`${remoteURL}/supplies/${id}`).then(result => result.json());
  },
  getAll(projectId) {
    return fetch(`${remoteURL}/supplies?projectId=${projectId}`).then(result => result.json());
  },
  post(newSupply) {
    return fetch(`${remoteURL}/supplies`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newSupply)
    }).then(data => data.json());
  },
  delete(id) {
    return fetch(`${remoteURL}/supplies/${id}`, {
      method: "DELETE"
    }).then(result => result.json());
  },
  update(editedSupply) {
    return fetch(`${remoteURL}/supplies/${editedSupply.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedSupply)
    }).then(data => data.json());
  }
};
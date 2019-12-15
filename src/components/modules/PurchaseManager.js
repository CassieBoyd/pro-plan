const remoteURL = "http://localhost:5002";

export default {
  get(id) {
    return fetch(`${remoteURL}/purchases/${id}`).then(result => result.json());
  },
  getAll(projectId) {
    return fetch(`${remoteURL}/purchases?projectId=${projectId}`).then(result => result.json());
  },
  post(newpurchase) {
    return fetch(`${remoteURL}/purchases`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newpurchase)
    }).then(data => data.json());
  },
  delete(id) {
    return fetch(`${remoteURL}/purchases/${id}`, {
      method: "DELETE"
    }).then(result => result.json());
  },
  update(editedpurchase) {
    return fetch(`${remoteURL}/purchases/${editedpurchase.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedpurchase)
    }).then(data => data.json());
  }
};
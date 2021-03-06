const remoteURL = "http://localhost:5002";

export default {
  get(id) {
    return fetch(`${remoteURL}/references/${id}`).then(result => result.json());
  },
  getAll(projectId) {
    return fetch(`${remoteURL}/references?projectId=${projectId}`).then(result => result.json());
  },
  post(NewReference) {
    return fetch(`${remoteURL}/references`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(NewReference)
    }).then(data => data.json());
  },
  delete(id) {
    return fetch(`${remoteURL}/references/${id}`, {
      method: "DELETE"
    }).then(result => result.json());
  },
  update(editedReference) {
    return fetch(`${remoteURL}/references/${editedReference.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedReference)
    }).then(data => data.json());
  }
};
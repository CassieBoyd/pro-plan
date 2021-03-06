const remoteURL = "http://localhost:5002";

export default {
  get(id) {
    return fetch(`${remoteURL}/purchases/${id}`).then(result => result.json());
  },
  getAll(projectId) {
    return fetch(`${remoteURL}/purchases?projectId=${projectId}&_sort=complete&_order=desc`).then(result => result.json());
  },
  post(newPurchase) {
    return fetch(`${remoteURL}/purchases`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPurchase)
    }).then(data => data.json());
  },
  delete(id) {
    return fetch(`${remoteURL}/purchases/${id}`, {
      method: "DELETE"
    }).then(result => result.json());
  },
  update(editedPurchase) {
    return fetch(`${remoteURL}/purchases/${editedPurchase.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedPurchase)
    }).then(data => data.json());
  },
  patch(editedPurchase) {
    return fetch(`${remoteURL}/purchases/${editedPurchase.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedPurchase)
    }).then(data => data.json());
  }
};
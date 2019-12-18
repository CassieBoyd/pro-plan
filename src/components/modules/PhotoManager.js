const remoteURL = "http://localhost:5002";

export default {
  get(id) {
    return fetch(`${remoteURL}/photos/${id}`).then(result => result.json());
  },
  getAll(type, typeId) {
    return fetch(`${remoteURL}/photos?type=${type}&typeId=${typeId}`).then(result => result.json());
  },
  post(newPhoto) {
    return fetch(`${remoteURL}/photos`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPhoto)
    }).then(data => data.json());
  },
  delete(id) {
    return fetch(`${remoteURL}/photos/${id}`, {
      method: "DELETE"
    }).then(result => result.json());
  },
  update(editedPhoto) {
    return fetch(`${remoteURL}/photos/${editedPhoto.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedPhoto)
    }).then(data => data.json());
  }
};
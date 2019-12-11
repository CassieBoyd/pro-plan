const remoteURL = "http://localhost:5002"

export default {
  get(id) {
    return fetch(`${remoteURL}/projects/${id}`).then(result => result.json())
  },
  getAll() {
    return fetch(`${remoteURL}/projects`).then(result => result.json())
  }
}
const remoteURL = "http://localhost:5002";

export default {
  get(id) {
    return fetch(`${remoteURL}/projects/${id}`).then(result => result.json());
  },
  getAll() {
    const userId = JSON.parse(localStorage.getItem("credentials")) 
    // console.log("USER", userId.id)
   
    return fetch(`${remoteURL}/projects?userId=${userId.id}&_sort=dueDate&_order=asc`).then(result => result.json());
  },
  post(newProject) {
    return fetch(`${remoteURL}/projects`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newProject)
    }).then(data => data.json());
  },
  delete(id) {
    return fetch(`${remoteURL}/projects/${id}`, {
      method: "DELETE"
    }).then(result => result.json());
  },
  update(editedProject) {
    return fetch(`${remoteURL}/projects/${editedProject.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedProject)
    }).then(data => data.json());
  }
};

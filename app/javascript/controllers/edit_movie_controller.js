import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="edit-movie"
export default class extends Controller {
  static targets = ["infos", "form", "card"];

  connect() {
    // console.log("Movie Info");
    // console.log(this.infosTarget, this.formTarget);
  }

  reveal() {
    // this.infosTarget.classList.toggle("d-none");
    this.formTarget.classList.toggle("d-none");
  }

  update(event) {
    event.preventDefault();
    // console.log("Update");
    const url = `${this.formTarget.action}`;
    fetch(url, {
      method: "PATCH",
      headers: { accept: "text/plain" },
      body: new FormData(this.formTarget)
    })
      .then(response => response.text())
      .then((data) => {
        this.cardTarget.outerHTML = data;
      });
  }
}

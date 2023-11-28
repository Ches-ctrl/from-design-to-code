import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="search-movies"
export default class extends Controller {
  static targets = ["form", "input", "list"]

  connect() {
    // console.log(this.formTarget)
    // console.log(this.inputTarget)
    // console.log(this.listTarget)
    this.inputTarget.addEventListener("input", () => {
      this.search();
    });
  }

  search() {
    const url = `${this.formTarget.action}?query=${this.inputTarget.value}`
    fetch(url, {headers: {accept: "text/plain"}})
     .then(response => response.text())
     .then((data) => {
      this.listTarget.outerHTML = data
     });
  }
}

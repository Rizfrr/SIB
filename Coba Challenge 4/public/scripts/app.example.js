class App {
  constructor() {
    this.clearButton = document.getElementById("clear-btn");
    this.loadButton = document.getElementById("load-btn");
    this.carContainerElement = document.getElementById("cars-container");
    this.driver = document.querySelector("#driver");
    this.tanggal = document.querySelector("#tanggal");
    this.waktu = document.querySelector("#waktu");
    this.penumpang = document.querySelector("#penumpang");
    this.submit = document.querySelector("#submit");
  }

  async init() {
    await this.load();

    // Register click listener
    // this.clearButton.onclick = this.clear;
    // this.loadButton.onclick = this.run;
    this.submit.onclick = this.run;
  }

  run = () => {
    let child = this.carContainerElement.firstElementChild;

    while (child) {
      child.remove();
      child = this.carContainerElement.firstElementChild;
    }
    const cars = Car.list;
    const driver = this.driver.value;
    const tanggal = this.tanggal.value;
    const waktu = this.waktu.value;
    const penumpang = this.penumpang.value;
    if (driver === "" || tanggal === "" || waktu === "") {
      this.showAlert("Silahkan pilih driver, tanggal, dan waktu", "error");
    }
    cars.forEach((car) => {
      if (penumpang <= car.capacity) {
        let t1 = new Date(`${tanggal}T${waktu}Z`) >= new Date(car.availableAt);
        if (driver >= 0) {
          if (t1) {
            const node = document.createElement("div");
            node.classList.add("col-4");
            node.classList.add("my-3");
            node.innerHTML = car.render();
            this.carContainerElement.appendChild(node);
          }
        }
      }
    });
    // Car.list.forEach((car) => {
    //   const node = document.createElement("div");
    //   node.classList.add("col-4");
    //   node.classList.add("my-3");
    //   node.innerHTML = car.render();
    //   this.carContainerElement.appendChild(node);
    // });
  };

  async load() {
    const cars = await Binar.listCars();
    Car.init(cars);
  }

  clear = () => {
    let child = this.carContainerElement.firstElementChild;

    while (child) {
      child.remove();
      child = this.carContainerElement.firstElementChild;
    }
  };

  showAlert(message, className) {
    const div = document.createElement("div");
    div.className = `alert ${className}`;
    div.appendChild(document.createTextNode(message));

    const container = document.querySelector("#cars-container");
    const form = document.querySelector("#input-form");
    container.insertBefore(div, form);

    setTimeout(function () {
      document.querySelector(".alert").remove();
    }, 4000);
  }
}

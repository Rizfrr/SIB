class Car {
  static list = [];

  static init(cars) {
    this.list = cars.map((i) => new this(i));
  }

  constructor({
    id,
    plate,
    manufacture,
    model,
    image,
    rentPerDay,
    capacity,
    description,
    transmission,
    available,
    type,
    year,
    options,
    specs,
    availableAt,
  }) {
    this.id = id;
    this.plate = plate;
    this.manufacture = manufacture;
    this.model = model;
    this.image = image;
    this.rentPerDay = rentPerDay;
    this.capacity = capacity;
    this.description = description;
    this.transmission = transmission;
    this.available = available;
    this.type = type;
    this.year = year;
    this.options = options;
    this.specs = specs;
    this.availableAt = availableAt;
  }

  render() {
    return `
      <div class="card">
        <div class="card-body ">
          <img src="${this.image}" alt="${this.manufacture}" style="height: 150px; width: auto; object-fit: cover;" />
          <p>${this.manufacture} ${this.model}/${this.type}</p>
          <p><b>Rp ${this.rentPerDay}/hari</b></p>
          <p>${this.description}</p>
          <p>${this.capacity}</p>
          <p>${this.transmission}</p>
          <p>${this.year}</p>
          <a class="btn btn-success text-center">Pilih Mobil</a>
        </div>
      </div>
    `;
  }
}

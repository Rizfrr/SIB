class Human {
  constructor(name, address) {
    this.name = name;
    this.address = address;

    if (this.constructor === Human) {
      throw new Error("Can't instantiate abstract class");
    }
  }

  introduce() {
    console.log(`Hi, I'm ${this.name}`);
  }

  work() {
    console.log(`${this.constructor.name} is working`);
  }
}

// publick server module/helper
const PublicServer = (Base) =>
  class extends Base {
    save() {
      console.log("SFX: TY!!!");
    }
  };

// Military module
const Military = (Base) =>
  class extends Base {
    shoot() {
      console.log("BOOM!!");
    }
  };

class Doctor extends PublicServer(Human) {
  constructor(props) {
    super(props);
  }

  work() {
    super.work();
    super.save();
  }
}

class Police extends PublicServer(Military(Human)) {
  static workplace = "police station";

  constructor(props) {
    super(props);
    this.rank = props.rank;
  }

  shoot() {
    super.work();
    super.shoot();
    super.save();
  }
}

class Army extends PublicServer(Military(Human)) {
  static workplace = "Army station";

  constructor(props) {
    super(props);
    this.rank = props.rank;
  }

  shoot() {
    super.work();
    super.shoot();
    super.save();
  }
}

class Writer extends Human {
  work() {
    console.log("Write book");
    super.work();
  }
}

const wiranto = new Police({
  name: "Wiranto",
  address: "NA",
  rank: "General",
});

const prabowo = new Army({
  name: "Prabowo",
  address: "NA",
  rank: "General",
});

const boyke = new Doctor({
  name: "Boyke",
  address: "N",
});

const dee = new Writer({
  name: "Dee",
  address: "N",
});

wiranto.shoot();

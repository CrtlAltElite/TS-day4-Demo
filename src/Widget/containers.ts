import Container from "./Container";

class RightLeaningContainer extends Container {
    constructor() {
      super();
      this.borderRadius = "25% 10%";
    }
}
  
  class LeftLeaningContainer extends Container {
    constructor() {
      super();
      this.borderRadius = "10% 25%";
    }
}
  
  class CircleContainer extends Container {
    constructor() {
      super();
      this.borderRadius = "50%";
    }
}

  export{
    CircleContainer as CircleShape,
    LeftLeaningContainer as LeftLeaningShape,
    RightLeaningContainer as RightLeaningShape
  }
class Water_Billing {
  customer = null;
  maxMeter = 999999999;
  meterToGallon = 10;
  beginningMeter = null;
  endingMeter = null;
  usedGallonWater = null;
  amount = null;
  ask() {
    this.customer = prompt(
      "Please enter a customer code (r-residential, c-commercial or i-industrial )"
    ).toLowerCase();

    if (
      this.customer !== "r" &&
      this.customer !== "c" &&
      this.customer !== "i"
    ) {
      alert("Please enter a valid code ( r, c or i )");
      return;
    } else {
      this.beginningMeter = +prompt(
        "Please enter beginning meter reading (a positive integer value)"
      );

      if (
        this.beginningMeter < 0 ||
        this.beginningMeter > this.maxMeter ||
        isNaN(this.beginningMeter)
      ) {
        alert(
          "Beginning meter reading can not be greater than 999999999 or less than 0 or can not be a letter"
        );
        return;
      } else {
        this.endingMeter = +prompt(
          "Please enter ending meter reading (a positive integer value)"
        );
        if (
          this.endingMeter < 0 ||
          this.endingMeter > this.maxMeter ||
          isNaN(this.endingMeter)
        ) {
          alert(
            "Ending meter reading can not be greater than 999999999 or less than 0 or can not be a letter"
          );
          return;
        }
      }
    }
  }
  condition() {
    if (this.endingMeter > this.beginningMeter) {
      this.usedGallonWater =
        (this.endingMeter - this.beginningMeter) / this.meterToGallon;
    } else if (this.endingMeter < this.beginningMeter) {
      this.usedGallonWater =
        (this.maxMeter - this.beginningMeter + this.endingMeter) /
        this.meterToGallon;
    } else {
      this.usedGallonWater = 0;
    }
  }

  calculationBill() {
    this.condition();
    if (this.customer == "r") {
      this.amount = 5.0 + this.usedGallonWater * 0.0005;
    } else if (this.customer == "c") {
      if (this.usedGallonWater <= 4000000) {
        this.amount = 1000.0;
      } else if (this.usedGallonWater > 4000000) {
        this.amount = 1000.0 + (this.usedGallonWater - 4000000) * 0.00025;
      }
    } else if (this.customer == "i") {
      if (this.usedGallonWater <= 4000000) {
        this.amount = 1000.0;
      } else if (this.usedGallonWater <= 10000000) {
        this.amount = 2000.0;
      } else if (this.usedGallonWater > 10000000) {
        this.amount = 2000.0 + (this.usedGallonWater - 10000000) * 0.00025;
      }
    }
  }

  billRender() {
    return `
    Customer code: ${this.customer}
    Beginning meter reading: ${this.beginningMeter}
    Ending meter reading: ${this.endingMeter}
    Gallons of water used: ${this.usedGallonWater} gallon
    Amount billed: $${this.amount}
    `;
  }
  // complatedBill(){
  //     if(this.ask()){
  //         this.condition()
  //         this.calculationBill()
  //        alert( this.billRender());
  //     }
  // }
}
const user = new Water_Billing();
user.ask();
user.calculationBill();
alert(user.billRender());
// user.complatedBill()
console.log(user);

export class Purchase {
  constructor(id, userPaid, storeAmount, mktAmount, paymentSystemAmount) {
    this.id = id;
    this.userPaid = userPaid;
    this.storeAmount = storeAmount;
    this.mktAmount = mktAmount;
    this.paymentSystemAmount = paymentSystemAmount;
  }
}

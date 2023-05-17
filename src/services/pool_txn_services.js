const { poolTxn_Repo } = require("../repository");

class poolTxn_Service {
  constructor() {
    this.poolTxnRepo = new poolTxn_Repo();
  }

  // -----------------------------------
  // insert into table
  // -----------------------------------

  async createTransaction(data) {
    console.log("Pool Transaction Service");

    try {
      const transaction = await this.poolTxnRepo.createTransaction(data);
      return transaction;
    } catch (error) {
      console.log(
        "Something went wrong in Pool Transaction services layer".magenta
      );

      throw { error };
    }
  }

  // ---------------------------------------------
  // get all transactions of pool table
  // ---------------------------------------------

  async findAllTransactions() {
    console.log("Pool Transaction Service");

    try {
      const transactions = await this.poolTxnRepo.findAllTransactions();
      return transactions;
    } catch (error) {
      console.log(
        "Something went wrong in Pool Transaction Repository layer".magenta
      );

      throw { error };
    }
  }
  // ---------------------------------------------------
  // find Particular transactions using pool Id
  // ---------------------------------------------------

  async getParticularTransacationService(id) {
    console.log("Transcations get particular Service");
    try {
      const getParticularTransacationServiceData =
        await this.poolTxnRepo.getParticularTranscationRepo(id);
      return getParticularTransacationServiceData;
    } catch (error) {
      console.log(
        "Something went wrong in  get particluar transcations services layer"
          .magenta
      );

      throw { error };
    }
  }
}

module.exports = poolTxn_Service;

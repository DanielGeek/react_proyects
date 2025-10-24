const Ticket = require('./ticket');

class TicketList {

  constructor() {
    this.lastNumber = 0;

    this.penddings = [];
    this.assigneeds = [];

  }

  get nextNumber() {
    this.lastNumber++;
    return this.lastNumber;
  }

  // 3 last ticket watching in the cards and 10 in history
  get last13() {
    return this.assigneeds.slice(0,13);
  }

  createTicket() {
    const newTicket = new Ticket(this.nextNumber);
    this.penddings.push(newTicket);
    return newTicket;
  }

  assigneedTicket(agent, desktop) {
    if (this.penddings.length === 0) {
      return null;
    }

    const nextTicket = this.penddings.shift();

    nextTicket.agent = agent;
    nextTicket.desktop = desktop;

    this.assigneeds.unshift(nextTicket);

    return nextTicket;
  }

}

module.exports = TicketList;

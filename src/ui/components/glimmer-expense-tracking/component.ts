import Component, { tracked } from "@glimmer/component";

export default class GlimmerExpenseTracking extends Component {
  infoBoxTitles = ['Credit', 'Debit', 'Balance'];
  amount = 0;
  @tracked expenses = [];

  addExpense(expense) {
    this.expenses.push(expense);
    this.expenses = this.expenses;
  };
}

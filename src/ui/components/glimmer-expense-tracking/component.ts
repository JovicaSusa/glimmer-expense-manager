import Component, { tracked } from "@glimmer/component";

export default class GlimmerExpenseTracking extends Component {
  infoBoxTitles = ['Credit', 'Debit', 'Balance'];
  amount = 0;
  @tracked expenses = new Set([]);

  addExpense(expense) {
    this.expenses.add(expense);
    this.expenses = this.expenses;
  };
}

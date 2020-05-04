let countBudgetBtn = document.querySelector(".start"),
  expensesItems = document.querySelectorAll(".expenses-item"),
  optionalexpensesItems = document.querySelectorAll(".optionalexpenses-item"),
  budgetValue = document.querySelector(".budget-value"),
  daybudgetValue = document.querySelector(".daybudget-value"),
  levelValue = document.querySelector(".level-value"),
  expensesValue = document.querySelector(".expenses-value"),
  optionalexpensesValue = document.querySelector(".optionalexpenses-value"),
  incomeValue = document.querySelector(".income-value"),
  approve1 = document.getElementsByTagName("button")[0],
  approve2 = document.getElementsByTagName("button")[1],
  moneyPerDayCalcula = document.getElementsByTagName("button")[2],
  chooseIncome = document.querySelector(".choose-income"),
  savings = document.getElementById("savings"),
  chooseSum = document.querySelector(".choose-sum"),
  choosePercent = document.querySelector(".choose-percent"),
  yearValue = document.querySelector(".year-value"),
  monthValue = document.querySelector(".month-value"),
  dayValue = document.querySelector(".day-value"),
  monthsavingsValue = document.querySelector(".monthsavings-value"),
  yearsavingsValue = document.querySelector(".yearsavings-value");

console.log();

let money, time;

countBudgetBtn.addEventListener("click", function () {
  money = +prompt("Ваш бюджет на месяц?", "");
  time = prompt("Введите дату в формате YYYY-MM-DD", "");

  while (isNaN(money) || money == "" || money == null) {
    money = +prompt("Ваш бюджет на месяц?", "");
  }

  appData.budget = money;
  appData.timeData = time;
  budgetValue.textContent = money.toFixed();
  yearValue.value = new Date(Date.parse(time)).getFullYear();
  monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
  dayValue.value = new Date(Date.parse(time)).getDate();
});

moneyPerDayCalcula.addEventListener("click", function () {
  if (appData.budget != undefined) {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    daybudgetValue.textContent = appData.moneyPerDay;
    if (appData.moneyPerDay < 500) {
      levelValue.textContent = "Низкий ";
    } else if (appData.moneyPerDay > 500 && appData.moneyPerDay < 2000) {
      levelValue.textContent = "Средний ";
    } else {
      levelValue.textContent = "Высокий";
    }
  } else {
    alert("С перва надо начать расчет!");
  }
});

approve1.addEventListener("click", function () {
  let sum = 0;
  for (let i = 0; i < expensesItems.length; i++) {
    let a = expensesItems[i].value,
      b = expensesItems[++i].value;
    if (
      typeof a === "string" &&
      typeof a != null &&
      typeof b != null &&
      a != "" &&
      b != "" &&
      a.length < 50
    ) {
      console.log("done");
      appData.expenses[a] = b;
      sum += +b;
    } else {
      i = i - 1;
    }
  }
  expensesValue.textContent = sum;
});

approve2.addEventListener("click", function () {
  for (let i = 0; i < optionalexpensesItems.length; i++) {
    let opt = optionalexpensesItems[i].value;
    appData.optionalExpenses[i] = opt;
    optionalexpensesValue.textContent += appData.optionalExpenses[i] + " ";
  }
});

chooseIncome.addEventListener("input", function () {
  let items = chooseIncome.value;
  if (
    typeof items === "string" &&
    typeof items != null &&
    items != "" &&
    items.length < 50
  ) {
    appData.income = items.split(", ");
    incomeValue.textContent = appData.income;
  }
});

savings.addEventListener("click", function () {
  if (appData.savings == false) {
    appData.savings = true;
  } else {
    appData.savings = false;
  }
});

chooseSum.addEventListener("input", function () {
  if (appData.savings == true) {
    let sum = +chooseSum.value,
      percent = +choosePercent.value;

    appData.monthIncome = (sum / 100 / 12) * percent;
    appData.yearIncome = (sum / 100) * percent;

    monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
    yearsavingsValue.textContent = appData.yearIncome.toFixed(1);
  }
});

choosePercent.addEventListener("input", function () {
  if (appData.savings == true) {
    let sum = +chooseSum.value,
      percent = +choosePercent.value;

    appData.monthIncome = (sum / 100 / 12) * percent;
    appData.yearIncome = (sum / 100) * percent;

    monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
    yearsavingsValue.textContent = appData.yearIncome.toFixed(1);
  }
});

let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false,
};

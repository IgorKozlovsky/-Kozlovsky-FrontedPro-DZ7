// Частина №1

// Створити скрипт яки повинен виконувати наступне:

// запитати у користувача рік народження;
// запитати в нього, в якому місті він живе;
// запитати його улюблений вид спорту.

// При натисканні на ОК показуємо вікно, де має бути відображена наступна інформація:

// його вік;
// якщо користувач вкаже Київ, Вашингтон чи Лондон, то показати йому повідомлення - "Ти живеш у столиці..." і на місце точок підставляємо країну, столицею якої є місто. Інакше показуємо йому “ти живеш у місті…”, де місце точок – введене місто.

// Частина №2

// Вибираємо самі три види спорту та три чемпіони у цих видах. Відповідно, якщо користувач вкаже один із цих видів спорту, то показуємо йому повідомлення “Круто! Хочеш стати …? і підставляємо на місце точок ім'я та прізвище чемпіона.

// Все це має бути відображено в одному вікні (алерті).

// Якщо в якомусь випадку він не захоче вводити інформацію і натисне Скасувати, показати йому повідомлення – “Шкода, що Ви не захотіли ввести свій(ю) …” і вказуємо, що він не захотів вводити – дату народження, місто чи вид спорту .

let birthday = prompt("Введіть свій рік народження");
if (birthday === "" || birthday === null) alert("Шкода, що Ви не захотіли ввести свій рік народження");

let city = prompt("Введіть в якому місті ви живете");
if (city === "" || city === null) alert("Шкода, що Ви не захотіли ввести свое місто");

let sport = prompt("Введіть ваш улюблений вид спорту");
if (sport === "" || sport === null) alert("Шкода, що Ви не захотіли ввести свій улюблений вид спорту");

let cityMessage = "";
switch (city) {
  case "Київ":
    cityMessage = "Ти живеш у столиці України";
    break;
  case "Лондон":
    cityMessage = "Ти живеш у столиці Великої Британії";
    break;
  case "Вашингтон":
    cityMessage = "Ти живеш у столиці Сполучених Штатах Америки";
    break;
  default:
    cityMessage = `Ти живеш у місті ${city}`;
    break;
}

let sportMessage = "";
switch (sport) {
  case "Шахи":
    sportMessage = "Круто! Хочеш стати Магнусом Карлсеном?";
    break;
  case "Баскетбол":
    sportMessage = "Круто! Хочеш стати Майклом Джорданом?";
    break;
  case "Футбол":
    sportMessage = "Круто! Хочеш стати Мессі?";
    break;
  default:
    sportMessage = `${sport}. Круто!`;
    break;
}
alert(`${birthday ? `Ваш вік: ${new Date().getFullYear() - birthday}` : "Не захотів вводити – рік народження"}
${city ? cityMessage : "Не захотів вводити – місто"}
${sport ? sportMessage : "Не захотів вводити – улюблений вид спорту"}`);

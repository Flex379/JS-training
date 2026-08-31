// Створи змінну `studentName` за допомогою `const` і запиши в неї своє ім'я. Виведи значення змінної в консоль.

// const studentName = "Ilya";

// console.log(studentName);

// Є `name = 'Олег'`, `age = 17`, `group = 'FS-12'`. Створи один шаблонний рядок формату: `Студент: Олег | Вік: 17 | Група: FS-12`.

// const name = "Олег";
// const age = 17;
// const group = "FS-12";

// const message = `Студент: ${name} | Возраст: ${age} | Группа: ${group}`;

// console.log(message); 

// Створи змінну `age` зі значенням 16. Виведи її в консоль. Переконайся, що значення збережено як число, а не як рядок.

// const age = 16;

// console.log(age);

// Є `firstName = 'Анна'` і `lastName = 'Коваль'`. Отримай перші літери обох слів і створи рядок `А.К.`.

// const firstName = "Анна";
// const lastName = "Коваль";

// const initials = `${firstName[0]}.${lastName[0]}.`

// console.log(initials);

// Створи змінну `isStudent` зі значенням `true`. Виведи її в консоль.

// const isStudent = true;

// console.log(isStudent);

// Є рядок `'   Student_User   '`. Прибери крайні пробіли та перетвори всі літери на нижній регістр.

// const string = "   Student_User   ";

// console.log(string.trim().toLowerCase());

// Створи змінну `city` через `let` зі значенням `'Київ'`. Потім зміни значення на `'Львів'` і виведи результат.

// let city = 'Киев';

// city = 'Львов';

// console.log(city);

// Є рядок `'   lviv   '`. Прибери пробіли. Потім зроби першу літеру великою, а решту залиш малими. Вхідне слово гарантовано записане малими літерами.

// const city = '   lviv   ';
// const trimmedCity = city.trim();
// const formatedCity = trimmedCity[0].toUpperCase() + trimmedCity.slice(1);

// console.log(formatedCity);

// Створи змінну `language` зі значенням `'JavaScript'`. За допомогою `typeof` виведи тип її значення.

// const language = "JavaScript";

// console.log(typeof language);

// Є `email = 'student@gmail.com'`. Отримай частину після символу `@`. Позицію `@` знайди методом `indexOf()`.

// const email = 'student@gmail.com';
// const atIndex = email.indexOf('@');
// console.log(atIndex);
// const gmail = email.slice(atIndex + 1);
// console.log(gmail);

// Створи змінну `lessonNumber` зі значенням `3`. Виведи тип цього значення.

// const lessonNumber = 3;

// console.log(typeof lessonNumber);

// Із рядка `'mentor@school.com'` отримай частину до символу `@`.

// const email = 'mentor@school.com';
// const position = email.indexOf("@");
// const userName = email.slice(0, position);
// console.log(user);

// Є рядки з зайвими пробілами: `firstName = '  іван  '`, `lastName = '  петренко  '`. Очисти їх, зроби першу літеру кожного слова великою, а решту — малими. Створи `Петренко Іван`.

// const firstName = "  іван  ";
// const lastName = "  петренко  ";

// const trimmedFirstName = firstName.trim();
// const trimmedLastName = lastName.trim();

// const formatedFirstName = trimmedFirstName[0].toUpperCase() + trimmedFirstName.slice(1).toLowerCase();
// const formatedLastName = trimmedLastName[0].toUpperCase() + trimmedLastName.slice(1).toLowerCase();

// const fullName = `${formatedLastName} ${formatedFirstName}`

// console.log(fullName);


// Є `fileName = 'lesson-notes.md'`. Отримай останні три символи, щоб дістати розширення `'.md'`.

// const fileName = 'lesson-notes.md';

// const extension = fileName.slice(-3)
// console.log(extension);

// Є `email = 'student@example.com'`. Залиш видимими перші дві літери імені користувача та весь домен. Решту імені заміни п'ятьма зірочками. Очікуваний формат: `st*****@example.com`.


// const email = 'student@example.com';

// const atIndex = email.indexOf('@');
// console.log(atIndex);

// const userName = email.slice(0, atIndex);
// console.log(userName);

// const domain = email.slice(atIndex);
// console.log(domain);

// const maskedEmail = userName.slice(0, 2) + "*".repeat(userName.length - 2) + domain;
// console.log(maskedEmail);

// Є заголовок `'JavaScript String Basics'`. Перетвори його на нижній регістр і заміни всі пробіли дефісами.

// const title = "JavaScript String Basics";
// const lowerTitle = title.toLowerCase();
// console.log(lowerTitle);

// const slug = lowerTitle.replaceAll(' ', '-');

// console.log(slug);

// const slug1 = lowerTitle.split(' ').join('-');
// console.log(slug1);

// Є `'my-first-javascript-homework.js'`. Отримай назву без `'.js'`, заміни всі дефіси пробілами та додай префікс `'Файл: '`.

// const fileName = "my-first-javascript-homework.js";
// const atIndex = fileName.indexOf('.');
// console.log(atIndex);

// const slug = fileName.slice(0, atIndex);
// console.log(slug);

// const string = slug.replaceAll('-', ' ');
// console.log(string);

// const message = `Файл: ${string}`;
// console.log(message);

// Є текст `'JavaScript is a programming language'`. Отримай перші 10 символів і додай в кінці три крапки.

// const text = 'JavaScript is a programming language';

// const message = text.slice(0, 16) + '...';
// console.log(message);

// Є `'archive.backup.zip'`. Знайди останню крапку. Окремо отримай базову назву `'archive.backup'` та розширення `'zip'`.

// const fileName = 'archive.backup.zip';

// const dotIndex = fileName.lastIndexOf('.');
// console.log(dotIndex);

// const firstPart = fileName.slice(0, dotIndex);
// const secondPart = fileName.slice(dotIndex);

// console.log(firstPart);
// console.log(secondPart);

// DAY 2 

// Створи змінні `firstNumber = 18` і `secondNumber = 11`. За допомогою оператора `>` перевір, чи перше число більше за друге. Виведи результат порівняння в консоль.

// function compareNumbers(firstNumber, secondNumber){
//   const result = firstNumber > secondNumber;
//   return result;
// }

// console.log(compareNumbers(18, 11))

// Створи функцію `haveSameType(firstValue, secondValue)`, яка порівнює результати `typeof` для двох параметрів. Перевір число `8` і число `15`.

// function haveSameType(firstValue, secondValue){
//   const result = typeof firstValue === typeof secondValue;
//   return result;
// }

// console.log(haveSameType(8,15));

// Створи `score = 60` і `minimumScore = 60`. Перевір оператором `>=`, чи набраний бал не менший за мінімальний.

// function compareScore (score, minimumScore) {
//   return score >= minimumScore;
// }

// console.log(compareScore(59, 60));
// console.log(compareScore(60, 60));

// Створи допоміжну функцію `normalizeTitle(title)`, яка прибирає крайні пробіли, переводить текст у нижній регістр і замінює всі дефіси пробілами. Потім створи `areTitlesEqual(firstTitle, secondTitle)`, яка порівнює нормалізовані результати. Перевір `'  JS-Basics  '` і `'js basics'`.

// function normalizeTitle (title) {
//   const noSpaces = title.trim();
//   const toLower = noSpaces.toLowerCase();
//   const slashChangeToSpaces = toLower.replaceAll('-', ' ');

//   return slashChangeToSpaces;
// }

// console.log(normalizeTitle('  JS-Basics  '));


// function areTitlesEqual(firstTitle, secondTitle) {
//   return normalizeTitle(firstTitle) === normalizeTitle(secondTitle);
// }

// console.log(areTitlesEqual('  JS-Basics  ', 'js basics'));

// Створи функцію `isNumberEqualToText(number, text)`. Усередині перетвори `text` на число за допомогою `Number()` і виконай суворе порівняння. Перевір `42` і `'42'`.

// const first = 42;
// const second = '42';
// function isNumberEqualToText(number, text) {
//   return  Number(text) === number;
// }

// console.log(isNumberEqualToText(first, second));

// Створи функцію `isFirstTextLonger(firstText, secondText)`, яка порівнює довжини двох рядків. Перевір `'keyboard'` і `'mouse'`.

// function isFirstTextLonger(firstText, secondText) {
//  return firstText.length === secondText.length;
// }

// console.log(isFirstTextLonger('keyboard', 'mouse'));

// Створи функцію `getCleanLength(login)`, яка повертає довжину логіна після `trim()`. Створи другу функцію `isFirstLoginLonger(firstLogin, secondLogin)`, яка порівнює результати першої. Перевір `'  coder_one  '` і `'dev2'`.

// function getCleanLength(login) {
//   return login.trim().length;
// }

// function isFirstLoginLonger(firstLogin, secondLogin) {
//   return getCleanLength(firstLogin) === getCleanLength(secondLogin);
// }

// console.log(isFirstLoginLonger('  coder_one  ', 'dev2'));


// Створи функцію `createPersonalCode(firstName, lastName, year)`. Вона має взяти перші дві літери імені, перші дві літери прізвища, перевести їх у верхній регістр та додати останні дві цифри року. Для `'Marta'`, `'Stone'`, `2026` очікується `'MAST26'`.

// function createPersonalCode(firstName, lastName, year) {
//   const firstNameLetters = firstName.slice(0, 2).toUpperCase();
//   const lastNameLetters = lastName.slice(0, 2).toUpperCase();
//   const yearLastNumbers = String(year).slice(-2);

//   return `${firstNameLetters}${lastNameLetters}${yearLastNumbers}`;
// }

// console.log(createPersonalCode('Marta', 'Stone', 2026));

// Створи функцію `containsAtSign(text)`, яка повертає результат наявності '@' у рядку. Перевір `'user@site.net'` і `'usersite.net'`.

// function containsAtSign(text) {
//   return text.includes('@');
// }

// console.log(containsAtSign('user@site.net'))
// console.log(containsAtSign('usersite.net'))

// Створи функцію `makeLengthReport(firstText, secondText)`. Вона повинна повернути рядок `First: 8 | Second: 5 | First longer: true` для значень `'terminal'` і `'mouse'`. Довжини та результат порівняння обчисли всередині функції.

// function makeLengthReport(firstText, secondText) {
//    const firstTextLength = firstText.length;
//    const secondTextLength = secondText.length;
//    const isFirstLonger = firstTextLength > secondTextLength;
//    return `First: ${firstTextLength} | Second: ${secondTextLength} | First longer: ${isFirstLonger}`;
// }

// console.log(makeLengthReport('terminal', 'mouse')); 


// Створи функцію `hasExtension(fileName, extension)`. Функція повинна перевіряти закінчення назви файлу. Виклич її з `'notes.pdf'` і `'.pdf'`.

// function hasExtension(fileName, extension) {
//     return fileName.endsWith(extension);
// }

// console.log(hasExtension('notes.pdf', '.pdf'))

// Створи `getDomain(email)`, яка повертає частину після `@`. Потім створи `haveSameDomain(firstEmail, secondEmail)`, яка порівнює домени в нижньому регістрі. Перевір `'one@School.ORG'` і `'two@school.org'`.

// function getDomain(email) {
//   const atIndex = email.indexOf('@');
//   const normalizeDomain = email.slice(atIndex + 1).toLowerCase();
  
//   return normalizeDomain;
// }

// function haveSameDomain(firstEmail, secondEmail) {
//   return getDomain(firstEmail) === getDomain(secondEmail);
// }


// console.log(haveSameDomain('one@School.ORG', 'two@school.org'));

// DAY 3 //


// Створи змінну `isLoggedIn` зі значенням `true`. Якщо користувач увійшов у систему, виведи `Кабінет відкрито`.

// const isLoggedIn = true;

// if (isLoggedIn) {
//   console.log('Кабінет відкрито');
// }

// Створи функцію `getScoreLevel(score)`: від 80 включно — `Високий`, від 50 включно — `Середній`, інакше — `Початковий`. Перевір `68`.

// function getScoreLevel(score) {

//     if (score >= 80) {
//       return 'Высокий';
//     } else if (score >= 50) {
//       return 'Средний';
//     } else {
//       return 'Начальный';
//     }
// }

// console.log(getScoreLevel(68));


// Створи `validateRegistration(name, email, password, acceptedRules)`. Пріоритет перевірок: порожнє ім’я — `Вкажіть ім’я`; email без `@` — `Некоректний email`; пароль коротший за 8 — `Короткий пароль`; правила не прийняті — `Прийміть правила`; інакше — `Реєстрація дозволена`. Перевір `'Анна', 'anna@mail.com', 'jsStart8', true`.

// function validateRegistration(name, email, password, acceptedRules) {
//   if (name.trim() === '') {
//     return `Вкажіть ім’я`;
//   } else if (!email.includes('@')) {
//     return `Некоректний email`;
//   } else if (password.length < 8) {
//       return `Короткий пароль`;
//   } else if (!acceptedRules === false) {
//     return `Прийміть правила`;
//   } else {
//     return `Реєстрація дозволена`;
//   }
// }

// console.log(validateRegistration('Анна', 'anna@mail.com', 'jsStart8', true));

// Є `hasUnreadMessage = false`. Якщо непрочитаних повідомлень немає, виведи `Нових повідомлень немає`.


// const hasUnreadMessage = false;

// if (!hasUnreadMessage) {
//   console.log(`Нових повідомлень немає`);
// }

// Створи `getLessonState(isPublished, isLocked)`. Якщо урок не опублікований — `Чернетка`; якщо опублікований, але заблокований — `Заблоковано`; інакше — `Доступно`. Перевір `true, false`.


// function getLessonState(isPublished, isLocked) {
//  if (!isPublished) {
//   return `Чернетка`;
//  } else if (isLocked) {
//   return `Заблоковано`;
//  } else {
//   return `Доступно`;
//  }
// }

// console.log(getLessonState(true, false));


// Створи `validateLogin(login)`. Після `trim()` поверни `Логін порожній`, якщо рядок порожній; `Логін закороткий`, якщо довжина менша за 4; інакше — `Логін прийнято`. Перевір `'  js  '`.

// function validateLogin(login) {
//   if (login.trim() === '') {
//     return 'Логин Пустой';
//   } else if (login.trim().length < 4) {
//     return 'Логин Короткий';
//   } else {
//     return 'Логін прийнято';
//   }
// }

// console.log(validateLogin('  js  '));


// Створи `getFileType(fileName)`. Без урахування регістру поверни `JavaScript`, якщо назва закінчується на `.js`; `HTML`, якщо на `.html`; `CSS`, якщо на `.css`; інакше — `Невідомий тип`. Перевір `'STYLE.CSS'`.


// function getFileType(fileName) {

//   const normalizedFileName = fileName.toLowerCase().trim();

//     if (normalizedFileName.endsWith('.js') ) {
//       return 'JavaScript';
//     } else if (normalizedFileName.endsWith('.html') ) {
//       return 'HTML';
//     } else if (normalizedFileName.endsWith('.css') ) {
//       return 'CSS';
//     } else {
//       return `Невідомий тип`;
//     }
// }

// console.log(getFileType('STYLE.CSS'));

// Створи `getModuleAccess(role, isPaid, completedIntro, isBlocked)`. Заблокованому завжди повертається `Доступ заблоковано`. Ментор або адміністратор має `Повний доступ`. Студент отримує `Доступ відкрито`, тільки якщо курс оплачено й вступ завершено. Інакше — `Виконайте умови доступу`. Перевір `'student', true, true, false`.

// function getModuleAccess(role, isPaid, completedIntro, isBlocked) {
//     if (isBlocked) {
//       return `Доступ заблоковано`;
//     } else if (role === 'mentor' || role === 'admin') {
//       return 'Повний доступ';
//     } else if (isPaid && completedIntro) {
//       return 'Доступ відкрито';
//     } else {
//       return `Виконайте умови доступу`;
//     }
// }

// console.log(getModuleAccess('student', true, true, false));


// Створи `checkUsername(username)`. Коректне ім’я має довжину від 5 до 12 символів включно та не повинно містити пробіл. Поверни `Коректне` або `Некоректне`. Перевір `'js_student'`.


// function checkUsername(username) {
//    if(username.trim().length >= 5 && username.trim().length <= 12) {
//     return `Коректне`;
//    } 
//    return `Некоректне`;
// }

// console.log(checkUsername('js_student'));

// Створи `getDeadlineStatus(daysLeft, isSubmitted)`. Якщо роботу здано — `Здано`; інакше, якщо днів не більше 0 — `Термін минув`; якщо залишився 1 день — `Останній день`; інакше — `Є час`. Перевір `1, false`.

// function getDeadlineStatus(daysLeft, isSubmitted) {

//     if (isSubmitted) {
//       return `Здано`;
//     } else if (daysLeft <= 0) {
//         return `Термін минув`;
//     } else if (daysLeft === 1) {
//       return `Останній день`;
//     } 
//     return `Є час`;
// }

// console.log(getDeadlineStatus(-1, false));


// Створи `checkRoute(path, isAuthenticated, role)`. Для шляхів, що починаються з `'/admin'`, потрібна роль `'admin'`; для `'/profile'` потрібна авторизація; шлях `'/'` завжди доступний; решта повертає `Сторінку не знайдено`. Перевір `'/admin/users', true, 'editor'`.

// function checkRoute(path, isAuthenticated, role) {
//     if (path.startsWith('/admin')) {
//       return role === 'admin' ? 'Доступ разрешен' : 'Авторизуйся Собака';
//     }

//     if (path.startsWith('/profile')) {
//         return isAuthenticated === true ? 'Доступ разрешен' : 'Авторизуйся Собака';
//     }

//     if (path === '/') {
//         return 'Доступ разрешен';
//     }

//     return `Сторінку не знайдено`;
// }

// console.log(checkRoute('/admin/users', true, 'editor'));

// За допомогою циклу `for` виведи числа від 1 до 5. Кожне число має з’явитися в консолі на окремому рядку.

// for (let i = 1; i <= 5; i++) {
//   console.log(i);
// }

// Створи функцію `countVowels(text)`. Переведи текст у нижній регістр і циклом порахуй англійські голосні `a`, `e`, `i`, `o`, `u`. Перевір `'Education'`.

// function countVowels(text) {

//     const lowerText = text.toLowerCase();

//     let count = 0;

//     for (let i = 0; i < lowerText.length; i++) {
//           console.log(lowerText[i]);

//           if (lowerText[i] === 'a' || lowerText[i] === 'e' || lowerText[i] === 'i' || lowerText[i] === 'o' || lowerText[i] === 'u') {
//             count++;
//             }
//     }
//     return count;
// }

// console.log(countVowels('Education'));


// За допомогою циклу `for` виведи числа від 5 до 1, а після завершення циклу — слово `Старт!`.

// function start (seconds) {
  
//   for (let i = seconds; i > 0; i--) {
//     console.log(i);
//   }
//   console.log('Start');
// }

// start(5);

// Є рядок `'JS'`. Пройди по ньому циклом і для кожного символу виведи рядок формату `<індекс>: <символ>`.

// function message (string) {
//   for (let i = 0; i < string.length; i++) {
//     console.log(`${i+1}: ${string[i]}`);
//   }
// }

// message('JS');

// Створи `removeSpaces(text)`. Циклом побудуй новий рядок, додаючи лише символи, які не є пробілами. Перевір `'learn js daily'`.

// function removeSpaces(text) {
//   let str = '';

//  for (let i = 0; i < text.length; i++) {
//   if (text[i] !== ' ') {
//     str += text[i];
//   }
//  }
//  return str;
// }

// console.log(removeSpaces('learn js daily'));

// Створи `findLongestWord(text)`. Не використовуй масиви або `split()`. Проходь по рядку разом із додатковим пробілом у кінці, накопичуй поточне слово й запам’ятовуй найдовше. Перевір `'learning loops builds skill'`.

// function findLongestWord(text) {
//   let currentWord = '';
//   let longestWord = '';

//   for (let i = 0; i < text.length; i++) {
//     if (text[i] !== ' ') {
//       currentWord += text[i];
//     } else {
//       if (currentWord.length > longestWord.length) {
//         longestWord = currentWord;
//       }
//       currentWord = '';
//     }
//   }

//   if (currentWord.length > longestWord.length) {
//         longestWord = currentWord;
//       }

//   return longestWord;
// }

// console.log(findLongestWord('learning loops builds skillsadasasdads'));


// Створи `makeWordLengthReport(text)`. Без `split()` сформуй рядок виду `Code(4) every(5) day(3)`. Між елементами має бути один пробіл. Перевір `'Code every day'`.


// function makeWordLengthReport(text) {
//   let currentWord = '';
//   let result = '';

//   for (let i = 0; i < text.length; i++) {
//     if (text[i] !== ' ') {
//       currentWord += text[i];
//     } else {
//         result += `${currentWord}(${currentWord.length}) `
//         currentWord = '';
//     }
//   }
//   result += `${currentWord}(${currentWord.length})`;

//   return result;
// }

// console.log(makeWordLengthReport('Code every day'));

// Створи `removeDuplicateWords(text)` без `split()`. Читай слова посимвольно. Додавай слово до результату, лише якщо рядок із пробілами навколо результату ще не містить таке окреме слово. Перевір `'code code clean code'`.

// function removeDuplicateWords(text) {
//   let result = '';
//   let currentWord = '';

//   for (let i = 0; i < text.length; i++) {
//     if (text[i] !== ' ') {
//       currentWord += text[i];
//     } else {
//       if (!result.includes(currentWord)) {
//         result += `${currentWord} `;
        
//       }
//       currentWord = '';
//     }
//   } 
//    if (!result.includes(currentWord)) {
//         result += `${currentWord} `;
//       }

//   return result.trim();
// }

// console.log(removeDuplicateWords('code code clean code'))

// Створи функцію `getFirstItem(items)`, яка повертає перший елемент масиву. Якщо масив порожній, поверни рядок `Кошик порожній`. Перевір масив `['Молоко', 'Хліб', 'Яблука']`.

// function getFirstItem(items) {
//   if (items.length === 0) {
//     return `Кошик порожній`;
//   } 
//   return items[0];
// }


// console.log(getFirstItem(['Молоко', 'Хліб', 'Яблука']));


// Створи `calculateAverage(ratings)`. Якщо масив порожній, поверни 0. Інакше циклом знайди суму й поділи її на кількість оцінок. Перевір `[5, 4, 5, 3, 3]`.


// function calculateAverage(ratings) {
//   if (ratings.length === 0) {
//     return 0;
//   }
  
//   let sum = 0;
//   let count = 0;

//   for (const rating of ratings) {
//     if (typeof rating === 'number') {
//           sum += rating;
//           count += 1;
//     } 
//   } 
//   return sum / count;
// }

// console.log(calculateAverage([5, 4, 5, 3, 3, 'hello']));


// Ціни та кількості зберігаються у двох масивах з однаковими індексами. Створи `calculateCartTotal(prices, quantities)`, яка додає `price * quantity` для кожної позиції. Перевір `[80, 25, 40]` і `[2, 3, 1]`.


// function calculateCartTotal(prices, quantities) {
//   let total = 0;

//   for (let i = 0; i < prices.length; i++) {
//     total += prices[i] * quantities[i];
//   }

//   return total;
// }

// console.log(calculateCartTotal([80, 25, 40], [2, 3, 1]));

// Створи `applyDiscount(prices, percent)`, яка повертає новий масив цін після знижки. Для округлення до двох знаків використай `Number(value.toFixed(2))`. Не використовуй `map()`. Перевір `[100, 250, 80]`, `10`.


// function applyDiscount(prices, percent) {
//   const newPrices = [];

//   for (const price of prices) { 
//     const discounted = price - (price * percent) / 100;
//     newPrices.push(Number(discounted.toFixed(2)));
//   }
//   return newPrices;
// }


// console.log(applyDiscount([100, 250, 80], 17))


// Створи `cleanTags(tags)`. Для кожного рядка прибери крайні пробіли, переведи його у нижній регістр, пропусти порожні й не додавай дублікати. Перевір `[' JavaScript ', 'web', '', 'javascript', ' WEB ']`.

// function cleanTags(tags) {
//   const newTags = [];

//   for (const tag of tags) {
//     const normalizeTag = tag.trim().toLowerCase();
//     if (normalizeTag !== '' && !newTags.includes(normalizeTag)) {
//       newTags.push(normalizeTag);
//     }
//   }
//     return newTags;
// }

// console.log(cleanTags([' JavaScript ', 'web', '', 'javascript', ' WEB ']));


// Створи `searchNames(names, query)`. Поверни новий масив назв, що містять запит без урахування регістру. Використай цикл та рядковий `includes()`. Перевір `['JavaScript Basics', 'React Start', 'Advanced JavaScript']`, `'script'`.


// function searchNames(names, query) {
//   const newNames = [];

//   for (const name of names) {
//     const normalizeName = name.toLowerCase().trim();
//       if (normalizeName.includes(query)) {
//         newNames.push(normalizeName);
//       }
//   }
//   return newNames;
// }

// console.log(searchNames(['JavaScript Basics', 'React Start', 'Advanced JavaScript'], 'script'));


// Створи `limitHistory(history, limit)`, яка повертає новий масив лише з останніх `limit` запитів. Початковий масив не змінюй. Перевір п’ять запитів і ліміт 3.

// const history = ['HTML', 'CSS', 'JS', 'React', 'Node'];

// function limitHistory(history, limit) {
//   const lastestHistory = [];

//    for (let i = history.length - limit; i < history.length; i++) {
//       if (history[i]) {
//         lastestHistory.push(history[i]);
//       }
//    }
//    return lastestHistory;
// }

// console.log(limitHistory(history, 3));




// const history = ['HTML', 'CSS', 'JS', 'React', 'Node'];

// function limitHistory(history, limit) {
//   const startIndex = history.length > limit ? history.length - limit : 0;
//   return history.slice(startIndex);
// }

// console.log(limitHistory(history, 3));


// Створи `getUnsubscribed(previous, current)`, яка повертає імена, що були у попередньому масиві, але відсутні в поточному. Перевір `['Іра', 'Макс', 'Оля']` і `['Макс', 'Оля', 'Тарас']`.

function getUnsubscribed(previous, current) {
  const unsub = [];

 for (const element of previous) {
  if (!current.includes(element)) {
    unsub.push(element);
  }
 }
 return unsub;
}

console.log(getUnsubscribed(['Іра', 'Макс', 'Оля'],  ['Макс', 'Оля', 'Тарас']));
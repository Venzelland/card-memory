// Массив слов с переводами и статусом изучения
const wordsArr = {
    work: [{english: 'job', russian: 'работа'}, {english: 'salary', russian: 'зарплата'}, {
        english: 'office', russian: 'офис'
    }, {english: 'career', russian: 'карьера'}, {english: 'boss', russian: 'начальник'}, {
        english: 'employee', russian: 'сотрудник'
    }, {english: 'meeting', russian: 'встреча'}, {english: 'task', russian: 'задача'}, {
        english: 'deadline', russian: 'срок'
    }, {english: 'promotion', russian: 'повышение'}, {english: 'bonus', russian: 'бонус'}, {
        english: 'project', russian: 'проект'
    }, {english: 'team', russian: 'команда'}, {english: 'internship', russian: 'стажировка'}, {
        english: 'client', russian: 'клиент'
    }, {english: 'contract', russian: 'контракт'}, {english: 'business', russian: 'бизнес'}, {
        english: 'industry', russian: 'индустрия'
    }, {english: 'overtime', russian: 'сверхурочная работа'}, {
        english: 'holiday', russian: 'праздник'
    }, {english: 'report', russian: 'отчет'}, {english: 'manager', russian: 'менеджер'}, {
        english: 'colleague', russian: 'коллега'
    }, {english: 'training', russian: 'обучение'}, {english: 'resume', russian: 'резюме'}, {
        english: 'interview', russian: 'интервью'
    }, {english: 'department', russian: 'отдел'}, {
        english: 'conference', russian: 'конференция'
    }, {english: 'networking', russian: 'нетворкинг'}, {english: 'skills', russian: 'навыки'}, {
        english: 'experience', russian: 'опыт'
    }, {english: 'vacation', russian: 'отпуск'}, {
        english: 'productivity', russian: 'продуктивность'
    }, {english: 'efficiency', russian: 'эффективность'}, {
        english: 'supervisor', russian: 'руководитель'
    }, {english: 'strategy', russian: 'стратегия'}, {english: 'goals', russian: 'цели'}, {
        english: 'result', russian: 'результат'
    }, {english: 'performance', russian: 'производительность'}, {
        english: 'position', russian: 'должность'
    }, {english: 'shift', russian: 'смена'}, {english: 'salary', russian: 'заработная плата'}, {
        english: 'contractor', russian: 'подрядчик'
    }, {english: 'deadline', russian: 'срок'}, {english: 'equipment', russian: 'оборудование'}, {
        english: 'benefits', russian: 'льготы'
    }, {english: 'pension', russian: 'пенсия'}, {
        english: 'workplace', russian: 'рабочее место'
    }, {english: 'assignments', russian: 'назначения'},],
    animals: [{english: 'cat', russian: 'кот'}, {english: 'dog', russian: 'собака'}, {
        english: 'horse', russian: 'лошадь'
    }, {english: 'cow', russian: 'корова'}, {english: 'sheep', russian: 'овца'}, {
        english: 'goat', russian: 'коза'
    }, {english: 'chicken', russian: 'курица'}, {english: 'pig', russian: 'свинья'}, {
        english: 'duck', russian: 'утка'
    }, {english: 'rabbit', russian: 'кролик'}, {english: 'elephant', russian: 'слон'}, {
        english: 'tiger', russian: 'тигр'
    }, {english: 'lion', russian: 'лев'}, {english: 'bear', russian: 'медведь'}, {
        english: 'wolf', russian: 'волк'
    }, {english: 'fox', russian: 'лиса'}, {english: 'deer', russian: 'олень'}, {
        english: 'mouse', russian: 'мышь'
    }, {english: 'rat', russian: 'крыса'}, {english: 'squirrel', russian: 'белка'}, {
        english: 'hedgehog', russian: 'ёж'
    }, {english: 'frog', russian: 'лягушка'}, {english: 'sparrow', russian: 'воробей'}, {
        english: 'eagle', russian: 'орёл'
    }, {english: 'owl', russian: 'сова'}, {english: 'pigeon', russian: 'голубь'}, {
        english: 'crow', russian: 'ворона'
    }, {english: 'parrot', russian: 'попугай'}, {english: 'swan', russian: 'лебедь'}, {
        english: 'peacock', russian: 'павлин'
    }, {english: 'penguin', russian: 'пингвин'}, {english: 'flamingo', russian: 'фламинго'}, {
        english: 'salmon', russian: 'лосось'
    }, {english: 'trout', russian: 'форель'}, {english: 'tuna', russian: 'тунец'}, {
        english: 'shark', russian: 'акула'
    }, {english: 'goldfish', russian: 'золотая рыбка'}, {english: 'carp', russian: 'карп'}, {
        english: 'herring', russian: 'сельдь'
    }, {english: 'cod', russian: 'треска'}, {english: 'mackerel', russian: 'скумбрия'}, {
        english: 'catfish', russian: 'сом'
    }, {english: 'ant', russian: 'муравей'}, {english: 'bee', russian: 'пчела'}, {
        english: 'butterfly', russian: 'бабочка'
    }, {english: 'mosquito', russian: 'комар'}, {english: 'fly', russian: 'муха'}, {
        english: 'beetle', russian: 'жук'
    }, {english: 'dragonfly', russian: 'стрекоза'}, {english: 'grasshopper', russian: 'кузнечик'}, {
        english: 'spider', russian: 'паук'
    }, {english: 'wasp', russian: 'оса'}, {english: 'snake', russian: 'змея'}, {
        english: 'lizard', russian: 'ящерица'
    }, {english: 'crocodile', russian: 'крокодил'}, {english: 'turtle', russian: 'черепаха'}, {
        english: 'chameleon', russian: 'хамелеон'
    }, {english: 'gecko', russian: 'геккон'}, {english: 'iguana', russian: 'игуана'}, {
        english: 'alligator', russian: 'аллигатор'
    }, {english: 'python', russian: 'питон'}, {english: 'cobra', russian: 'кобра'}, {
        english: 'octopus', russian: 'осьминог'
    }, {english: 'jellyfish', russian: 'медуза'}, {english: 'crab', russian: 'краб'}, {
        english: 'lobster', russian: 'омар'
    }, {english: 'shrimp', russian: 'креветка'}, {english: 'starfish', russian: 'морская звезда'}, {
        english: 'seahorse', russian: 'морской конёк'
    }, {english: 'whale', russian: 'кит'}, {english: 'dolphin', russian: 'дельфин'}, {
        english: 'seal', russian: 'тюлень'
    }
        // Добавьте больше слов для этой категории
    ],
    colors: [{english: 'red', russian: 'красный'}, {english: 'blue', russian: 'синий'}, {
        english: 'green', russian: 'зелёный'
    }, {english: 'yellow', russian: 'жёлтый'}, {english: 'black', russian: 'чёрный'}, {
        english: 'white', russian: 'белый'
    }, {english: 'orange', russian: 'оранжевый'}, {english: 'pink', russian: 'розовый'}, {
        english: 'purple', russian: 'фиолетовый'
    }, {english: 'brown', russian: 'коричневый'}, {english: 'gold', russian: 'золотой'}, {
        english: 'silver', russian: 'серебряный'
    }, {english: 'bronze', russian: 'бронзовый'}, {english: 'amber', russian: 'янтарный'}, {
        english: 'ivory', russian: 'слоновая кость'
    }, {english: 'olive', russian: 'оливковый'}, {english: 'coral', russian: 'коралловый'}, {
        english: 'peach', russian: 'персиковый'
    }, {english: 'sapphire', russian: 'сапфировый'}, {english: 'emerald', russian: 'изумрудный'}, {
        english: 'cherry', russian: 'вишнёвый'
    }, {english: 'lime', russian: 'лаймовый'}, {english: 'lemon', russian: 'лимонный'}, {
        english: 'mint', russian: 'мятный'
    }, {english: 'chocolate', russian: 'шоколадный'}, {english: 'caramel', russian: 'карамельный'}, {
        english: 'grape', russian: 'виноградный'
    }, {english: 'peanut', russian: 'арахисовый'}, {english: 'coffee', russian: 'кофейный'}, {
        english: 'berry', russian: 'ягодный'
    }, {english: 'ruby', russian: 'рубиновый'}, {english: 'jade', russian: 'нефритовый'}, {
        english: 'topaz', russian: 'топаз'
    }, {english: 'amethyst', russian: 'аметист'}, {english: 'turquoise', russian: 'бирюза'}, {
        english: 'garnet', russian: 'гранат'
    }, {english: 'opal', russian: 'опал'}, {english: 'aquamarine', russian: 'аквамарин'}, {
        english: 'pearl', russian: 'жемчужный'
    }, {english: 'diamond', russian: 'бриллиант'}, {english: 'rose', russian: 'розовый'}, {
        english: 'violet', russian: 'фиолетовый'
    }, {english: 'lilac', russian: 'сиреневый'}, {english: 'lavender', russian: 'лавандовый'}, {
        english: 'daisy', russian: 'ромашковый'
    }, {english: 'tulip', russian: 'тюльпановый'}, {english: 'sunflower', russian: 'подсолнечный'}, {
        english: 'poppy', russian: 'маковый'
    }, {english: 'orchid', russian: 'орхидея'}, {english: 'hyacinth', russian: 'гиацинтовый'}, {
        english: 'tan', russian: 'загар'
    }, {english: 'beige', russian: 'бежевый'}, {english: 'khaki', russian: 'хаки'}, {
        english: 'fuchsia', russian: 'фуксия'
    }, {english: 'cyan', russian: 'циан'}, {english: 'magenta', russian: 'маджента'}, {
        english: 'teal', russian: 'бирюзовый'
    }, {english: 'indigo', russian: 'индиго'}, {english: 'navy', russian: 'тёмно-синий'}, {
        english: 'maroon', russian: 'бордовый'
    }
        // Добавьте больше слов для этой категории
    ],
    verbs: [{english: 'run', russian: 'бежать'}, {english: 'jump', russian: 'прыгать'}, {
        english: 'eat', russian: 'есть'
    }, {english: 'drink', russian: 'пить'}, {english: 'sleep', russian: 'спать'}, {
        english: 'read', russian: 'читать'
    }, {english: 'write', russian: 'писать'}, {english: 'speak', russian: 'говорить'}, {
        english: 'listen', russian: 'слушать'
    }, {english: 'see', russian: 'видеть'}, {english: 'walk', russian: 'идти'}, {
        english: 'sit', russian: 'сидеть'
    }, {english: 'stand', russian: 'стоять'}, {english: 'work', russian: 'работать'}, {
        english: 'play', russian: 'играть'
    }, {english: 'sing', russian: 'петь'}, {english: 'dance', russian: 'танцевать'}, {
        english: 'laugh', russian: 'смеяться'
    }, {english: 'cry', russian: 'плакать'}, {english: 'cook', russian: 'готовить'}, {
        english: 'clean', russian: 'убирать'
    }, {english: 'drive', russian: 'водить'}, {english: 'fly', russian: 'летать'}, {
        english: 'swim', russian: 'плавать'
    }, {english: 'think', russian: 'думать'}, {english: 'know', russian: 'знать'}, {
        english: 'understand', russian: 'понимать'
    }, {english: 'remember', russian: 'помнить'}, {english: 'forget', russian: 'забывать'}, {
        english: 'love', russian: 'любить'
    }, {english: 'hate', russian: 'ненавидеть'}, {english: 'buy', russian: 'покупать'}, {
        english: 'sell', russian: 'продавать'
    }, {english: 'give', russian: 'давать'}, {english: 'take', russian: 'брать'}, {
        english: 'help', russian: 'помогать'
    }, {english: 'find', russian: 'находить'}, {english: 'lose', russian: 'терять'}, {
        english: 'open', russian: 'открывать'
    }, {english: 'close', russian: 'закрывать'}, {english: 'call', russian: 'звонить'}, {
        english: 'answer', russian: 'отвечать'
    }, {english: 'wait', russian: 'ждать'}, {english: 'show', russian: 'показывать'}, {
        english: 'build', russian: 'строить'
    }, {english: 'break', russian: 'ломать'}, {english: 'create', russian: 'создавать'}, {
        english: 'destroy', russian: 'уничтожать'
    }, {english: 'begin', russian: 'начинать'}, {english: 'finish', russian: 'заканчивать'}, {
        english: 'enjoy', russian: 'наслаждаться'
    }, {english: 'hope', russian: 'надеяться'}, {english: 'wish', russian: 'желать'}, {
        english: 'promise', russian: 'обещать'
    }, {english: 'decide', russian: 'решать'}],
    irregular_verbs: [{english: 'be, was/were, been', russian: 'быть'}, {
        english: 'become, became, become', russian: 'становиться'
    }, {english: 'begin, began, begun', russian: 'начинать'}, {
        english: 'break, broke, broken', russian: 'ломать'
    }, {english: 'bring, brought, brought', russian: 'приносить'}, {
        english: 'build, built, built', russian: 'строить'
    }, {english: 'buy, bought, bought', russian: 'покупать'}, {
        english: 'catch, caught, caught', russian: 'ловить'
    }, {english: 'choose, chose, chosen', russian: 'выбирать'}, {
        english: 'come, came, come', russian: 'приходить'
    }, {english: 'cost, cost, cost', russian: 'стоить'}, {
        english: 'cut, cut, cut', russian: 'резать'
    }, {english: 'do, did, done', russian: 'делать'}, {
        english: 'draw, drew, drawn', russian: 'рисовать'
    }, {english: 'drink, drank, drunk', russian: 'пить'}, {
        english: 'drive, drove, driven', russian: 'водить'
    }, {english: 'eat, ate, eaten', russian: 'есть'}, {
        english: 'fall, fell, fallen', russian: 'падать'
    }, {english: 'feel, felt, felt', russian: 'чувствовать'}, {
        english: 'find, found, found', russian: 'находить'
    }, {english: 'fly, flew, flown', russian: 'летать'}, {
        english: 'forget, forgot, forgotten', russian: 'забывать'
    }, {english: 'get, got, gotten', russian: 'получать'}, {
        english: 'give, gave, given', russian: 'давать'
    }, {english: 'go, went, gone', russian: 'идти'}, {
        english: 'grow, grew, grown', russian: 'расти'
    }, {english: 'have, had, had', russian: 'иметь'}, {
        english: 'hear, heard, heard', russian: 'слышать'
    }, {english: 'know, knew, known', russian: 'знать'}, {
        english: 'leave, left, left', russian: 'уходить'
    }, {english: 'lose, lost, lost', russian: 'терять'}, {
        english: 'make, made, made', russian: 'делать'
    }, {english: 'meet, met, met', russian: 'встречать'}, {
        english: 'pay, paid, paid', russian: 'платить'
    }, {english: 'read, read, read', russian: 'читать'}, {
        english: 'ride, rode, ridden', russian: 'ехать'
    }, {english: 'run, ran, run', russian: 'бежать'}, {
        english: 'say, said, said', russian: 'сказать'
    }, {english: 'see, saw, seen', russian: 'видеть'}, {
        english: 'sell, sold, sold', russian: 'продавать'
    }, {english: 'send, sent, sent', russian: 'отправлять'}, {
        english: 'sit, sat, sat', russian: 'сидеть'
    }, {english: 'sleep, slept, slept', russian: 'спать'}, {
        english: 'speak, spoke, spoken', russian: 'говорить'
    }, {english: 'spend, spent, spent', russian: 'тратить'}, {
        english: 'stand, stood, stood', russian: 'стоять'
    }, {english: 'take, took, taken', russian: 'брать'}, {
        english: 'teach, taught, taught', russian: 'учить'
    }, {english: 'tell, told, told', russian: 'рассказывать'}, {
        english: 'think, thought, thought', russian: 'думать'
    }, {english: 'understand, understood, understood', russian: 'понимать'}, {
        english: 'wear, wore, worn', russian: 'носить'
    }, {english: 'write, wrote, written', russian: 'писать'}],
    food_and_drinks: [{english: 'apple', russian: 'яблоко'}, {english: 'banana', russian: 'банан'}, {
        english: 'orange', russian: 'апельсин'
    }, {english: 'grape', russian: 'виноград'}, {english: 'strawberry', russian: 'клубника'}, {
        english: 'blueberry', russian: 'голубика'
    }, {english: 'raspberry', russian: 'малина'}, {english: 'watermelon', russian: 'арбуз'}, {
        english: 'melon', russian: 'дыня'
    }, {english: 'pineapple', russian: 'ананас'}, {english: 'pear', russian: 'груша'}, {
        english: 'peach', russian: 'персик'
    }, {english: 'plum', russian: 'слива'}, {english: 'cherry', russian: 'вишня'}, {
        english: 'lemon', russian: 'лимон'
    }, {english: 'lime', russian: 'лайм'}, {english: 'mango', russian: 'манго'}, {
        english: 'kiwi', russian: 'киви'
    }, {english: 'coconut', russian: 'кокос'}, {english: 'avocado', russian: 'авокадо'}, {
        english: 'potato', russian: 'картофель'
    }, {english: 'tomato', russian: 'помидор'}, {english: 'cucumber', russian: 'огурец'}, {
        english: 'carrot', russian: 'морковь'
    }, {english: 'onion', russian: 'лук'}, {english: 'garlic', russian: 'чеснок'}, {
        english: 'lettuce', russian: 'салат'
    }, {english: 'spinach', russian: 'шпинат'}, {english: 'broccoli', russian: 'брокколи'}, {
        english: 'cauliflower', russian: 'цветная капуста'
    }, {english: 'pea', russian: 'горох'}, {english: 'bean', russian: 'боб'}, {
        english: 'corn', russian: 'кукуруза'
    }, {english: 'eggplant', russian: 'баклажан'}, {english: 'pepper', russian: 'перец'}, {
        english: 'pumpkin', russian: 'тыква'
    }, {english: 'zucchini', russian: 'цуккини'}, {english: 'mushroom', russian: 'гриб'}, {
        english: 'beef', russian: 'говядина'
    }, {english: 'pork', russian: 'свинина'}, {english: 'chicken', russian: 'курица'}, {
        english: 'fish', russian: 'рыба'
    }, {english: 'shrimp', russian: 'креветка'}, {english: 'crab', russian: 'краб'}, {
        english: 'lobster', russian: 'омар'
    }, {english: 'rice', russian: 'рис'}, {english: 'pasta', russian: 'паста'}, {
        english: 'bread', russian: 'хлеб'
    }, {english: 'butter', russian: 'масло'}, {english: 'cheese', russian: 'сыр'}, {
        english: 'milk', russian: 'молоко'
    }, {english: 'yogurt', russian: 'йогурт'}, {english: 'ice cream', russian: 'мороженое'}, {
        english: 'cake', russian: 'торт'
    }, {english: 'cookie', russian: 'печенье'}, {english: 'chocolate', russian: 'шоколад'}, {
        english: 'coffee', russian: 'кофе'
    }, {english: 'tea', russian: 'чай'}, {english: 'juice', russian: 'сок'}, {
        english: 'wine', russian: 'вино'
    }, {english: 'beer', russian: 'пиво'}, {english: 'cocktail', russian: 'коктейль'}, {
        english: 'soup', russian: 'суп'
    }, {english: 'salad', russian: 'салат'}, {english: 'sandwich', russian: 'бутерброд'}, {
        english: 'pizza', russian: 'пицца'
    }, {english: 'hamburger', russian: 'гамбургер'}, {english: 'fries', russian: 'картофель фри'}, {
        english: 'sushi', russian: 'суши'
    }, {english: 'taco', russian: 'тако'}, {english: 'burrito', russian: 'буррито'}, {
        english: 'pancake', russian: 'блин'
    }, {english: 'waffle', russian: 'вафля'}],
    transport: [{english: 'car', russian: 'автомобиль'}, {english: 'bus', russian: 'автобус'}, {
        english: 'train', russian: 'поезд'
    }, {english: 'bike', russian: 'велосипед'}, {english: 'motorcycle', russian: 'мотоцикл'}, {
        english: 'truck', russian: 'грузовик'
    }, {english: 'plane', russian: 'самолет'}, {english: 'helicopter', russian: 'вертолет'}, {
        english: 'ship', russian: 'корабль'
    }, {english: 'boat', russian: 'лодка'}, {english: 'subway', russian: 'метро'}, {
        english: 'taxi', russian: 'такси'
    }, {english: 'scooter', russian: 'скутер'}, {english: 'tram', russian: 'трамвай'}, {
        english: 'ferry', russian: 'паром'
    }, {english: 'van', russian: 'фургон'}, {english: 'yacht', russian: 'яхта'}, {
        english: 'bicycle', russian: 'велосипед'
    }, {english: 'jet', russian: 'реактивный самолет'}, {
        english: 'limousine', russian: 'лимузин'
    }, {english: 'cruise ship', russian: 'круизный лайнер'}, {
        english: 'skateboard', russian: 'скейтборд'
    }, {english: 'hot air balloon', russian: 'воздушный шар'}, {
        english: 'trolleybus', russian: 'троллейбус'
    }, {english: 'motorboat', russian: 'моторная лодка'}, {
        english: 'jet ski', russian: 'гидроцикл'
    }, {english: 'segway', russian: 'сегвей'}, {english: 'rocket', russian: 'ракета'}, {
        english: 'gondola', russian: 'гондола'
    }, {english: 'cable car', russian: 'канатная дорога'}, {
        english: 'snowmobile', russian: 'снегоход'
    }, {english: 'tractor', russian: 'трактор'}, {english: 'bulldozer', russian: 'бульдозер'}, {
        english: 'ambulance', russian: 'скорая помощь'
    }, {english: 'fire truck', russian: 'пожарная машина'}, {
        english: 'police car', russian: 'полицейская машина'
    }, {english: 'lifeboat', russian: 'спасательная лодка'}, {
        english: 'golf cart', russian: 'гольфкарт'
    }, {english: 'sailboat', russian: 'парусная лодка'}, {
        english: 'bullock cart', russian: 'вьючная повозка'
    }, {english: 'tow truck', russian: 'эвакуатор'}, {
        english: 'tractor-trailer', russian: 'седельный тягач'
    }, {english: 'horse-drawn carriage', russian: 'конная повозка'}, {
        english: 'electric scooter', russian: 'электросамокат'
    }, {english: 'airship', russian: 'дирижабль'}, {
        english: 'roller skates', russian: 'роликовые коньки'
    }, {english: 'tractor unit', russian: 'тягач'}, {
        english: 'forklift', russian: 'погрузчик'
    }, {english: 'motorized wheelchair', russian: 'моторизованное инвалидное кресло'}, {
        english: 'sidecar', russian: 'боковая коляска'
    }, {english: 'unicycle', russian: 'одноколесный велосипед'}, {
        english: 'hansom cab', russian: 'кабриолет'
    }, {english: 'horse and buggy', russian: 'лошадь и карета'}, {english: 'atv', russian: 'квадроцикл'}],
    clothing_and_accessories: [{english: 'shirt', russian: 'рубашка'}, {
        english: 'pants', russian: 'брюки'
    }, {english: 'dress', russian: 'платье'}, {english: 'skirt', russian: 'юбка'}, {
        english: 'jacket', russian: 'куртка'
    }, {english: 'coat', russian: 'пальто'}, {english: 'sweater', russian: 'свитер'}, {
        english: 'blouse', russian: 'блузка'
    }, {english: 't-shirt', russian: 'футболка'}, {english: 'jeans', russian: 'джинсы'}, {
        english: 'shorts', russian: 'шорты'
    }, {english: 'suit', russian: 'костюм'}, {english: 'tie', russian: 'галстук'}, {
        english: 'scarf', russian: 'шарф'
    }, {english: 'hat', russian: 'шляпа'}, {english: 'cap', russian: 'кепка'}, {
        english: 'gloves', russian: 'перчатки'
    }, {english: 'socks', russian: 'носки'}, {english: 'shoes', russian: 'обувь'}, {
        english: 'boots', russian: 'ботинки'
    }, {english: 'sandals', russian: 'сандалии'}, {english: 'slippers', russian: 'тапочки'}, {
        english: 'swimsuit', russian: 'купальник'
    }, {english: 'robe', russian: 'халат'}, {english: 'belt', russian: 'пояс'}, {
        english: 'purse', russian: 'кошелек'
    }, {english: 'handbag', russian: 'сумка'}, {english: 'backpack', russian: 'рюкзак'}, {
        english: 'umbrella', russian: 'зонт'
    }, {english: 'watch', russian: 'часы'}, {english: 'ring', russian: 'кольцо'}, {
        english: 'necklace', russian: 'ожерелье'
    }, {english: 'earrings', russian: 'серьги'}, {english: 'bracelet', russian: 'браслет'}, {
        english: 'sunglasses', russian: 'солнцезащитные очки'
    }, {english: 'beanie', russian: 'шапка-бини'}, {english: 'mittens', russian: 'варежки'}, {
        english: 'bow tie', russian: 'бабочка'
    }, {english: 'pajamas', russian: 'пижама'}, {english: 'overalls', russian: 'комбинезон'}],
    nature_and_weather: [{english: 'sun', russian: 'солнце'}, {english: 'moon', russian: 'луна'}, {
        english: 'star', russian: 'звезда'
    }, {english: 'sky', russian: 'небо'}, {english: 'cloud', russian: 'облако'}, {
        english: 'rain', russian: 'дождь'
    }, {english: 'snow', russian: 'снег'}, {english: 'wind', russian: 'ветер'}, {
        english: 'storm', russian: 'шторм'
    }, {english: 'thunder', russian: 'гром'}, {english: 'lightning', russian: 'молния'}, {
        english: 'fog', russian: 'туман'
    }, {english: 'mist', russian: 'мгла'}, {english: 'rainbow', russian: 'радуга'}, {
        english: 'hail', russian: 'град'
    }, {english: 'ice', russian: 'лед'}, {english: 'frost', russian: 'мороз'}, {
        english: 'sunrise', russian: 'восход солнца'
    }, {english: 'sunset', russian: 'закат солнца'}, {english: 'dawn', russian: 'рассвет'}, {
        english: 'dusk', russian: 'сумерки'
    }, {english: 'season', russian: 'сезон'}, {english: 'spring', russian: 'весна'}, {
        english: 'summer', russian: 'лето'
    }, {english: 'autumn', russian: 'осень'}, {english: 'winter', russian: 'зима'}, {
        english: 'flower', russian: 'цветок'
    }, {english: 'tree', russian: 'дерево'}, {english: 'forest', russian: 'лес'}, {
        english: 'jungle', russian: 'джунгли'
    }, {english: 'mountain', russian: 'гора'}, {english: 'hill', russian: 'холм'}, {
        english: 'river', russian: 'река'
    }, {english: 'lake', russian: 'озеро'}, {english: 'sea', russian: 'море'}, {
        english: 'ocean', russian: 'океан'
    }, {english: 'beach', russian: 'пляж'}, {english: 'desert', russian: 'пустыня'}, {
        english: 'island', russian: 'остров'
    }, {english: 'volcano', russian: 'вулкан'}, {english: 'cave', russian: 'пещера'}, {
        english: 'waterfall', russian: 'водопад'
    }, {english: 'stream', russian: 'ручей'}, {english: 'pond', russian: 'пруд'}, {
        english: 'marsh', russian: 'болото'
    }, {english: 'glacier', russian: 'ледник'}, {english: 'earthquake', russian: 'землетрясение'}, {
        english: 'tornado', russian: 'торнадо'
    }, {english: 'hurricane', russian: 'ураган'}, {english: 'avalanche', russian: 'лавина'}, {
        english: 'geyser', russian: 'гейзер'
    }, {english: 'tidal wave', russian: 'приливная волна'}, {
        english: 'wildfire', russian: 'лесной пожар'
    }, {english: 'drought', russian: 'засуха'}, {english: 'flood', russian: 'наводнение'}, {
        english: 'pollen', russian: 'пыльца'
    }, {english: 'breeze', russian: 'легкий ветер'}, {english: 'climate', russian: 'климат'}, {
        english: 'ecosystem', russian: 'экосистема'
    }, {english: 'habitat', russian: 'место обитания'}, {
        english: 'environment', russian: 'окружающая среда'
    }, {english: 'biome', russian: 'биом'}, {english: 'conservation', russian: 'охрана природы'}, {
        english: 'recycle', russian: 'перерабатывать'
    }, {english: 'weather forecast', russian: 'прогноз погоды'}, {
        english: 'natural disaster', russian: 'естественная катастрофа'
    }],
    uncountable_nouns: [{english: 'water', russian: 'вода'}, {
        english: 'information', russian: 'информация'
    }, {english: 'advice', russian: 'совет'}, {english: 'equipment', russian: 'оборудование'}, {
        english: 'furniture', russian: 'мебель'
    }, {english: 'homework', russian: 'домашняя работа'}, {english: 'luggage', russian: 'багаж'}, {
        english: 'money', russian: 'деньги'
    }, {english: 'music', russian: 'музыка'}, {english: 'news', russian: 'новости'}, {
        english: 'bread', russian: 'хлеб'
    }, {english: 'butter', russian: 'масло'}, {english: 'cheese', russian: 'сыр'}, {
        english: 'coffee', russian: 'кофе'
    }, {english: 'milk', russian: 'молоко'}, {english: 'oil', russian: 'масло'}, {
        english: 'rice', russian: 'рис'
    }, {english: 'salt', russian: 'соль'}, {english: 'sugar', russian: 'сахар'}, {
        english: 'tea', russian: 'чай'
    }, {english: 'weather', russian: 'погода'}, {english: 'traffic', russian: 'движение'}, {
        english: 'furniture', russian: 'мебель'
    }, {english: 'laughter', russian: 'смех'}, {english: 'anger', russian: 'гнев'}, {
        english: 'happiness', russian: 'счастье'
    }, {english: 'education', russian: 'образование'}, {
        english: 'homework', russian: 'домашняя работа'
    }, {english: 'luggage', russian: 'багаж'}, {english: 'baggage', russian: 'багаж'}, {
        english: 'advice', russian: 'совет'
    }, {english: 'bread', russian: 'хлеб'}, {english: 'toast', russian: 'тост'}, {
        english: 'knowledge', russian: 'знания'
    }, {english: 'news', russian: 'новости'}, {english: 'progress', russian: 'прогресс'}, {
        english: 'work', russian: 'работа'
    }, {english: 'research', russian: 'исследование'}, {english: 'shopping', russian: 'покупки'}, {
        english: 'spaghetti', russian: 'спагетти'
    }, {english: 'money', russian: 'деньги'}, {english: 'clothing', russian: 'одежда'}, {
        english: 'machinery', russian: 'техника'
    }, {english: 'jewelry', russian: 'ювелирные изделия'}, {
        english: 'pollution', russian: 'загрязнение'
    }, {english: 'scenery', russian: 'пейзаж'}, {english: 'shopping', russian: 'покупки'}, {
        english: 'stamina', russian: 'выносливость'
    }, {english: 'time', russian: 'время'}, {english: 'traffic', russian: 'движение'}],
    verbs_for_a1: [{english: "improve", russian: "улучшать"}, {english: "want", russian: "хотеть"}, {
        english: "arrive", russian: "приезжать"
    }, {english: "can", russian: "мочь"}, {english: "enjoy", russian: "обожать"}, {
        english: "finish", russian: "окончить"
    }, {english: "find", russian: "найти"}, {english: "recommend", russian: "рекомендовать"}, {
        english: "feed", russian: "кормить"
    }, {english: "smile", russian: "улыбаться"}, {english: "study", russian: "изучать"}, {
        english: "drink", russian: "пить"
    }, {english: "fail", russian: "провалить"}, {english: "celebrate", russian: "праздновать"}, {
        english: "achieve", russian: "достигать"
    }, {english: "speak", russian: "говорить"}, {english: "point", russian: "указывать"}, {
        english: "explain", russian: "объяснять"
    }, {english: "look", russian: "смотреть на"}, {english: "throw", russian: "бросать"}, {
        english: "ask", russian: "задавать вопрос"
    }, {english: "forget", russian: "забывать"}, {english: "begin", russian: "начинаться"}, {
        english: "worry", russian: "беспокоиться"
    }, {english: "stop", russian: "останавливаться"}, {english: "must", russian: "должен"}, {
        english: "cut", russian: "резать"
    }, {english: "change", russian: "изменяться"}, {english: "control", russian: "контролировать"}, {
        english: "earn", russian: "зарабатывать"
    }, {english: "follow", russian: "следовать"}, {english: "try", russian: "стараться"}, {
        english: "marry", russian: "жениться"
    }, {english: "produce", russian: "производить"}, {english: "visit", russian: "посещать"}, {
        english: "ride", russian: "кататься"
    }, {english: "walk", russian: "гулять"}, {english: "note", russian: "отмечать"}, {
        english: "seem", russian: "казаться"
    }, {english: "include", russian: "включать"}, {english: "sell", russian: "продавать"}, {
        english: "test", russian: "тестировать"
    }, {english: "know", russian: "знать"}, {english: "own", russian: "владеть"}, {
        english: "send", russian: "отправлять"
    }, {english: "introduce", russian: "представлять"}, {
        english: "can't imagine life without", russian: "не может представить свою жизнь без"
    }, {english: "dance", russian: "танцевать"}, {english: "lead", russian: "приводить"}, {
        english: "guide", russian: "вести"
    }, {english: "don't know what to do", russian: "не знаю, что делать"}, {
        english: "help", russian: "помогать"
    }, {english: "feel", russian: "чувствовать"}, {english: "consider", russian: "считать"}, {
        english: "interest", russian: "интересовать"
    }, {english: "prefer", russian: "предпочитать"}, {english: "experience", russian: "испытывать"}, {
        english: "thank", russian: "благодарить"
    }, {english: "sleep", russian: "спать"}, {english: "promise", russian: "обещать"}, {
        english: "begin", russian: "начинать"
    }, {english: "spend", russian: "проводить"}, {english: "turn", russian: "поворачивать"}, {
        english: "share", russian: "делиться"
    }, {english: "show", russian: "показывать"}, {english: "see", russian: "видеть"}, {
        english: "carry", russian: "нести"
    }, {english: "teach", russian: "преподавать"}, {english: "close", russian: "закрывать"}, {
        english: "agree", russian: "соглашаться"
    }, {english: "find", russian: "найти"}, {english: "cost", russian: "стоить"}, {
        english: "need", russian: "нужно"
    }, {english: "deliver", russian: "доставлять"}, {english: "produce", russian: "производить"}, {
        english: "check", russian: "проверять"
    }, {english: "reduce", russian: "сокращать"}, {english: "advise", russian: "советовать"}, {
        english: "sound", russian: "звучать"
    }, {english: "do", russian: "делать"}, {english: "add", russian: "добавить"}, {
        english: "answer", russian: "отвечать"
    }, {english: "play", russian: "играть"}, {english: "sing", russian: "петь"}, {
        english: "fly", russian: "летать"
    }, {english: "invite", russian: "приглашать"}, {english: "inform", russian: "информировать"}, {
        english: "run", russian: "бежать"
    }, {english: "fit", russian: "подходить"}, {english: "fill", russian: "заполнять"}, {
        english: "open", russian: "открывать"
    }, {english: "miss", russian: "скучать"}, {english: "skip", russian: "пропускать"}, {
        english: "lose", russian: "упускать"
    }, {english: "motivate", russian: "мотивировать"}, {
        english: "train", russian: "тренироваться"
    }, {english: "receive", russian: "получать"}, {english: "last", russian: "длиться"}, {
        english: "listen", russian: "слушать"
    }, {english: "allow", russian: "разрешать"}, {
        english: "go to a restaurant", russian: "пойти в ресторан"
    }, {english: "hear", russian: "слышать"}, {english: "swim", russian: "плавать"}, {
        english: "wear", russian: "носить"
    }, {english: "copy", russian: "копировать"}, {english: "wash hands", russian: "мыть руки"}, {
        english: "drive", russian: "водить машину"
    }, {english: "build", russian: "строить"}, {english: "support", russian: "поддерживать"}, {
        english: "express", russian: "выражать"
    }, {english: "lie", russian: "лежать"}, {english: "lie down", russian: "прилечь"}, {
        english: "order online", russian: "заказывать онлайн"
    }, {english: "save time", russian: "экономить время"}, {
        english: "pay for", russian: "платить за"
    }, {english: "come", russian: "приходить"}, {english: "kill", russian: "убивать"}, {
        english: "suppose", russian: "полагать"
    }, {english: "complain", russian: "жаловаться"}, {english: "wait", russian: "ждать"}, {
        english: "write", russian: "писать"
    }, {english: "speak", russian: "говорить"}, {english: "return", russian: "возвращаться"}, {
        english: "like", russian: "нравиться"
    }, {english: "refuse", russian: "отказываться"}, {english: "happen", russian: "случаться"}, {
        english: "cook", russian: "готовить"
    }, {english: "sign", russian: "подписывать"}, {english: "leave", russian: "уходить"}, {
        english: "love", russian: "любить"
    }, {english: "discuss", russian: "обсуждать"}, {
        english: "suggest", russian: "предлагать"
    }, {english: "attract attention", russian: "привлекать внимание"}, {
        english: "wish", russian: "желать"
    }, {english: "borrow", russian: "одолжить"}, {english: "have", russian: "иметь"}, {
        english: "think", russian: "думать"
    }, {english: "sit", russian: "сидеть"}, {english: "continue", russian: "продолжать"}, {
        english: "care", russian: "заботиться"
    }, {english: "worry", russian: "волноваться"}, {english: "choose", russian: "выбирать"}, {
        english: "record", russian: "записывать"
    }, {english: "achieve", russian: "достигать"}, {english: "kiss", russian: "целовать"}, {
        english: "grow", russian: "расти"
    }, {english: "own", russian: "владеть"}, {english: "develop", russian: "развивать"}, {
        english: "believe", russian: "верить"
    }, {english: "need", russian: "нужно"}, {english: "prepare for", russian: "готовиться к чему-то"}, {
        english: "expect", russian: "ожидать"
    }, {english: "divide into parts", russian: "разделять на несколько частей"}, {
        english: "realize", russian: "осознавать"
    }, {english: "stop doing something", russian: "перестать что-то делать"}, {
        english: "depend on", russian: "зависит от"
    }, {english: "bring", russian: "приносить"}, {
        english: "use often", russian: "часто пользоваться"
    }, {english: "become", russian: "становиться"}, {
        english: "arrive", russian: "приезжать"
    }, {english: "waste time", russian: "терять время"}, {
        english: "accept an offer", russian: "принимать предложение"
    }, {english: "decide", russian: "решать"}, {
        english: "jump over the fence", russian: "перепрыгнуть через забор"
    }, {english: "follow", russian: "следовать"}, {english: "stay", russian: "оставаться"}, {
        english: "lock", russian: "запирать"
    }, {english: "hope", russian: "надеяться"}, {english: "remember", russian: "помнить"}, {
        english: "work", russian: "работать"
    }, {english: "cry", russian: "плакать"}, {english: "travel", russian: "путешествовать"}, {
        english: "receive", russian: "получать"
    }, {english: "get up", russian: "вставать"}, {
        english: "save time", russian: "экономить время"
    }, {english: "repeat", russian: "повторять"}, {
        english: "watch videos", russian: "смотреть видео"
    }, {english: "read articles", russian: "читать статьи"}, {
        english: "join", russian: "присоединиться"
    }, {english: "scare", russian: "пугать"}, {english: "keep", russian: "хранить"}, {
        english: "belong", russian: "принадлежать"
    }, {english: "go home", russian: "идти домой"}, {
        english: "hate", russian: "ненавидеть"
    }, {english: "understand", russian: "понимать"}],

};

let words = [];
let currentIndex = 0;
let currentLanguage = 'ru';

function startLearning() {
    const categorySelect = document.getElementById('categorySelect');
    const selectedCategory = categorySelect.value;

    // Загружаем слова из выбранной категории
    words = wordsArr[selectedCategory].map(word => ({...word, learned: false}));
    currentIndex = 0;

    // Восстанавливаем состояние изученных слов из localStorage
    const storedLearnedWords = JSON.parse(localStorage.getItem('learnedWords')) || [];
    words.forEach(word => {
        word.learned = storedLearnedWords.includes(word.english);
    });

    // Перемешиваем массив слов
    shuffleArray(words);

    // Показываем первое слово
    showWord();
    updateCounters();
}

// Функция для перемешивания массива
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}


// Функция для смены языка интерфейса
function changeLanguage() {
    currentLanguage = document.getElementById('languageSelect').value;
    document.getElementById('remainingWords').textContent = currentLanguage === 'ru' ? 'Оставшиеся слова:' : 'Remaining words:';
    document.getElementById('learnedWords').textContent = currentLanguage === 'ru' ? 'Изученные слова:' : 'Learned words:';
    document.querySelector('button[onclick="previousWord()"]').textContent = currentLanguage === 'ru' ? 'Предыдущее слово' : 'Previous Word';
    document.querySelector('button[onclick="showTranslation()"]').textContent = currentLanguage === 'ru' ? 'Показать перевод' : 'Show Translation';
    document.querySelector('button[onclick="hideTranslation()"]').textContent = currentLanguage === 'ru' ? 'Скрыть перевод' : 'Hide Translation';
    document.querySelector('button[onclick="nextWord()"]').textContent = currentLanguage === 'ru' ? 'Следующее слово' : 'Next Word';
    document.querySelector('button[onclick="markAsLearned()"]').textContent = currentLanguage === 'ru' ? 'Отметить как изученное' : 'Mark as Learned';
    document.getElementById('englishWord').textContent = currentLanguage === 'ru' ? 'Английское слово' : 'English Word';
    document.getElementById('translation').textContent = currentLanguage === 'ru' ? 'Перевод слова' : 'Translation';
    document.getElementById('title').textContent = currentLanguage === 'ru' ? 'Запоминание слов' : 'Memorizing words';

    const categorySelect = document.getElementById('categorySelect');
    const options = categorySelect.options;
    options[0].textContent = currentLanguage === 'ru' ? 'Выберите тему' : 'Choose a topic';
    options[1].textContent = currentLanguage === 'ru' ? 'Животные' : 'Animals';
    options[2].textContent = currentLanguage === 'ru' ? 'Цвета' : 'Colors';
    options[3].textContent = currentLanguage === 'ru' ? 'Основные глаголы' : 'Basic verbs';
    options[4].textContent = currentLanguage === 'ru' ? 'Неправильные глаголы' : 'Irregular verbs';
    options[5].textContent = currentLanguage === 'ru' ? 'Еда' : 'Food';
    options[6].textContent = currentLanguage === 'ru' ? 'Транспорт' : 'Transport';
    options[7].textContent = currentLanguage === 'ru' ? 'Одежда' : 'Clothing';
    options[8].textContent = currentLanguage === 'ru' ? 'Природа' : 'Nature';
    options[9].textContent = currentLanguage === 'ru' ? 'Неисчисляемые существительные' : 'Uncountable nouns';
    options[10].textContent = currentLanguage === 'ru' ? 'Работа' : 'Work';
    showWord();
    updateCounters();
}

function showWord() {
    document.getElementById('englishWord').textContent = words[currentIndex].english;
    document.getElementById('translation').textContent = words[currentIndex].russian;
}


function updateCounters() {
    const remainingWords = words.filter(word => !word.learned).length;
    const learnedWords = words.filter(word => word.learned).length;
    document.getElementById('remainingWords').textContent = currentLanguage === 'ru' ? `Оставшиеся слова: ${remainingWords}` : `Remaining words: ${remainingWords}`;
    document.getElementById('learnedWords').textContent = currentLanguage === 'ru' ? `Изученные слова: ${learnedWords}` : `Learned words: ${learnedWords}`;
}

// Функция для отображения перевода
function showTranslation() {
    document.querySelector(".flashcard-inner").style.transform = "rotateY(180deg)";
    document.getElementById("translation").textContent = words[currentIndex].russian;
}

// Функция для скрытия перевода
function hideTranslation() {
    document.querySelector(".flashcard-inner").style.transform = "rotateY(0deg)";
}

// Функция для перехода к следующему слову
function nextWord() {
    currentIndex++;
    if (currentIndex >= words.length) {
        currentIndex = 0;
        // Проверяем, все ли слова изучены
        if (allWordsLearned()) {
            if (confirm("Вы изучили все слова. Хотите повторить изучение?")) {
                resetLearningStatus();
                currentIndex = 0;
                updateCounters();
                showWord();
            }
        }
    }
    // Показываем следующее неизученное слово
    while (words[currentIndex].learned) {
        currentIndex++;
        if (currentIndex >= words.length) {
            currentIndex = 0;
        }
    }
    showWord();
    updateCounters();
}


// Функция для перехода к предыдущему слову
function previousWord() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = words.length - 1;
    }
    // Переходим к предыдущему неизученному слову
    while (words[currentIndex].learned) {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = words.length - 1;
        }
    }
    document.getElementById("englishWord").textContent = words[currentIndex].english;
    document.getElementById("translation").textContent = words[currentIndex].russian;
    updateCounters();
}

// Функция для пометки слова как изученного
function markAsLearned() {
    words[currentIndex].learned = true;
    saveLearnedWords();
    if (allWordsLearned()) {
        if (confirm("Вы изучили все слова. Хотите повторить изучение?")) {
            resetLearningStatus();
            currentIndex = 0;
            document.getElementById("englishWord").textContent = words[currentIndex].english;
            document.getElementById("translation").textContent = words[currentIndex].russian;
            updateCounters();
        }
    } else {
        nextWord();
    }
}

// Функция для проверки, все ли слова изучены
function allWordsLearned() {
    for (let word of words) {
        if (!word.learned) {
            return false;
        }
    }
    return true;
}

// Функция для сброса статуса изучения всех слов
function resetLearningStatus() {
    for (let word of words) {
        word.learned = false;
    }
    saveLearnedWords();
}

// Функция для сохранения изученных слов в localStorage
function saveLearnedWords() {
    const learnedWords = words.filter(word => word.learned).map(word => word.english);
    localStorage.setItem('learnedWords', JSON.stringify(learnedWords));
}

// При загрузке страницы отображается первое слово
document.getElementById("englishWord").textContent = words[currentIndex].english;
document.getElementById("translation").textContent = words[currentIndex].russian;
updateCounters();

// Обработчик событий клавиатуры
document.addEventListener('keydown', function (event) {
    switch (event.key) {
        case 'ArrowUp':
            showOrHideTranslation();
            break;
        case 'ArrowDown':
            markAsLearned();
            break;
        case 'ArrowLeft':
            previousWord();
            break;
        case 'ArrowRight':
            nextWord();
            break;
    }
});

function showOrHideTranslation() {
    // Получаем текущее состояние отображения перевода
    const isTranslationVisible = document.querySelector(".flashcard-inner").style.transform === "rotateY(180deg)";

    // Если перевод видим, скрываем его, иначе отображаем
    if (isTranslationVisible) {
        hideTranslation();
    } else {
        showTranslation();
    }
}

// Массив слов с переводами и статусом изучения
const wordsArr = {
    work: [
        { english: 'job', russian: 'работа' },
        { english: 'salary', russian: 'зарплата' },
        { english: 'job title', russian: 'должность' },
        { english: 'work responsibilities', russian: 'трудовые обязанности' },
        { english: 'job vacancy', russian: 'вакансия' },
        { english: 'work-life integration', russian: 'интеграция работы и личной жизни' },
        { english: 'job satisfaction survey', russian: 'опрос удовлетворенности работой' },
        { english: 'workplace safety', russian: 'безопасность на рабочем месте' },
        { english: 'job rotation', russian: 'ротация рабочих мест' },
        { english: 'workplace harassment', russian: 'харассмент на рабочем месте' },
        { english: 'job shadowing', russian: 'пробное рабочее место' },
        { english: 'workplace environment', russian: 'рабочая атмосфера' },
        { english: 'job outlook', russian: 'перспективы трудоустройства' },
        { english: 'work-life harmony', russian: 'гармония работы и личной жизни' },
        { english: 'job search strategy', russian: 'стратегия поиска работы' },
        { english: 'workplace policy', russian: 'рабочая политика' },
        { english: 'job description template', russian: 'шаблон описания работы' },
        { english: 'workplace relationships', russian: 'рабочие отношения' },
        { english: 'job rotation program', russian: 'программа ротации рабочих мест' },
        { english: 'workplace flexibility', russian: 'гибкость на рабочем месте' },
        { english: 'job application letter', russian: 'письмо с заявлением о приеме на работу' },
        { english: 'workplace productivity', russian: 'производительность на рабочем месте' },
        { english: 'job market trends', russian: 'тенденции на рынке труда' },
        { english: 'workplace integration', russian: 'интеграция на рабочем месте' },
        { english: 'job interview preparation', russian: 'подготовка к собеседованию' },
        { english: 'workplace development', russian: 'развитие на рабочем месте' },
        { english: 'job satisfaction factors', russian: 'факторы удовлетворенности работой' },
        { english: 'workplace communication', russian: 'коммуникация на рабочем месте' },
        { english: 'job requirements', russian: 'требования к работе' },
        { english: 'workplace etiquette', russian: 'этикет на рабочем месте' },
        { english: 'job search website', russian: 'сайт для поиска работы' },
        { english: 'workplace environment assessment', russian: 'оценка рабочей среды' },
        { english: 'job application form', russian: 'форма заявки на работу' },
        { english: 'workplace health', russian: 'здоровье на рабочем месте' },
        { english: 'job search tips', russian: 'советы по поиску работы' },
        { english: 'workplace technology', russian: 'технологии на рабочем месте' },
        { english: 'job application process steps', russian: 'шаги процесса подачи заявки на работу' },
        { english: 'workplace management', russian: 'управление на рабочем месте' },
        { english: 'job requirements analysis', russian: 'анализ требований к работе' },
        { english: 'workplace collaboration', russian: 'сотрудничество на рабочем месте' },
        { english: 'job market analysis', russian: 'анализ рынка труда' },
        { english: 'workplace culture survey', russian: 'опрос рабочей культуры' },
        { english: 'job search strategy development', russian: 'разработка стратегии поиска работы' },
        { english: 'workplace diversity', russian: 'разнообразие на рабочем месте' },
        { english: 'job application process timeline', russian: 'временная линия процесса подачи заявки на работу' },
        { english: 'workplace wellness', russian: 'благополучие на рабочем месте' },
        { english: 'job search networking', russian: 'сетевой поиск работы' },
        { english: 'workplace change management', russian: 'управление изменениями на рабочем месте' },
        { english: 'job application email', russian: 'письмо с заявкой на работу' },
        { english: 'workplace ethics', russian: 'этика на рабочем месте' },
        { english: 'job search strategy tips', russian: 'советы по стратегии поиска работы' },
        { english: 'workplace dynamics', russian: 'динамика на рабочем месте' },
        { english: 'job application follow up', russian: 'последующая заявка на работу' },
        { english: 'workplace ergonomics', russian: 'эргономика на рабочем месте' },
        { english: 'job search interview', russian: 'собеседование по поиску работы' },
        { english: 'workplace conflict resolution', russian: 'разрешение конфликтов на рабочем месте' },
        { english: 'job application resume', russian: 'резюме с заявкой на работу' },
        { english: 'workplace training', russian: 'обучение на рабочем месте' },
        { english: 'job search resources', russian: 'ресурсы поиска работы' },
        { english: 'workplace challenges', russian: 'вызовы на рабочем месте' },
        { english: 'job application advice', russian: 'советы по заявке на работу' },
        { english: 'workplace solutions', russian: 'решения на рабочем месте' },
        { english: 'job search support', russian: 'поддержка поиска работы' },
        { english: 'workplace sustainability', russian: 'устойчивость на рабочем месте' },
        { english: 'job application cover letter', russian: 'сопроводительное письмо к заявке на работу' },
        { english: 'workplace engagement', russian: 'вовлеченность на рабочем месте' },
        { english: 'job search strategies that work', russian: 'стратегии поиска работы, которые работают' },
        { english: 'workplace discrimination', russian: 'дискриминация на рабочем месте' },
        { english: 'job application form template', russian: 'шаблон формы заявки на работу' },
        { english: 'workplace efficiency', russian: 'эффективность на рабочем месте' },
        { english: 'job search trends', russian: 'тенденции поиска работы' },
        { english: 'workplace environment factors', russian: 'факторы рабочей среды' },
        { english: 'job application process checklist', russian: 'чеклист процесса подачи заявки на работу' },
        { english: 'workplace health promotion', russian: 'продвижение здоровья на рабочем месте' },
        { english: 'job search online', russian: 'онлайн-поиск работы' },
        { english: 'workplace happiness', russian: 'счастье на рабочем месте' },
        { english: 'job application form examples', russian: 'примеры формы заявки на работу' },
        { english: 'workplace innovation', russian: 'инновации на рабочем месте' },
        { english: 'job search websites', russian: 'веб-сайты для поиска работы' },
        { english: 'workplace stress management', russian: 'управление стрессом на рабочем месте' },
        { english: 'job application checklist', russian: 'чеклист заявки на работу' },
        { english: 'workplace resilience', russian: 'устойчивость на рабочем месте' },
        { english: 'job search tips and tricks', russian: 'советы и хитрости по поиску работы' },
        { english: 'workplace productivity tips', russian: 'советы по производительности на рабочем месте' },
        { english: 'job application success', russian: 'успех заявки на работу' },
        { english: 'workplace mentoring', russian: 'наставничество на рабочем месте' },
        { english: 'job search help', russian: 'помощь в поиске работы' },
        { english: 'workplace communication skills', russian: 'навыки общения на рабочем месте' },
        { english: 'job application sample', russian: 'образец заявки на работу' },
        { english: 'workplace respect', russian: 'уважение на рабочем месте' },
        { english: 'job search techniques', russian: 'техники поиска работы' },
        { english: 'workplace adaptability', russian: 'адаптируемость на рабочем месте' },
        { english: 'job application follow-up email', russian: 'письмо о последующей заявке на работу' },
        { english: 'workplace collaboration skills', russian: 'навыки сотрудничества на рабочем месте' },
        { english: 'job search guide', russian: 'руководство по поиску работы' },
        { english: 'workplace feedback', russian: 'обратная связь на рабочем месте' },
        { english: 'job application tips', russian: 'советы по заявке на работу' },
        { english: 'workplace success', russian: 'успех на рабочем месте' },
        { english: 'job search networking tips', russian: 'советы по сетевому поиску работы' },
        { english: 'workplace performance', russian: 'производительность на рабочем месте' },
        { english: 'job application process steps', russian: 'шаги процесса подачи заявки на работу' },
        { english: 'workplace relations', russian: 'отношения на рабочем месте' },
        { english: 'job search advice', russian: 'советы по поиску работы' },
        { english: 'workplace readiness', russian: 'готовность к рабочему месту' },
        { english: 'job application guide', russian: 'руководство по подаче заявки на работу' },
        { english: 'workplace cooperation', russian: 'сотрудничество на рабочем месте' },
        { english: 'job search engines', russian: 'поисковые системы для поиска работы' },
        { english: 'workplace motivation', russian: 'мотивация на рабочем месте' },
        { english: 'job application strategies', russian: 'стратегии подачи заявок на работу' },
        { english: 'workplace inclusivity', russian: 'инклюзивность на рабочем месте' },
        { english: 'job search websites and apps', russian: 'веб-сайты и приложения для поиска работы' },
        { english: 'workplace organization', russian: 'организация рабочего места' },
        { english: 'job application documents', russian: 'документы для подачи заявки на работу' },
        { english: 'workplace professionalism', russian: 'профессионализм на рабочем месте' },
        { english: 'job search support services', russian: 'услуги поддержки поиска работы' },
        { english: 'workplace equality', russian: 'равенство на рабочем месте' },
        { english: 'job application procedure', russian: 'процедура подачи заявки на работу' },
        { english: 'workplace positivity', russian: 'позитив на рабочем месте' },
        { english: 'job search skills', russian: 'навыки поиска работы' },
        { english: 'workplace leadership', russian: 'лидерство на рабочем месте' },
        { english: 'job application process guide', russian: 'руководство по процессу подачи заявки на работу' },
        { english: 'workplace initiatives', russian: 'инициативы на рабочем месте' },
        { english: 'job search engine optimization', russian: 'оптимизация поисковой системы для поиска работы' },
        { english: 'workplace safety standards', russian: 'стандарты безопасности на рабочем месте' },
        { english: 'job application process tips', russian: 'советы по процессу подачи заявки на работу' },
        { english: 'workplace diversity initiatives', russian: 'инициативы по разнообразию на рабочем месте' },
        { english: 'job search engine tips', russian: 'советы по поисковой системе для поиска работы' },
        { english: 'workplace improvement', russian: 'улучшение рабочего места' },
        { english: 'job application tracking', russian: 'отслеживание подачи заявок на работу' },
        { english: 'workplace mentorship programs', russian: 'программы наставничества на рабочем месте' },
        { english: 'job search platform', russian: 'платформа для поиска работы' },
        { english: 'workplace learning', russian: 'обучение на рабочем месте' },
        { english: 'job application follow-up', russian: 'последующая заявка на работу' },
        { english: 'workplace efficiency improvement', russian: 'повышение эффективности на рабочем месте' },
        { english: 'job search and application', russian: 'поиск работы и подача заявок' },
        { english: 'workplace support', russian: 'поддержка на рабочем месте' },
        { english: 'job application and interview', russian: 'заявка на работу и собеседование' },
        { english: 'workplace tools', russian: 'инструменты для рабочего места' },
        { english: 'job search and networking', russian: 'поиск работы и налаживание контактов' },
        { english: 'workplace flexibility benefits', russian: 'преимущества гибкости на рабочем месте' },
        { english: 'job application steps', russian: 'шаги подачи заявки на работу' },
        { english: 'workplace wellness programs', russian: 'программы благополучия на рабочем месте' },
        { english: 'job search and application process', russian: 'процесс поиска работы и подачи заявок' },
        { english: 'workplace benefits', russian: 'преимущества рабочего места' },
        { english: 'job application tracking system', russian: 'система отслеживания заявок на работу' },
        { english: 'workplace satisfaction', russian: 'удовлетворенность рабочим местом' },
        { english: 'job search advice and tips', russian: 'советы и рекомендации по поиску работы' },
        { english: 'workplace development programs', russian: 'программы развития рабочего места' },
        { english: 'job application guidelines', russian: 'руководства по подаче заявок на работу' },
        { english: 'workplace respect initiatives', russian: 'инициативы по уважению на рабочем месте' },
        { english: 'job search and career advice', russian: 'советы по поиску работы и карьере' },
        { english: 'workplace improvement plans', russian: 'планы улучшения рабочего места' },
        { english: 'job application checklist and tips', russian: 'чеклист и советы по подаче заявок на работу' },
        { english: 'workplace satisfaction survey', russian: 'опрос удовлетворенности рабочим местом' },
        { english: 'job search platforms', russian: 'платформы для поиска работы' },
        { english: 'workplace diversity and inclusion', russian: 'разнообразие и инклюзивность на рабочем месте' },
        { english: 'job application process steps and tips', russian: 'шаги и советы по процессу подачи заявок на работу' },
        { english: 'workplace engagement programs', russian: 'программы вовлеченности на рабочем месте' },
        { english: 'job search resources and tools', russian: 'ресурсы и инструменты для поиска работы' },
        { english: 'workplace satisfaction and engagement', russian: 'удовлетворенность и вовлеченность на рабочем месте' },
        { english: 'job search tips and advice', russian: 'советы и рекомендации по поиску работы' },
        { english: 'workplace development initiatives', russian: 'инициативы по развитию рабочего места' },
        { english: 'job application tracking tools', russian: 'инструменты отслеживания заявок на работу' },
        { english: 'workplace improvement strategies', russian: 'стратегии улучшения рабочего места' },
        { english: 'job search and application tips', russian: 'советы по поиску работы и подаче заявок' },
        { english: 'workplace satisfaction and productivity', russian: 'удовлетворенность и производительность на рабочем месте' },
        { english: 'job application and interview tips', russian: 'советы по заявке на работу и собеседованию' },
        { english: 'workplace support programs', russian: 'программы поддержки на рабочем месте' },
        { english: 'job search tools and resources', russian: 'инструменты и ресурсы для поиска работы' },
        { english: 'workplace flexibility strategies', russian: 'стратегии гибкости на рабочем месте' },
        { english: 'job application and resume tips', russian: 'советы по заявке на работу и резюме' },
        { english: 'workplace efficiency strategies', russian: 'стратегии повышения эффективности на рабочем месте' },
        { english: 'job search and career resources', russian: 'ресурсы для поиска работы и карьеры' },
        { english: 'workplace support and development', russian: 'поддержка и развитие на рабочем месте' },
        { english: 'job application and cover letter tips', russian: 'советы по заявке на работу и сопроводительному письму' },
        { english: 'workplace flexibility and adaptability', russian: 'гибкость и адаптируемость на рабочем месте' },
        { english: 'job search and networking strategies', russian: 'стратегии поиска работы и налаживания контактов' },
        { english: 'workplace success and satisfaction', russian: 'успех и удовлетворенность на рабочем месте' },
        { english: 'job application and process', russian: 'подача заявок на работу и процесс' },
        { english: 'workplace health and wellness', russian: 'здоровье и благополучие на рабочем месте' },
        { english: 'job search strategies and tools', russian: 'стратегии и инструменты для поиска работы' },
        { english: 'workplace engagement and satisfaction', russian: 'вовлеченность и удовлетворенность на рабочем месте' },
        { english: 'job application follow-up process', russian: 'процесс последующей подачи заявок на работу' },
        { english: 'workplace support and initiatives', russian: 'поддержка и инициативы на рабочем месте' },
        { english: 'job search tips and resources', russian: 'советы и ресурсы по поиску работы' },
        { english: 'workplace success and productivity', russian: 'успех и производительность на рабочем месте' },
        { english: 'job application process and tips', russian: 'процесс подачи заявок на работу и советы' },
        { english: 'workplace satisfaction and engagement initiatives', russian: 'инициативы по удовлетворенности и вовлеченности на рабочем месте' },
        { english: 'job search and application process', russian: 'процесс поиска работы и подачи заявок' },
        { english: 'workplace support and success', russian: 'поддержка и успех на рабочем месте' },
        { english: 'job application tracking and follow-up', russian: 'отслеживание и последующая подача заявок на работу' },
        { english: 'workplace development and training', russian: 'развитие и обучение на рабочем месте' },
        { english: 'job search and networking tips and tricks', russian: 'советы и хитрости по поиску работы и налаживанию контактов' },
        { english: 'workplace success and development', russian: 'успех и развитие на рабочем месте' },
        { english: 'job application and resume writing tips', russian: 'советы по подаче заявок на работу и написанию резюме' },
        { english: 'workplace productivity and success', russian: 'производительность и успех на рабочем месте' },
        { english: 'job search and application strategies', russian: 'стратегии поиска работы и подачи заявок' },
        { english: 'workplace engagement and productivity', russian: 'вовлеченность и производительность на рабочем месте' },
        { english: 'job application tracking and process', russian: 'отслеживание и процесс подачи заявок на работу' },
        { english: 'workplace training and development', russian: 'обучение и развитие на рабочем месте' },
        { english: 'job search tips and networking', russian: 'советы по поиску работы и налаживанию контактов' },
        { english: 'workplace success and support', russian: 'успех и поддержка на рабочем месте' },
        { english: 'job application and follow-up tips', russian: 'советы по заявке на работу и последующей подаче' },
        { english: 'workplace development and improvement', russian: 'развитие и улучшение на рабочем месте' },
        { english: 'job search and networking resources', russian: 'ресурсы для поиска работы и налаживания контактов' },
        { english: 'workplace success and satisfaction tips', russian: 'советы по успеху и удовлетворенности на рабочем месте' },
        { english: 'job application process and follow-up tips', russian: 'советы по процессу подачи заявок на работу и последующей подаче' },
        { english: 'workplace satisfaction and development', russian: 'удовлетворенность и развитие на рабочем месте' },
        { english: 'job search and networking advice', russian: 'советы по поиску работы и налаживанию контактов' },
        { english: 'workplace support and engagement', russian: 'поддержка и вовлеченность на рабочем месте' },
        { english: 'job application tracking and tips', russian: 'советы по отслеживанию и подаче заявок на работу' },
        { english: 'workplace development and engagement', russian: 'развитие и вовлеченность на рабочем месте' },
        { english: 'job search and application guide', russian: 'руководство по поиску работы и подаче заявок' },
        { english: 'workplace success and development strategies', russian: 'стратегии успеха и развития на рабочем месте' },
        { english: 'job application process and tracking', russian: 'процесс подачи заявок на работу и отслеживание' },
        { english: 'workplace engagement and support', russian: 'вовлеченность и поддержка на рабочем месте' },
        { english: 'job search tips and strategies', russian: 'советы и стратегии по поиску работы' },
        { english: 'workplace success and productivity tips', russian: 'советы по успеху и производительности на рабочем месте' },
        { english: 'job application and tracking tips', russian: 'советы по подаче заявок на работу и отслеживанию' },
        { english: 'workplace development and success', russian: 'развитие и успех на рабочем месте' },
        { english: 'job search and networking tools', russian: 'инструменты для поиска работы и налаживания контактов' },
        { english: 'workplace satisfaction and productivity strategies', russian: 'стратегии удовлетворенности и производительности на рабочем месте' },
        { english: 'job application tips and advice', russian: 'советы и рекомендации по подаче заявок на работу' },
        { english: 'workplace support and development initiatives', russian: 'инициативы по поддержке и развитию на рабочем месте' },
        { english: 'job search strategies and resources', russian: 'стратегии и ресурсы для поиска работы' },
        { english: 'workplace success and engagement', russian: 'успех и вовлеченность на рабочем месте' },
        { english: 'job application and interview tips and tricks', russian: 'советы и хитрости по заявке на работу и собеседованию' },
        { english: 'workplace development and success tips', russian: 'советы по развитию и успеху на рабочем месте' },
        { english: 'job search and networking strategies and tips', russian: 'стратегии и советы по поиску работы и налаживанию контактов' },
        { english: 'workplace satisfaction and engagement programs', russian: 'программы удовлетворенности и вовлеченности на рабочем месте' },
        { english: 'job application process and follow-up strategies', russian: 'стратегии процесса подачи заявок на работу и последующей подачи' },
        { english: 'workplace support and success tips', russian: 'советы по поддержке и успеху на рабочем месте' },
        { english: 'job search and application tips and tricks', russian: 'советы и хитрости по поиску работы и подаче заявок' },
        { english: 'workplace development and engagement initiatives', russian: 'инициативы по развитию и вовлеченности на рабочем месте' },
        { english: 'job application and resume tips and tricks', russian: 'советы и хитрости по заявке на работу и написанию резюме' },
        { english: 'workplace productivity and development strategies', russian: 'стратегии повышения производительности и развития на рабочем месте' },
        { english: 'job search and application advice and tips', russian: 'советы и рекомендации по поиску работы и подаче заявок' },
        { english: 'workplace support and development strategies', russian: 'стратегии поддержки и развития на рабочем месте' },
        { english: 'job application and interview strategies and tips', russian: 'стратегии и советы по заявке на работу и собеседованию' },
        { english: 'workplace success and engagement strategies', russian: 'стратегии успеха и вовлеченности на рабочем месте' },
        { english: 'job search and networking strategies and resources', russian: 'стратегии и ресурсы для поиска работы и налаживания контактов' },
        // Добавьте больше слов для этой категории
    ],
    animals: [
        { english: 'cat', russian: 'кот' },
        { english: 'dog', russian: 'собака' },
        { english: 'horse', russian: 'лошадь' },
        { english: 'cow', russian: 'корова' },
        { english: 'sheep', russian: 'овца' },
        { english: 'goat', russian: 'коза' },
        { english: 'chicken', russian: 'курица' },
        { english: 'pig', russian: 'свинья' },
        { english: 'duck', russian: 'утка' },
        { english: 'rabbit', russian: 'кролик' },
        { english: 'elephant', russian: 'слон' },
        { english: 'tiger', russian: 'тигр' },
        { english: 'lion', russian: 'лев' },
        { english: 'bear', russian: 'медведь' },
        { english: 'wolf', russian: 'волк' },
        { english: 'fox', russian: 'лиса' },
        { english: 'deer', russian: 'олень' },
        { english: 'mouse', russian: 'мышь' },
        { english: 'rat', russian: 'крыса' },
        { english: 'squirrel', russian: 'белка' },
        { english: 'hedgehog', russian: 'ёж' },
        { english: 'frog', russian: 'лягушка' },
        { english: 'sparrow', russian: 'воробей' },
        { english: 'eagle', russian: 'орёл' },
        { english: 'owl', russian: 'сова' },
        { english: 'pigeon', russian: 'голубь' },
        { english: 'crow', russian: 'ворона' },
        { english: 'parrot', russian: 'попугай' },
        { english: 'swan', russian: 'лебедь' },
        { english: 'peacock', russian: 'павлин' },
        { english: 'penguin', russian: 'пингвин' },
        { english: 'flamingo', russian: 'фламинго' },
        { english: 'salmon', russian: 'лосось' },
        { english: 'trout', russian: 'форель' },
        { english: 'tuna', russian: 'тунец' },
        { english: 'shark', russian: 'акула' },
        { english: 'goldfish', russian: 'золотая рыбка' },
        { english: 'carp', russian: 'карп' },
        { english: 'herring', russian: 'сельдь' },
        { english: 'cod', russian: 'треска' },
        { english: 'mackerel', russian: 'скумбрия' },
        { english: 'catfish', russian: 'сом' },
        { english: 'ant', russian: 'муравей' },
        { english: 'bee', russian: 'пчела' },
        { english: 'butterfly', russian: 'бабочка' },
        { english: 'mosquito', russian: 'комар' },
        { english: 'fly', russian: 'муха' },
        { english: 'beetle', russian: 'жук' },
        { english: 'dragonfly', russian: 'стрекоза' },
        { english: 'grasshopper', russian: 'кузнечик' },
        { english: 'spider', russian: 'паук' },
        { english: 'wasp', russian: 'оса' },
        { english: 'snake', russian: 'змея' },
        { english: 'lizard', russian: 'ящерица' },
        { english: 'crocodile', russian: 'крокодил' },
        { english: 'turtle', russian: 'черепаха' },
        { english: 'chameleon', russian: 'хамелеон' },
        { english: 'gecko', russian: 'геккон' },
        { english: 'iguana', russian: 'игуана' },
        { english: 'alligator', russian: 'аллигатор' },
        { english: 'python', russian: 'питон' },
        { english: 'cobra', russian: 'кобра' },
        { english: 'octopus', russian: 'осьминог' },
        { english: 'jellyfish', russian: 'медуза' },
        { english: 'crab', russian: 'краб' },
        { english: 'lobster', russian: 'омар' },
        { english: 'shrimp', russian: 'креветка' },
        { english: 'starfish', russian: 'морская звезда' },
        { english: 'seahorse', russian: 'морской конёк' },
        { english: 'whale', russian: 'кит' },
        { english: 'dolphin', russian: 'дельфин' },
        { english: 'seal', russian: 'тюлень' }
        // Добавьте больше слов для этой категории
    ],
    colors: [
        { english: 'red', russian: 'красный' },
        { english: 'blue', russian: 'синий' },
        { english: 'green', russian: 'зелёный' },
        { english: 'yellow', russian: 'жёлтый' },
        { english: 'black', russian: 'чёрный' },
        { english: 'white', russian: 'белый' },
        { english: 'orange', russian: 'оранжевый' },
        { english: 'pink', russian: 'розовый' },
        { english: 'purple', russian: 'фиолетовый' },
        { english: 'brown', russian: 'коричневый' },
        { english: 'gold', russian: 'золотой' },
        { english: 'silver', russian: 'серебряный' },
        { english: 'bronze', russian: 'бронзовый' },
        { english: 'amber', russian: 'янтарный' },
        { english: 'ivory', russian: 'слоновая кость' },
        { english: 'olive', russian: 'оливковый' },
        { english: 'coral', russian: 'коралловый' },
        { english: 'peach', russian: 'персиковый' },
        { english: 'sapphire', russian: 'сапфировый' },
        { english: 'emerald', russian: 'изумрудный' },
        { english: 'cherry', russian: 'вишнёвый' },
        { english: 'lime', russian: 'лаймовый' },
        { english: 'lemon', russian: 'лимонный' },
        { english: 'mint', russian: 'мятный' },
        { english: 'chocolate', russian: 'шоколадный' },
        { english: 'caramel', russian: 'карамельный' },
        { english: 'grape', russian: 'виноградный' },
        { english: 'peanut', russian: 'арахисовый' },
        { english: 'coffee', russian: 'кофейный' },
        { english: 'berry', russian: 'ягодный' },
        { english: 'ruby', russian: 'рубиновый' },
        { english: 'jade', russian: 'нефритовый' },
        { english: 'topaz', russian: 'топаз' },
        { english: 'amethyst', russian: 'аметист' },
        { english: 'turquoise', russian: 'бирюза' },
        { english: 'garnet', russian: 'гранат' },
        { english: 'opal', russian: 'опал' },
        { english: 'aquamarine', russian: 'аквамарин' },
        { english: 'pearl', russian: 'жемчужный' },
        { english: 'diamond', russian: 'бриллиант' },
        { english: 'rose', russian: 'розовый' },
        { english: 'violet', russian: 'фиолетовый' },
        { english: 'lilac', russian: 'сиреневый' },
        { english: 'lavender', russian: 'лавандовый' },
        { english: 'daisy', russian: 'ромашковый' },
        { english: 'tulip', russian: 'тюльпановый' },
        { english: 'sunflower', russian: 'подсолнечный' },
        { english: 'poppy', russian: 'маковый' },
        { english: 'orchid', russian: 'орхидея' },
        { english: 'hyacinth', russian: 'гиацинтовый' },
        { english: 'tan', russian: 'загар' },
        { english: 'beige', russian: 'бежевый' },
        { english: 'khaki', russian: 'хаки' },
        { english: 'fuchsia', russian: 'фуксия' },
        { english: 'cyan', russian: 'циан' },
        { english: 'magenta', russian: 'маджента' },
        { english: 'teal', russian: 'бирюзовый' },
        { english: 'indigo', russian: 'индиго' },
        { english: 'navy', russian: 'тёмно-синий' },
        { english: 'maroon', russian: 'бордовый' }
        // Добавьте больше слов для этой категории
    ],
    verbs: [
        { english: 'run', russian: 'бежать' },
        { english: 'jump', russian: 'прыгать' },
        { english: 'eat', russian: 'есть' },
        { english: 'drink', russian: 'пить' },
        { english: 'sleep', russian: 'спать' },
        { english: 'read', russian: 'читать' },
        { english: 'write', russian: 'писать' },
        { english: 'speak', russian: 'говорить' },
        { english: 'listen', russian: 'слушать' },
        { english: 'see', russian: 'видеть' },
        { english: 'walk', russian: 'идти' },
        { english: 'sit', russian: 'сидеть' },
        { english: 'stand', russian: 'стоять' },
        { english: 'work', russian: 'работать' },
        { english: 'play', russian: 'играть' },
        { english: 'sing', russian: 'петь' },
        { english: 'dance', russian: 'танцевать' },
        { english: 'laugh', russian: 'смеяться' },
        { english: 'cry', russian: 'плакать' },
        { english: 'cook', russian: 'готовить' },
        { english: 'clean', russian: 'убирать' },
        { english: 'drive', russian: 'водить' },
        { english: 'fly', russian: 'летать' },
        { english: 'swim', russian: 'плавать' },
        { english: 'think', russian: 'думать' },
        { english: 'know', russian: 'знать' },
        { english: 'understand', russian: 'понимать' },
        { english: 'remember', russian: 'помнить' },
        { english: 'forget', russian: 'забывать' },
        { english: 'love', russian: 'любить' },
        { english: 'hate', russian: 'ненавидеть' },
        { english: 'buy', russian: 'покупать' },
        { english: 'sell', russian: 'продавать' },
        { english: 'give', russian: 'давать' },
        { english: 'take', russian: 'брать' },
        { english: 'help', russian: 'помогать' },
        { english: 'find', russian: 'находить' },
        { english: 'lose', russian: 'терять' },
        { english: 'open', russian: 'открывать' },
        { english: 'close', russian: 'закрывать' },
        { english: 'call', russian: 'звонить' },
        { english: 'answer', russian: 'отвечать' },
        { english: 'wait', russian: 'ждать' },
        { english: 'show', russian: 'показывать' },
        { english: 'build', russian: 'строить' },
        { english: 'break', russian: 'ломать' },
        { english: 'create', russian: 'создавать' },
        { english: 'destroy', russian: 'уничтожать' },
        { english: 'begin', russian: 'начинать' },
        { english: 'finish', russian: 'заканчивать' },
        { english: 'enjoy', russian: 'наслаждаться' },
        { english: 'hope', russian: 'надеяться' },
        { english: 'wish', russian: 'желать' },
        { english: 'promise', russian: 'обещать' },
        { english: 'decide', russian: 'решать' }
    ],
    irregular_verbs: [
        { english: 'be, was/were, been', russian: 'быть' },
        { english: 'become, became, become', russian: 'становиться' },
        { english: 'begin, began, begun', russian: 'начинать' },
        { english: 'break, broke, broken', russian: 'ломать' },
        { english: 'bring, brought, brought', russian: 'приносить' },
        { english: 'build, built, built', russian: 'строить' },
        { english: 'buy, bought, bought', russian: 'покупать' },
        { english: 'catch, caught, caught', russian: 'ловить' },
        { english: 'choose, chose, chosen', russian: 'выбирать' },
        { english: 'come, came, come', russian: 'приходить' },
        { english: 'cost, cost, cost', russian: 'стоить' },
        { english: 'cut, cut, cut', russian: 'резать' },
        { english: 'do, did, done', russian: 'делать' },
        { english: 'draw, drew, drawn', russian: 'рисовать' },
        { english: 'drink, drank, drunk', russian: 'пить' },
        { english: 'drive, drove, driven', russian: 'водить' },
        { english: 'eat, ate, eaten', russian: 'есть' },
        { english: 'fall, fell, fallen', russian: 'падать' },
        { english: 'feel, felt, felt', russian: 'чувствовать' },
        { english: 'find, found, found', russian: 'находить' },
        { english: 'fly, flew, flown', russian: 'летать' },
        { english: 'forget, forgot, forgotten', russian: 'забывать' },
        { english: 'get, got, gotten', russian: 'получать' },
        { english: 'give, gave, given', russian: 'давать' },
        { english: 'go, went, gone', russian: 'идти' },
        { english: 'grow, grew, grown', russian: 'расти' },
        { english: 'have, had, had', russian: 'иметь' },
        { english: 'hear, heard, heard', russian: 'слышать' },
        { english: 'know, knew, known', russian: 'знать' },
        { english: 'leave, left, left', russian: 'уходить' },
        { english: 'lose, lost, lost', russian: 'терять' },
        { english: 'make, made, made', russian: 'делать' },
        { english: 'meet, met, met', russian: 'встречать' },
        { english: 'pay, paid, paid', russian: 'платить' },
        { english: 'read, read, read', russian: 'читать' },
        { english: 'ride, rode, ridden', russian: 'ехать' },
        { english: 'run, ran, run', russian: 'бежать' },
        { english: 'say, said, said', russian: 'сказать' },
        { english: 'see, saw, seen', russian: 'видеть' },
        { english: 'sell, sold, sold', russian: 'продавать' },
        { english: 'send, sent, sent', russian: 'отправлять' },
        { english: 'sit, sat, sat', russian: 'сидеть' },
        { english: 'sleep, slept, slept', russian: 'спать' },
        { english: 'speak, spoke, spoken', russian: 'говорить' },
        { english: 'spend, spent, spent', russian: 'тратить' },
        { english: 'stand, stood, stood', russian: 'стоять' },
        { english: 'take, took, taken', russian: 'брать' },
        { english: 'teach, taught, taught', russian: 'учить' },
        { english: 'tell, told, told', russian: 'рассказывать' },
        { english: 'think, thought, thought', russian: 'думать' },
        { english: 'understand, understood, understood', russian: 'понимать' },
        { english: 'wear, wore, worn', russian: 'носить' },
        { english: 'write, wrote, written', russian: 'писать' }
    ],
    food_and_drinks: [
        { english: 'apple', russian: 'яблоко' },
        { english: 'banana', russian: 'банан' },
        { english: 'orange', russian: 'апельсин' },
        { english: 'grape', russian: 'виноград' },
        { english: 'strawberry', russian: 'клубника' },
        { english: 'blueberry', russian: 'голубика' },
        { english: 'raspberry', russian: 'малина' },
        { english: 'watermelon', russian: 'арбуз' },
        { english: 'melon', russian: 'дыня' },
        { english: 'pineapple', russian: 'ананас' },
        { english: 'pear', russian: 'груша' },
        { english: 'peach', russian: 'персик' },
        { english: 'plum', russian: 'слива' },
        { english: 'cherry', russian: 'вишня' },
        { english: 'lemon', russian: 'лимон' },
        { english: 'lime', russian: 'лайм' },
        { english: 'mango', russian: 'манго' },
        { english: 'kiwi', russian: 'киви' },
        { english: 'coconut', russian: 'кокос' },
        { english: 'avocado', russian: 'авокадо' },
        { english: 'potato', russian: 'картофель' },
        { english: 'tomato', russian: 'помидор' },
        { english: 'cucumber', russian: 'огурец' },
        { english: 'carrot', russian: 'морковь' },
        { english: 'onion', russian: 'лук' },
        { english: 'garlic', russian: 'чеснок' },
        { english: 'lettuce', russian: 'салат' },
        { english: 'spinach', russian: 'шпинат' },
        { english: 'broccoli', russian: 'брокколи' },
        { english: 'cauliflower', russian: 'цветная капуста' },
        { english: 'pea', russian: 'горох' },
        { english: 'bean', russian: 'боб' },
        { english: 'corn', russian: 'кукуруза' },
        { english: 'eggplant', russian: 'баклажан' },
        { english: 'pepper', russian: 'перец' },
        { english: 'pumpkin', russian: 'тыква' },
        { english: 'zucchini', russian: 'цуккини' },
        { english: 'mushroom', russian: 'гриб' },
        { english: 'beef', russian: 'говядина' },
        { english: 'pork', russian: 'свинина' },
        { english: 'chicken', russian: 'курица' },
        { english: 'fish', russian: 'рыба' },
        { english: 'shrimp', russian: 'креветка' },
        { english: 'crab', russian: 'краб' },
        { english: 'lobster', russian: 'омар' },
        { english: 'rice', russian: 'рис' },
        { english: 'pasta', russian: 'паста' },
        { english: 'bread', russian: 'хлеб' },
        { english: 'butter', russian: 'масло' },
        { english: 'cheese', russian: 'сыр' },
        { english: 'milk', russian: 'молоко' },
        { english: 'yogurt', russian: 'йогурт' },
        { english: 'ice cream', russian: 'мороженое' },
        { english: 'cake', russian: 'торт' },
        { english: 'cookie', russian: 'печенье' },
        { english: 'chocolate', russian: 'шоколад' },
        { english: 'coffee', russian: 'кофе' },
        { english: 'tea', russian: 'чай' },
        { english: 'juice', russian: 'сок' },
        { english: 'wine', russian: 'вино' },
        { english: 'beer', russian: 'пиво' },
        { english: 'cocktail', russian: 'коктейль' },
        { english: 'soup', russian: 'суп' },
        { english: 'salad', russian: 'салат' },
        { english: 'sandwich', russian: 'бутерброд' },
        { english: 'pizza', russian: 'пицца' },
        { english: 'hamburger', russian: 'гамбургер' },
        { english: 'fries', russian: 'картофель фри' },
        { english: 'sushi', russian: 'суши' },
        { english: 'taco', russian: 'тако' },
        { english: 'burrito', russian: 'буррито' },
        { english: 'pancake', russian: 'блин' },
        { english: 'waffle', russian: 'вафля' }
    ],
    transport: [
        { english: 'car', russian: 'автомобиль' },
        { english: 'bus', russian: 'автобус' },
        { english: 'train', russian: 'поезд' },
        { english: 'bike', russian: 'велосипед' },
        { english: 'motorcycle', russian: 'мотоцикл' },
        { english: 'truck', russian: 'грузовик' },
        { english: 'plane', russian: 'самолет' },
        { english: 'helicopter', russian: 'вертолет' },
        { english: 'ship', russian: 'корабль' },
        { english: 'boat', russian: 'лодка' },
        { english: 'subway', russian: 'метро' },
        { english: 'taxi', russian: 'такси' },
        { english: 'scooter', russian: 'скутер' },
        { english: 'tram', russian: 'трамвай' },
        { english: 'ferry', russian: 'паром' },
        { english: 'van', russian: 'фургон' },
        { english: 'yacht', russian: 'яхта' },
        { english: 'bicycle', russian: 'велосипед' },
        { english: 'jet', russian: 'реактивный самолет' },
        { english: 'limousine', russian: 'лимузин' },
        { english: 'cruise ship', russian: 'круизный лайнер' },
        { english: 'skateboard', russian: 'скейтборд' },
        { english: 'hot air balloon', russian: 'воздушный шар' },
        { english: 'trolleybus', russian: 'троллейбус' },
        { english: 'motorboat', russian: 'моторная лодка' },
        { english: 'jet ski', russian: 'гидроцикл' },
        { english: 'segway', russian: 'сегвей' },
        { english: 'rocket', russian: 'ракета' },
        { english: 'hovercraft', russian: 'судно на воздушной подушке' },
        { english: 'bobsled', russian: 'бобслей' },
        { english: 'gondola', russian: 'гондола' },
        { english: 'cable car', russian: 'канатная дорога' },
        { english: 'snowmobile', russian: 'снегоход' },
        { english: 'tractor', russian: 'трактор' },
        { english: 'bulldozer', russian: 'бульдозер' },
        { english: 'ambulance', russian: 'скорая помощь' },
        { english: 'fire truck', russian: 'пожарная машина' },
        { english: 'police car', russian: 'полицейская машина' },
        { english: 'lifeboat', russian: 'спасательная лодка' },
        { english: 'zeppelin', russian: 'цеппелин' },
        { english: 'golf cart', russian: 'гольфкарт' },
        { english: 'sailboat', russian: 'парусная лодка' },
        { english: 'bullock cart', russian: 'вьючная повозка' },
        { english: 'rickshaw', russian: 'рюкзак' },
        { english: 'kayak', russian: 'каяк' },
        { english: 'catamaran', russian: 'катамаран' },
        { english: 'monorail', russian: 'монорельс' },
        { english: 'tow truck', russian: 'эвакуатор' },
        { english: 'tractor-trailer', russian: 'седельный тягач' },
        { english: 'horse-drawn carriage', russian: 'конная повозка' },
        { english: 'bicycle rickshaw', russian: 'велорикша' },
        { english: 'hydrofoil', russian: 'гидрофойл' },
        { english: 'electric scooter', russian: 'электросамокат' },
        { english: 'airship', russian: 'дирижабль' },
        { english: 'roller skates', russian: 'роликовые коньки' },
        { english: 'tractor unit', russian: 'тягач' },
        { english: 'forklift', russian: 'погрузчик' },
        { english: 'amphibious vehicle', russian: 'амфибия' },
        { english: 'hoverboard', russian: 'ховерборд' },
        { english: 'motorized wheelchair', russian: 'моторизованное инвалидное кресло' },
        { english: 'sidecar', russian: 'боковая коляска' },
        { english: 'unicycle', russian: 'одноколесный велосипед' },
        { english: 'go-kart', russian: 'го-карт' },
        { english: 'hansom cab', russian: 'кабриолет' },
        { english: 'velocipede', russian: 'велоципед' },
        { english: 'segway', russian: 'сегвей' },
        { english: 'horse and buggy', russian: 'лошадь и карета' },
        { english: 'atv', russian: 'квадроцикл' }
    ],


};

let words = [];
let currentIndex = 0;
let currentLanguage = 'ru';

// Функция для смены языка интерфейса
function changeLanguage() {
    currentLanguage = document.getElementById('languageSelect').value;
    document.getElementById('remainingWords').textContent = currentLanguage === 'ru' ? 'Оставшиеся слова: 0' : 'Remaining words: 0';
    document.getElementById('learnedWords').textContent = currentLanguage === 'ru' ? 'Изученные слова: 0' : 'Learned words: 0';
    document.querySelector('button[onclick="previousWord()"]').textContent = currentLanguage === 'ru' ? 'Предыдущее слово' : 'Previous Word';
    document.querySelector('button[onclick="showTranslation()"]').textContent = currentLanguage === 'ru' ? 'Показать перевод' : 'Show Translation';
    document.querySelector('button[onclick="hideTranslation()"]').textContent = currentLanguage === 'ru' ? 'Скрыть перевод' : 'Hide Translation';
    document.querySelector('button[onclick="nextWord()"]').textContent = currentLanguage === 'ru' ? 'Следующее слово' : 'Next Word';
    document.querySelector('button[onclick="markAsLearned()"]').textContent = currentLanguage === 'ru' ? 'Отметить как изученное' : 'Mark as Learned';
    document.getElementById('startLearningBtn').textContent = currentLanguage === 'ru' ? 'Начать изучение' : 'Start Learning';
    document.getElementById('englishWord').textContent = currentLanguage === 'ru' ? 'Английское слово' : 'English Word';
    document.getElementById('translation').textContent = currentLanguage === 'ru' ? 'Перевод слова' : 'Translation';

    const categorySelect = document.getElementById('categorySelect');
    const options = categorySelect.options;
    options[0].textContent = currentLanguage === 'ru' ? 'Слова о работе' : 'Words about work';
    options[1].textContent = currentLanguage === 'ru' ? 'Слова о животных' : 'Words about animals';
    options[2].textContent = currentLanguage === 'ru' ? 'Цвета' : 'Colors';
    options[3].textContent = currentLanguage === 'ru' ? 'Основные глаголы' : 'Basic verbs';
    options[4].textContent = currentLanguage === 'ru' ? 'Неправильные глаголы' : 'irregular verbs';
    options[5].textContent = currentLanguage === 'ru' ? 'Еда и напитки' : 'Food and drinks';
    options[6].textContent = currentLanguage === 'ru' ? 'Транспорт' : 'Transport';
}

// Функция для начала изучения слов
function startLearning() {
    const selectedCategory = document.getElementById('categorySelect').value;
    words = wordsArr[selectedCategory].map(word => ({ ...word, learned: false }));
    currentIndex = 0;

    // Восстанавливаем состояние изученных слов из localStorage
    const storedLearnedWords = JSON.parse(localStorage.getItem('learnedWords')) || [];
    words = words.map(word => ({
        ...word,
        learned: storedLearnedWords.includes(word.english)
    }));

    document.getElementById('englishWord').textContent = words[currentIndex].english;
    document.getElementById('translation').textContent = words[currentIndex].russian;
    updateCounters();
}

function updateCounters() {
    const remainingWords = words.filter(word => !word.learned).length;
    const learnedWords = words.filter(word => word.learned).length;
    document.getElementById('remainingWords').textContent = currentLanguage === 'ru' ? `Оставшиеся слова: ${remainingWords}` : `Remaining words: ${remainingWords}`;
    document.getElementById('learnedWords').textContent = currentLanguage === 'ru' ? `Изученные слова: ${learnedWords}` : `Learned words: ${learnedWords}`;
}

// // Функция для удаления повторяющихся элементов из массива по ключу
// function removeDuplicatesByKey(array, key) {
//     return array.filter((item, index, self) =>
//         index === self.findIndex(obj => obj[key] === item[key])
//     );
// }

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
                document.getElementById("englishWord").textContent = words[currentIndex].english;
                document.getElementById("translation").textContent = words[currentIndex].russian;
            }
        }
    }
    // Переходим к следующему неизученному слову
    while (words[currentIndex].learned) {
        currentIndex++;
        if (currentIndex >= words.length) {
            currentIndex = 0;
        }
    }
    document.getElementById("englishWord").textContent = words[currentIndex].english;
    document.getElementById("translation").textContent = words[currentIndex].russian;
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
document.addEventListener('keydown', function(event) {
    switch(event.key) {
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

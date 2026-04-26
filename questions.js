window.questionBank = [
  {
    "id": 1,
    "difficulty": "easy",
    "time": 30,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "a = \"42\"\nprint(type(a))",
    "options": {
      "A": "<class 'str'>",
      "B": "<class 'int'>",
      "C": "<class 'float'>",
      "D": "<class 'list'>"
    },
    "correct": "A",
    "explanation": "Dəyişən sətir kimi verildiyi üçün type() nəticəsi <class 'str'> olur."
  },
  {
    "id": 2,
    "difficulty": "easy",
    "time": 30,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "x, y = 6, 9\nx, y = y, x\nprint(x - y)",
    "options": {
      "A": "4",
      "B": "3",
      "C": "2",
      "D": "6"
    },
    "correct": "B",
    "explanation": "Dəyişənlərə verilən qiymətlər yenilənir və çap zamanı 3 görünür."
  },
  {
    "id": 3,
    "difficulty": "easy",
    "time": 30,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "a = \"7\"\nprint(a * 3)",
    "options": {
      "A": "778",
      "B": "776",
      "C": "777",
      "D": "1554"
    },
    "correct": "C",
    "explanation": "Vurma əməliyyatından sonra yekun nəticə 777 olur."
  },
  {
    "id": 4,
    "difficulty": "easy",
    "time": 30,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "a, b = 4, 5\nc = str(a) + str(b)\nprint(c)",
    "options": {
      "A": "46",
      "B": "44",
      "C": "90",
      "D": "45"
    },
    "correct": "D",
    "explanation": "Qiymətlər sətirə çevrilir və sətir kimi birləşdirilir; nəticə 45 olur."
  },
  {
    "id": 5,
    "difficulty": "easy",
    "time": 30,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "n = 8\nn += 3\nn *= 2\nprint(n)",
    "options": {
      "A": "22",
      "B": "23",
      "C": "21",
      "D": "44"
    },
    "correct": "A",
    "explanation": "Qısaldılmış mənimsətmə əməliyyatları ardıcıl tətbiq edilir; son nəticə 22-dir."
  },
  {
    "id": 6,
    "difficulty": "easy",
    "time": 30,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "a, b, c = range(3, 6)\nprint(a + b + c)",
    "options": {
      "A": "13",
      "B": "12",
      "C": "11",
      "D": "24"
    },
    "correct": "B",
    "explanation": "range() ardıcıl qiymətlər yaradır; həmin qiymətlər hesablandıqda 12 alınır."
  },
  {
    "id": 7,
    "difficulty": "easy",
    "time": 30,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "k = 10\n# k = k + 5\nk = k * 2\nprint(k)",
    "options": {
      "A": "21",
      "B": "19",
      "C": "20",
      "D": "40"
    },
    "correct": "C",
    "explanation": "Vurma əməliyyatından sonra yekun nəticə 20 olur."
  },
  {
    "id": 8,
    "difficulty": "easy",
    "time": 30,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "a = \"Python\"\nb = \"Dərs\"\nprint(a + \" \" + b)",
    "options": {
      "A": "PYTHON DƏRS",
      "B": "python dərs",
      "C": "srəD nohtyP",
      "D": "Python Dərs"
    },
    "correct": "D",
    "explanation": "Əmrlər ardıcıl icra olunur və ekrana Python Dərs çap edilir."
  },
  {
    "id": 9,
    "difficulty": "easy",
    "time": 30,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "m = 15\nn = 4\nprint(m // n, m % n)",
    "options": {
      "A": "3 3",
      "B": "3",
      "C": "33",
      "D": "0"
    },
    "correct": "A",
    "explanation": "Tam bölmə və qalıq əməliyyatları tətbiq olunur; nəticə 3 3-dir."
  },
  {
    "id": 10,
    "difficulty": "easy",
    "time": 30,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "a = True\nb = False\nprint(int(a) + int(b))",
    "options": {
      "A": "2",
      "B": "1",
      "C": "0",
      "D": "4"
    },
    "correct": "B",
    "explanation": "Tip çevirməsindən sonra riyazi əməl yerinə yetirilir və 1 alınır."
  },
  {
    "id": 11,
    "difficulty": "easy",
    "time": 30,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "a = 4\nb = -7\nprint(abs(b) - a)",
    "options": {
      "A": "4",
      "B": "2",
      "C": "3",
      "D": "6"
    },
    "correct": "C",
    "explanation": "Əmrlər ardıcıl icra olunur və ekrana 3 çap edilir."
  },
  {
    "id": 12,
    "difficulty": "easy",
    "time": 30,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "x = 2\ny = 5\nprint(pow(x, 3) + y)",
    "options": {
      "A": "14",
      "B": "12",
      "C": "26",
      "D": "13"
    },
    "correct": "D",
    "explanation": "Əmrlər ardıcıl icra olunur və ekrana 13 çap edilir."
  },
  {
    "id": 13,
    "difficulty": "easy",
    "time": 30,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "a = 12\nb = 5\nprint(a + b * 2)",
    "options": {
      "A": "22",
      "B": "23",
      "C": "21",
      "D": "44"
    },
    "correct": "A",
    "explanation": "Vurma əməliyyatından sonra yekun nəticə 22 olur."
  },
  {
    "id": 14,
    "difficulty": "easy",
    "time": 30,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "x = \"15\"\ny = \"5\"\nprint(x + y)",
    "options": {
      "A": "156",
      "B": "155",
      "C": "154",
      "D": "310"
    },
    "correct": "B",
    "explanation": "Əmrlər ardıcıl icra olunur və ekrana 155 çap edilir."
  },
  {
    "id": 15,
    "difficulty": "easy",
    "time": 30,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "a = 27\nprint(a // 10 + a % 10)",
    "options": {
      "A": "10",
      "B": "8",
      "C": "9",
      "D": "18"
    },
    "correct": "C",
    "explanation": "Tam bölmə və qalıq əməliyyatları tətbiq olunur; nəticə 9-dir."
  },
  {
    "id": 16,
    "difficulty": "easy",
    "time": 30,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "a = 50\nb = a / 2 + a // 2 + a % 2\nprint(int(b))",
    "options": {
      "A": "51",
      "B": "49",
      "C": "100",
      "D": "50"
    },
    "correct": "D",
    "explanation": "Tip çevirməsindən sonra riyazi əməl yerinə yetirilir və 50 alınır."
  },
  {
    "id": 17,
    "difficulty": "easy",
    "time": 30,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "a, b = 3, 4\nc = abs(b * 2 - a ** 2)\nprint(c)",
    "options": {
      "A": "1",
      "B": "2",
      "C": "0",
      "D": "4"
    },
    "correct": "A",
    "explanation": "Vurma əməliyyatından sonra yekun nəticə 1 olur."
  },
  {
    "id": 18,
    "difficulty": "easy",
    "time": 30,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "a = \"12\"\nprint(int(a) + 3)",
    "options": {
      "A": "16",
      "B": "15",
      "C": "14",
      "D": "30"
    },
    "correct": "B",
    "explanation": "Tip çevirməsindən sonra riyazi əməl yerinə yetirilir və 15 alınır."
  },
  {
    "id": 19,
    "difficulty": "easy",
    "time": 30,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "n = 456\na = list(str(n))\nprint(a[1])",
    "options": {
      "A": "6",
      "B": "4",
      "C": "5",
      "D": "10"
    },
    "correct": "C",
    "explanation": "Qiymətlər sətirə çevrilir və sətir kimi birləşdirilir; nəticə 5 olur."
  },
  {
    "id": 20,
    "difficulty": "easy",
    "time": 30,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "a = 5\nb = 2\nprint(a / b)",
    "options": {
      "A": "2",
      "B": "3.5",
      "C": "5.0",
      "D": "2.5"
    },
    "correct": "D",
    "explanation": "Əmrlər ardıcıl icra olunur və ekrana 2.5 çap edilir."
  },
  {
    "id": 21,
    "difficulty": "easy",
    "time": 30,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "s = \"informatika\"\nprint(s[0] + s[5])",
    "options": {
      "A": "im",
      "B": "IM",
      "C": "mi",
      "D": "2"
    },
    "correct": "A",
    "explanation": "İndeksləmə 0-dan başlayır; seçilən elementlərlə hesablama nəticəsi im-dir."
  },
  {
    "id": 22,
    "difficulty": "easy",
    "time": 30,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "s = \"komputer\"\nprint(s[1:4])",
    "options": {
      "A": "OMP",
      "B": "omp",
      "C": "pmo",
      "D": "3"
    },
    "correct": "B",
    "explanation": "İndeksləmə 0-dan başlayır; seçilən elementlərlə hesablama nəticəsi omp-dir."
  },
  {
    "id": 23,
    "difficulty": "easy",
    "time": 30,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "s = \"alqoritm\"\nprint(s[:3])",
    "options": {
      "A": "ALQ",
      "B": "qla",
      "C": "alq",
      "D": "3"
    },
    "correct": "C",
    "explanation": "İndeksləmə 0-dan başlayır; seçilən elementlərlə hesablama nəticəsi alq-dir."
  },
  {
    "id": 24,
    "difficulty": "easy",
    "time": 30,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "s = \"proqram\"\nprint(s[3:])",
    "options": {
      "A": "QRAM",
      "B": "marq",
      "C": "4",
      "D": "qram"
    },
    "correct": "D",
    "explanation": "İndeksləmə 0-dan başlayır; seçilən elementlərlə hesablama nəticəsi qram-dir."
  },
  {
    "id": 25,
    "difficulty": "easy",
    "time": 30,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "s = \"ana dili\"\nprint(len(s))",
    "options": {
      "A": "8",
      "B": "9",
      "C": "7",
      "D": "16"
    },
    "correct": "A",
    "explanation": "Əmrlər ardıcıl icra olunur və ekrana 8 çap edilir."
  },
  {
    "id": 26,
    "difficulty": "easy",
    "time": 30,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "s = \"banana\"\nprint(s.count(\"a\"))",
    "options": {
      "A": "4",
      "B": "3",
      "C": "2",
      "D": "6"
    },
    "correct": "B",
    "explanation": "Əmrlər ardıcıl icra olunur və ekrana 3 çap edilir."
  },
  {
    "id": 27,
    "difficulty": "easy",
    "time": 30,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "s = \"testlər\"\nprint(s.find(\"t\", 1))",
    "options": {
      "A": "4",
      "B": "2",
      "C": "3",
      "D": "6"
    },
    "correct": "C",
    "explanation": "Əmrlər ardıcıl icra olunur və ekrana 3 çap edilir."
  },
  {
    "id": 28,
    "difficulty": "easy",
    "time": 30,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "s = \"  kod  \"\nprint(s.strip() + \"!\")",
    "options": {
      "A": "KOD!",
      "B": "!dok",
      "C": "4",
      "D": "kod!"
    },
    "correct": "D",
    "explanation": "Əmrlər ardıcıl icra olunur və ekrana kod! çap edilir."
  },
  {
    "id": 29,
    "difficulty": "easy",
    "time": 30,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "s = \"məktəb\"\nprint(s[0] + s[3])",
    "options": {
      "A": "mt",
      "B": "MT",
      "C": "tm",
      "D": "2"
    },
    "correct": "A",
    "explanation": "İndeksləmə 0-dan başlayır; seçilən elementlərlə hesablama nəticəsi mt-dir."
  },
  {
    "id": 30,
    "difficulty": "easy",
    "time": 30,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "s = \"komanda\"\nprint(s[2:5])",
    "options": {
      "A": "MAN",
      "B": "man",
      "C": "nam",
      "D": "3"
    },
    "correct": "B",
    "explanation": "İndeksləmə 0-dan başlayır; seçilən elementlərlə hesablama nəticəsi man-dir."
  },
  {
    "id": 31,
    "difficulty": "easy",
    "time": 30,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "s = \"Python\"\nprint(len(s) + s.find(\"h\"))",
    "options": {
      "A": "10",
      "B": "8",
      "C": "9",
      "D": "18"
    },
    "correct": "C",
    "explanation": "Əmrlər ardıcıl icra olunur və ekrana 9 çap edilir."
  },
  {
    "id": 32,
    "difficulty": "easy",
    "time": 30,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "s = \"dərslər\"\nprint(s.count(\"r\"))",
    "options": {
      "A": "3",
      "B": "1",
      "C": "4",
      "D": "2"
    },
    "correct": "D",
    "explanation": "Əmrlər ardıcıl icra olunur və ekrana 2 çap edilir."
  },
  {
    "id": 33,
    "difficulty": "easy",
    "time": 30,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "s = \"sabah\"\nprint(s.replace(\"a\", \"o\"))",
    "options": {
      "A": "soboh",
      "B": "SOBOH",
      "C": "hobos",
      "D": "5"
    },
    "correct": "A",
    "explanation": "Əmrlər ardıcıl icra olunur və ekrana soboh çap edilir."
  },
  {
    "id": 34,
    "difficulty": "easy",
    "time": 30,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "s = \"MiQ\"\nprint(s.lower())",
    "options": {
      "A": "MIQ",
      "B": "miq",
      "C": "qim",
      "D": "3"
    },
    "correct": "B",
    "explanation": "Əmrlər ardıcıl icra olunur və ekrana miq çap edilir."
  },
  {
    "id": 35,
    "difficulty": "easy",
    "time": 30,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "s = \"pYthon\"\nprint(s.capitalize())",
    "options": {
      "A": "PYTHON",
      "B": "python",
      "C": "Python",
      "D": "nohtyP"
    },
    "correct": "C",
    "explanation": "Əmrlər ardıcıl icra olunur və ekrana Python çap edilir."
  },
  {
    "id": 36,
    "difficulty": "easy",
    "time": 30,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "a = \"A-B-C\"\nb = a.split(\"-\")\nprint(b[1])",
    "options": {
      "A": "b",
      "B": "1",
      "C": "0",
      "D": "B"
    },
    "correct": "D",
    "explanation": "İndeksləmə 0-dan başlayır; seçilən elementlərlə hesablama nəticəsi B-dir."
  },
  {
    "id": 37,
    "difficulty": "easy",
    "time": 30,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "a = [\"salam\", \"dünya\"]\nprint(\" \".join(a))",
    "options": {
      "A": "salam dünya",
      "B": "SALAM DÜNYA",
      "C": "aynüd malas",
      "D": "11"
    },
    "correct": "A",
    "explanation": "İndeksləmə 0-dan başlayır; seçilən elementlərlə hesablama nəticəsi salam dünya-dir."
  },
  {
    "id": 38,
    "difficulty": "easy",
    "time": 30,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "s = \"banana\"\nk = 0\nfor i in s:\n    if i == \"n\":\n        k += 1\nprint(k)",
    "options": {
      "A": "3",
      "B": "2",
      "C": "1",
      "D": "4"
    },
    "correct": "B",
    "explanation": "Qısaldılmış mənimsətmə əməliyyatları ardıcıl tətbiq edilir; son nəticə 2-dir."
  },
  {
    "id": 39,
    "difficulty": "easy",
    "time": 30,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "a = \"bir iki\"\nprint(a.find(\"iki\"))",
    "options": {
      "A": "5",
      "B": "3",
      "C": "4",
      "D": "8"
    },
    "correct": "C",
    "explanation": "Əmrlər ardıcıl icra olunur və ekrana 4 çap edilir."
  },
  {
    "id": 40,
    "difficulty": "easy",
    "time": 30,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "a = \"Qarabağ\"\nprint(a.upper())",
    "options": {
      "A": "qarabağ",
      "B": "ĞABARAQ",
      "C": "7",
      "D": "QARABAĞ"
    },
    "correct": "D",
    "explanation": "Əmrlər ardıcıl icra olunur və ekrana QARABAĞ çap edilir."
  },
  {
    "id": 41,
    "difficulty": "easy",
    "time": 30,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "a = [3, 5, 7, 9]\nprint(a[1] + a[3])",
    "options": {
      "A": "14",
      "B": "15",
      "C": "13",
      "D": "28"
    },
    "correct": "A",
    "explanation": "İndeksləmə 0-dan başlayır; seçilən elementlərlə hesablama nəticəsi 14-dir."
  },
  {
    "id": 42,
    "difficulty": "easy",
    "time": 30,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "a = [1, 2, 3]\na.append(4)\nprint(a)",
    "options": {
      "A": "[]",
      "B": "[1, 2, 3, 4]",
      "C": "[4, 3, 2, 1]",
      "D": "4"
    },
    "correct": "B",
    "explanation": "İndeksləmə 0-dan başlayır; seçilən elementlərlə hesablama nəticəsi [1, 2, 3, 4]-dir."
  },
  {
    "id": 43,
    "difficulty": "easy",
    "time": 30,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "a = [\"a\", \"b\", \"c\"]\na[1] = \"x\"\nprint(a)",
    "options": {
      "A": "[]",
      "B": "['c', 'x', 'a']",
      "C": "['a', 'x', 'c']",
      "D": "3"
    },
    "correct": "C",
    "explanation": "İndeksləmə 0-dan başlayır; seçilən elementlərlə hesablama nəticəsi ['a', 'x', 'c']-dir."
  },
  {
    "id": 44,
    "difficulty": "easy",
    "time": 30,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "a = [8, 2, 5]\na.sort()\nprint(a[0])",
    "options": {
      "A": "3",
      "B": "1",
      "C": "4",
      "D": "2"
    },
    "correct": "D",
    "explanation": "İndeksləmə 0-dan başlayır; seçilən elementlərlə hesablama nəticəsi 2-dir."
  },
  {
    "id": 45,
    "difficulty": "easy",
    "time": 30,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "a = [4, 6, 8]\nprint(sum(a) // len(a))",
    "options": {
      "A": "6",
      "B": "7",
      "C": "5",
      "D": "12"
    },
    "correct": "A",
    "explanation": "len() uzunluğu hesablayır, indekslər isə 0-dan başladığı üçün nəticə 6 alınır."
  },
  {
    "id": 46,
    "difficulty": "easy",
    "time": 30,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "a = [\"py\", \"thon\"]\nprint(\"\".join(a))",
    "options": {
      "A": "PYTHON",
      "B": "python",
      "C": "nohtyp",
      "D": "6"
    },
    "correct": "B",
    "explanation": "İndeksləmə 0-dan başlayır; seçilən elementlərlə hesablama nəticəsi python-dir."
  },
  {
    "id": 47,
    "difficulty": "easy",
    "time": 30,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "a = \"sual\"\nb = list(a)\nprint(b[2])",
    "options": {
      "A": "A",
      "B": "1",
      "C": "a",
      "D": "0"
    },
    "correct": "C",
    "explanation": "İndeksləmə 0-dan başlayır; seçilən elementlərlə hesablama nəticəsi a-dir."
  },
  {
    "id": 48,
    "difficulty": "easy",
    "time": 30,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "a = \"bir-iki-uc\"\nb = a.split(\"-\")\nprint(len(b))",
    "options": {
      "A": "4",
      "B": "2",
      "C": "6",
      "D": "3"
    },
    "correct": "D",
    "explanation": "Əmrlər ardıcıl icra olunur və ekrana 3 çap edilir."
  },
  {
    "id": 49,
    "difficulty": "easy",
    "time": 30,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "a = [10, 20, 30, 40]\nprint(a[1:3])",
    "options": {
      "A": "[20, 30]",
      "B": "[]",
      "C": "[30, 20]",
      "D": "2"
    },
    "correct": "A",
    "explanation": "İndeksləmə 0-dan başlayır; seçilən elementlərlə hesablama nəticəsi [20, 30]-dir."
  },
  {
    "id": 50,
    "difficulty": "easy",
    "time": 30,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "a = [\"x\", \"y\", \"z\"]\ndel a[1]\nprint(a)",
    "options": {
      "A": "[]",
      "B": "['x', 'z']",
      "C": "['z', 'x']",
      "D": "2"
    },
    "correct": "B",
    "explanation": "İndeksləmə 0-dan başlayır; seçilən elementlərlə hesablama nəticəsi ['x', 'z']-dir."
  },
  {
    "id": 51,
    "difficulty": "easy",
    "time": 30,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "a = [4, 9, 2]\nprint(max(a) - min(a))",
    "options": {
      "A": "8",
      "B": "6",
      "C": "7",
      "D": "14"
    },
    "correct": "C",
    "explanation": "İndeksləmə 0-dan başlayır; seçilən elementlərlə hesablama nəticəsi 7-dir."
  },
  {
    "id": 52,
    "difficulty": "easy",
    "time": 30,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "a = [\"a\", \"b\"]\na.append(\"c\")\nprint(len(a))",
    "options": {
      "A": "4",
      "B": "2",
      "C": "6",
      "D": "3"
    },
    "correct": "D",
    "explanation": "len() uzunluğu hesablayır, indekslər isə 0-dan başladığı üçün nəticə 3 alınır."
  },
  {
    "id": 53,
    "difficulty": "easy",
    "time": 30,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "a = [5, 1, 3]\na.sort()\nprint(a)",
    "options": {
      "A": "[1, 3, 5]",
      "B": "[]",
      "C": "[5, 3, 1]",
      "D": "3"
    },
    "correct": "A",
    "explanation": "İndeksləmə 0-dan başlayır; seçilən elementlərlə hesablama nəticəsi [1, 3, 5]-dir."
  },
  {
    "id": 54,
    "difficulty": "easy",
    "time": 30,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "a = [10, 20, 30]\na[0] = 5\nprint(sum(a))",
    "options": {
      "A": "56",
      "B": "55",
      "C": "54",
      "D": "110"
    },
    "correct": "B",
    "explanation": "İndeksləmə 0-dan başlayır; seçilən elementlərlə hesablama nəticəsi 55-dir."
  },
  {
    "id": 55,
    "difficulty": "easy",
    "time": 30,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "a = [1, 3]\na.insert(1, 2)\nprint(a)",
    "options": {
      "A": "[]",
      "B": "[3, 2, 1]",
      "C": "[1, 2, 3]",
      "D": "3"
    },
    "correct": "C",
    "explanation": "İndeksləmə 0-dan başlayır; seçilən elementlərlə hesablama nəticəsi [1, 2, 3]-dir."
  },
  {
    "id": 56,
    "difficulty": "easy",
    "time": 30,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "a = [2, 3, 2, 4]\na.remove(2)\nprint(a)",
    "options": {
      "A": "[]",
      "B": "[4, 2, 3]",
      "C": "3",
      "D": "[3, 2, 4]"
    },
    "correct": "D",
    "explanation": "İndeksləmə 0-dan başlayır; seçilən elementlərlə hesablama nəticəsi [3, 2, 4]-dir."
  },
  {
    "id": 57,
    "difficulty": "easy",
    "time": 30,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "a = [5, 7, 5, 9]\nprint(a.count(5) + a.index(9))",
    "options": {
      "A": "5",
      "B": "6",
      "C": "4",
      "D": "10"
    },
    "correct": "A",
    "explanation": "İndeksləmə 0-dan başlayır; seçilən elementlərlə hesablama nəticəsi 5-dir."
  },
  {
    "id": 58,
    "difficulty": "easy",
    "time": 30,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "a = [\"x\", \"y\", \"z\"]\na.reverse()\nprint(a)",
    "options": {
      "A": "[]",
      "B": "['z', 'y', 'x']",
      "C": "['x', 'y', 'z']",
      "D": "3"
    },
    "correct": "B",
    "explanation": "İndeksləmə 0-dan başlayır; seçilən elementlərlə hesablama nəticəsi ['z', 'y', 'x']-dir."
  },
  {
    "id": 59,
    "difficulty": "easy",
    "time": 30,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "a = [\"b\", \"a\", \"c\"]\nprint(min(a) + max(a))",
    "options": {
      "A": "AC",
      "B": "ca",
      "C": "ac",
      "D": "2"
    },
    "correct": "C",
    "explanation": "İndeksləmə 0-dan başlayır; seçilən elementlərlə hesablama nəticəsi ac-dir."
  },
  {
    "id": 60,
    "difficulty": "easy",
    "time": 30,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "a = [1, 2, 3]\nb = str(sum(a))\nprint(b * 2)",
    "options": {
      "A": "67",
      "B": "65",
      "C": "132",
      "D": "66"
    },
    "correct": "D",
    "explanation": "Qiymətlər sətirə çevrilir və sətir kimi birləşdirilir; nəticə 66 olur."
  },
  {
    "id": 61,
    "difficulty": "easy",
    "time": 30,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "a = 6\nb = 4\nif a > b:\n    c = a + b\nelse:\n    c = a - b\nprint(c)",
    "options": {
      "A": "10",
      "B": "11",
      "C": "9",
      "D": "20"
    },
    "correct": "A",
    "explanation": "Şərt yoxlanılır, yalnız uyğun blok işləyir və 10 çap edilir."
  },
  {
    "id": 62,
    "difficulty": "easy",
    "time": 30,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "n = 7\nif n % 2 == 0:\n    print(\"cüt\")\nelse:\n    print(\"tək\")",
    "options": {
      "A": "TƏK",
      "B": "tək",
      "C": "kət",
      "D": "3"
    },
    "correct": "B",
    "explanation": "Şərt yoxlanılır, yalnız uyğun blok işləyir və tək çap edilir."
  },
  {
    "id": 63,
    "difficulty": "easy",
    "time": 30,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "x = 5\nif x > 10:\n    y = 1\nelif x > 3:\n    y = 2\nelse:\n    y = 3\nprint(y)",
    "options": {
      "A": "3",
      "B": "1",
      "C": "2",
      "D": "4"
    },
    "correct": "C",
    "explanation": "Şərt yoxlanılır, yalnız uyğun blok işləyir və 2 çap edilir."
  },
  {
    "id": 64,
    "difficulty": "easy",
    "time": 30,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "a = 12\nif a % 3 == 0 and a % 4 == 0:\n    print(\"hə\")\nelse:\n    print(\"yox\")",
    "options": {
      "A": "HƏ",
      "B": "əh",
      "C": "2",
      "D": "hə"
    },
    "correct": "D",
    "explanation": "Məntiqi şərt qiymətləndirilir və uyğun blok icra olunur; nəticə hə-dir."
  },
  {
    "id": 65,
    "difficulty": "easy",
    "time": 30,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "s = \"kitab\"\nif len(s) == 5:\n    print(s.upper())\nelse:\n    print(s.lower())",
    "options": {
      "A": "KITAB",
      "B": "kitab",
      "C": "BATIK",
      "D": "5"
    },
    "correct": "A",
    "explanation": "Şərt yoxlanılır, yalnız uyğun blok işləyir və KITAB çap edilir."
  },
  {
    "id": 66,
    "difficulty": "easy",
    "time": 30,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "a = 4\nb = 4\nif a != b:\n    c = 1\nelse:\n    c = a * b\nprint(c)",
    "options": {
      "A": "17",
      "B": "16",
      "C": "15",
      "D": "32"
    },
    "correct": "B",
    "explanation": "Şərt yoxlanılır, yalnız uyğun blok işləyir və 16 çap edilir."
  },
  {
    "id": 67,
    "difficulty": "easy",
    "time": 30,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "x = 9\nif x < 5 or x > 8:\n    print(\"A\")\nelse:\n    print(\"B\")",
    "options": {
      "A": "a",
      "B": "1",
      "C": "A",
      "D": "0"
    },
    "correct": "C",
    "explanation": "Məntiqi şərt qiymətləndirilir və uyğun blok icra olunur; nəticə A-dir."
  },
  {
    "id": 68,
    "difficulty": "easy",
    "time": 30,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "s = 0\nfor i in range(4):\n    s += i\nprint(s)",
    "options": {
      "A": "7",
      "B": "5",
      "C": "12",
      "D": "6"
    },
    "correct": "D",
    "explanation": "Qısaldılmış mənimsətmə əməliyyatları ardıcıl tətbiq edilir; son nəticə 6-dir."
  },
  {
    "id": 69,
    "difficulty": "easy",
    "time": 30,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "a = []\nfor i in range(1, 5):\n    a.append(i)\nprint(a)",
    "options": {
      "A": "[1, 2, 3, 4]",
      "B": "[]",
      "C": "[4, 3, 2, 1]",
      "D": "4"
    },
    "correct": "A",
    "explanation": "Dövr elementləri ardıcıl emal edir və sonda [1, 2, 3, 4] çap olunur."
  },
  {
    "id": 70,
    "difficulty": "easy",
    "time": 30,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "i = 1\ns = 0\nwhile i <= 5:\n    s += i\n    i += 2\nprint(s)",
    "options": {
      "A": "10",
      "B": "9",
      "C": "8",
      "D": "18"
    },
    "correct": "B",
    "explanation": "Qısaldılmış mənimsətmə əməliyyatları ardıcıl tətbiq edilir; son nəticə 9-dir."
  },
  {
    "id": 71,
    "difficulty": "easy",
    "time": 30,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "a = [2, 5, 6, 9]\nk = 0\nfor i in a:\n    if i % 3 == 0:\n        k += 1\nprint(k)",
    "options": {
      "A": "3",
      "B": "1",
      "C": "2",
      "D": "4"
    },
    "correct": "C",
    "explanation": "Qısaldılmış mənimsətmə əməliyyatları ardıcıl tətbiq edilir; son nəticə 2-dir."
  },
  {
    "id": 72,
    "difficulty": "easy",
    "time": 30,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "s = \"abc\"\nfor i in s:\n    print(i, end=\"-\")",
    "options": {
      "A": "A-B-C-",
      "B": "-c-b-a",
      "C": "6",
      "D": "a-b-c-"
    },
    "correct": "D",
    "explanation": "Dövr elementləri ardıcıl emal edir və sonda a-b-c- çap olunur."
  },
  {
    "id": 73,
    "difficulty": "easy",
    "time": 30,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "n = 20\nwhile n > 5:\n    n = n // 2\nprint(n)",
    "options": {
      "A": "5",
      "B": "6",
      "C": "4",
      "D": "10"
    },
    "correct": "A",
    "explanation": "while dövrü şərt ödənildiyi müddətdə işləyir; son qiymət 5 olur."
  },
  {
    "id": 74,
    "difficulty": "easy",
    "time": 30,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "s = 0\nfor i in range(2, 8, 2):\n    s += i\nprint(s)",
    "options": {
      "A": "13",
      "B": "12",
      "C": "11",
      "D": "24"
    },
    "correct": "B",
    "explanation": "Qısaldılmış mənimsətmə əməliyyatları ardıcıl tətbiq edilir; son nəticə 12-dir."
  },
  {
    "id": 75,
    "difficulty": "easy",
    "time": 30,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "a = []\nfor i in range(6):\n    if i % 2 == 0:\n        a.append(i)\nprint(a)",
    "options": {
      "A": "[]",
      "B": "[4, 2, 0]",
      "C": "[0, 2, 4]",
      "D": "3"
    },
    "correct": "C",
    "explanation": "Dövr verilən aralıqda işləyir, şərtə uyğun qiymətlər nəzərə alınır və nəticə [0, 2, 4] olur."
  },
  {
    "id": 76,
    "difficulty": "easy",
    "time": 30,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "a = 8\nif a % 4 == 0:\n    print(\"bölünür\")\nelse:\n    print(\"bölünmür\")",
    "options": {
      "A": "BÖLÜNÜR",
      "B": "rünülöb",
      "C": "7",
      "D": "bölünür"
    },
    "correct": "D",
    "explanation": "Şərt yoxlanılır, yalnız uyğun blok işləyir və bölünür çap edilir."
  },
  {
    "id": 77,
    "difficulty": "easy",
    "time": 30,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "a = 3\nb = 7\nif a < b:\n    c = b - a\nelse:\n    c = a + b\nprint(c)",
    "options": {
      "A": "4",
      "B": "5",
      "C": "3",
      "D": "8"
    },
    "correct": "A",
    "explanation": "Şərt yoxlanılır, yalnız uyğun blok işləyir və 4 çap edilir."
  },
  {
    "id": 78,
    "difficulty": "easy",
    "time": 30,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "s = \"kod\"\nif len(s) > 4:\n    print(s)\nelse:\n    print(s * 2)",
    "options": {
      "A": "KODKOD",
      "B": "kodkod",
      "C": "dokdok",
      "D": "6"
    },
    "correct": "B",
    "explanation": "Şərt yoxlanılır, yalnız uyğun blok işləyir və kodkod çap edilir."
  },
  {
    "id": 79,
    "difficulty": "easy",
    "time": 30,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "s = 1\nfor i in range(1, 4):\n    s *= i\nprint(s)",
    "options": {
      "A": "7",
      "B": "5",
      "C": "6",
      "D": "12"
    },
    "correct": "C",
    "explanation": "Qısaldılmış mənimsətmə əməliyyatları ardıcıl tətbiq edilir; son nəticə 6-dir."
  },
  {
    "id": 80,
    "difficulty": "easy",
    "time": 30,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "i = 2\ns = 0\nwhile i < 7:\n    s += i\n    i += 2\nprint(s)",
    "options": {
      "A": "13",
      "B": "11",
      "C": "24",
      "D": "12"
    },
    "correct": "D",
    "explanation": "Qısaldılmış mənimsətmə əməliyyatları ardıcıl tətbiq edilir; son nəticə 12-dir."
  },
  {
    "id": 81,
    "difficulty": "easy",
    "time": 30,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "def kv(x):\n    return x * x\n\nprint(kv(3) + kv(2))",
    "options": {
      "A": "13",
      "B": "14",
      "C": "12",
      "D": "26"
    },
    "correct": "A",
    "explanation": "Funksiya daxilində hesablanan qiymət return ilə qaytarılır; yekun nəticə 13-dir."
  },
  {
    "id": 82,
    "difficulty": "easy",
    "time": 30,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "def cem(a, b):\n    return a + b\n\nprint(cem(5, 7))",
    "options": {
      "A": "13",
      "B": "12",
      "C": "11",
      "D": "24"
    },
    "correct": "B",
    "explanation": "Funksiya daxilində hesablanan qiymət return ilə qaytarılır; yekun nəticə 12-dir."
  },
  {
    "id": 83,
    "difficulty": "easy",
    "time": 30,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "def salam(a):\n    print(\"Salam\", a)\n\nsalam(\"Ali\")",
    "options": {
      "A": "SALAM ALI",
      "B": "salam ali",
      "C": "Salam Ali",
      "D": "ilA malaS"
    },
    "correct": "C",
    "explanation": "Funksiya çağırıldıqdan sonra əmrlər ardıcıl icra olunur və Salam Ali alınır."
  },
  {
    "id": 84,
    "difficulty": "easy",
    "time": 30,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "def f(x):\n    if x > 0:\n        return x + 2\n    else:\n        return 0\n\nprint(f(4))",
    "options": {
      "A": "7",
      "B": "5",
      "C": "12",
      "D": "6"
    },
    "correct": "D",
    "explanation": "Funksiya daxilində hesablanan qiymət return ilə qaytarılır; yekun nəticə 6-dir."
  },
  {
    "id": 85,
    "difficulty": "easy",
    "time": 30,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "def hesabla(a):\n    return len(a) + a.count(\"a\")\n\nprint(hesabla(\"alma\"))",
    "options": {
      "A": "6",
      "B": "7",
      "C": "5",
      "D": "12"
    },
    "correct": "A",
    "explanation": "Funksiya daxilində hesablanan qiymət return ilə qaytarılır; yekun nəticə 6-dir."
  },
  {
    "id": 86,
    "difficulty": "easy",
    "time": 30,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "def artir(x):\n    return x + 1\n\nprint(artir(9))",
    "options": {
      "A": "11",
      "B": "10",
      "C": "9",
      "D": "20"
    },
    "correct": "B",
    "explanation": "Funksiya daxilində hesablanan qiymət return ilə qaytarılır; yekun nəticə 10-dir."
  },
  {
    "id": 87,
    "difficulty": "easy",
    "time": 30,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "def hesabla(a, b):\n    return a * b + a\n\nprint(hesabla(3, 4))",
    "options": {
      "A": "16",
      "B": "14",
      "C": "15",
      "D": "30"
    },
    "correct": "C",
    "explanation": "Funksiya daxilində hesablanan qiymət return ilə qaytarılır; yekun nəticə 15-dir."
  },
  {
    "id": 88,
    "difficulty": "easy",
    "time": 30,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "def uzunluq(s):\n    return len(s)\n\nprint(uzunluq(\"test\") + 2)",
    "options": {
      "A": "7",
      "B": "5",
      "C": "12",
      "D": "6"
    },
    "correct": "D",
    "explanation": "Funksiya daxilində hesablanan qiymət return ilə qaytarılır; yekun nəticə 6-dir."
  },
  {
    "id": 89,
    "difficulty": "easy",
    "time": 30,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "print(\"A\", end=\"\")\nprint(\"B\")",
    "options": {
      "A": "AB",
      "B": "ab",
      "C": "BA",
      "D": "2"
    },
    "correct": "A",
    "explanation": "Əmrlər ardıcıl icra olunur və ekrana AB çap edilir."
  },
  {
    "id": 90,
    "difficulty": "easy",
    "time": 30,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "a = True\nif a:\n    print(\"doğru\")\nelse:\n    print(\"yanlış\")",
    "options": {
      "A": "DOĞRU",
      "B": "doğru",
      "C": "urğod",
      "D": "5"
    },
    "correct": "B",
    "explanation": "Şərt yoxlanılır, yalnız uyğun blok işləyir və doğru çap edilir."
  },
  {
    "id": 91,
    "difficulty": "easy",
    "time": 30,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "a = [1, \"2\"]\nprint(type(a))",
    "options": {
      "A": "<class 'int'>",
      "B": "<class 'float'>",
      "C": "<class 'list'>",
      "D": "<class 'str'>"
    },
    "correct": "C",
    "explanation": "Dəyişən siyahı tipindədir; type() <class 'list'> qaytarır."
  },
  {
    "id": 92,
    "difficulty": "easy",
    "time": 30,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "def netice(x):\n    return x // 2 + x % 2\n\nprint(netice(9))",
    "options": {
      "A": "6",
      "B": "4",
      "C": "10",
      "D": "5"
    },
    "correct": "D",
    "explanation": "Funksiya daxilində hesablanan qiymət return ilə qaytarılır; yekun nəticə 5-dir."
  },
  {
    "id": 93,
    "difficulty": "easy",
    "time": 30,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "def f(a):\n    print(a * 2)\n\nf(\"ha\")",
    "options": {
      "A": "haha",
      "B": "HAHA",
      "C": "ahah",
      "D": "4"
    },
    "correct": "A",
    "explanation": "Funksiya çağırıldıqdan sonra əmrlər ardıcıl icra olunur və haha alınır."
  },
  {
    "id": 94,
    "difficulty": "easy",
    "time": 30,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "def birlesdir(a, b):\n    return a + b\n\nprint(birlesdir(\"py\", \"thon\"))",
    "options": {
      "A": "PYTHON",
      "B": "python",
      "C": "nohtyp",
      "D": "6"
    },
    "correct": "B",
    "explanation": "Funksiya daxilində hesablanan qiymət return ilə qaytarılır; yekun nəticə python-dir."
  },
  {
    "id": 95,
    "difficulty": "easy",
    "time": 30,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "a = list(range(3, 7))\nprint(a)",
    "options": {
      "A": "[]",
      "B": "[6, 5, 4, 3]",
      "C": "[3, 4, 5, 6]",
      "D": "4"
    },
    "correct": "C",
    "explanation": "Əmrlər ardıcıl icra olunur və ekrana [3, 4, 5, 6] çap edilir."
  },
  {
    "id": 96,
    "difficulty": "easy",
    "time": 30,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "a = list(range(2, 10, 3))\nprint(a)",
    "options": {
      "A": "[]",
      "B": "[8, 5, 2]",
      "C": "3",
      "D": "[2, 5, 8]"
    },
    "correct": "D",
    "explanation": "Əmrlər ardıcıl icra olunur və ekrana [2, 5, 8] çap edilir."
  },
  {
    "id": 97,
    "difficulty": "easy",
    "time": 30,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "a = 5\nif not a % 2 == 0:\n    print(\"tək\")\nelse:\n    print(\"cüt\")",
    "options": {
      "A": "tək",
      "B": "TƏK",
      "C": "kət",
      "D": "3"
    },
    "correct": "A",
    "explanation": "Məntiqi şərt qiymətləndirilir və uyğun blok icra olunur; nəticə tək-dir."
  },
  {
    "id": 98,
    "difficulty": "easy",
    "time": 30,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "x = 4\nif x < 3 or x == 4:\n    print(\"ok\")\nelse:\n    print(\"no\")",
    "options": {
      "A": "OK",
      "B": "ok",
      "C": "ko",
      "D": "2"
    },
    "correct": "B",
    "explanation": "Məntiqi şərt qiymətləndirilir və uyğun blok icra olunur; nəticə ok-dir."
  },
  {
    "id": 99,
    "difficulty": "easy",
    "time": 30,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "i = 0\nwhile i < 3:\n    i += 1\nprint(i)",
    "options": {
      "A": "4",
      "B": "2",
      "C": "3",
      "D": "6"
    },
    "correct": "C",
    "explanation": "Qısaldılmış mənimsətmə əməliyyatları ardıcıl tətbiq edilir; son nəticə 3-dir."
  },
  {
    "id": 100,
    "difficulty": "easy",
    "time": 30,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "a = 6\nif a > 0:\n    if a % 2 == 0:\n        print(\"müsbət cüt\")\n    else:\n        print(\"müsbət tək\")",
    "options": {
      "A": "MÜSBƏT CÜT",
      "B": "tüc təbsüm",
      "C": "10",
      "D": "müsbət cüt"
    },
    "correct": "D",
    "explanation": "Şərt yoxlanılır, yalnız uyğun blok işləyir və müsbət cüt çap edilir."
  },
  {
    "id": 101,
    "difficulty": "medium",
    "time": 45,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "a, b = 7, 4\na = a + b\nb = a - b\nprint(a, b)",
    "options": {
      "A": "11 7",
      "B": "7 11",
      "C": "11 4",
      "D": "18 7"
    },
    "correct": "A",
    "explanation": "Dəyişənlərə verilən qiymətlər yenilənir və çap zamanı 11 7 görünür."
  },
  {
    "id": 102,
    "difficulty": "medium",
    "time": 45,
    "question": "Kodun çıxış qiymətini müəyyən edin.",
    "code": "x = 38\nr = x % 10\nq = x // 10\nprint(r * 10 + q)",
    "options": {
      "A": "84",
      "B": "83",
      "C": "82",
      "D": "166"
    },
    "correct": "B",
    "explanation": "Tam bölmə və qalıq əməliyyatları tətbiq olunur; nəticə 83-dir."
  },
  {
    "id": 103,
    "difficulty": "medium",
    "time": 45,
    "question": "Verilmiş kodun nəticəsini tapın.",
    "code": "s = \"informatika\"\nt = s[2:6]\nprint(t, len(t), sep=\"-\")",
    "options": {
      "A": "info-4",
      "B": "form-5",
      "C": "form-4",
      "D": "orma-4"
    },
    "correct": "C",
    "explanation": "len() uzunluğu hesablayır, indekslər isə 0-dan başladığı üçün nəticə form-4 alınır."
  },
  {
    "id": 104,
    "difficulty": "medium",
    "time": 45,
    "question": "Kodun icrasından sonra hansı nəticə alınacaq?",
    "code": "a = [3, 6, 9]\na[1] = a[0] + a[2]\nprint(sum(a))",
    "options": {
      "A": "25",
      "B": "23",
      "C": "48",
      "D": "24"
    },
    "correct": "D",
    "explanation": "İndeksləmə 0-dan başlayır; seçilən elementlərlə hesablama nəticəsi 24-dir."
  },
  {
    "id": 105,
    "difficulty": "medium",
    "time": 45,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "a = \"12\"\nb = 3\nprint(a * 2 + str(b))",
    "options": {
      "A": "12123",
      "B": "12124",
      "C": "12122",
      "D": "24246"
    },
    "correct": "A",
    "explanation": "Qiymətlər sətirə çevrilir və sətir kimi birləşdirilir; nəticə 12123 olur."
  },
  {
    "id": 106,
    "difficulty": "medium",
    "time": 45,
    "question": "Kodun çıxış qiymətini müəyyən edin.",
    "code": "n = 245\na = n // 100\nb = (n // 10) % 10\nc = n % 10\nprint(a + b * c)",
    "options": {
      "A": "23",
      "B": "22",
      "C": "21",
      "D": "44"
    },
    "correct": "B",
    "explanation": "Tam bölmə və qalıq əməliyyatları tətbiq olunur; nəticə 22-dir."
  },
  {
    "id": 107,
    "difficulty": "medium",
    "time": 45,
    "question": "Verilmiş kodun nəticəsini tapın.",
    "code": "a = [5, 2, 8, 2]\nprint(a.count(2) * a.index(8))",
    "options": {
      "A": "5",
      "B": "3",
      "C": "4",
      "D": "8"
    },
    "correct": "C",
    "explanation": "İndeksləmə 0-dan başlayır; seçilən elementlərlə hesablama nəticəsi 4-dir."
  },
  {
    "id": 108,
    "difficulty": "medium",
    "time": 45,
    "question": "Kodun icrasından sonra hansı nəticə alınacaq?",
    "code": "s = \"abaac\"\nprint(s.find(\"a\", 2) + s.count(\"a\"))",
    "options": {
      "A": "6",
      "B": "4",
      "C": "10",
      "D": "5"
    },
    "correct": "D",
    "explanation": "Əmrlər ardıcıl icra olunur və ekrana 5 çap edilir."
  },
  {
    "id": 109,
    "difficulty": "medium",
    "time": 45,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "a = 4\nb = 9\nif a * 2 > b:\n    c = a + b\nelse:\n    c = b - a\nprint(c)",
    "options": {
      "A": "5",
      "B": "6",
      "C": "4",
      "D": "10"
    },
    "correct": "A",
    "explanation": "Şərt yoxlanılır, yalnız uyğun blok işləyir və 5 çap edilir."
  },
  {
    "id": 110,
    "difficulty": "medium",
    "time": 45,
    "question": "Kodun çıxış qiymətini müəyyən edin.",
    "code": "n = 17\nif n % 3 == 0:\n    n = n // 3\nelif n % 3 == 2:\n    n = n + 4\nelse:\n    n = n * 2\nprint(n)",
    "options": {
      "A": "22",
      "B": "21",
      "C": "20",
      "D": "42"
    },
    "correct": "B",
    "explanation": "Şərt yoxlanılır, yalnız uyğun blok işləyir və 21 çap edilir."
  },
  {
    "id": 111,
    "difficulty": "medium",
    "time": 45,
    "question": "Verilmiş kodun nəticəsini tapın.",
    "code": "s = 0\nfor i in range(2, 7):\n    if i % 2 == 1:\n        s += i * 2\n    else:\n        s += i\nprint(s)",
    "options": {
      "A": "29",
      "B": "27",
      "C": "28",
      "D": "56"
    },
    "correct": "C",
    "explanation": "Qısaldılmış mənimsətmə əməliyyatları ardıcıl tətbiq edilir; son nəticə 28-dir."
  },
  {
    "id": 112,
    "difficulty": "medium",
    "time": 45,
    "question": "Kodun icrasından sonra hansı nəticə alınacaq?",
    "code": "n = 314\ns = 0\nwhile n > 0:\n    s += n % 10\n    n = n // 10\nprint(s)",
    "options": {
      "A": "9",
      "B": "7",
      "C": "16",
      "D": "8"
    },
    "correct": "D",
    "explanation": "Qısaldılmış mənimsətmə əməliyyatları ardıcıl tətbiq edilir; son nəticə 8-dir."
  },
  {
    "id": 113,
    "difficulty": "medium",
    "time": 45,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "a = list(range(3, 10, 2))\nprint(sum(a), len(a))",
    "options": {
      "A": "24 4",
      "B": "24",
      "C": "4 24",
      "D": "28 4"
    },
    "correct": "A",
    "explanation": "Əmrlər ardıcıl icra olunur və ekrana 24 4 çap edilir."
  },
  {
    "id": 114,
    "difficulty": "medium",
    "time": 45,
    "question": "Kodun çıxış qiymətini müəyyən edin.",
    "code": "a = []\nfor i in range(1, 7):\n    if i % 3 == 0:\n        continue\n    a.append(i)\nprint(sum(a))",
    "options": {
      "A": "13",
      "B": "12",
      "C": "11",
      "D": "24"
    },
    "correct": "B",
    "explanation": "Dövr verilən aralıqda işləyir, şərtə uyğun qiymətlər nəzərə alınır və nəticə 12 olur."
  },
  {
    "id": 115,
    "difficulty": "medium",
    "time": 45,
    "question": "Verilmiş kodun nəticəsini tapın.",
    "code": "s = \"kodlama\"\nk = \"\"\nfor i in range(len(s)):\n    if i % 2 == 0:\n        k += s[i]\nprint(k)",
    "options": {
      "A": "kod",
      "B": "koa",
      "C": "kdaa",
      "D": "kdl"
    },
    "correct": "C",
    "explanation": "Qısaldılmış mənimsətmə əməliyyatları ardıcıl tətbiq edilir; son nəticə kdaa-dir."
  },
  {
    "id": 116,
    "difficulty": "medium",
    "time": 45,
    "question": "Kodun icrasından sonra hansı nəticə alınacaq?",
    "code": "def f(x, y):\n    return x * 2 + y\n\nprint(f(3, f(2, 1)))",
    "options": {
      "A": "12",
      "B": "10",
      "C": "22",
      "D": "11"
    },
    "correct": "D",
    "explanation": "Funksiya daxilində hesablanan qiymət return ilə qaytarılır; yekun nəticə 11-dir."
  },
  {
    "id": 117,
    "difficulty": "medium",
    "time": 45,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "def h(a):\n    if a % 2 == 0:\n        return a // 2\n    else:\n        return a * 3\n\nprint(h(5) + h(8))",
    "options": {
      "A": "19",
      "B": "20",
      "C": "18",
      "D": "38"
    },
    "correct": "A",
    "explanation": "Funksiya daxilində hesablanan qiymət return ilə qaytarılır; yekun nəticə 19-dir."
  },
  {
    "id": 118,
    "difficulty": "medium",
    "time": 45,
    "question": "Kodun çıxış qiymətini müəyyən edin.",
    "code": "a = [\"12\", \"3\", \"4\"]\nb = \"\".join(a)\nprint(int(b) // 3)",
    "options": {
      "A": "412",
      "B": "411",
      "C": "410",
      "D": "822"
    },
    "correct": "B",
    "explanation": "İndeksləmə 0-dan başlayır; seçilən elementlərlə hesablama nəticəsi 411-dir."
  },
  {
    "id": 119,
    "difficulty": "medium",
    "time": 45,
    "question": "Verilmiş kodun nəticəsini tapın.",
    "code": "s = [2, 4, 6]\nfor i in range(len(s)):\n    s[i] = s[i] + i\nprint(s)",
    "options": {
      "A": "[2, 4, 6]",
      "B": "[3, 5, 8]",
      "C": "[2, 5, 8]",
      "D": "[2, 5, 6]"
    },
    "correct": "C",
    "explanation": "Dövr elementləri ardıcıl emal edir və sonda [2, 5, 8] çap olunur."
  },
  {
    "id": 120,
    "difficulty": "medium",
    "time": 45,
    "question": "Kodun icrasından sonra hansı nəticə alınacaq?",
    "code": "a = 10\nb = 3\nif a % b == 1 and a > b:\n    print(a // b + a % b)\nelse:\n    print(a + b)",
    "options": {
      "A": "5",
      "B": "3",
      "C": "8",
      "D": "4"
    },
    "correct": "D",
    "explanation": "Məntiqi şərt qiymətləndirilir və uyğun blok icra olunur; nəticə 4-dir."
  },
  {
    "id": 121,
    "difficulty": "medium",
    "time": 45,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "a = [1, 2, 3, 4]\nb = []\nfor i in a:\n    if i % 2 == 0:\n        b.append(i * 2)\n    else:\n        b.append(i + 1)\nprint(b)",
    "options": {
      "A": "[2, 4, 4, 8]",
      "B": "[1, 4, 3, 8]",
      "C": "[2, 2, 4, 4]",
      "D": "[2, 4, 6, 8]"
    },
    "correct": "A",
    "explanation": "Dövr elementləri ardıcıl emal edir və sonda [2, 4, 4, 8] çap olunur."
  },
  {
    "id": 122,
    "difficulty": "medium",
    "time": 45,
    "question": "Kodun çıxış qiymətini müəyyən edin.",
    "code": "n = 5\ns = 1\nwhile n > 1:\n    s *= n\n    n -= 2\nprint(s)",
    "options": {
      "A": "16",
      "B": "15",
      "C": "14",
      "D": "30"
    },
    "correct": "B",
    "explanation": "Qısaldılmış mənimsətmə əməliyyatları ardıcıl tətbiq edilir; son nəticə 15-dir."
  },
  {
    "id": 123,
    "difficulty": "medium",
    "time": 45,
    "question": "Verilmiş kodun nəticəsini tapın.",
    "code": "s = \"python\"\na = s[1:4]\nb = s[4:]\nprint(b + a)",
    "options": {
      "A": "ython",
      "B": "pyth",
      "C": "onyth",
      "D": "onpy"
    },
    "correct": "C",
    "explanation": "İndeksləmə 0-dan başlayır; seçilən elementlərlə hesablama nəticəsi onyth-dir."
  },
  {
    "id": 124,
    "difficulty": "medium",
    "time": 45,
    "question": "Kodun icrasından sonra hansı nəticə alınacaq?",
    "code": "a = [7, 1, 7, 3]\na.remove(7)\na.append(sum(a))\nprint(a)",
    "options": {
      "A": "[7, 1, 7, 3]",
      "B": "[1, 7, 3, 18]",
      "C": "[1, 3, 11]",
      "D": "[1, 7, 3, 11]"
    },
    "correct": "D",
    "explanation": "İndeksləmə 0-dan başlayır; seçilən elementlərlə hesablama nəticəsi [1, 7, 3, 11]-dir."
  },
  {
    "id": 125,
    "difficulty": "medium",
    "time": 45,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "x = 14\ny = 4\nz = x // y * 10 + x % y\nprint(z)",
    "options": {
      "A": "32",
      "B": "33",
      "C": "31",
      "D": "64"
    },
    "correct": "A",
    "explanation": "Tam bölmə və qalıq əməliyyatları tətbiq olunur; nəticə 32-dir."
  },
  {
    "id": 126,
    "difficulty": "medium",
    "time": 45,
    "question": "Kodun çıxış qiymətini müəyyən edin.",
    "code": "a = \"alma\"\nb = list(a)\nb[1] = \"o\"\nprint(\"\".join(b))",
    "options": {
      "A": "alma",
      "B": "aoma",
      "C": "olma",
      "D": "aom"
    },
    "correct": "B",
    "explanation": "İndeksləmə 0-dan başlayır; seçilən elementlərlə hesablama nəticəsi aoma-dir."
  },
  {
    "id": 127,
    "difficulty": "medium",
    "time": 45,
    "question": "Verilmiş kodun nəticəsini tapın.",
    "code": "a = 12\nif a % 2 == 0:\n    if a % 5 == 0:\n        c = 1\n    else:\n        c = 2\nelse:\n    c = 3\nprint(c)",
    "options": {
      "A": "3",
      "B": "1",
      "C": "2",
      "D": "4"
    },
    "correct": "C",
    "explanation": "Şərt yoxlanılır, yalnız uyğun blok işləyir və 2 çap edilir."
  },
  {
    "id": 128,
    "difficulty": "medium",
    "time": 45,
    "question": "Kodun icrasından sonra hansı nəticə alınacaq?",
    "code": "s = 0\nfor i in range(5, 0, -2):\n    s += i\nprint(s)",
    "options": {
      "A": "10",
      "B": "8",
      "C": "18",
      "D": "9"
    },
    "correct": "D",
    "explanation": "Qısaldılmış mənimsətmə əməliyyatları ardıcıl tətbiq edilir; son nəticə 9-dir."
  },
  {
    "id": 129,
    "difficulty": "medium",
    "time": 45,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "a = [3, 5, 7]\nprint(a[0] * a[2] - a[1])",
    "options": {
      "A": "16",
      "B": "17",
      "C": "15",
      "D": "32"
    },
    "correct": "A",
    "explanation": "İndeksləmə 0-dan başlayır; seçilən elementlərlə hesablama nəticəsi 16-dir."
  },
  {
    "id": 130,
    "difficulty": "medium",
    "time": 45,
    "question": "Kodun çıxış qiymətini müəyyən edin.",
    "code": "s = \"məlumat\"\nprint(s.find(\"m\") + s.find(\"a\"))",
    "options": {
      "A": "6",
      "B": "5",
      "C": "4",
      "D": "10"
    },
    "correct": "B",
    "explanation": "Əmrlər ardıcıl icra olunur və ekrana 5 çap edilir."
  },
  {
    "id": 131,
    "difficulty": "medium",
    "time": 45,
    "question": "Verilmiş kodun nəticəsini tapın.",
    "code": "a = [10, 20, 30]\nb = a[1:]\nprint(len(b) + sum(b) // 10)",
    "options": {
      "A": "8",
      "B": "6",
      "C": "7",
      "D": "14"
    },
    "correct": "C",
    "explanation": "len() uzunluğu hesablayır, indekslər isə 0-dan başladığı üçün nəticə 7 alınır."
  },
  {
    "id": 132,
    "difficulty": "medium",
    "time": 45,
    "question": "Kodun icrasından sonra hansı nəticə alınacaq?",
    "code": "def f(x):\n    return x % 10 + x // 10\n\nprint(f(68) * 2)",
    "options": {
      "A": "29",
      "B": "27",
      "C": "56",
      "D": "28"
    },
    "correct": "D",
    "explanation": "Funksiya daxilində hesablanan qiymət return ilə qaytarılır; yekun nəticə 28-dir."
  },
  {
    "id": 133,
    "difficulty": "medium",
    "time": 45,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "a = 0\nfor i in range(1, 8):\n    if i % 3 == 0:\n        a += i * 2\n    else:\n        a += 1\nprint(a)",
    "options": {
      "A": "23",
      "B": "24",
      "C": "22",
      "D": "46"
    },
    "correct": "A",
    "explanation": "Qısaldılmış mənimsətmə əməliyyatları ardıcıl tətbiq edilir; son nəticə 23-dir."
  },
  {
    "id": 134,
    "difficulty": "medium",
    "time": 45,
    "question": "Kodun çıxış qiymətini müəyyən edin.",
    "code": "a = [\"bir\", \"iki\", \"uc\"]\nfor i in range(len(a)):\n    a[i] = len(a[i])\nprint(sum(a))",
    "options": {
      "A": "9",
      "B": "8",
      "C": "7",
      "D": "16"
    },
    "correct": "B",
    "explanation": "Siyahı yeniləndikdən sonra sum() elementlərin cəmini hesablayır; nəticə 8-dir."
  },
  {
    "id": 135,
    "difficulty": "medium",
    "time": 45,
    "question": "Verilmiş kodun nəticəsini tapın.",
    "code": "s = \"AZERBAYCAN\"\nprint(s[1:4] + s[7:])",
    "options": {
      "A": "ZERBAYCAN",
      "B": "AZERCAN",
      "C": "ZERCAN",
      "D": "BAYCAN"
    },
    "correct": "C",
    "explanation": "İndeksləmə 0-dan başlayır; seçilən elementlərlə hesablama nəticəsi ZERCAN-dir."
  },
  {
    "id": 136,
    "difficulty": "medium",
    "time": 45,
    "question": "Kodun icrasından sonra hansı nəticə alınacaq?",
    "code": "a = 4\nb = 6\nprint(a, b, sep=\":\", end=\"!\")",
    "options": {
      "A": "4 6!",
      "B": "4:6",
      "C": "4+6!",
      "D": "4:6!"
    },
    "correct": "D",
    "explanation": "Dəyişənlərə verilən qiymətlər yenilənir və çap zamanı 4:6! görünür."
  },
  {
    "id": 137,
    "difficulty": "medium",
    "time": 45,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "a = [2, 4, 6, 8]\ndel a[2]\nprint(sum(a))",
    "options": {
      "A": "14",
      "B": "15",
      "C": "13",
      "D": "28"
    },
    "correct": "A",
    "explanation": "İndeksləmə 0-dan başlayır; seçilən elementlərlə hesablama nəticəsi 14-dir."
  },
  {
    "id": 138,
    "difficulty": "medium",
    "time": 45,
    "question": "Kodun çıxış qiymətini müəyyən edin.",
    "code": "s = \"kitab kitab\"\nprint(s.count(\"kitab\"))",
    "options": {
      "A": "3",
      "B": "2",
      "C": "1",
      "D": "4"
    },
    "correct": "B",
    "explanation": "Əmrlər ardıcıl icra olunur və ekrana 2 çap edilir."
  },
  {
    "id": 139,
    "difficulty": "medium",
    "time": 45,
    "question": "Verilmiş kodun nəticəsini tapın.",
    "code": "a = 5\nb = 2\nc = (a + b) ** 2 - a * b\nprint(c)",
    "options": {
      "A": "40",
      "B": "38",
      "C": "39",
      "D": "78"
    },
    "correct": "C",
    "explanation": "Vurma əməliyyatından sonra yekun nəticə 39 olur."
  },
  {
    "id": 140,
    "difficulty": "medium",
    "time": 45,
    "question": "Kodun icrasından sonra hansı nəticə alınacaq?",
    "code": "n = 1234\ns = 0\nfor i in str(n):\n    s += int(i)\nprint(s)",
    "options": {
      "A": "11",
      "B": "9",
      "C": "20",
      "D": "10"
    },
    "correct": "D",
    "explanation": "Qiymətlər sətirə çevrilir və sətir kimi birləşdirilir; nəticə 10 olur."
  },
  {
    "id": 141,
    "difficulty": "medium",
    "time": 45,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "a = []\nfor i in range(2, 9, 2):\n    a.append(i + 1)\nprint(a)",
    "options": {
      "A": "[3, 5, 7, 9]",
      "B": "[2, 4, 6, 8]",
      "C": "[3, 5, 7]",
      "D": "[3, 6, 9]"
    },
    "correct": "A",
    "explanation": "Dövr elementləri ardıcıl emal edir və sonda [3, 5, 7, 9] çap olunur."
  },
  {
    "id": 142,
    "difficulty": "medium",
    "time": 45,
    "question": "Kodun çıxış qiymətini müəyyən edin.",
    "code": "s = \"abab\"\nt = s.replace(\"a\", \"x\")\nprint(t.count(\"x\") + t.find(\"b\"))",
    "options": {
      "A": "4",
      "B": "3",
      "C": "2",
      "D": "6"
    },
    "correct": "B",
    "explanation": "Əmrlər ardıcıl icra olunur və ekrana 3 çap edilir."
  },
  {
    "id": 143,
    "difficulty": "medium",
    "time": 45,
    "question": "Verilmiş kodun nəticəsini tapın.",
    "code": "def f(a, b):\n    if a > b:\n        return a - b\n    else:\n        return a + b\n\nprint(f(3, 5) + f(8, 2))",
    "options": {
      "A": "15",
      "B": "13",
      "C": "14",
      "D": "28"
    },
    "correct": "C",
    "explanation": "Funksiya daxilində hesablanan qiymət return ilə qaytarılır; yekun nəticə 14-dir."
  },
  {
    "id": 144,
    "difficulty": "medium",
    "time": 45,
    "question": "Kodun icrasından sonra hansı nəticə alınacaq?",
    "code": "a = [5, 2, 9, 2]\na.sort()\na.reverse()\nprint(a[1])",
    "options": {
      "A": "6",
      "B": "4",
      "C": "10",
      "D": "5"
    },
    "correct": "D",
    "explanation": "İndeksləmə 0-dan başlayır; seçilən elementlərlə hesablama nəticəsi 5-dir."
  },
  {
    "id": 145,
    "difficulty": "medium",
    "time": 45,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "i = 1\ns = \"\"\nwhile i < 5:\n    s += str(i)\n    i += 1\nprint(s)",
    "options": {
      "A": "1234",
      "B": "1235",
      "C": "1233",
      "D": "2468"
    },
    "correct": "A",
    "explanation": "Qiymətlər sətirə çevrilir və sətir kimi birləşdirilir; nəticə 1234 olur."
  },
  {
    "id": 146,
    "difficulty": "medium",
    "time": 45,
    "question": "Kodun çıxış qiymətini müəyyən edin.",
    "code": "a = 16\nif a % 4 == 0 and a % 8 == 0:\n    a = a // 2\nprint(a)",
    "options": {
      "A": "9",
      "B": "8",
      "C": "7",
      "D": "16"
    },
    "correct": "B",
    "explanation": "Məntiqi şərt qiymətləndirilir və uyğun blok icra olunur; nəticə 8-dir."
  },
  {
    "id": 147,
    "difficulty": "medium",
    "time": 45,
    "question": "Verilmiş kodun nəticəsini tapın.",
    "code": "s = 0\nfor i in range(10):\n    if i % 4 == 0:\n        continue\n    s += i\nprint(s)",
    "options": {
      "A": "34",
      "B": "32",
      "C": "33",
      "D": "66"
    },
    "correct": "C",
    "explanation": "Qısaldılmış mənimsətmə əməliyyatları ardıcıl tətbiq edilir; son nəticə 33-dir."
  },
  {
    "id": 148,
    "difficulty": "medium",
    "time": 45,
    "question": "Kodun icrasından sonra hansı nəticə alınacaq?",
    "code": "a = [1, 2]\nb = [3, 4]\nc = a + b\nprint(c[1] + c[3])",
    "options": {
      "A": "7",
      "B": "5",
      "C": "12",
      "D": "6"
    },
    "correct": "D",
    "explanation": "İndeksləmə 0-dan başlayır; seçilən elementlərlə hesablama nəticəsi 6-dir."
  },
  {
    "id": 149,
    "difficulty": "medium",
    "time": 45,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "s = \"data\"\nprint(s.upper().count(\"A\"))",
    "options": {
      "A": "2",
      "B": "3",
      "C": "1",
      "D": "4"
    },
    "correct": "A",
    "explanation": "Əmrlər ardıcıl icra olunur və ekrana 2 çap edilir."
  },
  {
    "id": 150,
    "difficulty": "medium",
    "time": 45,
    "question": "Kodun çıxış qiymətini müəyyən edin.",
    "code": "a = 3\nb = 7\na, b = b + 1, a + 2\nprint(a * b)",
    "options": {
      "A": "41",
      "B": "40",
      "C": "39",
      "D": "80"
    },
    "correct": "B",
    "explanation": "Dəyişənlərə verilən qiymətlər yenilənir və çap zamanı 40 görünür."
  },
  {
    "id": 151,
    "difficulty": "medium",
    "time": 45,
    "question": "Verilmiş kodun nəticəsini tapın.",
    "code": "n = 48\nwhile n % 2 == 0:\n    n = n // 2\nprint(n)",
    "options": {
      "A": "4",
      "B": "2",
      "C": "3",
      "D": "6"
    },
    "correct": "C",
    "explanation": "while dövrü şərt ödənildiyi müddətdə işləyir; son qiymət 3 olur."
  },
  {
    "id": 152,
    "difficulty": "medium",
    "time": 45,
    "question": "Kodun icrasından sonra hansı nəticə alınacaq?",
    "code": "a = [3, 1, 4]\nfor i in range(len(a)):\n    a[i] = a[i] * 2\nprint(max(a))",
    "options": {
      "A": "9",
      "B": "7",
      "C": "16",
      "D": "8"
    },
    "correct": "D",
    "explanation": "Dövr elementləri ardıcıl emal edir və sonda 8 çap olunur."
  },
  {
    "id": 153,
    "difficulty": "medium",
    "time": 45,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "s = \"rəqəmsal\"\nprint(s[0:3] + s[5:])",
    "options": {
      "A": "rəqsal",
      "B": "rəqəm",
      "C": "rəqəmsal",
      "D": "salrəq"
    },
    "correct": "A",
    "explanation": "İndeksləmə 0-dan başlayır; seçilən elementlərlə hesablama nəticəsi rəqsal-dir."
  },
  {
    "id": 154,
    "difficulty": "medium",
    "time": 45,
    "question": "Kodun çıxış qiymətini müəyyən edin.",
    "code": "a = 9\nb = 4\nif a // b == 2:\n    c = a % b\nelse:\n    c = a + b\nprint(c)",
    "options": {
      "A": "2",
      "B": "1",
      "C": "0",
      "D": "4"
    },
    "correct": "B",
    "explanation": "Şərt yoxlanılır, yalnız uyğun blok işləyir və 1 çap edilir."
  },
  {
    "id": 155,
    "difficulty": "medium",
    "time": 45,
    "question": "Verilmiş kodun nəticəsini tapın.",
    "code": "s = 0\nfor i in range(1, 6):\n    s += i % 2\nprint(s)",
    "options": {
      "A": "4",
      "B": "2",
      "C": "3",
      "D": "6"
    },
    "correct": "C",
    "explanation": "Qısaldılmış mənimsətmə əməliyyatları ardıcıl tətbiq edilir; son nəticə 3-dir."
  },
  {
    "id": 156,
    "difficulty": "medium",
    "time": 45,
    "question": "Kodun icrasından sonra hansı nəticə alınacaq?",
    "code": "def g(x):\n    return x * 2\n\ndef f(x):\n    return g(x) + x\n\nprint(f(4))",
    "options": {
      "A": "13",
      "B": "11",
      "C": "24",
      "D": "12"
    },
    "correct": "D",
    "explanation": "Funksiya daxilində hesablanan qiymət return ilə qaytarılır; yekun nəticə 12-dir."
  },
  {
    "id": 157,
    "difficulty": "medium",
    "time": 45,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "a = \"2025\"\nprint(int(a[0]) + int(a[3]))",
    "options": {
      "A": "7",
      "B": "8",
      "C": "6",
      "D": "14"
    },
    "correct": "A",
    "explanation": "İndeksləmə 0-dan başlayır; seçilən elementlərlə hesablama nəticəsi 7-dir."
  },
  {
    "id": 158,
    "difficulty": "medium",
    "time": 45,
    "question": "Kodun çıxış qiymətini müəyyən edin.",
    "code": "a = [1, 3, 5]\na.insert(2, 4)\nprint(a[1] + a[2])",
    "options": {
      "A": "8",
      "B": "7",
      "C": "6",
      "D": "14"
    },
    "correct": "B",
    "explanation": "İndeksləmə 0-dan başlayır; seçilən elementlərlə hesablama nəticəsi 7-dir."
  },
  {
    "id": 159,
    "difficulty": "medium",
    "time": 45,
    "question": "Verilmiş kodun nəticəsini tapın.",
    "code": "s = \"sual\"\nprint(s.capitalize() + str(len(s)))",
    "options": {
      "A": "sual4",
      "B": "Sual",
      "C": "Sual4",
      "D": "4Sual"
    },
    "correct": "C",
    "explanation": "Qiymətlər sətirə çevrilir və sətir kimi birləşdirilir; nəticə Sual4 olur."
  },
  {
    "id": 160,
    "difficulty": "medium",
    "time": 45,
    "question": "Kodun icrasından sonra hansı nəticə alınacaq?",
    "code": "a = [2, 2, 3, 2]\nprint(a.count(2) * len(a))",
    "options": {
      "A": "13",
      "B": "11",
      "C": "24",
      "D": "12"
    },
    "correct": "D",
    "explanation": "len() uzunluğu hesablayır, indekslər isə 0-dan başladığı üçün nəticə 12 alınır."
  },
  {
    "id": 161,
    "difficulty": "medium",
    "time": 45,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "n = 35\nif n % 5 == 0 or n % 7 == 0:\n    print(n // 5)\nelse:\n    print(0)",
    "options": {
      "A": "7",
      "B": "8",
      "C": "6",
      "D": "14"
    },
    "correct": "A",
    "explanation": "Məntiqi şərt qiymətləndirilir və uyğun blok icra olunur; nəticə 7-dir."
  },
  {
    "id": 162,
    "difficulty": "medium",
    "time": 45,
    "question": "Kodun çıxış qiymətini müəyyən edin.",
    "code": "s = []\nfor i in range(3):\n    s.append(i)\n    s.append(i + 1)\nprint(len(s))",
    "options": {
      "A": "7",
      "B": "6",
      "C": "5",
      "D": "12"
    },
    "correct": "B",
    "explanation": "Dövr elementləri ardıcıl emal edir və sonda 6 çap olunur."
  },
  {
    "id": 163,
    "difficulty": "medium",
    "time": 45,
    "question": "Verilmiş kodun nəticəsini tapın.",
    "code": "a = 100\nfor i in range(3):\n    a = a // 2\nprint(a)",
    "options": {
      "A": "13",
      "B": "11",
      "C": "12",
      "D": "24"
    },
    "correct": "C",
    "explanation": "Dövr elementləri ardıcıl emal edir və sonda 12 çap olunur."
  },
  {
    "id": 164,
    "difficulty": "medium",
    "time": 45,
    "question": "Kodun icrasından sonra hansı nəticə alınacaq?",
    "code": "s = \"robot\"\nt = s[1:]\nprint(t.find(\"o\") + len(t))",
    "options": {
      "A": "5",
      "B": "3",
      "C": "8",
      "D": "4"
    },
    "correct": "D",
    "explanation": "len() uzunluğu hesablayır, indekslər isə 0-dan başladığı üçün nəticə 4 alınır."
  },
  {
    "id": 165,
    "difficulty": "medium",
    "time": 45,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "a = [9, 8, 7]\nb = a[0]\na[0] = a[2]\na[2] = b\nprint(a)",
    "options": {
      "A": "[7, 8, 9]",
      "B": "[9, 8, 7]",
      "C": "[8, 7, 9]",
      "D": "[7, 9, 8]"
    },
    "correct": "A",
    "explanation": "İndeksləmə 0-dan başlayır; seçilən elementlərlə hesablama nəticəsi [7, 8, 9]-dir."
  },
  {
    "id": 166,
    "difficulty": "medium",
    "time": 45,
    "question": "Kodun çıxış qiymətini müəyyən edin.",
    "code": "def h(s):\n    return s.count(\"a\") + s.find(\"b\")\n\nprint(h(\"abaka\"))",
    "options": {
      "A": "5",
      "B": "4",
      "C": "3",
      "D": "8"
    },
    "correct": "B",
    "explanation": "Funksiya daxilində hesablanan qiymət return ilə qaytarılır; yekun nəticə 4-dir."
  },
  {
    "id": 167,
    "difficulty": "medium",
    "time": 45,
    "question": "Verilmiş kodun nəticəsini tapın.",
    "code": "a = 2\nb = 3\nc = 4\nprint(a * b + c ** 2)",
    "options": {
      "A": "23",
      "B": "21",
      "C": "22",
      "D": "44"
    },
    "correct": "C",
    "explanation": "Vurma əməliyyatından sonra yekun nəticə 22 olur."
  },
  {
    "id": 168,
    "difficulty": "medium",
    "time": 45,
    "question": "Kodun icrasından sonra hansı nəticə alınacaq?",
    "code": "s = \"python\"\nk = \"\"\nfor i in range(3):\n    k += s[i]\nprint(k)",
    "options": {
      "A": "py",
      "B": "yth",
      "C": "ptn",
      "D": "pyt"
    },
    "correct": "D",
    "explanation": "Qısaldılmış mənimsətmə əməliyyatları ardıcıl tətbiq edilir; son nəticə pyt-dir."
  },
  {
    "id": 169,
    "difficulty": "medium",
    "time": 45,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "a = [3, 5, 6]\nfor i in range(1, len(a)):\n    a[i] += a[i - 1]\nprint(a)",
    "options": {
      "A": "[3, 8, 14]",
      "B": "[3, 5, 6]",
      "C": "[3, 8, 11]",
      "D": "[6, 10, 12]"
    },
    "correct": "A",
    "explanation": "Qısaldılmış mənimsətmə əməliyyatları ardıcıl tətbiq edilir; son nəticə [3, 8, 14]-dir."
  },
  {
    "id": 170,
    "difficulty": "medium",
    "time": 45,
    "question": "Kodun çıxış qiymətini müəyyən edin.",
    "code": "n = 246\na = str(n)\nprint(int(a[0]) * int(a[1]) + int(a[2]))",
    "options": {
      "A": "15",
      "B": "14",
      "C": "13",
      "D": "28"
    },
    "correct": "B",
    "explanation": "Qiymətlər sətirə çevrilir və sətir kimi birləşdirilir; nəticə 14 olur."
  },
  {
    "id": 171,
    "difficulty": "medium",
    "time": 45,
    "question": "Verilmiş kodun nəticəsini tapın.",
    "code": "a = []\nfor i in range(1, 10):\n    if i > 5:\n        break\n    a.append(i)\nprint(sum(a))",
    "options": {
      "A": "16",
      "B": "14",
      "C": "15",
      "D": "30"
    },
    "correct": "C",
    "explanation": "Dövr verilən aralıqda işləyir, şərtə uyğun qiymətlər nəzərə alınır və nəticə 15 olur."
  },
  {
    "id": 172,
    "difficulty": "medium",
    "time": 45,
    "question": "Kodun icrasından sonra hansı nəticə alınacaq?",
    "code": "s = 0\nfor i in range(1, 8):\n    if i % 2 == 0:\n        continue\n    s += i\nprint(s)",
    "options": {
      "A": "17",
      "B": "15",
      "C": "32",
      "D": "16"
    },
    "correct": "D",
    "explanation": "Qısaldılmış mənimsətmə əməliyyatları ardıcıl tətbiq edilir; son nəticə 16-dir."
  },
  {
    "id": 173,
    "difficulty": "medium",
    "time": 45,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "a = 11\nif a > 10:\n    a -= 3\nif a % 2 == 0:\n    a *= 2\nprint(a)",
    "options": {
      "A": "16",
      "B": "17",
      "C": "15",
      "D": "32"
    },
    "correct": "A",
    "explanation": "Qısaldılmış mənimsətmə əməliyyatları ardıcıl tətbiq edilir; son nəticə 16-dir."
  },
  {
    "id": 174,
    "difficulty": "medium",
    "time": 45,
    "question": "Kodun çıxış qiymətini müəyyən edin.",
    "code": "def f(a, b):\n    return str(a + b) + str(a * b)\n\nprint(f(2, 5))",
    "options": {
      "A": "711",
      "B": "710",
      "C": "709",
      "D": "1420"
    },
    "correct": "B",
    "explanation": "Qiymətlər sətirə çevrilir və sətir kimi birləşdirilir; nəticə 710 olur."
  },
  {
    "id": 175,
    "difficulty": "medium",
    "time": 45,
    "question": "Verilmiş kodun nəticəsini tapın.",
    "code": "a = [1, 4, 9]\nprint(int(sum(a) / len(a)))",
    "options": {
      "A": "5",
      "B": "3",
      "C": "4",
      "D": "8"
    },
    "correct": "C",
    "explanation": "len() uzunluğu hesablayır, indekslər isə 0-dan başladığı üçün nəticə 4 alınır."
  },
  {
    "id": 176,
    "difficulty": "medium",
    "time": 45,
    "question": "Kodun icrasından sonra hansı nəticə alınacaq?",
    "code": "s = \"Azerbaycan\"\nprint(s.lower().find(\"b\"))",
    "options": {
      "A": "5",
      "B": "3",
      "C": "8",
      "D": "4"
    },
    "correct": "D",
    "explanation": "Əmrlər ardıcıl icra olunur və ekrana 4 çap edilir."
  },
  {
    "id": 177,
    "difficulty": "medium",
    "time": 45,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "a = 0\nb = 1\nfor i in range(4):\n    a, b = b, a + b\nprint(a)",
    "options": {
      "A": "3",
      "B": "4",
      "C": "2",
      "D": "6"
    },
    "correct": "A",
    "explanation": "Dövr elementləri ardıcıl emal edir və sonda 3 çap olunur."
  },
  {
    "id": 178,
    "difficulty": "medium",
    "time": 45,
    "question": "Kodun çıxış qiymətini müəyyən edin.",
    "code": "x = 5\ny = 2\nprint(x // y, x / y)",
    "options": {
      "A": "2.5 2",
      "B": "2 2.5",
      "C": "2 2",
      "D": "2.0 2.5"
    },
    "correct": "B",
    "explanation": "Tam bölmə və qalıq əməliyyatları tətbiq olunur; nəticə 2 2.5-dir."
  },
  {
    "id": 179,
    "difficulty": "medium",
    "time": 45,
    "question": "Verilmiş kodun nəticəsini tapın.",
    "code": "a = [3, 6, 9, 12]\nb = a[1:3]\nprint(sum(b))",
    "options": {
      "A": "16",
      "B": "14",
      "C": "15",
      "D": "30"
    },
    "correct": "C",
    "explanation": "İndeksləmə 0-dan başlayır; seçilən elementlərlə hesablama nəticəsi 15-dir."
  },
  {
    "id": 180,
    "difficulty": "medium",
    "time": 45,
    "question": "Kodun icrasından sonra hansı nəticə alınacaq?",
    "code": "s = \"kitab\"\nprint(s[0:2] * 3)",
    "options": {
      "A": "kitkitkit",
      "B": "kik",
      "C": "kitabkitab",
      "D": "kikiki"
    },
    "correct": "D",
    "explanation": "İndeksləmə 0-dan başlayır; seçilən elementlərlə hesablama nəticəsi kikiki-dir."
  },
  {
    "id": 181,
    "difficulty": "medium",
    "time": 45,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "n = 77\nprint(n % 10 == n // 10)",
    "options": {
      "A": "True",
      "B": "False",
      "C": "77",
      "D": "1"
    },
    "correct": "A",
    "explanation": "Tam bölmə və qalıq əməliyyatları tətbiq olunur; nəticə True-dir."
  },
  {
    "id": 182,
    "difficulty": "medium",
    "time": 45,
    "question": "Kodun çıxış qiymətini müəyyən edin.",
    "code": "a = [\"a\", \"bb\", \"ccc\"]\ns = 0\nfor i in a:\n    s += len(i)\nprint(s)",
    "options": {
      "A": "7",
      "B": "6",
      "C": "5",
      "D": "12"
    },
    "correct": "B",
    "explanation": "Qısaldılmış mənimsətmə əməliyyatları ardıcıl tətbiq edilir; son nəticə 6-dir."
  },
  {
    "id": 183,
    "difficulty": "medium",
    "time": 45,
    "question": "Verilmiş kodun nəticəsini tapın.",
    "code": "a = 3\nb = 5\nif a < b and b < 10:\n    print(b - a)\nelse:\n    print(a + b)",
    "options": {
      "A": "3",
      "B": "1",
      "C": "2",
      "D": "4"
    },
    "correct": "C",
    "explanation": "Məntiqi şərt qiymətləndirilir və uyğun blok icra olunur; nəticə 2-dir."
  },
  {
    "id": 184,
    "difficulty": "medium",
    "time": 45,
    "question": "Kodun icrasından sonra hansı nəticə alınacaq?",
    "code": "s = \"qələm\"\na = list(s)\na.remove(\"ə\")\nprint(\"\".join(a))",
    "options": {
      "A": "qələm",
      "B": "qlm",
      "C": "qəm",
      "D": "qləm"
    },
    "correct": "D",
    "explanation": "Əmrlər ardıcıl icra olunur və ekrana qləm çap edilir."
  },
  {
    "id": 185,
    "difficulty": "medium",
    "time": 45,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "def f(x):\n    return x + 2\n\nprint(f(f(3)))",
    "options": {
      "A": "7",
      "B": "8",
      "C": "6",
      "D": "14"
    },
    "correct": "A",
    "explanation": "Funksiya daxilində hesablanan qiymət return ilə qaytarılır; yekun nəticə 7-dir."
  },
  {
    "id": 186,
    "difficulty": "medium",
    "time": 45,
    "question": "Kodun çıxış qiymətini müəyyən edin.",
    "code": "a = 25\nb = 4\nprint(a // b + a % b)",
    "options": {
      "A": "8",
      "B": "7",
      "C": "6",
      "D": "14"
    },
    "correct": "B",
    "explanation": "Tam bölmə və qalıq əməliyyatları tətbiq olunur; nəticə 7-dir."
  },
  {
    "id": 187,
    "difficulty": "medium",
    "time": 45,
    "question": "Verilmiş kodun nəticəsini tapın.",
    "code": "s = 1\nfor i in range(2, 5):\n    s = s + i * s\nprint(s)",
    "options": {
      "A": "61",
      "B": "59",
      "C": "60",
      "D": "120"
    },
    "correct": "C",
    "explanation": "Dövr elementləri ardıcıl emal edir və sonda 60 çap olunur."
  },
  {
    "id": 188,
    "difficulty": "medium",
    "time": 45,
    "question": "Kodun icrasından sonra hansı nəticə alınacaq?",
    "code": "a = \"123\"\nb = list(a)\nb.append(\"4\")\nprint(int(\"\".join(b)))",
    "options": {
      "A": "1235",
      "B": "1233",
      "C": "2468",
      "D": "1234"
    },
    "correct": "D",
    "explanation": "Tip çevirməsindən sonra riyazi əməl yerinə yetirilir və 1234 alınır."
  },
  {
    "id": 189,
    "difficulty": "medium",
    "time": 45,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "x = 8\nif x % 2 == 0:\n    y = x // 2\nif y > 3:\n    y += 5\nprint(y)",
    "options": {
      "A": "9",
      "B": "10",
      "C": "8",
      "D": "18"
    },
    "correct": "A",
    "explanation": "Qısaldılmış mənimsətmə əməliyyatları ardıcıl tətbiq edilir; son nəticə 9-dir."
  },
  {
    "id": 190,
    "difficulty": "medium",
    "time": 45,
    "question": "Kodun çıxış qiymətini müəyyən edin.",
    "code": "a = [1, 2, 3, 4, 5]\nk = 0\nfor i in range(len(a)):\n    if i % 2 == 0:\n        k += a[i]\nprint(k)",
    "options": {
      "A": "10",
      "B": "9",
      "C": "8",
      "D": "18"
    },
    "correct": "B",
    "explanation": "Qısaldılmış mənimsətmə əməliyyatları ardıcıl tətbiq edilir; son nəticə 9-dir."
  },
  {
    "id": 191,
    "difficulty": "medium",
    "time": 45,
    "question": "Verilmiş kodun nəticəsini tapın.",
    "code": "s = \"informatika\"\nprint(s.find(\"a\") + s.count(\"i\"))",
    "options": {
      "A": "9",
      "B": "7",
      "C": "8",
      "D": "16"
    },
    "correct": "C",
    "explanation": "Əmrlər ardıcıl icra olunur və ekrana 8 çap edilir."
  },
  {
    "id": 192,
    "difficulty": "medium",
    "time": 45,
    "question": "Kodun icrasından sonra hansı nəticə alınacaq?",
    "code": "a = 6\nb = 2\nc = 1\nc += a // b\nc *= b + 1\nprint(c)",
    "options": {
      "A": "13",
      "B": "11",
      "C": "24",
      "D": "12"
    },
    "correct": "D",
    "explanation": "Qısaldılmış mənimsətmə əməliyyatları ardıcıl tətbiq edilir; son nəticə 12-dir."
  },
  {
    "id": 193,
    "difficulty": "medium",
    "time": 45,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "def f(a):\n    if a % 3 == 0:\n        return a // 3\n    else:\n        return a + 3\n\nprint(f(9) + f(10))",
    "options": {
      "A": "16",
      "B": "17",
      "C": "15",
      "D": "32"
    },
    "correct": "A",
    "explanation": "Funksiya daxilində hesablanan qiymət return ilə qaytarılır; yekun nəticə 16-dir."
  },
  {
    "id": 194,
    "difficulty": "medium",
    "time": 45,
    "question": "Kodun çıxış qiymətini müəyyən edin.",
    "code": "s = 0\ni = 5\nwhile i > 0:\n    s += i\n    i -= 2\nprint(s)",
    "options": {
      "A": "10",
      "B": "9",
      "C": "8",
      "D": "18"
    },
    "correct": "B",
    "explanation": "Qısaldılmış mənimsətmə əməliyyatları ardıcıl tətbiq edilir; son nəticə 9-dir."
  },
  {
    "id": 195,
    "difficulty": "medium",
    "time": 45,
    "question": "Verilmiş kodun nəticəsini tapın.",
    "code": "a = [2, 3, 4]\nb = []\nfor i in a:\n    b.append(i ** 2)\nprint(sum(b))",
    "options": {
      "A": "30",
      "B": "28",
      "C": "29",
      "D": "58"
    },
    "correct": "C",
    "explanation": "Siyahı yeniləndikdən sonra sum() elementlərin cəmini hesablayır; nəticə 29-dir."
  },
  {
    "id": 196,
    "difficulty": "medium",
    "time": 45,
    "question": "Kodun icrasından sonra hansı nəticə alınacaq?",
    "code": "s = \"salam\"\nprint(s[1:4].upper())",
    "options": {
      "A": "ala",
      "B": "SAL",
      "C": "ALA4",
      "D": "ALA"
    },
    "correct": "D",
    "explanation": "İndeksləmə 0-dan başlayır; seçilən elementlərlə hesablama nəticəsi ALA-dir."
  },
  {
    "id": 197,
    "difficulty": "medium",
    "time": 45,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "a = 4\nb = 9\nif a * 2 >= b:\n    print(a + b)\nelse:\n    print(b - a)",
    "options": {
      "A": "5",
      "B": "6",
      "C": "4",
      "D": "10"
    },
    "correct": "A",
    "explanation": "Şərt yoxlanılır, yalnız uyğun blok işləyir və 5 çap edilir."
  },
  {
    "id": 198,
    "difficulty": "medium",
    "time": 45,
    "question": "Kodun çıxış qiymətini müəyyən edin.",
    "code": "a = list(range(1, 6))\na.remove(3)\nprint(sum(a))",
    "options": {
      "A": "13",
      "B": "12",
      "C": "11",
      "D": "24"
    },
    "correct": "B",
    "explanation": "Əmrlər ardıcıl icra olunur və ekrana 12 çap edilir."
  },
  {
    "id": 199,
    "difficulty": "medium",
    "time": 45,
    "question": "Verilmiş kodun nəticəsini tapın.",
    "code": "def t(a, b):\n    if a > b:\n        return a\n    else:\n        return b\n\nprint(t(3, 8) + t(10, 4))",
    "options": {
      "A": "19",
      "B": "17",
      "C": "18",
      "D": "36"
    },
    "correct": "C",
    "explanation": "Funksiya daxilində hesablanan qiymət return ilə qaytarılır; yekun nəticə 18-dir."
  },
  {
    "id": 200,
    "difficulty": "medium",
    "time": 45,
    "question": "Kodun icrasından sonra hansı nəticə alınacaq?",
    "code": "x = 3\ns = 0\nfor i in range(1, 4):\n    s += x * i\nprint(s)",
    "options": {
      "A": "19",
      "B": "17",
      "C": "36",
      "D": "18"
    },
    "correct": "D",
    "explanation": "Qısaldılmış mənimsətmə əməliyyatları ardıcıl tətbiq edilir; son nəticə 18-dir."
  },
  {
    "id": 201,
    "difficulty": "medium",
    "time": 45,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "a, b = 8, 3\na = a + b * 2\nb = a // b\nprint(a, b)",
    "options": {
      "A": "14 4",
      "B": "11 3",
      "C": "16 5",
      "D": "4 14"
    },
    "correct": "A",
    "explanation": "Tam bölmə və qalıq əməliyyatları tətbiq olunur; nəticə 14 4-dir."
  },
  {
    "id": 202,
    "difficulty": "medium",
    "time": 45,
    "question": "Kodun çıxış qiymətini müəyyən edin.",
    "code": "n = 376\na = n // 100\nb = (n // 10) % 10\nc = n % 10\nprint(a + b * c)",
    "options": {
      "A": "28",
      "B": "45",
      "C": "31",
      "D": "16"
    },
    "correct": "B",
    "explanation": "Tam bölmə və qalıq əməliyyatları tətbiq olunur; nəticə 45-dir."
  },
  {
    "id": 203,
    "difficulty": "medium",
    "time": 45,
    "question": "Kod icra edilərsə hansı nəticə alınacaq?",
    "code": "x = 45\nx = x % 10 * 10 + x // 10\nprint(x + 3)",
    "options": {
      "A": "48",
      "B": "93",
      "C": "57",
      "D": "58"
    },
    "correct": "C",
    "explanation": "Tam bölmə və qalıq əməliyyatları tətbiq olunur; nəticə 57-dir."
  },
  {
    "id": 204,
    "difficulty": "medium",
    "time": 45,
    "question": "Verilmiş kodun nəticəsini tapın.",
    "code": "a = \"12\"\nb = 3\nc = a * b\nprint(c.count(\"1\") + len(c))",
    "options": {
      "A": "6",
      "B": "3",
      "C": "10",
      "D": "9"
    },
    "correct": "D",
    "explanation": "Əmrlər ardıcıl icra olunur və ekrana 9 çap edilir."
  },
  {
    "id": 205,
    "difficulty": "medium",
    "time": 45,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "s = \"informatika\"\na = s[0:5]\nb = s[5:]\nprint(len(a), len(b))",
    "options": {
      "A": "5 6",
      "B": "6 5",
      "C": "5 5",
      "D": "11 0"
    },
    "correct": "A",
    "explanation": "len() uzunluğu hesablayır, indekslər isə 0-dan başladığı üçün nəticə 5 6 alınır."
  },
  {
    "id": 206,
    "difficulty": "medium",
    "time": 45,
    "question": "Kodun çıxış qiymətini müəyyən edin.",
    "code": "s = \"proqramlama\"\na = s.find(\"a\")\nb = s.count(\"m\")\nprint(a + b)",
    "options": {
      "A": "6",
      "B": "7",
      "C": "3",
      "D": "8"
    },
    "correct": "B",
    "explanation": "Əmrlər ardıcıl icra olunur və ekrana 7 çap edilir."
  },
  {
    "id": 207,
    "difficulty": "medium",
    "time": 45,
    "question": "Kod icra edilərsə hansı nəticə alınacaq?",
    "code": "s = \"kitabxana\"\ns = s.replace(\"a\", \"ə\")\nprint(s.count(\"ə\"))",
    "options": {
      "A": "2",
      "B": "4",
      "C": "3",
      "D": "1"
    },
    "correct": "C",
    "explanation": "Əmrlər ardıcıl icra olunur və ekrana 3 çap edilir."
  },
  {
    "id": 208,
    "difficulty": "medium",
    "time": 45,
    "question": "Verilmiş kodun nəticəsini tapın.",
    "code": "s = \"  dərs  \"\ns = s.strip()\nprint(s + str(len(s)))",
    "options": {
      "A": "dərs6",
      "B": "  dərs  4",
      "C": "dərs 4",
      "D": "dərs4"
    },
    "correct": "D",
    "explanation": "Qiymətlər sətirə çevrilir və sətir kimi birləşdirilir; nəticə dərs4 olur."
  },
  {
    "id": 209,
    "difficulty": "medium",
    "time": 45,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "a = [4, 7, 2, 7]\nb = a.count(7) + a.index(2)\nprint(b)",
    "options": {
      "A": "4",
      "B": "3",
      "C": "5",
      "D": "7"
    },
    "correct": "A",
    "explanation": "İndeksləmə 0-dan başlayır; seçilən elementlərlə hesablama nəticəsi 4-dir."
  },
  {
    "id": 210,
    "difficulty": "medium",
    "time": 45,
    "question": "Kodun çıxış qiymətini müəyyən edin.",
    "code": "a = [5, 1, 4]\na.append(2)\na.sort()\nprint(a[1] + a[3])",
    "options": {
      "A": "5",
      "B": "7",
      "C": "6",
      "D": "8"
    },
    "correct": "B",
    "explanation": "İndeksləmə 0-dan başlayır; seçilən elementlərlə hesablama nəticəsi 7-dir."
  },
  {
    "id": 211,
    "difficulty": "medium",
    "time": 45,
    "question": "Kod icra edilərsə hansı nəticə alınacaq?",
    "code": "a = [\"ab\", \"cd\", \"ef\"]\nb = \"-\".join(a)\nprint(len(b))",
    "options": {
      "A": "6",
      "B": "7",
      "C": "8",
      "D": "9"
    },
    "correct": "C",
    "explanation": "len() uzunluğu hesablayır, indekslər isə 0-dan başladığı üçün nəticə 8 alınır."
  },
  {
    "id": 212,
    "difficulty": "medium",
    "time": 45,
    "question": "Verilmiş kodun nəticəsini tapın.",
    "code": "a = \"A,B,C,D\"\nb = a.split(\",\")\nprint(b[1] + b[3])",
    "options": {
      "A": "AB",
      "B": "CD",
      "C": "bd",
      "D": "BD"
    },
    "correct": "D",
    "explanation": "İndeksləmə 0-dan başlayır; seçilən elementlərlə hesablama nəticəsi BD-dir."
  },
  {
    "id": 213,
    "difficulty": "medium",
    "time": 45,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "a = [10, 20, 30, 40]\ndel a[1]\na.insert(1, 5)\nprint(sum(a))",
    "options": {
      "A": "85",
      "B": "100",
      "C": "65",
      "D": "75"
    },
    "correct": "A",
    "explanation": "İndeksləmə 0-dan başlayır; seçilən elementlərlə hesablama nəticəsi 85-dir."
  },
  {
    "id": 214,
    "difficulty": "medium",
    "time": 45,
    "question": "Kodun çıxış qiymətini müəyyən edin.",
    "code": "a = [3, 6, 9]\nb = a\nb[1] = 4\nprint(sum(a))",
    "options": {
      "A": "18",
      "B": "16",
      "C": "22",
      "D": "17"
    },
    "correct": "B",
    "explanation": "İndeksləmə 0-dan başlayır; seçilən elementlərlə hesablama nəticəsi 16-dir."
  },
  {
    "id": 215,
    "difficulty": "medium",
    "time": 45,
    "question": "Kod icra edilərsə hansı nəticə alınacaq?",
    "code": "a = list(\"sual\")\na.reverse()\nb = \"\".join(a)\nprint(b[1:3])",
    "options": {
      "A": "la",
      "B": "sua",
      "C": "au",
      "D": "AU"
    },
    "correct": "C",
    "explanation": "İndeksləmə 0-dan başlayır; seçilən elementlərlə hesablama nəticəsi au-dir."
  },
  {
    "id": 216,
    "difficulty": "medium",
    "time": 45,
    "question": "Verilmiş kodun nəticəsini tapın.",
    "code": "a = [\"2\", \"4\", \"6\"]\nb = int(\"\".join(a[0:2]))\nprint(b + int(a[2]))",
    "options": {
      "A": "246",
      "B": "12",
      "C": "31",
      "D": "30"
    },
    "correct": "D",
    "explanation": "İndeksləmə 0-dan başlayır; seçilən elementlərlə hesablama nəticəsi 30-dir."
  },
  {
    "id": 217,
    "difficulty": "medium",
    "time": 45,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "a = \"alqoritm\"\nb = a[2:6]\nprint(b.upper())",
    "options": {
      "A": "QORI",
      "B": "ALQO",
      "C": "ORİT",
      "D": "qori"
    },
    "correct": "A",
    "explanation": "İndeksləmə 0-dan başlayır; seçilən elementlərlə hesablama nəticəsi QORI-dir."
  },
  {
    "id": 218,
    "difficulty": "medium",
    "time": 45,
    "question": "Kodun çıxış qiymətini müəyyən edin.",
    "code": "a = \"Python dərsi\"\nb = a.find(\"d\")\nc = a[:b]\nprint(len(c.strip()))",
    "options": {
      "A": "7",
      "B": "6",
      "C": "5",
      "D": "11"
    },
    "correct": "B",
    "explanation": "len() uzunluğu hesablayır, indekslər isə 0-dan başladığı üçün nəticə 6 alınır."
  },
  {
    "id": 219,
    "difficulty": "medium",
    "time": 45,
    "question": "Kod icra edilərsə hansı nəticə alınacaq?",
    "code": "a = 64\nb = a // 8\nc = a % 7\nprint(b * c)",
    "options": {
      "A": "16",
      "B": "32",
      "C": "8",
      "D": "9"
    },
    "correct": "C",
    "explanation": "Tam bölmə və qalıq əməliyyatları tətbiq olunur; nəticə 8-dir."
  },
  {
    "id": 220,
    "difficulty": "medium",
    "time": 45,
    "question": "Verilmiş kodun nəticəsini tapın.",
    "code": "a, b, c = 2, 3, 4\na, b = b, a + c\nprint(a * b - c)",
    "options": {
      "A": "10",
      "B": "12",
      "C": "15",
      "D": "14"
    },
    "correct": "D",
    "explanation": "Dəyişənlərə verilən qiymətlər yenilənir və çap zamanı 14 görünür."
  },
  {
    "id": 221,
    "difficulty": "medium",
    "time": 45,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "a = 18\nif a % 2 == 0 and a % 3 == 0:\n    print(a // 3)\nelse:\n    print(a + 3)",
    "options": {
      "A": "6",
      "B": "9",
      "C": "21",
      "D": "3"
    },
    "correct": "A",
    "explanation": "Məntiqi şərt qiymətləndirilir və uyğun blok icra olunur; nəticə 6-dir."
  },
  {
    "id": 222,
    "difficulty": "medium",
    "time": 45,
    "question": "Kodun çıxış qiymətini müəyyən edin.",
    "code": "x = 7\nif x > 10:\n    y = x - 2\nelif x > 5:\n    y = x * 2\nelse:\n    y = x + 2\nprint(y)",
    "options": {
      "A": "9",
      "B": "14",
      "C": "5",
      "D": "12"
    },
    "correct": "B",
    "explanation": "Şərt yoxlanılır, yalnız uyğun blok işləyir və 14 çap edilir."
  },
  {
    "id": 223,
    "difficulty": "medium",
    "time": 45,
    "question": "Kod icra edilərsə hansı nəticə alınacaq?",
    "code": "a, b = 5, 8\nif a * 2 > b:\n    c = a + b\nelse:\n    c = b - a\nprint(c)",
    "options": {
      "A": "3",
      "B": "10",
      "C": "13",
      "D": "8"
    },
    "correct": "C",
    "explanation": "Şərt yoxlanılır, yalnız uyğun blok işləyir və 13 çap edilir."
  },
  {
    "id": 224,
    "difficulty": "medium",
    "time": 45,
    "question": "Verilmiş kodun nəticəsini tapın.",
    "code": "s = \"məktəb\"\nif s.count(\"ə\") == 2:\n    print(s[0:3])\nelse:\n    print(s[3:])",
    "options": {
      "A": "təb",
      "B": "məktəb",
      "C": "ktə",
      "D": "mək"
    },
    "correct": "D",
    "explanation": "Şərt yoxlanılır, yalnız uyğun blok işləyir və mək çap edilir."
  },
  {
    "id": 225,
    "difficulty": "medium",
    "time": 45,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "a = [2, 4, 6]\nif sum(a) > 10:\n    a.append(8)\nelse:\n    a.append(1)\nprint(len(a), sum(a))",
    "options": {
      "A": "4 20",
      "B": "3 12",
      "C": "4 13",
      "D": "4 18"
    },
    "correct": "A",
    "explanation": "Şərt yoxlanılır, yalnız uyğun blok işləyir və 4 20 çap edilir."
  },
  {
    "id": 226,
    "difficulty": "medium",
    "time": 45,
    "question": "Kodun çıxış qiymətini müəyyən edin.",
    "code": "a = 9\nif a % 2 == 0:\n    b = a // 2\nelif a % 3 == 0:\n    b = a + 3\nelse:\n    b = a - 1\nprint(b)",
    "options": {
      "A": "4",
      "B": "12",
      "C": "8",
      "D": "9"
    },
    "correct": "B",
    "explanation": "Şərt yoxlanılır, yalnız uyğun blok işləyir və 12 çap edilir."
  },
  {
    "id": 227,
    "difficulty": "medium",
    "time": 45,
    "question": "Kod icra edilərsə hansı nəticə alınacaq?",
    "code": "a, b = 4, 4\nif a != b:\n    c = a + b\nelse:\n    c = a * b\nprint(c + 1)",
    "options": {
      "A": "8",
      "B": "16",
      "C": "17",
      "D": "9"
    },
    "correct": "C",
    "explanation": "Şərt yoxlanılır, yalnız uyğun blok işləyir və 17 çap edilir."
  },
  {
    "id": 228,
    "difficulty": "medium",
    "time": 45,
    "question": "Verilmiş kodun nəticəsini tapın.",
    "code": "x = 12\nif x < 10 or x % 5 == 2:\n    print(\"A\")\nelif x % 3 == 0:\n    print(\"B\")\nelse:\n    print(\"C\")",
    "options": {
      "A": "B",
      "B": "C",
      "C": "12",
      "D": "A"
    },
    "correct": "D",
    "explanation": "Məntiqi şərt qiymətləndirilir və uyğun blok icra olunur; nəticə A-dir."
  },
  {
    "id": 229,
    "difficulty": "medium",
    "time": 45,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "a = \"test\"\nif \"e\" in a and len(a) == 4:\n    print(a.replace(\"t\", \"T\"))\nelse:\n    print(a.upper())",
    "options": {
      "A": "TesT",
      "B": "TEST",
      "C": "test",
      "D": "TseT"
    },
    "correct": "A",
    "explanation": "Məntiqi şərt qiymətləndirilir və uyğun blok icra olunur; nəticə TesT-dir."
  },
  {
    "id": 230,
    "difficulty": "medium",
    "time": 45,
    "question": "Kodun çıxış qiymətini müəyyən edin.",
    "code": "a = [5, 10, 15]\nif max(a) - min(a) == 10:\n    print(a[0] + a[2])\nelse:\n    print(sum(a))",
    "options": {
      "A": "30",
      "B": "20",
      "C": "10",
      "D": "15"
    },
    "correct": "B",
    "explanation": "Şərt yoxlanılır, yalnız uyğun blok işləyir və 20 çap edilir."
  },
  {
    "id": 231,
    "difficulty": "medium",
    "time": 45,
    "question": "Kod icra edilərsə hansı nəticə alınacaq?",
    "code": "a = 6\nb = 2\nif a // b == 3:\n    b = b + a\nelse:\n    b = a - b\nprint(b)",
    "options": {
      "A": "4",
      "B": "6",
      "C": "8",
      "D": "3"
    },
    "correct": "C",
    "explanation": "Şərt yoxlanılır, yalnız uyğun blok işləyir və 8 çap edilir."
  },
  {
    "id": 232,
    "difficulty": "medium",
    "time": 45,
    "question": "Verilmiş kodun nəticəsini tapın.",
    "code": "s = \"bilik\"\nif s.find(\"l\") > s.find(\"b\"):\n    print(s[1:4])\nelse:\n    print(s[0:2])",
    "options": {
      "A": "bi",
      "B": "lik",
      "C": "bili",
      "D": "ili"
    },
    "correct": "D",
    "explanation": "Şərt yoxlanılır, yalnız uyğun blok işləyir və ili çap edilir."
  },
  {
    "id": 233,
    "difficulty": "medium",
    "time": 45,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "a = 25\nif a % 10 > a // 10:\n    print(\"son\")\nelse:\n    print(\"ilk\")",
    "options": {
      "A": "son",
      "B": "ilk",
      "C": "25",
      "D": "son ilk"
    },
    "correct": "A",
    "explanation": "Şərt yoxlanılır, yalnız uyğun blok işləyir və son çap edilir."
  },
  {
    "id": 234,
    "difficulty": "medium",
    "time": 45,
    "question": "Kodun çıxış qiymətini müəyyən edin.",
    "code": "a = 14\nif not a % 2 == 1:\n    print(a // 2)\nelse:\n    print(a * 2)",
    "options": {
      "A": "28",
      "B": "7",
      "C": "14",
      "D": "0"
    },
    "correct": "B",
    "explanation": "Məntiqi şərt qiymətləndirilir və uyğun blok icra olunur; nəticə 7-dir."
  },
  {
    "id": 235,
    "difficulty": "medium",
    "time": 45,
    "question": "Kod icra edilərsə hansı nəticə alınacaq?",
    "code": "a = [\"a\", \"bb\", \"ccc\"]\nif len(a[1]) + len(a[2]) > 4:\n    print(a[0] + a[2])\nelse:\n    print(a[1])",
    "options": {
      "A": "bb",
      "B": "ab",
      "C": "accc",
      "D": "ccc"
    },
    "correct": "C",
    "explanation": "Şərt yoxlanılır, yalnız uyğun blok işləyir və accc çap edilir."
  },
  {
    "id": 236,
    "difficulty": "medium",
    "time": 45,
    "question": "Verilmiş kodun nəticəsini tapın.",
    "code": "a, b = 3, 9\nif b % a == 0:\n    c = b // a\n    if c > 2:\n        c = c + a\nelse:\n    c = a + b\nprint(c)",
    "options": {
      "A": "3",
      "B": "9",
      "C": "12",
      "D": "6"
    },
    "correct": "D",
    "explanation": "Şərt yoxlanılır, yalnız uyğun blok işləyir və 6 çap edilir."
  },
  {
    "id": 237,
    "difficulty": "medium",
    "time": 45,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "x = 5\nif x > 3:\n    if x < 5:\n        y = 1\n    else:\n        y = 2\nelse:\n    y = 3\nprint(y + x)",
    "options": {
      "A": "7",
      "B": "6",
      "C": "8",
      "D": "2"
    },
    "correct": "A",
    "explanation": "Şərt yoxlanılır, yalnız uyğun blok işləyir və 7 çap edilir."
  },
  {
    "id": 238,
    "difficulty": "medium",
    "time": 45,
    "question": "Kodun çıxış qiymətini müəyyən edin.",
    "code": "s = \"ana\"\nif s.count(\"a\") == 2:\n    s = s + \" dili\"\nprint(len(s))",
    "options": {
      "A": "3",
      "B": "8",
      "C": "7",
      "D": "9"
    },
    "correct": "B",
    "explanation": "Şərt yoxlanılır, yalnız uyğun blok işləyir və 8 çap edilir."
  },
  {
    "id": 239,
    "difficulty": "medium",
    "time": 45,
    "question": "Kod icra edilərsə hansı nəticə alınacaq?",
    "code": "a = [1, 3, 5]\nif 2 in a:\n    a.append(2)\nelse:\n    a.insert(1, 2)\nprint(a)",
    "options": {
      "A": "[1, 3, 5, 2]",
      "B": "[2, 1, 3, 5]",
      "C": "[1, 2, 3, 5]",
      "D": "[1, 3, 2, 5]"
    },
    "correct": "C",
    "explanation": "Şərt yoxlanılır, yalnız uyğun blok işləyir və [1, 2, 3, 5] çap edilir."
  },
  {
    "id": 240,
    "difficulty": "medium",
    "time": 45,
    "question": "Verilmiş kodun nəticəsini tapın.",
    "code": "a = 20\nb = 6\nif a % b > 1:\n    print(a % b)\nelse:\n    print(a // b)",
    "options": {
      "A": "20",
      "B": "6",
      "C": "3",
      "D": "2"
    },
    "correct": "D",
    "explanation": "Şərt yoxlanılır, yalnız uyğun blok işləyir və 2 çap edilir."
  },
  {
    "id": 241,
    "difficulty": "medium",
    "time": 45,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "s = 0\nfor i in range(2, 9):\n    if i % 2 == 0:\n        s += i\nprint(s)",
    "options": {
      "A": "20",
      "B": "24",
      "C": "12",
      "D": "21"
    },
    "correct": "A",
    "explanation": "Qısaldılmış mənimsətmə əməliyyatları ardıcıl tətbiq edilir; son nəticə 20-dir."
  },
  {
    "id": 242,
    "difficulty": "medium",
    "time": 45,
    "question": "Kodun çıxış qiymətini müəyyən edin.",
    "code": "k = 1\nfor i in range(1, 5):\n    k = k * i\nprint(k)",
    "options": {
      "A": "10",
      "B": "24",
      "C": "12",
      "D": "20"
    },
    "correct": "B",
    "explanation": "Dövr elementləri ardıcıl emal edir və sonda 24 çap olunur."
  },
  {
    "id": 243,
    "difficulty": "medium",
    "time": 45,
    "question": "Kod icra edilərsə hansı nəticə alınacaq?",
    "code": "a = []\nfor i in range(3, 8):\n    if i % 2 == 1:\n        a.append(i)\nprint(a)",
    "options": {
      "A": "[3, 4, 5, 6, 7]",
      "B": "[4, 6]",
      "C": "[3, 5, 7]",
      "D": "[3, 5]"
    },
    "correct": "C",
    "explanation": "Dövr verilən aralıqda işləyir, şərtə uyğun qiymətlər nəzərə alınır və nəticə [3, 5, 7] olur."
  },
  {
    "id": 244,
    "difficulty": "medium",
    "time": 45,
    "question": "Verilmiş kodun nəticəsini tapın.",
    "code": "s = \"abcde\"\nn = 0\nfor i in s:\n    if i > \"b\":\n        n += 1\nprint(n)",
    "options": {
      "A": "2",
      "B": "5",
      "C": "1",
      "D": "3"
    },
    "correct": "D",
    "explanation": "Qısaldılmış mənimsətmə əməliyyatları ardıcıl tətbiq edilir; son nəticə 3-dir."
  },
  {
    "id": 245,
    "difficulty": "medium",
    "time": 45,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "a = [2, 4, 5, 8]\ns = 0\nfor i in a:\n    s += i // 2\nprint(s)",
    "options": {
      "A": "9",
      "B": "19",
      "C": "10",
      "D": "8"
    },
    "correct": "A",
    "explanation": "Qısaldılmış mənimsətmə əməliyyatları ardıcıl tətbiq edilir; son nəticə 9-dir."
  },
  {
    "id": 246,
    "difficulty": "medium",
    "time": 45,
    "question": "Kodun çıxış qiymətini müəyyən edin.",
    "code": "i = 10\ns = 0\nwhile i > 4:\n    s += i\n    i -= 3\nprint(s)",
    "options": {
      "A": "15",
      "B": "17",
      "C": "21",
      "D": "10"
    },
    "correct": "B",
    "explanation": "Qısaldılmış mənimsətmə əməliyyatları ardıcıl tətbiq edilir; son nəticə 17-dir."
  },
  {
    "id": 247,
    "difficulty": "medium",
    "time": 45,
    "question": "Kod icra edilərsə hansı nəticə alınacaq?",
    "code": "n = 48\nk = 0\nwhile n > 5:\n    n = n // 2\n    k += 1\nprint(n, k)",
    "options": {
      "A": "6 3",
      "B": "48 0",
      "C": "3 4",
      "D": "4 3"
    },
    "correct": "C",
    "explanation": "Qısaldılmış mənimsətmə əməliyyatları ardıcıl tətbiq edilir; son nəticə 3 4-dir."
  },
  {
    "id": 248,
    "difficulty": "medium",
    "time": 45,
    "question": "Verilmiş kodun nəticəsini tapın.",
    "code": "a = [1, 2, 3]\nfor i in range(len(a)):\n    a[i] = a[i] * 2\nprint(a)",
    "options": {
      "A": "[1, 2, 3, 2]",
      "B": "[2, 3, 4]",
      "C": "[1, 4, 9]",
      "D": "[2, 4, 6]"
    },
    "correct": "D",
    "explanation": "Dövr elementləri ardıcıl emal edir və sonda [2, 4, 6] çap olunur."
  },
  {
    "id": 249,
    "difficulty": "medium",
    "time": 45,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "s = 0\nfor i in range(1, 6):\n    if i == 4:\n        break\n    s += i\nprint(s)",
    "options": {
      "A": "6",
      "B": "10",
      "C": "15",
      "D": "4"
    },
    "correct": "A",
    "explanation": "Qısaldılmış mənimsətmə əməliyyatları ardıcıl tətbiq edilir; son nəticə 6-dir."
  },
  {
    "id": 250,
    "difficulty": "medium",
    "time": 45,
    "question": "Kodun çıxış qiymətini müəyyən edin.",
    "code": "s = 0\nfor i in range(1, 6):\n    if i == 3:\n        continue\n    s += i\nprint(s)",
    "options": {
      "A": "15",
      "B": "12",
      "C": "6",
      "D": "10"
    },
    "correct": "B",
    "explanation": "Qısaldılmış mənimsətmə əməliyyatları ardıcıl tətbiq edilir; son nəticə 12-dir."
  },
  {
    "id": 251,
    "difficulty": "medium",
    "time": 45,
    "question": "Kod icra edilərsə hansı nəticə alınacaq?",
    "code": "a = []\nfor i in range(1, 10):\n    if i % 3 == 0:\n        continue\n    a.append(i)\nprint(len(a))",
    "options": {
      "A": "3",
      "B": "9",
      "C": "6",
      "D": "5"
    },
    "correct": "C",
    "explanation": "Dövr verilən aralıqda işləyir, şərtə uyğun qiymətlər nəzərə alınır və nəticə 6 olur."
  },
  {
    "id": 252,
    "difficulty": "medium",
    "time": 45,
    "question": "Verilmiş kodun nəticəsini tapın.",
    "code": "s = 0\nfor i in range(1, 20):\n    if i % 5 == 0:\n        break\n    s += i\nprint(s)",
    "options": {
      "A": "15",
      "B": "5",
      "C": "45",
      "D": "10"
    },
    "correct": "D",
    "explanation": "Qısaldılmış mənimsətmə əməliyyatları ardıcıl tətbiq edilir; son nəticə 10-dir."
  },
  {
    "id": 253,
    "difficulty": "medium",
    "time": 45,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "n = 1234\ns = 0\nwhile n > 0:\n    s += n % 10\n    n = n // 10\nprint(s)",
    "options": {
      "A": "10",
      "B": "1234",
      "C": "9",
      "D": "24"
    },
    "correct": "A",
    "explanation": "Qısaldılmış mənimsətmə əməliyyatları ardıcıl tətbiq edilir; son nəticə 10-dir."
  },
  {
    "id": 254,
    "difficulty": "medium",
    "time": 45,
    "question": "Kodun çıxış qiymətini müəyyən edin.",
    "code": "n = 305\ns = \"\"\nwhile n > 0:\n    s += str(n % 10)\n    n = n // 10\nprint(s)",
    "options": {
      "A": "305",
      "B": "503",
      "C": "35",
      "D": "5030"
    },
    "correct": "B",
    "explanation": "Qiymətlər sətirə çevrilir və sətir kimi birləşdirilir; nəticə 503 olur."
  },
  {
    "id": 255,
    "difficulty": "medium",
    "time": 45,
    "question": "Kod icra edilərsə hansı nəticə alınacaq?",
    "code": "a = [3, 1, 4, 1, 5]\ns = 0\nfor i in range(len(a)):\n    if i % 2 == 0:\n        s += a[i]\nprint(s)",
    "options": {
      "A": "2",
      "B": "14",
      "C": "12",
      "D": "9"
    },
    "correct": "C",
    "explanation": "Qısaldılmış mənimsətmə əməliyyatları ardıcıl tətbiq edilir; son nəticə 12-dir."
  },
  {
    "id": 256,
    "difficulty": "medium",
    "time": 45,
    "question": "Verilmiş kodun nəticəsini tapın.",
    "code": "s = \"salam\"\na = []\nfor i in s:\n    if i == \"a\":\n        a.append(i)\nprint(len(a))",
    "options": {
      "A": "1",
      "B": "5",
      "C": "3",
      "D": "2"
    },
    "correct": "D",
    "explanation": "Dövr elementləri ardıcıl emal edir və sonda 2 çap olunur."
  },
  {
    "id": 257,
    "difficulty": "medium",
    "time": 45,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "a = [2, 3]\nfor i in range(2):\n    a.append(a[i] + 1)\nprint(a)",
    "options": {
      "A": "[2, 3, 3, 4]",
      "B": "[2, 3, 4, 5]",
      "C": "[3, 4]",
      "D": "[2, 3, 3]"
    },
    "correct": "A",
    "explanation": "Dövr elementləri ardıcıl emal edir və sonda [2, 3, 3, 4] çap olunur."
  },
  {
    "id": 258,
    "difficulty": "medium",
    "time": 45,
    "question": "Kodun çıxış qiymətini müəyyən edin.",
    "code": "s = 1\nfor i in [2, 3, 4]:\n    if i % 2 == 0:\n        s *= i\n    else:\n        s += i\nprint(s)",
    "options": {
      "A": "24",
      "B": "20",
      "C": "10",
      "D": "9"
    },
    "correct": "B",
    "explanation": "Qısaldılmış mənimsətmə əməliyyatları ardıcıl tətbiq edilir; son nəticə 20-dir."
  },
  {
    "id": 259,
    "difficulty": "medium",
    "time": 45,
    "question": "Kod icra edilərsə hansı nəticə alınacaq?",
    "code": "a = \"test\"\nb = \"\"\nfor i in a:\n    b = i + b\nprint(b)",
    "options": {
      "A": "test",
      "B": "ttes",
      "C": "tset",
      "D": "TSET"
    },
    "correct": "C",
    "explanation": "Dövr elementləri ardıcıl emal edir və sonda tset çap olunur."
  },
  {
    "id": 260,
    "difficulty": "medium",
    "time": 45,
    "question": "Verilmiş kodun nəticəsini tapın.",
    "code": "i = 1\ns = \"\"\nwhile i < 5:\n    s += str(i)\n    i += 1\nprint(s)",
    "options": {
      "A": "12345",
      "B": "10",
      "C": "4321",
      "D": "1234"
    },
    "correct": "D",
    "explanation": "Qiymətlər sətirə çevrilir və sətir kimi birləşdirilir; nəticə 1234 olur."
  },
  {
    "id": 261,
    "difficulty": "medium",
    "time": 45,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "s = 0\nfor i in range(3):\n    for j in range(2):\n        s += i + j\nprint(s)",
    "options": {
      "A": "9",
      "B": "6",
      "C": "12",
      "D": "10"
    },
    "correct": "A",
    "explanation": "Qısaldılmış mənimsətmə əməliyyatları ardıcıl tətbiq edilir; son nəticə 9-dir."
  },
  {
    "id": 262,
    "difficulty": "medium",
    "time": 45,
    "question": "Kodun çıxış qiymətini müəyyən edin.",
    "code": "a = []\nfor i in range(2):\n    for j in range(3):\n        a.append(i + j)\nprint(sum(a))",
    "options": {
      "A": "6",
      "B": "9",
      "C": "12",
      "D": "10"
    },
    "correct": "B",
    "explanation": "Siyahı yeniləndikdən sonra sum() elementlərin cəmini hesablayır; nəticə 9-dir."
  },
  {
    "id": 263,
    "difficulty": "medium",
    "time": 45,
    "question": "Kod icra edilərsə hansı nəticə alınacaq?",
    "code": "def f(x):\n    return x * 2 + 1\n\nprint(f(3) + f(4))",
    "options": {
      "A": "14",
      "B": "15",
      "C": "16",
      "D": "17"
    },
    "correct": "C",
    "explanation": "Funksiya daxilində hesablanan qiymət return ilə qaytarılır; yekun nəticə 16-dir."
  },
  {
    "id": 264,
    "difficulty": "medium",
    "time": 45,
    "question": "Verilmiş kodun nəticəsini tapın.",
    "code": "def cem(a):\n    s = 0\n    for i in a:\n        s += i\n    return s\n\nprint(cem([2, 4, 6]) // 3)",
    "options": {
      "A": "12",
      "B": "3",
      "C": "6",
      "D": "4"
    },
    "correct": "D",
    "explanation": "Qısaldılmış mənimsətmə əməliyyatları ardıcıl tətbiq edilir; son nəticə 4-dir."
  },
  {
    "id": 265,
    "difficulty": "medium",
    "time": 45,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "def say(s):\n    return s.count(\"a\") + len(s)\n\nprint(say(\"alma\"))",
    "options": {
      "A": "6",
      "B": "4",
      "C": "2",
      "D": "8"
    },
    "correct": "A",
    "explanation": "Funksiya daxilində hesablanan qiymət return ilə qaytarılır; yekun nəticə 6-dir."
  },
  {
    "id": 266,
    "difficulty": "medium",
    "time": 45,
    "question": "Kodun çıxış qiymətini müəyyən edin.",
    "code": "def h(a, b):\n    if a > b:\n        return a - b\n    return a + b\n\nprint(h(7, 3) + h(2, 5))",
    "options": {
      "A": "12",
      "B": "11",
      "C": "9",
      "D": "10"
    },
    "correct": "B",
    "explanation": "Funksiya daxilində hesablanan qiymət return ilə qaytarılır; yekun nəticə 11-dir."
  },
  {
    "id": 267,
    "difficulty": "medium",
    "time": 45,
    "question": "Kod icra edilərsə hansı nəticə alınacaq?",
    "code": "def kv(x):\n    return x ** 2\n\ns = 0\nfor i in range(1, 4):\n    s += kv(i)\nprint(s)",
    "options": {
      "A": "6",
      "B": "12",
      "C": "14",
      "D": "16"
    },
    "correct": "C",
    "explanation": "Qısaldılmış mənimsətmə əməliyyatları ardıcıl tətbiq edilir; son nəticə 14-dir."
  },
  {
    "id": 268,
    "difficulty": "medium",
    "time": 45,
    "question": "Verilmiş kodun nəticəsini tapın.",
    "code": "def yoxla(x):\n    if x % 2 == 0:\n        return x // 2\n    return x * 2\n\nprint(yoxla(6) + yoxla(5))",
    "options": {
      "A": "11",
      "B": "15",
      "C": "14",
      "D": "13"
    },
    "correct": "D",
    "explanation": "Funksiya daxilində hesablanan qiymət return ilə qaytarılır; yekun nəticə 13-dir."
  },
  {
    "id": 269,
    "difficulty": "medium",
    "time": 45,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "def bir(a):\n    a.append(4)\n    return sum(a)\n\nx = [1, 2, 3]\nprint(bir(x), len(x))",
    "options": {
      "A": "10 4",
      "B": "6 3",
      "C": "10 3",
      "D": "4 4"
    },
    "correct": "A",
    "explanation": "Funksiya daxilində hesablanan qiymət return ilə qaytarılır; yekun nəticə 10 4-dir."
  },
  {
    "id": 270,
    "difficulty": "medium",
    "time": 45,
    "question": "Kodun çıxış qiymətini müəyyən edin.",
    "code": "def f(s):\n    return s[1:4]\n\nprint(f(\"program\") + f(\"testler\"))",
    "options": {
      "A": "protes",
      "B": "rogest",
      "C": "roget",
      "D": "rogstl"
    },
    "correct": "B",
    "explanation": "Funksiya daxilində hesablanan qiymət return ilə qaytarılır; yekun nəticə rogest-dir."
  },
  {
    "id": 271,
    "difficulty": "medium",
    "time": 45,
    "question": "Kod icra edilərsə hansı nəticə alınacaq?",
    "code": "def hesab(a, b):\n    c = a + b\n    return c * 2\n\nprint(hesab(2, 5) - hesab(1, 3))",
    "options": {
      "A": "10",
      "B": "14",
      "C": "6",
      "D": "7"
    },
    "correct": "C",
    "explanation": "Funksiya daxilində hesablanan qiymət return ilə qaytarılır; yekun nəticə 6-dir."
  },
  {
    "id": 272,
    "difficulty": "medium",
    "time": 45,
    "question": "Verilmiş kodun nəticəsini tapın.",
    "code": "def rc(n):\n    s = 0\n    while n > 0:\n        s += n % 10\n        n = n // 10\n    return s\n\nprint(rc(257))",
    "options": {
      "A": "257",
      "B": "12",
      "C": "13",
      "D": "14"
    },
    "correct": "D",
    "explanation": "Qısaldılmış mənimsətmə əməliyyatları ardıcıl tətbiq edilir; son nəticə 14-dir."
  },
  {
    "id": 273,
    "difficulty": "medium",
    "time": 45,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "def d(x):\n    return int(str(x)[0]) + int(str(x)[1])\n\nprint(d(42) * d(31))",
    "options": {
      "A": "24",
      "B": "10",
      "C": "20",
      "D": "28"
    },
    "correct": "A",
    "explanation": "Qiymətlər sətirə çevrilir və sətir kimi birləşdirilir; nəticə 24 olur."
  },
  {
    "id": 274,
    "difficulty": "medium",
    "time": 45,
    "question": "Kodun çıxış qiymətini müəyyən edin.",
    "code": "def f(a):\n    a.sort()\n    return a[0] + a[2]\n\nprint(f([5, 1, 4]))",
    "options": {
      "A": "9",
      "B": "6",
      "C": "10",
      "D": "7"
    },
    "correct": "B",
    "explanation": "Funksiya daxilində hesablanan qiymət return ilə qaytarılır; yekun nəticə 6-dir."
  },
  {
    "id": 275,
    "difficulty": "medium",
    "time": 45,
    "question": "Kod icra edilərsə hansı nəticə alınacaq?",
    "code": "def f(s):\n    s = s.upper()\n    return s.count(\"A\")\n\nprint(f(\"ana\") + f(\"alma\"))",
    "options": {
      "A": "2",
      "B": "3",
      "C": "4",
      "D": "5"
    },
    "correct": "C",
    "explanation": "Funksiya daxilində hesablanan qiymət return ilə qaytarılır; yekun nəticə 4-dir."
  },
  {
    "id": 276,
    "difficulty": "medium",
    "time": 45,
    "question": "Verilmiş kodun nəticəsini tapın.",
    "code": "def t(a, b):\n    return str(a) + str(b)\n\nprint(int(t(2, 5)) + int(t(1, 3)))",
    "options": {
      "A": "2513",
      "B": "15",
      "C": "39",
      "D": "38"
    },
    "correct": "D",
    "explanation": "Qiymətlər sətirə çevrilir və sətir kimi birləşdirilir; nəticə 38 olur."
  },
  {
    "id": 277,
    "difficulty": "medium",
    "time": 45,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "def f(x):\n    if x > 5:\n        return x - 1\n    else:\n        return x + 1\n\nprint(f(5) + f(6))",
    "options": {
      "A": "11",
      "B": "10",
      "C": "13",
      "D": "12"
    },
    "correct": "A",
    "explanation": "Funksiya daxilində hesablanan qiymət return ilə qaytarılır; yekun nəticə 11-dir."
  },
  {
    "id": 278,
    "difficulty": "medium",
    "time": 45,
    "question": "Kodun çıxış qiymətini müəyyən edin.",
    "code": "def f(a):\n    s = 0\n    for i in a:\n        if i % 2 == 0:\n            s += i\n    return s\n\nprint(f([1, 2, 3, 4, 5]))",
    "options": {
      "A": "15",
      "B": "6",
      "C": "9",
      "D": "4"
    },
    "correct": "B",
    "explanation": "Qısaldılmış mənimsətmə əməliyyatları ardıcıl tətbiq edilir; son nəticə 6-dir."
  },
  {
    "id": 279,
    "difficulty": "medium",
    "time": 45,
    "question": "Kod icra edilərsə hansı nəticə alınacaq?",
    "code": "def f(s):\n    a = list(s)\n    a.reverse()\n    return \"\".join(a)\n\nprint(f(\"kod\"))",
    "options": {
      "A": "kod",
      "B": "okd",
      "C": "dok",
      "D": "DOK"
    },
    "correct": "C",
    "explanation": "Funksiya daxilində hesablanan qiymət return ilə qaytarılır; yekun nəticə dok-dir."
  },
  {
    "id": 280,
    "difficulty": "medium",
    "time": 45,
    "question": "Verilmiş kodun nəticəsini tapın.",
    "code": "def f(n):\n    return n // 10 + n % 10\n\nprint(f(68) + f(24))",
    "options": {
      "A": "100",
      "B": "18",
      "C": "16",
      "D": "20"
    },
    "correct": "D",
    "explanation": "Funksiya daxilində hesablanan qiymət return ilə qaytarılır; yekun nəticə 20-dir."
  },
  {
    "id": 281,
    "difficulty": "medium",
    "time": 45,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "a = [2, 5, 8]\nb = []\nfor i in a:\n    b.append(i + len(b))\nprint(b)",
    "options": {
      "A": "[2, 6, 10]",
      "B": "[2, 5, 8]",
      "C": "[3, 7, 11]",
      "D": "[]"
    },
    "correct": "A",
    "explanation": "Dövr elementləri ardıcıl emal edir və sonda [2, 6, 10] çap olunur."
  },
  {
    "id": 282,
    "difficulty": "medium",
    "time": 45,
    "question": "Kodun çıxış qiymətini müəyyən edin.",
    "code": "s = \"informatika\"\na = s[0:3]\nb = s[3:6]\nprint(a.count(\"i\") + b.count(\"o\"))",
    "options": {
      "A": "1",
      "B": "2",
      "C": "3",
      "D": "0"
    },
    "correct": "B",
    "explanation": "İndeksləmə 0-dan başlayır; seçilən elementlərlə hesablama nəticəsi 2-dir."
  },
  {
    "id": 283,
    "difficulty": "medium",
    "time": 45,
    "question": "Kod icra edilərsə hansı nəticə alınacaq?",
    "code": "a = 4\nb = 9\nif a + b > 12 and b - a < 6:\n    print(a * b)\nelse:\n    print(a + b)",
    "options": {
      "A": "13",
      "B": "5",
      "C": "36",
      "D": "45"
    },
    "correct": "C",
    "explanation": "Məntiqi şərt qiymətləndirilir və uyğun blok icra olunur; nəticə 36-dir."
  },
  {
    "id": 284,
    "difficulty": "medium",
    "time": 45,
    "question": "Verilmiş kodun nəticəsini tapın.",
    "code": "a = [1, 2, 3]\nb = [4, 5]\nc = a + b\nprint(c[2] + c[4])",
    "options": {
      "A": "7",
      "B": "6",
      "C": "9",
      "D": "8"
    },
    "correct": "D",
    "explanation": "İndeksləmə 0-dan başlayır; seçilən elementlərlə hesablama nəticəsi 8-dir."
  },
  {
    "id": 285,
    "difficulty": "medium",
    "time": 45,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "s = 0\nfor i in range(1, 8):\n    if i % 2 == 0 or i % 3 == 0:\n        s += i\nprint(s)",
    "options": {
      "A": "15",
      "B": "18",
      "C": "21",
      "D": "16"
    },
    "correct": "A",
    "explanation": "Qısaldılmış mənimsətmə əməliyyatları ardıcıl tətbiq edilir; son nəticə 15-dir."
  },
  {
    "id": 286,
    "difficulty": "medium",
    "time": 45,
    "question": "Kodun çıxış qiymətini müəyyən edin.",
    "code": "a = 1\nfor i in range(3):\n    a = a * 2 + i\nprint(a)",
    "options": {
      "A": "8",
      "B": "12",
      "C": "10",
      "D": "13"
    },
    "correct": "B",
    "explanation": "Dövr elementləri ardıcıl emal edir və sonda 12 çap olunur."
  },
  {
    "id": 287,
    "difficulty": "medium",
    "time": 45,
    "question": "Kod icra edilərsə hansı nəticə alınacaq?",
    "code": "s = \"abaac\"\nk = 0\nfor i in range(len(s)):\n    if s[i] == \"a\":\n        k += i\nprint(k)",
    "options": {
      "A": "3",
      "B": "6",
      "C": "5",
      "D": "2"
    },
    "correct": "C",
    "explanation": "Qısaldılmış mənimsətmə əməliyyatları ardıcıl tətbiq edilir; son nəticə 5-dir."
  },
  {
    "id": 288,
    "difficulty": "medium",
    "time": 45,
    "question": "Verilmiş kodun nəticəsini tapın.",
    "code": "a = [3, 6, 9, 12]\ns = 0\nfor i in range(1, len(a)):\n    s += a[i] - a[i-1]\nprint(s)",
    "options": {
      "A": "3",
      "B": "6",
      "C": "12",
      "D": "9"
    },
    "correct": "D",
    "explanation": "Qısaldılmış mənimsətmə əməliyyatları ardıcıl tətbiq edilir; son nəticə 9-dir."
  },
  {
    "id": 289,
    "difficulty": "medium",
    "time": 45,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "a = \"12 34 5\"\nb = a.split(\" \")\nprint(int(b[0]) + int(b[2]))",
    "options": {
      "A": "17",
      "B": "51",
      "C": "39",
      "D": "18"
    },
    "correct": "A",
    "explanation": "İndeksləmə 0-dan başlayır; seçilən elementlərlə hesablama nəticəsi 17-dir."
  },
  {
    "id": 290,
    "difficulty": "medium",
    "time": 45,
    "question": "Kodun çıxış qiymətini müəyyən edin.",
    "code": "a = [\"a\", \"b\", \"a\", \"c\"]\nwhile \"a\" in a:\n    a.remove(\"a\")\nprint(a)",
    "options": {
      "A": "['a', 'b', 'c']",
      "B": "['b', 'c']",
      "C": "['b', 'a', 'c']",
      "D": "['c']"
    },
    "correct": "B",
    "explanation": "while dövrü şərt ödənildiyi müddətdə işləyir; son qiymət ['b', 'c'] olur."
  },
  {
    "id": 291,
    "difficulty": "medium",
    "time": 45,
    "question": "Kod icra edilərsə hansı nəticə alınacaq?",
    "code": "def f(x):\n    return x + 2\n\na = f(f(3))\nprint(a)",
    "options": {
      "A": "5",
      "B": "8",
      "C": "7",
      "D": "9"
    },
    "correct": "C",
    "explanation": "Funksiya daxilində hesablanan qiymət return ilə qaytarılır; yekun nəticə 7-dir."
  },
  {
    "id": 292,
    "difficulty": "medium",
    "time": 45,
    "question": "Verilmiş kodun nəticəsini tapın.",
    "code": "def f(a, b):\n    return a * 10 + b\n\nprint(f(2, 3) + f(1, 4))",
    "options": {
      "A": "234",
      "B": "28",
      "C": "38",
      "D": "37"
    },
    "correct": "D",
    "explanation": "Funksiya daxilində hesablanan qiymət return ilə qaytarılır; yekun nəticə 37-dir."
  },
  {
    "id": 293,
    "difficulty": "medium",
    "time": 45,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "a = [4, 1, 7, 1]\na.remove(1)\na.append(a.count(1))\nprint(a)",
    "options": {
      "A": "[4, 7, 1, 1]",
      "B": "[4, 7, 1]",
      "C": "[4, 1, 7, 1, 2]",
      "D": "[]"
    },
    "correct": "A",
    "explanation": "İndeksləmə 0-dan başlayır; seçilən elementlərlə hesablama nəticəsi [4, 7, 1, 1]-dir."
  },
  {
    "id": 294,
    "difficulty": "medium",
    "time": 45,
    "question": "Kodun çıxış qiymətini müəyyən edin.",
    "code": "s = \"AZERBAYCAN\"\nprint(s.find(\"A\") + s.find(\"A\", 1) + s.count(\"A\"))",
    "options": {
      "A": "6",
      "B": "8",
      "C": "2",
      "D": "9"
    },
    "correct": "B",
    "explanation": "Əmrlər ardıcıl icra olunur və ekrana 8 çap edilir."
  },
  {
    "id": 295,
    "difficulty": "medium",
    "time": 45,
    "question": "Kod icra edilərsə hansı nəticə alınacaq?",
    "code": "i = 5\ns = 0\nwhile i <= 11:\n    if i % 2 == 1:\n        s += i\n    i += 2\nprint(s)",
    "options": {
      "A": "24",
      "B": "36",
      "C": "32",
      "D": "20"
    },
    "correct": "C",
    "explanation": "Qısaldılmış mənimsətmə əməliyyatları ardıcıl tətbiq edilir; son nəticə 32-dir."
  },
  {
    "id": 296,
    "difficulty": "medium",
    "time": 45,
    "question": "Verilmiş kodun nəticəsini tapın.",
    "code": "a = []\nfor i in range(1, 5):\n    a.insert(0, i)\nprint(a)",
    "options": {
      "A": "[1, 2, 3, 4]",
      "B": "[4, 3, 2]",
      "C": "[0, 1, 2, 3]",
      "D": "[4, 3, 2, 1]"
    },
    "correct": "D",
    "explanation": "Dövr elementləri ardıcıl emal edir və sonda [4, 3, 2, 1] çap olunur."
  },
  {
    "id": 297,
    "difficulty": "medium",
    "time": 45,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "a = \"kitab\"\nb = list(a)\nb[0] = \"K\"\nprint(\"\".join(b))",
    "options": {
      "A": "Kitab",
      "B": "kitab",
      "C": "K",
      "D": "K itab"
    },
    "correct": "A",
    "explanation": "İndeksləmə 0-dan başlayır; seçilən elementlərlə hesablama nəticəsi Kitab-dir."
  },
  {
    "id": 298,
    "difficulty": "medium",
    "time": 45,
    "question": "Kodun çıxış qiymətini müəyyən edin.",
    "code": "def f(a):\n    return max(a) - min(a)\n\nprint(f([8, 3, 10]) * 2)",
    "options": {
      "A": "7",
      "B": "14",
      "C": "10",
      "D": "12"
    },
    "correct": "B",
    "explanation": "Funksiya daxilində hesablanan qiymət return ilə qaytarılır; yekun nəticə 14-dir."
  },
  {
    "id": 299,
    "difficulty": "medium",
    "time": 45,
    "question": "Kod icra edilərsə hansı nəticə alınacaq?",
    "code": "s = 0\nfor i in range(1, 10):\n    if i > 6:\n        break\n    if i % 2 == 0:\n        continue\n    s += i\nprint(s)",
    "options": {
      "A": "12",
      "B": "16",
      "C": "9",
      "D": "10"
    },
    "correct": "C",
    "explanation": "Qısaldılmış mənimsətmə əməliyyatları ardıcıl tətbiq edilir; son nəticə 9-dir."
  },
  {
    "id": 300,
    "difficulty": "medium",
    "time": 45,
    "question": "Verilmiş kodun nəticəsini tapın.",
    "code": "def f(n):\n    s = str(n)\n    return int(s[0]) * int(s[1])\n\nprint(f(37) + f(24))",
    "options": {
      "A": "35",
      "B": "14",
      "C": "30",
      "D": "29"
    },
    "correct": "D",
    "explanation": "Qiymətlər sətirə çevrilir və sətir kimi birləşdirilir; nəticə 29 olur."
  },
  {
    "id": 301,
    "difficulty": "hard",
    "time": 60,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "a, b, c = 3, 4, 5\na, b = b + c, a * 2\nc = a // b + c % a\nprint(a, b, c)",
    "options": {
      "A": "9 6 6",
      "B": "6 6 9",
      "C": "21",
      "D": "10 7 7"
    },
    "correct": "A",
    "explanation": "Tam bölmə və qalıq əməliyyatları tətbiq olunur; nəticə 9 6 6-dir."
  },
  {
    "id": 302,
    "difficulty": "hard",
    "time": 60,
    "question": "Kodun çıxış qiymətini müəyyən edin.",
    "code": "n = 584\na = n // 100\nb = (n // 10) % 10\nc = n % 10\nprint(a * c + b)",
    "options": {
      "A": "29",
      "B": "28",
      "C": "27",
      "D": "56"
    },
    "correct": "B",
    "explanation": "Tam bölmə və qalıq əməliyyatları tətbiq olunur; nəticə 28-dir."
  },
  {
    "id": 303,
    "difficulty": "hard",
    "time": 60,
    "question": "Verilmiş kodun nəticəsini tapın.",
    "code": "s = \"informatika\"\na = s[0:4]\nb = s[4:7]\nprint(a.count(\"i\") + b.find(\"r\") + len(s))",
    "options": {
      "A": "13",
      "B": "11",
      "C": "12",
      "D": "24"
    },
    "correct": "C",
    "explanation": "len() uzunluğu hesablayır, indekslər isə 0-dan başladığı üçün nəticə 12 alınır."
  },
  {
    "id": 304,
    "difficulty": "hard",
    "time": 60,
    "question": "Kod icra edildikdən sonra hansı nəticə alınacaq?",
    "code": "a = [4, 2, 7, 2]\nb = a\nb[1] = a[2] - a[0]\nprint(sum(a), a.count(2))",
    "options": {
      "A": "1 16",
      "B": "17",
      "C": "17 2",
      "D": "16 1"
    },
    "correct": "D",
    "explanation": "İndeksləmə 0-dan başlayır; seçilən elementlərlə hesablama nəticəsi 16 1-dir."
  },
  {
    "id": 305,
    "difficulty": "hard",
    "time": 60,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "a = [10, 20, 30, 40, 50]\nb = a[1:4]\nb[0] = b[0] + b[2]\nprint(sum(a), sum(b))",
    "options": {
      "A": "150 130",
      "B": "130 150",
      "C": "280",
      "D": "151 131"
    },
    "correct": "A",
    "explanation": "İndeksləmə 0-dan başlayır; seçilən elementlərlə hesablama nəticəsi 150 130-dir."
  },
  {
    "id": 306,
    "difficulty": "hard",
    "time": 60,
    "question": "Kodun çıxış qiymətini müəyyən edin.",
    "code": "s = \"  Python dərsi  \"\ns = s.strip()\na = s.replace(\"Python\", \"Kod\")\nprint(len(s), len(a))",
    "options": {
      "A": "9 12",
      "B": "12 9",
      "C": "21",
      "D": "13 10"
    },
    "correct": "B",
    "explanation": "Əmrlər ardıcıl icra olunur və ekrana 12 9 çap edilir."
  },
  {
    "id": 307,
    "difficulty": "hard",
    "time": 60,
    "question": "Verilmiş kodun nəticəsini tapın.",
    "code": "a = \"12\"\nb = \"3\"\nc = int(a + b) - int(a) * int(b)\nprint(c)",
    "options": {
      "A": "88",
      "B": "86",
      "C": "87",
      "D": "174"
    },
    "correct": "C",
    "explanation": "Tip çevirməsindən sonra riyazi əməl yerinə yetirilir və 87 alınır."
  },
  {
    "id": 308,
    "difficulty": "hard",
    "time": 60,
    "question": "Kod icra edildikdən sonra hansı nəticə alınacaq?",
    "code": "a = [\"ab\", \"c\", \"de\"]\nb = \"\".join(a)\nc = list(b)\nprint(len(c) + c.count(\"e\"))",
    "options": {
      "A": "7",
      "B": "5",
      "C": "12",
      "D": "6"
    },
    "correct": "D",
    "explanation": "len() uzunluğu hesablayır, indekslər isə 0-dan başladığı üçün nəticə 6 alınır."
  },
  {
    "id": 309,
    "difficulty": "hard",
    "time": 60,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "a = \"alqoritm\"\nb = a[2:6]\nc = b.upper().replace(\"O\", \"0\")\nprint(c)",
    "options": {
      "A": "Q0RI",
      "B": "q0ri",
      "C": "Q0RIQ0RI",
      "D": "4"
    },
    "correct": "A",
    "explanation": "İndeksləmə 0-dan başlayır; seçilən elementlərlə hesablama nəticəsi Q0RI-dir."
  },
  {
    "id": 310,
    "difficulty": "hard",
    "time": 60,
    "question": "Kodun çıxış qiymətini müəyyən edin.",
    "code": "a = [6, 1, 4, 1, 6]\na.remove(1)\na.insert(2, 3)\nprint(a, sum(a))",
    "options": {
      "A": "20 6] 1, 3, 4, [6,",
      "B": "[6, 4, 3, 1, 6] 20",
      "C": "[6,4,3,1,6]20",
      "D": "0"
    },
    "correct": "B",
    "explanation": "İndeksləmə 0-dan başlayır; seçilən elementlərlə hesablama nəticəsi [6, 4, 3, 1, 6] 20-dir."
  },
  {
    "id": 311,
    "difficulty": "hard",
    "time": 60,
    "question": "Verilmiş kodun nəticəsini tapın.",
    "code": "a = 7\nb = 3\na = a % b + a // b\nb = a * b - 1\nprint(a, b)",
    "options": {
      "A": "8 3",
      "B": "11",
      "C": "3 8",
      "D": "4 9"
    },
    "correct": "C",
    "explanation": "Tam bölmə və qalıq əməliyyatları tətbiq olunur; nəticə 3 8-dir."
  },
  {
    "id": 312,
    "difficulty": "hard",
    "time": 60,
    "question": "Kod icra edildikdən sonra hansı nəticə alınacaq?",
    "code": "s = \"banana\"\na = s.find(\"a\")\nb = s.find(\"a\", a + 1)\nc = s.find(\"a\", b + 1)\nprint(a + b + c)",
    "options": {
      "A": "10",
      "B": "8",
      "C": "18",
      "D": "9"
    },
    "correct": "D",
    "explanation": "Əmrlər ardıcıl icra olunur və ekrana 9 çap edilir."
  },
  {
    "id": 313,
    "difficulty": "hard",
    "time": 60,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "a = [3, 8, 5, 8, 2]\nk = a.index(8) + a.count(8) + max(a)\nprint(k)",
    "options": {
      "A": "11",
      "B": "12",
      "C": "10",
      "D": "22"
    },
    "correct": "A",
    "explanation": "İndeksləmə 0-dan başlayır; seçilən elementlərlə hesablama nəticəsi 11-dir."
  },
  {
    "id": 314,
    "difficulty": "hard",
    "time": 60,
    "question": "Kodun çıxış qiymətini müəyyən edin.",
    "code": "s = \"kitab oxu\"\na = s[0:5]\nb = s[6:]\nprint(b.capitalize() + \" \" + a.upper())",
    "options": {
      "A": "KITAB Oxu",
      "B": "Oxu KITAB",
      "C": "OxuKITAB",
      "D": "0"
    },
    "correct": "B",
    "explanation": "İndeksləmə 0-dan başlayır; seçilən elementlərlə hesablama nəticəsi Oxu KITAB-dir."
  },
  {
    "id": 315,
    "difficulty": "hard",
    "time": 60,
    "question": "Verilmiş kodun nəticəsini tapın.",
    "code": "a = list(\"sual\")\na[1] = \"O\"\nb = \"\".join(a)\nprint(b.lower())",
    "options": {
      "A": "SOAL",
      "B": "soalsoal",
      "C": "soal",
      "D": "4"
    },
    "correct": "C",
    "explanation": "İndeksləmə 0-dan başlayır; seçilən elementlərlə hesablama nəticəsi soal-dir."
  },
  {
    "id": 316,
    "difficulty": "hard",
    "time": 60,
    "question": "Kod icra edildikdən sonra hansı nəticə alınacaq?",
    "code": "a = [2, 5, 8]\nb = [1, 3]\nc = a + b\nc.sort()\nprint(c[1] + c[3])",
    "options": {
      "A": "8",
      "B": "6",
      "C": "14",
      "D": "7"
    },
    "correct": "D",
    "explanation": "İndeksləmə 0-dan başlayır; seçilən elementlərlə hesablama nəticəsi 7-dir."
  },
  {
    "id": 317,
    "difficulty": "hard",
    "time": 60,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "a = \"A-B-C-D\"\nb = a.split(\"-\")\nb.remove(\"B\")\nprint(\"\".join(b))",
    "options": {
      "A": "ACD",
      "B": "acd",
      "C": "ACDACD",
      "D": "3"
    },
    "correct": "A",
    "explanation": "Əmrlər ardıcıl icra olunur və ekrana ACD çap edilir."
  },
  {
    "id": 318,
    "difficulty": "hard",
    "time": 60,
    "question": "Kodun çıxış qiymətini müəyyən edin.",
    "code": "x = 36\nx = x // 6 + x % 5\nx = x * 2 - 3\nprint(x)",
    "options": {
      "A": "12",
      "B": "11",
      "C": "10",
      "D": "22"
    },
    "correct": "B",
    "explanation": "Tam bölmə və qalıq əməliyyatları tətbiq olunur; nəticə 11-dir."
  },
  {
    "id": 319,
    "difficulty": "hard",
    "time": 60,
    "question": "Verilmiş kodun nəticəsini tapın.",
    "code": "s = \"proqram\"\na = s[0:3]\nb = s[3:]\nprint(a + str(len(b)) + b)",
    "options": {
      "A": "PRO4QRAM",
      "B": "pro4qrampro4qram",
      "C": "pro4qram",
      "D": "8"
    },
    "correct": "C",
    "explanation": "Qiymətlər sətirə çevrilir və sətir kimi birləşdirilir; nəticə pro4qram olur."
  },
  {
    "id": 320,
    "difficulty": "hard",
    "time": 60,
    "question": "Kod icra edildikdən sonra hansı nəticə alınacaq?",
    "code": "a = [9, 4, 7, 4]\na[0] = min(a) + max(a)\ndel a[2]\nprint(a, sum(a))",
    "options": {
      "A": "21 4] 4, [13,",
      "B": "[13,4,4]21",
      "C": "0",
      "D": "[13, 4, 4] 21"
    },
    "correct": "D",
    "explanation": "İndeksləmə 0-dan başlayır; seçilən elementlərlə hesablama nəticəsi [13, 4, 4] 21-dir."
  },
  {
    "id": 321,
    "difficulty": "hard",
    "time": 60,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "a, b = 12, 5\nif a % b > 1:\n    c = a // b + b\nelse:\n    c = a + b\nprint(c)",
    "options": {
      "A": "7",
      "B": "8",
      "C": "6",
      "D": "14"
    },
    "correct": "A",
    "explanation": "Şərt yoxlanılır, yalnız uyğun blok işləyir və 7 çap edilir."
  },
  {
    "id": 322,
    "difficulty": "hard",
    "time": 60,
    "question": "Kodun çıxış qiymətini müəyyən edin.",
    "code": "x = 18\nif x % 2 == 0 and x % 3 == 0:\n    y = x // 6\nelif x % 2 == 0:\n    y = x // 2\nelse:\n    y = x\nprint(y)",
    "options": {
      "A": "4",
      "B": "3",
      "C": "2",
      "D": "6"
    },
    "correct": "B",
    "explanation": "Məntiqi şərt qiymətləndirilir və uyğun blok icra olunur; nəticə 3-dir."
  },
  {
    "id": 323,
    "difficulty": "hard",
    "time": 60,
    "question": "Verilmiş kodun nəticəsini tapın.",
    "code": "s = \"informatika\"\nif s.find(\"r\") > s.count(\"a\"):\n    print(s[2:5])\nelse:\n    print(s[5:8])",
    "options": {
      "A": "FOR",
      "B": "forfor",
      "C": "for",
      "D": "3"
    },
    "correct": "C",
    "explanation": "Şərt yoxlanılır, yalnız uyğun blok işləyir və for çap edilir."
  },
  {
    "id": 324,
    "difficulty": "hard",
    "time": 60,
    "question": "Kod icra edildikdən sonra hansı nəticə alınacaq?",
    "code": "a = [4, 6, 9]\nif sum(a) > 20:\n    a.append(1)\nelif max(a) == 9:\n    a[0] = a[0] + 5\nelse:\n    a.remove(6)\nprint(a)",
    "options": {
      "A": "[6, 9, 9]",
      "B": "[9, 6]",
      "C": "[9, 6, 9, 9, 6, 9]",
      "D": "[9, 6, 9]"
    },
    "correct": "D",
    "explanation": "Şərt yoxlanılır, yalnız uyğun blok işləyir və [9, 6, 9] çap edilir."
  },
  {
    "id": 325,
    "difficulty": "hard",
    "time": 60,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "a, b, c = 5, 10, 15\nif a + b == c and c % b != 0:\n    k = c - a\nelse:\n    k = a * b\nprint(k)",
    "options": {
      "A": "10",
      "B": "11",
      "C": "9",
      "D": "20"
    },
    "correct": "A",
    "explanation": "Məntiqi şərt qiymətləndirilir və uyğun blok icra olunur; nəticə 10-dir."
  },
  {
    "id": 326,
    "difficulty": "hard",
    "time": 60,
    "question": "Kodun çıxış qiymətini müəyyən edin.",
    "code": "x = 7\nif not x % 2 == 0 and x > 5:\n    print(x * 2)\nelse:\n    print(x + 2)",
    "options": {
      "A": "15",
      "B": "14",
      "C": "13",
      "D": "28"
    },
    "correct": "B",
    "explanation": "Məntiqi şərt qiymətləndirilir və uyğun blok icra olunur; nəticə 14-dir."
  },
  {
    "id": 327,
    "difficulty": "hard",
    "time": 60,
    "question": "Verilmiş kodun nəticəsini tapın.",
    "code": "a = \"məktəb\"\nif a.count(\"ə\") == 2:\n    b = a.replace(\"ə\", \"e\")\nelse:\n    b = a.upper()\nprint(b)",
    "options": {
      "A": "MEKTEB",
      "B": "mektebmekteb",
      "C": "mekteb",
      "D": "6"
    },
    "correct": "C",
    "explanation": "Şərt yoxlanılır, yalnız uyğun blok işləyir və mekteb çap edilir."
  },
  {
    "id": 328,
    "difficulty": "hard",
    "time": 60,
    "question": "Kod icra edildikdən sonra hansı nəticə alınacaq?",
    "code": "a = [1, 2, 3, 4]\nif len(a) == sum(a) // 2:\n    print(a[0] + a[3])\nelse:\n    print(a[1] + a[2])",
    "options": {
      "A": "6",
      "B": "4",
      "C": "10",
      "D": "5"
    },
    "correct": "D",
    "explanation": "Şərt yoxlanılır, yalnız uyğun blok işləyir və 5 çap edilir."
  },
  {
    "id": 329,
    "difficulty": "hard",
    "time": 60,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "n = 245\nr1 = n // 100\nr2 = n % 10\nif r1 < r2:\n    print(r2 - r1)\nelse:\n    print(r1 + r2)",
    "options": {
      "A": "3",
      "B": "4",
      "C": "2",
      "D": "6"
    },
    "correct": "A",
    "explanation": "Şərt yoxlanılır, yalnız uyğun blok işləyir və 3 çap edilir."
  },
  {
    "id": 330,
    "difficulty": "hard",
    "time": 60,
    "question": "Kodun çıxış qiymətini müəyyən edin.",
    "code": "a, b = 8, 4\nif a // b == 2:\n    if a % b == 0:\n        c = a + b\n    else:\n        c = a - b\nelse:\n    c = a * b\nprint(c)",
    "options": {
      "A": "13",
      "B": "12",
      "C": "11",
      "D": "24"
    },
    "correct": "B",
    "explanation": "Şərt yoxlanılır, yalnız uyğun blok işləyir və 12 çap edilir."
  },
  {
    "id": 331,
    "difficulty": "hard",
    "time": 60,
    "question": "Verilmiş kodun nəticəsini tapın.",
    "code": "s = \"Python\"\nif s[0] == \"P\" or len(s) < 4:\n    print(s[1:4])\nelse:\n    print(s[2:5])",
    "options": {
      "A": "YTH",
      "B": "ythyth",
      "C": "yth",
      "D": "3"
    },
    "correct": "C",
    "explanation": "Məntiqi şərt qiymətləndirilir və uyğun blok icra olunur; nəticə yth-dir."
  },
  {
    "id": 332,
    "difficulty": "hard",
    "time": 60,
    "question": "Kod icra edildikdən sonra hansı nəticə alınacaq?",
    "code": "a = [7, 3, 5]\nif min(a) + max(a) > sum(a) // 2:\n    a.sort()\nelse:\n    a.reverse()\nprint(a)",
    "options": {
      "A": "[7, 5, 3]",
      "B": "[3, 5]",
      "C": "[3, 5, 7, 3, 5, 7]",
      "D": "[3, 5, 7]"
    },
    "correct": "D",
    "explanation": "Şərt yoxlanılır, yalnız uyğun blok işləyir və [3, 5, 7] çap edilir."
  },
  {
    "id": 333,
    "difficulty": "hard",
    "time": 60,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "x = 20\nif x % 6 == 2:\n    y = x // 3\nelif x % 5 == 0:\n    y = x // 5 + 2\nelse:\n    y = x % 7\nprint(y)",
    "options": {
      "A": "6",
      "B": "7",
      "C": "5",
      "D": "12"
    },
    "correct": "A",
    "explanation": "Şərt yoxlanılır, yalnız uyğun blok işləyir və 6 çap edilir."
  },
  {
    "id": 334,
    "difficulty": "hard",
    "time": 60,
    "question": "Kodun çıxış qiymətini müəyyən edin.",
    "code": "s = \"test\"\na = s.find(\"e\")\nb = s.find(\"x\")\nif b == -1:\n    print(a + len(s))\nelse:\n    print(b)",
    "options": {
      "A": "6",
      "B": "5",
      "C": "4",
      "D": "10"
    },
    "correct": "B",
    "explanation": "Şərt yoxlanılır, yalnız uyğun blok işləyir və 5 çap edilir."
  },
  {
    "id": 335,
    "difficulty": "hard",
    "time": 60,
    "question": "Verilmiş kodun nəticəsini tapın.",
    "code": "a, b = \"12\", \"21\"\nif int(a) < int(b):\n    c = a + b\nelse:\n    c = b + a\nprint(c)",
    "options": {
      "A": "1222",
      "B": "1220",
      "C": "1221",
      "D": "2442"
    },
    "correct": "C",
    "explanation": "Şərt yoxlanılır, yalnız uyğun blok işləyir və 1221 çap edilir."
  },
  {
    "id": 336,
    "difficulty": "hard",
    "time": 60,
    "question": "Kod icra edildikdən sonra hansı nəticə alınacaq?",
    "code": "a = [2, 4, 6]\nif a.count(4) and sum(a) > 10:\n    print(a[0] * a[2])\nelse:\n    print(len(a))",
    "options": {
      "A": "13",
      "B": "11",
      "C": "24",
      "D": "12"
    },
    "correct": "D",
    "explanation": "Məntiqi şərt qiymətləndirilir və uyğun blok icra olunur; nəticə 12-dir."
  },
  {
    "id": 337,
    "difficulty": "hard",
    "time": 60,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "x = 13\nif x > 10:\n    if x % 2 == 1:\n        x = x * 2\n    else:\n        x = x // 2\nelse:\n    x = x + 5\nprint(x)",
    "options": {
      "A": "26",
      "B": "27",
      "C": "25",
      "D": "52"
    },
    "correct": "A",
    "explanation": "Şərt yoxlanılır, yalnız uyğun blok işləyir və 26 çap edilir."
  },
  {
    "id": 338,
    "difficulty": "hard",
    "time": 60,
    "question": "Kodun çıxış qiymətini müəyyən edin.",
    "code": "s = \"ALMA\"\nif s.lower().count(\"a\") > 1:\n    print(s.lower())\nelse:\n    print(s.capitalize())",
    "options": {
      "A": "ALMA",
      "B": "alma",
      "C": "almaalma",
      "D": "4"
    },
    "correct": "B",
    "explanation": "Şərt yoxlanılır, yalnız uyğun blok işləyir və alma çap edilir."
  },
  {
    "id": 339,
    "difficulty": "hard",
    "time": 60,
    "question": "Verilmiş kodun nəticəsini tapın.",
    "code": "a = 6\nb = 9\nif a * 3 == b * 2:\n    print(a + b)\nelif a < b:\n    print(b - a)\nelse:\n    print(a * b)",
    "options": {
      "A": "16",
      "B": "14",
      "C": "15",
      "D": "30"
    },
    "correct": "C",
    "explanation": "Şərt yoxlanılır, yalnız uyğun blok işləyir və 15 çap edilir."
  },
  {
    "id": 340,
    "difficulty": "hard",
    "time": 60,
    "question": "Kod icra edildikdən sonra hansı nəticə alınacaq?",
    "code": "a = [5, 10, 15]\nif a[1] % a[0] == 0 and a[2] // a[0] == 3:\n    a.append(sum(a))\nprint(a[3])",
    "options": {
      "A": "31",
      "B": "29",
      "C": "60",
      "D": "30"
    },
    "correct": "D",
    "explanation": "Məntiqi şərt qiymətləndirilir və uyğun blok icra olunur; nəticə 30-dir."
  },
  {
    "id": 341,
    "difficulty": "hard",
    "time": 60,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "s = 0\nfor i in range(2, 9):\n    if i % 3 == 0:\n        s += i * 2\n    else:\n        s += i\nprint(s)",
    "options": {
      "A": "44",
      "B": "45",
      "C": "43",
      "D": "88"
    },
    "correct": "A",
    "explanation": "Qısaldılmış mənimsətmə əməliyyatları ardıcıl tətbiq edilir; son nəticə 44-dir."
  },
  {
    "id": 342,
    "difficulty": "hard",
    "time": 60,
    "question": "Kodun çıxış qiymətini müəyyən edin.",
    "code": "a = [3, 5, 8, 10, 11]\ns = 0\nfor i in a:\n    if i % 2 == 0:\n        s += i // 2\n    else:\n        s += 1\nprint(s)",
    "options": {
      "A": "13",
      "B": "12",
      "C": "11",
      "D": "24"
    },
    "correct": "B",
    "explanation": "Qısaldılmış mənimsətmə əməliyyatları ardıcıl tətbiq edilir; son nəticə 12-dir."
  },
  {
    "id": 343,
    "difficulty": "hard",
    "time": 60,
    "question": "Verilmiş kodun nəticəsini tapın.",
    "code": "s = \"banana\"\nk = 0\nfor i in s:\n    if i == \"a\":\n        k += 2\n    else:\n        k += 1\nprint(k)",
    "options": {
      "A": "10",
      "B": "8",
      "C": "9",
      "D": "18"
    },
    "correct": "C",
    "explanation": "Qısaldılmış mənimsətmə əməliyyatları ardıcıl tətbiq edilir; son nəticə 9-dir."
  },
  {
    "id": 344,
    "difficulty": "hard",
    "time": 60,
    "question": "Kod icra edildikdən sonra hansı nəticə alınacaq?",
    "code": "a = []\nfor i in range(1, 8):\n    if i % 2 == 0:\n        a.append(i * 2)\n    else:\n        a.append(i)\nprint(sum(a))",
    "options": {
      "A": "41",
      "B": "39",
      "C": "80",
      "D": "40"
    },
    "correct": "D",
    "explanation": "Dövr verilən aralıqda işləyir, şərtə uyğun qiymətlər nəzərə alınır və nəticə 40 olur."
  },
  {
    "id": 345,
    "difficulty": "hard",
    "time": 60,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "i = 3\ns = 1\nwhile i < 8:\n    s *= i\n    i += 2\nprint(s)",
    "options": {
      "A": "105",
      "B": "106",
      "C": "104",
      "D": "210"
    },
    "correct": "A",
    "explanation": "Qısaldılmış mənimsətmə əməliyyatları ardıcıl tətbiq edilir; son nəticə 105-dir."
  },
  {
    "id": 346,
    "difficulty": "hard",
    "time": 60,
    "question": "Kodun çıxış qiymətini müəyyən edin.",
    "code": "n = 246\ns = 0\nwhile n > 0:\n    s += n % 10\n    n = n // 10\nprint(s)",
    "options": {
      "A": "13",
      "B": "12",
      "C": "11",
      "D": "24"
    },
    "correct": "B",
    "explanation": "Qısaldılmış mənimsətmə əməliyyatları ardıcıl tətbiq edilir; son nəticə 12-dir."
  },
  {
    "id": 347,
    "difficulty": "hard",
    "time": 60,
    "question": "Verilmiş kodun nəticəsini tapın.",
    "code": "a = [1, 2, 3]\ns = 0\nfor i in range(len(a)):\n    s += a[i] * i\nprint(s)",
    "options": {
      "A": "9",
      "B": "7",
      "C": "8",
      "D": "16"
    },
    "correct": "C",
    "explanation": "Qısaldılmış mənimsətmə əməliyyatları ardıcıl tətbiq edilir; son nəticə 8-dir."
  },
  {
    "id": 348,
    "difficulty": "hard",
    "time": 60,
    "question": "Kod icra edildikdən sonra hansı nəticə alınacaq?",
    "code": "s = \"kodlama\"\na = \"\"\nfor i in range(len(s)):\n    if i % 2 == 0:\n        a += s[i]\nprint(a)",
    "options": {
      "A": "KDAA",
      "B": "kdaakdaa",
      "C": "4",
      "D": "kdaa"
    },
    "correct": "D",
    "explanation": "Qısaldılmış mənimsətmə əməliyyatları ardıcıl tətbiq edilir; son nəticə kdaa-dir."
  },
  {
    "id": 349,
    "difficulty": "hard",
    "time": 60,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "s = 0\nfor i in range(1, 5):\n    for j in range(1, 4):\n        if i == j:\n            s += i + j\nprint(s)",
    "options": {
      "A": "12",
      "B": "13",
      "C": "11",
      "D": "24"
    },
    "correct": "A",
    "explanation": "Qısaldılmış mənimsətmə əməliyyatları ardıcıl tətbiq edilir; son nəticə 12-dir."
  },
  {
    "id": 350,
    "difficulty": "hard",
    "time": 60,
    "question": "Kodun çıxış qiymətini müəyyən edin.",
    "code": "a = [2, 4, 6]\nfor i in range(len(a)):\n    a[i] = a[i] + i\nprint(a)",
    "options": {
      "A": "[8, 5, 2]",
      "B": "[2, 5, 8]",
      "C": "[2, 5]",
      "D": "[2, 5, 8, 2, 5, 8]"
    },
    "correct": "B",
    "explanation": "Dövr elementləri ardıcıl emal edir və sonda [2, 5, 8] çap olunur."
  },
  {
    "id": 351,
    "difficulty": "hard",
    "time": 60,
    "question": "Verilmiş kodun nəticəsini tapın.",
    "code": "s = 0\nfor i in range(1, 20):\n    if i % 5 == 0:\n        break\n    s += i\nprint(s)",
    "options": {
      "A": "11",
      "B": "9",
      "C": "10",
      "D": "20"
    },
    "correct": "C",
    "explanation": "Qısaldılmış mənimsətmə əməliyyatları ardıcıl tətbiq edilir; son nəticə 10-dir."
  },
  {
    "id": 352,
    "difficulty": "hard",
    "time": 60,
    "question": "Kod icra edildikdən sonra hansı nəticə alınacaq?",
    "code": "s = 0\nfor i in range(1, 8):\n    if i % 3 == 0:\n        continue\n    s += i\nprint(s)",
    "options": {
      "A": "20",
      "B": "18",
      "C": "38",
      "D": "19"
    },
    "correct": "D",
    "explanation": "Qısaldılmış mənimsətmə əməliyyatları ardıcıl tətbiq edilir; son nəticə 19-dir."
  },
  {
    "id": 353,
    "difficulty": "hard",
    "time": 60,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "a = []\nfor i in range(10, 15):\n    if i % 2 == 0:\n        a.append(i // 2)\n    else:\n        a.append(i % 5)\nprint(a)",
    "options": {
      "A": "[5, 1, 6, 3, 7]",
      "B": "[7, 3, 6, 1, 5]",
      "C": "[1, 3, 5, 6, 7]",
      "D": "[5, 1, 6, 3]"
    },
    "correct": "A",
    "explanation": "Dövr verilən aralıqda işləyir, şərtə uyğun qiymətlər nəzərə alınır və nəticə [5, 1, 6, 3, 7] olur."
  },
  {
    "id": 354,
    "difficulty": "hard",
    "time": 60,
    "question": "Kodun çıxış qiymətini müəyyən edin.",
    "code": "s = \"abcde\"\nk = \"\"\nfor i in range(len(s)):\n    if i > 2:\n        break\n    k += s[i]\nprint(k)",
    "options": {
      "A": "ABC",
      "B": "abc",
      "C": "abcabc",
      "D": "3"
    },
    "correct": "B",
    "explanation": "Qısaldılmış mənimsətmə əməliyyatları ardıcıl tətbiq edilir; son nəticə abc-dir."
  },
  {
    "id": 355,
    "difficulty": "hard",
    "time": 60,
    "question": "Verilmiş kodun nəticəsini tapın.",
    "code": "a = [5, 1, 5, 2]\ns = 0\nfor i in a:\n    s += a.count(i)\nprint(s)",
    "options": {
      "A": "7",
      "B": "5",
      "C": "6",
      "D": "12"
    },
    "correct": "C",
    "explanation": "Qısaldılmış mənimsətmə əməliyyatları ardıcıl tətbiq edilir; son nəticə 6-dir."
  },
  {
    "id": 356,
    "difficulty": "hard",
    "time": 60,
    "question": "Kod icra edildikdən sonra hansı nəticə alınacaq?",
    "code": "i = 1\ns = \"\"\nwhile i <= 4:\n    s += str(i * i)\n    i += 1\nprint(s)",
    "options": {
      "A": "14917",
      "B": "14915",
      "C": "29832",
      "D": "14916"
    },
    "correct": "D",
    "explanation": "Qiymətlər sətirə çevrilir və sətir kimi birləşdirilir; nəticə 14916 olur."
  },
  {
    "id": 357,
    "difficulty": "hard",
    "time": 60,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "a = [3, 6, 9, 12]\ns = 0\nfor i in range(len(a)):\n    if a[i] % 6 == 0:\n        s += i + a[i]\nprint(s)",
    "options": {
      "A": "22",
      "B": "23",
      "C": "21",
      "D": "44"
    },
    "correct": "A",
    "explanation": "Qısaldılmış mənimsətmə əməliyyatları ardıcıl tətbiq edilir; son nəticə 22-dir."
  },
  {
    "id": 358,
    "difficulty": "hard",
    "time": 60,
    "question": "Kodun çıxış qiymətini müəyyən edin.",
    "code": "s = 0\nfor i in range(2, 6):\n    for j in range(1, i):\n        s += 1\nprint(s)",
    "options": {
      "A": "11",
      "B": "10",
      "C": "9",
      "D": "20"
    },
    "correct": "B",
    "explanation": "Qısaldılmış mənimsətmə əməliyyatları ardıcıl tətbiq edilir; son nəticə 10-dir."
  },
  {
    "id": 359,
    "difficulty": "hard",
    "time": 60,
    "question": "Verilmiş kodun nəticəsini tapın.",
    "code": "a = [1, 2, 3]\nb = []\nfor i in a:\n    b.append(i)\n    b.append(i * 2)\nprint(sum(b))",
    "options": {
      "A": "19",
      "B": "17",
      "C": "18",
      "D": "36"
    },
    "correct": "C",
    "explanation": "Siyahı yeniləndikdən sonra sum() elementlərin cəmini hesablayır; nəticə 18-dir."
  },
  {
    "id": 360,
    "difficulty": "hard",
    "time": 60,
    "question": "Kod icra edildikdən sonra hansı nəticə alınacaq?",
    "code": "s = \"informatika\"\nk = 0\nfor i in range(len(s)):\n    if s[i] == \"a\":\n        k += i\nprint(k)",
    "options": {
      "A": "17",
      "B": "15",
      "C": "32",
      "D": "16"
    },
    "correct": "D",
    "explanation": "Qısaldılmış mənimsətmə əməliyyatları ardıcıl tətbiq edilir; son nəticə 16-dir."
  },
  {
    "id": 361,
    "difficulty": "hard",
    "time": 60,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "a = [4, 7, 10, 13]\ns = 0\nfor i in a:\n    if i % 3 == 1:\n        s += i\nprint(s)",
    "options": {
      "A": "34",
      "B": "35",
      "C": "33",
      "D": "68"
    },
    "correct": "A",
    "explanation": "Qısaldılmış mənimsətmə əməliyyatları ardıcıl tətbiq edilir; son nəticə 34-dir."
  },
  {
    "id": 362,
    "difficulty": "hard",
    "time": 60,
    "question": "Kodun çıxış qiymətini müəyyən edin.",
    "code": "i = 16\nk = 0\nwhile i >= 2:\n    i = i // 2\n    k += i\nprint(k)",
    "options": {
      "A": "16",
      "B": "15",
      "C": "14",
      "D": "30"
    },
    "correct": "B",
    "explanation": "Qısaldılmış mənimsətmə əməliyyatları ardıcıl tətbiq edilir; son nəticə 15-dir."
  },
  {
    "id": 363,
    "difficulty": "hard",
    "time": 60,
    "question": "Verilmiş kodun nəticəsini tapın.",
    "code": "a = \"12121\"\ns = 0\nfor i in a:\n    if i == \"1\":\n        s += 1\n    else:\n        s += 2\nprint(s)",
    "options": {
      "A": "8",
      "B": "6",
      "C": "7",
      "D": "14"
    },
    "correct": "C",
    "explanation": "Qısaldılmış mənimsətmə əməliyyatları ardıcıl tətbiq edilir; son nəticə 7-dir."
  },
  {
    "id": 364,
    "difficulty": "hard",
    "time": 60,
    "question": "Kod icra edildikdən sonra hansı nəticə alınacaq?",
    "code": "a = [2, 3, 4]\ns = 1\nfor i in a:\n    s *= i\n    if s > 20:\n        break\nprint(s)",
    "options": {
      "A": "25",
      "B": "23",
      "C": "48",
      "D": "24"
    },
    "correct": "D",
    "explanation": "Qısaldılmış mənimsətmə əməliyyatları ardıcıl tətbiq edilir; son nəticə 24-dir."
  },
  {
    "id": 365,
    "difficulty": "hard",
    "time": 60,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "s = 0\nfor i in range(1, 6):\n    if not i % 2 == 0:\n        s += i * 2\n    else:\n        s += i\nprint(s)",
    "options": {
      "A": "24",
      "B": "25",
      "C": "23",
      "D": "48"
    },
    "correct": "A",
    "explanation": "Qısaldılmış mənimsətmə əməliyyatları ardıcıl tətbiq edilir; son nəticə 24-dir."
  },
  {
    "id": 366,
    "difficulty": "hard",
    "time": 60,
    "question": "Kodun çıxış qiymətini müəyyən edin.",
    "code": "def f(x):\n    return x * 2 + 1\n\nprint(f(3) + f(5))",
    "options": {
      "A": "19",
      "B": "18",
      "C": "17",
      "D": "36"
    },
    "correct": "B",
    "explanation": "Funksiya daxilində hesablanan qiymət return ilə qaytarılır; yekun nəticə 18-dir."
  },
  {
    "id": 367,
    "difficulty": "hard",
    "time": 60,
    "question": "Verilmiş kodun nəticəsini tapın.",
    "code": "def h(a, b):\n    if a > b:\n        return a - b\n    return a + b\n\nprint(h(7, 4) + h(2, 5))",
    "options": {
      "A": "11",
      "B": "9",
      "C": "10",
      "D": "20"
    },
    "correct": "C",
    "explanation": "Funksiya daxilində hesablanan qiymət return ilə qaytarılır; yekun nəticə 10-dir."
  },
  {
    "id": 368,
    "difficulty": "hard",
    "time": 60,
    "question": "Kod icra edildikdən sonra hansı nəticə alınacaq?",
    "code": "def sira(a):\n    a.sort()\n    return a[0] + a[2]\n\nprint(sira([5, 1, 4]))",
    "options": {
      "A": "7",
      "B": "5",
      "C": "12",
      "D": "6"
    },
    "correct": "D",
    "explanation": "Funksiya daxilində hesablanan qiymət return ilə qaytarılır; yekun nəticə 6-dir."
  },
  {
    "id": 369,
    "difficulty": "hard",
    "time": 60,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "def say(s):\n    return s.count(\"a\") + len(s)\n\nprint(say(\"alma\") + say(\"ata\"))",
    "options": {
      "A": "11",
      "B": "12",
      "C": "10",
      "D": "22"
    },
    "correct": "A",
    "explanation": "Funksiya daxilində hesablanan qiymət return ilə qaytarılır; yekun nəticə 11-dir."
  },
  {
    "id": 370,
    "difficulty": "hard",
    "time": 60,
    "question": "Kodun çıxış qiymətini müəyyən edin.",
    "code": "def hesab(n):\n    s = 0\n    while n > 0:\n        s += n % 10\n        n = n // 10\n    return s\n\nprint(hesab(345) * 2)",
    "options": {
      "A": "25",
      "B": "24",
      "C": "23",
      "D": "48"
    },
    "correct": "B",
    "explanation": "Qısaldılmış mənimsətmə əməliyyatları ardıcıl tətbiq edilir; son nəticə 24-dir."
  },
  {
    "id": 371,
    "difficulty": "hard",
    "time": 60,
    "question": "Verilmiş kodun nəticəsini tapın.",
    "code": "def f(a):\n    for i in range(len(a)):\n        a[i] = a[i] + i\n    return sum(a)\n\nprint(f([2, 2, 2]))",
    "options": {
      "A": "10",
      "B": "8",
      "C": "9",
      "D": "18"
    },
    "correct": "C",
    "explanation": "Funksiya daxilində hesablanan qiymət return ilə qaytarılır; yekun nəticə 9-dir."
  },
  {
    "id": 372,
    "difficulty": "hard",
    "time": 60,
    "question": "Kod icra edildikdən sonra hansı nəticə alınacaq?",
    "code": "def bir(x):\n    return x + 2\n\ndef iki(y):\n    return bir(y) * 3\n\nprint(iki(4))",
    "options": {
      "A": "19",
      "B": "17",
      "C": "36",
      "D": "18"
    },
    "correct": "D",
    "explanation": "Funksiya daxilində hesablanan qiymət return ilə qaytarılır; yekun nəticə 18-dir."
  },
  {
    "id": 373,
    "difficulty": "hard",
    "time": 60,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "def sec(a, b):\n    if a % 2 == 0:\n        return a // 2\n    else:\n        return b * 2\n\nprint(sec(8, 3) + sec(5, 4))",
    "options": {
      "A": "12",
      "B": "13",
      "C": "11",
      "D": "24"
    },
    "correct": "A",
    "explanation": "Funksiya daxilində hesablanan qiymət return ilə qaytarılır; yekun nəticə 12-dir."
  },
  {
    "id": 374,
    "difficulty": "hard",
    "time": 60,
    "question": "Kodun çıxış qiymətini müəyyən edin.",
    "code": "def soz(s):\n    return s[0:2] + str(len(s))\n\nprint(soz(\"python\"))",
    "options": {
      "A": "PY6",
      "B": "py6",
      "C": "py6py6",
      "D": "3"
    },
    "correct": "B",
    "explanation": "Qiymətlər sətirə çevrilir və sətir kimi birləşdirilir; nəticə py6 olur."
  },
  {
    "id": 375,
    "difficulty": "hard",
    "time": 60,
    "question": "Verilmiş kodun nəticəsini tapın.",
    "code": "def cem(a):\n    s = 0\n    for i in a:\n        if i > 0:\n            s += i\n    return s\n\nprint(cem([3, -2, 5, 0]))",
    "options": {
      "A": "9",
      "B": "7",
      "C": "8",
      "D": "16"
    },
    "correct": "C",
    "explanation": "Qısaldılmış mənimsətmə əməliyyatları ardıcıl tətbiq edilir; son nəticə 8-dir."
  },
  {
    "id": 376,
    "difficulty": "hard",
    "time": 60,
    "question": "Kod icra edildikdən sonra hansı nəticə alınacaq?",
    "code": "def f(x):\n    if x <= 1:\n        return 1\n    return x + f(x - 2)\n\nprint(f(7))",
    "options": {
      "A": "17",
      "B": "15",
      "C": "32",
      "D": "16"
    },
    "correct": "D",
    "explanation": "Funksiya daxilində hesablanan qiymət return ilə qaytarılır; yekun nəticə 16-dir."
  },
  {
    "id": 377,
    "difficulty": "hard",
    "time": 60,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "def g(x):\n    if x < 3:\n        return x\n    return x * g(x - 2)\n\nprint(g(5))",
    "options": {
      "A": "15",
      "B": "16",
      "C": "14",
      "D": "30"
    },
    "correct": "A",
    "explanation": "Funksiya daxilində hesablanan qiymət return ilə qaytarılır; yekun nəticə 15-dir."
  },
  {
    "id": 378,
    "difficulty": "hard",
    "time": 60,
    "question": "Kodun çıxış qiymətini müəyyən edin.",
    "code": "def duzelt(s):\n    s = s.strip()\n    return s.capitalize()\n\nprint(duzelt(\"  test  \"))",
    "options": {
      "A": "TEST",
      "B": "Test",
      "C": "test",
      "D": "TestTest"
    },
    "correct": "B",
    "explanation": "Funksiya daxilində hesablanan qiymət return ilə qaytarılır; yekun nəticə Test-dir."
  },
  {
    "id": 379,
    "difficulty": "hard",
    "time": 60,
    "question": "Verilmiş kodun nəticəsini tapın.",
    "code": "def hesab(a, b):\n    return str(a) + str(b)\n\nprint(int(hesab(12, 3)) + 4)",
    "options": {
      "A": "128",
      "B": "126",
      "C": "127",
      "D": "254"
    },
    "correct": "C",
    "explanation": "Qiymətlər sətirə çevrilir və sətir kimi birləşdirilir; nəticə 127 olur."
  },
  {
    "id": 380,
    "difficulty": "hard",
    "time": 60,
    "question": "Kod icra edildikdən sonra hansı nəticə alınacaq?",
    "code": "def f(a):\n    a.append(sum(a))\n    return len(a) + a[3]\n\nprint(f([1, 2, 3]))",
    "options": {
      "A": "11",
      "B": "9",
      "C": "20",
      "D": "10"
    },
    "correct": "D",
    "explanation": "Funksiya daxilində hesablanan qiymət return ilə qaytarılır; yekun nəticə 10-dir."
  },
  {
    "id": 381,
    "difficulty": "hard",
    "time": 60,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "def k(a, b, c):\n    if a > b and a > c:\n        return a\n    elif b > c:\n        return b\n    else:\n        return c\n\nprint(k(4, 9, 7) + k(8, 3, 5))",
    "options": {
      "A": "17",
      "B": "18",
      "C": "16",
      "D": "34"
    },
    "correct": "A",
    "explanation": "Funksiya daxilində hesablanan qiymət return ilə qaytarılır; yekun nəticə 17-dir."
  },
  {
    "id": 382,
    "difficulty": "hard",
    "time": 60,
    "question": "Kodun çıxış qiymətini müəyyən edin.",
    "code": "def f(s):\n    a = list(s)\n    a.reverse()\n    return \"\".join(a)\n\nprint(f(\"sual\"))",
    "options": {
      "A": "LAUS",
      "B": "laus",
      "C": "lauslaus",
      "D": "4"
    },
    "correct": "B",
    "explanation": "Funksiya daxilində hesablanan qiymət return ilə qaytarılır; yekun nəticə laus-dir."
  },
  {
    "id": 383,
    "difficulty": "hard",
    "time": 60,
    "question": "Verilmiş kodun nəticəsini tapın.",
    "code": "def h(n):\n    return n // 10 + n % 10\n\nprint(h(47) + h(58))",
    "options": {
      "A": "25",
      "B": "23",
      "C": "24",
      "D": "48"
    },
    "correct": "C",
    "explanation": "Funksiya daxilində hesablanan qiymət return ilə qaytarılır; yekun nəticə 24-dir."
  },
  {
    "id": 384,
    "difficulty": "hard",
    "time": 60,
    "question": "Kod icra edildikdən sonra hansı nəticə alınacaq?",
    "code": "def f(x):\n    s = 0\n    for i in range(1, x):\n        s += i\n    return s\n\nprint(f(6))",
    "options": {
      "A": "16",
      "B": "14",
      "C": "30",
      "D": "15"
    },
    "correct": "D",
    "explanation": "Qısaldılmış mənimsətmə əməliyyatları ardıcıl tətbiq edilir; son nəticə 15-dir."
  },
  {
    "id": 385,
    "difficulty": "hard",
    "time": 60,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "def f(a):\n    if len(a) > 3:\n        return a[1:4]\n    return a\n\nprint(f(\"alqoritm\"))",
    "options": {
      "A": "lqo",
      "B": "LQO",
      "C": "lqolqo",
      "D": "3"
    },
    "correct": "A",
    "explanation": "Funksiya daxilində hesablanan qiymət return ilə qaytarılır; yekun nəticə lqo-dir."
  },
  {
    "id": 386,
    "difficulty": "hard",
    "time": 60,
    "question": "Kodun çıxış qiymətini müəyyən edin.",
    "code": "a = [2, 5, 8]\ns = \"\"\nfor i in a:\n    if i % 2 == 0:\n        s += str(i // 2)\n    else:\n        s += str(i)\nprint(s)",
    "options": {
      "A": "155",
      "B": "154",
      "C": "153",
      "D": "308"
    },
    "correct": "B",
    "explanation": "Qiymətlər sətirə çevrilir və sətir kimi birləşdirilir; nəticə 154 olur."
  },
  {
    "id": 387,
    "difficulty": "hard",
    "time": 60,
    "question": "Verilmiş kodun nəticəsini tapın.",
    "code": "s = \"abacaba\"\na = []\nfor i in range(len(s)):\n    if s[i] == \"a\":\n        a.append(i)\nprint(sum(a))",
    "options": {
      "A": "13",
      "B": "11",
      "C": "12",
      "D": "24"
    },
    "correct": "C",
    "explanation": "Dövr verilən aralıqda işləyir, şərtə uyğun qiymətlər nəzərə alınır və nəticə 12 olur."
  },
  {
    "id": 388,
    "difficulty": "hard",
    "time": 60,
    "question": "Kod icra edildikdən sonra hansı nəticə alınacaq?",
    "code": "def f(x):\n    return x * x\n\na = [1, 2, 3]\ns = 0\nfor i in a:\n    s += f(i)\nprint(s)",
    "options": {
      "A": "15",
      "B": "13",
      "C": "28",
      "D": "14"
    },
    "correct": "D",
    "explanation": "Qısaldılmış mənimsətmə əməliyyatları ardıcıl tətbiq edilir; son nəticə 14-dir."
  },
  {
    "id": 389,
    "difficulty": "hard",
    "time": 60,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "a = \"15,20,5\"\nb = a.split(\",\")\ns = 0\nfor i in b:\n    s += int(i)\nprint(s // len(b))",
    "options": {
      "A": "13",
      "B": "14",
      "C": "12",
      "D": "26"
    },
    "correct": "A",
    "explanation": "Qısaldılmış mənimsətmə əməliyyatları ardıcıl tətbiq edilir; son nəticə 13-dir."
  },
  {
    "id": 390,
    "difficulty": "hard",
    "time": 60,
    "question": "Kodun çıxış qiymətini müəyyən edin.",
    "code": "a = [4, 1, 6, 1, 4]\ns = []\nfor i in a:\n    if a.count(i) == 1:\n        s.append(i)\nprint(s)",
    "options": {
      "A": "[]",
      "B": "[6]",
      "C": "[6, 6]",
      "D": "1"
    },
    "correct": "B",
    "explanation": "Dövr elementləri ardıcıl emal edir və sonda [6] çap olunur."
  },
  {
    "id": 391,
    "difficulty": "hard",
    "time": 60,
    "question": "Verilmiş kodun nəticəsini tapın.",
    "code": "def f(a):\n    a = list(a)\n    a[0] = \"K\"\n    return \"\".join(a)\n\nprint(f(\"kitab\"))",
    "options": {
      "A": "KITAB",
      "B": "kitab",
      "C": "Kitab",
      "D": "KitabKitab"
    },
    "correct": "C",
    "explanation": "Funksiya daxilində hesablanan qiymət return ilə qaytarılır; yekun nəticə Kitab-dir."
  },
  {
    "id": 392,
    "difficulty": "hard",
    "time": 60,
    "question": "Kod icra edildikdən sonra hansı nəticə alınacaq?",
    "code": "s = 0\nfor i in range(1, 5):\n    for j in range(1, 5):\n        if i + j == 5:\n            s += i * j\nprint(s)",
    "options": {
      "A": "21",
      "B": "19",
      "C": "40",
      "D": "20"
    },
    "correct": "D",
    "explanation": "Qısaldılmış mənimsətmə əməliyyatları ardıcıl tətbiq edilir; son nəticə 20-dir."
  },
  {
    "id": 393,
    "difficulty": "hard",
    "time": 60,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "a = [10, 15, 20, 25]\ns = 0\nfor i in range(len(a)):\n    if i % 2 == 0:\n        s += a[i] // 5\n    else:\n        s += a[i] % 10\nprint(s)",
    "options": {
      "A": "16",
      "B": "17",
      "C": "15",
      "D": "32"
    },
    "correct": "A",
    "explanation": "Qısaldılmış mənimsətmə əməliyyatları ardıcıl tətbiq edilir; son nəticə 16-dir."
  },
  {
    "id": 394,
    "difficulty": "hard",
    "time": 60,
    "question": "Kodun çıxış qiymətini müəyyən edin.",
    "code": "def f(n):\n    a = []\n    for i in range(1, n):\n        if n % i == 0:\n            a.append(i)\n    return sum(a)\n\nprint(f(12))",
    "options": {
      "A": "17",
      "B": "16",
      "C": "15",
      "D": "32"
    },
    "correct": "B",
    "explanation": "Funksiya daxilində hesablanan qiymət return ilə qaytarılır; yekun nəticə 16-dir."
  },
  {
    "id": 395,
    "difficulty": "hard",
    "time": 60,
    "question": "Verilmiş kodun nəticəsini tapın.",
    "code": "s = \"proqram\"\na = s.find(\"r\")\nb = s.find(\"a\")\nprint(s[a:b])",
    "options": {
      "A": "ROQR",
      "B": "roqrroqr",
      "C": "roqr",
      "D": "4"
    },
    "correct": "C",
    "explanation": "İndeksləmə 0-dan başlayır; seçilən elementlərlə hesablama nəticəsi roqr-dir."
  },
  {
    "id": 396,
    "difficulty": "hard",
    "time": 60,
    "question": "Kod icra edildikdən sonra hansı nəticə alınacaq?",
    "code": "a = [1, 2, 3]\nb = a\na.append(4)\nb[0] = 5\nprint(sum(a), sum(b))",
    "options": {
      "A": "28",
      "B": "15 15",
      "C": "1414",
      "D": "14 14"
    },
    "correct": "D",
    "explanation": "İndeksləmə 0-dan başlayır; seçilən elementlərlə hesablama nəticəsi 14 14-dir."
  },
  {
    "id": 397,
    "difficulty": "hard",
    "time": 60,
    "question": "Kod icra edilərsə nə çap olunacaq?",
    "code": "x = 3\ns = 0\nwhile x < 20:\n    s += x\n    x = x * 2 + 1\nprint(s)",
    "options": {
      "A": "25",
      "B": "26",
      "C": "24",
      "D": "50"
    },
    "correct": "A",
    "explanation": "Qısaldılmış mənimsətmə əməliyyatları ardıcıl tətbiq edilir; son nəticə 25-dir."
  },
  {
    "id": 398,
    "difficulty": "hard",
    "time": 60,
    "question": "Kodun çıxış qiymətini müəyyən edin.",
    "code": "def f(x, y):\n    while x < y:\n        x += 2\n        y -= 1\n    return x + y\n\nprint(f(2, 9))",
    "options": {
      "A": "15",
      "B": "14",
      "C": "13",
      "D": "28"
    },
    "correct": "B",
    "explanation": "Qısaldılmış mənimsətmə əməliyyatları ardıcıl tətbiq edilir; son nəticə 14-dir."
  },
  {
    "id": 399,
    "difficulty": "hard",
    "time": 60,
    "question": "Verilmiş kodun nəticəsini tapın.",
    "code": "a = \"12345\"\ns = 0\nfor i in range(len(a)):\n    if i % 2 == 0:\n        s += int(a[i])\nprint(s)",
    "options": {
      "A": "10",
      "B": "8",
      "C": "9",
      "D": "18"
    },
    "correct": "C",
    "explanation": "Qısaldılmış mənimsətmə əməliyyatları ardıcıl tətbiq edilir; son nəticə 9-dir."
  },
  {
    "id": 400,
    "difficulty": "hard",
    "time": 60,
    "question": "Kod icra edildikdən sonra hansı nəticə alınacaq?",
    "code": "a = [3, 6, 9, 12]\nfor i in range(len(a)):\n    if a[i] % 6 == 0:\n        a[i] = a[i] // 3\nprint(sum(a))",
    "options": {
      "A": "19",
      "B": "17",
      "C": "36",
      "D": "18"
    },
    "correct": "D",
    "explanation": "Dövr verilən aralıqda işləyir, şərtə uyğun qiymətlər nəzərə alınır və nəticə 18 olur."
  }
];

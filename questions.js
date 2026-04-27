const questions = [
  {
    id: 1,
    difficulty: "easy",
    time: 30,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `a = "42"
print(type(a))`,
    options: {
      A: "<class 'str'>",
      B: "<class 'int'>",
      C: "<class 'float'>",
      D: "<class 'list'>"
    },
    correct: "A",
    explanation: "Kod addım-addım icra edildikdə nəticə <class 'str'> olur. Buna görə düzgün cavab A variantıdır."
  },
  {
    id: 2,
    difficulty: "easy",
    time: 30,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `x, y = 6, 9
x, y = y, x
print(x - y)`,
    options: {
      A: "4",
      B: "3",
      C: "2",
      D: "6"
    },
    correct: "B",
    explanation: "Kod addım-addım icra edildikdə nəticə 3 olur. Buna görə düzgün cavab B variantıdır."
  },
  {
    id: 3,
    difficulty: "easy",
    time: 30,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `a = "7"
print(a * 3)`,
    options: {
      A: "778",
      B: "776",
      C: "777",
      D: "1554"
    },
    correct: "C",
    explanation: "Kod addım-addım icra edildikdə nəticə 777 olur. Buna görə düzgün cavab C variantıdır."
  },
  {
    id: 4,
    difficulty: "easy",
    time: 30,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `a, b = 4, 5
c = str(a) + str(b)
print(c)`,
    options: {
      A: "46",
      B: "44",
      C: "90",
      D: "45"
    },
    correct: "D",
    explanation: "Kod addım-addım icra edildikdə nəticə 45 olur. Buna görə düzgün cavab D variantıdır."
  },
  {
    id: 5,
    difficulty: "easy",
    time: 30,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `n = 8
n += 3
n *= 2
print(n)`,
    options: {
      A: "22",
      B: "23",
      C: "21",
      D: "44"
    },
    correct: "A",
    explanation: "Kod addım-addım icra edildikdə nəticə 22 olur. Buna görə düzgün cavab A variantıdır."
  },
  {
    id: 6,
    difficulty: "easy",
    time: 30,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `a, b, c = range(3, 6)
print(a + b + c)`,
    options: {
      A: "13",
      B: "12",
      C: "11",
      D: "24"
    },
    correct: "B",
    explanation: "Kod addım-addım icra edildikdə nəticə 12 olur. Buna görə düzgün cavab B variantıdır."
  },
  {
    id: 7,
    difficulty: "easy",
    time: 30,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `k = 10
# k = k + 5
k = k * 2
print(k)`,
    options: {
      A: "21",
      B: "19",
      C: "20",
      D: "40"
    },
    correct: "C",
    explanation: "Kod addım-addım icra edildikdə nəticə 20 olur. Buna görə düzgün cavab C variantıdır."
  },
  {
    id: 8,
    difficulty: "easy",
    time: 30,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `a = "Python"
b = "Dərs"
print(a + " " + b)`,
    options: {
      A: "PYTHON DƏRS",
      B: "python dərs",
      C: "srəD nohtyP",
      D: "Python Dərs"
    },
    correct: "D",
    explanation: "Kod addım-addım icra edildikdə nəticə Python Dərs olur. Buna görə düzgün cavab D variantıdır."
  },
  {
    id: 9,
    difficulty: "easy",
    time: 30,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `m = 15
n = 4
print(m // n, m % n)`,
    options: {
      A: "3 3",
      B: "3",
      C: "33",
      D: "0"
    },
    correct: "A",
    explanation: "Kod addım-addım icra edildikdə nəticə 3 3 olur. Buna görə düzgün cavab A variantıdır."
  },
  {
    id: 10,
    difficulty: "easy",
    time: 30,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `a = True
b = False
print(int(a) + int(b))`,
    options: {
      A: "2",
      B: "1",
      C: "0",
      D: "4"
    },
    correct: "B",
    explanation: "Kod addım-addım icra edildikdə nəticə 1 olur. Buna görə düzgün cavab B variantıdır."
  },
  {
    id: 11,
    difficulty: "easy",
    time: 30,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `a = 4
b = -7
print(abs(b) - a)`,
    options: {
      A: "4",
      B: "2",
      C: "3",
      D: "6"
    },
    correct: "C",
    explanation: "Kod addım-addım icra edildikdə nəticə 3 olur. Buna görə düzgün cavab C variantıdır."
  },
  {
    id: 12,
    difficulty: "easy",
    time: 30,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `x = 2
y = 5
print(pow(x, 3) + y)`,
    options: {
      A: "14",
      B: "12",
      C: "26",
      D: "13"
    },
    correct: "D",
    explanation: "Kod addım-addım icra edildikdə nəticə 13 olur. Buna görə düzgün cavab D variantıdır."
  },
  {
    id: 13,
    difficulty: "easy",
    time: 30,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `a = 12
b = 5
print(a + b * 2)`,
    options: {
      A: "22",
      B: "23",
      C: "21",
      D: "44"
    },
    correct: "A",
    explanation: "Kod addım-addım icra edildikdə nəticə 22 olur. Buna görə düzgün cavab A variantıdır."
  },
  {
    id: 14,
    difficulty: "easy",
    time: 30,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `x = "15"
y = "5"
print(x + y)`,
    options: {
      A: "156",
      B: "155",
      C: "154",
      D: "310"
    },
    correct: "B",
    explanation: "Kod addım-addım icra edildikdə nəticə 155 olur. Buna görə düzgün cavab B variantıdır."
  },
  {
    id: 15,
    difficulty: "easy",
    time: 30,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `a = 27
print(a // 10 + a % 10)`,
    options: {
      A: "10",
      B: "8",
      C: "9",
      D: "18"
    },
    correct: "C",
    explanation: "Kod addım-addım icra edildikdə nəticə 9 olur. Buna görə düzgün cavab C variantıdır."
  },
  {
    id: 16,
    difficulty: "easy",
    time: 30,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `a = 50
b = a / 2 + a // 2 + a % 2
print(int(b))`,
    options: {
      A: "51",
      B: "49",
      C: "100",
      D: "50"
    },
    correct: "D",
    explanation: "Kod addım-addım icra edildikdə nəticə 50 olur. Buna görə düzgün cavab D variantıdır."
  },
  {
    id: 17,
    difficulty: "easy",
    time: 30,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `a, b = 3, 4
c = abs(b * 2 - a ** 2)
print(c)`,
    options: {
      A: "1",
      B: "2",
      C: "0",
      D: "4"
    },
    correct: "A",
    explanation: "Kod addım-addım icra edildikdə nəticə 1 olur. Buna görə düzgün cavab A variantıdır."
  },
  {
    id: 18,
    difficulty: "easy",
    time: 30,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `a = "12"
print(int(a) + 3)`,
    options: {
      A: "16",
      B: "15",
      C: "14",
      D: "30"
    },
    correct: "B",
    explanation: "Kod addım-addım icra edildikdə nəticə 15 olur. Buna görə düzgün cavab B variantıdır."
  },
  {
    id: 19,
    difficulty: "easy",
    time: 30,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `n = 456
a = list(str(n))
print(a[1])`,
    options: {
      A: "6",
      B: "4",
      C: "5",
      D: "10"
    },
    correct: "C",
    explanation: "Kod addım-addım icra edildikdə nəticə 5 olur. Buna görə düzgün cavab C variantıdır."
  },
  {
    id: 20,
    difficulty: "easy",
    time: 30,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `a = 5
b = 2
print(a / b)`,
    options: {
      A: "2",
      B: "3.5",
      C: "5.0",
      D: "2.5"
    },
    correct: "D",
    explanation: "Kod addım-addım icra edildikdə nəticə 2.5 olur. Buna görə düzgün cavab D variantıdır."
  },
  {
    id: 21,
    difficulty: "easy",
    time: 30,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `s = "informatika"
print(s[0] + s[5])`,
    options: {
      A: "im",
      B: "IM",
      C: "mi",
      D: "2"
    },
    correct: "A",
    explanation: "Kod addım-addım icra edildikdə nəticə im olur. Buna görə düzgün cavab A variantıdır."
  },
  {
    id: 22,
    difficulty: "easy",
    time: 30,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `s = "komputer"
print(s[1:4])`,
    options: {
      A: "OMP",
      B: "omp",
      C: "pmo",
      D: "3"
    },
    correct: "B",
    explanation: "Kod addım-addım icra edildikdə nəticə omp olur. Buna görə düzgün cavab B variantıdır."
  },
  {
    id: 23,
    difficulty: "easy",
    time: 30,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `s = "alqoritm"
print(s[:3])`,
    options: {
      A: "ALQ",
      B: "qla",
      C: "alq",
      D: "3"
    },
    correct: "C",
    explanation: "Kod addım-addım icra edildikdə nəticə alq olur. Buna görə düzgün cavab C variantıdır."
  },
  {
    id: 24,
    difficulty: "easy",
    time: 30,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `s = "proqram"
print(s[3:])`,
    options: {
      A: "QRAM",
      B: "marq",
      C: "4",
      D: "qram"
    },
    correct: "D",
    explanation: "Kod addım-addım icra edildikdə nəticə qram olur. Buna görə düzgün cavab D variantıdır."
  },
  {
    id: 25,
    difficulty: "easy",
    time: 30,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `s = "ana dili"
print(len(s))`,
    options: {
      A: "8",
      B: "9",
      C: "7",
      D: "16"
    },
    correct: "A",
    explanation: "Kod addım-addım icra edildikdə nəticə 8 olur. Buna görə düzgün cavab A variantıdır."
  },
  {
    id: 26,
    difficulty: "easy",
    time: 30,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `s = "banana"
print(s.count("a"))`,
    options: {
      A: "4",
      B: "3",
      C: "2",
      D: "6"
    },
    correct: "B",
    explanation: "Kod addım-addım icra edildikdə nəticə 3 olur. Buna görə düzgün cavab B variantıdır."
  },
  {
    id: 27,
    difficulty: "easy",
    time: 30,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `s = "testlər"
print(s.find("t", 1))`,
    options: {
      A: "4",
      B: "2",
      C: "3",
      D: "6"
    },
    correct: "C",
    explanation: "Kod addım-addım icra edildikdə nəticə 3 olur. Buna görə düzgün cavab C variantıdır."
  },
  {
    id: 28,
    difficulty: "easy",
    time: 30,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `s = "  kod  "
print(s.strip() + "!")`,
    options: {
      A: "KOD!",
      B: "!dok",
      C: "4",
      D: "kod!"
    },
    correct: "D",
    explanation: "Kod addım-addım icra edildikdə nəticə kod! olur. Buna görə düzgün cavab D variantıdır."
  },
  {
    id: 29,
    difficulty: "easy",
    time: 30,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `s = "məktəb"
print(s[0] + s[3])`,
    options: {
      A: "mt",
      B: "MT",
      C: "tm",
      D: "2"
    },
    correct: "A",
    explanation: "Kod addım-addım icra edildikdə nəticə mt olur. Buna görə düzgün cavab A variantıdır."
  },
  {
    id: 30,
    difficulty: "easy",
    time: 30,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `s = "komanda"
print(s[2:5])`,
    options: {
      A: "MAN",
      B: "man",
      C: "nam",
      D: "3"
    },
    correct: "B",
    explanation: "Kod addım-addım icra edildikdə nəticə man olur. Buna görə düzgün cavab B variantıdır."
  },
  {
    id: 31,
    difficulty: "easy",
    time: 30,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `s = "Python"
print(len(s) + s.find("h"))`,
    options: {
      A: "10",
      B: "8",
      C: "9",
      D: "18"
    },
    correct: "C",
    explanation: "Kod addım-addım icra edildikdə nəticə 9 olur. Buna görə düzgün cavab C variantıdır."
  },
  {
    id: 32,
    difficulty: "easy",
    time: 30,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `s = "dərslər"
print(s.count("r"))`,
    options: {
      A: "3",
      B: "1",
      C: "4",
      D: "2"
    },
    correct: "D",
    explanation: "Kod addım-addım icra edildikdə nəticə 2 olur. Buna görə düzgün cavab D variantıdır."
  },
  {
    id: 33,
    difficulty: "easy",
    time: 30,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `s = "sabah"
print(s.replace("a", "o"))`,
    options: {
      A: "soboh",
      B: "SOBOH",
      C: "hobos",
      D: "5"
    },
    correct: "A",
    explanation: "Kod addım-addım icra edildikdə nəticə soboh olur. Buna görə düzgün cavab A variantıdır."
  },
  {
    id: 34,
    difficulty: "easy",
    time: 30,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `s = "MiQ"
print(s.lower())`,
    options: {
      A: "MIQ",
      B: "miq",
      C: "qim",
      D: "3"
    },
    correct: "B",
    explanation: "Kod addım-addım icra edildikdə nəticə miq olur. Buna görə düzgün cavab B variantıdır."
  },
  {
    id: 35,
    difficulty: "easy",
    time: 30,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `s = "pYthon"
print(s.capitalize())`,
    options: {
      A: "PYTHON",
      B: "python",
      C: "Python",
      D: "nohtyP"
    },
    correct: "C",
    explanation: "Kod addım-addım icra edildikdə nəticə Python olur. Buna görə düzgün cavab C variantıdır."
  },
  {
    id: 36,
    difficulty: "easy",
    time: 30,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `a = "A-B-C"
b = a.split("-")
print(b[1])`,
    options: {
      A: "b",
      B: "1",
      C: "0",
      D: "B"
    },
    correct: "D",
    explanation: "Kod addım-addım icra edildikdə nəticə B olur. Buna görə düzgün cavab D variantıdır."
  },
  {
    id: 37,
    difficulty: "easy",
    time: 30,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `a = ["salam", "dünya"]
print(" ".join(a))`,
    options: {
      A: "salam dünya",
      B: "SALAM DÜNYA",
      C: "aynüd malas",
      D: "11"
    },
    correct: "A",
    explanation: "Kod addım-addım icra edildikdə nəticə salam dünya olur. Buna görə düzgün cavab A variantıdır."
  },
  {
    id: 38,
    difficulty: "easy",
    time: 30,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `s = "banana"
k = 0
for i in s:
    if i == "n":
        k += 1
print(k)`,
    options: {
      A: "3",
      B: "2",
      C: "1",
      D: "4"
    },
    correct: "B",
    explanation: "Kod addım-addım icra edildikdə nəticə 2 olur. Buna görə düzgün cavab B variantıdır."
  },
  {
    id: 39,
    difficulty: "easy",
    time: 30,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `a = "bir iki"
print(a.find("iki"))`,
    options: {
      A: "5",
      B: "3",
      C: "4",
      D: "8"
    },
    correct: "C",
    explanation: "Kod addım-addım icra edildikdə nəticə 4 olur. Buna görə düzgün cavab C variantıdır."
  },
  {
    id: 40,
    difficulty: "easy",
    time: 30,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `a = "Qarabağ"
print(a.upper())`,
    options: {
      A: "qarabağ",
      B: "ĞABARAQ",
      C: "7",
      D: "QARABAĞ"
    },
    correct: "D",
    explanation: "Kod addım-addım icra edildikdə nəticə QARABAĞ olur. Buna görə düzgün cavab D variantıdır."
  },
  {
    id: 41,
    difficulty: "easy",
    time: 30,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `a = [3, 5, 7, 9]
print(a[1] + a[3])`,
    options: {
      A: "14",
      B: "15",
      C: "13",
      D: "28"
    },
    correct: "A",
    explanation: "Kod addım-addım icra edildikdə nəticə 14 olur. Buna görə düzgün cavab A variantıdır."
  },
  {
    id: 42,
    difficulty: "easy",
    time: 30,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `a = [1, 2, 3]
a.append(4)
print(a)`,
    options: {
      A: "[]",
      B: "[1, 2, 3, 4]",
      C: "[4, 3, 2, 1]",
      D: "4"
    },
    correct: "B",
    explanation: "Kod addım-addım icra edildikdə nəticə [1, 2, 3, 4] olur. Buna görə düzgün cavab B variantıdır."
  },
  {
    id: 43,
    difficulty: "easy",
    time: 30,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `a = ["a", "b", "c"]
a[1] = "x"
print(a)`,
    options: {
      A: "[]",
      B: "['c', 'x', 'a']",
      C: "['a', 'x', 'c']",
      D: "3"
    },
    correct: "C",
    explanation: "Kod addım-addım icra edildikdə nəticə ['a', 'x', 'c'] olur. Buna görə düzgün cavab C variantıdır."
  },
  {
    id: 44,
    difficulty: "easy",
    time: 30,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `a = [8, 2, 5]
a.sort()
print(a[0])`,
    options: {
      A: "3",
      B: "1",
      C: "4",
      D: "2"
    },
    correct: "D",
    explanation: "Kod addım-addım icra edildikdə nəticə 2 olur. Buna görə düzgün cavab D variantıdır."
  },
  {
    id: 45,
    difficulty: "easy",
    time: 30,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `a = [4, 6, 8]
print(sum(a) // len(a))`,
    options: {
      A: "6",
      B: "7",
      C: "5",
      D: "12"
    },
    correct: "A",
    explanation: "Kod addım-addım icra edildikdə nəticə 6 olur. Buna görə düzgün cavab A variantıdır."
  },
  {
    id: 46,
    difficulty: "easy",
    time: 30,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `a = ["py", "thon"]
print("".join(a))`,
    options: {
      A: "PYTHON",
      B: "python",
      C: "nohtyp",
      D: "6"
    },
    correct: "B",
    explanation: "Kod addım-addım icra edildikdə nəticə python olur. Buna görə düzgün cavab B variantıdır."
  },
  {
    id: 47,
    difficulty: "easy",
    time: 30,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `a = "sual"
b = list(a)
print(b[2])`,
    options: {
      A: "A",
      B: "1",
      C: "a",
      D: "0"
    },
    correct: "C",
    explanation: "Kod addım-addım icra edildikdə nəticə a olur. Buna görə düzgün cavab C variantıdır."
  },
  {
    id: 48,
    difficulty: "easy",
    time: 30,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `a = "bir-iki-uc"
b = a.split("-")
print(len(b))`,
    options: {
      A: "4",
      B: "2",
      C: "6",
      D: "3"
    },
    correct: "D",
    explanation: "Kod addım-addım icra edildikdə nəticə 3 olur. Buna görə düzgün cavab D variantıdır."
  },
  {
    id: 49,
    difficulty: "easy",
    time: 30,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `a = [10, 20, 30, 40]
print(a[1:3])`,
    options: {
      A: "[20, 30]",
      B: "[]",
      C: "[30, 20]",
      D: "2"
    },
    correct: "A",
    explanation: "Kod addım-addım icra edildikdə nəticə [20, 30] olur. Buna görə düzgün cavab A variantıdır."
  },
  {
    id: 50,
    difficulty: "easy",
    time: 30,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `a = ["x", "y", "z"]
del a[1]
print(a)`,
    options: {
      A: "[]",
      B: "['x', 'z']",
      C: "['z', 'x']",
      D: "2"
    },
    correct: "B",
    explanation: "Kod addım-addım icra edildikdə nəticə ['x', 'z'] olur. Buna görə düzgün cavab B variantıdır."
  },
  {
    id: 51,
    difficulty: "easy",
    time: 30,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `a = [4, 9, 2]
print(max(a) - min(a))`,
    options: {
      A: "8",
      B: "6",
      C: "7",
      D: "14"
    },
    correct: "C",
    explanation: "Kod addım-addım icra edildikdə nəticə 7 olur. Buna görə düzgün cavab C variantıdır."
  },
  {
    id: 52,
    difficulty: "easy",
    time: 30,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `a = ["a", "b"]
a.append("c")
print(len(a))`,
    options: {
      A: "4",
      B: "2",
      C: "6",
      D: "3"
    },
    correct: "D",
    explanation: "Kod addım-addım icra edildikdə nəticə 3 olur. Buna görə düzgün cavab D variantıdır."
  },
  {
    id: 53,
    difficulty: "easy",
    time: 30,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `a = [5, 1, 3]
a.sort()
print(a)`,
    options: {
      A: "[1, 3, 5]",
      B: "[]",
      C: "[5, 3, 1]",
      D: "3"
    },
    correct: "A",
    explanation: "Kod addım-addım icra edildikdə nəticə [1, 3, 5] olur. Buna görə düzgün cavab A variantıdır."
  },
  {
    id: 54,
    difficulty: "easy",
    time: 30,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `a = [10, 20, 30]
a[0] = 5
print(sum(a))`,
    options: {
      A: "56",
      B: "55",
      C: "54",
      D: "110"
    },
    correct: "B",
    explanation: "Kod addım-addım icra edildikdə nəticə 55 olur. Buna görə düzgün cavab B variantıdır."
  },
  {
    id: 55,
    difficulty: "easy",
    time: 30,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `a = [1, 3]
a.insert(1, 2)
print(a)`,
    options: {
      A: "[]",
      B: "[3, 2, 1]",
      C: "[1, 2, 3]",
      D: "3"
    },
    correct: "C",
    explanation: "Kod addım-addım icra edildikdə nəticə [1, 2, 3] olur. Buna görə düzgün cavab C variantıdır."
  },
  {
    id: 56,
    difficulty: "easy",
    time: 30,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `a = [2, 3, 2, 4]
a.remove(2)
print(a)`,
    options: {
      A: "[]",
      B: "[4, 2, 3]",
      C: "3",
      D: "[3, 2, 4]"
    },
    correct: "D",
    explanation: "Kod addım-addım icra edildikdə nəticə [3, 2, 4] olur. Buna görə düzgün cavab D variantıdır."
  },
  {
    id: 57,
    difficulty: "easy",
    time: 30,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `a = [5, 7, 5, 9]
print(a.count(5) + a.index(9))`,
    options: {
      A: "5",
      B: "6",
      C: "4",
      D: "10"
    },
    correct: "A",
    explanation: "Kod addım-addım icra edildikdə nəticə 5 olur. Buna görə düzgün cavab A variantıdır."
  },
  {
    id: 58,
    difficulty: "easy",
    time: 30,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `a = ["x", "y", "z"]
a.reverse()
print(a)`,
    options: {
      A: "[]",
      B: "['z', 'y', 'x']",
      C: "['x', 'y', 'z']",
      D: "3"
    },
    correct: "B",
    explanation: "Kod addım-addım icra edildikdə nəticə ['z', 'y', 'x'] olur. Buna görə düzgün cavab B variantıdır."
  },
  {
    id: 59,
    difficulty: "easy",
    time: 30,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `a = ["b", "a", "c"]
print(min(a) + max(a))`,
    options: {
      A: "AC",
      B: "ca",
      C: "ac",
      D: "2"
    },
    correct: "C",
    explanation: "Kod addım-addım icra edildikdə nəticə ac olur. Buna görə düzgün cavab C variantıdır."
  },
  {
    id: 60,
    difficulty: "easy",
    time: 30,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `a = [1, 2, 3]
b = str(sum(a))
print(b * 2)`,
    options: {
      A: "67",
      B: "65",
      C: "132",
      D: "66"
    },
    correct: "D",
    explanation: "Kod addım-addım icra edildikdə nəticə 66 olur. Buna görə düzgün cavab D variantıdır."
  },
  {
    id: 61,
    difficulty: "easy",
    time: 30,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `a = 6
b = 4
if a > b:
    c = a + b
else:
    c = a - b
print(c)`,
    options: {
      A: "10",
      B: "11",
      C: "9",
      D: "20"
    },
    correct: "A",
    explanation: "Kod addım-addım icra edildikdə nəticə 10 olur. Buna görə düzgün cavab A variantıdır."
  },
  {
    id: 62,
    difficulty: "easy",
    time: 30,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `n = 7
if n % 2 == 0:
    print("cüt")
else:
    print("tək")`,
    options: {
      A: "TƏK",
      B: "tək",
      C: "kət",
      D: "3"
    },
    correct: "B",
    explanation: "Kod addım-addım icra edildikdə nəticə tək olur. Buna görə düzgün cavab B variantıdır."
  },
  {
    id: 63,
    difficulty: "easy",
    time: 30,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `x = 5
if x > 10:
    y = 1
elif x > 3:
    y = 2
else:
    y = 3
print(y)`,
    options: {
      A: "3",
      B: "1",
      C: "2",
      D: "4"
    },
    correct: "C",
    explanation: "Kod addım-addım icra edildikdə nəticə 2 olur. Buna görə düzgün cavab C variantıdır."
  },
  {
    id: 64,
    difficulty: "easy",
    time: 30,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `a = 12
if a % 3 == 0 and a % 4 == 0:
    print("hə")
else:
    print("yox")`,
    options: {
      A: "HƏ",
      B: "əh",
      C: "2",
      D: "hə"
    },
    correct: "D",
    explanation: "Kod addım-addım icra edildikdə nəticə hə olur. Buna görə düzgün cavab D variantıdır."
  },
  {
    id: 65,
    difficulty: "easy",
    time: 30,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `s = "kitab"
if len(s) == 5:
    print(s.upper())
else:
    print(s.lower())`,
    options: {
      A: "KITAB",
      B: "kitab",
      C: "BATIK",
      D: "5"
    },
    correct: "A",
    explanation: "Kod addım-addım icra edildikdə nəticə KITAB olur. Buna görə düzgün cavab A variantıdır."
  },
  {
    id: 66,
    difficulty: "easy",
    time: 30,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `a = 4
b = 4
if a != b:
    c = 1
else:
    c = a * b
print(c)`,
    options: {
      A: "17",
      B: "16",
      C: "15",
      D: "32"
    },
    correct: "B",
    explanation: "Kod addım-addım icra edildikdə nəticə 16 olur. Buna görə düzgün cavab B variantıdır."
  },
  {
    id: 67,
    difficulty: "easy",
    time: 30,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `x = 9
if x < 5 or x > 8:
    print("A")
else:
    print("B")`,
    options: {
      A: "a",
      B: "1",
      C: "A",
      D: "0"
    },
    correct: "C",
    explanation: "Kod addım-addım icra edildikdə nəticə A olur. Buna görə düzgün cavab C variantıdır."
  },
  {
    id: 68,
    difficulty: "easy",
    time: 30,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `s = 0
for i in range(4):
    s += i
print(s)`,
    options: {
      A: "7",
      B: "5",
      C: "12",
      D: "6"
    },
    correct: "D",
    explanation: "Kod addım-addım icra edildikdə nəticə 6 olur. Buna görə düzgün cavab D variantıdır."
  },
  {
    id: 69,
    difficulty: "easy",
    time: 30,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `a = []
for i in range(1, 5):
    a.append(i)
print(a)`,
    options: {
      A: "[1, 2, 3, 4]",
      B: "[]",
      C: "[4, 3, 2, 1]",
      D: "4"
    },
    correct: "A",
    explanation: "Kod addım-addım icra edildikdə nəticə [1, 2, 3, 4] olur. Buna görə düzgün cavab A variantıdır."
  },
  {
    id: 70,
    difficulty: "easy",
    time: 30,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `i = 1
s = 0
while i <= 5:
    s += i
    i += 2
print(s)`,
    options: {
      A: "10",
      B: "9",
      C: "8",
      D: "18"
    },
    correct: "B",
    explanation: "Kod addım-addım icra edildikdə nəticə 9 olur. Buna görə düzgün cavab B variantıdır."
  },
  {
    id: 71,
    difficulty: "easy",
    time: 30,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `a = [2, 5, 6, 9]
k = 0
for i in a:
    if i % 3 == 0:
        k += 1
print(k)`,
    options: {
      A: "3",
      B: "1",
      C: "2",
      D: "4"
    },
    correct: "C",
    explanation: "Kod addım-addım icra edildikdə nəticə 2 olur. Buna görə düzgün cavab C variantıdır."
  },
  {
    id: 72,
    difficulty: "easy",
    time: 30,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `s = "abc"
for i in s:
    print(i, end="-")`,
    options: {
      A: "A-B-C-",
      B: "-c-b-a",
      C: "6",
      D: "a-b-c-"
    },
    correct: "D",
    explanation: "Kod addım-addım icra edildikdə nəticə a-b-c- olur. Buna görə düzgün cavab D variantıdır."
  },
  {
    id: 73,
    difficulty: "easy",
    time: 30,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `n = 20
while n > 5:
    n = n // 2
print(n)`,
    options: {
      A: "5",
      B: "6",
      C: "4",
      D: "10"
    },
    correct: "A",
    explanation: "Kod addım-addım icra edildikdə nəticə 5 olur. Buna görə düzgün cavab A variantıdır."
  },
  {
    id: 74,
    difficulty: "easy",
    time: 30,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `s = 0
for i in range(2, 8, 2):
    s += i
print(s)`,
    options: {
      A: "13",
      B: "12",
      C: "11",
      D: "24"
    },
    correct: "B",
    explanation: "Kod addım-addım icra edildikdə nəticə 12 olur. Buna görə düzgün cavab B variantıdır."
  },
  {
    id: 75,
    difficulty: "easy",
    time: 30,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `a = []
for i in range(6):
    if i % 2 == 0:
        a.append(i)
print(a)`,
    options: {
      A: "[]",
      B: "[4, 2, 0]",
      C: "[0, 2, 4]",
      D: "3"
    },
    correct: "C",
    explanation: "Kod addım-addım icra edildikdə nəticə [0, 2, 4] olur. Buna görə düzgün cavab C variantıdır."
  },
  {
    id: 76,
    difficulty: "easy",
    time: 30,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `a = 8
if a % 4 == 0:
    print("bölünür")
else:
    print("bölünmür")`,
    options: {
      A: "BÖLÜNÜR",
      B: "rünülöb",
      C: "7",
      D: "bölünür"
    },
    correct: "D",
    explanation: "Kod addım-addım icra edildikdə nəticə bölünür olur. Buna görə düzgün cavab D variantıdır."
  },
  {
    id: 77,
    difficulty: "easy",
    time: 30,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `a = 3
b = 7
if a < b:
    c = b - a
else:
    c = a + b
print(c)`,
    options: {
      A: "4",
      B: "5",
      C: "3",
      D: "8"
    },
    correct: "A",
    explanation: "Kod addım-addım icra edildikdə nəticə 4 olur. Buna görə düzgün cavab A variantıdır."
  },
  {
    id: 78,
    difficulty: "easy",
    time: 30,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `s = "kod"
if len(s) > 4:
    print(s)
else:
    print(s * 2)`,
    options: {
      A: "KODKOD",
      B: "kodkod",
      C: "dokdok",
      D: "6"
    },
    correct: "B",
    explanation: "Kod addım-addım icra edildikdə nəticə kodkod olur. Buna görə düzgün cavab B variantıdır."
  },
  {
    id: 79,
    difficulty: "easy",
    time: 30,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `s = 1
for i in range(1, 4):
    s *= i
print(s)`,
    options: {
      A: "7",
      B: "5",
      C: "6",
      D: "12"
    },
    correct: "C",
    explanation: "Kod addım-addım icra edildikdə nəticə 6 olur. Buna görə düzgün cavab C variantıdır."
  },
  {
    id: 80,
    difficulty: "easy",
    time: 30,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `i = 2
s = 0
while i < 7:
    s += i
    i += 2
print(s)`,
    options: {
      A: "13",
      B: "11",
      C: "24",
      D: "12"
    },
    correct: "D",
    explanation: "Kod addım-addım icra edildikdə nəticə 12 olur. Buna görə düzgün cavab D variantıdır."
  },
  {
    id: 81,
    difficulty: "easy",
    time: 30,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `def kv(x):
    return x * x

print(kv(3) + kv(2))`,
    options: {
      A: "13",
      B: "14",
      C: "12",
      D: "26"
    },
    correct: "A",
    explanation: "Kod addım-addım icra edildikdə nəticə 13 olur. Buna görə düzgün cavab A variantıdır."
  },
  {
    id: 82,
    difficulty: "easy",
    time: 30,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `def cem(a, b):
    return a + b

print(cem(5, 7))`,
    options: {
      A: "13",
      B: "12",
      C: "11",
      D: "24"
    },
    correct: "B",
    explanation: "Kod addım-addım icra edildikdə nəticə 12 olur. Buna görə düzgün cavab B variantıdır."
  },
  {
    id: 83,
    difficulty: "easy",
    time: 30,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `def salam(a):
    print("Salam", a)

salam("Ali")`,
    options: {
      A: "SALAM ALI",
      B: "salam ali",
      C: "Salam Ali",
      D: "ilA malaS"
    },
    correct: "C",
    explanation: "Kod addım-addım icra edildikdə nəticə Salam Ali olur. Buna görə düzgün cavab C variantıdır."
  },
  {
    id: 84,
    difficulty: "easy",
    time: 30,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `def f(x):
    if x > 0:
        return x + 2
    else:
        return 0

print(f(4))`,
    options: {
      A: "7",
      B: "5",
      C: "12",
      D: "6"
    },
    correct: "D",
    explanation: "Kod addım-addım icra edildikdə nəticə 6 olur. Buna görə düzgün cavab D variantıdır."
  },
  {
    id: 85,
    difficulty: "easy",
    time: 30,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `def hesabla(a):
    return len(a) + a.count("a")

print(hesabla("alma"))`,
    options: {
      A: "6",
      B: "7",
      C: "5",
      D: "12"
    },
    correct: "A",
    explanation: "Kod addım-addım icra edildikdə nəticə 6 olur. Buna görə düzgün cavab A variantıdır."
  },
  {
    id: 86,
    difficulty: "easy",
    time: 30,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `def artir(x):
    return x + 1

print(artir(9))`,
    options: {
      A: "11",
      B: "10",
      C: "9",
      D: "20"
    },
    correct: "B",
    explanation: "Kod addım-addım icra edildikdə nəticə 10 olur. Buna görə düzgün cavab B variantıdır."
  },
  {
    id: 87,
    difficulty: "easy",
    time: 30,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `def hesabla(a, b):
    return a * b + a

print(hesabla(3, 4))`,
    options: {
      A: "16",
      B: "14",
      C: "15",
      D: "30"
    },
    correct: "C",
    explanation: "Kod addım-addım icra edildikdə nəticə 15 olur. Buna görə düzgün cavab C variantıdır."
  },
  {
    id: 88,
    difficulty: "easy",
    time: 30,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `def uzunluq(s):
    return len(s)

print(uzunluq("test") + 2)`,
    options: {
      A: "7",
      B: "5",
      C: "12",
      D: "6"
    },
    correct: "D",
    explanation: "Kod addım-addım icra edildikdə nəticə 6 olur. Buna görə düzgün cavab D variantıdır."
  },
  {
    id: 89,
    difficulty: "easy",
    time: 30,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `print("A", end="")
print("B")`,
    options: {
      A: "AB",
      B: "ab",
      C: "BA",
      D: "2"
    },
    correct: "A",
    explanation: "Kod addım-addım icra edildikdə nəticə AB olur. Buna görə düzgün cavab A variantıdır."
  },
  {
    id: 90,
    difficulty: "easy",
    time: 30,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `a = True
if a:
    print("doğru")
else:
    print("yanlış")`,
    options: {
      A: "DOĞRU",
      B: "doğru",
      C: "urğod",
      D: "5"
    },
    correct: "B",
    explanation: "Kod addım-addım icra edildikdə nəticə doğru olur. Buna görə düzgün cavab B variantıdır."
  },
  {
    id: 91,
    difficulty: "easy",
    time: 30,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `a = [1, "2"]
print(type(a))`,
    options: {
      A: "<class 'int'>",
      B: "<class 'float'>",
      C: "<class 'list'>",
      D: "<class 'str'>"
    },
    correct: "C",
    explanation: "Kod addım-addım icra edildikdə nəticə <class 'list'> olur. Buna görə düzgün cavab C variantıdır."
  },
  {
    id: 92,
    difficulty: "easy",
    time: 30,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `def netice(x):
    return x // 2 + x % 2

print(netice(9))`,
    options: {
      A: "6",
      B: "4",
      C: "10",
      D: "5"
    },
    correct: "D",
    explanation: "Kod addım-addım icra edildikdə nəticə 5 olur. Buna görə düzgün cavab D variantıdır."
  },
  {
    id: 93,
    difficulty: "easy",
    time: 30,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `def f(a):
    print(a * 2)

f("ha")`,
    options: {
      A: "haha",
      B: "HAHA",
      C: "ahah",
      D: "4"
    },
    correct: "A",
    explanation: "Kod addım-addım icra edildikdə nəticə haha olur. Buna görə düzgün cavab A variantıdır."
  },
  {
    id: 94,
    difficulty: "easy",
    time: 30,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `def birlesdir(a, b):
    return a + b

print(birlesdir("py", "thon"))`,
    options: {
      A: "PYTHON",
      B: "python",
      C: "nohtyp",
      D: "6"
    },
    correct: "B",
    explanation: "Kod addım-addım icra edildikdə nəticə python olur. Buna görə düzgün cavab B variantıdır."
  },
  {
    id: 95,
    difficulty: "easy",
    time: 30,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `a = list(range(3, 7))
print(a)`,
    options: {
      A: "[]",
      B: "[6, 5, 4, 3]",
      C: "[3, 4, 5, 6]",
      D: "4"
    },
    correct: "C",
    explanation: "Kod addım-addım icra edildikdə nəticə [3, 4, 5, 6] olur. Buna görə düzgün cavab C variantıdır."
  },
  {
    id: 96,
    difficulty: "easy",
    time: 30,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `a = list(range(2, 10, 3))
print(a)`,
    options: {
      A: "[]",
      B: "[8, 5, 2]",
      C: "3",
      D: "[2, 5, 8]"
    },
    correct: "D",
    explanation: "Kod addım-addım icra edildikdə nəticə [2, 5, 8] olur. Buna görə düzgün cavab D variantıdır."
  },
  {
    id: 97,
    difficulty: "easy",
    time: 30,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `a = 5
if not a % 2 == 0:
    print("tək")
else:
    print("cüt")`,
    options: {
      A: "tək",
      B: "TƏK",
      C: "kət",
      D: "3"
    },
    correct: "A",
    explanation: "Kod addım-addım icra edildikdə nəticə tək olur. Buna görə düzgün cavab A variantıdır."
  },
  {
    id: 98,
    difficulty: "easy",
    time: 30,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `x = 4
if x < 3 or x == 4:
    print("ok")
else:
    print("no")`,
    options: {
      A: "OK",
      B: "ok",
      C: "ko",
      D: "2"
    },
    correct: "B",
    explanation: "Kod addım-addım icra edildikdə nəticə ok olur. Buna görə düzgün cavab B variantıdır."
  },
  {
    id: 99,
    difficulty: "easy",
    time: 30,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `i = 0
while i < 3:
    i += 1
print(i)`,
    options: {
      A: "4",
      B: "2",
      C: "3",
      D: "6"
    },
    correct: "C",
    explanation: "Kod addım-addım icra edildikdə nəticə 3 olur. Buna görə düzgün cavab C variantıdır."
  },
  {
    id: 100,
    difficulty: "easy",
    time: 30,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `a = 6
if a > 0:
    if a % 2 == 0:
        print("müsbət cüt")
    else:
        print("müsbət tək")`,
    options: {
      A: "MÜSBƏT CÜT",
      B: "tüc təbsüm",
      C: "10",
      D: "müsbət cüt"
    },
    correct: "D",
    explanation: "Kod addım-addım icra edildikdə nəticə müsbət cüt olur. Buna görə düzgün cavab D variantıdır."
  },
  {
    id: 101,
    difficulty: "medium",
    time: 60,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `a, b = 7, 4
a = a + b
b = a - b
print(a, b)`,
    options: {
      A: "11 7",
      B: "7 11",
      C: "11 4",
      D: "18 7"
    },
    correct: "A",
    explanation: "Kodun addım-addım icrası yoxlanıldı: nəticədə 11 7 çap olunur."
  },
  {
    id: 102,
    difficulty: "medium",
    time: 60,
    question: "Kodun çıxış qiymətini müəyyən edin.",
    code: `x = 38
r = x % 10
q = x // 10
print(r * 10 + q)`,
    options: {
      A: "84",
      B: "83",
      C: "82",
      D: "166"
    },
    correct: "B",
    explanation: "Kodun addım-addım icrası yoxlanıldı: nəticədə 83 çap olunur."
  },
  {
    id: 103,
    difficulty: "medium",
    time: 60,
    question: "Verilmiş kodun nəticəsini tapın.",
    code: `s = "informatika"
t = s[2:6]
print(t, len(t), sep="-")`,
    options: {
      A: "info-4",
      B: "form-5",
      C: "form-4",
      D: "orma-4"
    },
    correct: "C",
    explanation: "Kodun addım-addım icrası yoxlanıldı: nəticədə form-4 çap olunur."
  },
  {
    id: 104,
    difficulty: "medium",
    time: 60,
    question: "Kodun icrasından sonra hansı nəticə alınacaq?",
    code: `a = [3, 6, 9]
a[1] = a[0] + a[2]
print(sum(a))`,
    options: {
      A: "25",
      B: "23",
      C: "48",
      D: "24"
    },
    correct: "D",
    explanation: "Kodun addım-addım icrası yoxlanıldı: nəticədə 24 çap olunur."
  },
  {
    id: 105,
    difficulty: "medium",
    time: 60,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `a = "12"
b = 3
print(a * 2 + str(b))`,
    options: {
      A: "12123",
      B: "12124",
      C: "12122",
      D: "24246"
    },
    correct: "A",
    explanation: "Kodun addım-addım icrası yoxlanıldı: nəticədə 12123 çap olunur."
  },
  {
    id: 106,
    difficulty: "medium",
    time: 60,
    question: "Kodun çıxış qiymətini müəyyən edin.",
    code: `n = 245
a = n // 100
b = (n // 10) % 10
c = n % 10
print(a + b * c)`,
    options: {
      A: "23",
      B: "22",
      C: "21",
      D: "44"
    },
    correct: "B",
    explanation: "Kodun addım-addım icrası yoxlanıldı: nəticədə 22 çap olunur."
  },
  {
    id: 107,
    difficulty: "medium",
    time: 60,
    question: "Verilmiş kodun nəticəsini tapın.",
    code: `a = [5, 2, 8, 2]
print(a.count(2) * a.index(8))`,
    options: {
      A: "5",
      B: "3",
      C: "4",
      D: "8"
    },
    correct: "C",
    explanation: "Kodun addım-addım icrası yoxlanıldı: nəticədə 4 çap olunur."
  },
  {
    id: 108,
    difficulty: "medium",
    time: 60,
    question: "Kodun icrasından sonra hansı nəticə alınacaq?",
    code: `s = "abaac"
print(s.find("a", 2) + s.count("a"))`,
    options: {
      A: "6",
      B: "4",
      C: "10",
      D: "5"
    },
    correct: "D",
    explanation: "Kodun addım-addım icrası yoxlanıldı: nəticədə 5 çap olunur."
  },
  {
    id: 109,
    difficulty: "medium",
    time: 60,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `a = 4
b = 9
if a * 2 > b:
    c = a + b
else:
    c = b - a
print(c)`,
    options: {
      A: "5",
      B: "6",
      C: "4",
      D: "10"
    },
    correct: "A",
    explanation: "Kodun addım-addım icrası yoxlanıldı: nəticədə 5 çap olunur."
  },
  {
    id: 110,
    difficulty: "medium",
    time: 60,
    question: "Kodun çıxış qiymətini müəyyən edin.",
    code: `n = 17
if n % 3 == 0:
    n = n // 3
elif n % 3 == 2:
    n = n + 4
else:
    n = n * 2
print(n)`,
    options: {
      A: "22",
      B: "21",
      C: "20",
      D: "42"
    },
    correct: "B",
    explanation: "Kodun addım-addım icrası yoxlanıldı: nəticədə 21 çap olunur."
  },
  {
    id: 111,
    difficulty: "medium",
    time: 60,
    question: "Verilmiş kodun nəticəsini tapın.",
    code: `s = 0
for i in range(2, 7):
    if i % 2 == 1:
        s += i * 2
    else:
        s += i
print(s)`,
    options: {
      A: "29",
      B: "27",
      C: "28",
      D: "56"
    },
    correct: "C",
    explanation: "Kodun addım-addım icrası yoxlanıldı: nəticədə 28 çap olunur."
  },
  {
    id: 112,
    difficulty: "medium",
    time: 60,
    question: "Kodun icrasından sonra hansı nəticə alınacaq?",
    code: `n = 314
s = 0
while n > 0:
    s += n % 10
    n = n // 10
print(s)`,
    options: {
      A: "9",
      B: "7",
      C: "16",
      D: "8"
    },
    correct: "D",
    explanation: "Kodun addım-addım icrası yoxlanıldı: nəticədə 8 çap olunur."
  },
  {
    id: 113,
    difficulty: "medium",
    time: 60,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `a = list(range(3, 10, 2))
print(sum(a), len(a))`,
    options: {
      A: "24 4",
      B: "24",
      C: "4 24",
      D: "28 4"
    },
    correct: "A",
    explanation: "Kodun addım-addım icrası yoxlanıldı: nəticədə 24 4 çap olunur."
  },
  {
    id: 114,
    difficulty: "medium",
    time: 60,
    question: "Kodun çıxış qiymətini müəyyən edin.",
    code: `a = []
for i in range(1, 7):
    if i % 3 == 0:
        continue
    a.append(i)
print(sum(a))`,
    options: {
      A: "13",
      B: "12",
      C: "11",
      D: "24"
    },
    correct: "B",
    explanation: "Kodun addım-addım icrası yoxlanıldı: nəticədə 12 çap olunur."
  },
  {
    id: 115,
    difficulty: "medium",
    time: 60,
    question: "Verilmiş kodun nəticəsini tapın.",
    code: `s = "kodlama"
k = ""
for i in range(len(s)):
    if i % 2 == 0:
        k += s[i]
print(k)`,
    options: {
      A: "kod",
      B: "koa",
      C: "kdaa",
      D: "kdl"
    },
    correct: "C",
    explanation: "Kodun addım-addım icrası yoxlanıldı: nəticədə kdaa çap olunur."
  },
  {
    id: 116,
    difficulty: "medium",
    time: 60,
    question: "Kodun icrasından sonra hansı nəticə alınacaq?",
    code: `def f(x, y):
    return x * 2 + y

print(f(3, f(2, 1)))`,
    options: {
      A: "12",
      B: "10",
      C: "22",
      D: "11"
    },
    correct: "D",
    explanation: "Kodun addım-addım icrası yoxlanıldı: nəticədə 11 çap olunur."
  },
  {
    id: 117,
    difficulty: "medium",
    time: 60,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `def h(a):
    if a % 2 == 0:
        return a // 2
    else:
        return a * 3

print(h(5) + h(8))`,
    options: {
      A: "19",
      B: "20",
      C: "18",
      D: "38"
    },
    correct: "A",
    explanation: "Kodun addım-addım icrası yoxlanıldı: nəticədə 19 çap olunur."
  },
  {
    id: 118,
    difficulty: "medium",
    time: 60,
    question: "Kodun çıxış qiymətini müəyyən edin.",
    code: `a = ["12", "3", "4"]
b = "".join(a)
print(int(b) // 3)`,
    options: {
      A: "412",
      B: "411",
      C: "410",
      D: "822"
    },
    correct: "B",
    explanation: "Kodun addım-addım icrası yoxlanıldı: nəticədə 411 çap olunur."
  },
  {
    id: 119,
    difficulty: "medium",
    time: 60,
    question: "Verilmiş kodun nəticəsini tapın.",
    code: `s = [2, 4, 6]
for i in range(len(s)):
    s[i] = s[i] + i
print(s)`,
    options: {
      A: "[2, 4, 6]",
      B: "[3, 5, 8]",
      C: "[2, 5, 8]",
      D: "[2, 5, 6]"
    },
    correct: "C",
    explanation: "Kodun addım-addım icrası yoxlanıldı: nəticədə [2, 5, 8] çap olunur."
  },
  {
    id: 120,
    difficulty: "medium",
    time: 60,
    question: "Kodun icrasından sonra hansı nəticə alınacaq?",
    code: `a = 10
b = 3
if a % b == 1 and a > b:
    print(a // b + a % b)
else:
    print(a + b)`,
    options: {
      A: "5",
      B: "3",
      C: "8",
      D: "4"
    },
    correct: "D",
    explanation: "Kodun addım-addım icrası yoxlanıldı: nəticədə 4 çap olunur."
  },
  {
    id: 121,
    difficulty: "medium",
    time: 60,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `a = [1, 2, 3, 4]
b = []
for i in a:
    if i % 2 == 0:
        b.append(i * 2)
    else:
        b.append(i + 1)
print(b)`,
    options: {
      A: "[2, 4, 4, 8]",
      B: "[1, 4, 3, 8]",
      C: "[2, 2, 4, 4]",
      D: "[2, 4, 6, 8]"
    },
    correct: "A",
    explanation: "Kodun addım-addım icrası yoxlanıldı: nəticədə [2, 4, 4, 8] çap olunur."
  },
  {
    id: 122,
    difficulty: "medium",
    time: 60,
    question: "Kodun çıxış qiymətini müəyyən edin.",
    code: `n = 5
s = 1
while n > 1:
    s *= n
    n -= 2
print(s)`,
    options: {
      A: "16",
      B: "15",
      C: "14",
      D: "30"
    },
    correct: "B",
    explanation: "Kodun addım-addım icrası yoxlanıldı: nəticədə 15 çap olunur."
  },
  {
    id: 123,
    difficulty: "medium",
    time: 60,
    question: "Verilmiş kodun nəticəsini tapın.",
    code: `s = "python"
a = s[1:4]
b = s[4:]
print(b + a)`,
    options: {
      A: "ython",
      B: "pyth",
      C: "onyth",
      D: "onpy"
    },
    correct: "C",
    explanation: "Kodun addım-addım icrası yoxlanıldı: nəticədə onyth çap olunur."
  },
  {
    id: 124,
    difficulty: "medium",
    time: 60,
    question: "Kodun icrasından sonra hansı nəticə alınacaq?",
    code: `a = [7, 1, 7, 3]
a.remove(7)
a.append(sum(a))
print(a)`,
    options: {
      A: "[7, 1, 7, 3]",
      B: "[1, 7, 3, 18]",
      C: "[1, 3, 11]",
      D: "[1, 7, 3, 11]"
    },
    correct: "D",
    explanation: "Kodun addım-addım icrası yoxlanıldı: nəticədə [1, 7, 3, 11] çap olunur."
  },
  {
    id: 125,
    difficulty: "medium",
    time: 60,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `x = 14
y = 4
z = x // y * 10 + x % y
print(z)`,
    options: {
      A: "32",
      B: "33",
      C: "31",
      D: "64"
    },
    correct: "A",
    explanation: "Kodun addım-addım icrası yoxlanıldı: nəticədə 32 çap olunur."
  },
  {
    id: 126,
    difficulty: "medium",
    time: 60,
    question: "Kodun çıxış qiymətini müəyyən edin.",
    code: `a = "alma"
b = list(a)
b[1] = "o"
print("".join(b))`,
    options: {
      A: "alma",
      B: "aoma",
      C: "olma",
      D: "aom"
    },
    correct: "B",
    explanation: "Kodun addım-addım icrası yoxlanıldı: nəticədə aoma çap olunur."
  },
  {
    id: 127,
    difficulty: "medium",
    time: 60,
    question: "Verilmiş kodun nəticəsini tapın.",
    code: `a = 12
if a % 2 == 0:
    if a % 5 == 0:
        c = 1
    else:
        c = 2
else:
    c = 3
print(c)`,
    options: {
      A: "3",
      B: "1",
      C: "2",
      D: "4"
    },
    correct: "C",
    explanation: "Kodun addım-addım icrası yoxlanıldı: nəticədə 2 çap olunur."
  },
  {
    id: 128,
    difficulty: "medium",
    time: 60,
    question: "Kodun icrasından sonra hansı nəticə alınacaq?",
    code: `s = 0
for i in range(5, 0, -2):
    s += i
print(s)`,
    options: {
      A: "10",
      B: "8",
      C: "18",
      D: "9"
    },
    correct: "D",
    explanation: "Kodun addım-addım icrası yoxlanıldı: nəticədə 9 çap olunur."
  },
  {
    id: 129,
    difficulty: "medium",
    time: 60,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `a = [3, 5, 7]
print(a[0] * a[2] - a[1])`,
    options: {
      A: "16",
      B: "17",
      C: "15",
      D: "32"
    },
    correct: "A",
    explanation: "Kodun addım-addım icrası yoxlanıldı: nəticədə 16 çap olunur."
  },
  {
    id: 130,
    difficulty: "medium",
    time: 60,
    question: "Kodun çıxış qiymətini müəyyən edin.",
    code: `s = "məlumat"
print(s.find("m") + s.find("a"))`,
    options: {
      A: "6",
      B: "5",
      C: "4",
      D: "10"
    },
    correct: "B",
    explanation: "Kodun addım-addım icrası yoxlanıldı: nəticədə 5 çap olunur."
  },
  {
    id: 131,
    difficulty: "medium",
    time: 60,
    question: "Verilmiş kodun nəticəsini tapın.",
    code: `a = [10, 20, 30]
b = a[1:]
print(len(b) + sum(b) // 10)`,
    options: {
      A: "8",
      B: "6",
      C: "7",
      D: "14"
    },
    correct: "C",
    explanation: "Kodun addım-addım icrası yoxlanıldı: nəticədə 7 çap olunur."
  },
  {
    id: 132,
    difficulty: "medium",
    time: 60,
    question: "Kodun icrasından sonra hansı nəticə alınacaq?",
    code: `def f(x):
    return x % 10 + x // 10

print(f(68) * 2)`,
    options: {
      A: "29",
      B: "27",
      C: "56",
      D: "28"
    },
    correct: "D",
    explanation: "Kodun addım-addım icrası yoxlanıldı: nəticədə 28 çap olunur."
  },
  {
    id: 133,
    difficulty: "medium",
    time: 60,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `a = 0
for i in range(1, 8):
    if i % 3 == 0:
        a += i * 2
    else:
        a += 1
print(a)`,
    options: {
      A: "23",
      B: "24",
      C: "22",
      D: "46"
    },
    correct: "A",
    explanation: "Kodun addım-addım icrası yoxlanıldı: nəticədə 23 çap olunur."
  },
  {
    id: 134,
    difficulty: "medium",
    time: 60,
    question: "Kodun çıxış qiymətini müəyyən edin.",
    code: `a = ["bir", "iki", "uc"]
for i in range(len(a)):
    a[i] = len(a[i])
print(sum(a))`,
    options: {
      A: "9",
      B: "8",
      C: "7",
      D: "16"
    },
    correct: "B",
    explanation: "Kodun addım-addım icrası yoxlanıldı: nəticədə 8 çap olunur."
  },
  {
    id: 135,
    difficulty: "medium",
    time: 60,
    question: "Verilmiş kodun nəticəsini tapın.",
    code: `s = "AZERBAYCAN"
print(s[1:4] + s[7:])`,
    options: {
      A: "ZERBAYCAN",
      B: "AZERCAN",
      C: "ZERCAN",
      D: "BAYCAN"
    },
    correct: "C",
    explanation: "Kodun addım-addım icrası yoxlanıldı: nəticədə ZERCAN çap olunur."
  },
  {
    id: 136,
    difficulty: "medium",
    time: 60,
    question: "Kodun icrasından sonra hansı nəticə alınacaq?",
    code: `a = 4
b = 6
print(a, b, sep=":", end="!")`,
    options: {
      A: "4 6!",
      B: "4:6",
      C: "4+6!",
      D: "4:6!"
    },
    correct: "D",
    explanation: "Kodun addım-addım icrası yoxlanıldı: nəticədə 4:6! çap olunur."
  },
  {
    id: 137,
    difficulty: "medium",
    time: 60,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `a = [2, 4, 6, 8]
del a[2]
print(sum(a))`,
    options: {
      A: "14",
      B: "15",
      C: "13",
      D: "28"
    },
    correct: "A",
    explanation: "Kodun addım-addım icrası yoxlanıldı: nəticədə 14 çap olunur."
  },
  {
    id: 138,
    difficulty: "medium",
    time: 60,
    question: "Kodun çıxış qiymətini müəyyən edin.",
    code: `s = "kitab kitab"
print(s.count("kitab"))`,
    options: {
      A: "3",
      B: "2",
      C: "1",
      D: "4"
    },
    correct: "B",
    explanation: "Kodun addım-addım icrası yoxlanıldı: nəticədə 2 çap olunur."
  },
  {
    id: 139,
    difficulty: "medium",
    time: 60,
    question: "Verilmiş kodun nəticəsini tapın.",
    code: `a = 5
b = 2
c = (a + b) ** 2 - a * b
print(c)`,
    options: {
      A: "40",
      B: "38",
      C: "39",
      D: "78"
    },
    correct: "C",
    explanation: "Kodun addım-addım icrası yoxlanıldı: nəticədə 39 çap olunur."
  },
  {
    id: 140,
    difficulty: "medium",
    time: 60,
    question: "Kodun icrasından sonra hansı nəticə alınacaq?",
    code: `n = 1234
s = 0
for i in str(n):
    s += int(i)
print(s)`,
    options: {
      A: "11",
      B: "9",
      C: "20",
      D: "10"
    },
    correct: "D",
    explanation: "Kodun addım-addım icrası yoxlanıldı: nəticədə 10 çap olunur."
  },
  {
    id: 141,
    difficulty: "medium",
    time: 60,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `a = []
for i in range(2, 9, 2):
    a.append(i + 1)
print(a)`,
    options: {
      A: "[3, 5, 7, 9]",
      B: "[2, 4, 6, 8]",
      C: "[3, 5, 7]",
      D: "[3, 6, 9]"
    },
    correct: "A",
    explanation: "Kodun addım-addım icrası yoxlanıldı: nəticədə [3, 5, 7, 9] çap olunur."
  },
  {
    id: 142,
    difficulty: "medium",
    time: 60,
    question: "Kodun çıxış qiymətini müəyyən edin.",
    code: `s = "abab"
t = s.replace("a", "x")
print(t.count("x") + t.find("b"))`,
    options: {
      A: "4",
      B: "3",
      C: "2",
      D: "6"
    },
    correct: "B",
    explanation: "Kodun addım-addım icrası yoxlanıldı: nəticədə 3 çap olunur."
  },
  {
    id: 143,
    difficulty: "medium",
    time: 60,
    question: "Verilmiş kodun nəticəsini tapın.",
    code: `def f(a, b):
    if a > b:
        return a - b
    else:
        return a + b

print(f(3, 5) + f(8, 2))`,
    options: {
      A: "15",
      B: "13",
      C: "14",
      D: "28"
    },
    correct: "C",
    explanation: "Kodun addım-addım icrası yoxlanıldı: nəticədə 14 çap olunur."
  },
  {
    id: 144,
    difficulty: "medium",
    time: 60,
    question: "Kodun icrasından sonra hansı nəticə alınacaq?",
    code: `a = [5, 2, 9, 2]
a.sort()
a.reverse()
print(a[1])`,
    options: {
      A: "6",
      B: "4",
      C: "10",
      D: "5"
    },
    correct: "D",
    explanation: "Kodun addım-addım icrası yoxlanıldı: nəticədə 5 çap olunur."
  },
  {
    id: 145,
    difficulty: "medium",
    time: 60,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `i = 1
s = ""
while i < 5:
    s += str(i)
    i += 1
print(s)`,
    options: {
      A: "1234",
      B: "1235",
      C: "1233",
      D: "2468"
    },
    correct: "A",
    explanation: "Kodun addım-addım icrası yoxlanıldı: nəticədə 1234 çap olunur."
  },
  {
    id: 146,
    difficulty: "medium",
    time: 60,
    question: "Kodun çıxış qiymətini müəyyən edin.",
    code: `a = 16
if a % 4 == 0 and a % 8 == 0:
    a = a // 2
print(a)`,
    options: {
      A: "9",
      B: "8",
      C: "7",
      D: "16"
    },
    correct: "B",
    explanation: "Kodun addım-addım icrası yoxlanıldı: nəticədə 8 çap olunur."
  },
  {
    id: 147,
    difficulty: "medium",
    time: 60,
    question: "Verilmiş kodun nəticəsini tapın.",
    code: `s = 0
for i in range(10):
    if i % 4 == 0:
        continue
    s += i
print(s)`,
    options: {
      A: "34",
      B: "32",
      C: "33",
      D: "66"
    },
    correct: "C",
    explanation: "Kodun addım-addım icrası yoxlanıldı: nəticədə 33 çap olunur."
  },
  {
    id: 148,
    difficulty: "medium",
    time: 60,
    question: "Kodun icrasından sonra hansı nəticə alınacaq?",
    code: `a = [1, 2]
b = [3, 4]
c = a + b
print(c[1] + c[3])`,
    options: {
      A: "7",
      B: "5",
      C: "12",
      D: "6"
    },
    correct: "D",
    explanation: "Kodun addım-addım icrası yoxlanıldı: nəticədə 6 çap olunur."
  },
  {
    id: 149,
    difficulty: "medium",
    time: 60,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `s = "data"
print(s.upper().count("A"))`,
    options: {
      A: "2",
      B: "3",
      C: "1",
      D: "4"
    },
    correct: "A",
    explanation: "Kodun addım-addım icrası yoxlanıldı: nəticədə 2 çap olunur."
  },
  {
    id: 150,
    difficulty: "medium",
    time: 60,
    question: "Kodun çıxış qiymətini müəyyən edin.",
    code: `a = 3
b = 7
a, b = b + 1, a + 2
print(a * b)`,
    options: {
      A: "41",
      B: "40",
      C: "39",
      D: "80"
    },
    correct: "B",
    explanation: "Kodun addım-addım icrası yoxlanıldı: nəticədə 40 çap olunur."
  },
  {
    id: 151,
    difficulty: "medium",
    time: 60,
    question: "Verilmiş kodun nəticəsini tapın.",
    code: `n = 48
while n % 2 == 0:
    n = n // 2
print(n)`,
    options: {
      A: "4",
      B: "2",
      C: "3",
      D: "6"
    },
    correct: "C",
    explanation: "Kodun addım-addım icrası yoxlanıldı: nəticədə 3 çap olunur."
  },
  {
    id: 152,
    difficulty: "medium",
    time: 60,
    question: "Kodun icrasından sonra hansı nəticə alınacaq?",
    code: `a = [3, 1, 4]
for i in range(len(a)):
    a[i] = a[i] * 2
print(max(a))`,
    options: {
      A: "9",
      B: "7",
      C: "16",
      D: "8"
    },
    correct: "D",
    explanation: "Kodun addım-addım icrası yoxlanıldı: nəticədə 8 çap olunur."
  },
  {
    id: 153,
    difficulty: "medium",
    time: 60,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `s = "rəqəmsal"
print(s[0:3] + s[5:])`,
    options: {
      A: "rəqsal",
      B: "rəqəm",
      C: "rəqəmsal",
      D: "salrəq"
    },
    correct: "A",
    explanation: "Kodun addım-addım icrası yoxlanıldı: nəticədə rəqsal çap olunur."
  },
  {
    id: 154,
    difficulty: "medium",
    time: 60,
    question: "Kodun çıxış qiymətini müəyyən edin.",
    code: `a = 9
b = 4
if a // b == 2:
    c = a % b
else:
    c = a + b
print(c)`,
    options: {
      A: "2",
      B: "1",
      C: "0",
      D: "4"
    },
    correct: "B",
    explanation: "Kodun addım-addım icrası yoxlanıldı: nəticədə 1 çap olunur."
  },
  {
    id: 155,
    difficulty: "medium",
    time: 60,
    question: "Verilmiş kodun nəticəsini tapın.",
    code: `s = 0
for i in range(1, 6):
    s += i % 2
print(s)`,
    options: {
      A: "4",
      B: "2",
      C: "3",
      D: "6"
    },
    correct: "C",
    explanation: "Kodun addım-addım icrası yoxlanıldı: nəticədə 3 çap olunur."
  },
  {
    id: 156,
    difficulty: "medium",
    time: 60,
    question: "Kodun icrasından sonra hansı nəticə alınacaq?",
    code: `def g(x):
    return x * 2

def f(x):
    return g(x) + x

print(f(4))`,
    options: {
      A: "13",
      B: "11",
      C: "24",
      D: "12"
    },
    correct: "D",
    explanation: "Kodun addım-addım icrası yoxlanıldı: nəticədə 12 çap olunur."
  },
  {
    id: 157,
    difficulty: "medium",
    time: 60,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `a = "2025"
print(int(a[0]) + int(a[3]))`,
    options: {
      A: "7",
      B: "8",
      C: "6",
      D: "14"
    },
    correct: "A",
    explanation: "Kodun addım-addım icrası yoxlanıldı: nəticədə 7 çap olunur."
  },
  {
    id: 158,
    difficulty: "medium",
    time: 60,
    question: "Kodun çıxış qiymətini müəyyən edin.",
    code: `a = [1, 3, 5]
a.insert(2, 4)
print(a[1] + a[2])`,
    options: {
      A: "8",
      B: "7",
      C: "6",
      D: "14"
    },
    correct: "B",
    explanation: "Kodun addım-addım icrası yoxlanıldı: nəticədə 7 çap olunur."
  },
  {
    id: 159,
    difficulty: "medium",
    time: 60,
    question: "Verilmiş kodun nəticəsini tapın.",
    code: `s = "sual"
print(s.capitalize() + str(len(s)))`,
    options: {
      A: "sual4",
      B: "Sual",
      C: "Sual4",
      D: "4Sual"
    },
    correct: "C",
    explanation: "Kodun addım-addım icrası yoxlanıldı: nəticədə Sual4 çap olunur."
  },
  {
    id: 160,
    difficulty: "medium",
    time: 60,
    question: "Kodun icrasından sonra hansı nəticə alınacaq?",
    code: `a = [2, 2, 3, 2]
print(a.count(2) * len(a))`,
    options: {
      A: "13",
      B: "11",
      C: "24",
      D: "12"
    },
    correct: "D",
    explanation: "Kodun addım-addım icrası yoxlanıldı: nəticədə 12 çap olunur."
  },
  {
    id: 161,
    difficulty: "medium",
    time: 60,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `n = 35
if n % 5 == 0 or n % 7 == 0:
    print(n // 5)
else:
    print(0)`,
    options: {
      A: "7",
      B: "8",
      C: "6",
      D: "14"
    },
    correct: "A",
    explanation: "Kodun addım-addım icrası yoxlanıldı: nəticədə 7 çap olunur."
  },
  {
    id: 162,
    difficulty: "medium",
    time: 60,
    question: "Kodun çıxış qiymətini müəyyən edin.",
    code: `s = []
for i in range(3):
    s.append(i)
    s.append(i + 1)
print(len(s))`,
    options: {
      A: "7",
      B: "6",
      C: "5",
      D: "12"
    },
    correct: "B",
    explanation: "Kodun addım-addım icrası yoxlanıldı: nəticədə 6 çap olunur."
  },
  {
    id: 163,
    difficulty: "medium",
    time: 60,
    question: "Verilmiş kodun nəticəsini tapın.",
    code: `a = 100
for i in range(3):
    a = a // 2
print(a)`,
    options: {
      A: "13",
      B: "11",
      C: "12",
      D: "24"
    },
    correct: "C",
    explanation: "Kodun addım-addım icrası yoxlanıldı: nəticədə 12 çap olunur."
  },
  {
    id: 164,
    difficulty: "medium",
    time: 60,
    question: "Kodun icrasından sonra hansı nəticə alınacaq?",
    code: `s = "robot"
t = s[1:]
print(t.find("o") + len(t))`,
    options: {
      A: "5",
      B: "3",
      C: "8",
      D: "4"
    },
    correct: "D",
    explanation: "Kodun addım-addım icrası yoxlanıldı: nəticədə 4 çap olunur."
  },
  {
    id: 165,
    difficulty: "medium",
    time: 60,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `a = [9, 8, 7]
b = a[0]
a[0] = a[2]
a[2] = b
print(a)`,
    options: {
      A: "[7, 8, 9]",
      B: "[9, 8, 7]",
      C: "[8, 7, 9]",
      D: "[7, 9, 8]"
    },
    correct: "A",
    explanation: "Kodun addım-addım icrası yoxlanıldı: nəticədə [7, 8, 9] çap olunur."
  },
  {
    id: 166,
    difficulty: "medium",
    time: 60,
    question: "Kodun çıxış qiymətini müəyyən edin.",
    code: `def h(s):
    return s.count("a") + s.find("b")

print(h("abaka"))`,
    options: {
      A: "5",
      B: "4",
      C: "3",
      D: "8"
    },
    correct: "B",
    explanation: "Kodun addım-addım icrası yoxlanıldı: nəticədə 4 çap olunur."
  },
  {
    id: 167,
    difficulty: "medium",
    time: 60,
    question: "Verilmiş kodun nəticəsini tapın.",
    code: `a = 2
b = 3
c = 4
print(a * b + c ** 2)`,
    options: {
      A: "23",
      B: "21",
      C: "22",
      D: "44"
    },
    correct: "C",
    explanation: "Kodun addım-addım icrası yoxlanıldı: nəticədə 22 çap olunur."
  },
  {
    id: 168,
    difficulty: "medium",
    time: 60,
    question: "Kodun icrasından sonra hansı nəticə alınacaq?",
    code: `s = "python"
k = ""
for i in range(3):
    k += s[i]
print(k)`,
    options: {
      A: "py",
      B: "yth",
      C: "ptn",
      D: "pyt"
    },
    correct: "D",
    explanation: "Kodun addım-addım icrası yoxlanıldı: nəticədə pyt çap olunur."
  },
  {
    id: 169,
    difficulty: "medium",
    time: 60,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `a = [3, 5, 6]
for i in range(1, len(a)):
    a[i] += a[i - 1]
print(a)`,
    options: {
      A: "[3, 8, 14]",
      B: "[3, 5, 6]",
      C: "[3, 8, 11]",
      D: "[6, 10, 12]"
    },
    correct: "A",
    explanation: "Kodun addım-addım icrası yoxlanıldı: nəticədə [3, 8, 14] çap olunur."
  },
  {
    id: 170,
    difficulty: "medium",
    time: 60,
    question: "Kodun çıxış qiymətini müəyyən edin.",
    code: `n = 246
a = str(n)
print(int(a[0]) * int(a[1]) + int(a[2]))`,
    options: {
      A: "15",
      B: "14",
      C: "13",
      D: "28"
    },
    correct: "B",
    explanation: "Kodun addım-addım icrası yoxlanıldı: nəticədə 14 çap olunur."
  },
  {
    id: 171,
    difficulty: "medium",
    time: 60,
    question: "Verilmiş kodun nəticəsini tapın.",
    code: `a = []
for i in range(1, 10):
    if i > 5:
        break
    a.append(i)
print(sum(a))`,
    options: {
      A: "16",
      B: "14",
      C: "15",
      D: "30"
    },
    correct: "C",
    explanation: "Kodun addım-addım icrası yoxlanıldı: nəticədə 15 çap olunur."
  },
  {
    id: 172,
    difficulty: "medium",
    time: 60,
    question: "Kodun icrasından sonra hansı nəticə alınacaq?",
    code: `s = 0
for i in range(1, 8):
    if i % 2 == 0:
        continue
    s += i
print(s)`,
    options: {
      A: "17",
      B: "15",
      C: "32",
      D: "16"
    },
    correct: "D",
    explanation: "Kodun addım-addım icrası yoxlanıldı: nəticədə 16 çap olunur."
  },
  {
    id: 173,
    difficulty: "medium",
    time: 60,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `a = 11
if a > 10:
    a -= 3
if a % 2 == 0:
    a *= 2
print(a)`,
    options: {
      A: "16",
      B: "17",
      C: "15",
      D: "32"
    },
    correct: "A",
    explanation: "Kodun addım-addım icrası yoxlanıldı: nəticədə 16 çap olunur."
  },
  {
    id: 174,
    difficulty: "medium",
    time: 60,
    question: "Kodun çıxış qiymətini müəyyən edin.",
    code: `def f(a, b):
    return str(a + b) + str(a * b)

print(f(2, 5))`,
    options: {
      A: "711",
      B: "710",
      C: "709",
      D: "1420"
    },
    correct: "B",
    explanation: "Kodun addım-addım icrası yoxlanıldı: nəticədə 710 çap olunur."
  },
  {
    id: 175,
    difficulty: "medium",
    time: 60,
    question: "Verilmiş kodun nəticəsini tapın.",
    code: `a = [1, 4, 9]
print(int(sum(a) / len(a)))`,
    options: {
      A: "5",
      B: "3",
      C: "4",
      D: "8"
    },
    correct: "C",
    explanation: "Kodun addım-addım icrası yoxlanıldı: nəticədə 4 çap olunur."
  },
  {
    id: 176,
    difficulty: "medium",
    time: 60,
    question: "Kodun icrasından sonra hansı nəticə alınacaq?",
    code: `s = "Azerbaycan"
print(s.lower().find("b"))`,
    options: {
      A: "5",
      B: "3",
      C: "8",
      D: "4"
    },
    correct: "D",
    explanation: "Kodun addım-addım icrası yoxlanıldı: nəticədə 4 çap olunur."
  },
  {
    id: 177,
    difficulty: "medium",
    time: 60,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `a = 0
b = 1
for i in range(4):
    a, b = b, a + b
print(a)`,
    options: {
      A: "3",
      B: "4",
      C: "2",
      D: "6"
    },
    correct: "A",
    explanation: "Kodun addım-addım icrası yoxlanıldı: nəticədə 3 çap olunur."
  },
  {
    id: 178,
    difficulty: "medium",
    time: 60,
    question: "Kodun çıxış qiymətini müəyyən edin.",
    code: `x = 5
y = 2
print(x // y, x / y)`,
    options: {
      A: "2.5 2",
      B: "2 2.5",
      C: "2 2",
      D: "2.0 2.5"
    },
    correct: "B",
    explanation: "Kodun addım-addım icrası yoxlanıldı: nəticədə 2 2.5 çap olunur."
  },
  {
    id: 179,
    difficulty: "medium",
    time: 60,
    question: "Verilmiş kodun nəticəsini tapın.",
    code: `a = [3, 6, 9, 12]
b = a[1:3]
print(sum(b))`,
    options: {
      A: "16",
      B: "14",
      C: "15",
      D: "30"
    },
    correct: "C",
    explanation: "Kodun addım-addım icrası yoxlanıldı: nəticədə 15 çap olunur."
  },
  {
    id: 180,
    difficulty: "medium",
    time: 60,
    question: "Kodun icrasından sonra hansı nəticə alınacaq?",
    code: `s = "kitab"
print(s[0:2] * 3)`,
    options: {
      A: "kitkitkit",
      B: "kik",
      C: "kitabkitab",
      D: "kikiki"
    },
    correct: "D",
    explanation: "Kodun addım-addım icrası yoxlanıldı: nəticədə kikiki çap olunur."
  },
  {
    id: 181,
    difficulty: "medium",
    time: 60,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `n = 77
print(n % 10 == n // 10)`,
    options: {
      A: "True",
      B: "False",
      C: "77",
      D: "1"
    },
    correct: "A",
    explanation: "Kodun addım-addım icrası yoxlanıldı: nəticədə True çap olunur."
  },
  {
    id: 182,
    difficulty: "medium",
    time: 60,
    question: "Kodun çıxış qiymətini müəyyən edin.",
    code: `a = ["a", "bb", "ccc"]
s = 0
for i in a:
    s += len(i)
print(s)`,
    options: {
      A: "7",
      B: "6",
      C: "5",
      D: "12"
    },
    correct: "B",
    explanation: "Kodun addım-addım icrası yoxlanıldı: nəticədə 6 çap olunur."
  },
  {
    id: 183,
    difficulty: "medium",
    time: 60,
    question: "Verilmiş kodun nəticəsini tapın.",
    code: `a = 3
b = 5
if a < b and b < 10:
    print(b - a)
else:
    print(a + b)`,
    options: {
      A: "3",
      B: "1",
      C: "2",
      D: "4"
    },
    correct: "C",
    explanation: "Kodun addım-addım icrası yoxlanıldı: nəticədə 2 çap olunur."
  },
  {
    id: 184,
    difficulty: "medium",
    time: 60,
    question: "Kodun icrasından sonra hansı nəticə alınacaq?",
    code: `s = "qələm"
a = list(s)
a.remove("ə")
print("".join(a))`,
    options: {
      A: "qələm",
      B: "qlm",
      C: "qəm",
      D: "qləm"
    },
    correct: "D",
    explanation: "Kodun addım-addım icrası yoxlanıldı: nəticədə qləm çap olunur."
  },
  {
    id: 185,
    difficulty: "medium",
    time: 60,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `def f(x):
    return x + 2

print(f(f(3)))`,
    options: {
      A: "7",
      B: "8",
      C: "6",
      D: "14"
    },
    correct: "A",
    explanation: "Kodun addım-addım icrası yoxlanıldı: nəticədə 7 çap olunur."
  },
  {
    id: 186,
    difficulty: "medium",
    time: 60,
    question: "Kodun çıxış qiymətini müəyyən edin.",
    code: `a = 25
b = 4
print(a // b + a % b)`,
    options: {
      A: "8",
      B: "7",
      C: "6",
      D: "14"
    },
    correct: "B",
    explanation: "Kodun addım-addım icrası yoxlanıldı: nəticədə 7 çap olunur."
  },
  {
    id: 187,
    difficulty: "medium",
    time: 60,
    question: "Verilmiş kodun nəticəsini tapın.",
    code: `s = 1
for i in range(2, 5):
    s = s + i * s
print(s)`,
    options: {
      A: "61",
      B: "59",
      C: "60",
      D: "120"
    },
    correct: "C",
    explanation: "Kodun addım-addım icrası yoxlanıldı: nəticədə 60 çap olunur."
  },
  {
    id: 188,
    difficulty: "medium",
    time: 60,
    question: "Kodun icrasından sonra hansı nəticə alınacaq?",
    code: `a = "123"
b = list(a)
b.append("4")
print(int("".join(b)))`,
    options: {
      A: "1235",
      B: "1233",
      C: "2468",
      D: "1234"
    },
    correct: "D",
    explanation: "Kodun addım-addım icrası yoxlanıldı: nəticədə 1234 çap olunur."
  },
  {
    id: 189,
    difficulty: "medium",
    time: 60,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `x = 8
if x % 2 == 0:
    y = x // 2
if y > 3:
    y += 5
print(y)`,
    options: {
      A: "9",
      B: "10",
      C: "8",
      D: "18"
    },
    correct: "A",
    explanation: "Kodun addım-addım icrası yoxlanıldı: nəticədə 9 çap olunur."
  },
  {
    id: 190,
    difficulty: "medium",
    time: 60,
    question: "Kodun çıxış qiymətini müəyyən edin.",
    code: `a = [1, 2, 3, 4, 5]
k = 0
for i in range(len(a)):
    if i % 2 == 0:
        k += a[i]
print(k)`,
    options: {
      A: "10",
      B: "9",
      C: "8",
      D: "18"
    },
    correct: "B",
    explanation: "Kodun addım-addım icrası yoxlanıldı: nəticədə 9 çap olunur."
  },
  {
    id: 191,
    difficulty: "medium",
    time: 60,
    question: "Verilmiş kodun nəticəsini tapın.",
    code: `s = "informatika"
print(s.find("a") + s.count("i"))`,
    options: {
      A: "9",
      B: "7",
      C: "8",
      D: "16"
    },
    correct: "C",
    explanation: "Kodun addım-addım icrası yoxlanıldı: nəticədə 8 çap olunur."
  },
  {
    id: 192,
    difficulty: "medium",
    time: 60,
    question: "Kodun icrasından sonra hansı nəticə alınacaq?",
    code: `a = 6
b = 2
c = 1
c += a // b
c *= b + 1
print(c)`,
    options: {
      A: "13",
      B: "11",
      C: "24",
      D: "12"
    },
    correct: "D",
    explanation: "Kodun addım-addım icrası yoxlanıldı: nəticədə 12 çap olunur."
  },
  {
    id: 193,
    difficulty: "medium",
    time: 60,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `def f(a):
    if a % 3 == 0:
        return a // 3
    else:
        return a + 3

print(f(9) + f(10))`,
    options: {
      A: "16",
      B: "17",
      C: "15",
      D: "32"
    },
    correct: "A",
    explanation: "Kodun addım-addım icrası yoxlanıldı: nəticədə 16 çap olunur."
  },
  {
    id: 194,
    difficulty: "medium",
    time: 60,
    question: "Kodun çıxış qiymətini müəyyən edin.",
    code: `s = 0
i = 5
while i > 0:
    s += i
    i -= 2
print(s)`,
    options: {
      A: "10",
      B: "9",
      C: "8",
      D: "18"
    },
    correct: "B",
    explanation: "Kodun addım-addım icrası yoxlanıldı: nəticədə 9 çap olunur."
  },
  {
    id: 195,
    difficulty: "medium",
    time: 60,
    question: "Verilmiş kodun nəticəsini tapın.",
    code: `a = [2, 3, 4]
b = []
for i in a:
    b.append(i ** 2)
print(sum(b))`,
    options: {
      A: "30",
      B: "28",
      C: "29",
      D: "58"
    },
    correct: "C",
    explanation: "Kodun addım-addım icrası yoxlanıldı: nəticədə 29 çap olunur."
  },
  {
    id: 196,
    difficulty: "medium",
    time: 60,
    question: "Kodun icrasından sonra hansı nəticə alınacaq?",
    code: `s = "salam"
print(s[1:4].upper())`,
    options: {
      A: "ala",
      B: "SAL",
      C: "ALA4",
      D: "ALA"
    },
    correct: "D",
    explanation: "Kodun addım-addım icrası yoxlanıldı: nəticədə ALA çap olunur."
  },
  {
    id: 197,
    difficulty: "medium",
    time: 60,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `a = 4
b = 9
if a * 2 >= b:
    print(a + b)
else:
    print(b - a)`,
    options: {
      A: "5",
      B: "6",
      C: "4",
      D: "10"
    },
    correct: "A",
    explanation: "Kodun addım-addım icrası yoxlanıldı: nəticədə 5 çap olunur."
  },
  {
    id: 198,
    difficulty: "medium",
    time: 60,
    question: "Kodun çıxış qiymətini müəyyən edin.",
    code: `a = list(range(1, 6))
a.remove(3)
print(sum(a))`,
    options: {
      A: "13",
      B: "12",
      C: "11",
      D: "24"
    },
    correct: "B",
    explanation: "Kodun addım-addım icrası yoxlanıldı: nəticədə 12 çap olunur."
  },
  {
    id: 199,
    difficulty: "medium",
    time: 60,
    question: "Verilmiş kodun nəticəsini tapın.",
    code: `def t(a, b):
    if a > b:
        return a
    else:
        return b

print(t(3, 8) + t(10, 4))`,
    options: {
      A: "19",
      B: "17",
      C: "18",
      D: "36"
    },
    correct: "C",
    explanation: "Kodun addım-addım icrası yoxlanıldı: nəticədə 18 çap olunur."
  },
  {
    id: 200,
    difficulty: "medium",
    time: 60,
    question: "Kodun icrasından sonra hansı nəticə alınacaq?",
    code: `x = 3
s = 0
for i in range(1, 4):
    s += x * i
print(s)`,
    options: {
      A: "19",
      B: "17",
      C: "36",
      D: "18"
    },
    correct: "D",
    explanation: "Kodun addım-addım icrası yoxlanıldı: nəticədə 18 çap olunur."
  },
  {
    id: 201,
    difficulty: "medium",
    time: 60,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `a, b = 8, 3
a = a + b * 2
b = a // b
print(a, b)`,
    options: {
      A: "14 4",
      B: "11 3",
      C: "16 5",
      D: "4 14"
    },
    correct: "A",
    explanation: "Kod addım-addım icra edildikdə nəticə 14 4 olur. Buna görə düzgün cavab A variantıdır."
  },
  {
    id: 202,
    difficulty: "medium",
    time: 60,
    question: "Kodun çıxış qiymətini müəyyən edin.",
    code: `n = 376
a = n // 100
b = (n // 10) % 10
c = n % 10
print(a + b * c)`,
    options: {
      A: "28",
      B: "45",
      C: "31",
      D: "16"
    },
    correct: "B",
    explanation: "Kod addım-addım icra edildikdə nəticə 45 olur. Buna görə düzgün cavab B variantıdır."
  },
  {
    id: 203,
    difficulty: "medium",
    time: 60,
    question: "Kod icra edilərsə hansı nəticə alınacaq?",
    code: `x = 45
x = x % 10 * 10 + x // 10
print(x + 3)`,
    options: {
      A: "48",
      B: "93",
      C: "57",
      D: "58"
    },
    correct: "C",
    explanation: "Kod addım-addım icra edildikdə nəticə 57 olur. Buna görə düzgün cavab C variantıdır."
  },
  {
    id: 204,
    difficulty: "medium",
    time: 60,
    question: "Verilmiş kodun nəticəsini tapın.",
    code: `a = "12"
b = 3
c = a * b
print(c.count("1") + len(c))`,
    options: {
      A: "6",
      B: "3",
      C: "10",
      D: "9"
    },
    correct: "D",
    explanation: "Kod addım-addım icra edildikdə nəticə 9 olur. Buna görə düzgün cavab D variantıdır."
  },
  {
    id: 205,
    difficulty: "medium",
    time: 60,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `s = "informatika"
a = s[0:5]
b = s[5:]
print(len(a), len(b))`,
    options: {
      A: "5 6",
      B: "6 5",
      C: "5 5",
      D: "11 0"
    },
    correct: "A",
    explanation: "Kod addım-addım icra edildikdə nəticə 5 6 olur. Buna görə düzgün cavab A variantıdır."
  },
  {
    id: 206,
    difficulty: "medium",
    time: 60,
    question: "Kodun çıxış qiymətini müəyyən edin.",
    code: `s = "proqramlama"
a = s.find("a")
b = s.count("m")
print(a + b)`,
    options: {
      A: "6",
      B: "7",
      C: "3",
      D: "8"
    },
    correct: "B",
    explanation: "Kod addım-addım icra edildikdə nəticə 7 olur. Buna görə düzgün cavab B variantıdır."
  },
  {
    id: 207,
    difficulty: "medium",
    time: 60,
    question: "Kod icra edilərsə hansı nəticə alınacaq?",
    code: `s = "kitabxana"
s = s.replace("a", "ə")
print(s.count("ə"))`,
    options: {
      A: "2",
      B: "4",
      C: "3",
      D: "1"
    },
    correct: "C",
    explanation: "Kod addım-addım icra edildikdə nəticə 3 olur. Buna görə düzgün cavab C variantıdır."
  },
  {
    id: 208,
    difficulty: "medium",
    time: 60,
    question: "Verilmiş kodun nəticəsini tapın.",
    code: `s = "  dərs  "
s = s.strip()
print(s + str(len(s)))`,
    options: {
      A: "dərs6",
      B: "  dərs  4",
      C: "dərs 4",
      D: "dərs4"
    },
    correct: "D",
    explanation: "Kod addım-addım icra edildikdə nəticə dərs4 olur. Buna görə düzgün cavab D variantıdır."
  },
  {
    id: 209,
    difficulty: "medium",
    time: 60,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `a = [4, 7, 2, 7]
b = a.count(7) + a.index(2)
print(b)`,
    options: {
      A: "4",
      B: "3",
      C: "5",
      D: "7"
    },
    correct: "A",
    explanation: "Kod addım-addım icra edildikdə nəticə 4 olur. Buna görə düzgün cavab A variantıdır."
  },
  {
    id: 210,
    difficulty: "medium",
    time: 60,
    question: "Kodun çıxış qiymətini müəyyən edin.",
    code: `a = [5, 1, 4]
a.append(2)
a.sort()
print(a[1] + a[3])`,
    options: {
      A: "5",
      B: "7",
      C: "6",
      D: "8"
    },
    correct: "B",
    explanation: "Kod addım-addım icra edildikdə nəticə 7 olur. Buna görə düzgün cavab B variantıdır."
  },
  {
    id: 211,
    difficulty: "medium",
    time: 60,
    question: "Kod icra edilərsə hansı nəticə alınacaq?",
    code: `a = ["ab", "cd", "ef"]
b = "-".join(a)
print(len(b))`,
    options: {
      A: "6",
      B: "7",
      C: "8",
      D: "9"
    },
    correct: "C",
    explanation: "Kod addım-addım icra edildikdə nəticə 8 olur. Buna görə düzgün cavab C variantıdır."
  },
  {
    id: 212,
    difficulty: "medium",
    time: 60,
    question: "Verilmiş kodun nəticəsini tapın.",
    code: `a = "A,B,C,D"
b = a.split(",")
print(b[1] + b[3])`,
    options: {
      A: "AB",
      B: "CD",
      C: "bd",
      D: "BD"
    },
    correct: "D",
    explanation: "Kod addım-addım icra edildikdə nəticə BD olur. Buna görə düzgün cavab D variantıdır."
  },
  {
    id: 213,
    difficulty: "medium",
    time: 60,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `a = [10, 20, 30, 40]
del a[1]
a.insert(1, 5)
print(sum(a))`,
    options: {
      A: "85",
      B: "100",
      C: "65",
      D: "75"
    },
    correct: "A",
    explanation: "Kod addım-addım icra edildikdə nəticə 85 olur. Buna görə düzgün cavab A variantıdır."
  },
  {
    id: 214,
    difficulty: "medium",
    time: 60,
    question: "Kodun çıxış qiymətini müəyyən edin.",
    code: `a = [3, 6, 9]
b = a
b[1] = 4
print(sum(a))`,
    options: {
      A: "18",
      B: "16",
      C: "22",
      D: "17"
    },
    correct: "B",
    explanation: "Kod addım-addım icra edildikdə nəticə 16 olur. Buna görə düzgün cavab B variantıdır."
  },
  {
    id: 215,
    difficulty: "medium",
    time: 60,
    question: "Kod icra edilərsə hansı nəticə alınacaq?",
    code: `a = list("sual")
a.reverse()
b = "".join(a)
print(b[1:3])`,
    options: {
      A: "la",
      B: "sua",
      C: "au",
      D: "AU"
    },
    correct: "C",
    explanation: "Kod addım-addım icra edildikdə nəticə au olur. Buna görə düzgün cavab C variantıdır."
  },
  {
    id: 216,
    difficulty: "medium",
    time: 60,
    question: "Verilmiş kodun nəticəsini tapın.",
    code: `a = ["2", "4", "6"]
b = int("".join(a[0:2]))
print(b + int(a[2]))`,
    options: {
      A: "246",
      B: "12",
      C: "31",
      D: "30"
    },
    correct: "D",
    explanation: "Kod addım-addım icra edildikdə nəticə 30 olur. Buna görə düzgün cavab D variantıdır."
  },
  {
    id: 217,
    difficulty: "medium",
    time: 60,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `a = "alqoritm"
b = a[2:6]
print(b.upper())`,
    options: {
      A: "QORI",
      B: "ALQO",
      C: "ORİT",
      D: "qori"
    },
    correct: "A",
    explanation: "Kod addım-addım icra edildikdə nəticə QORI olur. Buna görə düzgün cavab A variantıdır."
  },
  {
    id: 218,
    difficulty: "medium",
    time: 60,
    question: "Kodun çıxış qiymətini müəyyən edin.",
    code: `a = "Python dərsi"
b = a.find("d")
c = a[:b]
print(len(c.strip()))`,
    options: {
      A: "7",
      B: "6",
      C: "5",
      D: "11"
    },
    correct: "B",
    explanation: "Kod addım-addım icra edildikdə nəticə 6 olur. Buna görə düzgün cavab B variantıdır."
  },
  {
    id: 219,
    difficulty: "medium",
    time: 60,
    question: "Kod icra edilərsə hansı nəticə alınacaq?",
    code: `a = 64
b = a // 8
c = a % 7
print(b * c)`,
    options: {
      A: "16",
      B: "32",
      C: "8",
      D: "9"
    },
    correct: "C",
    explanation: "Kod addım-addım icra edildikdə nəticə 8 olur. Buna görə düzgün cavab C variantıdır."
  },
  {
    id: 220,
    difficulty: "medium",
    time: 60,
    question: "Verilmiş kodun nəticəsini tapın.",
    code: `a, b, c = 2, 3, 4
a, b = b, a + c
print(a * b - c)`,
    options: {
      A: "10",
      B: "12",
      C: "15",
      D: "14"
    },
    correct: "D",
    explanation: "Kod addım-addım icra edildikdə nəticə 14 olur. Buna görə düzgün cavab D variantıdır."
  },
  {
    id: 221,
    difficulty: "medium",
    time: 60,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `a = 18
if a % 2 == 0 and a % 3 == 0:
    print(a // 3)
else:
    print(a + 3)`,
    options: {
      A: "6",
      B: "9",
      C: "21",
      D: "3"
    },
    correct: "A",
    explanation: "Kod addım-addım icra edildikdə nəticə 6 olur. Buna görə düzgün cavab A variantıdır."
  },
  {
    id: 222,
    difficulty: "medium",
    time: 60,
    question: "Kodun çıxış qiymətini müəyyən edin.",
    code: `x = 7
if x > 10:
    y = x - 2
elif x > 5:
    y = x * 2
else:
    y = x + 2
print(y)`,
    options: {
      A: "9",
      B: "14",
      C: "5",
      D: "12"
    },
    correct: "B",
    explanation: "Kod addım-addım icra edildikdə nəticə 14 olur. Buna görə düzgün cavab B variantıdır."
  },
  {
    id: 223,
    difficulty: "medium",
    time: 60,
    question: "Kod icra edilərsə hansı nəticə alınacaq?",
    code: `a, b = 5, 8
if a * 2 > b:
    c = a + b
else:
    c = b - a
print(c)`,
    options: {
      A: "3",
      B: "10",
      C: "13",
      D: "8"
    },
    correct: "C",
    explanation: "Kod addım-addım icra edildikdə nəticə 13 olur. Buna görə düzgün cavab C variantıdır."
  },
  {
    id: 224,
    difficulty: "medium",
    time: 60,
    question: "Verilmiş kodun nəticəsini tapın.",
    code: `s = "məktəb"
if s.count("ə") == 2:
    print(s[0:3])
else:
    print(s[3:])`,
    options: {
      A: "təb",
      B: "məktəb",
      C: "ktə",
      D: "mək"
    },
    correct: "D",
    explanation: "Kod addım-addım icra edildikdə nəticə mək olur. Buna görə düzgün cavab D variantıdır."
  },
  {
    id: 225,
    difficulty: "medium",
    time: 60,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `a = [2, 4, 6]
if sum(a) > 10:
    a.append(8)
else:
    a.append(1)
print(len(a), sum(a))`,
    options: {
      A: "4 20",
      B: "3 12",
      C: "4 13",
      D: "4 18"
    },
    correct: "A",
    explanation: "Kod addım-addım icra edildikdə nəticə 4 20 olur. Buna görə düzgün cavab A variantıdır."
  },
  {
    id: 226,
    difficulty: "medium",
    time: 60,
    question: "Kodun çıxış qiymətini müəyyən edin.",
    code: `a = 9
if a % 2 == 0:
    b = a // 2
elif a % 3 == 0:
    b = a + 3
else:
    b = a - 1
print(b)`,
    options: {
      A: "4",
      B: "12",
      C: "8",
      D: "9"
    },
    correct: "B",
    explanation: "Kod addım-addım icra edildikdə nəticə 12 olur. Buna görə düzgün cavab B variantıdır."
  },
  {
    id: 227,
    difficulty: "medium",
    time: 60,
    question: "Kod icra edilərsə hansı nəticə alınacaq?",
    code: `a, b = 4, 4
if a != b:
    c = a + b
else:
    c = a * b
print(c + 1)`,
    options: {
      A: "8",
      B: "16",
      C: "17",
      D: "9"
    },
    correct: "C",
    explanation: "Kod addım-addım icra edildikdə nəticə 17 olur. Buna görə düzgün cavab C variantıdır."
  },
  {
    id: 228,
    difficulty: "medium",
    time: 60,
    question: "Verilmiş kodun nəticəsini tapın.",
    code: `x = 12
if x < 10 or x % 5 == 2:
    print("A")
elif x % 3 == 0:
    print("B")
else:
    print("C")`,
    options: {
      A: "B",
      B: "C",
      C: "12",
      D: "A"
    },
    correct: "D",
    explanation: "Kod addım-addım icra edildikdə nəticə A olur. Buna görə düzgün cavab D variantıdır."
  },
  {
    id: 229,
    difficulty: "medium",
    time: 60,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `a = "test"
if "e" in a and len(a) == 4:
    print(a.replace("t", "T"))
else:
    print(a.upper())`,
    options: {
      A: "TesT",
      B: "TEST",
      C: "test",
      D: "TseT"
    },
    correct: "A",
    explanation: "Kod addım-addım icra edildikdə nəticə TesT olur. Buna görə düzgün cavab A variantıdır."
  },
  {
    id: 230,
    difficulty: "medium",
    time: 60,
    question: "Kodun çıxış qiymətini müəyyən edin.",
    code: `a = [5, 10, 15]
if max(a) - min(a) == 10:
    print(a[0] + a[2])
else:
    print(sum(a))`,
    options: {
      A: "30",
      B: "20",
      C: "10",
      D: "15"
    },
    correct: "B",
    explanation: "Kod addım-addım icra edildikdə nəticə 20 olur. Buna görə düzgün cavab B variantıdır."
  },
  {
    id: 231,
    difficulty: "medium",
    time: 60,
    question: "Kod icra edilərsə hansı nəticə alınacaq?",
    code: `a = 6
b = 2
if a // b == 3:
    b = b + a
else:
    b = a - b
print(b)`,
    options: {
      A: "4",
      B: "6",
      C: "8",
      D: "3"
    },
    correct: "C",
    explanation: "Kod addım-addım icra edildikdə nəticə 8 olur. Buna görə düzgün cavab C variantıdır."
  },
  {
    id: 232,
    difficulty: "medium",
    time: 60,
    question: "Verilmiş kodun nəticəsini tapın.",
    code: `s = "bilik"
if s.find("l") > s.find("b"):
    print(s[1:4])
else:
    print(s[0:2])`,
    options: {
      A: "bi",
      B: "lik",
      C: "bili",
      D: "ili"
    },
    correct: "D",
    explanation: "Kod addım-addım icra edildikdə nəticə ili olur. Buna görə düzgün cavab D variantıdır."
  },
  {
    id: 233,
    difficulty: "medium",
    time: 60,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `a = 25
if a % 10 > a // 10:
    print("son")
else:
    print("ilk")`,
    options: {
      A: "son",
      B: "ilk",
      C: "25",
      D: "son ilk"
    },
    correct: "A",
    explanation: "Kod addım-addım icra edildikdə nəticə son olur. Buna görə düzgün cavab A variantıdır."
  },
  {
    id: 234,
    difficulty: "medium",
    time: 60,
    question: "Kodun çıxış qiymətini müəyyən edin.",
    code: `a = 14
if not a % 2 == 1:
    print(a // 2)
else:
    print(a * 2)`,
    options: {
      A: "28",
      B: "7",
      C: "14",
      D: "0"
    },
    correct: "B",
    explanation: "Kod addım-addım icra edildikdə nəticə 7 olur. Buna görə düzgün cavab B variantıdır."
  },
  {
    id: 235,
    difficulty: "medium",
    time: 60,
    question: "Kod icra edilərsə hansı nəticə alınacaq?",
    code: `a = ["a", "bb", "ccc"]
if len(a[1]) + len(a[2]) > 4:
    print(a[0] + a[2])
else:
    print(a[1])`,
    options: {
      A: "bb",
      B: "ab",
      C: "accc",
      D: "ccc"
    },
    correct: "C",
    explanation: "Kod addım-addım icra edildikdə nəticə accc olur. Buna görə düzgün cavab C variantıdır."
  },
  {
    id: 236,
    difficulty: "medium",
    time: 60,
    question: "Verilmiş kodun nəticəsini tapın.",
    code: `a, b = 3, 9
if b % a == 0:
    c = b // a
    if c > 2:
        c = c + a
else:
    c = a + b
print(c)`,
    options: {
      A: "3",
      B: "9",
      C: "12",
      D: "6"
    },
    correct: "D",
    explanation: "Kod addım-addım icra edildikdə nəticə 6 olur. Buna görə düzgün cavab D variantıdır."
  },
  {
    id: 237,
    difficulty: "medium",
    time: 60,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `x = 5
if x > 3:
    if x < 5:
        y = 1
    else:
        y = 2
else:
    y = 3
print(y + x)`,
    options: {
      A: "7",
      B: "6",
      C: "8",
      D: "2"
    },
    correct: "A",
    explanation: "Kod addım-addım icra edildikdə nəticə 7 olur. Buna görə düzgün cavab A variantıdır."
  },
  {
    id: 238,
    difficulty: "medium",
    time: 60,
    question: "Kodun çıxış qiymətini müəyyən edin.",
    code: `s = "ana"
if s.count("a") == 2:
    s = s + " dili"
print(len(s))`,
    options: {
      A: "3",
      B: "8",
      C: "7",
      D: "9"
    },
    correct: "B",
    explanation: "Kod addım-addım icra edildikdə nəticə 8 olur. Buna görə düzgün cavab B variantıdır."
  },
  {
    id: 239,
    difficulty: "medium",
    time: 60,
    question: "Kod icra edilərsə hansı nəticə alınacaq?",
    code: `a = [1, 3, 5]
if 2 in a:
    a.append(2)
else:
    a.insert(1, 2)
print(a)`,
    options: {
      A: "[1, 3, 5, 2]",
      B: "[2, 1, 3, 5]",
      C: "[1, 2, 3, 5]",
      D: "[1, 3, 2, 5]"
    },
    correct: "C",
    explanation: "Kod addım-addım icra edildikdə nəticə [1, 2, 3, 5] olur. Buna görə düzgün cavab C variantıdır."
  },
  {
    id: 240,
    difficulty: "medium",
    time: 60,
    question: "Verilmiş kodun nəticəsini tapın.",
    code: `a = 20
b = 6
if a % b > 1:
    print(a % b)
else:
    print(a // b)`,
    options: {
      A: "20",
      B: "6",
      C: "3",
      D: "2"
    },
    correct: "D",
    explanation: "Kod addım-addım icra edildikdə nəticə 2 olur. Buna görə düzgün cavab D variantıdır."
  },
  {
    id: 241,
    difficulty: "medium",
    time: 60,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `s = 0
for i in range(2, 9):
    if i % 2 == 0:
        s += i
print(s)`,
    options: {
      A: "20",
      B: "24",
      C: "12",
      D: "21"
    },
    correct: "A",
    explanation: "Kod addım-addım icra edildikdə nəticə 20 olur. Buna görə düzgün cavab A variantıdır."
  },
  {
    id: 242,
    difficulty: "medium",
    time: 60,
    question: "Kodun çıxış qiymətini müəyyən edin.",
    code: `k = 1
for i in range(1, 5):
    k = k * i
print(k)`,
    options: {
      A: "10",
      B: "24",
      C: "12",
      D: "20"
    },
    correct: "B",
    explanation: "Kod addım-addım icra edildikdə nəticə 24 olur. Buna görə düzgün cavab B variantıdır."
  },
  {
    id: 243,
    difficulty: "medium",
    time: 60,
    question: "Kod icra edilərsə hansı nəticə alınacaq?",
    code: `a = []
for i in range(3, 8):
    if i % 2 == 1:
        a.append(i)
print(a)`,
    options: {
      A: "[3, 4, 5, 6, 7]",
      B: "[4, 6]",
      C: "[3, 5, 7]",
      D: "[3, 5]"
    },
    correct: "C",
    explanation: "Kod addım-addım icra edildikdə nəticə [3, 5, 7] olur. Buna görə düzgün cavab C variantıdır."
  },
  {
    id: 244,
    difficulty: "medium",
    time: 60,
    question: "Verilmiş kodun nəticəsini tapın.",
    code: `s = "abcde"
n = 0
for i in s:
    if i > "b":
        n += 1
print(n)`,
    options: {
      A: "2",
      B: "5",
      C: "1",
      D: "3"
    },
    correct: "D",
    explanation: "Kod addım-addım icra edildikdə nəticə 3 olur. Buna görə düzgün cavab D variantıdır."
  },
  {
    id: 245,
    difficulty: "medium",
    time: 60,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `a = [2, 4, 5, 8]
s = 0
for i in a:
    s += i // 2
print(s)`,
    options: {
      A: "9",
      B: "19",
      C: "10",
      D: "8"
    },
    correct: "A",
    explanation: "Kod addım-addım icra edildikdə nəticə 9 olur. Buna görə düzgün cavab A variantıdır."
  },
  {
    id: 246,
    difficulty: "medium",
    time: 60,
    question: "Kodun çıxış qiymətini müəyyən edin.",
    code: `i = 10
s = 0
while i > 4:
    s += i
    i -= 3
print(s)`,
    options: {
      A: "15",
      B: "17",
      C: "21",
      D: "10"
    },
    correct: "B",
    explanation: "Kod addım-addım icra edildikdə nəticə 17 olur. Buna görə düzgün cavab B variantıdır."
  },
  {
    id: 247,
    difficulty: "medium",
    time: 60,
    question: "Kod icra edilərsə hansı nəticə alınacaq?",
    code: `n = 48
k = 0
while n > 5:
    n = n // 2
    k += 1
print(n, k)`,
    options: {
      A: "6 3",
      B: "48 0",
      C: "3 4",
      D: "4 3"
    },
    correct: "C",
    explanation: "Kod addım-addım icra edildikdə nəticə 3 4 olur. Buna görə düzgün cavab C variantıdır."
  },
  {
    id: 248,
    difficulty: "medium",
    time: 60,
    question: "Verilmiş kodun nəticəsini tapın.",
    code: `a = [1, 2, 3]
for i in range(len(a)):
    a[i] = a[i] * 2
print(a)`,
    options: {
      A: "[1, 2, 3, 2]",
      B: "[2, 3, 4]",
      C: "[1, 4, 9]",
      D: "[2, 4, 6]"
    },
    correct: "D",
    explanation: "Kod addım-addım icra edildikdə nəticə [2, 4, 6] olur. Buna görə düzgün cavab D variantıdır."
  },
  {
    id: 249,
    difficulty: "medium",
    time: 60,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `s = 0
for i in range(1, 6):
    if i == 4:
        break
    s += i
print(s)`,
    options: {
      A: "6",
      B: "10",
      C: "15",
      D: "4"
    },
    correct: "A",
    explanation: "Kod addım-addım icra edildikdə nəticə 6 olur. Buna görə düzgün cavab A variantıdır."
  },
  {
    id: 250,
    difficulty: "medium",
    time: 60,
    question: "Kodun çıxış qiymətini müəyyən edin.",
    code: `s = 0
for i in range(1, 6):
    if i == 3:
        continue
    s += i
print(s)`,
    options: {
      A: "15",
      B: "12",
      C: "6",
      D: "10"
    },
    correct: "B",
    explanation: "Kod addım-addım icra edildikdə nəticə 12 olur. Buna görə düzgün cavab B variantıdır."
  },
  {
    id: 251,
    difficulty: "medium",
    time: 60,
    question: "Kod icra edilərsə hansı nəticə alınacaq?",
    code: `a = []
for i in range(1, 10):
    if i % 3 == 0:
        continue
    a.append(i)
print(len(a))`,
    options: {
      A: "3",
      B: "9",
      C: "6",
      D: "5"
    },
    correct: "C",
    explanation: "Kod addım-addım icra edildikdə nəticə 6 olur. Buna görə düzgün cavab C variantıdır."
  },
  {
    id: 252,
    difficulty: "medium",
    time: 60,
    question: "Verilmiş kodun nəticəsini tapın.",
    code: `s = 0
for i in range(1, 20):
    if i % 5 == 0:
        break
    s += i
print(s)`,
    options: {
      A: "15",
      B: "5",
      C: "45",
      D: "10"
    },
    correct: "D",
    explanation: "Kod addım-addım icra edildikdə nəticə 10 olur. Buna görə düzgün cavab D variantıdır."
  },
  {
    id: 253,
    difficulty: "medium",
    time: 60,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `n = 1234
s = 0
while n > 0:
    s += n % 10
    n = n // 10
print(s)`,
    options: {
      A: "10",
      B: "1234",
      C: "9",
      D: "24"
    },
    correct: "A",
    explanation: "Kod addım-addım icra edildikdə nəticə 10 olur. Buna görə düzgün cavab A variantıdır."
  },
  {
    id: 254,
    difficulty: "medium",
    time: 60,
    question: "Kodun çıxış qiymətini müəyyən edin.",
    code: `n = 305
s = ""
while n > 0:
    s += str(n % 10)
    n = n // 10
print(s)`,
    options: {
      A: "305",
      B: "503",
      C: "35",
      D: "5030"
    },
    correct: "B",
    explanation: "Kod addım-addım icra edildikdə nəticə 503 olur. Buna görə düzgün cavab B variantıdır."
  },
  {
    id: 255,
    difficulty: "medium",
    time: 60,
    question: "Kod icra edilərsə hansı nəticə alınacaq?",
    code: `a = [3, 1, 4, 1, 5]
s = 0
for i in range(len(a)):
    if i % 2 == 0:
        s += a[i]
print(s)`,
    options: {
      A: "2",
      B: "14",
      C: "12",
      D: "9"
    },
    correct: "C",
    explanation: "Kod addım-addım icra edildikdə nəticə 12 olur. Buna görə düzgün cavab C variantıdır."
  },
  {
    id: 256,
    difficulty: "medium",
    time: 60,
    question: "Verilmiş kodun nəticəsini tapın.",
    code: `s = "salam"
a = []
for i in s:
    if i == "a":
        a.append(i)
print(len(a))`,
    options: {
      A: "1",
      B: "5",
      C: "3",
      D: "2"
    },
    correct: "D",
    explanation: "Kod addım-addım icra edildikdə nəticə 2 olur. Buna görə düzgün cavab D variantıdır."
  },
  {
    id: 257,
    difficulty: "medium",
    time: 60,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `a = [2, 3]
for i in range(2):
    a.append(a[i] + 1)
print(a)`,
    options: {
      A: "[2, 3, 3, 4]",
      B: "[2, 3, 4, 5]",
      C: "[3, 4]",
      D: "[2, 3, 3]"
    },
    correct: "A",
    explanation: "Kod addım-addım icra edildikdə nəticə [2, 3, 3, 4] olur. Buna görə düzgün cavab A variantıdır."
  },
  {
    id: 258,
    difficulty: "medium",
    time: 60,
    question: "Kodun çıxış qiymətini müəyyən edin.",
    code: `s = 1
for i in [2, 3, 4]:
    if i % 2 == 0:
        s *= i
    else:
        s += i
print(s)`,
    options: {
      A: "24",
      B: "20",
      C: "10",
      D: "9"
    },
    correct: "B",
    explanation: "Kod addım-addım icra edildikdə nəticə 20 olur. Buna görə düzgün cavab B variantıdır."
  },
  {
    id: 259,
    difficulty: "medium",
    time: 60,
    question: "Kod icra edilərsə hansı nəticə alınacaq?",
    code: `a = "test"
b = ""
for i in a:
    b = i + b
print(b)`,
    options: {
      A: "test",
      B: "ttes",
      C: "tset",
      D: "TSET"
    },
    correct: "C",
    explanation: "Kod addım-addım icra edildikdə nəticə tset olur. Buna görə düzgün cavab C variantıdır."
  },
  {
    id: 260,
    difficulty: "medium",
    time: 60,
    question: "Verilmiş kodun nəticəsini tapın.",
    code: `i = 1
s = ""
while i < 5:
    s += str(i)
    i += 1
print(s)`,
    options: {
      A: "12345",
      B: "10",
      C: "4321",
      D: "1234"
    },
    correct: "D",
    explanation: "Kod addım-addım icra edildikdə nəticə 1234 olur. Buna görə düzgün cavab D variantıdır."
  },
  {
    id: 261,
    difficulty: "medium",
    time: 60,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `s = 0
for i in range(3):
    for j in range(2):
        s += i + j
print(s)`,
    options: {
      A: "9",
      B: "6",
      C: "12",
      D: "10"
    },
    correct: "A",
    explanation: "Kod addım-addım icra edildikdə nəticə 9 olur. Buna görə düzgün cavab A variantıdır."
  },
  {
    id: 262,
    difficulty: "medium",
    time: 60,
    question: "Kodun çıxış qiymətini müəyyən edin.",
    code: `a = []
for i in range(2):
    for j in range(3):
        a.append(i + j)
print(sum(a))`,
    options: {
      A: "6",
      B: "9",
      C: "12",
      D: "10"
    },
    correct: "B",
    explanation: "Kod addım-addım icra edildikdə nəticə 9 olur. Buna görə düzgün cavab B variantıdır."
  },
  {
    id: 263,
    difficulty: "medium",
    time: 60,
    question: "Kod icra edilərsə hansı nəticə alınacaq?",
    code: `def f(x):
    return x * 2 + 1

print(f(3) + f(4))`,
    options: {
      A: "14",
      B: "15",
      C: "16",
      D: "17"
    },
    correct: "C",
    explanation: "Kod addım-addım icra edildikdə nəticə 16 olur. Buna görə düzgün cavab C variantıdır."
  },
  {
    id: 264,
    difficulty: "medium",
    time: 60,
    question: "Verilmiş kodun nəticəsini tapın.",
    code: `def cem(a):
    s = 0
    for i in a:
        s += i
    return s

print(cem([2, 4, 6]) // 3)`,
    options: {
      A: "12",
      B: "3",
      C: "6",
      D: "4"
    },
    correct: "D",
    explanation: "Kod addım-addım icra edildikdə nəticə 4 olur. Buna görə düzgün cavab D variantıdır."
  },
  {
    id: 265,
    difficulty: "medium",
    time: 60,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `def say(s):
    return s.count("a") + len(s)

print(say("alma"))`,
    options: {
      A: "6",
      B: "4",
      C: "2",
      D: "8"
    },
    correct: "A",
    explanation: "Kod addım-addım icra edildikdə nəticə 6 olur. Buna görə düzgün cavab A variantıdır."
  },
  {
    id: 266,
    difficulty: "medium",
    time: 60,
    question: "Kodun çıxış qiymətini müəyyən edin.",
    code: `def h(a, b):
    if a > b:
        return a - b
    return a + b

print(h(7, 3) + h(2, 5))`,
    options: {
      A: "12",
      B: "11",
      C: "9",
      D: "10"
    },
    correct: "B",
    explanation: "Kod addım-addım icra edildikdə nəticə 11 olur. Buna görə düzgün cavab B variantıdır."
  },
  {
    id: 267,
    difficulty: "medium",
    time: 60,
    question: "Kod icra edilərsə hansı nəticə alınacaq?",
    code: `def kv(x):
    return x ** 2

s = 0
for i in range(1, 4):
    s += kv(i)
print(s)`,
    options: {
      A: "6",
      B: "12",
      C: "14",
      D: "16"
    },
    correct: "C",
    explanation: "Kod addım-addım icra edildikdə nəticə 14 olur. Buna görə düzgün cavab C variantıdır."
  },
  {
    id: 268,
    difficulty: "medium",
    time: 60,
    question: "Verilmiş kodun nəticəsini tapın.",
    code: `def yoxla(x):
    if x % 2 == 0:
        return x // 2
    return x * 2

print(yoxla(6) + yoxla(5))`,
    options: {
      A: "11",
      B: "15",
      C: "14",
      D: "13"
    },
    correct: "D",
    explanation: "Kod addım-addım icra edildikdə nəticə 13 olur. Buna görə düzgün cavab D variantıdır."
  },
  {
    id: 269,
    difficulty: "medium",
    time: 60,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `def bir(a):
    a.append(4)
    return sum(a)

x = [1, 2, 3]
print(bir(x), len(x))`,
    options: {
      A: "10 4",
      B: "6 3",
      C: "10 3",
      D: "4 4"
    },
    correct: "A",
    explanation: "Kod addım-addım icra edildikdə nəticə 10 4 olur. Buna görə düzgün cavab A variantıdır."
  },
  {
    id: 270,
    difficulty: "medium",
    time: 60,
    question: "Kodun çıxış qiymətini müəyyən edin.",
    code: `def f(s):
    return s[1:4]

print(f("program") + f("testler"))`,
    options: {
      A: "protes",
      B: "rogest",
      C: "roget",
      D: "rogstl"
    },
    correct: "B",
    explanation: "Kod addım-addım icra edildikdə nəticə rogest olur. Buna görə düzgün cavab B variantıdır."
  },
  {
    id: 271,
    difficulty: "medium",
    time: 60,
    question: "Kod icra edilərsə hansı nəticə alınacaq?",
    code: `def hesab(a, b):
    c = a + b
    return c * 2

print(hesab(2, 5) - hesab(1, 3))`,
    options: {
      A: "10",
      B: "14",
      C: "6",
      D: "7"
    },
    correct: "C",
    explanation: "Kod addım-addım icra edildikdə nəticə 6 olur. Buna görə düzgün cavab C variantıdır."
  },
  {
    id: 272,
    difficulty: "medium",
    time: 60,
    question: "Verilmiş kodun nəticəsini tapın.",
    code: `def rc(n):
    s = 0
    while n > 0:
        s += n % 10
        n = n // 10
    return s

print(rc(257))`,
    options: {
      A: "257",
      B: "12",
      C: "13",
      D: "14"
    },
    correct: "D",
    explanation: "Kod addım-addım icra edildikdə nəticə 14 olur. Buna görə düzgün cavab D variantıdır."
  },
  {
    id: 273,
    difficulty: "medium",
    time: 60,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `def d(x):
    return int(str(x)[0]) + int(str(x)[1])

print(d(42) * d(31))`,
    options: {
      A: "24",
      B: "10",
      C: "20",
      D: "28"
    },
    correct: "A",
    explanation: "Kod addım-addım icra edildikdə nəticə 24 olur. Buna görə düzgün cavab A variantıdır."
  },
  {
    id: 274,
    difficulty: "medium",
    time: 60,
    question: "Kodun çıxış qiymətini müəyyən edin.",
    code: `def f(a):
    a.sort()
    return a[0] + a[2]

print(f([5, 1, 4]))`,
    options: {
      A: "9",
      B: "6",
      C: "10",
      D: "7"
    },
    correct: "B",
    explanation: "Kod addım-addım icra edildikdə nəticə 6 olur. Buna görə düzgün cavab B variantıdır."
  },
  {
    id: 275,
    difficulty: "medium",
    time: 60,
    question: "Kod icra edilərsə hansı nəticə alınacaq?",
    code: `def f(s):
    s = s.upper()
    return s.count("A")

print(f("ana") + f("alma"))`,
    options: {
      A: "2",
      B: "3",
      C: "4",
      D: "5"
    },
    correct: "C",
    explanation: "Kod addım-addım icra edildikdə nəticə 4 olur. Buna görə düzgün cavab C variantıdır."
  },
  {
    id: 276,
    difficulty: "medium",
    time: 60,
    question: "Verilmiş kodun nəticəsini tapın.",
    code: `def t(a, b):
    return str(a) + str(b)

print(int(t(2, 5)) + int(t(1, 3)))`,
    options: {
      A: "2513",
      B: "15",
      C: "39",
      D: "38"
    },
    correct: "D",
    explanation: "Kod addım-addım icra edildikdə nəticə 38 olur. Buna görə düzgün cavab D variantıdır."
  },
  {
    id: 277,
    difficulty: "medium",
    time: 60,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `def f(x):
    if x > 5:
        return x - 1
    else:
        return x + 1

print(f(5) + f(6))`,
    options: {
      A: "11",
      B: "10",
      C: "13",
      D: "12"
    },
    correct: "A",
    explanation: "Kod addım-addım icra edildikdə nəticə 11 olur. Buna görə düzgün cavab A variantıdır."
  },
  {
    id: 278,
    difficulty: "medium",
    time: 60,
    question: "Kodun çıxış qiymətini müəyyən edin.",
    code: `def f(a):
    s = 0
    for i in a:
        if i % 2 == 0:
            s += i
    return s

print(f([1, 2, 3, 4, 5]))`,
    options: {
      A: "15",
      B: "6",
      C: "9",
      D: "4"
    },
    correct: "B",
    explanation: "Kod addım-addım icra edildikdə nəticə 6 olur. Buna görə düzgün cavab B variantıdır."
  },
  {
    id: 279,
    difficulty: "medium",
    time: 60,
    question: "Kod icra edilərsə hansı nəticə alınacaq?",
    code: `def f(s):
    a = list(s)
    a.reverse()
    return "".join(a)

print(f("kod"))`,
    options: {
      A: "kod",
      B: "okd",
      C: "dok",
      D: "DOK"
    },
    correct: "C",
    explanation: "Kod addım-addım icra edildikdə nəticə dok olur. Buna görə düzgün cavab C variantıdır."
  },
  {
    id: 280,
    difficulty: "medium",
    time: 60,
    question: "Verilmiş kodun nəticəsini tapın.",
    code: `def f(n):
    return n // 10 + n % 10

print(f(68) + f(24))`,
    options: {
      A: "100",
      B: "18",
      C: "16",
      D: "20"
    },
    correct: "D",
    explanation: "Kod addım-addım icra edildikdə nəticə 20 olur. Buna görə düzgün cavab D variantıdır."
  },
  {
    id: 281,
    difficulty: "medium",
    time: 60,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `a = [2, 5, 8]
b = []
for i in a:
    b.append(i + len(b))
print(b)`,
    options: {
      A: "[2, 6, 10]",
      B: "[2, 5, 8]",
      C: "[3, 7, 11]",
      D: "[]"
    },
    correct: "A",
    explanation: "Kod addım-addım icra edildikdə nəticə [2, 6, 10] olur. Buna görə düzgün cavab A variantıdır."
  },
  {
    id: 282,
    difficulty: "medium",
    time: 60,
    question: "Kodun çıxış qiymətini müəyyən edin.",
    code: `s = "informatika"
a = s[0:3]
b = s[3:6]
print(a.count("i") + b.count("o"))`,
    options: {
      A: "1",
      B: "2",
      C: "3",
      D: "0"
    },
    correct: "B",
    explanation: "Kod addım-addım icra edildikdə nəticə 2 olur. Buna görə düzgün cavab B variantıdır."
  },
  {
    id: 283,
    difficulty: "medium",
    time: 60,
    question: "Kod icra edilərsə hansı nəticə alınacaq?",
    code: `a = 4
b = 9
if a + b > 12 and b - a < 6:
    print(a * b)
else:
    print(a + b)`,
    options: {
      A: "13",
      B: "5",
      C: "36",
      D: "45"
    },
    correct: "C",
    explanation: "Kod addım-addım icra edildikdə nəticə 36 olur. Buna görə düzgün cavab C variantıdır."
  },
  {
    id: 284,
    difficulty: "medium",
    time: 60,
    question: "Verilmiş kodun nəticəsini tapın.",
    code: `a = [1, 2, 3]
b = [4, 5]
c = a + b
print(c[2] + c[4])`,
    options: {
      A: "7",
      B: "6",
      C: "9",
      D: "8"
    },
    correct: "D",
    explanation: "Kod addım-addım icra edildikdə nəticə 8 olur. Buna görə düzgün cavab D variantıdır."
  },
  {
    id: 285,
    difficulty: "medium",
    time: 60,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `s = 0
for i in range(1, 8):
    if i % 2 == 0 or i % 3 == 0:
        s += i
print(s)`,
    options: {
      A: "15",
      B: "18",
      C: "21",
      D: "16"
    },
    correct: "A",
    explanation: "Kod addım-addım icra edildikdə nəticə 15 olur. Buna görə düzgün cavab A variantıdır."
  },
  {
    id: 286,
    difficulty: "medium",
    time: 60,
    question: "Kodun çıxış qiymətini müəyyən edin.",
    code: `a = 1
for i in range(3):
    a = a * 2 + i
print(a)`,
    options: {
      A: "8",
      B: "12",
      C: "10",
      D: "13"
    },
    correct: "B",
    explanation: "Kod addım-addım icra edildikdə nəticə 12 olur. Buna görə düzgün cavab B variantıdır."
  },
  {
    id: 287,
    difficulty: "medium",
    time: 60,
    question: "Kod icra edilərsə hansı nəticə alınacaq?",
    code: `s = "abaac"
k = 0
for i in range(len(s)):
    if s[i] == "a":
        k += i
print(k)`,
    options: {
      A: "3",
      B: "6",
      C: "5",
      D: "2"
    },
    correct: "C",
    explanation: "Kod addım-addım icra edildikdə nəticə 5 olur. Buna görə düzgün cavab C variantıdır."
  },
  {
    id: 288,
    difficulty: "medium",
    time: 60,
    question: "Verilmiş kodun nəticəsini tapın.",
    code: `a = [3, 6, 9, 12]
s = 0
for i in range(1, len(a)):
    s += a[i] - a[i-1]
print(s)`,
    options: {
      A: "3",
      B: "6",
      C: "12",
      D: "9"
    },
    correct: "D",
    explanation: "Kod addım-addım icra edildikdə nəticə 9 olur. Buna görə düzgün cavab D variantıdır."
  },
  {
    id: 289,
    difficulty: "medium",
    time: 60,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `a = "12 34 5"
b = a.split(" ")
print(int(b[0]) + int(b[2]))`,
    options: {
      A: "17",
      B: "51",
      C: "39",
      D: "18"
    },
    correct: "A",
    explanation: "Kod addım-addım icra edildikdə nəticə 17 olur. Buna görə düzgün cavab A variantıdır."
  },
  {
    id: 290,
    difficulty: "medium",
    time: 60,
    question: "Kodun çıxış qiymətini müəyyən edin.",
    code: `a = ["a", "b", "a", "c"]
while "a" in a:
    a.remove("a")
print(a)`,
    options: {
      A: "['a', 'b', 'c']",
      B: "['b', 'c']",
      C: "['b', 'a', 'c']",
      D: "['c']"
    },
    correct: "B",
    explanation: "Kod addım-addım icra edildikdə nəticə ['b', 'c'] olur. Buna görə düzgün cavab B variantıdır."
  },
  {
    id: 291,
    difficulty: "medium",
    time: 60,
    question: "Kod icra edilərsə hansı nəticə alınacaq?",
    code: `def f(x):
    return x + 2

a = f(f(3))
print(a)`,
    options: {
      A: "5",
      B: "8",
      C: "7",
      D: "9"
    },
    correct: "C",
    explanation: "Kod addım-addım icra edildikdə nəticə 7 olur. Buna görə düzgün cavab C variantıdır."
  },
  {
    id: 292,
    difficulty: "medium",
    time: 60,
    question: "Verilmiş kodun nəticəsini tapın.",
    code: `def f(a, b):
    return a * 10 + b

print(f(2, 3) + f(1, 4))`,
    options: {
      A: "234",
      B: "28",
      C: "38",
      D: "37"
    },
    correct: "D",
    explanation: "Kod addım-addım icra edildikdə nəticə 37 olur. Buna görə düzgün cavab D variantıdır."
  },
  {
    id: 293,
    difficulty: "medium",
    time: 60,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `a = [4, 1, 7, 1]
a.remove(1)
a.append(a.count(1))
print(a)`,
    options: {
      A: "[4, 7, 1, 1]",
      B: "[4, 7, 1]",
      C: "[4, 1, 7, 1, 2]",
      D: "[]"
    },
    correct: "A",
    explanation: "Kod addım-addım icra edildikdə nəticə [4, 7, 1, 1] olur. Buna görə düzgün cavab A variantıdır."
  },
  {
    id: 294,
    difficulty: "medium",
    time: 60,
    question: "Kodun çıxış qiymətini müəyyən edin.",
    code: `s = "AZERBAYCAN"
print(s.find("A") + s.find("A", 1) + s.count("A"))`,
    options: {
      A: "6",
      B: "8",
      C: "2",
      D: "9"
    },
    correct: "B",
    explanation: "Kod addım-addım icra edildikdə nəticə 8 olur. Buna görə düzgün cavab B variantıdır."
  },
  {
    id: 295,
    difficulty: "medium",
    time: 60,
    question: "Kod icra edilərsə hansı nəticə alınacaq?",
    code: `i = 5
s = 0
while i <= 11:
    if i % 2 == 1:
        s += i
    i += 2
print(s)`,
    options: {
      A: "24",
      B: "36",
      C: "32",
      D: "20"
    },
    correct: "C",
    explanation: "Kod addım-addım icra edildikdə nəticə 32 olur. Buna görə düzgün cavab C variantıdır."
  },
  {
    id: 296,
    difficulty: "medium",
    time: 60,
    question: "Verilmiş kodun nəticəsini tapın.",
    code: `a = []
for i in range(1, 5):
    a.insert(0, i)
print(a)`,
    options: {
      A: "[1, 2, 3, 4]",
      B: "[4, 3, 2]",
      C: "[0, 1, 2, 3]",
      D: "[4, 3, 2, 1]"
    },
    correct: "D",
    explanation: "Kod addım-addım icra edildikdə nəticə [4, 3, 2, 1] olur. Buna görə düzgün cavab D variantıdır."
  },
  {
    id: 297,
    difficulty: "medium",
    time: 60,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `a = "kitab"
b = list(a)
b[0] = "K"
print("".join(b))`,
    options: {
      A: "Kitab",
      B: "kitab",
      C: "K",
      D: "K itab"
    },
    correct: "A",
    explanation: "Kod addım-addım icra edildikdə nəticə Kitab olur. Buna görə düzgün cavab A variantıdır."
  },
  {
    id: 298,
    difficulty: "medium",
    time: 60,
    question: "Kodun çıxış qiymətini müəyyən edin.",
    code: `def f(a):
    return max(a) - min(a)

print(f([8, 3, 10]) * 2)`,
    options: {
      A: "7",
      B: "14",
      C: "10",
      D: "12"
    },
    correct: "B",
    explanation: "Kod addım-addım icra edildikdə nəticə 14 olur. Buna görə düzgün cavab B variantıdır."
  },
  {
    id: 299,
    difficulty: "medium",
    time: 60,
    question: "Kod icra edilərsə hansı nəticə alınacaq?",
    code: `s = 0
for i in range(1, 10):
    if i > 6:
        break
    if i % 2 == 0:
        continue
    s += i
print(s)`,
    options: {
      A: "12",
      B: "16",
      C: "9",
      D: "10"
    },
    correct: "C",
    explanation: "Kod addım-addım icra edildikdə nəticə 9 olur. Buna görə düzgün cavab C variantıdır."
  },
  {
    id: 300,
    difficulty: "medium",
    time: 60,
    question: "Verilmiş kodun nəticəsini tapın.",
    code: `def f(n):
    s = str(n)
    return int(s[0]) * int(s[1])

print(f(37) + f(24))`,
    options: {
      A: "35",
      B: "14",
      C: "30",
      D: "29"
    },
    correct: "D",
    explanation: "Kod addım-addım icra edildikdə nəticə 29 olur. Buna görə düzgün cavab D variantıdır."
  },
  {
    id: 301,
    difficulty: "hard",
    time: 90,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `a, b, c = 3, 4, 5
a, b = b + c, a * 2
c = a // b + c % a
print(a, b, c)`,
    options: {
      A: "9 6 6",
      B: "6 6 9",
      C: "21",
      D: "10 7 7"
    },
    correct: "A",
    explanation: "Kod addım-addım icra edildikdə nəticə 9 6 6 olur. Dövr, şərt və dəyişən yenilənmələri ardıcıl izlənildikdə düzgün cavab A variantıdır."
  },
  {
    id: 302,
    difficulty: "hard",
    time: 90,
    question: "Kodun çıxış qiymətini müəyyən edin.",
    code: `n = 584
a = n // 100
b = (n // 10) % 10
c = n % 10
print(a * c + b)`,
    options: {
      A: "29",
      B: "28",
      C: "27",
      D: "56"
    },
    correct: "B",
    explanation: "Kod addım-addım icra edildikdə nəticə 28 olur. Dövr, şərt və dəyişən yenilənmələri ardıcıl izlənildikdə düzgün cavab B variantıdır."
  },
  {
    id: 303,
    difficulty: "hard",
    time: 90,
    question: "Verilmiş kodun nəticəsini tapın.",
    code: `s = "informatika"
a = s[0:4]
b = s[4:7]
print(a.count("i") + b.find("r") + len(s))`,
    options: {
      A: "13",
      B: "11",
      C: "12",
      D: "24"
    },
    correct: "C",
    explanation: "Kod addım-addım icra edildikdə nəticə 12 olur. Dövr, şərt və dəyişən yenilənmələri ardıcıl izlənildikdə düzgün cavab C variantıdır."
  },
  {
    id: 304,
    difficulty: "hard",
    time: 90,
    question: "Kod icra edildikdən sonra hansı nəticə alınacaq?",
    code: `a = [4, 2, 7, 2]
b = a
b[1] = a[2] - a[0]
print(sum(a), a.count(2))`,
    options: {
      A: "1 16",
      B: "17",
      C: "17 2",
      D: "16 1"
    },
    correct: "D",
    explanation: "Kod addım-addım icra edildikdə nəticə 16 1 olur. Dövr, şərt və dəyişən yenilənmələri ardıcıl izlənildikdə düzgün cavab D variantıdır."
  },
  {
    id: 305,
    difficulty: "hard",
    time: 90,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `a = [10, 20, 30, 40, 50]
b = a[1:4]
b[0] = b[0] + b[2]
print(sum(a), sum(b))`,
    options: {
      A: "150 130",
      B: "130 150",
      C: "280",
      D: "151 131"
    },
    correct: "A",
    explanation: "Kod addım-addım icra edildikdə nəticə 150 130 olur. Dövr, şərt və dəyişən yenilənmələri ardıcıl izlənildikdə düzgün cavab A variantıdır."
  },
  {
    id: 306,
    difficulty: "hard",
    time: 90,
    question: "Kodun çıxış qiymətini müəyyən edin.",
    code: `s = "  Python dərsi  "
s = s.strip()
a = s.replace("Python", "Kod")
print(len(s), len(a))`,
    options: {
      A: "9 12",
      B: "12 9",
      C: "21",
      D: "13 10"
    },
    correct: "B",
    explanation: "Kod addım-addım icra edildikdə nəticə 12 9 olur. Dövr, şərt və dəyişən yenilənmələri ardıcıl izlənildikdə düzgün cavab B variantıdır."
  },
  {
    id: 307,
    difficulty: "hard",
    time: 90,
    question: "Verilmiş kodun nəticəsini tapın.",
    code: `a = "12"
b = "3"
c = int(a + b) - int(a) * int(b)
print(c)`,
    options: {
      A: "88",
      B: "86",
      C: "87",
      D: "174"
    },
    correct: "C",
    explanation: "Kod addım-addım icra edildikdə nəticə 87 olur. Dövr, şərt və dəyişən yenilənmələri ardıcıl izlənildikdə düzgün cavab C variantıdır."
  },
  {
    id: 308,
    difficulty: "hard",
    time: 90,
    question: "Kod icra edildikdən sonra hansı nəticə alınacaq?",
    code: `a = ["ab", "c", "de"]
b = "".join(a)
c = list(b)
print(len(c) + c.count("e"))`,
    options: {
      A: "7",
      B: "5",
      C: "12",
      D: "6"
    },
    correct: "D",
    explanation: "Kod addım-addım icra edildikdə nəticə 6 olur. Dövr, şərt və dəyişən yenilənmələri ardıcıl izlənildikdə düzgün cavab D variantıdır."
  },
  {
    id: 309,
    difficulty: "hard",
    time: 90,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `a = "alqoritm"
b = a[2:6]
c = b.upper().replace("O", "0")
print(c)`,
    options: {
      A: "Q0RI",
      B: "q0ri",
      C: "Q0RIQ0RI",
      D: "4"
    },
    correct: "A",
    explanation: "Kod addım-addım icra edildikdə nəticə Q0RI olur. Dövr, şərt və dəyişən yenilənmələri ardıcıl izlənildikdə düzgün cavab A variantıdır."
  },
  {
    id: 310,
    difficulty: "hard",
    time: 90,
    question: "Kodun çıxış qiymətini müəyyən edin.",
    code: `a = [6, 1, 4, 1, 6]
a.remove(1)
a.insert(2, 3)
print(a, sum(a))`,
    options: {
      A: "20 6] 1, 3, 4, [6,",
      B: "[6, 4, 3, 1, 6] 20",
      C: "[6,4,3,1,6]20",
      D: "0"
    },
    correct: "B",
    explanation: "Kod addım-addım icra edildikdə nəticə [6, 4, 3, 1, 6] 20 olur. Dövr, şərt və dəyişən yenilənmələri ardıcıl izlənildikdə düzgün cavab B variantıdır."
  },
  {
    id: 311,
    difficulty: "hard",
    time: 90,
    question: "Verilmiş kodun nəticəsini tapın.",
    code: `a = 7
b = 3
a = a % b + a // b
b = a * b - 1
print(a, b)`,
    options: {
      A: "8 3",
      B: "11",
      C: "3 8",
      D: "4 9"
    },
    correct: "C",
    explanation: "Kod addım-addım icra edildikdə nəticə 3 8 olur. Dövr, şərt və dəyişən yenilənmələri ardıcıl izlənildikdə düzgün cavab C variantıdır."
  },
  {
    id: 312,
    difficulty: "hard",
    time: 90,
    question: "Kod icra edildikdən sonra hansı nəticə alınacaq?",
    code: `s = "banana"
a = s.find("a")
b = s.find("a", a + 1)
c = s.find("a", b + 1)
print(a + b + c)`,
    options: {
      A: "10",
      B: "8",
      C: "18",
      D: "9"
    },
    correct: "D",
    explanation: "Kod addım-addım icra edildikdə nəticə 9 olur. Dövr, şərt və dəyişən yenilənmələri ardıcıl izlənildikdə düzgün cavab D variantıdır."
  },
  {
    id: 313,
    difficulty: "hard",
    time: 90,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `a = [3, 8, 5, 8, 2]
k = a.index(8) + a.count(8) + max(a)
print(k)`,
    options: {
      A: "11",
      B: "12",
      C: "10",
      D: "22"
    },
    correct: "A",
    explanation: "Kod addım-addım icra edildikdə nəticə 11 olur. Dövr, şərt və dəyişən yenilənmələri ardıcıl izlənildikdə düzgün cavab A variantıdır."
  },
  {
    id: 314,
    difficulty: "hard",
    time: 90,
    question: "Kodun çıxış qiymətini müəyyən edin.",
    code: `s = "kitab oxu"
a = s[0:5]
b = s[6:]
print(b.capitalize() + " " + a.upper())`,
    options: {
      A: "KITAB Oxu",
      B: "Oxu KITAB",
      C: "OxuKITAB",
      D: "0"
    },
    correct: "B",
    explanation: "Kod addım-addım icra edildikdə nəticə Oxu KITAB olur. Dövr, şərt və dəyişən yenilənmələri ardıcıl izlənildikdə düzgün cavab B variantıdır."
  },
  {
    id: 315,
    difficulty: "hard",
    time: 90,
    question: "Verilmiş kodun nəticəsini tapın.",
    code: `a = list("sual")
a[1] = "O"
b = "".join(a)
print(b.lower())`,
    options: {
      A: "SOAL",
      B: "soalsoal",
      C: "soal",
      D: "4"
    },
    correct: "C",
    explanation: "Kod addım-addım icra edildikdə nəticə soal olur. Dövr, şərt və dəyişən yenilənmələri ardıcıl izlənildikdə düzgün cavab C variantıdır."
  },
  {
    id: 316,
    difficulty: "hard",
    time: 90,
    question: "Kod icra edildikdən sonra hansı nəticə alınacaq?",
    code: `a = [2, 5, 8]
b = [1, 3]
c = a + b
c.sort()
print(c[1] + c[3])`,
    options: {
      A: "8",
      B: "6",
      C: "14",
      D: "7"
    },
    correct: "D",
    explanation: "Kod addım-addım icra edildikdə nəticə 7 olur. Dövr, şərt və dəyişən yenilənmələri ardıcıl izlənildikdə düzgün cavab D variantıdır."
  },
  {
    id: 317,
    difficulty: "hard",
    time: 90,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `a = "A-B-C-D"
b = a.split("-")
b.remove("B")
print("".join(b))`,
    options: {
      A: "ACD",
      B: "acd",
      C: "ACDACD",
      D: "3"
    },
    correct: "A",
    explanation: "Kod addım-addım icra edildikdə nəticə ACD olur. Dövr, şərt və dəyişən yenilənmələri ardıcıl izlənildikdə düzgün cavab A variantıdır."
  },
  {
    id: 318,
    difficulty: "hard",
    time: 90,
    question: "Kodun çıxış qiymətini müəyyən edin.",
    code: `x = 36
x = x // 6 + x % 5
x = x * 2 - 3
print(x)`,
    options: {
      A: "12",
      B: "11",
      C: "10",
      D: "22"
    },
    correct: "B",
    explanation: "Kod addım-addım icra edildikdə nəticə 11 olur. Dövr, şərt və dəyişən yenilənmələri ardıcıl izlənildikdə düzgün cavab B variantıdır."
  },
  {
    id: 319,
    difficulty: "hard",
    time: 90,
    question: "Verilmiş kodun nəticəsini tapın.",
    code: `s = "proqram"
a = s[0:3]
b = s[3:]
print(a + str(len(b)) + b)`,
    options: {
      A: "PRO4QRAM",
      B: "pro4qrampro4qram",
      C: "pro4qram",
      D: "8"
    },
    correct: "C",
    explanation: "Kod addım-addım icra edildikdə nəticə pro4qram olur. Dövr, şərt və dəyişən yenilənmələri ardıcıl izlənildikdə düzgün cavab C variantıdır."
  },
  {
    id: 320,
    difficulty: "hard",
    time: 90,
    question: "Kod icra edildikdən sonra hansı nəticə alınacaq?",
    code: `a = [9, 4, 7, 4]
a[0] = min(a) + max(a)
del a[2]
print(a, sum(a))`,
    options: {
      A: "21 4] 4, [13,",
      B: "[13,4,4]21",
      C: "0",
      D: "[13, 4, 4] 21"
    },
    correct: "D",
    explanation: "Kod addım-addım icra edildikdə nəticə [13, 4, 4] 21 olur. Dövr, şərt və dəyişən yenilənmələri ardıcıl izlənildikdə düzgün cavab D variantıdır."
  },
  {
    id: 321,
    difficulty: "hard",
    time: 90,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `a, b = 12, 5
if a % b > 1:
    c = a // b + b
else:
    c = a + b
print(c)`,
    options: {
      A: "7",
      B: "8",
      C: "6",
      D: "14"
    },
    correct: "A",
    explanation: "Kod addım-addım icra edildikdə nəticə 7 olur. Dövr, şərt və dəyişən yenilənmələri ardıcıl izlənildikdə düzgün cavab A variantıdır."
  },
  {
    id: 322,
    difficulty: "hard",
    time: 90,
    question: "Kodun çıxış qiymətini müəyyən edin.",
    code: `x = 18
if x % 2 == 0 and x % 3 == 0:
    y = x // 6
elif x % 2 == 0:
    y = x // 2
else:
    y = x
print(y)`,
    options: {
      A: "4",
      B: "3",
      C: "2",
      D: "6"
    },
    correct: "B",
    explanation: "Kod addım-addım icra edildikdə nəticə 3 olur. Dövr, şərt və dəyişən yenilənmələri ardıcıl izlənildikdə düzgün cavab B variantıdır."
  },
  {
    id: 323,
    difficulty: "hard",
    time: 90,
    question: "Verilmiş kodun nəticəsini tapın.",
    code: `s = "informatika"
if s.find("r") > s.count("a"):
    print(s[2:5])
else:
    print(s[5:8])`,
    options: {
      A: "FOR",
      B: "forfor",
      C: "for",
      D: "3"
    },
    correct: "C",
    explanation: "Kod addım-addım icra edildikdə nəticə for olur. Dövr, şərt və dəyişən yenilənmələri ardıcıl izlənildikdə düzgün cavab C variantıdır."
  },
  {
    id: 324,
    difficulty: "hard",
    time: 90,
    question: "Kod icra edildikdən sonra hansı nəticə alınacaq?",
    code: `a = [4, 6, 9]
if sum(a) > 20:
    a.append(1)
elif max(a) == 9:
    a[0] = a[0] + 5
else:
    a.remove(6)
print(a)`,
    options: {
      A: "[6, 9, 9]",
      B: "[9, 6]",
      C: "[9, 6, 9, 9, 6, 9]",
      D: "[9, 6, 9]"
    },
    correct: "D",
    explanation: "Kod addım-addım icra edildikdə nəticə [9, 6, 9] olur. Dövr, şərt və dəyişən yenilənmələri ardıcıl izlənildikdə düzgün cavab D variantıdır."
  },
  {
    id: 325,
    difficulty: "hard",
    time: 90,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `a, b, c = 5, 10, 15
if a + b == c and c % b != 0:
    k = c - a
else:
    k = a * b
print(k)`,
    options: {
      A: "10",
      B: "11",
      C: "9",
      D: "20"
    },
    correct: "A",
    explanation: "Kod addım-addım icra edildikdə nəticə 10 olur. Dövr, şərt və dəyişən yenilənmələri ardıcıl izlənildikdə düzgün cavab A variantıdır."
  },
  {
    id: 326,
    difficulty: "hard",
    time: 90,
    question: "Kodun çıxış qiymətini müəyyən edin.",
    code: `x = 7
if not x % 2 == 0 and x > 5:
    print(x * 2)
else:
    print(x + 2)`,
    options: {
      A: "15",
      B: "14",
      C: "13",
      D: "28"
    },
    correct: "B",
    explanation: "Kod addım-addım icra edildikdə nəticə 14 olur. Dövr, şərt və dəyişən yenilənmələri ardıcıl izlənildikdə düzgün cavab B variantıdır."
  },
  {
    id: 327,
    difficulty: "hard",
    time: 90,
    question: "Verilmiş kodun nəticəsini tapın.",
    code: `a = "məktəb"
if a.count("ə") == 2:
    b = a.replace("ə", "e")
else:
    b = a.upper()
print(b)`,
    options: {
      A: "MEKTEB",
      B: "mektebmekteb",
      C: "mekteb",
      D: "6"
    },
    correct: "C",
    explanation: "Kod addım-addım icra edildikdə nəticə mekteb olur. Dövr, şərt və dəyişən yenilənmələri ardıcıl izlənildikdə düzgün cavab C variantıdır."
  },
  {
    id: 328,
    difficulty: "hard",
    time: 90,
    question: "Kod icra edildikdən sonra hansı nəticə alınacaq?",
    code: `a = [1, 2, 3, 4]
if len(a) == sum(a) // 2:
    print(a[0] + a[3])
else:
    print(a[1] + a[2])`,
    options: {
      A: "6",
      B: "4",
      C: "10",
      D: "5"
    },
    correct: "D",
    explanation: "Kod addım-addım icra edildikdə nəticə 5 olur. Dövr, şərt və dəyişən yenilənmələri ardıcıl izlənildikdə düzgün cavab D variantıdır."
  },
  {
    id: 329,
    difficulty: "hard",
    time: 90,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `n = 245
r1 = n // 100
r2 = n % 10
if r1 < r2:
    print(r2 - r1)
else:
    print(r1 + r2)`,
    options: {
      A: "3",
      B: "4",
      C: "2",
      D: "6"
    },
    correct: "A",
    explanation: "Kod addım-addım icra edildikdə nəticə 3 olur. Dövr, şərt və dəyişən yenilənmələri ardıcıl izlənildikdə düzgün cavab A variantıdır."
  },
  {
    id: 330,
    difficulty: "hard",
    time: 90,
    question: "Kodun çıxış qiymətini müəyyən edin.",
    code: `a, b = 8, 4
if a // b == 2:
    if a % b == 0:
        c = a + b
    else:
        c = a - b
else:
    c = a * b
print(c)`,
    options: {
      A: "13",
      B: "12",
      C: "11",
      D: "24"
    },
    correct: "B",
    explanation: "Kod addım-addım icra edildikdə nəticə 12 olur. Dövr, şərt və dəyişən yenilənmələri ardıcıl izlənildikdə düzgün cavab B variantıdır."
  },
  {
    id: 331,
    difficulty: "hard",
    time: 90,
    question: "Verilmiş kodun nəticəsini tapın.",
    code: `s = "Python"
if s[0] == "P" or len(s) < 4:
    print(s[1:4])
else:
    print(s[2:5])`,
    options: {
      A: "YTH",
      B: "ythyth",
      C: "yth",
      D: "3"
    },
    correct: "C",
    explanation: "Kod addım-addım icra edildikdə nəticə yth olur. Dövr, şərt və dəyişən yenilənmələri ardıcıl izlənildikdə düzgün cavab C variantıdır."
  },
  {
    id: 332,
    difficulty: "hard",
    time: 90,
    question: "Kod icra edildikdən sonra hansı nəticə alınacaq?",
    code: `a = [7, 3, 5]
if min(a) + max(a) > sum(a) // 2:
    a.sort()
else:
    a.reverse()
print(a)`,
    options: {
      A: "[7, 5, 3]",
      B: "[3, 5]",
      C: "[3, 5, 7, 3, 5, 7]",
      D: "[3, 5, 7]"
    },
    correct: "D",
    explanation: "Kod addım-addım icra edildikdə nəticə [3, 5, 7] olur. Dövr, şərt və dəyişən yenilənmələri ardıcıl izlənildikdə düzgün cavab D variantıdır."
  },
  {
    id: 333,
    difficulty: "hard",
    time: 90,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `x = 20
if x % 6 == 2:
    y = x // 3
elif x % 5 == 0:
    y = x // 5 + 2
else:
    y = x % 7
print(y)`,
    options: {
      A: "6",
      B: "7",
      C: "5",
      D: "12"
    },
    correct: "A",
    explanation: "Kod addım-addım icra edildikdə nəticə 6 olur. Dövr, şərt və dəyişən yenilənmələri ardıcıl izlənildikdə düzgün cavab A variantıdır."
  },
  {
    id: 334,
    difficulty: "hard",
    time: 90,
    question: "Kodun çıxış qiymətini müəyyən edin.",
    code: `s = "test"
a = s.find("e")
b = s.find("x")
if b == -1:
    print(a + len(s))
else:
    print(b)`,
    options: {
      A: "6",
      B: "5",
      C: "4",
      D: "10"
    },
    correct: "B",
    explanation: "Kod addım-addım icra edildikdə nəticə 5 olur. Dövr, şərt və dəyişən yenilənmələri ardıcıl izlənildikdə düzgün cavab B variantıdır."
  },
  {
    id: 335,
    difficulty: "hard",
    time: 90,
    question: "Verilmiş kodun nəticəsini tapın.",
    code: `a, b = "12", "21"
if int(a) < int(b):
    c = a + b
else:
    c = b + a
print(c)`,
    options: {
      A: "1222",
      B: "1220",
      C: "1221",
      D: "2442"
    },
    correct: "C",
    explanation: "Kod addım-addım icra edildikdə nəticə 1221 olur. Dövr, şərt və dəyişən yenilənmələri ardıcıl izlənildikdə düzgün cavab C variantıdır."
  },
  {
    id: 336,
    difficulty: "hard",
    time: 90,
    question: "Kod icra edildikdən sonra hansı nəticə alınacaq?",
    code: `a = [2, 4, 6]
if a.count(4) and sum(a) > 10:
    print(a[0] * a[2])
else:
    print(len(a))`,
    options: {
      A: "13",
      B: "11",
      C: "24",
      D: "12"
    },
    correct: "D",
    explanation: "Kod addım-addım icra edildikdə nəticə 12 olur. Dövr, şərt və dəyişən yenilənmələri ardıcıl izlənildikdə düzgün cavab D variantıdır."
  },
  {
    id: 337,
    difficulty: "hard",
    time: 90,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `x = 13
if x > 10:
    if x % 2 == 1:
        x = x * 2
    else:
        x = x // 2
else:
    x = x + 5
print(x)`,
    options: {
      A: "26",
      B: "27",
      C: "25",
      D: "52"
    },
    correct: "A",
    explanation: "Kod addım-addım icra edildikdə nəticə 26 olur. Dövr, şərt və dəyişən yenilənmələri ardıcıl izlənildikdə düzgün cavab A variantıdır."
  },
  {
    id: 338,
    difficulty: "hard",
    time: 90,
    question: "Kodun çıxış qiymətini müəyyən edin.",
    code: `s = "ALMA"
if s.lower().count("a") > 1:
    print(s.lower())
else:
    print(s.capitalize())`,
    options: {
      A: "ALMA",
      B: "alma",
      C: "almaalma",
      D: "4"
    },
    correct: "B",
    explanation: "Kod addım-addım icra edildikdə nəticə alma olur. Dövr, şərt və dəyişən yenilənmələri ardıcıl izlənildikdə düzgün cavab B variantıdır."
  },
  {
    id: 339,
    difficulty: "hard",
    time: 90,
    question: "Verilmiş kodun nəticəsini tapın.",
    code: `a = 6
b = 9
if a * 3 == b * 2:
    print(a + b)
elif a < b:
    print(b - a)
else:
    print(a * b)`,
    options: {
      A: "16",
      B: "14",
      C: "15",
      D: "30"
    },
    correct: "C",
    explanation: "Kod addım-addım icra edildikdə nəticə 15 olur. Dövr, şərt və dəyişən yenilənmələri ardıcıl izlənildikdə düzgün cavab C variantıdır."
  },
  {
    id: 340,
    difficulty: "hard",
    time: 90,
    question: "Kod icra edildikdən sonra hansı nəticə alınacaq?",
    code: `a = [5, 10, 15]
if a[1] % a[0] == 0 and a[2] // a[0] == 3:
    a.append(sum(a))
print(a[3])`,
    options: {
      A: "31",
      B: "29",
      C: "60",
      D: "30"
    },
    correct: "D",
    explanation: "Kod addım-addım icra edildikdə nəticə 30 olur. Dövr, şərt və dəyişən yenilənmələri ardıcıl izlənildikdə düzgün cavab D variantıdır."
  },
  {
    id: 341,
    difficulty: "hard",
    time: 90,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `s = 0
for i in range(2, 9):
    if i % 3 == 0:
        s += i * 2
    else:
        s += i
print(s)`,
    options: {
      A: "44",
      B: "45",
      C: "43",
      D: "88"
    },
    correct: "A",
    explanation: "Kod addım-addım icra edildikdə nəticə 44 olur. Dövr, şərt və dəyişən yenilənmələri ardıcıl izlənildikdə düzgün cavab A variantıdır."
  },
  {
    id: 342,
    difficulty: "hard",
    time: 90,
    question: "Kodun çıxış qiymətini müəyyən edin.",
    code: `a = [3, 5, 8, 10, 11]
s = 0
for i in a:
    if i % 2 == 0:
        s += i // 2
    else:
        s += 1
print(s)`,
    options: {
      A: "13",
      B: "12",
      C: "11",
      D: "24"
    },
    correct: "B",
    explanation: "Kod addım-addım icra edildikdə nəticə 12 olur. Dövr, şərt və dəyişən yenilənmələri ardıcıl izlənildikdə düzgün cavab B variantıdır."
  },
  {
    id: 343,
    difficulty: "hard",
    time: 90,
    question: "Verilmiş kodun nəticəsini tapın.",
    code: `s = "banana"
k = 0
for i in s:
    if i == "a":
        k += 2
    else:
        k += 1
print(k)`,
    options: {
      A: "10",
      B: "8",
      C: "9",
      D: "18"
    },
    correct: "C",
    explanation: "Kod addım-addım icra edildikdə nəticə 9 olur. Dövr, şərt və dəyişən yenilənmələri ardıcıl izlənildikdə düzgün cavab C variantıdır."
  },
  {
    id: 344,
    difficulty: "hard",
    time: 90,
    question: "Kod icra edildikdən sonra hansı nəticə alınacaq?",
    code: `a = []
for i in range(1, 8):
    if i % 2 == 0:
        a.append(i * 2)
    else:
        a.append(i)
print(sum(a))`,
    options: {
      A: "41",
      B: "39",
      C: "80",
      D: "40"
    },
    correct: "D",
    explanation: "Kod addım-addım icra edildikdə nəticə 40 olur. Dövr, şərt və dəyişən yenilənmələri ardıcıl izlənildikdə düzgün cavab D variantıdır."
  },
  {
    id: 345,
    difficulty: "hard",
    time: 90,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `i = 3
s = 1
while i < 8:
    s *= i
    i += 2
print(s)`,
    options: {
      A: "105",
      B: "106",
      C: "104",
      D: "210"
    },
    correct: "A",
    explanation: "Kod addım-addım icra edildikdə nəticə 105 olur. Dövr, şərt və dəyişən yenilənmələri ardıcıl izlənildikdə düzgün cavab A variantıdır."
  },
  {
    id: 346,
    difficulty: "hard",
    time: 90,
    question: "Kodun çıxış qiymətini müəyyən edin.",
    code: `n = 246
s = 0
while n > 0:
    s += n % 10
    n = n // 10
print(s)`,
    options: {
      A: "13",
      B: "12",
      C: "11",
      D: "24"
    },
    correct: "B",
    explanation: "Kod addım-addım icra edildikdə nəticə 12 olur. Dövr, şərt və dəyişən yenilənmələri ardıcıl izlənildikdə düzgün cavab B variantıdır."
  },
  {
    id: 347,
    difficulty: "hard",
    time: 90,
    question: "Verilmiş kodun nəticəsini tapın.",
    code: `a = [1, 2, 3]
s = 0
for i in range(len(a)):
    s += a[i] * i
print(s)`,
    options: {
      A: "9",
      B: "7",
      C: "8",
      D: "16"
    },
    correct: "C",
    explanation: "Kod addım-addım icra edildikdə nəticə 8 olur. Dövr, şərt və dəyişən yenilənmələri ardıcıl izlənildikdə düzgün cavab C variantıdır."
  },
  {
    id: 348,
    difficulty: "hard",
    time: 90,
    question: "Kod icra edildikdən sonra hansı nəticə alınacaq?",
    code: `s = "kodlama"
a = ""
for i in range(len(s)):
    if i % 2 == 0:
        a += s[i]
print(a)`,
    options: {
      A: "KDAA",
      B: "kdaakdaa",
      C: "4",
      D: "kdaa"
    },
    correct: "D",
    explanation: "Kod addım-addım icra edildikdə nəticə kdaa olur. Dövr, şərt və dəyişən yenilənmələri ardıcıl izlənildikdə düzgün cavab D variantıdır."
  },
  {
    id: 349,
    difficulty: "hard",
    time: 90,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `s = 0
for i in range(1, 5):
    for j in range(1, 4):
        if i == j:
            s += i + j
print(s)`,
    options: {
      A: "12",
      B: "13",
      C: "11",
      D: "24"
    },
    correct: "A",
    explanation: "Kod addım-addım icra edildikdə nəticə 12 olur. Dövr, şərt və dəyişən yenilənmələri ardıcıl izlənildikdə düzgün cavab A variantıdır."
  },
  {
    id: 350,
    difficulty: "hard",
    time: 90,
    question: "Kodun çıxış qiymətini müəyyən edin.",
    code: `a = [2, 4, 6]
for i in range(len(a)):
    a[i] = a[i] + i
print(a)`,
    options: {
      A: "[8, 5, 2]",
      B: "[2, 5, 8]",
      C: "[2, 5]",
      D: "[2, 5, 8, 2, 5, 8]"
    },
    correct: "B",
    explanation: "Kod addım-addım icra edildikdə nəticə [2, 5, 8] olur. Dövr, şərt və dəyişən yenilənmələri ardıcıl izlənildikdə düzgün cavab B variantıdır."
  },
  {
    id: 351,
    difficulty: "hard",
    time: 90,
    question: "Verilmiş kodun nəticəsini tapın.",
    code: `s = 0
for i in range(1, 20):
    if i % 5 == 0:
        break
    s += i
print(s)`,
    options: {
      A: "11",
      B: "9",
      C: "10",
      D: "20"
    },
    correct: "C",
    explanation: "Kod addım-addım icra edildikdə nəticə 10 olur. Dövr, şərt və dəyişən yenilənmələri ardıcıl izlənildikdə düzgün cavab C variantıdır."
  },
  {
    id: 352,
    difficulty: "hard",
    time: 90,
    question: "Kod icra edildikdən sonra hansı nəticə alınacaq?",
    code: `s = 0
for i in range(1, 8):
    if i % 3 == 0:
        continue
    s += i
print(s)`,
    options: {
      A: "20",
      B: "18",
      C: "38",
      D: "19"
    },
    correct: "D",
    explanation: "Kod addım-addım icra edildikdə nəticə 19 olur. Dövr, şərt və dəyişən yenilənmələri ardıcıl izlənildikdə düzgün cavab D variantıdır."
  },
  {
    id: 353,
    difficulty: "hard",
    time: 90,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `a = []
for i in range(10, 15):
    if i % 2 == 0:
        a.append(i // 2)
    else:
        a.append(i % 5)
print(a)`,
    options: {
      A: "[5, 1, 6, 3, 7]",
      B: "[7, 3, 6, 1, 5]",
      C: "[1, 3, 5, 6, 7]",
      D: "[5, 1, 6, 3]"
    },
    correct: "A",
    explanation: "Kod addım-addım icra edildikdə nəticə [5, 1, 6, 3, 7] olur. Dövr, şərt və dəyişən yenilənmələri ardıcıl izlənildikdə düzgün cavab A variantıdır."
  },
  {
    id: 354,
    difficulty: "hard",
    time: 90,
    question: "Kodun çıxış qiymətini müəyyən edin.",
    code: `s = "abcde"
k = ""
for i in range(len(s)):
    if i > 2:
        break
    k += s[i]
print(k)`,
    options: {
      A: "ABC",
      B: "abc",
      C: "abcabc",
      D: "3"
    },
    correct: "B",
    explanation: "Kod addım-addım icra edildikdə nəticə abc olur. Dövr, şərt və dəyişən yenilənmələri ardıcıl izlənildikdə düzgün cavab B variantıdır."
  },
  {
    id: 355,
    difficulty: "hard",
    time: 90,
    question: "Verilmiş kodun nəticəsini tapın.",
    code: `a = [5, 1, 5, 2]
s = 0
for i in a:
    s += a.count(i)
print(s)`,
    options: {
      A: "7",
      B: "5",
      C: "6",
      D: "12"
    },
    correct: "C",
    explanation: "Kod addım-addım icra edildikdə nəticə 6 olur. Dövr, şərt və dəyişən yenilənmələri ardıcıl izlənildikdə düzgün cavab C variantıdır."
  },
  {
    id: 356,
    difficulty: "hard",
    time: 90,
    question: "Kod icra edildikdən sonra hansı nəticə alınacaq?",
    code: `i = 1
s = ""
while i <= 4:
    s += str(i * i)
    i += 1
print(s)`,
    options: {
      A: "14917",
      B: "14915",
      C: "29832",
      D: "14916"
    },
    correct: "D",
    explanation: "Kod addım-addım icra edildikdə nəticə 14916 olur. Dövr, şərt və dəyişən yenilənmələri ardıcıl izlənildikdə düzgün cavab D variantıdır."
  },
  {
    id: 357,
    difficulty: "hard",
    time: 90,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `a = [3, 6, 9, 12]
s = 0
for i in range(len(a)):
    if a[i] % 6 == 0:
        s += i + a[i]
print(s)`,
    options: {
      A: "22",
      B: "23",
      C: "21",
      D: "44"
    },
    correct: "A",
    explanation: "Kod addım-addım icra edildikdə nəticə 22 olur. Dövr, şərt və dəyişən yenilənmələri ardıcıl izlənildikdə düzgün cavab A variantıdır."
  },
  {
    id: 358,
    difficulty: "hard",
    time: 90,
    question: "Kodun çıxış qiymətini müəyyən edin.",
    code: `s = 0
for i in range(2, 6):
    for j in range(1, i):
        s += 1
print(s)`,
    options: {
      A: "11",
      B: "10",
      C: "9",
      D: "20"
    },
    correct: "B",
    explanation: "Kod addım-addım icra edildikdə nəticə 10 olur. Dövr, şərt və dəyişən yenilənmələri ardıcıl izlənildikdə düzgün cavab B variantıdır."
  },
  {
    id: 359,
    difficulty: "hard",
    time: 90,
    question: "Verilmiş kodun nəticəsini tapın.",
    code: `a = [1, 2, 3]
b = []
for i in a:
    b.append(i)
    b.append(i * 2)
print(sum(b))`,
    options: {
      A: "19",
      B: "17",
      C: "18",
      D: "36"
    },
    correct: "C",
    explanation: "Kod addım-addım icra edildikdə nəticə 18 olur. Dövr, şərt və dəyişən yenilənmələri ardıcıl izlənildikdə düzgün cavab C variantıdır."
  },
  {
    id: 360,
    difficulty: "hard",
    time: 90,
    question: "Kod icra edildikdən sonra hansı nəticə alınacaq?",
    code: `s = "informatika"
k = 0
for i in range(len(s)):
    if s[i] == "a":
        k += i
print(k)`,
    options: {
      A: "17",
      B: "15",
      C: "32",
      D: "16"
    },
    correct: "D",
    explanation: "Kod addım-addım icra edildikdə nəticə 16 olur. Dövr, şərt və dəyişən yenilənmələri ardıcıl izlənildikdə düzgün cavab D variantıdır."
  },
  {
    id: 361,
    difficulty: "hard",
    time: 90,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `a = [4, 7, 10, 13]
s = 0
for i in a:
    if i % 3 == 1:
        s += i
print(s)`,
    options: {
      A: "34",
      B: "35",
      C: "33",
      D: "68"
    },
    correct: "A",
    explanation: "Kod addım-addım icra edildikdə nəticə 34 olur. Dövr, şərt və dəyişən yenilənmələri ardıcıl izlənildikdə düzgün cavab A variantıdır."
  },
  {
    id: 362,
    difficulty: "hard",
    time: 90,
    question: "Kodun çıxış qiymətini müəyyən edin.",
    code: `i = 16
k = 0
while i >= 2:
    i = i // 2
    k += i
print(k)`,
    options: {
      A: "16",
      B: "15",
      C: "14",
      D: "30"
    },
    correct: "B",
    explanation: "Kod addım-addım icra edildikdə nəticə 15 olur. Dövr, şərt və dəyişən yenilənmələri ardıcıl izlənildikdə düzgün cavab B variantıdır."
  },
  {
    id: 363,
    difficulty: "hard",
    time: 90,
    question: "Verilmiş kodun nəticəsini tapın.",
    code: `a = "12121"
s = 0
for i in a:
    if i == "1":
        s += 1
    else:
        s += 2
print(s)`,
    options: {
      A: "8",
      B: "6",
      C: "7",
      D: "14"
    },
    correct: "C",
    explanation: "Kod addım-addım icra edildikdə nəticə 7 olur. Dövr, şərt və dəyişən yenilənmələri ardıcıl izlənildikdə düzgün cavab C variantıdır."
  },
  {
    id: 364,
    difficulty: "hard",
    time: 90,
    question: "Kod icra edildikdən sonra hansı nəticə alınacaq?",
    code: `a = [2, 3, 4]
s = 1
for i in a:
    s *= i
    if s > 20:
        break
print(s)`,
    options: {
      A: "25",
      B: "23",
      C: "48",
      D: "24"
    },
    correct: "D",
    explanation: "Kod addım-addım icra edildikdə nəticə 24 olur. Dövr, şərt və dəyişən yenilənmələri ardıcıl izlənildikdə düzgün cavab D variantıdır."
  },
  {
    id: 365,
    difficulty: "hard",
    time: 90,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `s = 0
for i in range(1, 6):
    if not i % 2 == 0:
        s += i * 2
    else:
        s += i
print(s)`,
    options: {
      A: "24",
      B: "25",
      C: "23",
      D: "48"
    },
    correct: "A",
    explanation: "Kod addım-addım icra edildikdə nəticə 24 olur. Dövr, şərt və dəyişən yenilənmələri ardıcıl izlənildikdə düzgün cavab A variantıdır."
  },
  {
    id: 366,
    difficulty: "hard",
    time: 90,
    question: "Kodun çıxış qiymətini müəyyən edin.",
    code: `def f(x):
    return x * 2 + 1

print(f(3) + f(5))`,
    options: {
      A: "19",
      B: "18",
      C: "17",
      D: "36"
    },
    correct: "B",
    explanation: "Kod addım-addım icra edildikdə nəticə 18 olur. Dövr, şərt və dəyişən yenilənmələri ardıcıl izlənildikdə düzgün cavab B variantıdır."
  },
  {
    id: 367,
    difficulty: "hard",
    time: 90,
    question: "Verilmiş kodun nəticəsini tapın.",
    code: `def h(a, b):
    if a > b:
        return a - b
    return a + b

print(h(7, 4) + h(2, 5))`,
    options: {
      A: "11",
      B: "9",
      C: "10",
      D: "20"
    },
    correct: "C",
    explanation: "Kod addım-addım icra edildikdə nəticə 10 olur. Dövr, şərt və dəyişən yenilənmələri ardıcıl izlənildikdə düzgün cavab C variantıdır."
  },
  {
    id: 368,
    difficulty: "hard",
    time: 90,
    question: "Kod icra edildikdən sonra hansı nəticə alınacaq?",
    code: `def sira(a):
    a.sort()
    return a[0] + a[2]

print(sira([5, 1, 4]))`,
    options: {
      A: "7",
      B: "5",
      C: "12",
      D: "6"
    },
    correct: "D",
    explanation: "Kod addım-addım icra edildikdə nəticə 6 olur. Dövr, şərt və dəyişən yenilənmələri ardıcıl izlənildikdə düzgün cavab D variantıdır."
  },
  {
    id: 369,
    difficulty: "hard",
    time: 90,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `def say(s):
    return s.count("a") + len(s)

print(say("alma") + say("ata"))`,
    options: {
      A: "11",
      B: "12",
      C: "10",
      D: "22"
    },
    correct: "A",
    explanation: "Kod addım-addım icra edildikdə nəticə 11 olur. Dövr, şərt və dəyişən yenilənmələri ardıcıl izlənildikdə düzgün cavab A variantıdır."
  },
  {
    id: 370,
    difficulty: "hard",
    time: 90,
    question: "Kodun çıxış qiymətini müəyyən edin.",
    code: `def hesab(n):
    s = 0
    while n > 0:
        s += n % 10
        n = n // 10
    return s

print(hesab(345) * 2)`,
    options: {
      A: "25",
      B: "24",
      C: "23",
      D: "48"
    },
    correct: "B",
    explanation: "Kod addım-addım icra edildikdə nəticə 24 olur. Dövr, şərt və dəyişən yenilənmələri ardıcıl izlənildikdə düzgün cavab B variantıdır."
  },
  {
    id: 371,
    difficulty: "hard",
    time: 90,
    question: "Verilmiş kodun nəticəsini tapın.",
    code: `def f(a):
    for i in range(len(a)):
        a[i] = a[i] + i
    return sum(a)

print(f([2, 2, 2]))`,
    options: {
      A: "10",
      B: "8",
      C: "9",
      D: "18"
    },
    correct: "C",
    explanation: "Kod addım-addım icra edildikdə nəticə 9 olur. Dövr, şərt və dəyişən yenilənmələri ardıcıl izlənildikdə düzgün cavab C variantıdır."
  },
  {
    id: 372,
    difficulty: "hard",
    time: 90,
    question: "Kod icra edildikdən sonra hansı nəticə alınacaq?",
    code: `def bir(x):
    return x + 2

def iki(y):
    return bir(y) * 3

print(iki(4))`,
    options: {
      A: "19",
      B: "17",
      C: "36",
      D: "18"
    },
    correct: "D",
    explanation: "Kod addım-addım icra edildikdə nəticə 18 olur. Dövr, şərt və dəyişən yenilənmələri ardıcıl izlənildikdə düzgün cavab D variantıdır."
  },
  {
    id: 373,
    difficulty: "hard",
    time: 90,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `def sec(a, b):
    if a % 2 == 0:
        return a // 2
    else:
        return b * 2

print(sec(8, 3) + sec(5, 4))`,
    options: {
      A: "12",
      B: "13",
      C: "11",
      D: "24"
    },
    correct: "A",
    explanation: "Kod addım-addım icra edildikdə nəticə 12 olur. Dövr, şərt və dəyişən yenilənmələri ardıcıl izlənildikdə düzgün cavab A variantıdır."
  },
  {
    id: 374,
    difficulty: "hard",
    time: 90,
    question: "Kodun çıxış qiymətini müəyyən edin.",
    code: `def soz(s):
    return s[0:2] + str(len(s))

print(soz("python"))`,
    options: {
      A: "PY6",
      B: "py6",
      C: "py6py6",
      D: "3"
    },
    correct: "B",
    explanation: "Kod addım-addım icra edildikdə nəticə py6 olur. Dövr, şərt və dəyişən yenilənmələri ardıcıl izlənildikdə düzgün cavab B variantıdır."
  },
  {
    id: 375,
    difficulty: "hard",
    time: 90,
    question: "Verilmiş kodun nəticəsini tapın.",
    code: `def cem(a):
    s = 0
    for i in a:
        if i > 0:
            s += i
    return s

print(cem([3, -2, 5, 0]))`,
    options: {
      A: "9",
      B: "7",
      C: "8",
      D: "16"
    },
    correct: "C",
    explanation: "Kod addım-addım icra edildikdə nəticə 8 olur. Dövr, şərt və dəyişən yenilənmələri ardıcıl izlənildikdə düzgün cavab C variantıdır."
  },
  {
    id: 376,
    difficulty: "hard",
    time: 90,
    question: "Kod icra edildikdən sonra hansı nəticə alınacaq?",
    code: `def f(x):
    if x <= 1:
        return 1
    return x + f(x - 2)

print(f(7))`,
    options: {
      A: "17",
      B: "15",
      C: "32",
      D: "16"
    },
    correct: "D",
    explanation: "Kod addım-addım icra edildikdə nəticə 16 olur. Dövr, şərt və dəyişən yenilənmələri ardıcıl izlənildikdə düzgün cavab D variantıdır."
  },
  {
    id: 377,
    difficulty: "hard",
    time: 90,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `def g(x):
    if x < 3:
        return x
    return x * g(x - 2)

print(g(5))`,
    options: {
      A: "15",
      B: "16",
      C: "14",
      D: "30"
    },
    correct: "A",
    explanation: "Kod addım-addım icra edildikdə nəticə 15 olur. Dövr, şərt və dəyişən yenilənmələri ardıcıl izlənildikdə düzgün cavab A variantıdır."
  },
  {
    id: 378,
    difficulty: "hard",
    time: 90,
    question: "Kodun çıxış qiymətini müəyyən edin.",
    code: `def duzelt(s):
    s = s.strip()
    return s.capitalize()

print(duzelt("  test  "))`,
    options: {
      A: "TEST",
      B: "Test",
      C: "test",
      D: "TestTest"
    },
    correct: "B",
    explanation: "Kod addım-addım icra edildikdə nəticə Test olur. Dövr, şərt və dəyişən yenilənmələri ardıcıl izlənildikdə düzgün cavab B variantıdır."
  },
  {
    id: 379,
    difficulty: "hard",
    time: 90,
    question: "Verilmiş kodun nəticəsini tapın.",
    code: `def hesab(a, b):
    return str(a) + str(b)

print(int(hesab(12, 3)) + 4)`,
    options: {
      A: "128",
      B: "126",
      C: "127",
      D: "254"
    },
    correct: "C",
    explanation: "Kod addım-addım icra edildikdə nəticə 127 olur. Dövr, şərt və dəyişən yenilənmələri ardıcıl izlənildikdə düzgün cavab C variantıdır."
  },
  {
    id: 380,
    difficulty: "hard",
    time: 90,
    question: "Kod icra edildikdən sonra hansı nəticə alınacaq?",
    code: `def f(a):
    a.append(sum(a))
    return len(a) + a[3]

print(f([1, 2, 3]))`,
    options: {
      A: "11",
      B: "9",
      C: "20",
      D: "10"
    },
    correct: "D",
    explanation: "Kod addım-addım icra edildikdə nəticə 10 olur. Dövr, şərt və dəyişən yenilənmələri ardıcıl izlənildikdə düzgün cavab D variantıdır."
  },
  {
    id: 381,
    difficulty: "hard",
    time: 90,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `def k(a, b, c):
    if a > b and a > c:
        return a
    elif b > c:
        return b
    else:
        return c

print(k(4, 9, 7) + k(8, 3, 5))`,
    options: {
      A: "17",
      B: "18",
      C: "16",
      D: "34"
    },
    correct: "A",
    explanation: "Kod addım-addım icra edildikdə nəticə 17 olur. Dövr, şərt və dəyişən yenilənmələri ardıcıl izlənildikdə düzgün cavab A variantıdır."
  },
  {
    id: 382,
    difficulty: "hard",
    time: 90,
    question: "Kodun çıxış qiymətini müəyyən edin.",
    code: `def f(s):
    a = list(s)
    a.reverse()
    return "".join(a)

print(f("sual"))`,
    options: {
      A: "LAUS",
      B: "laus",
      C: "lauslaus",
      D: "4"
    },
    correct: "B",
    explanation: "Kod addım-addım icra edildikdə nəticə laus olur. Dövr, şərt və dəyişən yenilənmələri ardıcıl izlənildikdə düzgün cavab B variantıdır."
  },
  {
    id: 383,
    difficulty: "hard",
    time: 90,
    question: "Verilmiş kodun nəticəsini tapın.",
    code: `def h(n):
    return n // 10 + n % 10

print(h(47) + h(58))`,
    options: {
      A: "25",
      B: "23",
      C: "24",
      D: "48"
    },
    correct: "C",
    explanation: "Kod addım-addım icra edildikdə nəticə 24 olur. Dövr, şərt və dəyişən yenilənmələri ardıcıl izlənildikdə düzgün cavab C variantıdır."
  },
  {
    id: 384,
    difficulty: "hard",
    time: 90,
    question: "Kod icra edildikdən sonra hansı nəticə alınacaq?",
    code: `def f(x):
    s = 0
    for i in range(1, x):
        s += i
    return s

print(f(6))`,
    options: {
      A: "16",
      B: "14",
      C: "30",
      D: "15"
    },
    correct: "D",
    explanation: "Kod addım-addım icra edildikdə nəticə 15 olur. Dövr, şərt və dəyişən yenilənmələri ardıcıl izlənildikdə düzgün cavab D variantıdır."
  },
  {
    id: 385,
    difficulty: "hard",
    time: 90,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `def f(a):
    if len(a) > 3:
        return a[1:4]
    return a

print(f("alqoritm"))`,
    options: {
      A: "lqo",
      B: "LQO",
      C: "lqolqo",
      D: "3"
    },
    correct: "A",
    explanation: "Kod addım-addım icra edildikdə nəticə lqo olur. Dövr, şərt və dəyişən yenilənmələri ardıcıl izlənildikdə düzgün cavab A variantıdır."
  },
  {
    id: 386,
    difficulty: "hard",
    time: 90,
    question: "Kodun çıxış qiymətini müəyyən edin.",
    code: `a = [2, 5, 8]
s = ""
for i in a:
    if i % 2 == 0:
        s += str(i // 2)
    else:
        s += str(i)
print(s)`,
    options: {
      A: "155",
      B: "154",
      C: "153",
      D: "308"
    },
    correct: "B",
    explanation: "Kod addım-addım icra edildikdə nəticə 154 olur. Dövr, şərt və dəyişən yenilənmələri ardıcıl izlənildikdə düzgün cavab B variantıdır."
  },
  {
    id: 387,
    difficulty: "hard",
    time: 90,
    question: "Verilmiş kodun nəticəsini tapın.",
    code: `s = "abacaba"
a = []
for i in range(len(s)):
    if s[i] == "a":
        a.append(i)
print(sum(a))`,
    options: {
      A: "13",
      B: "11",
      C: "12",
      D: "24"
    },
    correct: "C",
    explanation: "Kod addım-addım icra edildikdə nəticə 12 olur. Dövr, şərt və dəyişən yenilənmələri ardıcıl izlənildikdə düzgün cavab C variantıdır."
  },
  {
    id: 388,
    difficulty: "hard",
    time: 90,
    question: "Kod icra edildikdən sonra hansı nəticə alınacaq?",
    code: `def f(x):
    return x * x

a = [1, 2, 3]
s = 0
for i in a:
    s += f(i)
print(s)`,
    options: {
      A: "15",
      B: "13",
      C: "28",
      D: "14"
    },
    correct: "D",
    explanation: "Kod addım-addım icra edildikdə nəticə 14 olur. Dövr, şərt və dəyişən yenilənmələri ardıcıl izlənildikdə düzgün cavab D variantıdır."
  },
  {
    id: 389,
    difficulty: "hard",
    time: 90,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `a = "15,20,5"
b = a.split(",")
s = 0
for i in b:
    s += int(i)
print(s // len(b))`,
    options: {
      A: "13",
      B: "14",
      C: "12",
      D: "26"
    },
    correct: "A",
    explanation: "Kod addım-addım icra edildikdə nəticə 13 olur. Dövr, şərt və dəyişən yenilənmələri ardıcıl izlənildikdə düzgün cavab A variantıdır."
  },
  {
    id: 390,
    difficulty: "hard",
    time: 90,
    question: "Kodun çıxış qiymətini müəyyən edin.",
    code: `a = [4, 1, 6, 1, 4]
s = []
for i in a:
    if a.count(i) == 1:
        s.append(i)
print(s)`,
    options: {
      A: "[]",
      B: "[6]",
      C: "[6, 6]",
      D: "1"
    },
    correct: "B",
    explanation: "Kod addım-addım icra edildikdə nəticə [6] olur. Dövr, şərt və dəyişən yenilənmələri ardıcıl izlənildikdə düzgün cavab B variantıdır."
  },
  {
    id: 391,
    difficulty: "hard",
    time: 90,
    question: "Verilmiş kodun nəticəsini tapın.",
    code: `def f(a):
    a = list(a)
    a[0] = "K"
    return "".join(a)

print(f("kitab"))`,
    options: {
      A: "KITAB",
      B: "kitab",
      C: "Kitab",
      D: "KitabKitab"
    },
    correct: "C",
    explanation: "Kod addım-addım icra edildikdə nəticə Kitab olur. Dövr, şərt və dəyişən yenilənmələri ardıcıl izlənildikdə düzgün cavab C variantıdır."
  },
  {
    id: 392,
    difficulty: "hard",
    time: 90,
    question: "Kod icra edildikdən sonra hansı nəticə alınacaq?",
    code: `s = 0
for i in range(1, 5):
    for j in range(1, 5):
        if i + j == 5:
            s += i * j
print(s)`,
    options: {
      A: "21",
      B: "19",
      C: "40",
      D: "20"
    },
    correct: "D",
    explanation: "Kod addım-addım icra edildikdə nəticə 20 olur. Dövr, şərt və dəyişən yenilənmələri ardıcıl izlənildikdə düzgün cavab D variantıdır."
  },
  {
    id: 393,
    difficulty: "hard",
    time: 90,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `a = [10, 15, 20, 25]
s = 0
for i in range(len(a)):
    if i % 2 == 0:
        s += a[i] // 5
    else:
        s += a[i] % 10
print(s)`,
    options: {
      A: "16",
      B: "17",
      C: "15",
      D: "32"
    },
    correct: "A",
    explanation: "Kod addım-addım icra edildikdə nəticə 16 olur. Dövr, şərt və dəyişən yenilənmələri ardıcıl izlənildikdə düzgün cavab A variantıdır."
  },
  {
    id: 394,
    difficulty: "hard",
    time: 90,
    question: "Kodun çıxış qiymətini müəyyən edin.",
    code: `def f(n):
    a = []
    for i in range(1, n):
        if n % i == 0:
            a.append(i)
    return sum(a)

print(f(12))`,
    options: {
      A: "17",
      B: "16",
      C: "15",
      D: "32"
    },
    correct: "B",
    explanation: "Kod addım-addım icra edildikdə nəticə 16 olur. Dövr, şərt və dəyişən yenilənmələri ardıcıl izlənildikdə düzgün cavab B variantıdır."
  },
  {
    id: 395,
    difficulty: "hard",
    time: 90,
    question: "Verilmiş kodun nəticəsini tapın.",
    code: `s = "proqram"
a = s.find("r")
b = s.find("a")
print(s[a:b])`,
    options: {
      A: "ROQR",
      B: "roqrroqr",
      C: "roqr",
      D: "4"
    },
    correct: "C",
    explanation: "Kod addım-addım icra edildikdə nəticə roqr olur. Dövr, şərt və dəyişən yenilənmələri ardıcıl izlənildikdə düzgün cavab C variantıdır."
  },
  {
    id: 396,
    difficulty: "hard",
    time: 90,
    question: "Kod icra edildikdən sonra hansı nəticə alınacaq?",
    code: `a = [1, 2, 3]
b = a
a.append(4)
b[0] = 5
print(sum(a), sum(b))`,
    options: {
      A: "28",
      B: "15 15",
      C: "1414",
      D: "14 14"
    },
    correct: "D",
    explanation: "Kod addım-addım icra edildikdə nəticə 14 14 olur. Dövr, şərt və dəyişən yenilənmələri ardıcıl izlənildikdə düzgün cavab D variantıdır."
  },
  {
    id: 397,
    difficulty: "hard",
    time: 90,
    question: "Kod icra edilərsə nə çap olunacaq?",
    code: `x = 3
s = 0
while x < 20:
    s += x
    x = x * 2 + 1
print(s)`,
    options: {
      A: "25",
      B: "26",
      C: "24",
      D: "50"
    },
    correct: "A",
    explanation: "Kod addım-addım icra edildikdə nəticə 25 olur. Dövr, şərt və dəyişən yenilənmələri ardıcıl izlənildikdə düzgün cavab A variantıdır."
  },
  {
    id: 398,
    difficulty: "hard",
    time: 90,
    question: "Kodun çıxış qiymətini müəyyən edin.",
    code: `def f(x, y):
    while x < y:
        x += 2
        y -= 1
    return x + y

print(f(2, 9))`,
    options: {
      A: "15",
      B: "14",
      C: "13",
      D: "28"
    },
    correct: "B",
    explanation: "Kod addım-addım icra edildikdə nəticə 14 olur. Dövr, şərt və dəyişən yenilənmələri ardıcıl izlənildikdə düzgün cavab B variantıdır."
  },
  {
    id: 399,
    difficulty: "hard",
    time: 90,
    question: "Verilmiş kodun nəticəsini tapın.",
    code: `a = "12345"
s = 0
for i in range(len(a)):
    if i % 2 == 0:
        s += int(a[i])
print(s)`,
    options: {
      A: "10",
      B: "8",
      C: "9",
      D: "18"
    },
    correct: "C",
    explanation: "Kod addım-addım icra edildikdə nəticə 9 olur. Dövr, şərt və dəyişən yenilənmələri ardıcıl izlənildikdə düzgün cavab C variantıdır."
  },
  {
    id: 400,
    difficulty: "hard",
    time: 90,
    question: "Kod icra edildikdən sonra hansı nəticə alınacaq?",
    code: `a = [3, 6, 9, 12]
for i in range(len(a)):
    if a[i] % 6 == 0:
        a[i] = a[i] // 3
print(sum(a))`,
    options: {
      A: "19",
      B: "17",
      C: "36",
      D: "18"
    },
    correct: "D",
    explanation: "Kod addım-addım icra edildikdə nəticə 18 olur. Dövr, şərt və dəyişən yenilənmələri ardıcıl izlənildikdə düzgün cavab D variantıdır."
  }
];

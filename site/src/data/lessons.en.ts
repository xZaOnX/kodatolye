import type { Lesson } from '../types'

export const lessonsEn: Lesson[] = [
  {
    id: 'print',
    order: 1,
    title: 'print: writing to the screen',
    subtitle: 'Understand what your first line of code does.',
    blocks: [
      {
        type: 'text',
        body: 'Python is a language in which you tell the computer step by step what to do. Every line you write is a command. The most basic command is print: it displays something on the screen.',
      },
      {
        type: 'code',
        caption: 'First program',
        code: `print("Hello")
print(42)`,
      },
      {
        type: 'text',
        body: 'The text inside quotes is called a string (text). 42 without quotes is a number. print is a function call: the name, then parentheses, and inside them you put what you want to display.',
      },
      {
        type: 'callout',
        title: 'Remember',
        body: 'Capitalization matters. Print is wrong, print is right. If you forget the parentheses, you get an error.',
      },
      {
        type: 'code',
        caption: 'Multiple values',
        code: `print("Age:", 20)
# Output: Age: 20`,
      },
      {
        type: 'text',
        body: 'Lines starting with # are comments; Python does not run them. They are used to leave notes for yourself.',
      },
    ],
    quiz: [
      {
        type: 'mcq',
        id: 'print-q1',
        question: 'Which line correctly prints Hello to the screen?',
        options: [
          'print Hello',
          'print("Hello")',
          'Print("Hello")',
          'echo("Hello")',
        ],
        correctIndex: 1,
        explanation: 'The function name is print in lowercase, the text goes inside quotes, and the call uses parentheses.',
      },
      {
        type: 'fill',
        id: 'print-q2',
        question: 'Fill in the blank: print 7 to the screen.',
        placeholder: 'print(___)',
        answer: 'print(7)',
        accept: ['print(7)', 'print( 7 )'],
        explanation: 'Numbers are written without quotes: print(7).',
      },
    ],
  },
  {
    id: 'variables',
    order: 2,
    title: 'Variables',
    subtitle: 'Give a value a name and reuse it later.',
    blocks: [
      {
        type: 'text',
        body: 'A variable means putting a value in a box and labeling it. With the label (name) you can reach the value inside the box again later.',
      },
      {
        type: 'code',
        caption: 'Assignment',
        code: `name = "Ada"
age = 20
print(name)
print(age)`,
      },
      {
        type: 'text',
        body: 'Here = does not mean "equals", it means "assign": put the value on the right into the name on the left. A variable name starts with a letter or _; it cannot contain spaces; choose meaningful names (like score instead of x).',
      },
      {
        type: 'code',
        caption: 'Updating a value',
        code: `score = 10
score = score + 5
print(score)  # 15`,
      },
      {
        type: 'callout',
        title: 'Naming rules',
        body: 'Correct: total, student_name, n2. Wrong: 2n, student name, class (class is a Python keyword).',
      },
    ],
    quiz: [
      {
        type: 'mcq',
        id: 'var-q1',
        question: 'After the line a = 3, what is the value of a?',
        options: ['Unknown', '3', '"a"', 'a = 3'],
        correctIndex: 1,
        explanation: 'The assignment puts 3 into the box a; when you print(a) you see 3.',
      },
      {
        type: 'fill',
        id: 'var-q2',
        question: 'Assign Istanbul to the variable city (as quoted text).',
        placeholder: 'city = ...',
        answer: 'city = "Istanbul"',
        accept: [
          'city = "Istanbul"',
          "city = 'Istanbul'",
          'city="Istanbul"',
          "city='Istanbul'",
        ],
        explanation: 'Text needs quotes: city = "Istanbul"',
      },
    ],
  },
  {
    id: 'types',
    order: 3,
    title: 'Data types',
    subtitle: 'Numbers, text, and true/false are different boxes.',
    blocks: [
      {
        type: 'text',
        body: 'Python knows the type of every value. The type determines what you can do with that value. The four types you see most often:',
      },
      {
        type: 'code',
        caption: 'Basic types',
        code: `count = 7         # int  (whole number)
ratio = 3.14      # float (decimal)
name = "Mert"     # str  (text)
active = True     # bool (True or False)`,
      },
      {
        type: 'text',
        body: 'You can find out the type with type(...). "7" and 7 are not the same: one is text, the other is a number. That is why "2" + "3" results in "23"; but 2 + 3 results in 5.',
      },
      {
        type: 'code',
        caption: 'Checking the type',
        code: `print(type(7))
print(type("7"))
print(type(True))`,
      },
      {
        type: 'callout',
        title: 'True / False',
        body: 'Boolean values are written with a capital letter: True, False. true or false give an error.',
      },
    ],
    quiz: [
      {
        type: 'mcq',
        id: 'types-q1',
        question: 'What is the type of the expression "42"?',
        options: ['int', 'float', 'str', 'bool'],
        correctIndex: 2,
        explanation: 'If there are quotes it is text (str), even if it looks like a number.',
      },
      {
        type: 'mcq',
        id: 'types-q2',
        question: 'Which one is of type bool?',
        options: ['"True"', 'true', 'True', '1.0'],
        correctIndex: 2,
        explanation: 'True (capital T) is a boolean. "True" is a string, and true is invalid.',
      },
    ],
  },
  {
    id: 'operators',
    order: 4,
    title: 'Arithmetic operators',
    subtitle: 'Add, subtract, divide, take the remainder.',
    blocks: [
      {
        type: 'text',
        body: 'Operators are used to do math with numbers. The result is usually assigned to a new value or printed with print.',
      },
      {
        type: 'code',
        caption: 'Operator table',
        code: `print(10 + 3)   # 13  addition
print(10 - 3)   # 7   subtraction
print(10 * 3)   # 30  multiplication
print(10 / 3)   # 3.333...  division (float)
print(10 // 3)  # 3   integer division (rounds down)
print(10 % 3)   # 1   remainder (mod)
print(2 ** 3)   # 8   power (2 to the 3rd)`,
      },
      {
        type: 'text',
        body: '% (mod) is very useful on exams: is a number even? n % 2 == 0. The last digit? n % 10. Use // when you want the whole part, while / can always produce a decimal.',
      },
      {
        type: 'callout',
        title: 'Precedence',
        body: 'First **, then * / // %, then + -. Use parentheses to avoid confusion: (2 + 3) * 4.',
      },
    ],
    quiz: [
      {
        type: 'mcq',
        id: 'op-q1',
        question: 'What is the result of 17 % 5?',
        options: ['3', '2', '3.4', '0'],
        correctIndex: 1,
        explanation: '5×3=15, remainder 2. So 17 % 5 = 2.',
      },
      {
        type: 'fill',
        id: 'op-q2',
        question: 'How do you write 2 to the power of 4 in Python? (expression only)',
        placeholder: '2 ?? 4',
        answer: '2 ** 4',
        accept: ['2 ** 4', '2**4', '2** 4', '2 **4'],
        explanation: 'The power operator is **: 2 ** 4 = 16.',
      },
    ],
  },
  {
    id: 'strings',
    order: 5,
    title: 'String (text) operations',
    subtitle: 'Join text, get its length, split it.',
    blocks: [
      {
        type: 'text',
        body: 'A string is a sequence of characters. You can use single or double quotes. Common on exams: len, indexing, concatenation, upper/lower, strip.',
      },
      {
        type: 'code',
        caption: 'Basic string operations',
        code: `first = "Ada"
last = "Lovelace"
full = first + " " + last
print(full)          # Ada Lovelace
print(len(first))    # 3
print(first[0])      # A  (first character, indexing starts at 0)
print(first.upper()) # ADA`,
      },
      {
        type: 'text',
        body: 'Indexing starts at 0: s[0] is the first character. s[-1] is the last character. str(42) converts a number to text; int("42") converts text to a number (only if it is digits).',
      },
      {
        type: 'code',
        caption: 'f-string (modern joining)',
        code: `age = 20
print(f"My age is {age}")`,
      },
      {
        type: 'callout',
        title: 'Watch out',
        body: '"3" + 1 gives an error. First make the types compatible: int("3") + 1 or "3" + str(1).',
      },
    ],
    quiz: [
      {
        type: 'mcq',
        id: 'str-q1',
        question: 'What is the result of len("Python")?',
        options: ['5', '6', '7', 'Error'],
        correctIndex: 1,
        explanation: 'P-y-t-h-o-n → 6 characters.',
      },
      {
        type: 'fill',
        id: 'str-q2',
        question: 'When s = "code", write the expression that takes the first character.',
        placeholder: 's[?]',
        answer: 's[0]',
        accept: ['s[0]', 's[ 0 ]'],
        explanation: 'Indexing starts at 0: s[0] → "c".',
      },
    ],
  },
  {
    id: 'input-cast',
    order: 6,
    title: 'input and type conversion',
    subtitle: 'Get input from the user, convert to a number, calculate.',
    blocks: [
      {
        type: 'text',
        body: 'input(...) gets text from the user. The returned value is always a str — even if they type digits. If you are going to do math, convert with int or float.',
      },
      {
        type: 'code',
        caption: 'Classic pattern',
        code: `age_text = input("Your age? ")
age = int(age_text)
print(age + 1)`,
      },
      {
        type: 'code',
        caption: 'On a single line',
        code: `n = int(input("Number: "))
print(n * 2)`,
      },
      {
        type: 'text',
        body: 'Common conversions: int("10"), float("3.5"), str(10). If the conversion fails (int("abc")) the program errors — on exams the input is assumed to be in the expected format.',
      },
      {
        type: 'callout',
        title: 'Exam tip',
        body: 'Lines read from a file are also text. int(line) or int(line.strip()) is seen often.',
      },
    ],
    quiz: [
      {
        type: 'mcq',
        id: 'input-q1',
        question: 'After x = input(), if the user types 5, what is the type of x?',
        options: ['int', 'str', 'float', 'bool'],
        correctIndex: 1,
        explanation: 'input always returns a str. If you want a number, do int(x).',
      },
      {
        type: 'fill',
        id: 'input-q2',
        question: 'Write the expression that converts the text "15" to a whole number.',
        placeholder: '???("15")',
        answer: 'int("15")',
        accept: ['int("15")', "int('15')", 'int( "15" )'],
        explanation: 'int("15") → 15 (int).',
      },
    ],
  },
  {
    id: 'comparisons',
    order: 7,
    title: 'Comparisons and logic',
    subtitle: 'Expressions that produce True/False.',
    blocks: [
      {
        type: 'text',
        body: 'Comparison operators produce True or False. if statements and loops look at these.',
      },
      {
        type: 'code',
        caption: 'Comparisons',
        code: `print(5 > 3)    # True
print(5 == 5)   # True  (equal?)
print(5 != 4)   # True  (not equal?)
print(5 >= 5)   # True
print(2 < 1)    # False`,
      },
      {
        type: 'text',
        body: '== is an equality check; = is assignment. Do not mix them up. Logical connectors: and (both true), or (at least one true), not (invert it).',
      },
      {
        type: 'code',
        caption: 'and / or / not',
        code: `age = 20
print(age >= 18 and age < 65)  # True
print(age < 10 or age > 100)   # False
print(not False)               # True`,
      },
    ],
    quiz: [
      {
        type: 'mcq',
        id: 'cmp-q1',
        question: 'What is the value of the expression 3 == 3?',
        options: ['3', 'True', 'False', 'Error'],
        correctIndex: 1,
        explanation: '== compares and returns True/False.',
      },
      {
        type: 'mcq',
        id: 'cmp-q2',
        question: 'What is the result of True and False?',
        options: ['True', 'False', 'TrueFalse', 'Error'],
        correctIndex: 1,
        explanation: 'For and, both must be True; if one is False the result is False.',
      },
    ],
  },
  {
    id: 'if-else',
    order: 8,
    title: 'if / elif / else',
    subtitle: 'Choose different paths based on a condition.',
    blocks: [
      {
        type: 'text',
        body: 'An if block only runs if the condition is True. In Python, blocks are marked by indentation (usually 4 spaces). If the indentation is wrong, you get an error or incorrect logic.',
      },
      {
        type: 'code',
        caption: 'Basic if',
        code: `n = 7
if n % 2 == 0:
    print("even")
else:
    print("odd")`,
      },
      {
        type: 'code',
        caption: 'elif chain',
        code: `grade = 75
if grade >= 90:
    print("A")
elif grade >= 70:
    print("B")
else:
    print("C")`,
      },
      {
        type: 'text',
        body: 'The first true condition runs, and the rest are not checked. else is optional: it kicks in when no condition holds. Do not forget the : (colon) at the end of the line.',
      },
      {
        type: 'callout',
        title: 'Indentation',
        body: 'The lines after if must be indented by the same amount. Mixed indentation gives an IndentationError.',
      },
    ],
    quiz: [
      {
        type: 'mcq',
        id: 'if-q1',
        question: 'When n = 4 and n % 2 == 0 is True, what is printed?',
        options: ['odd', 'even', 'Nothing', 'Error'],
        correctIndex: 1,
        explanation: 'Since 4 is even, the if branch runs → "even".',
      },
      {
        type: 'fill',
        id: 'if-q2',
        question: 'What character is required at the end of an if line? (single character)',
        placeholder: 'if x > 0_',
        answer: ':',
        accept: [':'],
        explanation: 'A colon (:) is mandatory at the start of a block.',
      },
    ],
  },
  {
    id: 'lists',
    order: 9,
    title: 'Lists',
    subtitle: 'Keep multiple values in a single box.',
    blocks: [
      {
        type: 'text',
        body: 'A list is an ordered collection. It is written with square brackets []. Elements are separated by commas; types can be mixed but usually the same type is used.',
      },
      {
        type: 'code',
        caption: 'Creating a list and accessing it',
        code: `numbers = [10, 20, 30]
print(numbers[0])      # 10
print(len(numbers))    # 3
numbers.append(40)     # add to the end
print(numbers)         # [10, 20, 30, 40]`,
      },
      {
        type: 'text',
        body: 'Lists are mutable: assign an element, append, pop. split() splits text into a list: "a b c".split() → ["a", "b", "c"]. This is used a lot with file lines on exams.',
      },
      {
        type: 'code',
        caption: 'split and int conversion',
        code: `line = "12 6 3"
parts = line.split()
numbers = []
for p in parts:
    numbers.append(int(p))
print(numbers)  # [12, 6, 3]`,
      },
    ],
    quiz: [
      {
        type: 'mcq',
        id: 'list-q1',
        question: 'When nums = [2, 4, 6], what is nums[1]?',
        options: ['2', '4', '6', '[2, 4, 6]'],
        correctIndex: 1,
        explanation: 'Index 0→2, 1→4, 2→6.',
      },
      {
        type: 'fill',
        id: 'list-q2',
        question: 'How do you write an empty list?',
        placeholder: '...',
        answer: '[]',
        accept: ['[]', 'list()'],
        explanation: 'The most common is [] ; list() also produces an empty list.',
      },
    ],
  },
  {
    id: 'for-loop',
    order: 10,
    title: 'for loop',
    subtitle: 'Repeat for each element of a collection.',
    blocks: [
      {
        type: 'text',
        body: 'for runs the block once for each element in a list (or another iterable). It means "for each one, do this".',
      },
      {
        type: 'code',
        caption: 'for over a list',
        code: `for fruit in ["apple", "pear"]:
    print(fruit)`,
      },
      {
        type: 'code',
        caption: 'Counting with range',
        code: `for i in range(3):
    print(i)
# 0
# 1
# 2`,
      },
      {
        type: 'text',
        body: 'range(n) → from 0 to n-1. range(1, 5) → 1,2,3,4. You can also loop over a string: for letter in "ab". For file lines: for line in file.',
      },
      {
        type: 'callout',
        title: 'Accumulation pattern',
        body: 'Start with total = 0, do total = total + x in the loop, and use total after the loop ends. Half of exam problems are this pattern.',
      },
    ],
    quiz: [
      {
        type: 'mcq',
        id: 'for-q1',
        question: 'How many times does for i in range(3): loop?',
        options: ['2', '3', '4', 'Infinite'],
        correctIndex: 1,
        explanation: 'range(3) → 0,1,2 → three iterations.',
      },
      {
        type: 'fill',
        id: 'for-q2',
        question: 'Write the range expression that produces 0,1,2,3.',
        placeholder: 'range(...)',
        answer: 'range(4)',
        accept: ['range(4)', 'range(0, 4)', 'range(0,4)'],
        explanation: 'range(4) or range(0, 4) → 0..3.',
      },
    ],
  },
  {
    id: 'while-loop',
    order: 11,
    title: 'while loop',
    subtitle: 'Repeat as long as the condition is True.',
    blocks: [
      {
        type: 'text',
        body: 'while repeats the block as long as the condition is True. If you do not know in advance how many iterations there will be (e.g. Collatz / Munodi), while is suitable. If you forget to make the condition False somewhere, you get an infinite loop.',
      },
      {
        type: 'code',
        caption: 'Counting with while',
        code: `n = 3
while n > 0:
    print(n)
    n = n - 1
print("done")`,
      },
      {
        type: 'code',
        caption: 'Halve while even (simple example)',
        code: `x = 16
while x % 2 == 0:
    x = x // 2
print(x)  # 1`,
      },
      {
        type: 'callout',
        title: 'for or while?',
        body: '"Go through all of them" over a list/line/range → for. "Until this condition breaks" → while.',
      },
    ],
    quiz: [
      {
        type: 'mcq',
        id: 'while-q1',
        question: 'What happens with while True: and no break?',
        options: ['Runs once', 'Never runs', 'Infinite loop', 'Syntax error'],
        correctIndex: 2,
        explanation: 'Since True is always true, it does not stop (unless there is a break).',
      },
      {
        type: 'fill',
        id: 'while-q2',
        question: 'Write the integer division operator (used to divide 10 by 3 as whole numbers).',
        placeholder: '10 ? 3',
        answer: '//',
        accept: ['//'],
        explanation: 'Integer division // ; 10 // 3 = 3.',
      },
    ],
  },
  {
    id: 'functions',
    order: 12,
    title: 'Functions (def)',
    subtitle: 'Name a piece of work and reuse it.',
    blocks: [
      {
        type: 'text',
        body: 'A function packages a task. You define it with def and call it by name. Parameters are the input, return is the output. In exam solutions, the logic is usually broken into small functions.',
      },
      {
        type: 'code',
        caption: 'Definition and call',
        code: `def square(n):
    return n * n

print(square(5))  # 25`,
      },
      {
        type: 'code',
        caption: 'When there is no return',
        code: `def greet(name):
    print("Hello", name)

result = greet("Ada")
print(result)  # None`,
      },
      {
        type: 'text',
        body: 'return gives a value out of the function; print only writes to the screen. If you will use the computed result later, return is a must. The function body is indented; calling it needs parentheses: square(5) is correct, square is wrong (that is the function itself).',
      },
      {
        type: 'callout',
        title: 'Exam pattern',
        body: 'Writing a function like def armstrong(number): ... and calling it inside main is very common. First think about the function on its own, then connect it.',
      },
    ],
    quiz: [
      {
        type: 'mcq',
        id: 'fn-q1',
        question: 'After def square(n): return n*n, what is the value of square(4)?',
        options: ['4', '8', '16', 'None'],
        correctIndex: 2,
        explanation: '4*4 = 16 is returned.',
      },
      {
        type: 'fill',
        id: 'fn-q2',
        question: 'Which keyword is used to define a function?',
        placeholder: '___',
        answer: 'def',
        accept: ['def'],
        explanation: 'Definition: def name(parameters):',
      },
    ],
  },
  {
    id: 'files',
    order: 13,
    title: 'Reading from and writing to files',
    subtitle: 'open, with, line-by-line reading, strip, write.',
    blocks: [
      {
        type: 'text',
        body: 'Most exams take data from a .txt file. with open("file.txt") as f: opens the file; it closes automatically when the block ends. The default mode is reading ("r"). Use "w" to write, and rarely "r+" to both read and write.',
      },
      {
        type: 'code',
        caption: 'Read line by line (most common pattern)',
        code: `with open("numbers.txt") as f:
    for line in f:
        text = line.strip()
        if text == "":
            continue  # skip empty line
        print(text)`,
      },
      {
        type: 'text',
        body: 'for line in f: gives one line per iteration; the line usually ends with \\n. strip() removes leading/trailing whitespace and \\n. To read the whole file at once, use f.read() (a single string) or f.readlines() (a list of lines).',
      },
      {
        type: 'code',
        caption: 'Read all lines into a list',
        code: `with open("data.txt") as f:
    lines = f.readlines()
print(len(lines))`,
      },
      {
        type: 'code',
        caption: 'Writing to a file',
        code: `with open("out.txt", "w") as f:
    f.write("7\\n")
    f.write("153\\n")
# with "w" it writes the file from scratch (overwrites it)`,
      },
      {
        type: 'callout',
        title: 'try / except',
        body: 'If the file does not exist or cannot be opened, an OSError (or FileNotFoundError) occurs. Common on exams: try: with open(...) ... except OSError as err: print(err)',
      },
      {
        type: 'code',
        caption: 'Error handling',
        code: `try:
    with open("numbers.txt") as f:
        for line in f:
            print(line.strip())
except OSError as err:
    print(f"Could not open file: {err}")`,
      },
    ],
    quiz: [
      {
        type: 'mcq',
        id: 'file-q1',
        question: 'Which one is correct for reading a file?',
        options: [
          'open("a.txt", "w")',
          'with open("a.txt") as f:',
          'read("a.txt")',
          'file.open a.txt',
        ],
        correctIndex: 1,
        explanation: 'with open("a.txt") as f: is the standard pattern for reading (mode defaults to "r").',
      },
      {
        type: 'fill',
        id: 'file-q2',
        question: 'What is the name of the method used to clean whitespace/\\n from a line?',
        placeholder: 'line.???()',
        answer: 'strip',
        accept: ['strip', 'strip()'],
        explanation: 'line.strip() removes leading/trailing whitespace and the line ending.',
      },
      {
        type: 'mcq',
        id: 'file-q3',
        question: 'What does open(..., "w") do?',
        options: [
          'Only reads',
          'Writes (deletes/overwrites existing content)',
          'Only appends to the end',
          'Deletes the file but does not open it',
        ],
        correctIndex: 1,
        explanation: '"w" is write mode; it creates the file if it does not exist, and writes from scratch if it does.',
      },
    ],
  },
  {
    id: 'file-processing',
    order: 14,
    title: 'Processing file data',
    subtitle: 'split, int/float, filter, accumulate, write — exam patterns.',
    blocks: [
      {
        type: 'text',
        body: 'Every line coming from a file is a string. Processing = clean (strip) → split (split) → convert to type (int/float) → put into a list/dictionary → filter if needed and write to another file.',
      },
      {
        type: 'code',
        caption: 'Pattern 1: one number per line',
        code: `numbers = []
with open("numbers.txt") as f:
    for line in f:
        n = int(line.strip())
        numbers.append(n)
print(numbers)`,
      },
      {
        type: 'code',
        caption: 'Pattern 2: space-separated numbers on a line',
        code: `# Example line: "12 6 3 10"
with open("seq.dat") as f:
    for line in f:
        parts = line.split()            # ["12", "6", "3", "10"]
        seq = []
        for p in parts:
            seq.append(int(p))
        print(seq)`,
      },
      {
        type: 'text',
        body: 'split() splits on whitespace/tab by default. For a comma-separated line like CSV, use split(","). "a:b:c".split(":") → ["a","b","c"]. To limit the split to a fixed number of parts, use maxsplit: line.split(" ", maxsplit=2).',
      },
      {
        type: 'code',
        caption: 'Pattern 3: filter and write to a file',
        code: `with open("numbers.txt") as fin, open("out.txt", "w") as fout:
    for line in fin:
        n = int(line.strip())
        if n % 2 == 0:          # example condition: even numbers
            fout.write(f"{n}\\n")`,
      },
      {
        type: 'code',
        caption: 'Pattern 4: accumulate in a dictionary (count / group)',
        code: `counts = {}
with open("words.txt") as f:
    for line in f:
        w = line.strip()
        if w not in counts:
            counts[w] = 0
        counts[w] += 1
print(counts)`,
      },
      {
        type: 'code',
        caption: 'Pattern 5: comma-separated line (simple CSV)',
        code: `# Example: "Ada,20"
with open("people.txt") as f:
    for line in f:
        name, age = line.strip().split(",")
        print(name, int(age))`,
      },
      {
        type: 'callout',
        title: 'Common trio on exams',
        body: '1) with open + for line  2) strip + split + int  3) put into a list/set/dict or write to out with a condition. Memorize this trio.',
      },
      {
        type: 'callout',
        title: 'Next step',
        body: 'The basics are done. From the study-for-the-exam path you can pick an exam and reinforce with a summary + questions.',
      },
    ],
    quiz: [
      {
        type: 'mcq',
        id: 'fproc-q1',
        question: 'What is the result of "10 20 30".split()?',
        options: [
          '"10 20 30"',
          '["10", "20", "30"]',
          '[10, 20, 30]',
          '("10", "20", "30")',
        ],
        correctIndex: 1,
        explanation: 'split returns a list of strings; the numbers are still text, so int() is needed.',
      },
      {
        type: 'fill',
        id: 'fproc-q2',
        question: 'Write the expression that converts line.strip() to a whole number (the line variable is ready).',
        placeholder: '???',
        answer: 'int(line.strip())',
        accept: ['int(line.strip())', 'int( line.strip() )'],
        explanation: 'First strip, then int: int(line.strip()).',
      },
      {
        type: 'mcq',
        id: 'fproc-q3',
        question: 'Which one is suitable for writing while reading at the same time?',
        options: [
          'Only open("a.txt")',
          'with open("in.txt") as fin, open("out.txt", "w") as fout:',
          'print(file)',
          'split("w")',
        ],
        correctIndex: 1,
        explanation: 'Opening two files on the same with line is very common on exams.',
      },
    ],
  },
]

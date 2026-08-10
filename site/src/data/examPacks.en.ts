import type { ExamPack } from '../types'

export const examPacksEn: ExamPack[] = [
  {
    "examId": "armstrong",
    "examTitle": "Armstrong Numbers",
    "summary": "Armstrong number: in an n-digit number, the sum of each digit raised to the power n equals the number itself (e.g. 153 = 1³+5³+3³).",
    "goalBullets": [
      "Read numbers line by line from numbers.txt",
      "Find the Armstrong numbers",
      "Write them to armstrong.txt in the same order"
    ],
    "mcqs": [
      {
        "id": "armstrong-mcq-1",
        "question": "Is 153 an Armstrong number? (1³+5³+3³)",
        "options": [
          "No",
          "Yes",
          "Only if it has 3 digits",
          "Only if it is even"
        ],
        "correctIndex": 1,
        "explanation": "1+125+27 = 153; yes, it is an Armstrong number."
      },
      {
        "id": "armstrong-mcq-2",
        "question": "Where does the program get its input/output?",
        "options": [
          "Only from the keyboard",
          "numbers.txt → armstrong.txt",
          "Only prints to the screen",
          "From a database"
        ],
        "correctIndex": 1,
        "explanation": "It reads from a file and writes the Armstrong numbers to a file."
      }
    ]
  },
  {
    "examId": "ascii-stats",
    "examTitle": "ASCII Stats",
    "summary": "In an ASCII landscape file, you count character frequencies inside a square chosen by the user and print the percentages.",
    "goalBullets": [
      "Read the landscape from the file",
      "Check the given square boundaries",
      "Count the characters inside the square and compute percentages"
    ],
    "mcqs": [
      {
        "id": "ascii-stats-mcq-1",
        "question": "In which region are the statistics computed?",
        "options": [
          "In the whole file",
          "In the square chosen by the user",
          "Only in the first line",
          "Only on spaces"
        ],
        "correctIndex": 1,
        "explanation": "The characters inside the selected square (x,y,size) are counted."
      },
      {
        "id": "ascii-stats-mcq-2",
        "question": "What is done if the square goes outside the image?",
        "options": [
          "It is ignored",
          "An error message is shown",
          "It is shrunk automatically",
          "Only the edge is counted"
        ],
        "correctIndex": 1,
        "explanation": "If it is out of bounds, ERROR is printed."
      }
    ]
  },
  {
    "examId": "atomic-chess",
    "examTitle": "Atomic Chess",
    "summary": "Atomic chess: pieces move normally but a capture triggers an explosion; the surroundings are cleared, and if a king blows up the game ends.",
    "goalBullets": [
      "Read the board and moves from the file",
      "Apply the moves",
      "Handle the explosion on a capture and find the winner"
    ],
    "mcqs": [
      {
        "id": "atomic-chess-mcq-1",
        "question": "What happens after a capture in atomic chess?",
        "options": [
          "Only the captured piece is removed",
          "An explosion clears the surroundings",
          "The move is undone",
          "Nothing"
        ],
        "correctIndex": 1,
        "explanation": "A capture triggers an explosion."
      },
      {
        "id": "atomic-chess-mcq-2",
        "question": "What is the column letter of the square a2?",
        "options": [
          "2",
          "a",
          "b",
          "h"
        ],
        "correctIndex": 1,
        "explanation": "Notation: letter is the column, number is the row → a."
      }
    ]
  },
  {
    "examId": "battleship",
    "examTitle": "Battleship",
    "summary": "Battleship is simulated using two players' maps and a list of shots: hit/miss, and the game ends when a fleet is sunk.",
    "goalBullets": [
      "Read the maps and moves.txt",
      "Apply the shots in order (hit/miss)",
      "Write the result when the fleet is destroyed"
    ],
    "mcqs": [
      {
        "id": "battleship-mcq-1",
        "question": "On the opponent's map, what does '#' usually mean?",
        "options": [
          "Empty sea",
          "Ship part",
          "A previous miss",
          "Edge"
        ],
        "correctIndex": 1,
        "explanation": "In the README, ship cells are marked with #."
      },
      {
        "id": "battleship-mcq-2",
        "question": "In which format is a shot coordinate example given?",
        "options": [
          "(1,1)",
          "A,5",
          "a2e4",
          "row=1"
        ],
        "correctIndex": 1,
        "explanation": "Row letter, column number: like A,5."
      }
    ]
  },
  {
    "examId": "biodiversity",
    "examTitle": "Biodiversity",
    "summary": "You match eDNA samples against a species DNA database; you detect repeats and report the match rate and taxonomy tree.",
    "goalBullets": [
      "Load the species DNA database",
      "Read the samples (detect repeats)",
      "Find the species via substring matching and report"
    ],
    "mcqs": [
      {
        "id": "biodiversity-mcq-1",
        "question": "How do you check whether a sample DNA is in a species DNA?",
        "options": [
          "Exact equality with ==",
          "Substring with in",
          "With len",
          "With sort"
        ],
        "correctIndex": 1,
        "explanation": "sample in dna is a substring check."
      },
      {
        "id": "biodiversity-mcq-2",
        "question": "What is done if the same sample line appears twice?",
        "options": [
          "Both are counted",
          "It is marked as a repeat / skipped",
          "The program crashes",
          "The file is deleted"
        ],
        "correctIndex": 1,
        "explanation": "A repeated sample warning is given."
      }
    ]
  },
  {
    "examId": "chess-selo",
    "examTitle": "Chess SELO",
    "summary": "You update player SELO scores based on game results, give a default score to unknown players, and list them sorted.",
    "goalBullets": [
      "Read the player and match CSVs",
      "Update the winner's/loser's score",
      "Sort by score and print"
    ],
    "mcqs": [
      {
        "id": "chess-selo-mcq-1",
        "question": "What is usually given to a player not in the list?",
        "options": [
          "0",
          "1500",
          "2000",
          "None"
        ],
        "correctIndex": 1,
        "explanation": "In the solution the default is 1500."
      },
      {
        "id": "chess-selo-mcq-2",
        "question": "How does the winner's score typically change?",
        "options": [
          "It always decreases",
          "It increases by the delta",
          "It stays constant",
          "It is reset to zero"
        ],
        "correctIndex": 1,
        "explanation": "Winner += factor * delta."
      }
    ]
  },
  {
    "examId": "connect-four",
    "examTitle": "Connect Four",
    "summary": "On a 6×7 board, pieces drop with gravity; the winner is found when four of the same symbol line up horizontally/vertically/diagonally.",
    "goalBullets": [
      "Read the column moves from moves.txt",
      "Place the piece at the bottom of the column",
      "Check for four in a row"
    ],
    "mcqs": [
      {
        "id": "connect-four-mcq-1",
        "question": "Where does a piece fall in Connect Four?",
        "options": [
          "To the selected row",
          "To the lowest empty cell in the column",
          "Randomly",
          "Always to the top"
        ],
        "correctIndex": 1,
        "explanation": "Gravity: the lowest empty row."
      },
      {
        "id": "connect-four-mcq-2",
        "question": "How many identical pieces are needed to win?",
        "options": [
          "3",
          "4",
          "5",
          "7"
        ],
        "correctIndex": 1,
        "explanation": "Four in a row."
      }
    ]
  },
  {
    "examId": "consumption+production",
    "examTitle": "Consumption+Production",
    "summary": "You combine home consumption, PV production, and weather data to compute totals such as self-consumption / surplus fed to the grid.",
    "goalBullets": [
      "Read the consumption and production data",
      "Compute the production for the same moment",
      "Sum up self-consumption and surplus"
    ],
    "mcqs": [
      {
        "id": "consumption+production-mcq-1",
        "question": "What is the typical formula for generated energy?",
        "options": [
          "size + efficiency + GHI",
          "size × efficiency × GHI",
          "size / GHI",
          "only GHI"
        ],
        "correctIndex": 1,
        "explanation": "A product formula."
      },
      {
        "id": "consumption+production-mcq-2",
        "question": "Which function is suitable for self-consumption?",
        "options": [
          "max(production, consumption)",
          "min(production, consumption)",
          "sum",
          "abs"
        ],
        "correctIndex": 1,
        "explanation": "Self-consumption equals the smaller of the two."
      }
    ]
  },
  {
    "examId": "crypto",
    "examTitle": "Cryptocurrency",
    "summary": "You compute the daily value of a fixed token portfolio from the prices and find the day with the highest value.",
    "goalBullets": [
      "Read the portfolio amounts",
      "Group the prices by day",
      "Compute the qty × price total and find the max day"
    ],
    "mcqs": [
      {
        "id": "crypto-mcq-1",
        "question": "How is a day's portfolio value found?",
        "options": [
          "Just the number of tokens",
          "Σ (amount × price)",
          "Max price",
          "Min price"
        ],
        "correctIndex": 1,
        "explanation": "The sum of qty*price for the owned tokens."
      },
      {
        "id": "crypto-mcq-2",
        "question": "Why are prices grouped by date?",
        "options": [
          "To make the file smaller",
          "To compute a separate value for each day",
          "Sorting is forbidden",
          "It is a CSV rule"
        ],
        "correctIndex": 1,
        "explanation": "A separate evaluation for each date."
      }
    ]
  },
  {
    "examId": "everwhen",
    "examTitle": "Everwhen",
    "summary": "You convert same-day events from different time zones to UTC; you sort and print them with a yesterday/today/tomorrow label.",
    "goalBullets": [
      "Read the event lines and timezone offsets",
      "Convert local time to UTC minutes",
      "Sort/print by the day label"
    ],
    "mcqs": [
      {
        "id": "everwhen-mcq-1",
        "question": "When converting to UTC, if raw < 0 what is the label?",
        "options": [
          "today",
          "yesterday",
          "tomorrow",
          "error"
        ],
        "correctIndex": 1,
        "explanation": "Negative minutes → the previous day."
      },
      {
        "id": "everwhen-mcq-2",
        "question": "How many minutes are in 1 hour?",
        "options": [
          "24",
          "60",
          "100",
          "3600"
        ],
        "correctIndex": 1,
        "explanation": "60 is used in the offset calculation."
      }
    ]
  },
  {
    "examId": "flights-booking",
    "examTitle": "Flights Booking",
    "summary": "You apply BOOK/CANCEL requests to flights; if capacity is exceeded a BOOK fails; at the end you print the seat map.",
    "goalBullets": [
      "Read the flight capacities",
      "Process the BOOK/CANCEL operations",
      "Print the seat layout"
    ],
    "mcqs": [
      {
        "id": "flights-booking-mcq-1",
        "question": "What happens on a BOOK when capacity is full?",
        "options": [
          "It still adds",
          "It prints Fail",
          "It does a CANCEL",
          "It passes silently"
        ],
        "correctIndex": 1,
        "explanation": "Exceeding capacity is a Fail."
      },
      {
        "id": "flights-booking-mcq-2",
        "question": "What does CANCEL do?",
        "options": [
          "Deletes the flight",
          "Removes the seats belonging to that name",
          "Adds a new seat",
          "Closes the file"
        ],
        "correctIndex": 1,
        "explanation": "The name is cleared from the list."
      }
    ]
  },
  {
    "examId": "freedonia",
    "examTitle": "Freedonia",
    "summary": "You apply +rule / −rule changes by date; you print which rules are active on the query date.",
    "goalBullets": [
      "Read the rules by date",
      "Add on +, remove on −",
      "Find the active set up to the query day"
    ],
    "mcqs": [
      {
        "id": "freedonia-mcq-1",
        "question": "What does +RULE mean?",
        "options": [
          "Delete the rule",
          "Add the rule",
          "Change the date",
          "Open the file"
        ],
        "correctIndex": 1,
        "explanation": "+ adds, − removes."
      },
      {
        "id": "freedonia-mcq-2",
        "question": "Which structure is suitable for holding the active rules?",
        "options": [
          "Only int",
          "set",
          "float",
          "A single True/False variable"
        ],
        "correctIndex": 1,
        "explanation": "A set is ideal for union/difference."
      }
    ]
  },
  {
    "examId": "heating",
    "examTitle": "Heating",
    "summary": "From two buildings' heat consumption CSVs, you produce period, monthly, and per-building daily statistics.",
    "goalBullets": [
      "Parse the CSV lines (date, value)",
      "Accumulate the monthly totals",
      "Find the max daily consumption for a building"
    ],
    "mcqs": [
      {
        "id": "heating-mcq-1",
        "question": "What is the typical pattern for a monthly total?",
        "options": [
          "Just print",
          "0 if not in the dict, then +=",
          "set.add",
          "sort"
        ],
        "correctIndex": 1,
        "explanation": "An accumulation dictionary."
      },
      {
        "id": "heating-mcq-2",
        "question": "How is a CSV field usually split?",
        "options": [
          "split(',')",
          "split(';') is mandatory",
          "split() is never enough",
          "json.loads"
        ],
        "correctIndex": 0,
        "explanation": "timestamp,value → split(',')."
      }
    ]
  },
  {
    "examId": "linmgoweave",
    "examTitle": "LingoWeave",
    "summary": "Each word's score = (how many times it occurs in the pattern) × length; if the same score appears a second time it becomes 0; positives are printed in descending order.",
    "goalBullets": [
      "Read the pattern and the words",
      "Compute the score (count × len)",
      "Zero out repeated scores, sort, and print"
    ],
    "mcqs": [
      {
        "id": "linmgoweave-mcq-1",
        "question": "What is the score formula?",
        "options": [
          "just len(word)",
          "count × len(word)",
          "count + len",
          "the pattern length"
        ],
        "correctIndex": 1,
        "explanation": "Occurrence count × word length."
      },
      {
        "id": "linmgoweave-mcq-2",
        "question": "What if the same score was seen before?",
        "options": [
          "It is doubled",
          "It is set to 0",
          "It is deleted",
          "Error"
        ],
        "correctIndex": 1,
        "explanation": "The first word keeps its score, later ones become 0."
      }
    ]
  },
  {
    "examId": "magic-boxes",
    "examTitle": "Magic Boxes",
    "summary": "42 type-locked boxes: Bob puts objects in, Carl takes them out; if there is no suitable box, Alice fails.",
    "goalBullets": [
      "Prefer a box of the same type, otherwise find an empty box",
      "Apply Bob add / Carl remove operations",
      "Print a message on the first failure"
    ],
    "mcqs": [
      {
        "id": "magic-boxes-mcq-1",
        "question": "When adding an object, where do you look first?",
        "options": [
          "A random box",
          "A box that holds the same type",
          "Always the last box",
          "Only full boxes"
        ],
        "correctIndex": 1,
        "explanation": "Type lock: the same type is preferred."
      },
      {
        "id": "magic-boxes-mcq-2",
        "question": "What happens if there is no suitable box?",
        "options": [
          "A new 43rd box is opened",
          "The operation is considered a failure",
          "The object is deleted",
          "Carl adds it"
        ],
        "correctIndex": 1,
        "explanation": "Alice cannot store..."
      }
    ]
  },
  {
    "examId": "misspell",
    "examTitle": "Misspell",
    "summary": "For each name, you find the words in the dictionary that have the same length and differ by exactly one letter.",
    "goalBullets": [
      "Read the names and dictionary files",
      "Check for equal length + exactly 1 letter difference",
      "Print the matches"
    ],
    "mcqs": [
      {
        "id": "misspell-mcq-1",
        "question": "How many letters must differ for a valid similarity?",
        "options": [
          "0",
          "1",
          "2",
          "does not matter"
        ],
        "correctIndex": 1,
        "explanation": "Exactly one letter."
      },
      {
        "id": "misspell-mcq-2",
        "question": "What is the result if the lengths differ?",
        "options": [
          "True",
          "False",
          "1",
          "None"
        ],
        "correctIndex": 1,
        "explanation": "Equal length is required first."
      }
    ]
  },
  {
    "examId": "munodi",
    "examTitle": "Munodi",
    "summary": "The Munodi (Collatz) sequence: if even /2, if odd 3n+1; until it reaches 1. You check whether the sequence in the file follows this rule.",
    "goalBullets": [
      "Convert the seq.dat lines to a list of ints",
      "Generate the Munodi sequence from the first element",
      "If they match, print it along with its length"
    ],
    "mcqs": [
      {
        "id": "munodi-mcq-1",
        "question": "For an even number, what is the next term?",
        "options": [
          "3n+1",
          "n//2",
          "n*2",
          "n-1"
        ],
        "correctIndex": 1,
        "explanation": "Even → half of it."
      },
      {
        "id": "munodi-mcq-2",
        "question": "When does the sequence end?",
        "options": [
          "When it reaches 0",
          "When it reaches 1",
          "When it becomes negative",
          "After 10 steps"
        ],
        "correctIndex": 1,
        "explanation": "It terminates when it reaches 1."
      }
    ]
  },
  {
    "examId": "railway-management",
    "examTitle": "Railway",
    "summary": "You load train services; with Stazioni / Orario / Viaggio operations you find the station list, the times, and the shortest trip.",
    "goalBullets": [
      "Parse the services in corse.txt",
      "Run the commands in operazioni.txt",
      "Print the station / time / duration results"
    ],
    "mcqs": [
      {
        "id": "railway-management-mcq-1",
        "question": "What does the expression Station:hh:min carry?",
        "options": [
          "Only the station",
          "Station + hour + minute",
          "Only the duration",
          "The ticket price"
        ],
        "correctIndex": 1,
        "explanation": "Three parts: name, hour, minute."
      },
      {
        "id": "railway-management-mcq-2",
        "question": "How do you convert a difference of two times to minutes?",
        "options": [
          "24*(h2-h1)",
          "60*(h2-h1)+(m2-m1)",
          "h2-h1",
          "m2*h1"
        ],
        "correctIndex": 1,
        "explanation": "The classic minutes formula."
      }
    ]
  },
  {
    "examId": "shells",
    "examTitle": "Sea Shells",
    "summary": "You apply buy-X-get-Y-free campaigns to a cart; you subtract the free gifts and print the total of the remaining items.",
    "goalBullets": [
      "Read the campaign and the cart",
      "If the condition is met, deduct the gift for free",
      "Print the total price of the remaining items"
    ],
    "mcqs": [
      {
        "id": "shells-mcq-1",
        "question": "When a campaign is applied, is the gift included in the price?",
        "options": [
          "Yes, full price",
          "No, it is deducted for free",
          "Half price",
          "As much as the tax"
        ],
        "correctIndex": 1,
        "explanation": "The gift is subtracted from items_to_pay."
      },
      {
        "id": "shells-mcq-2",
        "question": "What does checking whether the cart contains the campaign condition resemble?",
        "options": [
          "Only length equality",
          "A multiset/count check",
          "Reverse sort",
          "No hash"
        ],
        "correctIndex": 1,
        "explanation": "includes: a count comparison."
      }
    ]
  },
  {
    "examId": "soccer",
    "examTitle": "Soccer Stats",
    "summary": "From a player CSV, you compute forward/midfielder efficiencies, young teams, and the most efficient forward trio.",
    "goalBullets": [
      "Read the players and group them by team",
      "Apply the efficiency formulas",
      "Print the age and efficiency rankings"
    ],
    "mcqs": [
      {
        "id": "soccer-mcq-1",
        "question": "How do goals and assists enter the forward efficiency?",
        "options": [
          "They are subtracted",
          "They are summed (offsides subtracted)",
          "They are multiplied",
          "They are ignored"
        ],
        "correctIndex": 1,
        "explanation": "(goals+assists-offsides)/minutes."
      },
      {
        "id": "soccer-mcq-2",
        "question": "Which structure is suitable for splitting players by team?",
        "options": [
          "set of int",
          "dict: team → list",
          "a single string",
          "True/False"
        ],
        "correctIndex": 1,
        "explanation": "A grouping dictionary."
      }
    ]
  },
  {
    "examId": "strawberry",
    "examTitle": "Strawberry Fields",
    "summary": "You strip punctuation from the words in the text and uppercase them; you print adjacent triples of the same length.",
    "goalBullets": [
      "Split the file into words",
      "strip(punctuation) + upper",
      "Print consecutive triples of equal length"
    ],
    "mcqs": [
      {
        "id": "strawberry-mcq-1",
        "question": "What is the sliding window size for a triple?",
        "options": [
          "2",
          "3",
          "4",
          "len(words)"
        ],
        "correctIndex": 1,
        "explanation": "Three consecutive words."
      },
      {
        "id": "strawberry-mcq-2",
        "question": "What is done with punctuation?",
        "options": [
          "It is left as is",
          "It is cleaned with strip",
          "Only ! is removed",
          "It is lowercased"
        ],
        "correctIndex": 1,
        "explanation": "strip(punctuation)."
      }
    ]
  },
  {
    "examId": "super-calculator",
    "examTitle": "Super Calculator",
    "summary": "You evaluate \"numbers : operators\" lines from left to right using only + − * (no operator precedence).",
    "goalBullets": [
      "Split the line in two on ':'",
      "Apply the operators in order",
      "Print the result"
    ],
    "mcqs": [
      {
        "id": "super-calculator-mcq-1",
        "question": "Which operators are allowed?",
        "options": [
          "+, -, *, /",
          "+, -, *",
          "only +",
          "** and %"
        ],
        "correctIndex": 1,
        "explanation": "README: + − *."
      },
      {
        "id": "super-calculator-mcq-2",
        "question": "What is the order of evaluation?",
        "options": [
          "Multiplication first",
          "Left to right",
          "Right to left",
          "Random"
        ],
        "correctIndex": 1,
        "explanation": "No precedence, left to right."
      }
    ]
  },
  {
    "examId": "unsafe-meat",
    "examTitle": "Unsafe Meat",
    "summary": "You compare purchased batches against dangerous batch-number ranges; you print those that fall within a range.",
    "goalBullets": [
      "Read the range and batch blocks from report.txt",
      "Check each batch against the ranges",
      "Print it if from ≤ batch ≤ to"
    ],
    "mcqs": [
      {
        "id": "unsafe-meat-mcq-1",
        "question": "How do you check whether a batch is dangerous?",
        "options": [
          "batch == from",
          "from_ <= batch <= to",
          "batch > to",
          "batch in string"
        ],
        "correctIndex": 1,
        "explanation": "A closed interval."
      },
      {
        "id": "unsafe-meat-mcq-2",
        "question": "How are the two blocks usually separated?",
        "options": [
          "A single line",
          "A blank line (\\n\\n)",
          "CSV",
          "JSON"
        ],
        "correctIndex": 1,
        "explanation": "ranges and batches are separated by a blank line."
      }
    ]
  },
  {
    "examId": "wobbletron3k",
    "examTitle": "Wobbletron 3000",
    "summary": "Report lines must be either strictly increasing or strictly decreasing and neighboring differences must be in the range 1..3; you print the valid ones and the percentage correct.",
    "goalBullets": [
      "Convert the reports to lists of ints",
      "Check for monotonicity + neighbor difference",
      "Write the valid reports and print the percentage"
    ],
    "mcqs": [
      {
        "id": "wobbletron3k-mcq-1",
        "question": "In which range must the difference between neighboring elements be?",
        "options": [
          "0..1",
          "1..3",
          "2..5",
          "only 1"
        ],
        "correctIndex": 1,
        "explanation": "The absolute difference is between 1 and 3."
      },
      {
        "id": "wobbletron3k-mcq-2",
        "question": "What if a report is neither increasing nor decreasing?",
        "options": [
          "Accept",
          "Reject (False)",
          "Half credit",
          "Re-sort it"
        ],
        "correctIndex": 1,
        "explanation": "If not monotonic, it is not safe."
      }
    ]
  },
  {
    "examId": "worms",
    "examTitle": "Worms of Words",
    "summary": "You find the smallest index distance between two words within the same sequence; if they never appear together, you print a warning.",
    "goalBullets": [
      "Find the word positions in the sequences",
      "Compute min |p0-p1| over all position pairs",
      "Print the best sequence or the warning"
    ],
    "mcqs": [
      {
        "id": "worms-mcq-1",
        "question": "How is the distance measured?",
        "options": [
          "p0 + p1",
          "abs(p0 - p1)",
          "max(p0,p1)",
          "len(seq)"
        ],
        "correctIndex": 1,
        "explanation": "The absolute value of the index difference."
      },
      {
        "id": "worms-mcq-2",
        "question": "What if the two words never appear in the same sequence?",
        "options": [
          "Distance 0",
          "A warning message",
          "The first sequence is chosen",
          "Infinite loop"
        ],
        "correctIndex": 1,
        "explanation": "A never-appear warning."
      }
    ]
  }
]

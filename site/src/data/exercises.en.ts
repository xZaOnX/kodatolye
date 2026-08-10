export type ExerciseCopy = { title: string; goal: string; hint: string }

/** English title/goal/hint keyed by exercise id */
export const exercisesEn: Record<string, ExerciseCopy> = {
  "armstrong-l1-def": {
    title: "Digit power",
    goal: "Fill in the blanks in the Armstrong number check.",
    hint: "153 → text '153', power 3, sum of digit**power.",
  },
  "armstrong-l1-filter": {
    title: "Filter from file",
    goal: "Read the lines and write out the Armstrong numbers.",
    hint: "Convert to a number with int(line); write it if armstrong is True.",
  },
  "armstrong-l1-sum": {
    title: "sum in one line",
    goal: "Armstrong check using sum + a generator.",
    hint: "Each digit is int(d)**len(str(number)).",
  },
  "ascii-stats-l1-read": {
    title: "Read file into a list",
    goal: "Add the lines to a list.",
    hint: "Use readlines with extend.",
  },
  "ascii-stats-l1-count": {
    title: "Count inside the square",
    goal: "Count symbols with a nested loop.",
    hint: "If stat[symbol] doesn't exist yet, start at 0, then += 1.",
  },
  "ascii-stats-l1-bounds": {
    title: "Bounds check",
    goal: "Verify the square stays inside the image.",
    hint: "Something like 0 <= x <= columns - size.",
  },
  "atomic-chess-l1-index": {
    title: "Square → index",
    goal: "Convert chess notation to row/column.",
    hint: "square[1] is the row, 'abcdefgh'.index(square[0]) is the column.",
  },
  "atomic-chess-l1-player": {
    title: "Who's the player?",
    goal: "Determine the player from a + / - / empty square.",
    hint: "+ → 1, - → -1, else 0.",
  },
  "atomic-chess-l1-clear": {
    title: "Explosion cleanup",
    goal: "Set the target square to EMPTY.",
    hint: "board[rl][cl] = EMPTY",
  },
  "battleship-l1-coord": {
    title: "Parse the coordinate",
    goal: "Convert a shot like A,5 into row/column.",
    hint: "Row is based on ord('A'); column comes from int.",
  },
  "battleship-l1-hit": {
    title: "Is it a hit?",
    goal: "If the opponent's board has a # there, it's a hit.",
    hint: "hit → '*', miss → 'o'",
  },
  "battleship-l1-turn": {
    title: "Whose turn is it?",
    goal: "Pick the player based on even/odd index.",
    hint: "i % 2 == 0 → player 1",
  },
  "biodiversity-l1-dup": {
    title: "Repeated sample",
    goal: "Catch a duplicate line using a set.",
    hint: "If it's already in the set, skip; otherwise add it.",
  },
  "biodiversity-l1-split": {
    title: "Split the DNA",
    goal: "Break up the id;dna line.",
    hint: "split(';') — the second part is the DNA.",
  },
  "biodiversity-l1-match": {
    title: "Substring match",
    goal: "Is the sample DNA contained in the species DNA?",
    hint: "sample in dna",
  },
  "chess-selo-l1-default": {
    title: "Unknown player",
    goal: "Give a default of 1500 if the player is missing.",
    hint: "not in players → 1500",
  },
  "chess-selo-l1-elo": {
    title: "Gain/loss",
    goal: "Update the winner's and loser's scores.",
    hint: "winner += 200*d, loser -= 200*d",
  },
  "chess-selo-l1-sort": {
    title: "Sort by score",
    goal: "Print the players in descending order by score.",
    hint: "sorted(..., reverse=True)",
  },
  "connect-four-l1-gravity": {
    title: "Gravity",
    goal: "Find the lowest empty row in the column.",
    hint: "While the cell isn't EMPTY, bottom -= 1.",
  },
  "connect-four-l1-symbol": {
    title: "Turn symbol",
    goal: "Choose O or X based on the move count.",
    hint: "odd → O, even → X (per the sample solution).",
  },
  "connect-four-l1-win": {
    title: "Horizontal four",
    goal: "Four equal, filled cells in a row.",
    hint: "board[r][c] == board[r][c+1] == ...",
  },
  "consumption-l1-key": {
    title: "Dictionary key",
    goal: "Store consumption keyed by (ID, Date, Time).",
    hint: "Use a tuple as the key.",
  },
  "consumption-l1-produce": {
    title: "Production formula",
    goal: "size × efficiency × GHI.",
    hint: "Multiply the three values.",
  },
  "consumption-l1-self": {
    title: "Self-consumption",
    goal: "Self-consumption equals min(production, consumption).",
    hint: "Use min (and max for the excess).",
  },
  "crypto-l1-portfolio": {
    title: "Read the portfolio",
    goal: "Build a token → amount dictionary.",
    hint: "The amount is a float.",
  },
  "crypto-l1-group": {
    title: "Group prices by date",
    goal: "Open an empty list when the date is new.",
    hint: "not in → list()",
  },
  "crypto-l1-value": {
    title: "Portfolio value",
    goal: "Sum qty × price.",
    hint: "Add it up when the token is in the portfolio.",
  },
  "everwhen-l1-split": {
    title: "Split the line into 3 parts",
    goal: "Separate with maxsplit=2.",
    hint: "split(' ', maxsplit=2)",
  },
  "everwhen-l1-day": {
    title: "Day label",
    goal: "Choose yesterday/today/tomorrow based on minute wrap-around.",
    hint: "raw < 0 → yesterday, >= 24*60 → tomorrow",
  },
  "everwhen-l1-minutes": {
    title: "Convert time to minutes",
    goal: "h*60 + m + offset.",
    hint: "int(h) * 60",
  },
  "flights-l1-parse": {
    title: "Flight capacity",
    goal: "Turn rows and seats into ints.",
    hint: "Call int after splitting.",
  },
  "flights-l1-book": {
    title: "BOOK capacity",
    goal: "Print Fail if capacity is exceeded.",
    hint: "len + seats > rows * seats_per_row",
  },
  "flights-l1-cancel": {
    title: "CANCEL all seats",
    goal: "Remove the name until it's gone.",
    hint: "while name in list",
  },
  "freedonia-l1-date": {
    title: "Turn the date into a tuple",
    goal: "dd-mm-yyyy → (y, m, d).",
    hint: "Order is year-month-day.",
  },
  "freedonia-l1-plusminus": {
    title: "Split +/− rules",
    goal: "Put + into the add set and - into the delete set.",
    hint: "r[0] == '+' → add r[1:]",
  },
  "freedonia-l1-active": {
    title: "Active rules",
    goal: "Set union and difference.",
    hint: "|= and -=",
  },
  "heating-l1-parse": {
    title: "Parse the CSV line",
    goal: "Separate timestamp,value.",
    hint: "split(',')",
  },
  "heating-l1-month": {
    title: "Accumulate per month",
    goal: "Start the month at 0, then add.",
    hint: "The classic dict accumulation pattern.",
  },
  "heating-l1-max": {
    title: "Daily maximum",
    goal: "Record the larger consumption.",
    hint: "consumption > maximum[1]",
  },
  "lingo-l1-window": {
    title: "Search in a window",
    goal: "Count the word inside the pattern.",
    hint: "If the slice == word, count += 1.",
  },
  "lingo-l1-unique": {
    title: "Reset repeated score",
    goal: "Set the score to 0 if it's already in the set.",
    hint: "s not in scores → add, else 0",
  },
  "lingo-l1-print": {
    title: "Print the positives",
    goal: "Descending by score, only s > 0.",
    hint: "sorted reverse, if s > 0",
  },
  "magic-l1-find": {
    title: "Same-type box",
    goal: "Return the box that already contains obj.",
    hint: "obj in box",
  },
  "magic-l1-empty": {
    title: "Find an empty box",
    goal: "not box → empty.",
    hint: "if not box: return index",
  },
  "magic-l1-add": {
    title: "Add an object",
    goal: "Return False if there's no box, otherwise append.",
    hint: "append(obj)",
  },
  "misspell-l1-len": {
    title: "Same length",
    goal: "Return False for different lengths.",
    hint: "If the lengths aren't equal, return False.",
  },
  "misspell-l1-diff": {
    title: "One-letter difference",
    goal: "Count differences with zip — is it exactly 1?",
    hint: "num_diff == 1",
  },
  "misspell-l1-read": {
    title: "Read the word list",
    goal: "Split the file into lines.",
    hint: "read().split('\\n')",
  },
  "munodi-l1-rule": {
    title: "Collatz step",
    goal: "If even, //2; if odd, 3n+1.",
    hint: "% 2 == 0 → // 2",
  },
  "munodi-l1-parse": {
    title: "Line into a list of ints",
    goal: "split and int.",
    hint: "seq.append(int(elem))",
  },
  "munodi-l1-check": {
    title: "Validate the sequence",
    goal: "Does the sequence in the file match the generated one?",
    hint: "seq == munodi(seq[0])",
  },
  "railway-l1-parse": {
    title: "Parse station:time",
    goal: "Break apart Station:hh:min.",
    hint: "split(':') gives three parts.",
  },
  "railway-l1-stations": {
    title: "Unique stations",
    goal: "Collect with a set, then print sorted.",
    hint: "stations.add(s)",
  },
  "railway-l1-duration": {
    title: "Travel time",
    goal: "Convert to minutes: 60*hours + minute difference.",
    hint: "60 * (h2-h1) + (m2-m1)",
  },
  "shells-l1-includes": {
    title: "Does the multiset contain it?",
    goal: "Containment check using count.",
    hint: "seqx.count > seqy.count → False",
  },
  "shells-l1-remove": {
    title: "Remove the gift",
    goal: "Remove the gift and its requisites from the cart.",
    hint: "cart.remove",
  },
  "shells-l1-total": {
    title: "Total price",
    goal: "Sum the prices of the remaining items.",
    hint: "total += price",
  },
  "soccer-l1-fw": {
    title: "Forward efficiency",
    goal: "The (g+a-o)/minutes formula.",
    hint: "goals + assists - offsides",
  },
  "soccer-l1-team": {
    title: "Group by team",
    goal: "Open a list if the team is new, then append.",
    hint: "A dict of lists.",
  },
  "soccer-l1-age": {
    title: "Age calculation",
    goal: "2022 - birth_year.",
    hint: "Subtraction.",
  },
  "strawberry-l1-token": {
    title: "Clean the word",
    goal: "strip punctuation + upper.",
    hint: "w.strip(punctuation).upper()",
  },
  "strawberry-l1-window": {
    title: "Triple window",
    goal: "Slide with range(len-2).",
    hint: "len(words) - 2",
  },
  "strawberry-l1-len": {
    title: "Equal length",
    goal: "Are the three words the same length?",
    hint: "Compare with len.",
  },
  "calc-l1-op": {
    title: "Pick the operator",
    goal: "Branch on + - *.",
    hint: "op == '+'",
  },
  "calc-l1-split": {
    title: "Split on ':'",
    goal: "numbers : ops",
    hint: "line.split(':')",
  },
  "calc-l1-fold": {
    title: "Apply in order",
    goal: "pop two numbers, run operation, append.",
    hint: "numbers.pop() twice",
  },
  "meat-l1-range": {
    title: "Parse the range",
    goal: "from-to → int tuple.",
    hint: "split('-')",
  },
  "meat-l1-check": {
    title: "In range?",
    goal: "from_ <= batch <= to",
    hint: "A three-way comparison.",
  },
  "meat-l1-blocks": {
    title: "Split into two blocks",
    goal: "Separate ranges / batches on the blank line.",
    hint: "split('\\n\\n')",
  },
  "wobble-l1-mono": {
    title: "Is it monotonic?",
    goal: "Sorted or reverse-sorted.",
    hint: "report != sorted(...) and != sorted(..., reverse=True) → False",
  },
  "wobble-l1-gap": {
    title: "Neighbor gap 1..3",
    goal: "Check the absolute difference.",
    hint: "1 <= abs <= 3",
  },
  "wobble-l1-parse": {
    title: "Report line",
    goal: "Turn the line into a list of ints.",
    hint: "int(level)",
  },
  "worms-l1-find": {
    title: "All indexes",
    goal: "Collect every place the word appears.",
    hint: "enumerate + append i",
  },
  "worms-l1-dist": {
    title: "Minimum distance",
    goal: "Update it when abs(p0-p1) is smaller.",
    hint: "Use abs.",
  },
  "worms-l1-warn": {
    title: "Never together",
    goal: "Print a warning if it's None.",
    hint: "is not None",
  },
}

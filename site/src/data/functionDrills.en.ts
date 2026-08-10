export type FunctionDrillCopy = {
  purpose: string
  whyItMatters: string
  hint: string
  examples: { call: string; result: string }[]
}

export const functionDrillsEn: Record<string, FunctionDrillCopy> = {
  'armstrong-fn-armstrong': {
    purpose:
      'Checks whether a number is an Armstrong number: if it has n digits, does the sum of each digit raised to the nth power equal the number itself?',
    whyItMatters: 'This function is the heart of the exam; main just reads from the file and calls it.',
    hint: 'n = len(str(number)); each digit ** n.',
    examples: [
      { call: 'armstrong(153)', result: 'True' },
      { call: 'armstrong(42)', result: 'False' },
    ],
  },
  'armstrong-fn-filter_line': {
    purpose:
      'Converts a line from the file into a number and, if it is Armstrong, writes it to the output file. It is the single step of the read/write loop.',
    whyItMatters: 'The filter pattern: read → convert → condition → write.',
    hint: 'int after strip.',
    examples: [{ call: "line '153\\n', armstrong True", result: '153 is written to out' }],
  },
  'ascii-stats-fn-readfile': {
    purpose: 'Returns all lines of the landscape file as a list.',
    whyItMatters: 'First load the data into memory, then count over the grid.',
    hint: 'Empty list + readlines/extend.',
    examples: [{ call: "readfile('landscape.txt')", result: "['...\\n', '...\\n', ...]" }],
  },
  'ascii-stats-fn-count_cell': {
    purpose: 'Adds the symbol in a cell of the grid to the frequency dictionary.',
    whyItMatters: 'The single step of the nested loop — dict accumulation.',
    hint: 'If missing 0, then += 1.',
    examples: [{ call: "symbol '#' for the first time", result: "stat['#'] = 1" }],
  },
  'atomic-chess-fn-square_to_indexes': {
    purpose: "Converts chess notation (e.g. 'e2') into row and column indexes.",
    whyItMatters: 'Index the notation before accessing the board.',
    hint: 'Letter is the column (0), digit is the row (1).',
    examples: [{ call: "square_to_indexes('a1')", result: '(0, 0)' }],
  },
  'atomic-chess-fn-get_player': {
    purpose: 'Finds the owner of the piece on a square: + white, - black, 0 if empty.',
    whyItMatters: 'The move and explosion logic distinguishes the player based on this.',
    hint: '+ → 1, - → -1.',
    examples: [
      { call: "'+P'", result: '1' },
      { call: "'-k'", result: '-1' },
    ],
  },
  'battleship-fn-parse_shot': {
    purpose: "Converts the shot text (e.g. 'A,5') into a row/column index.",
    whyItMatters: 'Maps moves.txt lines onto the board index.',
    hint: 'A→0, column is 1-based.',
    examples: [{ call: "parse_shot('A,1')", result: '(0, 0)' }],
  },
  'battleship-fn-apply_shot': {
    purpose: 'Marks a hit or a miss based on the opponent map.',
    whyItMatters: 'The outcome of every turn of the game is produced here.',
    hint: 'Ship #, miss o.',
    examples: [{ call: "opponent[r][c]=='#'", result: "hit / '*'" }],
  },
  'biodiversity-fn-is_duplicate': {
    purpose: 'Uses a set to check whether the sample line has been seen before.',
    whyItMatters: 'To filter out repeated eDNA samples.',
    hint: 'in + add.',
    examples: [{ call: 'text is in the set', result: 'True (repeat)' }],
  },
  'biodiversity-fn-dna_match': {
    purpose: "Checks whether the sample DNA appears as a substring within the species DNA.",
    whyItMatters: 'The core operator of the matching.',
    hint: 'substring: in.',
    examples: [{ call: "'AT' in 'GGATTA'", result: 'True' }],
  },
  'chess-selo-fn-elo_win': {
    purpose: 'Updates the SELO score of the winner and the loser using the delta.',
    whyItMatters: 'How the match result is reflected in the score.',
    hint: 'Symmetric ±200*d.',
    examples: [{ call: 'elo_win(1600, 1400)', result: 'rounded new scores' }],
  },
  'chess-selo-fn-ensure_player': {
    purpose: 'If the player does not exist, adds them to the dictionary with the default score of 1500.',
    whyItMatters: 'To tolerate players missing from the CSV.',
    hint: 'not in → 1500.',
    examples: [{ call: 'new name', result: 'players[name]=1500' }],
  },
  'connect-four-fn-find_bottom': {
    purpose: 'Finds the lowest empty row in a column where a piece would fall due to gravity.',
    whyItMatters: 'Required before placing a move.',
    hint: 'If occupied, one row up.',
    examples: [{ call: 'empty column, NUM_ROWS=6', result: '5' }],
  },
  'connect-four-fn-four_horizontal': {
    purpose: 'Checks whether there are four identical filled cells in a row horizontally.',
    whyItMatters: "The simplest piece of check_win.",
    hint: 'c+3 is the last cell.',
    examples: [{ call: 'OOOO side by side', result: 'True / symbol' }],
  },
  'consumption+production-fn-store_consumption': {
    purpose: 'Stores the consumption record in the dictionary keyed by (ID, Date, Time).',
    whyItMatters: 'A lookup to later match with production.',
    hint: 'CSV fields come in as strings.',
    examples: [{ call: 'same key', result: 'float energy value' }],
  },
  'consumption+production-fn-self_consumed': {
    purpose: 'Computes self-consumption from the produced and consumed energy.',
    whyItMatters: 'The core formula of the statistics.',
    hint: 'min(produced, consumed).',
    examples: [{ call: 'prod=5, cons=3', result: '3' }],
  },
  'crypto-fn-evaluate_portfolio': {
    purpose: "Computes the portfolio's total value using a given day's token prices.",
    whyItMatters: 'Called for each date to find the maximum day.',
    hint: 'Accumulate qty * price.',
    examples: [{ call: '1 BTC @ 100, qty 2', result: '200' }],
  },
  'crypto-fn-add_price': {
    purpose: 'Groups the price record by date.',
    whyItMatters: 'The accumulation step inside read_prices.',
    hint: 'If missing, an empty list.',
    examples: [{ call: 'new date', result: 'prices[date] = [(token, price)]' }],
  },
  'everwhen-fn-day_label': {
    purpose: 'Produces a yesterday/today/tomorrow label based on the minute value converted to UTC.',
    whyItMatters: 'The readable form of the timezone wrap-around.',
    hint: '0..1439 → today.',
    examples: [{ call: 'raw=-10', result: "'yesterday'" }],
  },
  'everwhen-fn-to_minutes': {
    purpose: 'Converts hours and minutes into total minutes (adding an offset).',
    whyItMatters: "The arithmetic core of convert_to_utc.",
    hint: '1 hour = 60 min.',
    examples: [{ call: 'h=1,m=30,off=60', result: '150' }],
  },
  'flights-booking-fn-can_book': {
    purpose: 'Checks whether the requested number of seats exceeds capacity.',
    whyItMatters: 'The condition for the BOOK fail decision.',
    hint: 'len+seats <= capacity.',
    examples: [{ call: 'full + 1', result: 'False' }],
  },
  'flights-booking-fn-cancel_all': {
    purpose: "Removes all of a passenger's seats from the list.",
    whyItMatters: 'The essence of the CANCEL operation.',
    hint: 'while name in list.',
    examples: [{ call: 'Ada 3 times', result: 'no Ada remains' }],
  },
  'freedonia-fn-string_to_date': {
    purpose: 'Converts dd-mm-yyyy text into a sortable (y, m, d) tuple.',
    whyItMatters: 'A sort key for applying rules by date.',
    hint: 'Year should come first.',
    examples: [{ call: "string_to_date('01-02-2020')", result: '(2020, 2, 1)' }],
  },
  'freedonia-fn-apply_rules': {
    purpose: 'Applies additions and deletions to the active rule set.',
    whyItMatters: 'One step of the get_active_rules loop.',
    hint: 'set union / difference.',
    examples: [{ call: '+A then -A', result: 'no A' }],
  },
  'heating-fn-parse_csv_line': {
    purpose: 'Separates the date text and the consumption float from a CSV line.',
    whyItMatters: "Every line's parse goes through here.",
    hint: "split(',') + float.",
    examples: [{ call: "'2020-01-01 00:00,12.5'", result: "('2020-01-01', 12.5)" }],
  },
  'heating-fn-add_month': {
    purpose: 'Adds a value to the monthly consumption dictionary.',
    whyItMatters: 'The accumulation pattern of the monthly statistics.',
    hint: 'if missing 0, +=.',
    examples: [{ call: '10 when the month is missing', result: 'monthly[month]=10' }],
  },
  'linmgoweave-fn-calculate_score': {
    purpose: 'Counts how many times the word occurs in the pattern and multiplies by its length.',
    whyItMatters: 'The only way to produce a score.',
    hint: 'Window == word; score count*len.',
    examples: [{ call: "word='ab', pattern='abab'", result: '4' }],
  },
  'linmgoweave-fn-unique_score': {
    purpose: 'Zeros the score if it was used before; adds it to the set if it is the first time.',
    whyItMatters: 'The rule of not giving the same score to a second word.',
    hint: 'Repeat → 0.',
    examples: [{ call: 's=4 for the second time', result: '0' }],
  },
  'magic-boxes-fn-find_box': {
    purpose: 'Looks first for a box of the same type, and if none, an empty box.',
    whyItMatters: 'The place where the type lock is enforced.',
    hint: 'type first, then empty.',
    examples: [{ call: "obj='apple', box0=['apple']", result: '0' }],
  },
  'magic-boxes-fn-add_object': {
    purpose: 'Adds an object to a suitable box; returns False if there is no box.',
    whyItMatters: "Each of Bob's insertion attempts.",
    hint: 'append + None check.',
    examples: [{ call: 'no empty box', result: 'False' }],
  },
  'misspell-fn-mispell': {
    purpose: 'Checks whether two words are the same length and differ by exactly one letter (case-insensitive).',
    whyItMatters: 'The definition of searching for a similar name.',
    hint: 'Exactly 1 difference.',
    examples: [
      { call: "mispell('Ada','Ada')", result: 'False' },
      { call: "mispell('Ada','Aba')", result: 'True' },
    ],
  },
  'misspell-fn-read_list': {
    purpose: 'Reads the lines in the file as a list of words.',
    whyItMatters: 'The name and dictionary files come through the same reader.',
    hint: "read().split('\\n').",
    examples: [{ call: 'a 3-line file', result: 'a 3-element list' }],
  },
  'munodi-fn-munodi': {
    purpose: 'Produces the Collatz/Munodi sequence from a starting number down to 1.',
    whyItMatters: "The 'correct' form of the sequence comes from here; it is compared with the one in the file.",
    hint: 'even //2, odd 3n+1.',
    examples: [{ call: 'munodi(3)', result: '[3,10,5,16,8,4,2,1]' }],
  },
  'munodi-fn-parse_sequence': {
    purpose: 'Converts the numbers in a line into a list of ints.',
    whyItMatters: "The line step of get_sequences.",
    hint: 'split + int.',
    examples: [{ call: "'1 2 3'", result: '[1,2,3]' }],
  },
  'railway-management-fn-parse_stop': {
    purpose: 'Turns a Station:hh:min part into (station, (hour, minute)).',
    whyItMatters: 'The atomic unit of the timetable database.',
    hint: "three-part split(':').",
    examples: [{ call: "'Torino:08:15'", result: "('Torino', (8, 15))" }],
  },
  'railway-management-fn-travel_minutes': {
    purpose: 'Converts the duration between two timestamps into minutes.',
    whyItMatters: 'For comparing the shortest journey.',
    hint: '60*Δhour + Δmin.',
    examples: [{ call: '(8,0)→(9,30)', result: '90' }],
  },
  'shells-fn-includes': {
    purpose: 'Checks whether seqx is contained within seqy as a multiset.',
    whyItMatters: 'Whether the basket satisfies the campaign condition.',
    hint: 'count x > count y → False.',
    examples: [{ call: "includes(['a','a'], ['a','a','b'])", result: 'True' }],
  },
  'shells-fn-sum_prices': {
    purpose: 'Computes the total price of the items to be paid for.',
    whyItMatters: 'The source of the final price line.',
    hint: '+= price.',
    examples: [{ call: 'two items 1.5 and 2', result: '3.5' }],
  },
  'soccer-fn-forward_eff': {
    purpose: 'Computes forward efficiency using the formula (g+a-offsides)/minutes.',
    whyItMatters: 'The first step of the efficiency calculations.',
    hint: 'Divide the sum by minutes.',
    examples: [{ call: 'g=2,a=1,o=0,m=90', result: '0.0333...' }],
  },
  'soccer-fn-add_to_team': {
    purpose: 'Adds the player to the list in the team dictionary.',
    whyItMatters: 'Grouping for team-based statistics.',
    hint: 'if missing list().',
    examples: [{ call: 'new team', result: 'teams[team]=[p]' }],
  },
  'strawberry-fn-clean_word': {
    purpose: 'Strips punctuation from a word and converts it to uppercase.',
    whyItMatters: 'Normalize before the triple search.',
    hint: 'strip + upper.',
    examples: [{ call: "clean_word('Hello,')", result: "'HELLO'" }],
  },
  'strawberry-fn-equal_triplet': {
    purpose: 'Checks whether three consecutive words have equal lengths.',
    whyItMatters: 'The condition of the sliding window.',
    hint: 'len equality.',
    examples: [{ call: "('IS','IN','MY')", result: 'True' }],
  },
  'super-calculator-fn-operation': {
    purpose: 'Applies a single + / - / * operation.',
    whyItMatters: 'evaluate_expression calls this at each step.',
    hint: 'three branches.',
    examples: [{ call: "operation('*', 3, 4)", result: '12' }],
  },
  'super-calculator-fn-split_expr': {
    purpose: 'Splits the line into two parts: numbers and operators.',
    whyItMatters: 'Parse the file line before evaluating it.',
    hint: "split by ':'.",
    examples: [{ call: "'1 2 3 : + *'", result: "nums=[1,2,3], ops=['+','*']" }],
  },
  'unsafe-meat-fn-in_range': {
    purpose: 'Checks whether the batch number is within the closed range.',
    whyItMatters: 'The condition of the dangerous batch filter.',
    hint: 'from_ <= batch <= to.',
    examples: [{ call: 'in_range(5, 1, 10)', result: 'True' }],
  },
  'unsafe-meat-fn-parse_range': {
    purpose: "Converts the text '10-20' into the tuple (10, 20).",
    whyItMatters: 'The parse of the report range block.',
    hint: "split('-').",
    examples: [{ call: "parse_range('3-7')", result: '(3, 7)' }],
  },
  'wobbletron3k-fn-is_monotonic': {
    purpose: 'Checks whether the list is strictly increasing or strictly decreasing (using sorted).',
    whyItMatters: 'The first gate of the safety check.',
    hint: 'increasing or decreasing.',
    examples: [
      { call: '[1,2,3]', result: 'True' },
      { call: '[1,3,2]', result: 'False' },
    ],
  },
  'wobbletron3k-fn-gaps_ok': {
    purpose: 'Checks whether the differences between neighboring elements are in the range 1..3.',
    whyItMatters: 'The second rule after passing the monotonic check.',
    hint: 'abs difference ≤ 3.',
    examples: [{ call: '[1,3,6]', result: 'True' }],
  },
  'worms-fn-find_all': {
    purpose: 'Lists all indexes of a word in the sequence.',
    whyItMatters: 'Collect the positions before computing distance.',
    hint: 'enumerate + append.',
    examples: [{ call: "find_all('a', ['a','b','a'])", result: '[0, 2]' }],
  },
  'worms-fn-min_distance': {
    purpose: 'Computes the absolute distance between two indexes.',
    whyItMatters: 'To measure the closest co-occurrence.',
    hint: 'abs(p0-p1).',
    examples: [{ call: 'min_distance(2, 5)', result: '3' }],
  },
}

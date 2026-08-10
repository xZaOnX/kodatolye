import type { FunctionExample } from '../types'

type FnCopy = {
  title?: string
  purpose: string
  hint?: string
  examples?: FunctionExample[]
}

type FullCopy = {
  title?: string
  brief: string
  goalBullets: string[]
  hint?: string
  rubricNotes?: string
}

type PackCopy = {
  examTitle?: string
  summary: string
  functions: Record<string, FnCopy>
  fullProgram: FullCopy
}

/** English overlays for intermediate packs (keyed by examId / challenge id). */
export const intermediatePacksEn: Record<string, PackCopy> = {
  "armstrong": {
    summary: "No scaffolds: write the Armstrong function and file filter from scratch, then run the full program.",
    functions: {
      "armstrong-int-fn-armstrong": {
        purpose: "Return True if the sum of each digit raised to the power of the digit count equals the number. 0 and single-digit numbers count as Armstrong.",
        hint: "power = len(str(number)); each digit int(d) ** power.",
      },
      "armstrong-int-fn-filter": {
        purpose: "Return Armstrong numbers from a list of lines, in order. Skip blank lines and lines that are not valid ints.",
        hint: "strip + try/except ValueError; append when armstrong is True.",
      }
    },
    fullProgram: {
      title: "Full program",
      brief: "Read numbers.txt line by line. Skip blank/invalid lines. Write Armstrong numbers to armstrong.txt in the same order (one number per line).",
      goalBullets: ["Read numbers.txt", "Ignore blank and non-int lines", "Write Armstrong numbers to armstrong.txt"],
      hint: "try/except OSError and ValueError; int after strip.",
      rubricNotes: "Harder than Beginner: blank/invalid lines must be skipped.",
    },
  },
  "ascii-stats": {
    summary: "Write bounds checking and frequency counting from scratch; then run the full program on a small landscape.",
    functions: {
      "ascii-stats-int-fn-bounds": {
        purpose: "Check whether the square with upper-left (x,y) and side N lies fully inside a rows×cols grid.",
        hint: "0 <= x <= cols - size and 0 <= y <= rows - size (size > 0).",
      },
      "ascii-stats-int-fn-count": {
        purpose: "Return character frequencies in the size×size square.",
        hint: "Nested loops; dict.setdefault or Counter.",
      }
    },
    fullProgram: {
      title: "Full program",
      brief: "Read landscape.txt. From stdin read two lines: \"x,y\" then size (do not print prompts). If out of bounds, print exactly: ERROR!! the square to analyze is out of limits. Otherwise print percentages sorted by frequency descending (:4.1f).",
      goalBullets: ["Read landscape.txt", "Read coordinates and size from stdin", "Print ERROR if out of bounds", "Otherwise print percentage stats"],
      hint: "Split coords on comma; percent = count / (size*size) * 100, format :4.1f.",
      rubricNotes: "No scaffolds; stdout format and error string must match exactly.",
    },
  },
  "battleship": {
    summary: "Write shot parsing and hit/miss logic from scratch; simulate a short game from files.",
    functions: {
      "battleship-int-fn-parse": {
        purpose: "Convert 'A,1' … 'J,10' into 0-based (row, col). Raise ValueError on invalid input.",
        hint: "row = ord(letter) - ord('A'); col = int(n) - 1; check ranges.",
      },
      "battleship-int-fn-apply": {
        purpose: "opponent cells are '#' (ship) or '-' (sea). On hit: clear to '-', mark '*', return 'hit'. On miss: mark 'o', return 'miss'.",
        hint: "On hit, remove the ship from the board (# → -).",
      }
    },
    fullProgram: {
      title: "Full program (short scenario)",
      brief: "Simulate short battleship from map1/map2/moves with exact stdout format (Player N / shot / hit|miss / wins / shot maps).",
      goalBullets: ["Read map1.dat, map2.dat, moves.txt", "Apply shots in order and print results", "Announce the winner when ships are gone", "Print shot maps"],
      hint: "Player 1 → map2, Player 2 → map1; stop as soon as someone wins.",
      rubricNotes: "This Intermediate scenario uses small custom maps.",
    },
  },
  "atomic-chess": {
    summary: "Parse squares + count pieces.",
    functions: {
      "atomic-chess-int-fn-square": {
        purpose: "Square to indexes.",
        hint: "a1=(0,0)",
      },
      "atomic-chess-int-fn-player": {
        purpose: "Owner +/-.",
        hint: "startswith",
      }
    },
    fullProgram: {
      title: "Full program",
      brief: "Count White/Black on board.txt.",
      goalBullets: ["Read", "Count", "Print"],
      hint: "+/-",
      rubricNotes: "Count only.",
    },
  },
  "biodiversity": {
    summary: "Duplicate + DNA match counts.",
    functions: {
      "biodiversity-int-fn-dup": {
        purpose: "Track dups.",
        hint: "set",
      },
      "biodiversity-int-fn-dna": {
        purpose: "Substring.",
        hint: "in",
      }
    },
    fullProgram: {
      title: "Full program",
      brief: "Count unique matches per species.",
      goalBullets: ["Read", "Match", "Print"],
      hint: "seen",
      rubricNotes: "Tiny.",
    },
  },
  "chess-selo": {
    summary: "Elo expected + rank with K=32.",
    functions: {
      "chess-selo-int-fn-expected": {
        purpose: "Expected score.",
        hint: "10**",
      },
      "chess-selo-int-fn-ensure": {
        purpose: "Default 1500.",
        hint: "if not in",
      }
    },
    fullProgram: {
      title: "Full program",
      brief: "K=32 Elo rankings.",
      goalBullets: ["Read", "Update", "Sort"],
      hint: "round",
      rubricNotes: "K=32.",
    },
  },
  "connect-four": {
    summary: "Gravity + drop moves; print board.",
    functions: {
      "connect-four-int-fn-bottom": {
        purpose: "Lowest empty row.",
        hint: "from bottom",
      },
      "connect-four-int-fn-horiz": {
        purpose: "Four in a row.",
        hint: "slice",
      }
    },
    fullProgram: {
      title: "Full program",
      brief: "Apply moves; print board.",
      goalBullets: ["Moves", "Drop", "Print"],
      hint: "alternate XO",
      rubricNotes: "Board only.",
    },
  },
  "consumption+production": {
    summary: "Self-consumed total from CSV pair.",
    functions: {
      "consumption+production-int-fn-self": {
        purpose: "min(prod,cons).",
        hint: "min",
      },
      "consumption+production-int-fn-key": {
        purpose: "Composite key.",
        hint: "tuple",
      }
    },
    fullProgram: {
      title: "Full program",
      brief: "Sum self-consumed.",
      goalBullets: ["Read", "Match", "Sum"],
      hint: "min",
      rubricNotes: "One decimal.",
    },
  },
  "crypto": {
    summary: "Portfolio value; max day.",
    functions: {
      "crypto-int-fn-eval": {
        purpose: "Sum qty*price.",
        hint: "loop",
      },
      "crypto-int-fn-add": {
        purpose: "Group prices by day.",
        hint: "setdefault",
      }
    },
    fullProgram: {
      title: "Full program",
      brief: "Print max-value day.",
      goalBullets: ["Read", "Value", "Max"],
      hint: ".2f",
      rubricNotes: "First max.",
    },
  },
  "everwhen": {
    summary: "UTC minutes + day labels.",
    functions: {
      "everwhen-int-fn-mins": {
        purpose: "Minutes with offset.",
        hint: "h*60",
      },
      "everwhen-int-fn-label": {
        purpose: "yesterday/today/tomorrow.",
        hint: "1440",
      }
    },
    fullProgram: {
      title: "Full program",
      brief: "Label each event.",
      goalBullets: ["Read", "Convert", "Label"],
      hint: "offset",
      rubricNotes: "Labels only.",
    },
  },
  "flights-booking": {
    summary: "BOOK/CANCEL with capacity 4.",
    functions: {
      "flights-booking-int-fn-can": {
        purpose: "Capacity check.",
        hint: "rows*cols",
      },
      "flights-booking-int-fn-cancel": {
        purpose: "Remove all seats for name.",
        hint: "while remove",
      }
    },
    fullProgram: {
      title: "Full program",
      brief: "Process booking commands.",
      goalBullets: ["Commands", "Capacity", "Log"],
      hint: "cap 4",
      rubricNotes: "One flight.",
    },
  },
  "freedonia": {
    summary: "Date parse + active rules on query day.",
    functions: {
      "freedonia-int-fn-date": {
        purpose: "Parse dd-mm-yyyy.",
        hint: "y,m,d",
      },
      "freedonia-int-fn-apply": {
        purpose: "Add/remove rules.",
        hint: "set ops",
      }
    },
    fullProgram: {
      title: "Full program",
      brief: "Print active rules for query date.",
      goalBullets: ["Rules", "Apply", "Print"],
      hint: "<= query",
      rubricNotes: "Sorted.",
    },
  },
  "heating": {
    summary: "Parse CSV; monthly totals.",
    functions: {
      "heating-int-fn-parse": {
        purpose: "Parse CSV line.",
        hint: "split comma",
      },
      "heating-int-fn-month": {
        purpose: "Accumulate month.",
        hint: "+=",
      }
    },
    fullProgram: {
      title: "Full program",
      brief: "Print monthly totals.",
      goalBullets: ["Parse", "Sum", "Print"],
      hint: "YYYY-MM",
      rubricNotes: "Sorted months.",
    },
  },
  "linmgoweave": {
    summary: "Score words with uniqueness.",
    functions: {
      "linmgoweave-int-fn-score": {
        purpose: "count*len.",
        hint: "sliding window",
      },
      "linmgoweave-int-fn-unique": {
        purpose: "Zero duplicate scores.",
        hint: "set",
      }
    },
    fullProgram: {
      title: "Full program",
      brief: "Per-word scores + total.",
      goalBullets: ["Score", "Unique", "Total"],
      hint: "repeat→0",
      rubricNotes: "Include total.",
    },
  },
  "magic-boxes": {
    summary: "Place objects into 3 boxes.",
    functions: {
      "magic-boxes-int-fn-find": {
        purpose: "Find same-type or empty box.",
        hint: "two passes",
      },
      "magic-boxes-int-fn-add": {
        purpose: "Add or fail.",
        hint: "append",
      }
    },
    fullProgram: {
      title: "Full program",
      brief: "Simulate 3 boxes.",
      goalBullets: ["Place", "Reject", "Dump"],
      hint: "prefer same",
      rubricNotes: "3 boxes.",
    },
  },
  "misspell": {
    summary: "One-letter misspell counts.",
    functions: {
      "misspell-int-fn-mis": {
        purpose: "Exactly one letter differs.",
        hint: "zip",
      },
      "misspell-int-fn-read": {
        purpose: "Read lines.",
        hint: "strip",
      }
    },
    fullProgram: {
      title: "Full program",
      brief: "Count misspell matches per name.",
      goalBullets: ["Read", "Compare", "Print"],
      hint: "casefold",
      rubricNotes: "Counts.",
    },
  },
  "munodi": {
    summary: "Validate Munodi sequences.",
    functions: {
      "munodi-int-fn-mun": {
        purpose: "Collatz sequence.",
        hint: "3n+1",
      },
      "munodi-int-fn-parse": {
        purpose: "Parse ints.",
        hint: "split",
      }
    },
    fullProgram: {
      title: "Full program",
      brief: "valid/invalid per line.",
      goalBullets: ["Parse", "Compare", "Print"],
      hint: "munodi(first)",
      rubricNotes: "Labels.",
    },
  },
  "railway-management": {
    summary: "Parse stops; route durations.",
    functions: {
      "railway-management-int-fn-stop": {
        purpose: "Parse Station:hh:mm.",
        hint: "split :",
      },
      "railway-management-int-fn-travel": {
        purpose: "Minutes between times.",
        hint: "60*",
      }
    },
    fullProgram: {
      title: "Full program",
      brief: "Print route durations.",
      goalBullets: ["Parse", "Compute", "Print"],
      hint: "first-last",
      rubricNotes: "Two routes.",
    },
  },
  "shells": {
    summary: "Price a basket (plain sum).",
    functions: {
      "shells-int-fn-inc": {
        purpose: "Multiset includes.",
        hint: "count",
      },
      "shells-int-fn-sum": {
        purpose: "Sum item prices.",
        hint: "dict lookup",
      }
    },
    fullProgram: {
      title: "Full program",
      brief: "Print basket total .2f.",
      goalBullets: ["Prices", "Basket", "Sum"],
      hint: ".2f",
      rubricNotes: "No campaign.",
    },
  },
  "soccer": {
    summary: "Best forward by efficiency.",
    functions: {
      "soccer-int-fn-eff": {
        purpose: "Forward efficiency.",
        hint: "(g+a-o)/m",
      },
      "soccer-int-fn-team": {
        purpose: "Group by team.",
        hint: "setdefault",
      }
    },
    fullProgram: {
      title: "Full program",
      brief: "Print best forward.",
      goalBullets: ["Read", "Eff", "Max"],
      hint: ".4f",
      rubricNotes: "One winner.",
    },
  },
  "strawberry": {
    summary: "Count equal-length triplets.",
    functions: {
      "strawberry-int-fn-clean": {
        purpose: "Strip punct + upper.",
        hint: "strip",
      },
      "strawberry-int-fn-trip": {
        purpose: "Equal lengths.",
        hint: "len",
      }
    },
    fullProgram: {
      title: "Full program",
      brief: "Count triplets.",
      goalBullets: ["Clean", "Window", "Count"],
      hint: "punctuation",
      rubricNotes: "Integer count.",
    },
  },
  "super-calculator": {
    summary: "Left-to-right +-* calculator.",
    functions: {
      "super-calculator-int-fn-op": {
        purpose: "One +-* op.",
        hint: "if",
      },
      "super-calculator-int-fn-split": {
        purpose: "Split nums/ops.",
        hint: ":",
      }
    },
    fullProgram: {
      title: "Full program",
      brief: "Evaluate each line LTR.",
      goalBullets: ["Split", "Eval", "Print"],
      hint: "no precedence",
      rubricNotes: "Per line.",
    },
  },
  "unsafe-meat": {
    summary: "Mark batches safe/unsafe.",
    functions: {
      "unsafe-meat-int-fn-range": {
        purpose: "Parse from-to.",
        hint: "split",
      },
      "unsafe-meat-int-fn-in": {
        purpose: "Closed range check.",
        hint: "<=",
      }
    },
    fullProgram: {
      title: "Full program",
      brief: "Label each batch.",
      goalBullets: ["Ranges", "Check", "Print"],
      hint: "any",
      rubricNotes: "safe/unsafe.",
    },
  },
  "wobbletron3k": {
    summary: "Count safe reports.",
    functions: {
      "wobbletron3k-int-fn-mono": {
        purpose: "Strict mono via sorted.",
        hint: "sorted",
      },
      "wobbletron3k-int-fn-gaps": {
        purpose: "Neighbor gaps 1..3.",
        hint: "abs",
      }
    },
    fullProgram: {
      title: "Full program",
      brief: "Print safe count.",
      goalBullets: ["Parse", "Check", "Count"],
      hint: "both",
      rubricNotes: "Integer.",
    },
  },
  "worms": {
    summary: "Min distance between two words.",
    functions: {
      "worms-int-fn-find": {
        purpose: "All indexes of a word.",
        hint: "enumerate",
      },
      "worms-int-fn-dist": {
        purpose: "Absolute distance.",
        hint: "abs",
      }
    },
    fullProgram: {
      title: "Full program",
      brief: "Print min distance.",
      goalBullets: ["Find", "Min", "Print"],
      hint: "pairs",
      rubricNotes: "Integer.",
    },
  }
}

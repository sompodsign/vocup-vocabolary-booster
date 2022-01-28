import re
with open('words.txt', 'r') as f:
    for line in f:
        eng_word = re.findall(r'\w+', line)
        divider = line.strip().index(' - ')
        bng_word = line[divider:].strip()[1:]
        print(eng_word[0], bng_word)


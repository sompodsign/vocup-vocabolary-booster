from django.contrib.auth import get_user_model

from words.models import Word

import re
with open('words.txt', 'r') as f:
    for line in f:
        eng_word = re.findall(r'\w+', line)[0]
        divider = line.strip().index(' - ')
        bng_word = line[divider:].strip()[2:]
        print(eng_word.capitalize(),bng_word.strip())
        Word.objects.create(user=1, word=eng_word.capitalize(), meaning=bng_word.strip())

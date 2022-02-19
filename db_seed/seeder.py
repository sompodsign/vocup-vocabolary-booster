import re
import json


## Code to seed database with dictionary
"""
    import json
    f = open("db_seed/BengaliDictionary.json", 'r', encoding='utf-8-sig', errors='ignore')
    data = json.load(f)
    for i in range(len(data)):
        print(i, data[i])
        prons = data[i].get('pron')
        bn = data[i].get('bn')
        en = data[i].get('en')
        bn_syns = data[i].get('bn_syns')
        en_syns = data[i].get('en_syns')
        sents = data[i].get('sents', [])
        DictWord.objects.create(
            en=en,
            bn=bn,
            pron=prons,
            bn_syn=bn_syns,
            en_syn=en_syns,
            sentence=sents
        )
"""
"""
import pandas as pd
df = pd.read_csv("BengaliDictionary_93.csv")
for i in df.values:
    if i[0] not in words:
        DictWord.objects.create(en=i[0], bn = i[1], pron=[], en_syn=[], bn_syn=[],sentence=[])
        """

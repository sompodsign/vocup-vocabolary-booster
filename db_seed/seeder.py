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

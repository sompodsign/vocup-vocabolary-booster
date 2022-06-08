questions = [
    {
        "identifier": "wild_crop_q_001",
        "question": "List the crops and parcels covered by these management practices",
        "description": "",
        "placeholder": None,
        "answer_type": "wild_crop",
        "serial_no": 1,
        "multiple_answers_allowed": True,
        "required": True,
        "conditions": None,
        "options": []
    },
    {
        "identifier": "wild_crop_q_002",
        "question": "Do you obtain appropriate agency/landowner approval before harvesting?",
        "description": "",
        "placeholder": None,
        "answer_type": "boolean",
        "serial_no": 2,
        "multiple_answers_allowed": False,
        "required": True,
        "conditions": None,
        "options": []
    },
    {
        "identifier": "wild_crop_q_003",
        "question": "Describe how you ensure that your harvesting practices are not environmentally detrimental to the wild crop habitat",
        "description": "",
        "placeholder": None,
        "answer_type": "long_text",
        "serial_no": 5,
        "multiple_answers_allowed": False,
        "required": True,
        "conditions": None,
        "options": []
    },
    {
        "identifier": "wild_crop_q_004",
        "question": "What percentage of the wild crop is harvested?",
        "description": "",
        "placeholder": "%",
        "answer_type": "decimal",
        "serial_no": 6,
        "multiple_answers_allowed": False,
        "required": True,
        "conditions": None,
        "options": []
    },
    {
        "identifier": "wild_crop_q_005",
        "question": "Describe the measures you take to ensure the health and longevity of the wild crop population",
        "description": "",
        "placeholder": "Please Describe",
        "answer_type": "long_text",
        "serial_no": 7,
        "multiple_answers_allowed": False,
        "required": True,
        "conditions": None,
        "options": []
    },
    {
        "identifier": "wild_crop_q_006",
        "question": "Describe how you monitor the health of the wild crop population, and how often monitoring is performed.",
        "description": "",
        "placeholder": None,
        "answer_type": "long_text",
        "serial_no": 8,
        "multiple_answers_allowed": False,
        "required": True,
        "conditions": None,
        "options": []
    },
    {
        "identifier": "wild_crop_q_007",
        "question": "Do any rare, threatened, or endangered species exist in the wild crop harvest area?",
        "description": "",
        "placeholder": None,
        "answer_type": "boolean",
        "serial_no": 9,
        "multiple_answers_allowed": False,
        "required": True,
        "conditions": None,
        "options": []
    },
    {
        "identifier": "wild_crop_q_008",
        "question": "Do you contract 3rd party collectors to harvest the wild crop?",
        "description": "",
        "placeholder": None,
        "answer_type": "boolean",
        "serial_no": 11,
        "multiple_answers_allowed": False,
        "required": True,
        "conditions": None,
        "options": []
    },
    {
        "identifier": "wild_crop_q_009",
        "question": "Does this operation own or is otherwise legally responsible for the land from which wild crops are harvested?",
        "description": "",
        "placeholder": None,
        "answer_type": "boolean",
        "serial_no": 3,
        "multiple_answers_allowed": False,
        "required": True,
        "conditions": {
            "rule": "all",
            "conditions": [
                {
                    "answer": False,
                    "question_identifier": "wild_crop_q_002"
                }
            ]
        },
        "options": []
    },
    {
        "identifier": "wild_crop_q_010",
        "question": "Provide agency/landowner name and information",
        "description": "",
        "placeholder": None,
        "answer_type": "text",
        "serial_no": 4,
        "multiple_answers_allowed": False,
        "required": True,
        "conditions": {
            "rule": "all",
            "conditions": [
                {
                    "answer": True,
                    "question_identifier": "wild_crop_q_002"
                }
            ]
        },
        "options": []
    },
    {
        "identifier": "wild_crop_q_011",
        "question": "Identify the rare, threatened, or endangered plants, insects, and/or animals, that exist within the wild harvest areas and describe the practices in place to address potential or actual impacts of your actions on these species",
        "description": "",
        "placeholder": "Please Describe",
        "answer_type": "long_text",
        "serial_no": 10,
        "multiple_answers_allowed": False,
        "required": True,
        "conditions": {
            "rule": "all",
            "conditions": [
                {
                    "answer": True,
                    "question_identifier": "wild_crop_q_007"
                }
            ]
        },
        "options": []
    },
    {
        "identifier": "wild_crop_q_012",
        "question": "Describe how you ensure each 3rd party collector is informed of your harvesting practices and monitoring procedures",
        "description": "",
        "placeholder": "Please Describe",
        "answer_type": "long_text",
        "serial_no": 12,
        "multiple_answers_allowed": False,
        "required": True,
        "conditions": {
            "rule": "all",
            "conditions": [
                {
                    "answer": True,
                    "question_identifier": "wild_crop_q_008"
                }
            ]
        },
        "options": []
    }
]

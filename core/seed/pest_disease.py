questions = [
    {
        "identifier": "pest_disease_q_001",
        "question": "List the pests, diseases, and weeds (or potential pests, diseases, and weeds) that threaten your crops:",
        "description": "",
        "placeholder": None,
        "answer_type": "threat",
        "serial_no": 1,
        "multiple_answers_allowed": True,
        "required": True,
        "conditions": None,
        "options": []
    },
    {
        "identifier": "pest_disease_q_002",
        "question": "Select all preventative practices you use for management of weeds, pests and diseases:",
        "description": "",
        "placeholder": None,
        "answer_type": "checkbox_multi_select",
        "serial_no": 2,
        "multiple_answers_allowed": True,
        "required": True,
        "conditions": None,
        "options": [
            {
                "option_text": "Crop rotation"
            },
            {
                "option_text": "Release of Beneficial Insects"
            },
            {
                "option_text": "Nutrient management"
            },
            {
                "option_text": "Sanitation"
            },
            {
                "option_text": "Planting resistant varieties"
            },
            {
                "option_text": "Water management"
            },
            {
                "option_text": "Hand weeding"
            },
            {
                "option_text": "Timing of planting"
            },
            {
                "option_text": "Mechanical/physical methods"
            },
            {
                "option_text": "Inter-planting species"
            },
            {
                "option_text": "Cover cropping"
            },
            {
                "option_text": "Trap crops"
            },
            {
                "option_text": "Construct predator habitat"
            },
            {
                "option_text": "Flaming/burning"
            },
            {
                "option_text": "Other:"
            }
        ]
    },
    {
        "identifier": "pest_disease_q_003",
        "question": "Do you use materials for controlling weeds, pests, and/or diseases?",
        "description": "",
        "placeholder": None,
        "answer_type": "boolean",
        "serial_no": 4,
        "multiple_answers_allowed": False,
        "required": True,
        "conditions": None,
        "options": []
    },
    {
        "identifier": "pest_disease_q_004",
        "question": "Do you use plastic mulch, landscape fabric, or other physical weed barriers?",
        "description": "",
        "placeholder": None,
        "answer_type": "boolean",
        "serial_no": 8,
        "multiple_answers_allowed": False,
        "required": True,
        "conditions": None,
        "options": []
    },
    {
        "identifier": "pest_disease_q_005",
        "question": "Do you burn crop residue?",
        "description": "",
        "placeholder": None,
        "answer_type": "boolean",
        "serial_no": 10,
        "multiple_answers_allowed": False,
        "required": True,
        "conditions": None,
        "options": []
    },
    {
        "identifier": "pest_disease_q_006",
        "question": "How do you monitor the effectiveness of your pest, disease, and weed management plan? Select all that apply:",
        "description": "",
        "placeholder": None,
        "answer_type": "radio",
        "serial_no": 13,
        "multiple_answers_allowed": False,
        "required": True,
        "conditions": None,
        "options": [
            {
                "option_text": "Crop health observations"
            },
            {
                "option_text": "Crop yield comparison"
            },
            {
                "option_text": "Pest and disease scouting"
            },
            {
                "option_text": "Pest traps/lures"
            },
            {
                "option_text": "Other:"
            }
        ]
    },
    {
        "identifier": "pest_disease_q_007",
        "question": "Select all preventative practices you use for management of weeds, pests and diseases - Other",
        "description": "",
        "placeholder": None,
        "answer_type": "text",
        "serial_no": 3,
        "multiple_answers_allowed": False,
        "required": True,
        "conditions": {
            "rule": "all",
            "conditions": [
                {
                    "answer": "Other:",
                    "question_identifier": "pest_disease_q_002"
                }
            ]
        },
        "options": []
    },
    {
        "identifier": "pest_disease_q_008",
        "question": "Please list the product names and manufacturers and identify whether a product is used for pests, weeds, or plant diseases",
        "description": "",
        "placeholder": None,
        "answer_type": "material",
        "serial_no": 5,
        "multiple_answers_allowed": True,
        "required": True,
        "conditions": {
            "rule": "all",
            "conditions": [
                {
                    "answer": True,
                    "question_identifier": "pest_disease_q_003"
                }
            ]
        },
        "options": []
    },
    {
        "identifier": "pest_disease_q_009",
        "question": "Describe the conditions that must exist before you will resort to using substances for weed, pest, and/or disease control, select all that apply:",
        "description": "",
        "placeholder": None,
        "answer_type": "checkbox_multi_select",
        "serial_no": 6,
        "multiple_answers_allowed": True,
        "required": True,
        "conditions": {
            "rule": "all",
            "conditions": [
                {
                    "answer": True,
                    "question_identifier": "pest_disease_q_003"
                }
            ]
        },
        "options": [
            {
                "option_text": "Preventative measures fail"
            },
            {
                "option_text": "Economic Thresholds are exceeded"
            },
            {
                "option_text": "Other:"
            }
        ]
    },
    {
        "identifier": "pest_disease_q_010",
        "question": "Identify all plastic mulch, landscape fabric, or other physical weed barriers in use and/or intended for use",
        "description": "",
        "placeholder": None,
        "answer_type": "material",
        "serial_no": 9,
        "multiple_answers_allowed": True,
        "required": True,
        "conditions": {
            "rule": "all",
            "conditions": [
                {
                    "answer": True,
                    "question_identifier": "pest_disease_q_004"
                }
            ]
        },
        "options": []
    },
    {
        "identifier": "pest_disease_q_011",
        "question": "Identify type(s) of crop residue and how often burning is conducted:",
        "description": "",
        "placeholder": None,
        "answer_type": "crop_residue",
        "serial_no": 11,
        "multiple_answers_allowed": True,
        "required": True,
        "conditions": {
            "rule": "all",
            "conditions": [
                {
                    "answer": True,
                    "question_identifier": "pest_disease_q_005"
                }
            ]
        },
        "options": []
    },
    {
        "identifier": "pest_disease_q_012",
        "question": "Which diseases are to be suppressed and/or which seeds require burning to stimulate germination?",
        "description": "",
        "placeholder": None,
        "answer_type": "suppressor",
        "serial_no": 12,
        "multiple_answers_allowed": True,
        "required": True,
        "conditions": {
            "rule": "all",
            "conditions": [
                {
                    "answer": True,
                    "question_identifier": "pest_disease_q_005"
                }
            ]
        },
        "options": []
    },
    {
        "identifier": "pest_disease_q_013",
        "question": "How do you monitor the effectiveness of your pest, disease, and weed management plan? Select all that apply - Other",
        "description": "",
        "placeholder": None,
        "answer_type": "text",
        "serial_no": 14,
        "multiple_answers_allowed": False,
        "required": True,
        "conditions": {
            "rule": "all",
            "conditions": [
                {
                    "answer": "Other:",
                    "question_identifier": "pest_disease_q_006"
                }
            ]
        },
        "options": []
    },
    {
        "identifier": "pest_disease_q_014",
        "question": "Describe the conditions that must exist before you will resort to using substances for weed, pest, and/or disease control, select all that apply - Other",
        "description": "",
        "placeholder": None,
        "answer_type": "text",
        "serial_no": 7,
        "multiple_answers_allowed": False,
        "required": True,
        "conditions": {
            "rule": "all",
            "conditions": [
                {
                    "answer": "Other:",
                    "question_identifier": "pest_disease_q_009"
                }
            ]
        },
        "options": []
    }
]

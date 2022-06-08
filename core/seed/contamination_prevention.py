questions = [
    {
        "identifier": "contamination_prevention_q_001",
        "question": "Is any equipment (planting, application, harvest, washing, or transport) used for both organic and non-organic crops?",
        "description": "",
        "placeholder": None,
        "answer_type": "boolean",
        "serial_no": 1,
        "multiple_answers_allowed": False,
        "required": True,
        "conditions": None,
        "options": []
    },
    {
        "identifier": "contamination_prevention_q_002",
        "question": "Do you irrigate?",
        "description": "",
        "placeholder": None,
        "answer_type": "boolean",
        "serial_no": 3,
        "multiple_answers_allowed": False,
        "required": True,
        "conditions": None,
        "options": []
    },
    {
        "identifier": "contamination_prevention_q_003",
        "question": "Is there any risk of drift of prohibited materials from neighboring non-organic producers onto your organic land?",
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
        "identifier": "contamination_prevention_q_004",
        "question": "Is there any risk of runoff containing prohibited materials onto your organic land?",
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
        "identifier": "contamination_prevention_q_005",
        "question": "Is your organic land bordered by a public road(s)?",
        "description": "",
        "placeholder": None,
        "answer_type": "boolean",
        "serial_no": 13,
        "multiple_answers_allowed": False,
        "required": True,
        "conditions": None,
        "options": []
    },
    {
        "identifier": "contamination_prevention_q_006",
        "question": "Are there any installations of treated lumber located within organic production areas such as treated lumber fencing or treated lumber within organic storage facilities, such that the treated lumber has the potential to come into contact with organic crops?",
        "description": "",
        "placeholder": None,
        "answer_type": "boolean",
        "serial_no": 16,
        "multiple_answers_allowed": False,
        "required": True,
        "conditions": None,
        "options": []
    },
    {
        "identifier": "contamination_prevention_q_007",
        "question": "Do you produce non-organic crops as well as organic crops?",
        "description": "",
        "placeholder": None,
        "answer_type": "boolean",
        "serial_no": 18,
        "multiple_answers_allowed": False,
        "required": True,
        "conditions": None,
        "options": []
    },
    {
        "identifier": "contamination_prevention_q_008",
        "question": "Identify all equipment used for both organic and non-organic production",
        "description": "",
        "placeholder": None,
        "answer_type": "equipment",
        "serial_no": 2,
        "multiple_answers_allowed": False,
        "required": True,
        "conditions": {
            "rule": "all",
            "conditions": [
                {
                    "answer": True,
                    "question_identifier": "contamination_prevention_q_001"
                }
            ]
        },
        "options": []
    },
    {
        "identifier": "contamination_prevention_q_009",
        "question": "What is the source of your water? Select all that apply:",
        "description": "",
        "placeholder": None,
        "answer_type": "checkbox_multi_select",
        "serial_no": 4,
        "multiple_answers_allowed": True,
        "required": True,
        "conditions": {
            "rule": "all",
            "conditions": [
                {
                    "answer": True,
                    "question_identifier": "contamination_prevention_q_002"
                }
            ]
        },
        "options": [
            {
                "option_text": "Municipal"
            },
            {
                "option_text": "Well"
            },
            {
                "option_text": "River/Stream/Spring"
            },
            {
                "option_text": "Pond/Reservoir"
            },
            {
                "option_text": "Irrigation District"
            },
            {
                "option_text": "Other:"
            },
            {
                "option_text": "Catchment/Cistern"
            }
        ]
    },
    {
        "identifier": "contamination_prevention_q_010",
        "question": "How do you verify that the water source is free of contaminants (prohibited substances, pathogenic microorganisms, etc.)?",
        "description": "",
        "placeholder": "Please Describe",
        "answer_type": "long_text",
        "serial_no": 8,
        "multiple_answers_allowed": False,
        "required": True,
        "conditions": {
            "rule": "all",
            "conditions": [
                {
                    "answer": True,
                    "question_identifier": "contamination_prevention_q_002"
                }
            ]
        },
        "options": []
    },
    {
        "identifier": "contamination_prevention_q_011",
        "question": "Is there any risk of drift of prohibited materials from neighboring non-organic producers onto your organic land - Other",
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
                    "question_identifier": "contamination_prevention_q_003"
                }
            ]
        },
        "options": []
    },
    {
        "identifier": "contamination_prevention_q_012",
        "question": "Is there any risk of runoff containing prohibited materials onto your organic land - Other",
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
                    "question_identifier": "contamination_prevention_q_004"
                }
            ]
        },
        "options": []
    },
    {
        "identifier": "contamination_prevention_q_013",
        "question": "Describe the steps have you taken to prevent contamination from roadside management:",
        "description": "",
        "placeholder": None,
        "answer_type": "radio",
        "serial_no": 14,
        "multiple_answers_allowed": False,
        "required": True,
        "conditions": {
            "rule": "all",
            "conditions": [
                {
                    "answer": True,
                    "question_identifier": "contamination_prevention_q_005"
                }
            ]
        },
        "options": [
            {
                "option_text": "\"No spray\" signs"
            },
            {
                "option_text": "Notification of county/city/state"
            },
            {
                "option_text": "Agreements with roadside managers"
            },
            {
                "option_text": "Other:"
            }
        ]
    },
    {
        "identifier": "contamination_prevention_q_014",
        "question": "List any existing or planned installations of treated lumber, and describe how contact with organic crops or livestock is prevented. Treated lumber includes railroad ties, utility poles, and pressure treated wood (corner posts, trellises, beams, fencing, etc.).",
        "description": "",
        "placeholder": None,
        "answer_type": "treated_lumber",
        "serial_no": 17,
        "multiple_answers_allowed": True,
        "required": True,
        "conditions": {
            "rule": "all",
            "conditions": [
                {
                    "answer": True,
                    "question_identifier": "contamination_prevention_q_006"
                }
            ]
        },
        "options": []
    },
    {
        "identifier": "contamination_prevention_q_015",
        "question": "Do you produce the same visually identical crop both organically and non-organically?",
        "description": "",
        "placeholder": None,
        "answer_type": "boolean",
        "serial_no": 19,
        "multiple_answers_allowed": False,
        "required": True,
        "conditions": {
            "rule": "all",
            "conditions": [
                {
                    "answer": True,
                    "question_identifier": "contamination_prevention_q_007"
                }
            ]
        },
        "options": []
    },
    {
        "identifier": "contamination_prevention_q_016",
        "question": "How do you prevent contamination of organic products by non-organic materials and prohibited substances during production and handling?",
        "description": "",
        "placeholder": "Please Describe",
        "answer_type": "long_text",
        "serial_no": 21,
        "multiple_answers_allowed": False,
        "required": True,
        "conditions": {
            "rule": "all",
            "conditions": [
                {
                    "answer": True,
                    "question_identifier": "contamination_prevention_q_007"
                }
            ]
        },
        "options": []
    },
    {
        "identifier": "contamination_prevention_q_017",
        "question": "Is there any risk of runoff from your conventional production fields onto your organic land?",
        "description": "",
        "placeholder": None,
        "answer_type": "boolean",
        "serial_no": 22,
        "multiple_answers_allowed": False,
        "required": True,
        "conditions": {
            "rule": "all",
            "conditions": [
                {
                    "answer": True,
                    "question_identifier": "contamination_prevention_q_007"
                }
            ]
        },
        "options": []
    },
    {
        "identifier": "contamination_prevention_q_018",
        "question": "Provide a list of all materials used in your non-organic production system, including treated seed, fertilizers, pesticides, post-harvest handling sanitizers, etc. It is acceptable to list general",
        "description": "",
        "placeholder": None,
        "answer_type": "conventional_input",
        "serial_no": 24,
        "multiple_answers_allowed": True,
        "required": True,
        "conditions": {
            "rule": "all",
            "conditions": [
                {
                    "answer": True,
                    "question_identifier": "contamination_prevention_q_007"
                }
            ]
        },
        "options": []
    },
    {
        "identifier": "contamination_prevention_q_019",
        "question": "How do you identify and separate the materials listed above from materials used for organic crop production when the products are in storage?",
        "description": "",
        "placeholder": "Please Describe",
        "answer_type": "long_text",
        "serial_no": 25,
        "multiple_answers_allowed": False,
        "required": True,
        "conditions": {
            "rule": "all",
            "conditions": [
                {
                    "answer": True,
                    "question_identifier": "contamination_prevention_q_007"
                }
            ]
        },
        "options": []
    },
    {
        "identifier": "contamination_prevention_q_020",
        "question": "What is the source of your water? Select all that apply: - Other",
        "description": "",
        "placeholder": None,
        "answer_type": "text",
        "serial_no": 5,
        "multiple_answers_allowed": False,
        "required": True,
        "conditions": {
            "rule": "all",
            "conditions": [
                {
                    "answer": "Other:",
                    "question_identifier": "contamination_prevention_q_009"
                }
            ]
        },
        "options": []
    },
    {
        "identifier": "contamination_prevention_q_021",
        "question": "For water supplied by an irrigation district, does the district periodically add any substances to the water system that are prohibited in organic production (e.g., algicide)?",
        "description": "",
        "placeholder": None,
        "answer_type": "boolean",
        "serial_no": 6,
        "multiple_answers_allowed": False,
        "required": True,
        "conditions": {
            "rule": "all",
            "conditions": [
                {
                    "answer": "Irrigation District",
                    "question_identifier": "contamination_prevention_q_009"
                }
            ]
        },
        "options": []
    },
    {
        "identifier": "contamination_prevention_q_022",
        "question": "Describe the steps have you taken to prevent contamination from roadside management: - Other",
        "description": "",
        "placeholder": None,
        "answer_type": "text",
        "serial_no": 15,
        "multiple_answers_allowed": False,
        "required": True,
        "conditions": {
            "rule": "all",
            "conditions": [
                {
                    "answer": "Other:",
                    "question_identifier": "contamination_prevention_q_013"
                }
            ]
        },
        "options": []
    },
    {
        "identifier": "contamination_prevention_q_023",
        "question": "Describe how you prevent the commingling of visually identical organic and non-organic crops (including crops harvested from buffer zones) during production, harvest, transportation from the field, and storage:",
        "description": "",
        "placeholder": "Please Describe",
        "answer_type": "long_text",
        "serial_no": 20,
        "multiple_answers_allowed": False,
        "required": True,
        "conditions": {
            "rule": "all",
            "conditions": [
                {
                    "answer": True,
                    "question_identifier": "contamination_prevention_q_015"
                }
            ]
        },
        "options": []
    },
    {
        "identifier": "contamination_prevention_q_024",
        "question": "Is there any risk of runoff from your conventional production fields onto your organic land - Describe",
        "description": "",
        "placeholder": "Please Describe",
        "answer_type": "long_text",
        "serial_no": 23,
        "multiple_answers_allowed": False,
        "required": True,
        "conditions": {
            "rule": "all",
            "conditions": [
                {
                    "answer": True,
                    "question_identifier": "contamination_prevention_q_017"
                }
            ]
        },
        "options": []
    },
    {
        "identifier": "contamination_prevention_q_025",
        "question": "Provide your plan to monitor and prevent these substances from contaminating your fields and crops.",
        "description": "",
        "placeholder": None,
        "answer_type": "document",
        "serial_no": 7,
        "multiple_answers_allowed": False,
        "required": True,
        "conditions": {
            "rule": "all",
            "conditions": [
                {
                    "answer": True,
                    "question_identifier": "contamination_prevention_q_021"
                }
            ]
        },
        "options": []
    }
]

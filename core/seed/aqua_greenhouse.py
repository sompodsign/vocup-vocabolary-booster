questions = [
    {
        "identifier": "aqua_greenhouse_q_001",
        "question": "Enter your Site Name or ID Code",
        "description": "",
        "placeholder": "Site Name or ID Code",
        "answer_type": "text",
        "serial_no": 1,
        "multiple_answers_allowed": False,
        "required": False,
        "conditions": None,
        "options": []
    },
    {
        "identifier": "aqua_greenhouse_q_002",
        "question": "Enter site Address",
        "description": "",
        "placeholder": "Your Operation",
        "answer_type": "text",
        "serial_no": 2,
        "multiple_answers_allowed": False,
        "required": False,
        "conditions": None,
        "options": []
    },
    {
        "identifier": "aqua_greenhouse_q_003",
        "question": "If this site does not have a physical address, please enter the GPS coordinates.",
        "description": "If this site does not have a physical address, please enter the GPS coordinates.",
        "placeholder": None,
        "answer_type": "location",
        "serial_no": 3,
        "multiple_answers_allowed": False,
        "required": False,
        "conditions": None,
        "options": []
    },
    {
        "identifier": "aqua_greenhouse_q_004",
        "question": "Total acres or sq ft to be certified organic at this location",
        "description": "",
        "placeholder": "Square Feet",
        "answer_type": "text",
        "serial_no": 4,
        "multiple_answers_allowed": False,
        "required": True,
        "conditions": None,
        "options": []
    },
    {
        "identifier": "aqua_greenhouse_q_005",
        "question": "List all crops currently and/or planned to be grown at this site and the area in sq footage for each crop",
        "description": "",
        "placeholder": None,
        "answer_type": "crop",
        "serial_no": 5,
        "multiple_answers_allowed": True,
        "required": False,
        "conditions": None,
        "options": []
    },
    {
        "identifier": "aqua_greenhouse_q_006",
        "question": "Attach an 8 1/2” x 11” aerial photo, diagram, or other map that clearly shows the production area. The map must be legible and in ink.",
        "description": "",
        "placeholder": None,
        "answer_type": "document",
        "serial_no": 6,
        "multiple_answers_allowed": False,
        "required": True,
        "conditions": None,
        "options": []
    },
    {
        "identifier": "aqua_greenhouse_q_007",
        "question": "Attach a schematic flow chart or complete written description of where and how the product is produced, processed, packaged, and stored. Identify all equipment, processes, pest control materials, and storage areas. Attach additional pages as necessary.",
        "description": "",
        "placeholder": None,
        "answer_type": "document",
        "serial_no": 7,
        "multiple_answers_allowed": False,
        "required": False,
        "conditions": None,
        "options": []
    },
    {
        "identifier": "aqua_greenhouse_q_008",
        "question": "What media is used to support plant roots? (ex. Coco coir, compost, perlite, etc.)",
        "description": "",
        "placeholder": None,
        "answer_type": "material",
        "serial_no": 9,
        "multiple_answers_allowed": True,
        "required": False,
        "conditions": None,
        "options": []
    },
    {
        "identifier": "aqua_greenhouse_q_009",
        "question": "How do you support pollinators and natural enemy insects inside the greenhouse?",
        "description": "",
        "placeholder": None,
        "answer_type": "radio",
        "serial_no": 10,
        "multiple_answers_allowed": False,
        "required": True,
        "conditions": None,
        "options": [
            {
                "option_text": "Short native flowers planted in the ground"
            },
            {
                "option_text": "Other:"
            },
            {
                "option_text": "Potted nonnative or native flowering plants"
            }
        ]
    },
    {
        "identifier": "aqua_greenhouse_q_010",
        "question": "If the land outside the greenhouse is certified, how do you increase biodiversity and protect against erosion?",
        "description": "",
        "placeholder": None,
        "answer_type": "checkbox_multi_select",
        "serial_no": 12,
        "multiple_answers_allowed": True,
        "required": True,
        "conditions": None,
        "options": [
            {
                "option_text": "Plant short, non-shading native grasses, forbs or shrubs"
            },
            {
                "option_text": "Filter strip"
            },
            {
                "option_text": "Grassed waterway"
            },
            {
                "option_text": "Direct runoff into pond"
            },
            {
                "option_text": "Other:"
            }
        ]
    },
    {
        "identifier": "aqua_greenhouse_q_011",
        "question": "Do you use any aquaponics system?",
        "description": "",
        "placeholder": None,
        "answer_type": "boolean",
        "serial_no": 14,
        "multiple_answers_allowed": False,
        "required": True,
        "conditions": None,
        "options": []
    },
    {
        "identifier": "aqua_greenhouse_q_012",
        "question": "Describe your production system",
        "description": "",
        "placeholder": None,
        "answer_type": "text",
        "serial_no": 8,
        "multiple_answers_allowed": False,
        "required": True,
        "conditions": None,
        "options": []
    },
    {
        "identifier": "aqua_greenhouse_q_013",
        "question": "How do you support pollinators and natural enemy insects inside the greenhouse - Other",
        "description": "",
        "placeholder": None,
        "answer_type": "text",
        "serial_no": 11,
        "multiple_answers_allowed": False,
        "required": True,
        "conditions": {
            "rule": "all",
            "conditions": [
                {
                    "answer": "Other:",
                    "question_identifier": "aqua_greenhouse_q_009"
                }
            ]
        },
        "options": []
    },
    {
        "identifier": "aqua_greenhouse_q_014",
        "question": "If the land outside the greenhouse is certified, how do you increase biodiversity and protect against erosion - Other",
        "description": "",
        "placeholder": None,
        "answer_type": "text",
        "serial_no": 13,
        "multiple_answers_allowed": False,
        "required": True,
        "conditions": {
            "rule": "all",
            "conditions": [
                {
                    "answer": "Other:",
                    "question_identifier": "aqua_greenhouse_q_010"
                }
            ]
        },
        "options": []
    },
    {
        "identifier": "aqua_greenhouse_q_015",
        "question": "Identify all chemicals/inputs used to balance pH, soften, sterilize, or otherwise adjust your water supply.",
        "description": "",
        "placeholder": None,
        "answer_type": "material",
        "serial_no": 15,
        "multiple_answers_allowed": True,
        "required": False,
        "conditions": {
            "rule": "all",
            "conditions": [
                {
                    "answer": True,
                    "question_identifier": "aqua_greenhouse_q_011"
                }
            ]
        },
        "options": []
    },
    {
        "identifier": "aqua_greenhouse_q_016",
        "question": "Identify the support system(s) used to grow your crops (e.g., containers, rafts, fabric, bags, etc)",
        "description": "",
        "placeholder": None,
        "answer_type": "material",
        "serial_no": 16,
        "multiple_answers_allowed": True,
        "required": False,
        "conditions": {
            "rule": "all",
            "conditions": [
                {
                    "answer": True,
                    "question_identifier": "aqua_greenhouse_q_011"
                }
            ]
        },
        "options": []
    },
    {
        "identifier": "aqua_greenhouse_q_017",
        "question": "Do you incorporate fish in your production system?",
        "description": "",
        "placeholder": None,
        "answer_type": "boolean",
        "serial_no": 17,
        "multiple_answers_allowed": False,
        "required": True,
        "conditions": {
            "rule": "all",
            "conditions": [
                {
                    "answer": True,
                    "question_identifier": "aqua_greenhouse_q_011"
                }
            ]
        },
        "options": []
    },
    {
        "identifier": "aqua_greenhouse_q_018",
        "question": "Do your fish require medications or any other chemicals other than fish feed?",
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
                    "question_identifier": "aqua_greenhouse_q_011"
                }
            ]
        },
        "options": []
    },
    {
        "identifier": "aqua_greenhouse_q_019",
        "question": "How do you dispose of water during cleanout/recharge? Do you have any other discharge of nutrients, waste, or water from your system?",
        "description": "",
        "placeholder": None,
        "answer_type": "boolean",
        "serial_no": 21,
        "multiple_answers_allowed": False,
        "required": True,
        "conditions": {
            "rule": "all",
            "conditions": [
                {
                    "answer": True,
                    "question_identifier": "aqua_greenhouse_q_011"
                }
            ]
        },
        "options": []
    },
    {
        "identifier": "aqua_greenhouse_q_020",
        "question": "How do you ensure discharge does not contaminate the surrounding environment (including waterways, soil, etc.)?",
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
                    "question_identifier": "aqua_greenhouse_q_011"
                }
            ]
        },
        "options": []
    },
    {
        "identifier": "aqua_greenhouse_q_021",
        "question": "Do you incorporate fish in your production system - Other",
        "description": "",
        "placeholder": "Describe your fish production system",
        "answer_type": "long_text",
        "serial_no": 18,
        "multiple_answers_allowed": False,
        "required": True,
        "conditions": {
            "rule": "all",
            "conditions": [
                {
                    "answer": True,
                    "question_identifier": "aqua_greenhouse_q_017"
                }
            ]
        },
        "options": []
    },
    {
        "identifier": "aqua_greenhouse_q_022",
        "question": "Do your fish require medications or any other chemicals other than fish feed - Other",
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
                    "question_identifier": "aqua_greenhouse_q_018"
                }
            ]
        },
        "options": []
    },
    {
        "identifier": "aqua_greenhouse_q_023",
        "question": "How do you dispose of water during cleanout/recharge? Do you have any other discharge of nutrients, waste, or water from your system - Other",
        "description": "",
        "placeholder": "Please Describe",
        "answer_type": "long_text",
        "serial_no": 22,
        "multiple_answers_allowed": False,
        "required": True,
        "conditions": {
            "rule": "all",
            "conditions": [
                {
                    "answer": True,
                    "question_identifier": "aqua_greenhouse_q_019"
                }
            ]
        },
        "options": []
    }
]

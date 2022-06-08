questions = [
    {
        "identifier": "record_keeping_q_001",
        "question": "Indicate which types of records you currently maintain or plan to maintain for your organic production: - Documents",
        "description": "",
        "placeholder": None,
        "answer_type": "checkbox_multi_select",
        "serial_no": 1,
        "multiple_answers_allowed": True,
        "required": True,
        "conditions": None,
        "options": [
            {
                "option_text": "Copy of my Organic System Plan"
            },
            {
                "option_text": "Organic seed search documentation"
            },
            {
                "option_text": "Receipts for inputs purchased for crop production (seeds, transplants, fertilizers, pesticides, sanitizers etc.)"
            },
            {
                "option_text": "Clean truck affidavits and/or other clean transport records"
            },
            {
                "option_text": "Shipping records, such as Bills of Lading, delivery receipts, receiving documents, etc."
            },
            {
                "option_text": "Documentation of transactions with co-packers"
            },
            {
                "option_text": "Organic certificates from organic operations with which business is conducted"
            },
            {
                "option_text": "Sales records (grower statements, farmers’ market load lists, produce stand inventories, delivery records, etc.)"
            },
            {
                "option_text": "Import documentation, as applicable, for any organic agricultural products your operation has imported (e.g. seed)"
            },
            {
                "option_text": "Purchase and sales records for products that are brokered or resold"
            },
            {
                "option_text": "Equipment cleaning and/or sanitation logs"
            },
            {
                "option_text": "Clean truck affidavits and/or other clean transport records"
            },
            {
                "option_text": "Shipping records, such as Bills of Lading, delivery receipts, receiving documents, etc."
            },
            {
                "option_text": "Documentation of transactions with co-packers"
            },
            {
                "option_text": "Organic certificates from organic operations with which business is conducted"
            },
            {
                "option_text": "Sales records (grower statements, farmers’ market load lists, produce stand inventories, delivery records, etc.)"
            },
            {
                "option_text": "Import documentation, as applicable, for any organic agricultural products your operation has imported (e.g. seed)"
            },
            {
                "option_text": "Purchase and sales records for products that are brokered or resold"
            }
        ]
    },
    {
        "identifier": "record_keeping_q_002",
        "question": "Indicate which types of records you currently maintain or plan to maintain for your organic production: - Activity Logs",
        "description": "",
        "placeholder": None,
        "answer_type": "checkbox_multi_select",
        "serial_no": 13,
        "multiple_answers_allowed": True,
        "required": True,
        "conditions": None,
        "options": [
            {
                "option_text": "Planting records that show rotations and/or crops and plantings"
            },
            {
                "option_text": "Input application records that show all materials applied with date, rate and location"
            },
            {
                "option_text": "Compost production: time, turns, and temperature log"
            },
            {
                "option_text": "Monitoring records (soil/tissue analysis, pest/disease surveys water sampling, etc.)"
            },
            {
                "option_text": "Harvest records / field tags with field identification, date crop name, and quantities"
            },
            {
                "option_text": "Post-harvest activities (washing, grading, processing, cooling/freezing, packing, etc.)"
            },
            {
                "option_text": "Storage records/inventories"
            },
            {
                "option_text": "Equipment cleaning and/or sanitation logs"
            }
        ]
    },
    {
        "identifier": "record_keeping_q_003",
        "question": "How do your records trace from sale/disposition through transport, storage, packaging, and harvest, to the field of production?",
        "description": "",
        "placeholder": None,
        "answer_type": "checkbox_multi_select",
        "serial_no": 22,
        "multiple_answers_allowed": True,
        "required": True,
        "conditions": None,
        "options": [
            {
                "option_text": "Lot numbers"
            },
            {
                "option_text": "Field numbers or names"
            },
            {
                "option_text": "Farm name (if the operation is all organic with only one field)"
            },
            {
                "option_text": "Other:"
            }
        ]
    },
    {
        "identifier": "record_keeping_q_004",
        "question": "What method(s) do you use to keep records?",
        "description": "",
        "placeholder": None,
        "answer_type": "checkbox_multi_select",
        "serial_no": 24,
        "multiple_answers_allowed": True,
        "required": True,
        "conditions": None,
        "options": [
            {
                "option_text": "Paper/Notebooks"
            },
            {
                "option_text": "Computer Software/Spreadsheet"
            },
            {
                "option_text": "Phone App"
            },
            {
                "option_text": "Online/Cloud Program"
            },
            {
                "option_text": "Other:"
            }
        ]
    },
    {
        "identifier": "record_keeping_q_005",
        "question": "Do you maintain organic records for a minimum of five (5) years?",
        "description": "",
        "placeholder": None,
        "answer_type": "boolean",
        "serial_no": 26,
        "multiple_answers_allowed": False,
        "required": True,
        "conditions": None,
        "options": []
    },
    {
        "identifier": "record_keeping_q_006",
        "question": "Do you produce both organic and non-organic crops?",
        "description": "",
        "placeholder": None,
        "answer_type": "boolean",
        "serial_no": 27,
        "multiple_answers_allowed": False,
        "required": True,
        "conditions": None,
        "options": []
    },
    {
        "identifier": "record_keeping_q_007",
        "question": "Copy of my Organic System Plan - Document",
        "description": "",
        "placeholder": None,
        "answer_type": "document",
        "serial_no": 2,
        "multiple_answers_allowed": False,
        "required": True,
        "conditions": {
            "rule": "all",
            "conditions": [
                {
                    "answer": "Copy of my Organic System Plan",
                    "question_identifier": "record_keeping_q_001"
                }
            ]
        },
        "options": []
    },
    {
        "identifier": "record_keeping_q_008",
        "question": "Organic seed search documentation - Document",
        "description": "",
        "placeholder": None,
        "answer_type": "document",
        "serial_no": 3,
        "multiple_answers_allowed": False,
        "required": True,
        "conditions": {
            "rule": "all",
            "conditions": [
                {
                    "answer": "Organic seed search documentation",
                    "question_identifier": "record_keeping_q_001"
                }
            ]
        },
        "options": []
    },
    {
        "identifier": "record_keeping_q_009",
        "question": "Receipts for inputs purchased for crop production (seeds, transplants, fertilizers, pesticides, sanitizers etc.)",
        "description": "",
        "placeholder": None,
        "answer_type": "document",
        "serial_no": 4,
        "multiple_answers_allowed": False,
        "required": True,
        "conditions": {
            "rule": "all",
            "conditions": [
                {
                    "answer": "Receipts for inputs purchased for crop production (seeds, transplants, fertilizers, pesticides, sanitizers etc.)",
                    "question_identifier": "record_keeping_q_001"
                }
            ]
        },
        "options": []
    },
    {
        "identifier": "record_keeping_q_010",
        "question": "Clean truck affidavits and/or other clean transport records - Document",
        "description": "",
        "placeholder": None,
        "answer_type": "document",
        "serial_no": 5,
        "multiple_answers_allowed": False,
        "required": True,
        "conditions": {
            "rule": "all",
            "conditions": [
                {
                    "answer": "Clean truck affidavits and/or other clean transport records",
                    "question_identifier": "record_keeping_q_001"
                }
            ]
        },
        "options": []
    },
    {
        "identifier": "record_keeping_q_011",
        "question": "Shipping records, such as Bills of Lading, delivery receipts, receiving documents, etc. - Document",
        "description": "",
        "placeholder": None,
        "answer_type": "document",
        "serial_no": 6,
        "multiple_answers_allowed": False,
        "required": True,
        "conditions": {
            "rule": "all",
            "conditions": [
                {
                    "answer": "Shipping records, such as Bills of Lading, delivery receipts, receiving documents, etc.",
                    "question_identifier": "record_keeping_q_001"
                }
            ]
        },
        "options": []
    },
    {
        "identifier": "record_keeping_q_012",
        "question": "Documentation of transactions with co-packers - Document",
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
                    "answer": "Documentation of transactions with co-packers",
                    "question_identifier": "record_keeping_q_001"
                }
            ]
        },
        "options": []
    },
    {
        "identifier": "record_keeping_q_013",
        "question": "Organic certificates from organic operations with which business is conducted - Document",
        "description": "",
        "placeholder": None,
        "answer_type": "document",
        "serial_no": 8,
        "multiple_answers_allowed": False,
        "required": True,
        "conditions": {
            "rule": "all",
            "conditions": [
                {
                    "answer": "Organic certificates from organic operations with which business is conducted",
                    "question_identifier": "record_keeping_q_001"
                }
            ]
        },
        "options": []
    },
    {
        "identifier": "record_keeping_q_014",
        "question": "Sales records (grower statements, farmers’ market load lists, produce stand inventories, delivery records, etc.) - Document",
        "description": "",
        "placeholder": None,
        "answer_type": "document",
        "serial_no": 9,
        "multiple_answers_allowed": False,
        "required": True,
        "conditions": {
            "rule": "all",
            "conditions": [
                {
                    "answer": "Sales records (grower statements, farmers’ market load lists, produce stand inventories, delivery records, etc.)",
                    "question_identifier": "record_keeping_q_001"
                }
            ]
        },
        "options": []
    },
    {
        "identifier": "record_keeping_q_015",
        "question": "Import documentation, as applicable, for any organic agricultural products your operation has imported (e.g. seed) - Document",
        "description": "",
        "placeholder": None,
        "answer_type": "document",
        "serial_no": 10,
        "multiple_answers_allowed": False,
        "required": True,
        "conditions": {
            "rule": "all",
            "conditions": [
                {
                    "answer": "Import documentation, as applicable, for any organic agricultural products your operation has imported (e.g. seed)",
                    "question_identifier": "record_keeping_q_001"
                }
            ]
        },
        "options": []
    },
    {
        "identifier": "record_keeping_q_016",
        "question": "Purchase and sales records for products that are brokered or resold - Document",
        "description": "",
        "placeholder": None,
        "answer_type": "document",
        "serial_no": 11,
        "multiple_answers_allowed": False,
        "required": True,
        "conditions": {
            "rule": "all",
            "conditions": [
                {
                    "answer": "Purchase and sales records for products that are brokered or resold",
                    "question_identifier": "record_keeping_q_001"
                }
            ]
        },
        "options": []
    },
    {
        "identifier": "record_keeping_q_017",
        "question": "Equipment cleaning and/or sanitation logs - Document",
        "description": "",
        "placeholder": None,
        "answer_type": "document",
        "serial_no": 12,
        "multiple_answers_allowed": False,
        "required": True,
        "conditions": {
            "rule": "all",
            "conditions": [
                {
                    "answer": "Equipment cleaning and/or sanitation logs",
                    "question_identifier": "record_keeping_q_001"
                }
            ]
        },
        "options": []
    },
    {
        "identifier": "record_keeping_q_018",
        "question": "Planting records that show rotations and/or crops and plantings - Document",
        "description": "",
        "placeholder": None,
        "answer_type": "document",
        "serial_no": 14,
        "multiple_answers_allowed": False,
        "required": True,
        "conditions": {
            "rule": "all",
            "conditions": [
                {
                    "answer": "Planting records that show rotations and/or crops and plantings",
                    "question_identifier": "record_keeping_q_002"
                }
            ]
        },
        "options": []
    },
    {
        "identifier": "record_keeping_q_019",
        "question": "Input application records that show all materials applied with date, rate and location - Document",
        "description": "",
        "placeholder": None,
        "answer_type": "document",
        "serial_no": 15,
        "multiple_answers_allowed": False,
        "required": True,
        "conditions": {
            "rule": "all",
            "conditions": [
                {
                    "answer": "Input application records that show all materials applied with date, rate and location",
                    "question_identifier": "record_keeping_q_002"
                }
            ]
        },
        "options": []
    },
    {
        "identifier": "record_keeping_q_020",
        "question": "Compost production: time, turns, and temperature log - Document",
        "description": "",
        "placeholder": None,
        "answer_type": "document",
        "serial_no": 16,
        "multiple_answers_allowed": False,
        "required": True,
        "conditions": {
            "rule": "all",
            "conditions": [
                {
                    "answer": "Compost production: time, turns, and temperature log",
                    "question_identifier": "record_keeping_q_002"
                }
            ]
        },
        "options": []
    },
    {
        "identifier": "record_keeping_q_021",
        "question": "Monitoring records (soil/tissue analysis, pest/disease surveys water sampling, etc.) - Document",
        "description": "",
        "placeholder": None,
        "answer_type": "document",
        "serial_no": 17,
        "multiple_answers_allowed": False,
        "required": True,
        "conditions": {
            "rule": "all",
            "conditions": [
                {
                    "answer": "Monitoring records (soil/tissue analysis, pest/disease surveys water sampling, etc.)",
                    "question_identifier": "record_keeping_q_002"
                }
            ]
        },
        "options": []
    },
    {
        "identifier": "record_keeping_q_022",
        "question": "Harvest records / field tags with field identification, date crop name, and quantities - Document",
        "description": "",
        "placeholder": None,
        "answer_type": "document",
        "serial_no": 18,
        "multiple_answers_allowed": False,
        "required": True,
        "conditions": {
            "rule": "all",
            "conditions": [
                {
                    "answer": "Harvest records / field tags with field identification, date crop name, and quantities",
                    "question_identifier": "record_keeping_q_002"
                }
            ]
        },
        "options": []
    },
    {
        "identifier": "record_keeping_q_023",
        "question": "Post-harvest activities (washing, grading, processing, cooling/freezing, packing, etc.) - Other",
        "description": "",
        "placeholder": None,
        "answer_type": "document",
        "serial_no": 19,
        "multiple_answers_allowed": False,
        "required": True,
        "conditions": {
            "rule": "all",
            "conditions": [
                {
                    "answer": "Post-harvest activities (washing, grading, processing, cooling/freezing, packing, etc.)",
                    "question_identifier": "record_keeping_q_002"
                }
            ]
        },
        "options": []
    },
    {
        "identifier": "record_keeping_q_024",
        "question": "Storage records/inventories - Document",
        "description": "",
        "placeholder": None,
        "answer_type": "document",
        "serial_no": 20,
        "multiple_answers_allowed": False,
        "required": True,
        "conditions": {
            "rule": "all",
            "conditions": [
                {
                    "answer": "Storage records/inventories",
                    "question_identifier": "record_keeping_q_002"
                }
            ]
        },
        "options": []
    },
    {
        "identifier": "record_keeping_q_025",
        "question": "Equipment cleaning and/or sanitation logs - Document",
        "description": "",
        "placeholder": None,
        "answer_type": "document",
        "serial_no": 21,
        "multiple_answers_allowed": False,
        "required": True,
        "conditions": {
            "rule": "all",
            "conditions": [
                {
                    "answer": "Equipment cleaning and/or sanitation logs",
                    "question_identifier": "record_keeping_q_002"
                }
            ]
        },
        "options": []
    },
    {
        "identifier": "record_keeping_q_026",
        "question": "How do your records trace from sale/disposition through transport, storage, packaging, and harvest, to the field of production - Other",
        "description": "",
        "placeholder": None,
        "answer_type": "text",
        "serial_no": 23,
        "multiple_answers_allowed": False,
        "required": True,
        "conditions": {
            "rule": "all",
            "conditions": [
                {
                    "answer": "Other:",
                    "question_identifier": "record_keeping_q_003"
                }
            ]
        },
        "options": []
    },
    {
        "identifier": "record_keeping_q_027",
        "question": "What method(s) do you use to keep records - Other",
        "description": "",
        "placeholder": None,
        "answer_type": "text",
        "serial_no": 25,
        "multiple_answers_allowed": False,
        "required": True,
        "conditions": {
            "rule": "all",
            "conditions": [
                {
                    "answer": "Other:",
                    "question_identifier": "record_keeping_q_004"
                }
            ]
        },
        "options": []
    },
    {
        "identifier": "record_keeping_q_028",
        "question": "How do your input records distinguish between materials used on organic and non-organic crops?",
        "description": "",
        "placeholder": "Please Explain",
        "answer_type": "long_text",
        "serial_no": 28,
        "multiple_answers_allowed": False,
        "required": True,
        "conditions": {
            "rule": "all",
            "conditions": [
                {
                    "answer": True,
                    "question_identifier": "record_keeping_q_006"
                }
            ]
        },
        "options": []
    },
    {
        "identifier": "record_keeping_q_029",
        "question": "How do your harvest, shipping, and sales records distinguish between organic and non-organic product?",
        "description": "",
        "placeholder": "Please Explain",
        "answer_type": "long_text",
        "serial_no": 29,
        "multiple_answers_allowed": False,
        "required": True,
        "conditions": {
            "rule": "all",
            "conditions": [
                {
                    "answer": True,
                    "question_identifier": "record_keeping_q_006"
                }
            ]
        },
        "options": []
    }
]

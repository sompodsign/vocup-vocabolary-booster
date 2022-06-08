questions = [
    {
        "identifier": "crop_fertility_q_001",
        "question": "Select all tillage practices in use throughout the season",
        "description": "",
        "placeholder": None,
        "answer_type": "checkbox_multi_select",
        "serial_no": 1,
        "multiple_answers_allowed": True,
        "required": True,
        "conditions": None,
        "options": [
            {
                "option_text": "No-till"
            },
            {
                "option_text": "Discing"
            },
            {
                "option_text": "Ripping"
            },
            {
                "option_text": "Mowing/weeding"
            },
            {
                "option_text": "Manual / hand digging"
            },
            {
                "option_text": "Other:"
            }
        ]
    },
    {
        "identifier": "crop_fertility_q_002",
        "question": "Indicate practices in use to protect the soil and minimize erosion",
        "description": "",
        "placeholder": None,
        "answer_type": "checkbox_multi_select",
        "serial_no": 3,
        "multiple_answers_allowed": True,
        "required": True,
        "conditions": None,
        "options": [
            {
                "option_text": "No Erosion"
            },
            {
                "option_text": "Conservation (minimum tillage)"
            },
            {
                "option_text": "Contour farming"
            },
            {
                "option_text": "Leveling"
            },
            {
                "option_text": "Cover crop/winter cover"
            },
            {
                "option_text": "Micro-irrigation"
            },
            {
                "option_text": "Terraces"
            },
            {
                "option_text": "Strip cropping"
            },
            {
                "option_text": "Permanent ground cover"
            },
            {
                "option_text": "Windbreaks"
            },
            {
                "option_text": "Other:"
            }
        ]
    },
    {
        "identifier": "crop_fertility_q_003",
        "question": "Please describe your crop rotation plan",
        "description": "",
        "placeholder": "Please Describe",
        "answer_type": "long_text",
        "serial_no": 5,
        "multiple_answers_allowed": False,
        "required": True,
        "conditions": None,
        "options": []
    },
    {
        "identifier": "crop_fertility_q_004",
        "question": "For perennial cropping systems (e.g., orchard, grove, bog, pasture) select all biodiversity practices used in lieu of rotation:",
        "description": "",
        "placeholder": None,
        "answer_type": "checkbox_multi_select",
        "serial_no": 6,
        "multiple_answers_allowed": True,
        "required": True,
        "conditions": None,
        "options": [
            {
                "option_text": "Native grasses/natural vegetation"
            },
            {
                "option_text": "Diverse mixtures of native trees/shrubs/grasses/forbs"
            },
            {
                "option_text": "Hedgerows"
            },
            {
                "option_text": "Windbreaks"
            },
            {
                "option_text": "Replace weedy areas with native plants"
            },
            {
                "option_text": "Insectary plants"
            },
            {
                "option_text": "Cover crops"
            },
            {
                "option_text": "Intercropping/Alley cropping"
            },
            {
                "option_text": "Allow flowers to go to seed"
            },
            {
                "option_text": "Other:"
            }
        ]
    },
    {
        "identifier": "crop_fertility_q_005",
        "question": "Do you apply uncomposted (raw) animal manure OR is any raw manure applied via grazing livestock on your organic land?",
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
        "identifier": "crop_fertility_q_006",
        "question": "Do you produce or purchase compost?",
        "description": "",
        "placeholder": None,
        "answer_type": "checkbox_multi_select",
        "serial_no": 14,
        "multiple_answers_allowed": True,
        "required": True,
        "conditions": None,
        "options": [
            {
                "option_text": "I produce compost that contains manure"
            },
            {
                "option_text": "I produce compost that does not contain manure"
            },
            {
                "option_text": "I purchase compost that contains manure"
            },
            {
                "option_text": "I purchase compost that does not contain manure"
            },
            {
                "option_text": "I do not purchase, produce, or use any compost"
            }
        ]
    },
    {
        "identifier": "crop_fertility_q_007",
        "question": "Do you apply micronutrients (boron, zinc, copper, etc.)?",
        "description": "",
        "placeholder": None,
        "answer_type": "boolean",
        "serial_no": 20,
        "multiple_answers_allowed": False,
        "required": True,
        "conditions": None,
        "options": []
    },
    {
        "identifier": "crop_fertility_q_008",
        "question": "Indicate how you monitor the effectiveness of your fertility management plan (select all that apply):",
        "description": "",
        "placeholder": None,
        "answer_type": "checkbox_multi_select",
        "serial_no": 22,
        "multiple_answers_allowed": True,
        "required": True,
        "conditions": None,
        "options": [
            {
                "option_text": "Soil observation"
            },
            {
                "option_text": "Crop health observation"
            },
            {
                "option_text": "Crop yield comparison"
            },
            {
                "option_text": "Soil analysis"
            },
            {
                "option_text": "Crop quality analysis"
            },
            {
                "option_text": "Plant tissue analysis"
            },
            {
                "option_text": "Microbiological analysis"
            },
            {
                "option_text": "Other:"
            }
        ]
    },
    {
        "identifier": "crop_fertility_q_009",
        "question": "Do you use crop or soil tests / lab analysis?",
        "description": "",
        "placeholder": None,
        "answer_type": "boolean",
        "serial_no": 24,
        "multiple_answers_allowed": False,
        "required": True,
        "conditions": None,
        "options": []
    },
    {
        "identifier": "crop_fertility_q_010",
        "question": "Select all tillage practices in use throughout the season - Other",
        "description": "",
        "placeholder": None,
        "answer_type": "text",
        "serial_no": 2,
        "multiple_answers_allowed": False,
        "required": True,
        "conditions": {
            "rule": "all",
            "conditions": [
                {
                    "answer": "Other:",
                    "question_identifier": "crop_fertility_q_001"
                }
            ]
        },
        "options": []
    },
    {
        "identifier": "crop_fertility_q_011",
        "question": "Indicate practices in use to protect the soil and minimize erosion - other",
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
                    "answer": "Other:",
                    "question_identifier": "crop_fertility_q_002"
                }
            ]
        },
        "options": []
    },
    {
        "identifier": "crop_fertility_q_012",
        "question": "For perennial cropping systems (e.g., orchard, grove, bog, pasture) select all biodiversity practices used in lieu of rotation: - Other",
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
                    "question_identifier": "crop_fertility_q_004"
                }
            ]
        },
        "options": []
    },
    {
        "identifier": "crop_fertility_q_013",
        "question": "Is the manure purchased or produced off-farm?",
        "description": "",
        "placeholder": None,
        "answer_type": "boolean",
        "serial_no": 9,
        "multiple_answers_allowed": False,
        "required": True,
        "conditions": {
            "rule": "all",
            "conditions": [
                {
                    "answer": True,
                    "question_identifier": "crop_fertility_q_005"
                }
            ]
        },
        "options": []
    },
    {
        "identifier": "crop_fertility_q_014",
        "question": "Is the manure applied to crops intended for human consumption?",
        "description": "",
        "placeholder": None,
        "answer_type": "boolean",
        "serial_no": 11,
        "multiple_answers_allowed": False,
        "required": True,
        "conditions": {
            "rule": "all",
            "conditions": [
                {
                    "answer": True,
                    "question_identifier": "crop_fertility_q_005"
                }
            ]
        },
        "options": []
    },
    {
        "identifier": "crop_fertility_q_015",
        "question": "How do you ensure that manure applications do not contaminate water sources?",
        "description": "",
        "placeholder": None,
        "answer_type": "long_text",
        "serial_no": 13,
        "multiple_answers_allowed": False,
        "required": True,
        "conditions": {
            "rule": "all",
            "conditions": [
                {
                    "answer": True,
                    "question_identifier": "crop_fertility_q_005"
                }
            ]
        },
        "options": []
    },
    {
        "identifier": "crop_fertility_q_016",
        "question": "List all compost feedstocks/ingredients and describe the initial C:N ratio of the compost you produce:",
        "description": "",
        "placeholder": None,
        "answer_type": "feedstock",
        "serial_no": 15,
        "multiple_answers_allowed": True,
        "required": True,
        "conditions": {
            "rule": "any",
            "conditions": [
                {
                    "answer": "I produce compost that contains manure",
                    "question_identifier": "crop_fertility_q_006"
                },
                {
                    "answer": "I produce compost that does not contain manure",
                    "question_identifier": "crop_fertility_q_006"
                }
            ]
        },
        "options": []
    },
    {
        "identifier": "crop_fertility_q_017",
        "question": "How is your compost produced?",
        "description": "",
        "placeholder": None,
        "answer_type": "checkbox_multi_select",
        "serial_no": 16,
        "multiple_answers_allowed": True,
        "required": True,
        "conditions": {
            "rule": "any",
            "conditions": [
                {
                    "answer": "I produce compost that contains manure",
                    "question_identifier": "crop_fertility_q_006"
                },
                {
                    "answer": "I produce compost that does not contain manure",
                    "question_identifier": "crop_fertility_q_006"
                }
            ]
        },
        "options": [
            {
                "option_text": "Windrows: must be aerated, reach 131-170° F (55 to 76.7° C) for at least 15 days, and be turned a minimum of 5 times during the 15-day period."
            },
            {
                "option_text": "In-vessel or static system: must be aerated and reach 131-170° F (55 to 76.7° C) for at least 3 days."
            },
            {
                "option_text": "Manure-fed vermicompost with a 70-90% moisture level, and made under aerobic conditions."
            }
        ]
    },
    {
        "identifier": "crop_fertility_q_018",
        "question": "How and where do you document your composting processes? (will be verified at inspection)",
        "description": "",
        "placeholder": None,
        "answer_type": "radio",
        "serial_no": 17,
        "multiple_answers_allowed": False,
        "required": True,
        "conditions": {
            "rule": "any",
            "conditions": [
                {
                    "answer": "I produce compost that contains manure",
                    "question_identifier": "crop_fertility_q_006"
                },
                {
                    "answer": "I produce compost that does not contain manure",
                    "question_identifier": "crop_fertility_q_006"
                }
            ]
        },
        "options": [
            {
                "option_text": "Temperature log"
            },
            {
                "option_text": "Turning log"
            },
            {
                "option_text": "Moisture level log"
            },
            {
                "option_text": "Other"
            }
        ]
    },
    {
        "identifier": "crop_fertility_q_019",
        "question": "Identify all purchased compost products in use and/or intended for use",
        "description": "",
        "placeholder": None,
        "answer_type": "material",
        "serial_no": 19,
        "multiple_answers_allowed": True,
        "required": True,
        "conditions": {
            "rule": "any",
            "conditions": [
                {
                    "answer": "I purchase compost that contains manure",
                    "question_identifier": "crop_fertility_q_006"
                },
                {
                    "answer": "I purchase compost that does not contain manure",
                    "question_identifier": "crop_fertility_q_006"
                }
            ]
        },
        "options": []
    },
    {
        "identifier": "crop_fertility_q_020",
        "question": "Please describe which micronutrients are used by your operation and how you determine that micronutrient use is necessary (i.e. use of soil or tissues tests indicating certain micronutrient deficiencies).",
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
                    "question_identifier": "crop_fertility_q_007"
                }
            ]
        },
        "options": []
    },
    {
        "identifier": "crop_fertility_q_021",
        "question": "Indicate how you monitor the effectiveness of your fertility management plan (select all that apply): - Other",
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
                    "question_identifier": "crop_fertility_q_008"
                }
            ]
        },
        "options": []
    },
    {
        "identifier": "crop_fertility_q_022",
        "question": "How often do you test?",
        "description": "",
        "placeholder": None,
        "answer_type": "radio",
        "serial_no": 25,
        "multiple_answers_allowed": False,
        "required": True,
        "conditions": {
            "rule": "all",
            "conditions": [
                {
                    "answer": True,
                    "question_identifier": "crop_fertility_q_009"
                }
            ]
        },
        "options": [
            {
                "option_text": "Seasonally"
            },
            {
                "option_text": "Annually"
            },
            {
                "option_text": "With each crop"
            },
            {
                "option_text": "Other:"
            }
        ]
    },
    {
        "identifier": "crop_fertility_q_023",
        "question": "Please identify all manure in use or planned for use.",
        "description": "",
        "placeholder": None,
        "answer_type": "material",
        "serial_no": 10,
        "multiple_answers_allowed": True,
        "required": True,
        "conditions": {
            "rule": "all",
            "conditions": [
                {
                    "answer": True,
                    "question_identifier": "crop_fertility_q_013"
                }
            ]
        },
        "options": []
    },
    {
        "identifier": "crop_fertility_q_024",
        "question": "How is uncomposted manure applied (check all that apply)?",
        "description": "",
        "placeholder": None,
        "answer_type": "checkbox_multi_select",
        "serial_no": 12,
        "multiple_answers_allowed": True,
        "required": True,
        "conditions": {
            "rule": "all",
            "conditions": [
                {
                    "answer": True,
                    "question_identifier": "crop_fertility_q_014"
                }
            ]
        },
        "options": [
            {
                "option_text": "Incorporated at least 120 days before harvest of crops with edible portions that contact soil."
            },
            {
                "option_text": "Incorporated at least 90 days before harvest of crops with edible portions that do not contact soil."
            },
            {
                "option_text": "Manure is processed or pelleted (heated to 160 F or 150 F for one hour with a max. moisture of 12%)"
            }
        ]
    },
    {
        "identifier": "crop_fertility_q_025",
        "question": "How and where do you document your composting processes? (will be verified at inspection) - Other",
        "description": "",
        "placeholder": None,
        "answer_type": "text",
        "serial_no": 18,
        "multiple_answers_allowed": False,
        "required": True,
        "conditions": {
            "rule": "all",
            "conditions": [
                {
                    "answer": "Other",
                    "question_identifier": "crop_fertility_q_018"
                }
            ]
        },
        "options": []
    },
    {
        "identifier": "crop_fertility_q_026",
        "question": "How often do you test - Other",
        "description": "",
        "placeholder": None,
        "answer_type": "text",
        "serial_no": 26,
        "multiple_answers_allowed": False,
        "required": True,
        "conditions": {
            "rule": "all",
            "conditions": [
                {
                    "answer": "Other:",
                    "question_identifier": "crop_fertility_q_022"
                }
            ]
        },
        "options": []
    }
]

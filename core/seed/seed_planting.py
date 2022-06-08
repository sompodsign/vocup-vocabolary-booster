questions = [
    {
        "identifier": "seed_planting_q_001",
        "question": "Do you purchase, plan to purchase or otherwise obtain seeds intended for use in organic production?",
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
        "identifier": "seed_planting_q_002",
        "question": "Do you purchase, plan to purchase or otherwise obtain annual seedlings intended for use in organic production?",
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
        "identifier": "seed_planting_q_003",
        "question": "Do you purchase, plan to purchase or otherwise obtain perennial planting stock intended for use in organic production?",
        "description": "",
        "placeholder": None,
        "answer_type": "boolean",
        "serial_no": 5,
        "multiple_answers_allowed": False,
        "required": True,
        "conditions": None,
        "options": []
    },
    {
        "identifier": "seed_planting_q_004",
        "question": "Do you currently or plan to use planting stock other than seedlings? Such as rhizomes, shoots, tubers, cuttings, clones or roots (including strawberry crowns, raspberry canes, potato eyes, etc.)?",
        "description": "",
        "placeholder": None,
        "answer_type": "boolean",
        "serial_no": 7,
        "multiple_answers_allowed": False,
        "required": True,
        "conditions": None,
        "options": []
    },
    {
        "identifier": "seed_planting_q_005",
        "question": "Do you currently or plan to produce in the near future, any farm-grown seeds, transplants, or planting stock?",
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
        "identifier": "seed_planting_q_006",
        "question": "Are all planting materials certified organic?",
        "description": "",
        "placeholder": None,
        "answer_type": "boolean",
        "serial_no": 17,
        "multiple_answers_allowed": False,
        "required": True,
        "conditions": None,
        "options": []
    },
    {
        "identifier": "seed_planting_q_007",
        "question": "Do you grow crops on contract such that seed or planting stock is supplied by someone else?",
        "description": "",
        "placeholder": None,
        "answer_type": "boolean",
        "serial_no": 21,
        "multiple_answers_allowed": False,
        "required": True,
        "conditions": None,
        "options": []
    },
    {
        "identifier": "seed_planting_q_008",
        "question": "You must maintain documentation that demonstrates your buyer has conducted a commercial availability search. What documents do you maintain? Select all that apply:",
        "description": "",
        "placeholder": None,
        "answer_type": "checkbox_multi_select",
        "serial_no": 22,
        "multiple_answers_allowed": True,
        "required": True,
        "conditions": None,
        "options": [
            {
                "option_text": "Seed search log"
            },
            {
                "option_text": "Invoices"
            },
            {
                "option_text": "Letters from seed suppliers"
            },
            {
                "option_text": "Organic certificates"
            },
            {
                "option_text": "Other:"
            }
        ]
    },
    {
        "identifier": "seed_planting_q_009",
        "question": "Are all planting materials organic or unavailable in genetically modified form?",
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
        "identifier": "seed_planting_q_010",
        "question": "Do you use or plan to use any treated seed and/or apply any treatments to seeds such as inoculants or other coatings?",
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
        "identifier": "seed_planting_q_011",
        "question": "Please select seed type. Select all that apply:",
        "description": "",
        "placeholder": None,
        "answer_type": "checkbox_multi_select",
        "serial_no": 2,
        "multiple_answers_allowed": True,
        "required": True,
        "conditions": {
            "rule": "all",
            "conditions": [
                {
                    "answer": True,
                    "question_identifier": "seed_planting_q_001"
                }
            ]
        },
        "options": [
            {
                "option_text": "Organic seed"
            },
            {
                "option_text": "Non-organic, untreated seed"
            },
            {
                "option_text": "Non-organic, treated or inoculated seed"
            }
        ]
    },
    {
        "identifier": "seed_planting_q_012",
        "question": "Please attach a copy of the organic certificate for each supplier of organic annual seedlings intended for use by your operation:",
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
                    "answer": True,
                    "question_identifier": "seed_planting_q_002"
                }
            ]
        },
        "options": []
    },
    {
        "identifier": "seed_planting_q_013",
        "question": "Select perennial planting stock type(s)",
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
                    "question_identifier": "seed_planting_q_003"
                }
            ]
        },
        "options": [
            {
                "option_text": "Organic perennial stock"
            },
            {
                "option_text": "Non-organic perennial stock"
            }
        ]
    },
    {
        "identifier": "seed_planting_q_014",
        "question": "What type of planting stock do you use or plan to use other than seedlings?",
        "description": "",
        "placeholder": None,
        "answer_type": "checkbox_multi_select",
        "serial_no": 8,
        "multiple_answers_allowed": True,
        "required": True,
        "conditions": {
            "rule": "all",
            "conditions": [
                {
                    "answer": True,
                    "question_identifier": "seed_planting_q_004"
                }
            ]
        },
        "options": [
            {
                "option_text": "Organic planting stock other than seedlings"
            },
            {
                "option_text": "Non-organic planting stock other than seedlings"
            }
        ]
    },
    {
        "identifier": "seed_planting_q_015",
        "question": "Do you contract with another operation to produce planting stock for you?",
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
                    "question_identifier": "seed_planting_q_004"
                }
            ]
        },
        "options": []
    },
    {
        "identifier": "seed_planting_q_016",
        "question": "Do you collect documentation to verify that the planting stock was produced using allowed inputs for organic production?",
        "description": "",
        "placeholder": None,
        "answer_type": "boolean",
        "serial_no": 10,
        "multiple_answers_allowed": False,
        "required": True,
        "conditions": {
            "rule": "all",
            "conditions": [
                {
                    "answer": True,
                    "question_identifier": "seed_planting_q_004"
                }
            ]
        },
        "options": []
    },
    {
        "identifier": "seed_planting_q_017",
        "question": "Location of on-farm growing facility/facilities (must be Certified Organic):",
        "description": "",
        "placeholder": None,
        "answer_type": "address",
        "serial_no": 12,
        "multiple_answers_allowed": True,
        "required": True,
        "conditions": {
            "rule": "all",
            "conditions": [
                {
                    "answer": True,
                    "question_identifier": "seed_planting_q_005"
                }
            ]
        },
        "options": []
    },
    {
        "identifier": "seed_planting_q_018",
        "question": "Check which of the following you use for planting that are farm grown. Select all that apply:",
        "description": "",
        "placeholder": None,
        "answer_type": "checkbox_multi_select",
        "serial_no": 13,
        "multiple_answers_allowed": True,
        "required": True,
        "conditions": {
            "rule": "all",
            "conditions": [
                {
                    "answer": True,
                    "question_identifier": "seed_planting_q_005"
                }
            ]
        },
        "options": [
            {
                "option_text": "Seeds"
            },
            {
                "option_text": "Annual Seedlings"
            },
            {
                "option_text": "Perennial Planting Stock"
            },
            {
                "option_text": "Other Planting Stock, Describe:"
            }
        ]
    },
    {
        "identifier": "seed_planting_q_019",
        "question": "Is any post harvest processing contracted for your seeds, seedlings or planting stock? (ex. Seed cleaners)?",
        "description": "",
        "placeholder": None,
        "answer_type": "boolean",
        "serial_no": 15,
        "multiple_answers_allowed": False,
        "required": True,
        "conditions": {
            "rule": "all",
            "conditions": [
                {
                    "answer": True,
                    "question_identifier": "seed_planting_q_005"
                }
            ]
        },
        "options": []
    },
    {
        "identifier": "seed_planting_q_020",
        "question": "For all non-organic seed or planting stock, what qualities and characteristics do you seek?",
        "description": "",
        "placeholder": None,
        "answer_type": "checkbox_multi_select",
        "serial_no": 18,
        "multiple_answers_allowed": True,
        "required": True,
        "conditions": {
            "rule": "all",
            "conditions": [
                {
                    "answer": True,
                    "question_identifier": "seed_planting_q_006"
                }
            ]
        },
        "options": [
            {
                "option_text": "Germination rate"
            },
            {
                "option_text": "Drought tolerance"
            },
            {
                "option_text": "Bulk quantity"
            },
            {
                "option_text": "Disease resistance"
            },
            {
                "option_text": "Greater crop yield"
            },
            {
                "option_text": "Season and/or Location specific traits"
            },
            {
                "option_text": "Other:"
            }
        ]
    },
    {
        "identifier": "seed_planting_q_021",
        "question": "Explain how you determine that organic seed or planting stock is not available for equivalent varieties:",
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
                    "question_identifier": "seed_planting_q_006"
                }
            ]
        },
        "options": []
    },
    {
        "identifier": "seed_planting_q_022",
        "question": "You must maintain documentation that demonstrates your buyer has conducted a commercial availability search. What documents do you maintain? Select all that apply - Other",
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
                    "question_identifier": "seed_planting_q_008"
                }
            ]
        },
        "options": []
    },
    {
        "identifier": "seed_planting_q_023",
        "question": "Which methods do you use to document that non-organic seeds and planting stock are not genetically modified?",
        "description": "",
        "placeholder": None,
        "answer_type": "checkbox_multi_select",
        "serial_no": 25,
        "multiple_answers_allowed": True,
        "required": True,
        "conditions": {
            "rule": "all",
            "conditions": [
                {
                    "answer": True,
                    "question_identifier": "seed_planting_q_009"
                }
            ]
        },
        "options": [
            {
                "option_text": "Non-GMO statement from the supplier"
            },
            {
                "option_text": "Catalog statement"
            },
            {
                "option_text": "Other:"
            }
        ]
    },
    {
        "identifier": "seed_planting_q_024",
        "question": "Identify all seed treatments, coatings, or other inputs applied to the seed(s) identified above",
        "description": "",
        "placeholder": None,
        "answer_type": "material",
        "serial_no": 28,
        "multiple_answers_allowed": True,
        "required": True,
        "conditions": {
            "rule": "all",
            "conditions": [
                {
                    "answer": True,
                    "question_identifier": "seed_planting_q_010"
                }
            ]
        },
        "options": []
    },
    {
        "identifier": "seed_planting_q_025",
        "question": "Check which of the following you use for planting that are farm grown. Select all that apply:",
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
                    "answer": "Other Planting Stock, Describe:",
                    "question_identifier": "seed_planting_q_018"
                }
            ]
        },
        "options": []
    },
    {
        "identifier": "seed_planting_q_026",
        "question": "Please ensure your description below describes the processing activities in depth and also identifies the name of the operation conducting the processing activities and whether or not the operation is certified organic.",
        "description": "",
        "placeholder": "Please Describe",
        "answer_type": "long_text",
        "serial_no": 16,
        "multiple_answers_allowed": False,
        "required": True,
        "conditions": {
            "rule": "all",
            "conditions": [
                {
                    "answer": True,
                    "question_identifier": "seed_planting_q_019"
                }
            ]
        },
        "options": []
    },
    {
        "identifier": "seed_planting_q_027",
        "question": "For all non-organic seed or planting stock, what qualities and characteristics do you seek - Other",
        "description": "",
        "placeholder": None,
        "answer_type": "text",
        "serial_no": 19,
        "multiple_answers_allowed": False,
        "required": True,
        "conditions": {
            "rule": "all",
            "conditions": [
                {
                    "answer": "Other:",
                    "question_identifier": "seed_planting_q_020"
                }
            ]
        },
        "options": []
    },
    {
        "identifier": "seed_planting_q_028",
        "question": "Which methods do you use to document that non-organic seeds and planting stock are not genetically modified - Other",
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
                    "question_identifier": "seed_planting_q_023"
                }
            ]
        },
        "options": []
    }
]

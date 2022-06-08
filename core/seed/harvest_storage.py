questions = [
    {
        "identifier": "harvest_storage_q_001",
        "question": "Provide a complete written description and/or a schematic product flow chart that describes how the crop(s) is harvested, received, processed, packaged, and stored (as applicable). Identify all equipment, machinery, and storage areas. The description may be included below or attached.",
        "description": "",
        "placeholder": None,
        "answer_type": "document",
        "serial_no": 1,
        "multiple_answers_allowed": False,
        "required": False,
        "conditions": None,
        "options": []
    },
    {
        "identifier": "harvest_storage_q_002",
        "question": "Do you store crops?",
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
        "identifier": "harvest_storage_q_003",
        "question": "Does your operation conduct any post-harvest handling of crops (not including storage of harvested crops)?",
        "description": "",
        "placeholder": None,
        "answer_type": "boolean",
        "serial_no": 6,
        "multiple_answers_allowed": False,
        "required": True,
        "conditions": None,
        "options": []
    },
    {
        "identifier": "harvest_storage_q_004",
        "question": "Describe all harvest, post-harvest handling, and storage activities",
        "description": "",
        "placeholder": "Describe your product flow",
        "answer_type": "long_text",
        "serial_no": 2,
        "multiple_answers_allowed": False,
        "required": False,
        "conditions": None,
        "options": []
    },
    {
        "identifier": "harvest_storage_q_005",
        "question": "Do you maintain ownership of crops while in storage?",
        "description": "",
        "placeholder": None,
        "answer_type": "boolean",
        "serial_no": 4,
        "multiple_answers_allowed": False,
        "required": True,
        "conditions": {
            "rule": "all",
            "conditions": [
                {
                    "answer": True,
                    "question_identifier": "harvest_storage_q_002"
                }
            ]
        },
        "options": []
    },
    {
        "identifier": "harvest_storage_q_006",
        "question": "Does your operation use a third party or other entity to process crops post-harvest?",
        "description": "",
        "placeholder": None,
        "answer_type": "radio",
        "serial_no": 7,
        "multiple_answers_allowed": False,
        "required": True,
        "conditions": {
            "rule": "all",
            "conditions": [
                {
                    "answer": False,
                    "question_identifier": "harvest_storage_q_003"
                }
            ]
        },
        "options": [
            {
                "option_text": "No"
            },
            {
                "option_text": "Yes but ownership of the crop is transferred to the third party upon delivery of the crop"
            },
            {
                "option_text": "Yes and this operation retains ownership of the crop during processing"
            }
        ]
    },
    {
        "identifier": "harvest_storage_q_007",
        "question": "Does your operation utilize any on-farm facilities for post-harvest handling of organic crops?",
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
                    "question_identifier": "harvest_storage_q_003"
                }
            ]
        },
        "options": []
    },
    {
        "identifier": "harvest_storage_q_008",
        "question": "List all storage facilities you use, including both on-site and off-site storage locations and how the product is stored",
        "description": "",
        "placeholder": None,
        "answer_type": "facility",
        "serial_no": 5,
        "multiple_answers_allowed": True,
        "required": True,
        "conditions": {
            "rule": "all",
            "conditions": [
                {
                    "answer": True,
                    "question_identifier": "harvest_storage_q_005"
                }
            ]
        },
        "options": []
    },
    {
        "identifier": "harvest_storage_q_009",
        "question": "List each product that will be included in you organic certification, processed by another operation",
        "description": "",
        "placeholder": None,
        "answer_type": "h_product",
        "serial_no": 8,
        "multiple_answers_allowed": True,
        "required": True,
        "conditions": {
            "rule": "all",
            "conditions": [
                {
                    "answer": "Yes and this operation retains ownership of the crop during processing",
                    "question_identifier": "harvest_storage_q_006"
                }
            ]
        },
        "options": []
    },
    {
        "identifier": "harvest_storage_q_010",
        "question": "Attach the organic certificate for each operation that conducts post-harvest processing of crops for which your operation retains ownership of the finished processed product.",
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
                    "answer": "Yes and this operation retains ownership of the crop during processing",
                    "question_identifier": "harvest_storage_q_006"
                }
            ]
        },
        "options": []
    },
    {
        "identifier": "harvest_storage_q_011",
        "question": "Does your operation use a third party or other entity to process crops post-harvest?",
        "description": "",
        "placeholder": None,
        "answer_type": "radio",
        "serial_no": 11,
        "multiple_answers_allowed": False,
        "required": True,
        "conditions": {
            "rule": "all",
            "conditions": [
                {
                    "answer": False,
                    "question_identifier": "harvest_storage_q_007"
                }
            ]
        },
        "options": [
            {
                "option_text": "No"
            },
            {
                "option_text": "Yes but ownership of the crop is transferred to the third party upon delivery of the crop"
            },
            {
                "option_text": "Yes and this operation retains ownership of the crop during processing"
            }
        ]
    },
    {
        "identifier": "harvest_storage_q_012",
        "question": "Facility Name",
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
                    "answer": True,
                    "question_identifier": "harvest_storage_q_007"
                }
            ]
        },
        "options": []
    },
    {
        "identifier": "harvest_storage_q_013",
        "question": "Please provide the site address for this facility",
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
                    "answer": True,
                    "question_identifier": "harvest_storage_q_007"
                }
            ]
        },
        "options": []
    },
    {
        "identifier": "harvest_storage_q_014",
        "question": "Describe the activities performed at this facility: Select all that apply:",
        "description": "",
        "placeholder": None,
        "answer_type": "checkbox_multi_select",
        "serial_no": 16,
        "multiple_answers_allowed": True,
        "required": True,
        "conditions": {
            "rule": "all",
            "conditions": [
                {
                    "answer": True,
                    "question_identifier": "harvest_storage_q_007"
                }
            ]
        },
        "options": [
            {
                "option_text": "Handling/Processing (washing, sorting, mixing, drying, blending, packaging)"
            },
            {
                "option_text": "Other:"
            }
        ]
    },
    {
        "identifier": "harvest_storage_q_015",
        "question": "List the organic crops handled at this facility:",
        "description": "",
        "placeholder": None,
        "answer_type": "crop",
        "serial_no": 18,
        "multiple_answers_allowed": True,
        "required": True,
        "conditions": {
            "rule": "all",
            "conditions": [
                {
                    "answer": True,
                    "question_identifier": "harvest_storage_q_007"
                }
            ]
        },
        "options": []
    },
    {
        "identifier": "harvest_storage_q_016",
        "question": "What processing activities are performed on-farm? Select all that apply:",
        "description": "",
        "placeholder": None,
        "answer_type": "checkbox_multi_select",
        "serial_no": 19,
        "multiple_answers_allowed": True,
        "required": True,
        "conditions": {
            "rule": "all",
            "conditions": [
                {
                    "answer": True,
                    "question_identifier": "harvest_storage_q_007"
                }
            ]
        },
        "options": [
            {
                "option_text": "Not applicable or use contract processor (Skip to Commingling Prevention section)"
            },
            {
                "option_text": "Washing"
            },
            {
                "option_text": "Sorting"
            },
            {
                "option_text": "Freezing"
            },
            {
                "option_text": "Cutting"
            },
            {
                "option_text": "Cooking"
            },
            {
                "option_text": "Seed Cleaning"
            },
            {
                "option_text": "Mixing"
            },
            {
                "option_text": "Packaging"
            },
            {
                "option_text": "Fermenting"
            },
            {
                "option_text": "Drying/dehydrating"
            },
            {
                "option_text": "Other:"
            }
        ]
    },
    {
        "identifier": "harvest_storage_q_017",
        "question": "Do any on-farm processed products include ingredients from off-farm (excluding salt)?",
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
                    "question_identifier": "harvest_storage_q_007"
                }
            ]
        },
        "options": []
    },
    {
        "identifier": "harvest_storage_q_018",
        "question": "Do you use any substances to assist in on-farm processing of your products (processing aids)?",
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
                    "question_identifier": "harvest_storage_q_007"
                }
            ]
        },
        "options": []
    },
    {
        "identifier": "harvest_storage_q_019",
        "question": "Is the on-farm handling area and/or equipment within this on-farm handling facility used for both organic and non-organic crops?",
        "description": "",
        "placeholder": None,
        "answer_type": "boolean",
        "serial_no": 23,
        "multiple_answers_allowed": False,
        "required": True,
        "conditions": {
            "rule": "all",
            "conditions": [
                {
                    "answer": True,
                    "question_identifier": "harvest_storage_q_007"
                }
            ]
        },
        "options": []
    },
    {
        "identifier": "harvest_storage_q_020",
        "question": "Do you currently or plan to use Sanitation or Cleaners within this on-farm facility and/or on equipment within this on-farm facility?",
        "description": "",
        "placeholder": None,
        "answer_type": "boolean",
        "serial_no": 25,
        "multiple_answers_allowed": False,
        "required": True,
        "conditions": {
            "rule": "all",
            "conditions": [
                {
                    "answer": True,
                    "question_identifier": "harvest_storage_q_007"
                }
            ]
        },
        "options": []
    },
    {
        "identifier": "harvest_storage_q_021",
        "question": "Does your operation use a third party or other entity to process crops post-harvest?",
        "description": "",
        "placeholder": None,
        "answer_type": "radio",
        "serial_no": 42,
        "multiple_answers_allowed": False,
        "required": True,
        "conditions": {
            "rule": "all",
            "conditions": [
                {
                    "answer": True,
                    "question_identifier": "harvest_storage_q_007"
                }
            ]
        },
        "options": [
            {
                "option_text": "No"
            },
            {
                "option_text": "Yes but ownership of the crop is transferred to the third party upon delivery of the crop"
            },
            {
                "option_text": "Yes and this operation retains ownership of the crop during processing"
            }
        ]
    },
    {
        "identifier": "harvest_storage_q_022",
        "question": "List each product that will be included in you organic certification, processed by another operation",
        "description": "",
        "placeholder": None,
        "answer_type": "h_product",
        "serial_no": 12,
        "multiple_answers_allowed": True,
        "required": True,
        "conditions": {
            "rule": "all",
            "conditions": [
                {
                    "answer": True,
                    "question_identifier": "harvest_storage_q_011"
                }
            ]
        },
        "options": []
    },
    {
        "identifier": "harvest_storage_q_023",
        "question": "Attach the organic certificate for each operation that conducts post-harvest processing of crops for which your operation retains ownership of the finished processed product.",
        "description": "",
        "placeholder": None,
        "answer_type": "document",
        "serial_no": 13,
        "multiple_answers_allowed": False,
        "required": True,
        "conditions": {
            "rule": "all",
            "conditions": [
                {
                    "answer": True,
                    "question_identifier": "harvest_storage_q_011"
                }
            ]
        },
        "options": []
    },
    {
        "identifier": "harvest_storage_q_024",
        "question": "Describe the activities performed at this facility: Select all that apply: - Other",
        "description": "",
        "placeholder": None,
        "answer_type": "text",
        "serial_no": 17,
        "multiple_answers_allowed": False,
        "required": True,
        "conditions": {
            "rule": "all",
            "conditions": [
                {
                    "answer": "Other:",
                    "question_identifier": "harvest_storage_q_014"
                }
            ]
        },
        "options": []
    },
    {
        "identifier": "harvest_storage_q_025",
        "question": "What processing activities are performed on-farm? Select all that apply: - Other",
        "description": "",
        "placeholder": None,
        "answer_type": "text",
        "serial_no": 20,
        "multiple_answers_allowed": False,
        "required": True,
        "conditions": {
            "rule": "all",
            "conditions": [
                {
                    "answer": "Other:",
                    "question_identifier": "harvest_storage_q_016"
                }
            ]
        },
        "options": []
    },
    {
        "identifier": "harvest_storage_q_026",
        "question": "How do you ensure that organic crops are not contaminated by or commingled with nonorganic crops during processing?",
        "description": "",
        "placeholder": None,
        "answer_type": "text",
        "serial_no": 24,
        "multiple_answers_allowed": False,
        "required": True,
        "conditions": {
            "rule": "all",
            "conditions": [
                {
                    "answer": True,
                    "question_identifier": "harvest_storage_q_019"
                }
            ]
        },
        "options": []
    },
    {
        "identifier": "harvest_storage_q_027",
        "question": "Identify all cleaners and sanitizers in use or intended for use",
        "description": "",
        "placeholder": None,
        "answer_type": "material",
        "serial_no": 26,
        "multiple_answers_allowed": True,
        "required": True,
        "conditions": {
            "rule": "all",
            "conditions": [
                {
                    "answer": True,
                    "question_identifier": "harvest_storage_q_020"
                }
            ]
        },
        "options": []
    },
    {
        "identifier": "harvest_storage_q_028",
        "question": "Describe your cleaning and sanitation steps, including final rinse step (if any), for organic food contact surfaces (counters, mixing and grinding equipment, storage areas, etc.)  or submit a Standard Operating Procedure (SOP) for cleaning & sanitizing food contact surfaces.",
        "description": "",
        "placeholder": None,
        "answer_type": "long_text",
        "serial_no": 27,
        "multiple_answers_allowed": False,
        "required": False,
        "conditions": {
            "rule": "all",
            "conditions": [
                {
                    "answer": True,
                    "question_identifier": "harvest_storage_q_020"
                }
            ]
        },
        "options": []
    },
    {
        "identifier": "harvest_storage_q_029",
        "question": "Upload Standard Operating Procedure",
        "description": "",
        "placeholder": None,
        "answer_type": "document",
        "serial_no": 28,
        "multiple_answers_allowed": False,
        "required": False,
        "conditions": {
            "rule": "all",
            "conditions": [
                {
                    "answer": True,
                    "question_identifier": "harvest_storage_q_020"
                }
            ]
        },
        "options": []
    },
    {
        "identifier": "harvest_storage_q_030",
        "question": "Identify how you ensure that contact surfaces are free of residue, select all that apply:",
        "description": "",
        "placeholder": None,
        "answer_type": "checkbox_multi_select",
        "serial_no": 29,
        "multiple_answers_allowed": True,
        "required": True,
        "conditions": {
            "rule": "all",
            "conditions": [
                {
                    "answer": True,
                    "question_identifier": "harvest_storage_q_020"
                }
            ]
        },
        "options": [
            {
                "option_text": "Chlorine materials and/or sanitizers allowed to evaporate completely"
            },
            {
                "option_text": "Thorough rinse (describe):"
            },
            {
                "option_text": "Residue testing (specify methods):"
            },
            {
                "option_text": "Other:"
            }
        ]
    },
    {
        "identifier": "harvest_storage_q_031",
        "question": "How do you document the cleaning/sanitation and verification of no remaining residues? (Check all that apply.)",
        "description": "",
        "placeholder": None,
        "answer_type": "checkbox_multi_select",
        "serial_no": 31,
        "multiple_answers_allowed": True,
        "required": True,
        "conditions": {
            "rule": "all",
            "conditions": [
                {
                    "answer": True,
                    "question_identifier": "harvest_storage_q_020"
                }
            ]
        },
        "options": [
            {
                "option_text": "Cleaning/sanitation log"
            },
            {
                "option_text": "Notation on processing/handling record"
            },
            {
                "option_text": "Other:"
            }
        ]
    },
    {
        "identifier": "harvest_storage_q_032",
        "question": "Do you use water in direct contact with your organic product (i.e., in wash water)?",
        "description": "",
        "placeholder": None,
        "answer_type": "boolean",
        "serial_no": 33,
        "multiple_answers_allowed": False,
        "required": True,
        "conditions": {
            "rule": "all",
            "conditions": [
                {
                    "answer": True,
                    "question_identifier": "harvest_storage_q_020"
                }
            ]
        },
        "options": []
    },
    {
        "identifier": "harvest_storage_q_033",
        "question": "List each product that will be included in you organic certification, processed by another operation",
        "description": "",
        "placeholder": None,
        "answer_type": "h_product",
        "serial_no": 43,
        "multiple_answers_allowed": True,
        "required": True,
        "conditions": {
            "rule": "all",
            "conditions": [
                {
                    "answer": "Yes and this operation retains ownership of the crop during processing",
                    "question_identifier": "harvest_storage_q_021"
                }
            ]
        },
        "options": []
    },
    {
        "identifier": "harvest_storage_q_034",
        "question": "Attach the organic certificate for each operation that conducts post-harvest processing of crops for which your operation retains ownership of the finished processed product.",
        "description": "",
        "placeholder": None,
        "answer_type": "document",
        "serial_no": 44,
        "multiple_answers_allowed": False,
        "required": True,
        "conditions": {
            "rule": "all",
            "conditions": [
                {
                    "answer": "Yes and this operation retains ownership of the crop during processing",
                    "question_identifier": "harvest_storage_q_021"
                }
            ]
        },
        "options": []
    },
    {
        "identifier": "harvest_storage_q_035",
        "question": "Identify how you ensure that contact surfaces are free of residue, select all that apply: - Other",
        "description": "",
        "placeholder": None,
        "answer_type": "text",
        "serial_no": 30,
        "multiple_answers_allowed": False,
        "required": True,
        "conditions": {
            "rule": "all",
            "conditions": [
                {
                    "answer": "Other:",
                    "question_identifier": "harvest_storage_q_030"
                }
            ]
        },
        "options": []
    },
    {
        "identifier": "harvest_storage_q_036",
        "question": "How do you document the cleaning/sanitation and verification of no remaining residues? (Check all that apply.) - Other",
        "description": "",
        "placeholder": None,
        "answer_type": "text",
        "serial_no": 32,
        "multiple_answers_allowed": False,
        "required": True,
        "conditions": {
            "rule": "all",
            "conditions": [
                {
                    "answer": "Other:",
                    "question_identifier": "harvest_storage_q_031"
                }
            ]
        },
        "options": []
    },
    {
        "identifier": "harvest_storage_q_037",
        "question": "What is the water source? Select all that apply:",
        "description": "",
        "placeholder": None,
        "answer_type": "checkbox_multi_select",
        "serial_no": 34,
        "multiple_answers_allowed": True,
        "required": True,
        "conditions": {
            "rule": "all",
            "conditions": [
                {
                    "answer": True,
                    "question_identifier": "harvest_storage_q_032"
                }
            ]
        },
        "options": [
            {
                "option_text": "Municipal Source"
            },
            {
                "option_text": "Well"
            },
            {
                "option_text": "Other:"
            }
        ]
    },
    {
        "identifier": "harvest_storage_q_038",
        "question": "For water from other than a municipal source, how do you determine that it is potable?",
        "description": "",
        "placeholder": None,
        "answer_type": "checkbox_multi_select",
        "serial_no": 36,
        "multiple_answers_allowed": True,
        "required": True,
        "conditions": {
            "rule": "all",
            "conditions": [
                {
                    "answer": True,
                    "question_identifier": "harvest_storage_q_032"
                }
            ]
        },
        "options": [
            {
                "option_text": "Well provides drinking water for household"
            },
            {
                "option_text": "Periodic water testing for contaminants"
            },
            {
                "option_text": "Treat water with an allowed disinfectant in accordance with the Safe Drinking Water Act. Describe:"
            },
            {
                "option_text": "Other:"
            }
        ]
    },
    {
        "identifier": "harvest_storage_q_039",
        "question": "If testing water, have any tests detected contaminants?",
        "description": "",
        "placeholder": None,
        "answer_type": "boolean",
        "serial_no": 38,
        "multiple_answers_allowed": False,
        "required": True,
        "conditions": {
            "rule": "all",
            "conditions": [
                {
                    "answer": True,
                    "question_identifier": "harvest_storage_q_032"
                }
            ]
        },
        "options": []
    },
    {
        "identifier": "harvest_storage_q_040",
        "question": "If you add chlorine to water that directly contacts organic products, indicate how you meet the following restriction:",
        "description": "",
        "placeholder": None,
        "answer_type": "checkbox_multi_select",
        "serial_no": 40,
        "multiple_answers_allowed": True,
        "required": True,
        "conditions": {
            "rule": "all",
            "conditions": [
                {
                    "answer": True,
                    "question_identifier": "harvest_storage_q_032"
                }
            ]
        },
        "options": [
            {
                "option_text": "Not applicable, no chlorine added"
            },
            {
                "option_text": "Final rinse with water only"
            },
            {
                "option_text": "Final rinse with chlorine at or below 4ppm"
            },
            {
                "option_text": "Other:"
            }
        ]
    },
    {
        "identifier": "harvest_storage_q_041",
        "question": "What is the water source? Select all that apply: - Other",
        "description": "",
        "placeholder": None,
        "answer_type": "text",
        "serial_no": 35,
        "multiple_answers_allowed": False,
        "required": True,
        "conditions": {
            "rule": "all",
            "conditions": [
                {
                    "answer": "Other:",
                    "question_identifier": "harvest_storage_q_037"
                }
            ]
        },
        "options": []
    },
    {
        "identifier": "harvest_storage_q_042",
        "question": "For water from other than a municipal source, how do you determine that it is potable - Other",
        "description": "",
        "placeholder": None,
        "answer_type": "text",
        "serial_no": 37,
        "multiple_answers_allowed": False,
        "required": True,
        "conditions": {
            "rule": "all",
            "conditions": [
                {
                    "answer": "Other:",
                    "question_identifier": "harvest_storage_q_038"
                }
            ]
        },
        "options": []
    },
    {
        "identifier": "harvest_storage_q_043",
        "question": "If testing water, have any tests detected contaminants - Explanation",
        "description": "",
        "placeholder": None,
        "answer_type": "long_text",
        "serial_no": 39,
        "multiple_answers_allowed": False,
        "required": True,
        "conditions": {
            "rule": "all",
            "conditions": [
                {
                    "answer": True,
                    "question_identifier": "harvest_storage_q_039"
                }
            ]
        },
        "options": []
    },
    {
        "identifier": "harvest_storage_q_044",
        "question": "If you add chlorine to water that directly contacts organic products, indicate how you meet the following restriction: - Other",
        "description": "",
        "placeholder": None,
        "answer_type": "text",
        "serial_no": 41,
        "multiple_answers_allowed": False,
        "required": True,
        "conditions": {
            "rule": "all",
            "conditions": [
                {
                    "answer": "Other:",
                    "question_identifier": "harvest_storage_q_040"
                }
            ]
        },
        "options": []
    }
]

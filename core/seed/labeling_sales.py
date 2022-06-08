questions = [
    {
        "identifier": "labeling_sales_q_001",
        "question": "Do you use wholesale (non-retail) containers and/or documents such as bin tags or weigh tags that accompany wholesale containers?",
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
        "identifier": "labeling_sales_q_002",
        "question": "How is the organic status of the product(s) inside identified? (i.e., marked “organic,” affix USDA seal, lot numbers, Certifier logo, etc., describe):",
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
                    "answer": True,
                    "question_identifier": "labeling_sales_q_001"
                }
            ]
        },
        "options": []
    },
    {
        "identifier": "labeling_sales_q_003",
        "question": "Do you use retail labels?",
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
        "identifier": "labeling_sales_q_004",
        "question": "Attach a color copy of every retail label you use",
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
                    "question_identifier": "labeling_sales_q_003"
                }
            ]
        },
        "options": []
    },
    {
        "identifier": "labeling_sales_q_005",
        "question": "Attach a color copy of every label for each organic product you pack.",
        "description": "",
        "placeholder": None,
        "answer_type": "document",
        "serial_no": 5,
        "multiple_answers_allowed": False,
        "required": True,
        "conditions": None,
        "options": []
    },
    {
        "identifier": "labeling_sales_q_006",
        "question": "How do you verify that only compliant labels are used for organic products?",
        "description": "",
        "placeholder": None,
        "answer_type": "radio",
        "serial_no": 6,
        "multiple_answers_allowed": False,
        "required": True,
        "conditions": None,
        "options": [
            {
                "option_text": "Submit to certifier for review and approval prior to printing or use on product/in stream of commerce"
            },
            {
                "option_text": "Other"
            }
        ]
    },
    {
        "identifier": "labeling_sales_q_007",
        "question": "How do you verify that only compliant labels are used for organic products? - Other",
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
                    "answer": "Other",
                    "question_identifier": "labeling_sales_q_006"
                }
            ]
        },
        "options": []
    },
    {
        "identifier": "labeling_sales_q_008",
        "question": "Do you plan to pack your own organic crops into organic labels owned by other companies?",
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
        "identifier": "labeling_sales_q_009",
        "question": "Is the other company certified organic?",
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
                    "question_identifier": "labeling_sales_q_008"
                }
            ]
        },
        "options": []
    },
    {
        "identifier": "labeling_sales_q_010",
        "question": "Attach a valid organic certificate",
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
                    "answer": True,
                    "question_identifier": "labeling_sales_q_009"
                }
            ]
        },
        "options": []
    },
    {
        "identifier": "labeling_sales_q_011",
        "question": "Identify all products that you will be packing for others. Attach additional sheets as necessary.",
        "description": "",
        "placeholder": None,
        "answer_type": "product",
        "serial_no": 11,
        "multiple_answers_allowed": False,
        "required": True,
        "conditions": {
            "rule": "all",
            "conditions": [
                {
                    "answer": True,
                    "question_identifier": "labeling_sales_q_008"
                }
            ]
        },
        "options": []
    },
    {
        "identifier": "labeling_sales_q_012",
        "question": "Attach Product Formulation Sheet Form (PFS-02) for each multi-ingredient product.",
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
                    "answer": True,
                    "question_identifier": "labeling_sales_q_008"
                }
            ]
        },
        "options": []
    },
    {
        "identifier": "labeling_sales_q_013",
        "question": "How do you verify that all brand owners that you co-pack for have current organic certificates?",
        "description": "",
        "placeholder": None,
        "answer_type": "radio",
        "serial_no": 13,
        "multiple_answers_allowed": False,
        "required": True,
        "conditions": {
            "rule": "all",
            "conditions": [
                {
                    "answer": True,
                    "question_identifier": "labeling_sales_q_008"
                }
            ]
        },
        "options": [
            {
                "option_text": "Maintain onsite valid certificates listing specific branded products, updated annually"
            },
                        {
                "option_text": "Other"
            }
        ]
    },
    {
        "identifier": "labeling_sales_q_014",
        "question": "How do you verify that all brand owners that you co-pack for have current organic certificates? - Other",
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
                    "answer": "Other",
                    "question_identifier": "labeling_sales_q_013"
                }
            ]
        },
        "options": []
    },
    {
        "identifier": "labeling_sales_q_015",
        "question": "Do you utilize any packaging for crops?",
        "description": "",
        "placeholder": None,
        "answer_type": "boolean",
        "serial_no": 15,
        "multiple_answers_allowed": False,
        "required": True,
        "conditions": None,
        "options": []
    },
    {
        "identifier": "labeling_sales_q_016",
        "question": "Describe all packaging in use or planned for use",
        "description": "",
        "placeholder": None,
        "answer_type": "text",
        "serial_no": 16,
        "multiple_answers_allowed": False,
        "required": True,
        "conditions": {
            "rule": "all",
            "conditions": [
                {
                    "answer": True,
                    "question_identifier": "labeling_sales_q_014"
                }
            ]
        },
        "options": []
    },
    {
        "identifier": "labeling_sales_q_017",
        "question": "Do you reuse packaging?",
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
                    "question_identifier": "labeling_sales_q_014"
                }
            ]
        },
        "options": []
    },
    {
        "identifier": "labeling_sales_q_018",
        "question": "Has any reused packaging ever contained",
        "description": "",
        "placeholder": None,
        "answer_type": "boolean",
        "serial_no": 18,
        "multiple_answers_allowed": False,
        "required": True,
        "conditions": {
            "rule": "all",
            "conditions": [
                {
                    "answer": True,
                    "question_identifier": "labeling_sales_q_016"
                }
            ]
        },
        "options": []
    },
    {
        "identifier": "labeling_sales_q_019",
        "question": "Please describe how products are protected from contact with possible residue",
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
                    "answer": True,
                    "question_identifier": "labeling_sales_q_017"
                }
            ]
        },
        "options": []
    },
    {
        "identifier": "labeling_sales_q_020",
        "question": "Does your operation plan to import or export any organics products?",
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
        "identifier": "labeling_sales_q_021",
        "question": "To which of the following countries does your operation export organic products?",
        "description": "",
        "placeholder": None,
        "answer_type": "checkbox_multi_select",
        "serial_no": 21,
        "multiple_answers_allowed": True,
        "required": True,
        "conditions": {
            "rule": "all",
            "conditions": [
                {
                    "answer": True,
                    "question_identifier": "labeling_sales_q_019"
                }
            ]
        },
        "options": [
            {
                "option_text": "Canada"
            },
            {
                "option_text": "Japan"
            },
            {
                "option_text": "South Korea"
            },
            {
                "option_text": "India"
            },
            {
                "option_text": "European Union"
            },
            {
                "option_text": "Switzerland"
            },
            {
                "option_text": "Mexico"
            },
            {
                "option_text": "Other"
            }
            
        ]
    },
    {
        "identifier": "labeling_sales_q_022",
        "question": "To which of the following countries does your operation export organic products? - Other",
        "description": "",
        "placeholder": None,
        "answer_type": "text",
        "serial_no": 22,
        "multiple_answers_allowed": False,
        "required": True,
        "conditions": {
            "rule": "all",
            "conditions": [
                {
                    "answer": "Other",
                    "question_identifier": "labeling_sales_q_020"
                }
            ]
        },
        "options": []
    },
    {
        "identifier": "labeling_sales_q_023",
        "question": "How does your operation verify that only compliant labels are used for products exported to the above checked countries?",
        "description": "",
        "placeholder": None,
        "answer_type": "radio",
        "serial_no": 23,
        "multiple_answers_allowed": False,
        "required": True,
        "conditions": {
            "rule": "all",
            "conditions": [
                {
                    "answer": True,
                    "question_identifier": "labeling_sales_q_019"
                }
            ]
        },
        "options": [
            {
                "option_text": "Submit to certifier for review and approval prior to printing"
            },
            {
                "option_text": "Other"
            }
            
        ]
    },
    {
        "identifier": "labeling_sales_q_024",
        "question": "How does your operation verify that only compliant labels are used for products exported to the above checked countries? - Other",
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
                    "answer": "Other",
                    "question_identifier": "labeling_sales_q_022"
                }
            ]
        },
        "options": []
    },
    {
        "identifier": "labeling_sales_q_025",
        "question": "How does your operation ensure that the appropriate export documentation accompanies products sent to the above checked countries?",
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
                    "question_identifier": "labeling_sales_q_019"
                }
            ]
        },
        "options": [
            {
                "option_text": "Sent with certifier assistance, per shipment"
            },
            {
                "option_text": "Other"
            }
            
        ]
    },
    {
        "identifier": "labeling_sales_q_026",
        "question": "How does your operation ensure that the appropriate export documentation accompanies products sent to the above checked countries? - Other",
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
                    "answer": "Other",
                    "question_identifier": "labeling_sales_q_024"
                }
            ]
        },
        "options": []
    },
    {
        "identifier": "labeling_sales_q_027",
        "question": "How does your operation ensure that the relevant Organic Trade Arrangements are met for products sent to the above checked countries?",
        "description": "",
        "placeholder": None,
        "answer_type": "radio",
        "serial_no": 27,
        "multiple_answers_allowed": False,
        "required": True,
        "conditions": {
            "rule": "all",
            "conditions": [
                {
                    "answer": True,
                    "question_identifier": "labeling_sales_q_019"
                }
            ]
        },
        "options": [
            {
                "option_text": "Submit products/labels to certifier for review and approval prior to exporting"
            },
            {
                "option_text": "Other"
            }
            
        ]
    },
    {
        "identifier": "labeling_sales_q_028",
        "question": "How does your operation ensure that the relevant Organic Trade Arrangements are met for products sent to the above checked countries? - Other",
        "description": "",
        "placeholder": None,
        "answer_type": "text",
        "serial_no": 28,
        "multiple_answers_allowed": False,
        "required": True,
        "conditions": {
            "rule": "all",
            "conditions": [
                {
                    "answer": "Other",
                    "question_identifier": "labeling_sales_q_024"
                }
            ]
        },
        "options": []
    }
  
]

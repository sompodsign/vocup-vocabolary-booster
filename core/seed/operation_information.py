questions = [
    {
        "identifier": "operation_information_q_001",
        "question": "Operation Name",
        "description": "",
        "placeholder": "Operation Name",
        "answer_type": "text",
        "serial_no": 1,
        "multiple_answers_allowed": False,
        "required": True,
        "conditions": None,
        "options": []
    },
    {
        "identifier": "operation_information_q_002",
        "question": "Please specify your company's entity type?",
        "description": "",
        "placeholder": "LLC",
        "answer_type": "dropdown",
        "serial_no": 2,
        "multiple_answers_allowed": False,
        "required": True,
        "conditions": None,
        "options": [
            {
                "option_text": "Sole Proprietorship"
            },
            {
                "option_text": "LLC"
            },
            {
                "option_text": "Corporation"
            },
            {
                "option_text": "Other"
            }
        ]
    },
    {
        "identifier": "operation_information_q_003",
        "question": "When do you need certification",
        "description": "",
        "placeholder": "mm/dd/yyyy",
        "answer_type": "date",
        "serial_no": 3,
        "multiple_answers_allowed": False,
        "required": True,
        "conditions": None,
        "options": []
    },
    {
        "identifier": "operation_information_q_004",
        "question": "Does the Operation Name produce or handle:",
        "description": "",
        "placeholder": None,
        "answer_type": "radio",
        "serial_no": 4,
        "multiple_answers_allowed": False,
        "required": True,
        "conditions": None,
        "options": [
            {
                "option_text": "Both organic and non organic product(s)"
            },
            {
                "option_text": "Organic products(s) only"
            }
        ]
    },
    {
        "identifier": "operation_information_q_005",
        "question": "List of registered DBA(s) (doing business as) associated with operation.",
        "description": "",
        "placeholder": "Enter your DBA",
        "answer_type": "dba",
        "serial_no": 5,
        "multiple_answers_allowed": True,
        "required": True,
        "conditions": None,
        "options": []
    },
    {
        "identifier": "operation_information_q_006",
        "question": "Operation Primary Location to be Inspected",
        "description": "",
        "placeholder": "Address",
        "answer_type": "long_text",
        "serial_no": 6,
        "multiple_answers_allowed": False,
        "required": True,
        "conditions": None,
        "options": []
    },
    {
        "identifier": "operation_information_q_007",
        "question": "My operation billing address is the same as my primary location",
        "description": "",
        "placeholder": "Billing Address",
        "answer_type": "checkbox_boolean",
        "serial_no": 7,
        "multiple_answers_allowed": False,
        "required": True,
        "conditions": None,
        "options": []
    },
    {
        "identifier": "operation_information_q_008",
        "question": "My operation mailing address is the same as my primary location",
        "description": "",
        "placeholder": "Mailing Address",
        "answer_type": "checkbox_boolean",
        "serial_no": 9,
        "multiple_answers_allowed": False,
        "required": True,
        "conditions": None,
        "options": []
    },
    {
        "identifier": "operation_information_q_009",
        "question": "Primary Contact",
        "description": "",
        "placeholder": None,
        "answer_type": "contact",
        "serial_no": 11,
        "multiple_answers_allowed": False,
        "required": True,
        "conditions": None,
        "options": []
    },
    {
        "identifier": "operation_information_q_010",
        "question": "My legally responsible contact information is the same as my primary contact information",
        "description": "",
        "placeholder": None,
        "answer_type": "checkbox_boolean",
        "serial_no": 12,
        "multiple_answers_allowed": False,
        "required": True,
        "conditions": None,
        "options": []
    },
    {
        "identifier": "operation_information_q_011",
        "question": "My billing contact information is the same as my primary contact information",
        "description": "",
        "placeholder": None,
        "answer_type": "checkbox_boolean",
        "serial_no": 14,
        "multiple_answers_allowed": False,
        "required": True,
        "conditions": None,
        "options": []
    },
    {
        "identifier": "operation_information_q_012",
        "question": "Additional Contacts",
        "description": "",
        "placeholder": None,
        "answer_type": "contact",
        "serial_no": 16,
        "multiple_answers_allowed": True,
        "required": False,
        "conditions": None,
        "options": []
    },
    {
        "identifier": "operation_information_q_013",
        "question": "Communication preference",
        "description": "",
        "placeholder": None,
        "answer_type": "checkbox_multi_select",
        "serial_no": 17,
        "multiple_answers_allowed": True,
        "required": True,
        "conditions": None,
        "options": [
            {
                "option_text": "Email"
            },
            {
                "option_text": "Phone"
            },
            {
                "option_text": "Mail"
            }
        ]
    },
    {
        "identifier": "operation_information_q_014",
        "question": "Scopes of certification you are applying for",
        "description": "",
        "placeholder": None,
        "answer_type": "checkbox_multi_select",
        "serial_no": 18,
        "multiple_answers_allowed": True,
        "required": True,
        "conditions": None,
        "options": [
            {
                "option_text": "Crop"
            },
            {
                "option_text": "Wild-crop"
            },
            {
                "option_text": "Transitional"
            }
        ]
    },
    {
        "identifier": "operation_information_q_015",
        "question": "Have you received and reviewed the NOP standards and any other applicable international standards or equivalency arrangements (EU, LPO, US-Canada Equivalency, etc)?",
        "description": "",
        "placeholder": None,
        "answer_type": "boolean",
        "serial_no": 19,
        "multiple_answers_allowed": False,
        "required": True,
        "conditions": None,
        "options": []
    },
    {
        "identifier": "operation_information_q_016",
        "question": "Which, if any, regulatory agencies inspect your operations?",
        "description": "",
        "placeholder": "Agency Name",
        "answer_type": "text",
        "serial_no": 20,
        "multiple_answers_allowed": False,
        "required": True,
        "conditions": None,
        "options": []
    },
    {
        "identifier": "operation_information_q_017",
        "question": "Have you ever had a negative scoring report from any regulatory agency including, but not limited to: FDA, OSHA, or a state's Department of Health or Agriculture?",
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
        "identifier": "operation_information_q_018",
        "question": "Has this operation ever been certified organic?",
        "description": "",
        "placeholder": None,
        "answer_type": "boolean",
        "serial_no": 22,
        "multiple_answers_allowed": False,
        "required": True,
        "conditions": None,
        "options": []
    },
    {
        "identifier": "operation_information_q_019",
        "question": "Has this operation ever been denied certification?",
        "description": "",
        "placeholder": None,
        "answer_type": "boolean",
        "serial_no": 38,
        "multiple_answers_allowed": False,
        "required": True,
        "conditions": None,
        "options": []
    },
    {
        "identifier": "operation_information_q_020",
        "question": "Has this operation ever withdrawn an application for certification with outstanding points of non-compliance?",
        "description": "",
        "placeholder": None,
        "answer_type": "boolean",
        "serial_no": 41,
        "multiple_answers_allowed": False,
        "required": True,
        "conditions": None,
        "options": []
    },
    {
        "identifier": "operation_information_q_021",
        "question": "Is this operation located in California?",
        "description": "",
        "placeholder": None,
        "answer_type": "boolean",
        "serial_no": 44,
        "multiple_answers_allowed": False,
        "required": True,
        "conditions": None,
        "options": []
    },
    {
        "identifier": "operation_information_q_022",
        "question": "Billing Address",
        "description": "",
        "placeholder": "Billing Address",
        "answer_type": "long_text",
        "serial_no": 8,
        "multiple_answers_allowed": False,
        "required": True,
        "conditions": {
            "rule": "all",
            "conditions": [
                {
                    "answer": False,
                    "question_identifier": "operation_information_q_007"
                }
            ]
        },
        "options": []
    },
    {
        "identifier": "operation_information_q_023",
        "question": "Mailing Address",
        "description": "",
        "placeholder": "Mailing Address",
        "answer_type": "long_text",
        "serial_no": 10,
        "multiple_answers_allowed": False,
        "required": True,
        "conditions": {
            "rule": "all",
            "conditions": [
                {
                    "answer": False,
                    "question_identifier": "operation_information_q_008"
                }
            ]
        },
        "options": []
    },
    {
        "identifier": "operation_information_q_024",
        "question": "Legally Responsible Contact",
        "description": "",
        "placeholder": None,
        "answer_type": "contact",
        "serial_no": 13,
        "multiple_answers_allowed": False,
        "required": True,
        "conditions": {
            "rule": "all",
            "conditions": [
                {
                    "answer": False,
                    "question_identifier": "operation_information_q_010"
                }
            ]
        },
        "options": []
    },
    {
        "identifier": "operation_information_q_025",
        "question": "Billing Contact",
        "description": "",
        "placeholder": None,
        "answer_type": "contact",
        "serial_no": 15,
        "multiple_answers_allowed": False,
        "required": True,
        "conditions": {
            "rule": "all",
            "conditions": [
                {
                    "answer": False,
                    "question_identifier": "operation_information_q_011"
                }
            ]
        },
        "options": []
    },
    {
        "identifier": "operation_information_q_026",
        "question": "Are you currently certified organic by another certification agency?",
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
                    "question_identifier": "operation_information_q_018"
                }
            ]
        },
        "options": []
    },
    {
        "identifier": "operation_information_q_027",
        "question": "By which agency(ies) were/are you certified?",
        "description": "",
        "placeholder": "Agency Name",
        "answer_type": "text",
        "serial_no": 26,
        "multiple_answers_allowed": False,
        "required": True,
        "conditions": {
            "rule": "all",
            "conditions": [
                {
                    "answer": True,
                    "question_identifier": "operation_information_q_018"
                }
            ]
        },
        "options": []
    },
    {
        "identifier": "operation_information_q_028",
        "question": "What were the dates that the organic certification was maintained?",
        "description": "",
        "placeholder": None,
        "answer_type": "date_range",
        "serial_no": 27,
        "multiple_answers_allowed": False,
        "required": True,
        "conditions": {
            "rule": "all",
            "conditions": [
                {
                    "answer": True,
                    "question_identifier": "operation_information_q_018"
                }
            ]
        },
        "options": []
    },
    {
        "identifier": "operation_information_q_029",
        "question": "Are there any outstanding non-compliances that have been issued by any of the agencies identified above?",
        "description": "",
        "placeholder": None,
        "answer_type": "boolean",
        "serial_no": 28,
        "multiple_answers_allowed": False,
        "required": True,
        "conditions": {
            "rule": "all",
            "conditions": [
                {
                    "answer": True,
                    "question_identifier": "operation_information_q_018"
                }
            ]
        },
        "options": []
    },
    {
        "identifier": "operation_information_q_030",
        "question": "Has this operation ever had its certification suspended?",
        "description": "",
        "placeholder": None,
        "answer_type": "boolean",
        "serial_no": 29,
        "multiple_answers_allowed": False,
        "required": True,
        "conditions": {
            "rule": "all",
            "conditions": [
                {
                    "answer": True,
                    "question_identifier": "operation_information_q_018"
                }
            ]
        },
        "options": []
    },
    {
        "identifier": "operation_information_q_031",
        "question": "Has this operation ever had its certification revoked?",
        "description": "",
        "placeholder": None,
        "answer_type": "boolean",
        "serial_no": 32,
        "multiple_answers_allowed": False,
        "required": True,
        "conditions": {
            "rule": "all",
            "conditions": [
                {
                    "answer": True,
                    "question_identifier": "operation_information_q_018"
                }
            ]
        },
        "options": []
    },
    {
        "identifier": "operation_information_q_032",
        "question": "Has this operation ever surrendered certification with outstanding points of non-compliance?",
        "description": "",
        "placeholder": None,
        "answer_type": "boolean",
        "serial_no": 35,
        "multiple_answers_allowed": False,
        "required": True,
        "conditions": {
            "rule": "all",
            "conditions": [
                {
                    "answer": True,
                    "question_identifier": "operation_information_q_018"
                }
            ]
        },
        "options": []
    },
    {
        "identifier": "operation_information_q_033",
        "question": "Has this operation ever been denied certification? - Explanation",
        "description": "",
        "placeholder": "Please explain",
        "answer_type": "long_text",
        "serial_no": 39,
        "multiple_answers_allowed": False,
        "required": True,
        "conditions": {
            "rule": "all",
            "conditions": [
                {
                    "answer": True,
                    "question_identifier": "operation_information_q_019"
                }
            ]
        },
        "options": []
    },
    {
        "identifier": "operation_information_q_034",
        "question": "Has this operation ever been denied certification? - Document",
        "description": "",
        "placeholder": "Please attach a copy of all relevant letter(s) and a description of any/all corrective actions.",
        "answer_type": "document",
        "serial_no": 40,
        "multiple_answers_allowed": False,
        "required": True,
        "conditions": {
            "rule": "all",
            "conditions": [
                {
                    "answer": True,
                    "question_identifier": "operation_information_q_019"
                }
            ]
        },
        "options": []
    },
    {
        "identifier": "operation_information_q_035",
        "question": "Has this operation ever withdrawn an application for certification with outstanding points of non-compliance? - Explanation",
        "description": "",
        "placeholder": "Please explain",
        "answer_type": "long_text",
        "serial_no": 42,
        "multiple_answers_allowed": False,
        "required": True,
        "conditions": {
            "rule": "all",
            "conditions": [
                {
                    "answer": True,
                    "question_identifier": "operation_information_q_020"
                }
            ]
        },
        "options": []
    },
    {
        "identifier": "operation_information_q_036",
        "question": "Has this operation ever withdrawn an application for certification with outstanding points of non-compliance? - Document",
        "description": "",
        "placeholder": "Please attach a copy of all relevant letter(s) and a description of any/all corrective actions.",
        "answer_type": "document",
        "serial_no": 43,
        "multiple_answers_allowed": False,
        "required": True,
        "conditions": {
            "rule": "all",
            "conditions": [
                {
                    "answer": True,
                    "question_identifier": "operation_information_q_020"
                }
            ]
        },
        "options": []
    },
    {
        "identifier": "operation_information_q_037",
        "question": "Enter your California Department of Food & Agriculture Organic Registration Number",
        "description": "",
        "placeholder": "Registration Number",
        "answer_type": "text",
        "serial_no": 45,
        "multiple_answers_allowed": False,
        "required": True,
        "conditions": {
            "rule": "all",
            "conditions": [
                {
                    "answer": True,
                    "question_identifier": "operation_information_q_021"
                }
            ]
        },
        "options": []
    },
    {
        "identifier": "operation_information_q_038",
        "question": "If you are currently certified, attach a copy of your most recent organic certificate(s).",
        "description": "",
        "placeholder": None,
        "answer_type": "document",
        "serial_no": 24,
        "multiple_answers_allowed": False,
        "required": True,
        "conditions": {
            "rule": "all",
            "conditions": [
                {
                    "answer": True,
                    "question_identifier": "operation_information_q_026"
                }
            ]
        },
        "options": []
    },
    {
        "identifier": "operation_information_q_039",
        "question": "Will you be maintaining your other organic certification(s)?",
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
                    "question_identifier": "operation_information_q_026"
                }
            ]
        },
        "options": []
    },
    {
        "identifier": "operation_information_q_040",
        "question": "Has this operation ever had its certification suspended? - Explanation",
        "description": "",
        "placeholder": "Please explain",
        "answer_type": "long_text",
        "serial_no": 30,
        "multiple_answers_allowed": False,
        "required": True,
        "conditions": {
            "rule": "all",
            "conditions": [
                {
                    "answer": True,
                    "question_identifier": "operation_information_q_030"
                }
            ]
        },
        "options": []
    },
    {
        "identifier": "operation_information_q_041",
        "question": "Has this operation ever had its certification suspended? - Document",
        "description": "",
        "placeholder": "Please attach a copy of all relevant letter(s) and a description of any/all corrective actions.",
        "answer_type": "document",
        "serial_no": 31,
        "multiple_answers_allowed": False,
        "required": True,
        "conditions": {
            "rule": "all",
            "conditions": [
                {
                    "answer": True,
                    "question_identifier": "operation_information_q_030"
                }
            ]
        },
        "options": []
    },
    {
        "identifier": "operation_information_q_042",
        "question": "Has this operation ever had its certification revoked? - Explanation",
        "description": "",
        "placeholder": "Please explain",
        "answer_type": "long_text",
        "serial_no": 33,
        "multiple_answers_allowed": False,
        "required": True,
        "conditions": {
            "rule": "all",
            "conditions": [
                {
                    "answer": True,
                    "question_identifier": "operation_information_q_031"
                }
            ]
        },
        "options": []
    },
    {
        "identifier": "operation_information_q_043",
        "question": "Has this operation ever had its certification revoked? - Document",
        "description": "",
        "placeholder": "Please attach a copy of all relevant letter(s) and a description of any/all corrective actions.",
        "answer_type": "document",
        "serial_no": 34,
        "multiple_answers_allowed": False,
        "required": True,
        "conditions": {
            "rule": "all",
            "conditions": [
                {
                    "answer": True,
                    "question_identifier": "operation_information_q_031"
                }
            ]
        },
        "options": []
    },
    {
        "identifier": "operation_information_q_044",
        "question": "Has this operation ever surrendered certification with outstanding points of non-compliance? - Explanation",
        "description": "",
        "placeholder": "Please explain",
        "answer_type": "long_text",
        "serial_no": 36,
        "multiple_answers_allowed": False,
        "required": True,
        "conditions": {
            "rule": "all",
            "conditions": [
                {
                    "answer": True,
                    "question_identifier": "operation_information_q_032"
                }
            ]
        },
        "options": []
    },
    {
        "identifier": "operation_information_q_045",
        "question": "Has this operation ever surrendered certification with outstanding points of non-compliance? - Document",
        "description": "",
        "placeholder": "Please attach a copy of all relevant letter(s) and a description of any/all corrective actions.",
        "answer_type": "document",
        "serial_no": 37,
        "multiple_answers_allowed": False,
        "required": True,
        "conditions": {
            "rule": "all",
            "conditions": [
                {
                    "answer": True,
                    "question_identifier": "operation_information_q_032"
                }
            ]
        },
        "options": []
    }
]

from django.conf import settings
from django.core.management.base import BaseCommand
from django.db import transaction
from quickorganics.core.seed import operation_information, aqua_greenhouse, seed_planting, biodiversity, \
    crop_fertility, pest_disease, contamination_prevention, record_keeping, wild_crop, materials_list, harvest_storage, labeling_sales
from quickorganics.modules.models import Module

from quickorganics.questions.models import Question, Option


def insert_question(q, module):
    question = Question.objects.filter(identifier=q['identifier']).first()
    if question is None:
        question = Question.objects.create(
            identifier=q['identifier'],
            question=q['question'],
            description=q['description'],
            placeholder=q['placeholder'],
            module=module,
            answer_type=q['answer_type'],
            multiple_answers_allowed=q['multiple_answers_allowed'],
            required=q['required'],
            serial_no=q['serial_no'],
            conditions=q['conditions']
        )
    if q['answer_type'] == Question.RADIO or q['answer_type'] == Question.DROPDOWN \
            or q['answer_type'] == Question.CHECKBOX_MULTI_SELECT:
        for option in q['options']:
            if not Option.objects.filter(option_text=option['option_text'], question=question).exists():
                Option.objects.create(
                    option_text=option['option_text'],
                    question=question
                )


class Command(BaseCommand):
    help = 'Create Questions with their options (if any)'

    def handle(self, *args, **options):
        try:
            with transaction.atomic():
                # operation-information
                for q in operation_information.questions:
                    operation_information_module = Module.objects.filter(identifier=settings.OPERATION_INFORMATION).first()
                    if operation_information_module is None:
                        raise Exception(f"Module {settings.OPERATION_INFORMATION} is not found")
                    insert_question(q, operation_information_module)

                # aqua-greenhouse
                for q in aqua_greenhouse.questions:
                    aqua_greenhouse_module = Module.objects.filter(
                        identifier=settings.AQUA_GREENHOUSE).first()
                    if aqua_greenhouse_module is None:
                        raise Exception(f"Module {settings.AQUA_GREENHOUSE} is not found")
                    insert_question(q, aqua_greenhouse_module)

                # seed-planting
                for q in seed_planting.questions:
                    seed_planting_module = Module.objects.filter(
                        identifier=settings.SEED_PLANTING).first()
                    if seed_planting_module is None:
                        raise Exception(f"Module {settings.SEED_PLANTING} is not found")
                    insert_question(q, seed_planting_module)

                # harvest-storage
                for q in harvest_storage.questions:
                    harvest_storage_module = Module.objects.filter(identifier=settings.HARVEST_STORAGE).first()
                    if harvest_storage_module is None:
                        raise Exception(f"Module {settings.HARVEST_STORAGE} is not found")
                    insert_question(q, harvest_storage_module)

                # crop-fertility
                for q in crop_fertility.questions:
                    crop_fertility_module = Module.objects.filter(identifier=settings.CROP_FERTILITY).first()
                    if crop_fertility_module is None:
                        raise Exception(f"Module {settings.CROP_FERTILITY} is not found")
                    insert_question(q, crop_fertility_module)

                # biodiversity
                for q in biodiversity.questions:
                    biodiversity_module = Module.objects.filter(identifier=settings.BIODIVERSITY).first()
                    if biodiversity_module is None:
                        raise Exception(f"Module {settings.BIODIVERSITY} is not found")
                    insert_question(q, biodiversity_module)

                # materials-list
                for q in materials_list.questions:
                    materials_list_module = Module.objects.filter(identifier=settings.MATERIALS_LIST).first()
                    if materials_list_module is None:
                        raise Exception(f"Module {settings.MATERIALS_LIST} is not found")
                    insert_question(q, materials_list_module)

                # pest-disease
                for q in pest_disease.questions:
                    pest_disease_module = Module.objects.filter(identifier=settings.PEST_DISEASE).first()
                    if pest_disease_module is None:
                        raise Exception(f"Module {settings.PEST_DISEASE} is not found")
                    insert_question(q, pest_disease_module)

                # contamination-prevention
                for q in contamination_prevention.questions:
                    contamination_prevention_module = Module.objects.filter(identifier=
                                                                            settings.CONTAMINATION_PREVENTION).first()
                    if contamination_prevention_module is None:
                        raise Exception(f"Module {settings.CONTAMINATION_PREVENTION} is not found")
                    insert_question(q, contamination_prevention_module)

                # record-keeping
                for q in record_keeping.questions:
                    record_keeping_module = Module.objects.filter(identifier=settings.RECORD_KEEPING).first()
                    if record_keeping_module is None:
                        raise Exception(f"Module {settings.RECORD_KEEPING} is not found")
                    insert_question(q, record_keeping_module)

                # wild-crop
                for q in wild_crop.questions:
                    wild_crop_module = Module.objects.filter(identifier=settings.WILD_CROP).first()
                    if wild_crop_module is None:
                        raise Exception(f"Module {settings.WILD_CROP} is not found")
                    insert_question(q, wild_crop_module)

                # labeling_sales
                for q in labeling_sales.questions:
                    labeling_sales_module = Module.objects.filter(identifier=settings.LABELING_SALES).first()
                    if labeling_sales_module is None:
                        raise Exception(f"Module {settings.LABELING_SALES} is not found")
                    insert_question(q, labeling_sales_module)

        except Exception as e:
            print(e)
            transaction.rollback()

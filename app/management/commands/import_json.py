import json
from django.core.management.base import BaseCommand
from app.models import Data
from datetime import datetime

class Command(BaseCommand):
    help = 'Import External json data into Django database'

    def handle(self, *args, **kwargs):
        file_path = r"C:\Users\ambreesh kumar\OneDrive\Desktop\Dashboard\Dashboard\jsondata.json"

        with open(file_path, 'r', encoding='utf8') as file:
            data = json.load(file)
            print(data)  # Print the loaded data for debugging purposes

            for item in data:
                try:
                    # Parse date strings to Python datetime objects
                    if item['added']:
                        added_date = datetime.strptime(item['added'], "%B, %d %Y %H:%M:%S")
                    else:
                        added_date = None

                    if item['published']:
                        published_date = datetime.strptime(item['published'], "%B, %d %Y %H:%M:%S")
                    else:
                        published_date = None

                    # Create Data object and save to database
                    Data.objects.create(
                        end_year=item['end_year'],
                        intensity=item['intensity'],
                        sector=item['sector'],
                        topic=item['topic'],
                        insight=item['insight'],
                        url=item['url'],
                        region=item['region'],
                        start_year=item['start_year'],
                        impact=item['impact'],
                        added=added_date,
                        published=published_date,
                        country=item['country'],
                        relevance=item['relevance'],
                        pestle=item['pestle'],
                        source=item['source'],
                        title=item['title'],
                        likelihood=item['likelihood'],
                    )

                except ValueError as e:
                    self.stderr.write(f"Error parsing datetime: {e}")

            self.stdout.write(self.style.SUCCESS('Data import completed successfully'))

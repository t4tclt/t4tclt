#!/usr/bin/env python3
"""
Script to process Excel survey data and generate updated Members.tsx data
"""
import json
import re
from collections import Counter

# Load the survey data
with open('survey_data_analysis.json', 'r') as f:
    survey_data = json.load(f)

def normalize_text(text):
    """Normalize text for comparison"""
    if not text:
        return ""
    return str(text).strip().lower()

def process_multi_select(value):
    """Process multi-select responses"""
    if not value:
        return []
    text = str(value)
    # Split by comma or semicolon
    parts = re.split(r'[,;]', text)
    return [p.strip() for p in parts if p.strip()]

def normalize_gender(gender):
    """Normalize gender identity responses"""
    gender = normalize_text(gender)
    # Map variations to standard forms
    mappings = {
        'trans femme': 'Trans femme',
        'trans woman': 'Trans woman',
        'trans masc': 'Trans masc',
        'trans man': 'Trans man',
        'non-binary': 'Non-binary',
        'nonbinary': 'Non-binary',
        'gender fluid': 'Gender fluid',
        'genderfluid': 'Gender fluid',
        'gender non-conforming': 'Gender non-conforming',
        'demigender': 'Demigender',
        'questioning': 'Questioning',
        'agender': 'Agender',
        'two-spirit': 'Two-spirit',
        'cis-ish': 'Cis-ish',
        'intersex': 'Intersex',
        'plural': 'Plural / Other complex identities',
        'im plural': 'Plural / Other complex identities',
    }
    for key, value in mappings.items():
        if key in gender:
            return value
    return None  # Will be grouped as "Other"

def normalize_sexuality(sexuality):
    """Normalize sexuality responses"""
    sexuality = normalize_text(sexuality)
    mappings = {
        'pansexual': 'Pansexual',
        'queer': 'Queer',
        'lesbian': 'Lesbian',
        'bisexual': 'Bisexual',
        'sapphic': 'Sapphic',
        't4t': 'T4T',
        'demisexual': 'Demisexual',
        'polysexual': 'Polysexual',
        'asexual': 'Asexual',
        'gay': 'Gay',
        'questioning': 'Questioning / Other',
    }
    for key, value in mappings.items():
        if key in sexuality:
            return value
    return 'Questioning / Other'

def normalize_ethnicity(ethnicity):
    """Normalize ethnicity responses"""
    ethnicity = normalize_text(ethnicity)
    mappings = {
        'white': 'White/Caucasian',
        'caucasian': 'White/Caucasian',
        'latine': 'Latine',
        'latinx': 'Latine',
        'latino': 'Latine',
        'latina': 'Latine',
        'black': 'Black',
        'african': 'Black',
        'south asian': 'South Asian',
        'indigenous': 'Indigenous',
        'native': 'Indigenous',
        'multiracial': 'Multiracial',
        'multi-racial': 'Multiracial',
        'prefer not to say': 'Prefer not to say',
    }
    for key, value in mappings.items():
        if key in ethnicity:
            return value
    return 'Prefer not to say'

def normalize_event_name(event):
    """Normalize event names"""
    event = str(event).strip()
    mappings = {
        'picinic': 'Picnic',
        'picnic': 'Picnic',
        'board game night': 'Board Game Night',
        'craft night': 'Craft Night',
        'clothes swap': 'Clothes Swap',
        't4t party': 'T4T Party',
        'movie night': 'Movie Night',
        'transgiving': 'Transgiving',
        'social supper': 'Social Supper',
        'discord game night': 'Discord Game Night',
        'pool party': 'Pool party',
        'fairy tea party': 'Fairy Tea Party',
        'battle jacket night': 'Battle Jacket Night',
        'food not bombs picnic': 'Food Not Bombs Picnic',
        'speed friending': 'Speed Friending',
        'skillshare': 'Skillshare',
        'backyard bonfire': 'Backyard Bonfire',
        'makeup lessons': 'Makeup lessons',
        'magic the gathering': 'Magic the Gathering',
        'know your rights': 'Know your Rights',
    }
    event_lower = event.lower()
    for key, value in mappings.items():
        if key in event_lower:
            return value
    # If it's a known variation, return as-is but normalized
    if 'other' in event_lower or 'karaoke' in event_lower or 'thrifting' in event_lower or 'talent' in event_lower or 'scarowinds' in event_lower or 'cat' in event_lower or 'halloween' in event_lower or 'market' in event_lower:
        return 'Other events'
    return event

# Process the data
data = survey_data['data']
total_responses = survey_data['totalResponses']

# Process each question
results = {}

# Gender Identity
gender_counter = Counter()
for row_data in survey_data.get('raw_data', []):
    gender_val = row_data.get('What is your gender identity?', '')
    if gender_val:
        normalized = normalize_gender(gender_val)
        if normalized:
            gender_counter[normalized] += 1
        else:
            gender_counter['Other'] += 1

# Since we don't have raw_data, let's use the aggregated data
if 'What is your gender identity?' in data:
    gender_data = data['What is your gender identity?']
    gender_counter = Counter()
    for key, value in gender_data.items():
        normalized = normalize_gender(key)
        if normalized:
            gender_counter[normalized] += value
        else:
            gender_counter['Other'] += value
    results['genderIdentity'] = dict(gender_counter)

# Similar processing for other fields...
# Let me create a comprehensive processing function

print("Processing survey data...")
print(f"Total responses: {total_responses}")

# For now, let's create a script that outputs the data in the format needed
# I'll process the JSON data directly


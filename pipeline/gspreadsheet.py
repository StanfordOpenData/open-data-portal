from __future__ import print_function
import pickle
import os.path
import csv
from googleapiclient.discovery import build
from google_auth_oauthlib.flow import InstalledAppFlow
from google.auth.transport.requests import Request

# If modifying these scopes, delete the file token.pickle.
SCOPES = ['https://www.googleapis.com/auth/spreadsheets.readonly']

# The ID and range of a sample spreadsheet.
SAMPLE_SPREADSHEET_ID = '1Nq8HiohsIkqwSTMva8mN9KOoW74P3eW25a2TbWl6IBU'
SAMPLE_RANGE_NAME = 'Sheet1!A2:F'

def main():
    """Shows basic usage of the Sheets API.
    Prints values from a sample spreadsheet.
    """
    creds = None
    # The file token.pickle stores the user's access and refresh tokens, and is
    # created automatically when the authorization flow completes for the first
    # time.
    if os.path.exists('token.pickle'):
        with open('token.pickle', 'rb') as token:
            creds = pickle.load(token)
    # If there are no (valid) credentials available, let the user log in.
    if not creds or not creds.valid:
        if creds and creds.expired and creds.refresh_token:
            creds.refresh(Request())
        else:
            flow = InstalledAppFlow.from_client_secrets_file(
                'credentials.json', SCOPES)
            creds = flow.run_local_server()
        # Save the credentials for the next run
        with open('token.pickle', 'wb') as token:
            pickle.dump(creds, token)

    service = build('sheets', 'v4', credentials=creds)

    # Call the Sheets API
    sheet = service.spreadsheets()
    result = sheet.values().get(spreadsheetId=SAMPLE_SPREADSHEET_ID,
                                range=SAMPLE_RANGE_NAME).execute()
    values = result.get('values', [])

    if not values:
        print('No data found.')
    else:
        print('Name, Major:')
        for row in values:
            # Print columns A and E, which correspond to indices 0 and 4.
            print(row)

    with open('output.csv', mode='w') as writeFile:
        fieldnames = ['name', 'display_name', 'create_date', 'source_url', 'description', 'tags', 'stories', 'source', 'owner']
        writer = csv.DictWriter(writeFile, fieldnames=fieldnames)
        writer.writeheader()
        for row in values:
            writer.writerow({'name': row[0], 'display_name': row[1], 'create_date': row[2], 'source_url': row[3], 
            'description': row[4], 'tags': row[5], 'stories': row[6], 'source': row[7], 'owner': row[8]})

if __name__ == '__main__':
    main()

    import csv
    import json

    filename = 'output.csv'
    # Open the CSV
    f = open(filename, 'rU' )
    # Change each fieldname to the appropriate field name. I know, so difficult.
    reader = csv.DictReader(f, fieldnames = ( "name","display_name","create_date","source_url","description","tags","stories","source", "owner"))
    # Parse the CSV into JSON
    data = [row for row in reader]
    data = data[1:]
    out = json.dumps( data )
    print("JSON parsed!")
    # Save the JSON
    f = open( 'metadata.json', 'w')
    f.write(out)
    f.close()
    print("JSON saved!")

    import boto3
    # Create an S3 client
    s3 = boto3.client('s3')
    s3.upload_file('metadata.json', 'open-data-portal', 'metadata.json', ExtraArgs={'ContentType': "application/json", 'ACL':'public-read'})
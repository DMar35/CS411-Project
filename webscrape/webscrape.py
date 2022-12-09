import requests
from bs4 import BeautifulSoup

# Make a request to the ticketmaster website to get the HTML of the page
response = requests.get('https://www.ticketmaster.com/boston-celtics-vs-orlando-magic-boston-massachusetts-12-16-2022/event/01005D10AA6C203F')

# Use BeautifulSoup to parse the HTML of the page
soup = BeautifulSoup(response.text, 'html.parser')

# Find the div element with the class "tm-card-event" that contains information about a specific event
event_divs = soup.find_all('div', class_='tm-card-event')

# Loop through each event div to extract information about the event
for event_div in event_divs:
    # Extract the URL of the event page
    event_url = event_div.find('a', class_='tm-card-event__link')['href']

    # Make a request to the event page to get the HTML of that page
    event_response = requests.get(event_url)

    # Use BeautifulSoup to parse the HTML of the event page
    event_soup = BeautifulSoup(event_response.text, 'html.parser')

    # Find the div element with the class "tm-card-event" that contains information about the event
    event_info_div = event_soup.find('div', class_='tm-card-event')

    # Extract the ticket price or listing information from the event info div
    event_price = event_info_div.find('div', class_='tm-card-event__pricing').text

    # Print the extracted information to the console
    print(f'{event_price} - {event_url}')

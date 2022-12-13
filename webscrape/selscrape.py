from bs4 import BeautifulSoup
import time
import re
import json
from selenium import webdriver
from fake_useragent import UserAgent
import MySQLdb

headers = {'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.95 Safari/537.36'}
ua=UserAgent()
hdr = {'User-Agent': ua.random,
      'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
      'Accept-Charset': 'ISO-8859-1,utf-8;q=0.7,*;q=0.3',
      'Accept-Encoding': 'none',
      'Accept-Language': 'en-US,en;q=0.8',
      'Connection': 'keep-alive'}

SEATGEEK = 'https://seatgeek.com/magic-at-celtics-tickets/12-16-2022-boston-massachusetts-td-garden/nba/5775632'
STUBHUB = 'https://www.stubhub.com/boston-celtics-boston-tickets-12-16-2022/event/150337015/?quantity=1'
STUBHUB2 = 'https://www.stubhub.com/a-boogie-wit-da-hoodie-boston-tickets-2-23-2023/event/151223162/?sections=1447476%2C1447422%2C1447423%2C1447424%2C1447425%2C1447426%2C1447427%2C1447428%2C1447429%2C1447430%2C1447479%2C1447480%2C1447481%2C1447452%2C1447454%2C1447462%2C1447477%2C1447482%2C1447431%2C1447432%2C1447433%2C1447434%2C1447435%2C1447436%2C1447437%2C1447438%2C1447439%2C1447470%2C1447472%2C1447474%2C1447475%2C1447478&ticketClasses=682%2C1774%2C306&listingQty=&quantity=1'
VIVID = 'https://www.vividseats.com/boston-celtics-tickets-td-garden-12-16-2022--sports-nba-basketball/production/4067924'
TM = 'https://www.ticketmaster.com/boston-celtics-vs-orlando-magic-boston-massachusetts-12-16-2022/event/01005D10AA6C203F'

def get_event_html(link):
    driver = webdriver.Chrome()
    driver.maximize_window()
    driver.get(link)
    pageSource = driver.execute_script("return document.body.innerHTML;")
    fileToWrite = open("page_source.html", "w")
    fileToWrite.write(pageSource)
    fileToWrite.close()
    fileToRead = open("page_source.html", "r")
    #print(fileToRead.read())
    page = fileToRead.read()
    fileToRead.close()
    driver.quit()
    return page

#Gets Ticket Information
def parse_stubhub(event_text):
    event_text = BeautifulSoup(event_text, features='html.parser')

    event_name = event_text.find('h2', class_="sc-bkbkJK cIUiYg sc-QxirK dUBhJa").text

    #Parse venue/date data
    if event_text.find('div', class_="sc-jfkLlK Na-dnm") == None:
        event_venue = event_text.find('div', class_="sc-jfkLlK jyeyzU").text
    else:
        event_venue = event_text.find('div', class_="sc-jfkLlK Na-dnm").text
    event_time = event_venue.split('  ')
    event_venue = ''.join(event_time[1:]).split(',', 1)
    event_location = event_venue[1].strip()
    event_venue = event_venue[0]
    event_time = event_time[0]


    sections = event_text.find_all('div', class_="sc-eaHRBM sc-hzDicl eupezl gmQRCE")
    price = event_text.find_all('div', class_="sc-eaHRBM eupezl")
    listing_ids = event_text.find_all('div', class_="sc-bgVOXd bKhGWh")

    tickets = {'tickets': []}

    for i in range(len(sections)):
        #tickets[listing_ids[i].attrs['data-listing-id']] = {sections[i].text : price[i].text}
        split_seat = re.split(r'[|:]', sections[i].text)
        if len(split_seat) > 2:
            tickets['tickets'].append({
                'eventID': listing_ids[i].attrs['data-listing-id'],
                'eventName': event_name,
                'eventDate': event_time,
                'eventVenue': event_venue,
                'eventLocation': event_location,
                'eventSection': split_seat[1],
                'eventRow': split_seat[3],
                'ticketPrice': price[i].text
            })
        else:
            tickets['tickets'].append({
                'eventID': listing_ids[i].attrs['data-listing-id'],
                'eventName': event_name,
                'eventDate': event_time,
                'eventVenue': event_venue,
                'eventLocation': event_location,
                'eventSection': split_seat[1],
                'ticketPrice': price[i].text
            })

        
    return tickets

def parse_ticketmaster(event_text):
    #event_text = BeautifulSoup
    return 

def parse_seatgeek(event_text):
    return

def convertToJSON(data):
    convertedData = json.dumps(data)
    return convertedData

def insertIntoDB(data):
    db= MySQLdb.connect(host="localhost",user="DavidPY", password="Cvtarb12", database="ticket_backend")
    c=db.cursor()
    c.execute("INSERT INTO tickets_ticketdata (ticketdetails) VALUES (%s)", [data])
    db.commit()
    c.close()
    db.close()

# geek_tickets = get_event(SEATGEEK)
# print(parse_seatgeek(geek_tickets))

stub_tickets = get_event_html(STUBHUB2)
stub_tickets = parse_stubhub(stub_tickets)
stub_tickets = convertToJSON(stub_tickets)
#print(stub_tickets)
insertIntoDB(stub_tickets)

#print(get_event_html(TM))



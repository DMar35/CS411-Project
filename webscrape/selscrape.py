from bs4 import BeautifulSoup
import time
from selenium import webdriver
from fake_useragent import UserAgent

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
VIVID = 'https://www.vividseats.com/boston-celtics-tickets-td-garden-12-16-2022--sports-nba-basketball/production/4067924'
TM = 'https://www.ticketmaster.com/boston-celtics-vs-orlando-magic-boston-massachusetts-12-16-2022/event/01005D10AA6C203F'

def get_event_html(link):
    driver = webdriver.Chrome()
    driver.maximize_window()
    driver.get(link)
    pageSource = driver.execute_script("return document.body.innerHTML;")
    #fileToWrite = open("page_source.html", "w")
    #fileToWrite.write(pageSource)
    #fileToWrite.close()
    fileToRead = open("page_source.html", "r")
    #print(fileToRead.read())
    page = fileToRead.read()
    fileToRead.close()
    driver.quit()
    return page

#TO-DO's:
#Get Ticket Prices/Sections
#Get Event Ticket/Listing ID's
def parse_stubhub(event_text):
    event_text = BeautifulSoup(event_text, features='html.parser')
    sections = event_text.find_all('div', class_="sc-igRwjb sc-eaHRBM ibSsvj eupezl")
    price = event_text.find_all('div', class_="sc-igRwjb ibSsvj")
    listing_ids = event_text.find_all('div', class_="sc-iXwhVA bXGUMM")
    tickets = {}
    for i in range(len(sections)):
        tickets[listing_ids[i].attrs['data-listing-id']] = {sections[i].text : price[i].text}
    return tickets

def parse_ticketmaster(event_text):
    event_text = BeautifulSoup

def parse_seatgeek(event_text):
    return

# geek_tickets = get_event(SEATGEEK)
# print(parse_seatgeek(geek_tickets))

# stub_tickets = get_event_html(STUBHUB)
# print(parse_stubhub(stub_tickets))

print(get_event_html(TM))



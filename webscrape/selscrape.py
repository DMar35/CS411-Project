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

URL = 'https://seatgeek.com/magic-at-celtics-tickets/12-16-2022-boston-massachusetts-td-garden/nba/5775632'

dr = webdriver.Chrome()
time.sleep(5)
#dr.get("https://www.stubhub.com/boston-celtics-boston-tickets-12-16-2022/event/150337015/?quantity=2")
dr.get(URL)
bs = BeautifulSoup(dr.page_source,"lxml")

print(bs.text)
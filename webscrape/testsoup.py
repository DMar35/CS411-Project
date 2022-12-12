import requests
from bs4 import BeautifulSoup
from fake_useragent import UserAgent


headers = {'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.95 Safari/537.36'}
ua=UserAgent()
hdr = {'User-Agent': ua.random,
      'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
      'Accept-Charset': 'ISO-8859-1,utf-8;q=0.7,*;q=0.3',
      'Accept-Encoding': 'none',
      'Accept-Language': 'en-US,en;q=0.8',
      'Connection': 'keep-alive'}


proxies = {
    'http': "http://85.195.104.71:80", 
    'https': "https://85.195.104.71:80"
}

VIVID = 'https://www.vividseats.com/boston-celtics-tickets-td-garden-12-16-2022--sports-nba-basketball/production/4067924'

response = requests.get(VIVID,
           headers=hdr,
           #proxies=proxies,
           #verify=False
           )

soup = BeautifulSoup(response.text, 'lxml')

#print(response.text)
print(soup.text)
# news = soup.find_all('div', class_='page__wrapper')
# print(news)
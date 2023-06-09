import requests
from bs4 import BeautifulSoup

url = "https://www.who.int/"
response = requests.get(url)
html_content = response.content

soup = BeautifulSoup(html_content, "html.parser")
landing_page_html = soup.prettify()

print(landing_page_html)
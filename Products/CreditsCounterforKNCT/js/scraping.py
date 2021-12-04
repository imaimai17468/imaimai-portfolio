import requests
from bs4 import BeautifulSoup

school_id = '14'

department_id = ['11', '12', '13', '14', '15']

year = '2021'

for department in department_id:
    url = 'https://syllabus.kosen-k.go.jp/Pages/PublicSubjects?school_id=' + school_id + '&department_id=' + department + '&year= ' + year + ' &lang=ja'
    html = requests.get(url)
    soup = BeautifulSoup(html.text, 'html.parser')

    subjects = []
    for element in soup.find_all(class_="mcc-hide"):
        name = element.get_text()
        subjects.append(name)

    ippan_senmon = []
    hissyu_sentaku = []
    tanni = []
    tanni_flag = False
    for element in soup.find_all('td'):
        str = element.get_text()
        if str == '一般' or str == '専門':
            ippan_senmon.append(str)
        
        if '必修' in str or '選択' in str:
            hissyu_sentaku.append(str)
        
        if '単位' in str:
            tanni_flag = True
            continue

        if tanni_flag and len(str) == 1 and str != '前' and str != '後':
            tanni.append(str)
            tanni_flag = False

    f = open('./' + department + '.csv', 'w')
    f.write('教科名,科目,区分,単位数\n')
    for i in range(len(subjects)):
        if '日本語' in subjects[i]:
            hissyu_sentaku[i] = '必修（留学生）'
        f.write(subjects[i] + ',' + ippan_senmon[i] + ',' + hissyu_sentaku[i] + ',' + tanni[i] + '\n')
import requests
from bs4 import BeautifulSoup

school_id = '14'

department_id = ['11', '12', '13', '14', '15']
# department_id = ['11']

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
        data = element.get_text()
        if data == '一般' or data == '専門':
            ippan_senmon.append(data)
        
        if '必修' in data or '選択' in data:
            hissyu_sentaku.append(data)
        
        if '単位' in data:
            tanni_flag = True
            continue

        if tanni_flag and len(data) == 1 and data != '前' and data != '後':
            tanni.append(data)
            tanni_flag = False

    cnm = [[] for i in range(5)]
    for i in range(1, 6):
        class_name = 'c' + str(i) + 'm'
        for element in soup.find_all(class_=class_name):
            name = element.get_text()
            cnm[i-1].append(name)

    grade = []
    grade_count = 0
    cnt = 0
    for i in range((int)(len(cnm[0]) / 4)):
        if cnm[grade_count][cnt] != '' or cnm[grade_count][cnt+1] != '' or cnm[grade_count][cnt+2] != '' or cnm[grade_count][cnt+3] != '':
            grade.append(grade_count + 1)
        else:
            grade_count += 1
            grade.append(grade_count + 1)
        
        cnt += 4

    eigo1a = False
    eigo1b = False
    f = open('./' + department + '.csv', 'w')
    f.write('教科名,学年,科目,区分,単位数\n')
    for i in range(len(subjects)):
        if '日本語' in subjects[i]:
            hissyu_sentaku[i] = '必修（留学生）'
        if eigo1a and subjects[i] == '英語演習ⅠＡ':
            continue
        if eigo1b and subjects[i] == '英語演習ⅠＢ':
            continue
        if subjects[i] == '英語演習ⅠＡ':
            eigo1a = True
        if subjects[i] == '英語演習ⅠＢ':
            eigo1b = True
        f.write(subjects[i] + ',' + str(grade[i]) + ',' + ippan_senmon[i] + ',' + hissyu_sentaku[i] + ',' + tanni[i] + '\n')
from bs4 import BeautifulSoup
import requests
import json
from collections import defaultdict

soup = BeautifulSoup(requests.get('http://en.wikipedia.org/wiki/List_of_QI_episodes').text)

episodes = []
panelists = defaultdict(list)

for series in soup.find_all('h2'):
    sspan = series.span
    if sspan is None:
        continue
    series_title = sspan.string
    if 'Pilot' not in series_title and 'Series' not in series_title:
        continue

    episodes_table = series.find_next_sibling('table')
    for episode in episodes_table.find_all('tr'):
        fields = episode.find_all('td')
        if len(fields) < 2:
            continue

        et = fields[0]
        if et.find('sup'):
            et.find('sup').extract()

        episode_title = ''.join(et.stripped_strings).replace('"', '')
        if 'QI VG' in episode_title or 'Compilation' in episode_title or not episode_title:
            continue

        ep = episode_title
        episodes.append(ep)

        ps = fields[1]
        if ps.find('sup'):
            ps.find('sup').extract()
        for panelist in ps.strings:
            p = panelist.strip()
            if p == 'Victoria Coren':
                p = 'Victoria Coren Mitchell'
            if p and p != 'N/A':
                panelists[p].append(ep)

panelists['Alan Davies'] = [e for e in episodes if e != 'Divination']
panelist_data = [{'name': k, 'episodes': [episodes.index(e) for e in v]} for k, v in panelists.items()]

print 'var EPISODES = {};'.format(json.dumps(episodes, indent=4))
print 'var PANELISTS = {};'.format(json.dumps(panelist_data, indent=4))


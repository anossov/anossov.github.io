const COMPOSERS = [
  [
    "Guillaume Du Fay",
    "1397",
    "1474",
    "77"
  ],
  [
    "Johannes Ockeghem",
    "1410",
    "1497",
    "87"
  ],
  [
    "Josquin des Prez",
    "1450",
    "1521",
    "71"
  ],
  [
    "Adrian Willaert",
    "1490",
    "1562",
    "72"
  ],
  [
    "Thomas Tallis",
    "1505",
    "1585",
    "80"
  ],
  [
    "Giovanni Palestrina",
    "1525",
    "1594",
    "69"
  ],
  [
    "William Byrd",
    "1540",
    "1623",
    "83"
  ],
  [
    "John Dowland",
    "1563",
    "1626",
    "63"
  ],
  [
    "Carlo Gesualdo",
    "1566",
    "1613",
    "47"
  ],
  [
    "Claudio Monteverdi",
    "1567",
    "1643",
    "76"
  ],
  [
    "Johannes Kapsperger",
    "1580",
    "1651",
    "71"
  ],
  [
    "Orlando Gibbons",
    "1583",
    "1625",
    "42"
  ],
  [
    "Heinrich Sch\u00fctz",
    "1585",
    "1672",
    "87"
  ],
  [
    "Johann Froberger",
    "1616",
    "1667",
    "50"
  ],
  [
    "Jean-Baptiste Lully",
    "1632",
    "1687",
    "54"
  ],
  [
    "Dieterich Buxtehude",
    "1637",
    "1707",
    "70"
  ],
  [
    "Franz Biber",
    "1644",
    "1704",
    "59"
  ],
  [
    "Arcangelo Corelli",
    "1653",
    "1713",
    "59"
  ],
  [
    "Johann Pachelbel",
    "1653",
    "1706",
    "52"
  ],
  [
    "Henry Purcell",
    "1659",
    "1695",
    "36"
  ],
  [
    "Alessandro Scarlatti",
    "1660",
    "1725",
    "65"
  ],
  [
    "Fran\u00e7ois Couperin",
    "1668",
    "1733",
    "64"
  ],
  [
    "Tomaso Albioni",
    "1671",
    "1751",
    "79"
  ],
  [
    "Antonio Vivaldi",
    "1678",
    "1741",
    "63"
  ],
  [
    "Georg Philipp Telemann",
    "1681",
    "1767",
    "86"
  ],
  [
    "Jean-Joseph Mouret",
    "1682",
    "1738",
    "56"
  ],
  [
    "Jean-Philippe Rameau",
    "1683",
    "1764",
    "80"
  ],
  [
    "Francesco Durante",
    "1684",
    "1755",
    "71"
  ],
  [
    "George Frideric Handel",
    "1685",
    "1759",
    "74"
  ],
  [
    "JS Bach",
    "1685",
    "1750",
    "65"
  ],
  [
    "Domenico Scarlatti",
    "1685",
    "1757",
    "71"
  ],
  [
    "Nicola Porpora",
    "1686",
    "1768",
    "81"
  ],
  [
    "Sylvius Leopold Weiss",
    "1687",
    "1750",
    "63"
  ],
  [
    "Giuseppe Tartini",
    "1692",
    "1770",
    "77"
  ],
  [
    "Giovanni Pergolesi",
    "1710",
    "1736",
    "26"
  ],
  [
    "WF Bach",
    "1710",
    "1784",
    "73"
  ],
  [
    "CPE Bach",
    "1714",
    "1788",
    "74"
  ],
  [
    "Antonio Soler",
    "1729",
    "1783",
    "54"
  ],
  [
    "Joseph Haydn",
    "1732",
    "1809",
    "77"
  ],
  [
    "JC Bach",
    "1735",
    "1782",
    "46"
  ],
  [
    "Luigi Boccherini",
    "1743",
    "1805",
    "62"
  ],
  [
    "Chevalier de Saint-Georges",
    "1745",
    "1799",
    "53"
  ],
  [
    "Domenico Cimarosa",
    "1749",
    "1801",
    "51"
  ],
  [
    "Antonio Salieri",
    "1750",
    "1825",
    "74"
  ],
  [
    "Muzio Clementi",
    "1752",
    "1832",
    "80"
  ],
  [
    "Giovanni Viotti",
    "1755",
    "1824",
    "68"
  ],
  [
    "Wolfgang Amadeus Mozart",
    "1756",
    "1791",
    "35"
  ],
  [
    "\u00c9tienne M\u00e9hul",
    "1763",
    "1817",
    "54"
  ],
  [
    "Ludwig van Beethoven",
    "1770",
    "1827",
    "56"
  ],
  [
    "Johann Baptist Cramer",
    "1771",
    "1858",
    "87"
  ],
  [
    "Johann Hummel",
    "1778",
    "1837",
    "58"
  ],
  [
    "John Field",
    "1782",
    "1837",
    "54"
  ],
  [
    "Niccol\u00f2 Paganini",
    "1782",
    "1840",
    "57"
  ],
  [
    "Friedrich Kuhlau",
    "1786",
    "1832",
    "45"
  ],
  [
    "Carl Maria von Weber",
    "1786",
    "1826",
    "39"
  ],
  [
    "Carl Czerny",
    "1791",
    "1857",
    "66"
  ],
  [
    "Gioachino Rossini",
    "1792",
    "1868",
    "76"
  ],
  [
    "Ignaz Moscheles",
    "1794",
    "1870",
    "75"
  ],
  [
    "Franz Schubert",
    "1797",
    "1828",
    "31"
  ],
  [
    "Hector Berlioz",
    "1803",
    "1869",
    "65"
  ],
  [
    "Fanny Mendelssohn",
    "1805",
    "1847",
    "41"
  ],
  [
    "Juan Arriaga",
    "1806",
    "1826",
    "19"
  ],
  [
    "Felix Mendelssohn",
    "1809",
    "1847",
    "38"
  ],
  [
    "Fr\u00e9d\u00e9ric Chopin",
    "1810",
    "1849",
    "39"
  ],
  [
    "Robert Schumann",
    "1810",
    "1856",
    "46"
  ],
  [
    "Franz Liszt",
    "1811",
    "1886",
    "74"
  ],
  [
    "Richard Wagner",
    "1813",
    "1883",
    "69"
  ],
  [
    "Giuseppe Verdi",
    "1813",
    "1901",
    "87"
  ],
  [
    "Charles-Valentin Alkan",
    "1813",
    "1888",
    "74"
  ],
  [
    "Stephen Heller",
    "1815",
    "1888",
    "72"
  ],
  [
    "Clara Schumann",
    "1819",
    "1896",
    "76"
  ],
  [
    "Bedrich Smetana",
    "1824",
    "1884",
    "60"
  ],
  [
    "Anton Bruckner",
    "1824",
    "1896",
    "72"
  ],
  [
    "Johann Strauss II",
    "1825",
    "1899",
    "73"
  ],
  [
    "Johannes Brahms",
    "1833",
    "1897",
    "63"
  ],
  [
    "Alexander Borodin",
    "1833",
    "1887",
    "53"
  ],
  [
    "C\u00e9sar Cui",
    "1835",
    "1918",
    "83"
  ],
  [
    "Camille Saint-Sa\u00ebns",
    "1835",
    "1921",
    "86"
  ],
  [
    "L\u00e9o Delibes",
    "1836",
    "1891",
    "54"
  ],
  [
    "Mily Balakirev",
    "1837",
    "1910",
    "73"
  ],
  [
    "Georges Bizet",
    "1838",
    "1875",
    "36"
  ],
  [
    "Modest Mussorgsky",
    "1839",
    "1881",
    "42"
  ],
  [
    "Pyotr Ilyich Tchaikovsky",
    "1840",
    "1893",
    "53"
  ],
  [
    "Anton\u00edn Dvo\u0159\u00e1k",
    "1841",
    "1904",
    "62"
  ],
  [
    "Edvard Grieg",
    "1843",
    "1907",
    "64"
  ],
  [
    "Nikolai Rimsky-Korsakov",
    "1844",
    "1908",
    "64"
  ],
  [
    "Gabriel Faur\u00e9",
    "1845",
    "1924",
    "79"
  ],
  [
    "Moritz Moszkowski",
    "1854",
    "1925",
    "70"
  ],
  [
    "John Philip Sousa",
    "1854",
    "1932",
    "77"
  ],
  [
    "Edward Elgar",
    "1857",
    "1934",
    "76"
  ],
  [
    "Hans Rott",
    "1858",
    "1884",
    "25"
  ],
  [
    "Giacomo Puccini",
    "1858",
    "1924",
    "65"
  ],
  [
    "Hugo Wolf",
    "1860",
    "1903",
    "42"
  ],
  [
    "Gustav Mahler",
    "1860",
    "1911",
    "50"
  ],
  [
    "Edward MacDowell",
    "1860",
    "1908",
    "47"
  ],
  [
    "Frederick Delius",
    "1862",
    "1934",
    "72"
  ],
  [
    "Claude Debussy",
    "1862",
    "1918",
    "55"
  ],
  [
    "Richard Strauss",
    "1864",
    "1949",
    "85"
  ],
  [
    "Jean Sibelius",
    "1865",
    "1957",
    "91"
  ],
  [
    "Erik Satie",
    "1866",
    "1925",
    "59"
  ],
  [
    "Amy Beach",
    "1867",
    "1944",
    "77"
  ],
  [
    "Alexander Scriabin",
    "1871",
    "1915",
    "44"
  ],
  [
    "Ralph Vaughan Williams",
    "1872",
    "1958",
    "85"
  ],
  [
    "Sergei Rachmaninoff",
    "1873",
    "1943",
    "69"
  ],
  [
    "Charles Ives",
    "1874",
    "1954",
    "79"
  ],
  [
    "Arnold Schoenberg",
    "1874",
    "1951",
    "76"
  ],
  [
    "Gustav Holst",
    "1874",
    "1934",
    "59"
  ],
  [
    "Maurice Ravel",
    "1875",
    "1937",
    "62"
  ],
  [
    "Havergal Brian",
    "1876",
    "1972",
    "96"
  ],
  [
    "B\u00e9la Bart\u00f3k",
    "1881",
    "1945",
    "64"
  ],
  [
    "Igor Stravinsky",
    "1882",
    "1971",
    "88"
  ],
  [
    "Irving Berlin",
    "1888",
    "1989",
    "101"
  ],
  [
    "Sergei Prokofiev",
    "1891",
    "1953",
    "61"
  ],
  [
    "Herbert Howells",
    "1892",
    "1983",
    "90"
  ],
  [
    "Lili Boulanger",
    "1893",
    "1918",
    "24"
  ],
  [
    "Leo Ornstein",
    "1895",
    "2002",
    "106"
  ],
  [
    "Paul Hindemith",
    "1895",
    "1963",
    "68"
  ],
  [
    "George Gershwin",
    "1898",
    "1937",
    "38"
  ],
  [
    "Aaron Copland",
    "1900",
    "1990",
    "90"
  ],
  [
    "Joaqu\u00edn Rodrigo",
    "1901",
    "1999",
    "97"
  ],
  [
    "Dmitri Shostakovich",
    "1906",
    "1975",
    "68"
  ],
  [
    "Julian Scriabin",
    "1908",
    "1919",
    "11"
  ],
  [
    "Oliver Messiaen",
    "1908",
    "1992",
    "83"
  ],
  [
    "Elliott Carter",
    "1908",
    "2012",
    "103"
  ],
  [
    "Samuel Barber",
    "1910",
    "1981",
    "70"
  ],
  [
    "Morton Gould",
    "1913",
    "1996",
    "82"
  ],
  [
    "Leonard Bernstein",
    "1918",
    "1990",
    "72"
  ],
  [
    "Gy\u00f6rgy Ligeti",
    "1923",
    "2006",
    "83"
  ],
  [
    "Pierre Boulez",
    "1925",
    "2016",
    "90"
  ],
  [
    "Karlheinz Stockhausen",
    "1928",
    "2007",
    "79"
  ],
  [
    "Krzysztof Penderecki",
    "1933",
    "2020",
    "86"
  ]
];
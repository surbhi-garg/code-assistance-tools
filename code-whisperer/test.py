import re

example_sentence = 'price of bag is $100 rs. that is not fair. The fair price is $200'

pattern = re.compile(r'\$[0-9]+')
# [0-9]+ identifies numbers from 0 to 9

matches = pattern.findall(example_sentence)
print(matches)









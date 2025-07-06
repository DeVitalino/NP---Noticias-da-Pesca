import json

with open("dados.json", encoding="utf-8") as f:
    variaveis = json.load(f)

with open("readme-template.md", encoding="utf-8") as f:
    template = f.read()

for chave, valor in variaveis.items():
    template = template.replace(f"{{{{{chave}}}}}", valor)

with open("README.md", "w", encoding="utf-8") as f:
    f.write(template)

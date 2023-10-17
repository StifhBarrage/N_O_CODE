import random

numero_azar = random.randint(1, 10)
print('NUMBER:', numero_azar)

# Asigna las opciones a una lista
opciones = [
    "Run 5 laps without stopping",
    "Drink a beer in depth",
    "No headphones on next Monday",
    "Change WhatsApp profile photo → barbie/PepaPig",
    "Uninstall TikTok/twitter/Quora",
    "Go to Monserrate",
    "Chili pepper",
    "Drink own urine",
    "Invite Food/Billiards (7k-10k)",
    "Two more hours of GitHub"
]

# Verifica si el número aleatorio está dentro del rango válido
if 1 <= numero_azar <= 10:
    opcion_elegida = opciones[numero_azar - 1]  # Resta 1 para obtener el índice correcto
    print("Punishment:", opcion_elegida)
else:
    print("ERROR")

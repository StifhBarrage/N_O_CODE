# import subprocess
# import time

# # Ruta del programa .exe que quieres abrir
# ruta_programa = 'C:\\Users\\ACERa\\Documents\\archivo\\programas\\\MegaDownloader\\pVPN.exe'
# # Tiempo en segundos que quieres que el programa esté abierto antes de cerrarlo
# tiempo_abierto = 60
# # Tiempo en segundos que quieres esperar antes de abrir el programa de nuevo
# tiempo_espera = 1

# # Bucle infinito
# while True:
#     # Abre el programa
#     subprocess.Popen(ruta_programa)

#     # Espera el tiempo indicado antes de cerrar el programa
#     time.sleep(tiempo_abierto)

#     # Cierra el programa
#     subprocess.call(['taskkill', '/F', '/T', '/IM', 'pVPN.exe'])

#     # Espera el tiempo indicado antes de abrir el programa de nuevo
#     time.sleep(tiempo_espera)

def transform_string(n):
    # the first letter of the string is always unchanged
    # if y precedes x in alphabet transform x to uppercase
    # if x precedes y in alphabet transform y to lowercase
    # if x and y are the same letter, leave them as they are
    alphabet = ' aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ'
    new_string = ''
    for i in range(len(n)):
        if i == 0:
            new_string += n[i]
        else:
            if alphabet.index(n[i]) > alphabet.index(n[i-1]):
                new_string += n[i].upper()
            elif alphabet.index(n[i]) < alphabet.index(n[i-1]):
                new_string += n[i].lower()
            else:
                new_string += n[i]
    print(new_string)
transform_string('a Blue MOON')

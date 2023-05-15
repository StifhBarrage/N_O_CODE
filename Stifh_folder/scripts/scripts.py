import subprocess
import time

# Ruta del programa .exe que quieres abrir
ruta_programa = 'C:\\Users\\ACERa\\Documents\\archivo\\programas\\\MegaDownloader\\pVPN.exe'
# Tiempo en segundos que quieres que el programa esté abierto antes de cerrarlo
tiempo_abierto = 60
# Tiempo en segundos que quieres esperar antes de abrir el programa de nuevo
tiempo_espera = 1

# Bucle infinito
while True:
    # Abre el programa
    subprocess.Popen(ruta_programa)

    # Espera el tiempo indicado antes de cerrar el programa
    time.sleep(tiempo_abierto)

    # Cierra el programa
    subprocess.call(['taskkill', '/F', '/T', '/IM', 'pVPN.exe'])

    # Espera el tiempo indicado antes de abrir el programa de nuevo
    time.sleep(tiempo_espera)

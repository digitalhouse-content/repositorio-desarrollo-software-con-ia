def main():
    print("¡Bienvenido a la app de saludos para alumnos!")
    
    # Solicitar nombre del profesor
    nombre_profesor = input("Por favor, ingresá tu nombre: ")
    
    # Solicitar nombre del curso
    nombre_curso = input("Ingresá el nombre del curso: ")
    
    # Mensaje de saludo
    print("\n===================================")
    print(f"¡Hola a todos los alumnos del curso {nombre_curso}!")
    print(f"Les saluda su profesor {nombre_profesor}.")
    print("Espero que disfruten del curso y aprendan mucho. 🚀")
    print("===================================\n")

if __name__ == "__main__":
    main()

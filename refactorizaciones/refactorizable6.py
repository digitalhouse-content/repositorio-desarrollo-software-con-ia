def get_user_input():
    name = input("Ingrese su nombre: ")
    age = input("Ingrese su edad: ")
    return {"name": name, "age": age}

def greet_user(user):
    print(f"Hola {user['name']}! Bienvenido al sistema.")
    print("----------------------")

def verify_age(user):
    access_message = "tienes acceso a contenido completo de la web." if int(user['age']) >= 18 else "tu acceso está restringido."
    print(f"{user['name']}, {access_message}")
    print("----------------------")

def process_user(user):
    greet_user(user)
    verify_age(user)

def main():
    print("Registro de usuarios:")
    for _ in range(2):  # Loop to handle multiple users
        user = get_user_input()
        process_user(user)

if __name__ == "__main__":
    main()

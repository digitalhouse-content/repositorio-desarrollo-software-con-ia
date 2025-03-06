def get_user_input():
    name = input("Ingrese su nombre: ")
    age = input("Ingrese su edad: ")
    return {"name": name, "age": age}

def greet_user(user):
    print(f"Hola {user['name']}! Bienvenido al sistema.")
    print("----------------------")

def verify_age(user):
    if int(user['age']) >= 18:
        print(f"{user['name']}, tienes acceso a contenido para adultos.")
    else:
        print(f"{user['name']}, tu acceso está restringido.")
    print("----------------------")

def process_user(user, greet_callback, verify_callback):
    greet_callback(user)
    verify_callback(user)

def main():
    print("Registro de usuarios:")
    user1 = get_user_input()
    process_user(user1, greet_user, verify_age)
    
    user2 = get_user_input()
    process_user(user2, greet_user, verify_age)
    
if __name__ == "__main__":
    main()

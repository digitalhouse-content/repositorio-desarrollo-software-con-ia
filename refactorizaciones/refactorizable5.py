users = [
    {"id": 1, "name": "Juan Pérez", "email": "juan@example.com", "role": "admin"},
    {"id": 2, "name": "María Gómez", "email": "maria@example.com", "role": "user"},
    {"id": 3, "name": "Carlos López", "email": "carlos@example.com", "role": "user"}
]

def print_admin(user):
    print(f"ID: {user['id']}")
    print(f"Nombre: {user['name']}")
    print(f"Email: {user['email']}")
    print(f"Rol: {user['role']}")
    print("----------------------")

def print_user(user):
    print(f"ID: {user['id']}")
    print(f"Nombre: {user['name']}")
    print(f"Email: {user['email']}")
    print(f"Rol: {user['role']}")
    print("----------------------")

def process_admin(user):
    print(f"Procesando usuario ADMIN: {user['name']}")
    print("Asignando permisos avanzados...")
    print("----------------------")

def process_user(user):
    print(f"Procesando usuario NORMAL: {user['name']}")
    print("Restringiendo acceso a configuraciones avanzadas...")
    print("----------------------")

def send_admin_email(user):
    print(f"Enviando email de bienvenida a ADMIN: {user['email']}")

def send_user_email(user):
    print(f"Enviando email de bienvenida a USUARIO: {user['email']}")

def handle_user(user, print_callback, process_callback, email_callback):
    print_callback(user)
    process_callback(user)
    email_callback(user)

def main():
    print("Procesando usuarios:")
    for user in users:
        if user["role"] == "admin":
            handle_user(user, print_admin, process_admin, send_admin_email)
        elif user["role"] == "user":
            handle_user(user, print_user, process_user, send_user_email)

if __name__ == "__main__":
    main()

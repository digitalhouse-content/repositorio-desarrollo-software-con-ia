users = [
    {"id": 1, "name": "Juan Pérez", "email": "juan@example.com", "role": "admin"},
    {"id": 2, "name": "María Gómez", "email": "maria@example.com", "role": "user"},
    {"id": 3, "name": "Carlos López", "email": "carlos@example.com", "role": "user"}
]

def print_user(user):
    """Print user details regardless of role"""
    details = {
        "ID": user['id'],
        "Nombre": user['name'],
        "Email": user['email'],
        "Rol": user['role']
    }
    
    for key, value in details.items():
        print(f"{key}: {value}")
    print("----------------------")

def process_user(user, role_type):
    """Process user based on their role"""
    role_display = "ADMIN" if role_type == "admin" else "NORMAL"
    action = "Asignando permisos avanzados..." if role_type == "admin" else "Restringiendo acceso a configuraciones avanzadas..."
    
    print(f"Procesando usuario {role_display}: {user['name']}")
    print(action)
    print("----------------------")

def send_email(user, role_type):
    """Send role-specific welcome email"""
    role_display = "ADMIN" if role_type == "admin" else "USUARIO"
    print(f"Enviando email de bienvenida a {role_display}: {user['email']}")

role_handlers = {
    "admin": {
        "process": lambda user: process_user(user, "admin"),
        "email": lambda user: send_email(user, "admin")
    },
    "user": {
        "process": lambda user: process_user(user, "user"),
        "email": lambda user: send_email(user, "user")
    }
}

def main():
    print("Procesando usuarios:")
    for user in users:
        print_user(user)
        handler = role_handlers[user["role"]]
        handler["process"](user)
        handler["email"](user)
        print("----------------------")
if __name__ == "__main__":
    main()

class User:
    def __init__(self, id, name, email):
        self.id = id
        self.name = name
        self.email = email

    def to_dict(self):
        return {'id': self.id, 'name': self.name, 'email': self.email}

# Base de datos en memoria (lista de usuarios)
users_db = [
    User(1, "Juan Pérez", "juan@perez.com"),
    User(2, "Ana Gómez", "ana@gomez.com")
]

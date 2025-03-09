tasks = [
    {"id": 1, "title": "Comprar víveres", "priority": "alta", "status": "pendiente"},
    {"id": 2, "title": "Hacer ejercicio", "priority": "media", "status": "completada"},
    {"id": 3, "title": "Leer un libro", "priority": "baja", "status": "pendiente"}
]

def print_task(task):
    """Print task details regardless of status"""
    details = {
        "ID": task['id'],
        "Tarea": task['title'],
        "Prioridad": task['priority'],
        "Estado": task['status']
    }
    
    for key, value in details.items():
        print(f"{key}: {value}")
    print("----------------------")

def process_task(task):
    """Process a task based on its status"""
    status = task["status"].upper()
    print(f"Procesando tarea {status}: {task['title']}")
    
    if task["status"] == "pendiente":
        print("Enviando recordatorio...")
    else:  # completada
        print("Actualizando historial de tareas...")
    print("----------------------")

def notify_task(task):
    """Send notification based on task status"""
    if task["status"] == "pendiente":
        print(f"Notificación: No olvides completar '{task['title']}'")
    else:  # completada
        print(f"Notificación: Felicidades por completar '{task['title']}'")

def main():
    print("Lista de tareas:")
    for task in tasks:
        print_task(task)
        process_task(task)
        notify_task(task)
        print("----------------------")

if __name__ == "__main__":
    main()
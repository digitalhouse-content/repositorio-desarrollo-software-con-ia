tasks = [
    {"id": 1, "title": "Comprar víveres", "priority": "alta", "status": "pendiente"},
    {"id": 2, "title": "Hacer ejercicio", "priority": "media", "status": "completada"},
    {"id": 3, "title": "Leer un libro", "priority": "baja", "status": "pendiente"}
]

def print_pending_task(task):
    print(f"ID: {task['id']}")
    print(f"Tarea: {task['title']}")
    print(f"Prioridad: {task['priority']}")
    print(f"Estado: {task['status']}")
    print("----------------------")

def print_completed_task(task):
    print(f"ID: {task['id']}")
    print(f"Tarea: {task['title']}")
    print(f"Prioridad: {task['priority']}")
    print(f"Estado: {task['status']}")
    print("----------------------")

def process_pending_task(task):
    print(f"Procesando tarea PENDIENTE: {task['title']}")
    print("Enviando recordatorio...")
    print("----------------------")

def process_completed_task(task):
    print(f"Procesando tarea COMPLETADA: {task['title']}")
    print("Actualizando historial de tareas...")
    print("----------------------")

def notify_pending_task(task):
    print(f"Notificación: No olvides completar '{task['title']}'")

def notify_completed_task(task):
    print(f"Notificación: Felicidades por completar '{task['title']}'")

def main():
    print("Lista de tareas:")
    for task in tasks:
        if task["status"] == "pendiente":
            print_pending_task(task)
            process_pending_task(task)
            notify_pending_task(task)
        elif task["status"] == "completada":
            print_completed_task(task)
            process_completed_task(task)
            notify_completed_task(task)

if __name__ == "__main__":
    main()
def validar_salario(salario):
    if salario < 0:
        raise ValueError("El salario no puede ser negativo")
    return salario

def calcular_promedio_salarios(empleados):
    total_salarios = sum(e.salario for e in empleados)
    return total_salarios / len(empleados) if empleados else 0

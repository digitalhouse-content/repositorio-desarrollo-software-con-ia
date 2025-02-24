class Empleado:
    def __init__(self, id, nombre, salario):
        self.id = id
        self.nombre = nombre
        self.salario = salario
    
    def mostrar_info(self):
        return f"ID: {self.id}, Nombre: {self.nombre}, Salario: {self.salario}"

    def aumentar_salario(self, porcentaje):
        self.salario += self.salario * (porcentaje / 100)

    @staticmethod
    def empleado_con_salario_max(empleados):
        return max(empleados, key=lambda e: e.salario) if empleados else None

    @staticmethod
    def empleado_con_salario_min(empleados):
        return min(empleados, key=lambda e: e.salario) if empleados else None
    
    @staticmethod
    def contar_empleados(empleados):
        return len(empleados)

    @staticmethod
    def filtrar_empleados_por_salario(empleados, min_salario, max_salario):
        return [e for e in empleados if min_salario <= e.salario <= max_salario]
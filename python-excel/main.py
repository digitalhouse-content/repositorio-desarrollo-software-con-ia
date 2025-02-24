from excel_handler import leer_excel, escribir_excel
from empleados import Empleado
import utils

def main():
    # Leer empleados desde un archivo Excel
    empleados = leer_excel('empleados.xlsx')
    
    # Aumentar salario a todos los empleados en un 10%
    for empleado in empleados:
        try:
            empleado.aumentar_salario(10)
        except ValueError as e:
            print(f"Error al aumentar el salario de {empleado.nombre}: {e}")
    
    # Análisis de datos
    promedio = utils.calcular_promedio_salarios(empleados)
    print(f"Salario promedio: {promedio:.2f}")
    
    empleado_max = Empleado.empleado_con_salario_max(empleados)
    if empleado_max:
        print(f"Empleado con el salario más alto: {empleado_max.nombre} con ${empleado_max.salario}")
    
    empleado_min = Empleado.empleado_con_salario_min(empleados)
    if empleado_min:
        print(f"Empleado con el salario más bajo: {empleado_min.nombre} con ${empleado_min.salario}")
    
    numero_empleados = Empleado.contar_empleados(empleados)
    print(f"Número total de empleados: {numero_empleados}")
    
    # Filtrar empleados con salario entre 2500 y 3000
    empleados_filtrados = Empleado.filtrar_empleados_por_salario(empleados, 2500, 3000)
    print(f"Empleados con salario entre 2500 y 3000:")
    for e in empleados_filtrados:
        print(f"- {e.nombre} con ${e.salario}")
    
    # Crear un diccionario con el análisis
    analisis = {
        'promedio': promedio,
        'empleado_max': empleado_max,
        'empleado_min': empleado_min,
        'numero_empleados': numero_empleados
    }
    
    # Escribir los cambios y análisis en un nuevo archivo Excel
    escribir_excel('empleados_analizados.xlsx', empleados, analisis)

if __name__ == "__main__":
    main()

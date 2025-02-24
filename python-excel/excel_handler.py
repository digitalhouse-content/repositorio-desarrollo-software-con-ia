import pandas as pd
from empleados import Empleado

def leer_excel(ruta):
    # Leemos el archivo Excel y lo convertimos a una lista de objetos Empleado
    df = pd.read_excel(ruta)
    empleados = []
    for _, row in df.iterrows():
        empleado = Empleado(row['ID'], row['Nombre'], row['Salario'])
        empleados.append(empleado)
    return empleados

def escribir_excel(ruta, empleados, analisis):
    # Escribimos los datos de los empleados de vuelta a un archivo Excel
    data = {
        'ID': [e.id for e in empleados],
        'Nombre': [e.nombre for e in empleados],
        'Salario': [e.salario for e in empleados]
    }
    df = pd.DataFrame(data)
    
    # Crea un objeto ExcelWriter para escribir múltiples hojas
    with pd.ExcelWriter(ruta, engine='openpyxl') as writer:
        # Escribe la hoja de empleados
        df.to_excel(writer, sheet_name='Empleados', index=False)
        
        # Agregar los resultados del análisis en una nueva hoja llamada "Análisis"
        analisis_data = {
            'Descripción': ['Salario Promedio', 'Empleado Salario Más Alto', 'Empleado Salario Más Bajo', 'Número de Empleados'],
            'Valor': [
                f"${analisis['promedio']:.2f}",
                f"{analisis['empleado_max'].nombre} (${analisis['empleado_max'].salario})",
                f"{analisis['empleado_min'].nombre} (${analisis['empleado_min'].salario})",
                analisis['numero_empleados'],
            ]
        }
        df_analisis = pd.DataFrame(analisis_data)
        df_analisis.to_excel(writer, sheet_name='Análisis', index=False)

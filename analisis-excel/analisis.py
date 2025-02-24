import pandas as pd

# Cargar el archivo Excel
file_path = 'fuente.xlsx'
df = pd.read_excel(file_path, sheet_name='Gastos')

# Calcular el total anual
df['Total Anual'] = df.iloc[:, 1:13].sum(axis=1)

# Calcular el promedio mensual por categoría
df['Promedio Mensual'] = df.iloc[:, 1:13].mean(axis=1)

# Calcular el mes con mayor gasto para cada categoría
df['Mes con Mayor Gasto'] = df.iloc[:, 1:13].idxmax(axis=1)

# Calcular el mes con menor gasto para cada categoría
df['Mes con Menor Gasto'] = df.iloc[:, 1:13].idxmin(axis=1)

# Guardar el análisis en un nuevo archivo Excel
output_file = 'analisis_gastos.xlsx'
df.to_excel(output_file, index=False)

print(f"Análisis guardado en {output_file}")
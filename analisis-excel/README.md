# Análisis de Gastos

Este proyecto realiza un análisis de gastos a partir de un archivo Excel (`fuente.xlsx`) y guarda los resultados en un nuevo archivo Excel (`analisis_gastos.xlsx`).

## Requisitos

- Python 3.x
- Pandas

## Instalación

1. Clona este repositorio o descarga los archivos.
2. Instala las dependencias necesarias ejecutando:
    ```sh
    pip install pandas
    ```

## Uso

1. Asegúrate de tener el archivo [fuente.xlsx](http://_vscodecontentref_/0) en el mismo directorio que [analisis.py](http://_vscodecontentref_/1).
2. Ejecuta el script [analisis.py](http://_vscodecontentref_/2):
    ```sh
    python analisis.py
    ```
3. El análisis se guardará en un nuevo archivo llamado [analisis_gastos.xlsx](http://_vscodecontentref_/3).

## Descripción del Análisis

El script [analisis.py](http://_vscodecontentref_/4) realiza las siguientes operaciones:

1. Carga el archivo Excel [fuente.xlsx](http://_vscodecontentref_/5) desde la hoja `Gastos`.
2. Calcula el total anual de gastos para cada categoría.
3. Calcula el promedio mensual de gastos para cada categoría.
4. Identifica el mes con mayor gasto para cada categoría.
5. Identifica el mes con menor gasto para cada categoría.
6. Guarda los resultados en un nuevo archivo Excel [analisis_gastos.xlsx](http://_vscodecontentref_/6).

## Contacto

Para cualquier consulta, por favor contacta a [info@sergiecode.com](mailto:info@sergiecode.com).
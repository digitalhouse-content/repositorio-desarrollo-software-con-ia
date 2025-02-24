from reportlab.lib.pagesizes import A4
from reportlab.pdfgen import canvas
from reportlab.lib import colors
from reportlab.platypus import Table, TableStyle

def solicitar_datos():
    print("Ingrese sus datos:")
    nombre = input("Nombre: ")
    direccion = input("Dirección: ")
    numero_impositivo = input("Número impositivo: ")
    telefono = input("Teléfono: ")
    email = input("Email: ")
    
    print("Ingrese los datos de la empresa a facturar:")
    empresa_nombre = input("Nombre de la empresa: ")
    empresa_direccion = input("Dirección de la empresa: ")
    empresa_numero_impositivo = input("Número impositivo de la empresa: ")
    empresa_telefono = input("Teléfono de la empresa: ")
    empresa_email = input("Email de la empresa: ")
    
    print("Ingrese los datos bancarios:")
    banco_nombre = input("Nombre del banco: ")
    banco_cuenta = input("Número de cuenta: ")
    banco_cbu = input("CBU: ")
    
    print("Ingrese los ítems de la factura:")
    items = []
    while True:
        descripcion = input("Descripción del ítem (o ENTER para finalizar): ")
        if descripcion == "":
            break
        monto = float(input("Monto: "))
        items.append((descripcion, monto))
    
    return {
        "nombre": nombre, "direccion": direccion, "numero_impositivo": numero_impositivo,
        "telefono": telefono, "email": email, "empresa_nombre": empresa_nombre,
        "empresa_direccion": empresa_direccion, "empresa_numero_impositivo": empresa_numero_impositivo,
        "empresa_telefono": empresa_telefono, "empresa_email": empresa_email,
        "banco_nombre": banco_nombre, "banco_cuenta": banco_cuenta, "banco_cbu": banco_cbu,
        "items": items
    }

def generar_factura(datos):
    archivo_pdf = "factura.pdf"
    c = canvas.Canvas(archivo_pdf, pagesize=A4)
    
    c.setFont("Helvetica-Bold", 18)
    c.drawString(50, 800, datos['nombre'])
    
    c.setFont("Helvetica-Bold", 16)
    c.drawString(50, 770, "FACTURA")
    c.setFont("Helvetica", 12)
    c.drawString(50, 750, f"Dirección: {datos['direccion']}")
    c.drawString(50, 735, f"Número Impositivo: {datos['numero_impositivo']}")
    c.drawString(50, 720, f"Teléfono: {datos['telefono']}")
    c.drawString(50, 705, f"Email: {datos['email']}")
    
    c.setFont("Helvetica-Bold", 12)
    c.drawString(50, 670, "Facturado a:")
    c.setFont("Helvetica", 12)
    c.drawString(50, 655, f"{datos['empresa_nombre']}")
    c.drawString(50, 640, f"Dirección: {datos['empresa_direccion']}")
    c.drawString(50, 625, f"Número Impositivo: {datos['empresa_numero_impositivo']}")
    c.drawString(50, 610, f"Teléfono: {datos['empresa_telefono']}")
    c.drawString(50, 595, f"Email: {datos['empresa_email']}")
    
    c.setFont("Helvetica-Bold", 12)
    c.drawString(50, 560, "Detalles de Facturación:")
    
    data = [("Descripción", "Monto ($)")]
    total = 0
    for item, monto in datos["items"]:
        data.append((item, f"{monto:.2f}"))
        total += monto
    data.append(("TOTAL", f"{total:.2f}"))
    
    table = Table(data, colWidths=[350, 100])
    table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), colors.grey),
        ('TEXTCOLOR', (0, 0), (-1, 0), colors.whitesmoke),
        ('ALIGN', (0, 0), (-1, 0), 'CENTER'),
        ('FONTNAME', (0, 0), (-1, 0), 'Helvetica-Bold'),
        ('BOTTOMPADDING', (0, 0), (-1, 0), 10),
        ('BACKGROUND', (0, 1), (-1, -1), colors.beige),
        ('GRID', (0, 0), (-1, -1), 1, colors.black),
        ('ALIGN', (0, 1), (-1, -2), 'LEFT'),
        ('FONTNAME', (-2, -1), (-1, -1), 'Helvetica-Bold')
    ]))
    table.wrapOn(c, 50, 450)
    table.drawOn(c, 50, 450)
    
    c.setFont("Helvetica-Bold", 12)
    c.drawString(50, 400, "Datos Bancarios:")
    c.setFont("Helvetica", 12)
    c.drawString(50, 385, f"Banco: {datos['banco_nombre']}")
    c.drawString(50, 370, f"Número de Cuenta: {datos['banco_cuenta']}")
    c.drawString(50, 355, f"CBU: {datos['banco_cbu']}")
    
    c.save()
    print(f"Factura generada exitosamente: {archivo_pdf}")

datos = solicitar_datos()
generar_factura(datos)

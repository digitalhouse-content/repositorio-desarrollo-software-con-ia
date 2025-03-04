import { useState } from "react";
import "./styles.css";

const mockTasks = [
  { nombre: "Implementar autenticación de usuarios", descripcion: "Crear el sistema de login y registro con JWT", dificultad: "Difícil", gasto: 80, prioridad: "Alta" },
  { nombre: "Rediseñar la página principal", descripcion: "Actualizar el diseño de la página de inicio para mejorar la UX", dificultad: "Media", gasto: 40, prioridad: "Alta" },
  { nombre: "Optimizar consultas a la base de datos", descripcion: "Refactorizar las consultas más pesadas para mejorar el rendimiento", dificultad: "Difícil", gasto: 70, prioridad: "Alta" },
  { nombre: "Escribir pruebas unitarias", descripcion: "Desarrollar pruebas unitarias para los componentes críticos del sistema", dificultad: "Fácil", gasto: 20, prioridad: "Media" },
  { nombre: "Actualizar dependencias del proyecto", descripcion: "Actualizar todas las dependencias de npm a las últimas versiones", dificultad: "Fácil", gasto: 15, prioridad: "Baja" },
  { nombre: "Desarrollar API RESTful", descripcion: "Crear los endpoints necesarios para la funcionalidad del proyecto", dificultad: "Media", gasto: 60, prioridad: "Alta" },
  { nombre: "Arreglar error en el sistema de pagos", descripcion: "Solucionar un bug crítico en el proceso de pago en la plataforma", dificultad: "Difícil", gasto: 100, prioridad: "Alta" },
  { nombre: "Configurar CI/CD", descripcion: "Implementar un pipeline de integración continua y despliegue automático", dificultad: "Media", gasto: 50, prioridad: "Media" },
  { nombre: "Refactorizar clase de usuario", descripcion: "Reestructurar la clase de usuario para mejorar la mantenibilidad", dificultad: "Fácil", gasto: 30, prioridad: "Media" },
  { nombre: "Crear documentación para API", descripcion: "Escribir la documentación necesaria para los endpoints creados", dificultad: "Fácil", gasto: 25, prioridad: "Baja" },
  { nombre: "Realizar auditoría de seguridad", descripcion: "Revisar el sistema en busca de vulnerabilidades y posibles brechas de seguridad", dificultad: "Difícil", gasto: 120, prioridad: "Alta" },
  { nombre: "Integración con servicio de pagos", descripcion: "Conectar la aplicación con el servicio externo de pagos", dificultad: "Media", gasto: 50, prioridad: "Alta" },
  { nombre: "Crear un sistema de notificaciones push", descripcion: "Implementar un sistema de notificaciones push para los usuarios", dificultad: "Media", gasto: 45, prioridad: "Media" },
  { nombre: "Arreglar diseño de la interfaz móvil", descripcion: "Realizar ajustes en el diseño para que la interfaz sea más amigable en dispositivos móviles", dificultad: "Fácil", gasto: 35, prioridad: "Baja" },
  { nombre: "Optimizar carga de imágenes", descripcion: "Modificar la carga de imágenes para que no impacte en la velocidad de la página", dificultad: "Media", gasto: 40, prioridad: "Baja" },
  { nombre: "Crear un sistema de roles y permisos", descripcion: "Desarrollar un sistema que permita asignar roles y permisos a los usuarios", dificultad: "Difícil", gasto: 90, prioridad: "Alta" },
  { nombre: "Establecer sistema de logging", descripcion: "Configurar el sistema de logging para capturar errores y eventos importantes", dificultad: "Media", gasto: 55, prioridad: "Media" },
  { nombre: "Refactorizar código de frontend", descripcion: "Reestructurar el código del frontend para mejorar su legibilidad y eficiencia", dificultad: "Fácil", gasto: 25, prioridad: "Baja" },
  { nombre: "Implementar almacenamiento en caché", descripcion: "Crear un sistema de caché para mejorar la performance de la app", dificultad: "Difícil", gasto: 85, prioridad: "Media" },
  { nombre: "Configurar bases de datos de pruebas", descripcion: "Configurar y poblar bases de datos para pruebas automáticas", dificultad: "Fácil", gasto: 20, prioridad: "Baja" },
  { nombre: "Desplegar aplicación en servidor de producción", descripcion: "Configurar el servidor de producción y desplegar la aplicación", dificultad: "Media", gasto: 60, prioridad: "Alta" },
  { nombre: "Crear un sistema de reportes", descripcion: "Desarrollar un sistema de reportes para que los usuarios puedan ver estadísticas", dificultad: "Difícil", gasto: 75, prioridad: "Alta" },
  { nombre: "Integrar con servicio de geolocalización", descripcion: "Conectar la app con un servicio de geolocalización para mostrar ubicaciones", dificultad: "Media", gasto: 45, prioridad: "Media" },
  { nombre: "Crear un sistema de chat en tiempo real", descripcion: "Implementar un chat en tiempo real para que los usuarios puedan comunicarse", dificultad: "Difícil", gasto: 80, prioridad: "Alta" },
  { nombre: "Desarrollar funcionalidad de carrito de compras", descripcion: "Crear la funcionalidad de carrito de compras para la plataforma de ecommerce", dificultad: "Media", gasto: 55, prioridad: "Alta" },
  { nombre: "Optimizar carga de scripts", descripcion: "Modificar la carga de scripts para mejorar el tiempo de carga de la página", dificultad: "Fácil", gasto: 30, prioridad: "Media" },
  { nombre: "Crear un sistema de recomendaciones", descripcion: "Desarrollar un sistema de recomendaciones para los usuarios basado en sus preferencias", dificultad: "Difícil", gasto: 70, prioridad: "Alta" },
  { nombre: "Establecer sistema de backups automáticos", descripcion: "Configurar un sistema de backups automáticos para evitar pérdida de datos", dificultad: "Media", gasto: 50, prioridad: "Media" },
  { nombre: "Refactorizar código de backend", descripcion: "Reestructurar el código del backend para mejorar su mantenibilidad", dificultad: "Fácil", gasto: 25, prioridad: "Baja" },
  { nombre: "Crear un sistema de encuestas", descripcion: "Desarrollar un sistema de encuestas para recopilar feedback de los usuarios", dificultad: "Difícil", gasto: 65, prioridad: "Alta" },
  { nombre: "Integrar con servicio de email marketing", descripcion: "Conectar la aplicación con un servicio de email marketing para enviar newsletters", dificultad: "Media", gasto: 45, prioridad: "Media" },
  { nombre: "Crear un sistema de gestión de tareas", descripcion: "Desarrollar un sistema de gestión de tareas para organizar el trabajo del equipo", dificultad: "Difícil", gasto: 75, prioridad: "Crítica" },
  { nombre: "Configurar sistema de notificaciones por email", descripcion: "Configurar un sistema de notificaciones por email para informar a los usuarios", dificultad: "Media", gasto: 55, prioridad: "Crítica" }
];


export default function TaskApp() {
  const [filters, setFilters] = useState(
    {
      nombre: "",
      descripcion: "",
      dificultad: "",
      maxGasto: "",
      prioridad: ""
    });
  const [filteredTasks, setFilteredTasks] = useState(mockTasks);

  const handleFilter = () => {
    setFilteredTasks(
      mockTasks.filter((task) =>
        (filters.nombre === "" || task.nombre.toLowerCase().includes(filters.nombre.toLowerCase())) &&
        (filters.descripcion === "" || task.descripcion.toLowerCase().includes(filters.descripcion.toLowerCase())) &&
        (filters.dificultad === "" || task.dificultad === filters.dificultad) &&
        (filters.maxGasto === "" || task.gasto <= Number(filters.maxGasto)) &&
        (filters.prioridad === "" || task.prioridad === filters.prioridad)
      )
    );
  };

  const handleOnlyCritical = () => {
    setFilteredTasks(
      mockTasks.filter((task) => task.prioridad === "Crítica")
    );
  };

  const clearFilters = () => {
    setFilters({
      nombre: "",
      descripcion: "",
      dificultad: "",
      maxGasto: "",
      prioridad: ""
    });
    setFilteredTasks(mockTasks);
  };

  return (
    <div className="container">
      <div className="filters">
        <input
          type="text"
          placeholder="Buscar por nombre"
          value={filters.nombre}
          onChange={(e) => setFilters({ ...filters, nombre: e.target.value })}
        />
        <input
          type="text"
          placeholder="Buscar por descripción"
          value={filters.descripcion}
          onChange={(e) => setFilters({ ...filters, descripcion: e.target.value })}
        />
        <select value={filters.dificultad} onChange={(e) => setFilters({ ...filters, dificultad: e.target.value })}>
          <option value="">Todas las dificultades</option>
          <option value="Fácil">Fácil</option>
          <option value="Media">Media</option>
          <option value="Difícil">Difícil</option>
        </select>
        <input
          type="number"
          placeholder="Máximo gasto"
          value={filters.maxGasto}
          onChange={(e) => setFilters({ ...filters, maxGasto: e.target.value })}
        />
        <select value={filters.prioridad} onChange={(e) => setFilters({ ...filters, prioridad: e.target.value })}>
          <option value="">Todas las prioridades</option>
          <option value="Crítica">Crítica</option>
          <option value="Alta">Alta</option>
          <option value="Media">Media</option>
          <option value="Baja">Baja</option>
        </select>
        <button onClick={handleFilter} className="filter-btn">Filtrar</button>
        <button onClick={handleOnlyCritical} className="critical-btn">Sólo críticas</button>
        <button onClick={clearFilters} className="clear-btn">Clear</button>
      </div>
      <table className="task-table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Dificultad</th>
            <th>Gasto</th>
            <th>Prioridad</th>
          </tr>
        </thead>
        <tbody>
          {filteredTasks.map((task, index) => (
            <tr key={index}>
              <td>{task.nombre}</td>
              <td>{task.descripcion}</td>
              <td>{task.dificultad}</td>
              <td>{task.gasto}</td>
              <td>{task.prioridad}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
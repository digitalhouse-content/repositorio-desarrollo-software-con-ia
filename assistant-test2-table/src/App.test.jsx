import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom'; 
import App from './App';

test('renderiza la tabla de tareas', () => {
  render(<App />);
  const tableElement = screen.getByRole('table');
  expect(tableElement).toBeInTheDocument();
});

test('renderiza el campo de búsqueda', () => {
  render(<App />);
  const inputElement = screen.getByPlaceholderText('Buscar por nombre');
  expect(inputElement).toBeInTheDocument();
});

test('filtra las tareas por nombre', () => {
  render(<App />);
  const inputElement = screen.getByPlaceholderText('Buscar por nombre');
  fireEvent.change(inputElement, { target: { value: 'autenticación' } });
  const filteredTask = screen.getByText('Implementar autenticación de usuarios');
  expect(filteredTask).toBeInTheDocument();
});

test('muestra todas las tareas cuando se borra el campo de búsqueda', () => {
  render(<App />);
  const inputElement = screen.getByPlaceholderText('Buscar por nombre');
  fireEvent.change(inputElement, { target: { value: 'autenticación' } });
  fireEvent.change(inputElement, { target: { value: '' } });
  const allTasks = screen.getAllByRole('row');
  expect(allTasks.length).toBeGreaterThan(1); 
});

test('filtra las tareas por dificultad', () => {
  render(<App />);
  const selectElement = screen.getByDisplayValue('Todas las dificultades');
  fireEvent.change(selectElement, { target: { value: 'Fácil' } });
  const filterButton = screen.getByText('Filtrar');
  fireEvent.click(filterButton);
  const easyTasks = screen.getAllByText('Fácil');
  expect(easyTasks.length).toBeGreaterThan(0);
});

test('filtra las tareas por descripción', () => {
  render(<App />);
  const inputElement = screen.getByPlaceholderText('Buscar por descripción');
  
  // Primero aplicamos el filtro
  act(() => {
    fireEvent.change(inputElement, { target: { value: 'endpoints' } });
  });
  
  // Luego hacemos clic en el botón de filtrar
  act(() => {
    fireEvent.click(screen.getByText('Filtrar'));
  });
  
  // Verificamos que las tareas filtradas contienen el texto
  const filteredTasks = screen.getAllByText(/endpoints/i);
  expect(filteredTasks.length).toBeGreaterThan(0);
});

test('filtra las tareas por gasto máximo', () => {
  render(<App />);
  const inputElement = screen.getByPlaceholderText('Máximo gasto');
  fireEvent.change(inputElement, { target: { value: '30' } });
  const filterButton = screen.getByText('Filtrar');
  fireEvent.click(filterButton);
  const taskRows = screen.getAllByRole('row');
  const taskCells = screen.getAllByRole('cell');
  const gastos = taskCells.filter(cell => !isNaN(Number(cell.textContent))).map(cell => Number(cell.textContent));
  expect(gastos.every(gasto => gasto <= 30)).toBe(true);
});

test('muestra solo tareas críticas', () => {
  render(<App />);
  const criticalButton = screen.getByText('Sólo críticas');
  fireEvent.click(criticalButton);
  const criticalTasks = screen.getAllByText('Crítica');
  expect(criticalTasks.length).toBeGreaterThan(0);
});

test('limpia todos los filtros', () => {
  render(<App />);
  // Aplicar algunos filtros primero
  const inputElement = screen.getByPlaceholderText('Buscar por nombre');
  fireEvent.change(inputElement, { target: { value: 'API' } });
  const filterButton = screen.getByText('Filtrar');
  fireEvent.click(filterButton);
  
  // Limpiar filtros
  const clearButton = screen.getByText('Clear');
  fireEvent.click(clearButton);
  
  // Verificar que se muestran todas las tareas
  const allTasks = screen.getAllByRole('row');
  // El número de filas debe ser mayor que 30 (contando el encabezado)
  expect(allTasks.length).toBeGreaterThan(30);
});
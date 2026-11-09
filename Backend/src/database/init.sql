-- Categorias
CREATE TABLE IF NOT EXISTS categorias (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL UNIQUE
);

-- Productos
CREATE TABLE IF NOT EXISTS productos (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(120) NOT NULL,
    precio NUMERIC(10,2) NOT NULL CHECK (precio >= 0),
    stock INTEGER NOT NULL DEFAULT 0 CHECK (stock >= 0),
    activo BOOLEAN NOT NULL DEFAULT TRUE,
    fecha_ingreso DATE NOT NULL DEFAULT CURRENT_DATE,
    categoria_id INTEGER NOT NULL REFERENCES categorias(id) ON DELETE CASCADE
);


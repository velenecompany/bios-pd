-- Usuarios
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  first_name VARCHAR(100),
  last_name VARCHAR(100),
  created_at TIMESTAMP DEFAULT NOW()
);

-- Productos
CREATE TABLE IF NOT EXISTS products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  description TEXT,
  price INTEGER NOT NULL,
  image_url VARCHAR(500),
  stock INTEGER DEFAULT 0,
  active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Órdenes
CREATE TABLE IF NOT EXISTS orders (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  stripe_session_id VARCHAR(255) UNIQUE,
  status VARCHAR(50) DEFAULT 'pending',
  total INTEGER NOT NULL,
  shipping_address JSONB,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Items de orden
CREATE TABLE IF NOT EXISTS order_items (
  id SERIAL PRIMARY KEY,
  order_id INTEGER REFERENCES orders(id),
  product_id INTEGER REFERENCES products(id),
  quantity INTEGER NOT NULL,
  unit_price INTEGER NOT NULL
);

-- Aplicaciones de distribuidores
CREATE TABLE IF NOT EXISTS partner_applications (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50),
  city VARCHAR(100),
  message TEXT,
  status VARCHAR(50) DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT NOW()
);

-- Seed productos
INSERT INTO products (name, slug, description, price, stock) VALUES
  ('Vinagre de Manzana', 'vinagre-de-manzana', 'Fermentado naturalmente con manzanas seleccionadas. Con la madre viva. Sin conservadores.', 8900, 100),
  ('Aceite de Coco Virgen', 'aceite-de-coco-virgen', 'Prensado en frío. Sin refinar. Conserva todos sus nutrientes naturales y aroma original.', 12900, 80),
  ('Kit Bienestar', 'kit-bienestar', 'Vinagre de Manzana + Aceite de Coco. La rutina natural completa. Envío incluido.', 18900, 50)
ON CONFLICT (slug) DO NOTHING;

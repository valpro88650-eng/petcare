// config.js
// Isole les paramètres de connexion Supabase (SUPABASE_URL et SUPABASE_ANON_KEY).
// Ne sera jamais écrasé lors des mises à jour de l'interface.

const CONFIG = {
    // Remplace par tes identifiants de projet Supabase (Settings > API)
    SUPABASE_URL: 'https://pzpbrfjcrxmtftobxnla.supabase.co',
    SUPABASE_ANON_KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB6cGJyZmpjcnhtdGZ0b2J4bmxhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODk4NDQyMDgsImV4cCI6MjEwNTQyMDIwOH0.GvzSqFe6LFjIdfVyIoqQSIeqYs3kiRkAXZq3t2MTmv0',
    
    // Informations de l'application
    APP_NAME: 'PetCare PWA',
    APP_VERSION: '1.0.0'config
};

// Exportation globale pour index.html
window.AppConfig = CONFIG;
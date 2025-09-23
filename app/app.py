import os
from flask import Flask
from flask_cors import CORS
from src.api.routes import api_bp

app = Flask(__name__)

# Production CORS settings
if os.environ.get('FLASK_ENV') == 'production':
    # Production origins - update with your actual Vercel URL
    CORS(app, origins=[
        'https://himasi-unas.vercel.app',  # Your Vercel domain
        'https://your-domain.com'         # Your custom domain if any
    ])
else:
    # Development CORS
    CORS(app, origins=[
        'http://localhost:3000', 
        'http://localhost:3001', 
        'http://localhost:3005', 
        'http://localhost:3006',
        'http://127.0.0.1:3000'
    ])

app.register_blueprint(api_bp)

if __name__ == "__main__":
    port = int(os.environ.get('PORT', 5000))
    debug_mode = os.environ.get('FLASK_ENV') != 'production'
    
    print("🚀 Starting HIMASI UNAS Chatbot Backend...")
    print(f"🌍 Environment: {'Production' if not debug_mode else 'Development'}")
    print(f"🔌 Port: {port}")
    
    app.run(debug=debug_mode, host='0.0.0.0', port=port)
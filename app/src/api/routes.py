from flask import Blueprint, request, jsonify
from flask_cors import cross_origin
from ..chatbot.faq_bot import FAQBot

api_bp = Blueprint('api', __name__, url_prefix='/api')
faq_bot = FAQBot()

@api_bp.route('/test', methods=['GET'])
@cross_origin()
def test():
    return jsonify({'status': 'OK', 'message': 'Backend is running!'})

@api_bp.route('/chat', methods=['POST', 'OPTIONS'])
@cross_origin()
def chat():
    if request.method == 'OPTIONS':
        # Handle preflight request
        response = jsonify({'status': 'OK'})
        response.headers.add('Access-Control-Allow-Origin', '*')
        response.headers.add('Access-Control-Allow-Headers', 'Content-Type')
        response.headers.add('Access-Control-Allow-Methods', 'POST, OPTIONS')
        return response
        
    print("🔥 API /chat called!")
    data = request.json
    print(f"📝 Received data: {data}")
    user_message = data.get('message')
    print(f"💬 User message: {user_message}")
    
    if not user_message:
        return jsonify({'error': 'No message provided'}), 400

    response = faq_bot.get_response(user_message)
    print(f"🤖 Bot response: {response}")
    result = {'answer': response}
    print(f"📤 Sending result: {result}")
    
    # Add CORS headers to response
    resp = jsonify(result)
    resp.headers.add('Access-Control-Allow-Origin', '*')
    return resp

@api_bp.route('/ask', methods=['POST'])
@cross_origin()
def ask():
    data = request.json
    user_message = data.get('message')
    if not user_message:
        return jsonify({'error': 'No message provided'}), 400

    response = faq_bot.get_response(user_message)
    return jsonify({'response': response})
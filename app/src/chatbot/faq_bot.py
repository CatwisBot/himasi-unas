import json
import os
import re
from difflib import SequenceMatcher

class FAQBot:
    def __init__(self):
        # Load FAQs from the JSON file
        current_dir = os.path.dirname(os.path.abspath(__file__))
        faq_path = os.path.join(current_dir, '..', 'data', 'faqs.json')
        
        try:
            with open(faq_path, 'r', encoding='utf-8') as file:
                data = json.load(file)
                self.faqs = data.get('faqs', [])
                print(f"✅ Loaded {len(self.faqs)} FAQs")
        except Exception as e:
            print(f"❌ Error loading FAQs: {e}")
            self.faqs = []

    def similarity(self, a, b):
        """Calculate similarity between two strings"""
        return SequenceMatcher(None, a.lower(), b.lower()).ratio()

    def get_response(self, question):
        print(f"🔍 Processing question: {question}")
        
        if not question or not question.strip():
            return "Please ask me a question!"

        question_clean = re.sub(r'[^\w\s]', '', question.lower().strip())
        best_match = None
        best_score = 0
        
        # Try exact keyword matching first
        for faq in self.faqs:
            faq_question = faq['question'].lower()
            
            # Check for exact keyword matches
            question_words = question_clean.split()
            faq_words = re.sub(r'[^\w\s]', '', faq_question).split()
            
            # Count matching words
            matches = sum(1 for word in question_words if word in faq_words)
            match_ratio = matches / len(question_words) if question_words else 0
            
            # Also check string similarity
            similarity_score = self.similarity(question_clean, faq_question)
            
            # Combined score (weighted)
            combined_score = (match_ratio * 0.7) + (similarity_score * 0.3)
            
            print(f"📊 FAQ: '{faq['question'][:50]}...' - Score: {combined_score:.2f}")
            
            if combined_score > best_score and combined_score > 0.3:  # Minimum threshold
                best_score = combined_score
                best_match = faq

        if best_match:
            print(f"✅ Best match found with score: {best_score:.2f}")
            return best_match['answer']
        
        print("❌ No suitable match found")
        return "Maaf, saya tidak menemukan jawaban untuk pertanyaan tersebut. Silakan coba dengan kata kunci yang berbeda atau hubungi tim support kami."
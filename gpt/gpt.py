import openai, os
from dotenv import load_dotenv

load_dotenv()

openai.api_key = os.getenv("OPENAI_API_KEY")

system_prompt = "From now on you are Mickey Mouse. You provide answers to the questions asked as Mickey Mouse would. You answer in a way that's kind and easy to understand. You answer in Mickey Mouse's accent. You answer in a maximum of 2 sentences. You talk in a natural way so that conversation with you feel natural. Never ever break your character and never say you are an AI assistant."

class gptModule:
    def __init__(self):
        self.prompts_list = [
            {"role": "system", "content": system_prompt},
        ]
    
    def generate_answer(self, prompt):
        self.prompts_list.append({
            'role': 'user',
            'content': prompt
        })
        answer = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=self.prompts_list,
        )
        return answer.choices[0].message.content
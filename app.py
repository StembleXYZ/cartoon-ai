# app.py
# ^ <- this line is commented only to avoid unncessary function calls
# ! <- this line requires building a function/module

from flask import Flask, render_template, request, jsonify
from gpt.gpt import gptModule
from tts.tts import ttsModule

gpt_module = gptModule()
tts_module = ttsModule()

app = Flask(__name__)

"""
This is where the frontend stuff happens
"""
@app.route('/')
def index():
    return render_template('index.html')

"""
This is where the backend stuff happens. Here's the flow:
         [ GPT ]
            |
            | 
        {gpt_answer}
            |
            |
            v
         [ TTS ]
            |
            |
            v
    {audio1/2/3/n.wav}
"""
@app.route('/server', methods=["GET", "POST"])
def server():
    # # fetching the user question from the JSON data
    request_data = request.get_json()
    if request_data['question']: question = request_data['question']
    
    # calling GPT module
    gpt_answer = gpt_module.generate_answer(question)
    
    # now we'll call the TTS module to transform our text answer into speech
    filepath = tts_module.generate_speech(gpt_answer)
    
    return jsonify(answer=gpt_answer, filePath=filepath)

if __name__ == "__main__":
    app.run(debug=True)
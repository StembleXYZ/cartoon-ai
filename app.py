from flask import Flask, render_template
from tts.tts import text2speech

gpt_answer = 'bruh'

tts_model = text2speech(gpt_answer)
tts_model.generate_speech()

# app = Flask(__name__)

# @app.route('/')
# def index():
#     return render_template('index.html')

# if __name__ == "__main__":
#     app.run(debug=True)
#!/usr/bin/env python3
# * -*- coding: utf-8 -*-
"""
^ Created on Thu Aug 3 11:58PM 2023
^ #TSB - module, class - use a class from a module created in another program
^ @author: BetterCallSaud
"""

from elevenlabs import set_api_key, generate, save
from dotenv import load_dotenv
import os

load_dotenv()

class text2speech:
    def __init__(self):
        # self.characters = []
        # self.voice_message = ""
        self.audio_ctr = 1
        set_api_key(os.getenv("ELEVENLABS_API_KEY"))

    def generate_speech(self, gpt_answer):
        print("Generating speech...")
        audio = generate(
            text=gpt_answer,
            voice="MickeyMouse",
            model="eleven_monolingual_v1",
        )
        save(audio, f"./tts/audio/aud{self.audio_ctr}.wav")
        self.audio_ctr += 1
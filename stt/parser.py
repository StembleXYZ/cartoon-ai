import argparse
import whisper
from sys import platform
import os


whisper_model="tiny"                     #choices=["tiny", "base", "small", "medium", "large"]

parser = argparse.ArgumentParser()
parser.add_argument("--model", default=whisper_model, help="Model to use",
                    choices=["tiny", "base", "small", "medium", "large"])
parser.add_argument("--non_english", action='store_true',
                    help="Don't use the english model.")
parser.add_argument("--energy_threshold", default=1000,
                    help="Energy level for mic to detect.", type=int)
parser.add_argument("--record_timeout", default=2,
                    help="How real time the recording is in seconds.", type=float)
parser.add_argument("--phrase_timeout", default=3,
                    help="How much empty space between recordings before we "
                            "consider it a new line in the transcription.", type=float)  
if 'linux' in platform:
    parser.add_argument("--default_microphone", default='pulse',
                        help="Default microphone name for SpeechRecognition. "
                                "Run this with 'list' to view available Microphones.", type=str)
args = parser.parse_args()

print(args)
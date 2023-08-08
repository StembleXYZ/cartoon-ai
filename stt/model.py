import whisper
import argparse
from tempfile import NamedTemporaryFile


whisper_model="tiny"                     #choices=["tiny", "base", "small", "medium", "large"]

parser = argparse.ArgumentParser()
args = parser.parse_args()

model = "tiny"
if args.model != whisper_model and not args.non_english:
    model = model + ".en"
audio_model = whisper.load_model(model)

# record_timeout = args.record_timeout
# phrase_timeout = args.phrase_timeout

temp_file = NamedTemporaryFile().name
transcription = ['']

with source:
    recorder.adjust_for_ambient_noise(source)

def record_callback(_, audio:sr.AudioData) -> None:
        """
        Threaded callback function to recieve audio data when recordings finish.
        audio: An AudioData containing the recorded bytes.
        """
        # Grab the raw bytes and push it into the thread safe queue.
        data = audio.get_raw_data()
        data_queue.put(data)

    # Create a background thread that will pass us raw audio bytes.
    # We could do this manually but SpeechRecognizer provides a nice helper.
    recorder.listen_in_background(source, record_callback, phrase_time_limit=record_timeout)

    # Cue the user that we're ready to go.
    print("Model loaded.\n")
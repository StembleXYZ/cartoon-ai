import openai

openai.api_key = ""

answer = openai.ChatCompletion.create(model="gpt-3.5-turbo", messages=[{"role": "user", "content": "I want you to act like you are Mickey Mouse. I will ask you questions and you will provide clear and accurate information. Be specific with your answer and avoid adding any unnecessary details in just 2 lines and the answer should easy to understand for kids"}])

print(answer.choices[0].message.content)
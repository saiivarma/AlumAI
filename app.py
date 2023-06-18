import chainlit as cl
import openai
import json

from database import *
from LLM import *



file_path = 'config.json'

with open(file_path, 'r') as file:
    keys = json.load(file) 

openai.api_key = keys['OpenAI']



def student_recommendation(query):

    index = init(keys["Pinecone"],keys['PineconeEnv'])[0]

    ids = similarity_search(index, query, 'Resume')

    path = 'Resume_data'
    docs = fetch_data(ids, path)

    prompt = generate_prompt(query)

    response = llm(openai.api_key,prompt, docs)

    return response



@cl.on_message
async def main(message: str):
    # Your custom logic goes here...
    response = student_recommendation(message)
    # Send a response back to the user
    await cl.Message(
        content=response,
    ).send()
